/*
    File Name:             Scene Node 9 - TS|JS File
    Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
    Last Modified Date:    Monday, October 3nd, 2016
    Website Name:          EV - COMP397 - Assignment 1
    Program Description:   JS file that contains the components that
                           are required to render the game's Node 9 scene.
    Revision History:      Set the Node 9 GameOver Button.
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Node9 = (function (_super) {
        __extends(Node9, _super);
        // CONSTRUCTOR
        function Node9() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Node9.prototype.start = function () {
            // Add objects to the scene
            console.log("Node 9 scene started");
            // Create BG for scene and add to Game Scene container
            this._bg = new createjs.Bitmap(assets.getResult("BG_Node9"));
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
        Node9.prototype.update = function () {
            // Update objects
        };
        // Functions for when button is pressed
        Node9.prototype._onBackButtonClick = function (event) {
            // Change global scene variable to NODE4. Call global changeScene() function
            scene = config.Scene.NODE4;
            changeScene();
        };
        Node9.prototype._onGameOverButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        };
        return Node9;
    }(objects.Scene));
    scenes.Node9 = Node9;
})(scenes || (scenes = {}));
//# sourceMappingURL=node9.js.map