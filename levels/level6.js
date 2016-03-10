function loadLevel6() {
    Q.scene('level6', new Q.Scene(function(stage) {
        targetCount = 0;
        stage.add("world");

        stage.insert(new Q.Sprite({
            x: -100,
            y: -250,
            w: 800,
            h: 600,
            shape: 'image',
            asset: 'img/mcb-level-art.svg'
        }));

        // Floor
        stage.insert(new Q.Sprite({
            x: 300,
            y: 293,
            w: 800,
            h: 50,
            cx: 0,
            cy: 0,
            type: "static"
        }))

        // Right wall
        stage.insert(new Q.Sprite({
            x: 700,
            y: 25,
            w: 5,
            h: 585,
            color: "#333333",
            type: "static"
        }))

        // Left wall
        stage.insert(new Q.Sprite({
            x: -100,
            y: 25,
            w: 5,
            h: 585,
            color: "#333333",
            type: "static"
        }))

        stage.each(function() {
            if (this.p.shape !== 'image') {
                this.add("physics");                
            }
        });

        LevelBuilder.addTarget(stage, 400, 190, 'img/PlayAsaTeam.svg');
        stage.cannon = LevelBuilder.addCannon(stage, 10, 260);

        stage.viewport(800, 600);
        stage.centerOn(300, 100);

}))};
