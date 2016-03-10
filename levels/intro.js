loadIntro = function() {
    var sceneName = "intro;"
    Q.scene(sceneName, function(stage) {
        stage.insert(new Q.Sprite({
            x: 0,
            y: 0,
            w: 1024,
            h: 768,
            shape: 'image',
            asset: 'img/title-screen-4-2.png'
        }));

        var startGameIfEnter = function(e) {
            if (e.keyCode === 13) {
                document.removeEventListener('keydown', startGameIfEnter);
                Q.clearStages();
                loadLevel0();
                loadLevel1();
                loadLevel3();
                loadLevel6();
                Q.stageScene("level0");
            }
        }

        Q.Sprite.extend('IntroText', {
            init: function(props) {
                this._super({
                    x: 380,
                    y: 310,
                    cx: 5,
                    cy: 40,
                    w: 450,
                    h: 44,
                    shape: 'image',
                    asset: 'img/press enter to start.svg'
                });
                this.on('step', this, 'step');
                this.blinkDelay = 0;
                this.blinkOn = true;
                document.addEventListener('keydown', startGameIfEnter);
            },

            step: function(dt) {
                this.blinkDelay += dt;
                if (this.blinkDelay > 1.5) {
                    this.set({opacity: this.blinkOn ? 0 : 1});
                    this.blinkDelay = 0;
                    this.blinkOn = !this.blinkOn;
                }
            }
        });

        stage.insert(new Q.IntroText());
    });
    return sceneName;
}
