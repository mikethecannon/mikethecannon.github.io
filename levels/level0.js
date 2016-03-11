function loadLevel0() {
    Q.scene('level0', new Q.Scene(function(stage) {
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
            type: "static"
        }))

        // Left wall
        stage.insert(new Q.Sprite({
            x: -100,
            y: -100,
            w: 5,
            h: 650,
            type: "static"
        }))

        stage.insert(new Q.Sprite({
            w: 10,
            h: 50,
            x: 500,
            y: 200,
            color: '#8c5b1f'
        }));
        stage.insert(new Q.Sprite({
            w: 10,
            h: 50,
            x: 550,
            y: 200,
            color: '#8c5b1f'
        }));
        stage.insert(new Q.Sprite({
            w: 70,
            h: 10,
            x: 525,
            y: 170,
            color: '#8c5b1f'
        }));
        stage.insert(new Q.Sprite({
            w: 10,
            h: 50,
            x: 500,
            y: 130,
            color: '#8c5b1f'
        }));
        stage.insert(new Q.Sprite({
            w: 10,
            h: 50,
            x: 550,
            y: 130,
            color: '#8c5b1f'
        }));
        stage.insert(new Q.Sprite({
            w: 70,
            h: 10,
            x: 525,
            y: 110,
            color: '#8c5b1f'
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
            y: 150,
            color: '#8c5b1f'
        }));
        stage.insert(new Q.Sprite({
            w: 25,
            h: 25,
            x: 300,
            y: 115,
            color: '#8c5b1f'
        }));

        stage.each(function() {
            if (this.p.shape !== 'image') {
                this.add("physics");                
            }
        }); 

        LevelBuilder.addTarget(stage, 520, 80, 'img/PlayAsaTeam.svg');
        stage.cannon = LevelBuilder.addCannon(stage, 10, 210);

        stage.viewport(800, 600);
        stage.centerOn(300, -25);

}))};
