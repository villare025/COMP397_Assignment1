/*
    Module to store globally accessible values and states for the game.
*/
var config;
(function (config) {
    var Scene = (function () {
        function Scene() {
        }
        Scene.MENU = 0;
        Scene.NODE1 = 1;
        Scene.NODE2 = 2;
        Scene.NODE3 = 3;
        Scene.NODE4 = 4;
        Scene.NODE5 = 5;
        Scene.NODE6 = 6;
        Scene.NODE7 = 7;
        Scene.NODE8 = 8;
        Scene.NODE9 = 9;
        Scene.NODE10 = 10;
        Scene.NODE11 = 11;
        Scene.NODE12 = 12;
        Scene.NODE13 = 13;
        Scene.NODE14 = 14;
        Scene.NODE15 = 15;
        Scene.OVER = 16;
        Scene.GAME = 17;
        return Scene;
    }());
    config.Scene = Scene;
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 640;
        Screen.HEIGHT = 480;
        Screen.CENTER_X = 320;
        Screen.CENTER_Y = 240;
        Screen.TOPLEFT_X = 90;
        Screen.TOPLEFT_Y = 40;
        return Screen;
    }());
    config.Screen = Screen;
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    }());
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=config.js.map