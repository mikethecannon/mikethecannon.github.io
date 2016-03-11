function loadLevel4() {
    Q.scene('level4', new Q.Scene(function(stage) {
        stage.add("world");

        stage.insert(new Q.Sprite({
            x: -675+1024/2,
            y: -35-768/2,
            w: 1024,
            h: 768,
            shape: 'image',
            asset: 'img/mcb-level-art.svg'
        }));

        // Floor
        stage.insert(new Q.Sprite({
            x: 250,
            y: 250,
            w: 960,
            h: 50,
            type: "static"
        }))

        // Right wall
        stage.insert(new Q.Sprite({
            x: 700,
            y: -100,
            w: 5,
            h: 650,
            color: "#333333",
            type: "static"
        }))

        // Left wall
        stage.insert(new Q.Sprite({
            x: -100,
            y: -100,
            w: 5,
            h: 650,
            color: "#333333",
            type: "static"
        }))


        stage.insert(new Q.Sprite({
            w: 10,
            h: 50,
            x: 300,
            y: 80
        }));
        stage.insert(new Q.Sprite({
            w: 10,
            h: 50,
            x: 350,
            y: 80
        }));
        stage.insert(new Q.Sprite({
            w: 70,
            h: 10,
            x: 325,
            y: 40
        }));


        stage.insert(new Q.Sprite({
            w: 10,
            h: 50,
            x: 300,
            y: 200
        }));
        stage.insert(new Q.Sprite({
            w: 10,
            h: 50,
            x: 350,
            y: 200
        }));
        stage.insert(new Q.Sprite({
            w: 70,
            h: 10,
            x: 325,
            y: 170
        }));

        stage.insert(new Q.Sprite({
            w: 10,
            h: 50,
            x: 300,
            y: 130
        }));
        stage.insert(new Q.Sprite({
            w: 10,
            h: 50,
            x: 350,
            y: 130
        }));
        stage.insert(new Q.Sprite({
            w: 70,
            h: 10,
            x: 325,
            y: 110
        }));

        stage.insert(new Q.Sprite({
            w: 10,
            h: 50,
            x: 300,
            y: 130-120
        }));
        stage.insert(new Q.Sprite({
            w: 10,
            h: 50,
            x: 350,
            y: 130-120
        }));
        stage.insert(new Q.Sprite({
            w: 70,
            h: 10,
            x: 325,
            y: 110-120
        }));

        stage.insert(new Q.Sprite({
            w: 50,
            h: 50,
            x: 650,
            y: 150
        }));
        stage.insert(new Q.Sprite({
            w: 25,
            h: 25,
            x: 650,
            y: 115
        }));

        // big box 
        stage.insert(new Q.Sprite({
            w: 250,
            h: 100,
            x: 326,
            y: -80
        }));


        stage.each(function() {
            if (this.p.shape !== 'image') {
                this.add("physics");
            }
        });

        LevelBuilder.addTarget(stage, 530, -80, 'img/Customer.svg');
        stage.cannon = LevelBuilder.addCannon(stage, 10, 210);

        stage.viewport(800, 600);
        stage.centerOn(300, -25);

}))};
