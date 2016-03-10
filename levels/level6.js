function loadLevel6() {
    Q.scene('level2', new Q.Scene(function(stage) {
        targetCount = 0;
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

        stage.each(function() {
            if (this.p.shape !== 'image') {
                this.add("physics");                
            }
        });

        //LevelBuilder.addTarget(stage, 100, -100, 'img/HeartandBalance.svg');
        stage.cannon = LevelBuilder.addCannon(stage, 10, 210);

        stage.viewport(1024, 768);
        stage.centerOn(675, 35);

}))};
