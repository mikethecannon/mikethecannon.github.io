LevelBuilder = {
    addTarget: function(stage, x, y, atlassianValueImg) {
        stage.insert(new Q.Target({
            x: x,
            y: y
        }));
        stage.insert(new Q.Sprite({
            x: x,
            y: y,
            w: 25,
            h: 25,
            cx: 11,
            cy: 13,
            shape: 'image',
            asset: atlassianValueImg
        }));
        stage.insert(new Q.Sprite({
            x: x,
            y: y,
            w: 30,
            h: 30,
            cx: 14,
            cy: 15,
            shape: 'image',
            asset: 'img/mcb-cage.svg'
        }));
    },

    addCannon: function(stage, x, y) {
        var cannon = stage.insert(new Q.Cannon({
            x: x,
            y: y
        }));
        stage.insert(new Q.CannonImg({'target': cannon}));
        stage.insert(new Q.Sprite({
            shape: 'image',
            asset: 'img/mcb-base.svg',
            x: x,
            y: y,
            w: 50,
            h: 50,
            cx: 12,
            cy: 15
        }));
        return cannon;
    }
};
