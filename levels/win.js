loadWinScreen = function() {
    var sceneName = "win";
    Q.scene(sceneName, function(stage) {
        stage.insert(new Q.Sprite({
            // IT'S FINE
            x: 0,
            y: -40,
            w: 1024*1.073,
            h: 768*1.10,
            shape: 'image',
            asset: 'img/win-screen.svg'
        }));

    });
    return sceneName;
}
