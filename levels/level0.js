function loadLevel0() {
    Q.scene('level0', new Q.Scene(function(stage) {
        targetCount = 0;
        stage.add("world");
        // Floor
        stage.insert(new Q.Sprite({
            x: 250,
            y: 250,
            w: 1200,
            h: 50,
            type: "static"
        }))

        // Right wall
        stage.insert(new Q.Sprite({
            x: 600,
            y: 25,
            w: 5,
            h: 800,
            color: "#cccccc",
            type: "static"
        }))

        // Left wall
        stage.insert(new Q.Sprite({
            x: -100,
            y: 25,
            w: 5,
            h: 800,
            color: "#cccccc",
            type: "static"
        }))

        stage.insert(new Q.Sprite({
            w: 10,
            h: 50,
            x: 500,
            y: 200
        }));
        stage.insert(new Q.Sprite({
            w: 10,
            h: 50,
            x: 550,
            y: 200
        }));
        stage.insert(new Q.Sprite({
            w: 70,
            h: 10,
            x: 525,
            y: 170
        }));
        stage.insert(new Q.Sprite({
            w: 10,
            h: 50,
            x: 500,
            y: 130
        }));
        stage.insert(new Q.Sprite({
            w: 10,
            h: 50,
            x: 550,
            y: 130
        }));
        stage.insert(new Q.Sprite({
            w: 70,
            h: 10,
            x: 525,
            y: 110
        }));

        stage.insert(new Q.Sprite({
            points: [
                [0, 0],
                [50, -50],
                [150, -50],
                [200, 0]
            ],
            x: 200,
            y: 225,
            type: 'static',
            shape: 'polygon'
        }));

        stage.insert(new Q.Sprite({
            w: 50,
            h: 50,
            x: 300,
            y: 150
        }));
        stage.insert(new Q.Sprite({
            w: 25,
            h: 25,
            x: 300,
            y: 115
        }));

        stage.each(function() {
            this.add("physics");
        });

        LevelBuilder.addTarget(stage, 400, 190, 'img/PlayAsaTeam.svg');
        stage.cannon = LevelBuilder.addCannon(stage, 10, 210);

        stage.viewport(600, 400);
        stage.centerOn(300, 200);

}))};
