/*
    File Name:             Scene Node 11 - TS|JS File
    Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
    Last Modified Date:    Tuesday, October 4th, 2016
    Website Name:          EV - COMP397 - Assignment 1
    Program Description:   JS file that contains the components that
                           are required to render the game's Node 11 scene.
    Revision History:      Clean-up code.
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Node11 = (function (_super) {
        __extends(Node11, _super);
        // CONSTRUCTOR
        function Node11() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Node11.prototype.start = function () {
            // Add objects to the scene
            console.log("Node 11 scene started");
            // Start Bad Music
            createjs.Sound.stop();
            var bgBad = createjs.Sound.play("MUSIC_Bad");
            bgBad.play({ interrupt: createjs.Sound.INTERRUPT_ANY, loop: -1, volume: 1 });
            // Create BG for scene and add to Game Scene container
            this._bg = new createjs.Bitmap(assets.getResult("BG_Node11"));
            this.addChild(this._bg);
            // Create BACK Button for scene and add to Game Scene container. Register for onclick event
            this._gameBtnBack = new objects.Button("Return", config.Screen.TOPLEFT_X, config.Screen.TOPLEFT_Y);
            this.addChild(this._gameBtnBack);
            this._gameBtnBack.on("click", this._onBackButtonClick, this);
            // Create GAME OVER Button for scene and add to Game Scene container. Register for onclick event
            this._gameBtnOver = new objects.Button("BadEnd", config.Screen.OVER_X, config.Screen.OVER_Y);
            this.addChild(this._gameBtnOver);
            this._gameBtnOver.on("click", this._onGameOverButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        // Run on every tick
        Node11.prototype.update = function () {
            // Update objects
        };
        // Functions for when button is pressed
        Node11.prototype._onBackButtonClick = function (event) {
            // Change global scene variable to NODE5. Call global changeScene() function
            scene = config.Scene.NODE5;
            changeScene();
        };
        Node11.prototype._onGameOverButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        };
        return Node11;
    }(objects.Scene));
    scenes.Node11 = Node11;
})(scenes || (scenes = {}));
//# sourceMappingURL=node11.js.map