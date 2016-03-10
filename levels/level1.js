function loadLevel1() {
    Q.scene('level1', new Q.Scene(function(stage) {
        stage.add("world");
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
            x: 725,
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


        //Blocking platform
        stage.insert(new Q.Sprite({
            x: 100,
            y: 0,
            w: 300,
            h: 5,
            angle: 45,
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

        stage.each(function() {
            this.add("physics");
        });

        LevelBuilder.addTarget(stage, 100, -100, 'img/HeartandBalance.svg');
        stage.cannon = LevelBuilder.addCannon(stage, 10, 210);

        stage.viewport(1024, 768);
        stage.centerOn(675, 35);

}))};
