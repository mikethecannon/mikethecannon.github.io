
SHOOT_TIMER_SECONDS = 1;

window.addEventListener('load', function(e) {

    state = {};
    state.level = 0;

    var Q = window.Q = Quintus()
        .include('Input,Sprites,Scenes,SVG,Physics')
        .svgOnly()
        .setup('quintus', {
            maximize: true
        })


    Q.Sprite.extend('CannonBall', {
        init: function(props) {
            this._super({
                shape: 'circle',
                color: 'black',
                r: 15,
                restitution: 0.5,
                density: 4,
                x: props.dx * 50 + 10,
                y: props.dy * 50 + 210,
                seconds: 30
            });
            this.add('physics');
            this.on('step', this, 'countdown');
        },

        countdown: function(dt) {
            this.p.seconds -= dt;
            if (this.p.seconds < 0) {
                this.destroy();
            } else if (this.p.seconds < 1) {
                this.set({
                    "fill-opacity": this.p.seconds
                });
            }
        }
    });
    Q.Sprite.extend('CannonImg', {
      init: function(props) {
        this._super({
          shape: 'image',
          asset: 'img/mcb-rotate.svg',
          x: 8,
          y: 210,
          cx: 5,
          cy: 40,
          w: 95,
          h: 66
        });
        this.target = props.target;
        this.on('step', this, 'matchTarget');
      },
      matchTarget: function(dt) {
        this.p.angle = this.target.p.angle;
      }
    });
    Q.Sprite.extend('Cannon', {
        init: function(props) {
            this._super({
                shape: 'polygon',
                color: 'rgba(0,0,0,0)',
                points: [
                    [0, 0],
                    [0, -5],
                    [5, -10],
                    [8, -11],
                    [40, -11],
                    [40, 11],
                    [8, 11],
                    [5, 10],
                    [0, 5]
                ],
                x: props.x,
                y: props.y,
            });
            this.fireVelocity = 1000;
            this.canShootTimer = SHOOT_TIMER_SECONDS;
            this.on('step', this, 'increaseShootTimer');
        },

        increaseShootTimer: function(dt) {
            this.canShootTimer += dt;
        },

        fire: function() {
            // Can't fire away yet, got ships to board.
            if (this.canShootTimer < SHOOT_TIMER_SECONDS) {
                return
            }

            var dx = Math.cos(this.p.angle / 180 * Math.PI),
                dy = Math.sin(this.p.angle / 180 * Math.PI),
                ball = new Q.CannonBall({
                    dx: dx,
                    dy: dy,
                    angle: this.p.angle
                });
            Q.stage().insert(ball);
            ball.physics.velocity(dx * this.fireVelocity, dy * this.fireVelocity);
            this.canShootTimer = 0;
        }
    });

    Q.Sprite.extend('Target', {
        init: function(props) {
            this._super(Q._extend(props, {
                shape: 'circle',
                color: 'rgba(0,0,0,0)',
                r: 8,
                type: 'static'
            }));
            this.add('physics');
            this.on('contact', this, 'checkHit');
        },

        checkHit: function(sprite) {
            // If we're moving fast enough #movefastandbreakthings.
            var v = sprite.physics._body.GetLinearVelocity()

            if (v.x * v.x + v.y * v.y > 25) {
                this.destroy();
                state.level++;
                Q.stageScene('level' + state.level);
            }
        }
    });

    var cannonMove = function(e) {
      if (!Q.stage(0).cannon) { return; }
        var stage = Q.stage(0);
        var cannon = stage.cannon,
            touch = e.changedTouches ?
            e.changedTouches[0] : e,
            point = stage.browserToWorld(touch.pageX, touch.pageY);

        var angle = Math.atan2(point.y - cannon.p.y,
            point.x - cannon.p.x);
        angle = angle * 180 / Math.PI;
        if (angle > 8 && angle > 0) { angle = 7; }
        if (angle < -100 && angle < 0) { angle = -100; }
        cannon.p.angle = angle;
        e.preventDefault();
    };

    Q._each(["touchstart", "mousemove", "touchmove"], function(evt) {
        Q.wrapper.addEventListener(evt, cannonMove);
    }, this);

    var canonFire = function(e) {
        if (!Q.stage(0).cannon) { return; }
        Q.stage(0).cannon.fire();
        e.preventDefault();
    }
    Q._each(["touchend", "mouseup"], function(evt) {
        Q.wrapper.addEventListener(evt, canonFire);
    });


    var intro = loadIntro();
    Q.stageScene(intro);

});
