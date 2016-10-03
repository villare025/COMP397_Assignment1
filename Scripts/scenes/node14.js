/*
    File Name:             Scene Node 14 - TS|JS File
    Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
    Last Modified Date:    Monday, October 3nd, 2016
    Website Name:          EV - COMP397 - Assignment 1
    Program Description:   JS file that contains the components that
                           are required to render the game's Node 14 scene.
    Revision History:      Set the Node 14 GameOver Button.
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Node14 = (function (_super) {
        __extends(Node14, _super);
        // CONSTRUCTOR
        function Node14() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Node14.prototype.start = function () {
            // Add objects to the scene
            console.log("Node 14 scene started");
            // Create BG for scene and add to Game Scene container
            this._bg = new createjs.Bitmap(assets.getResult("BG_Node14"));
            this.addChild(this._bg);
            // Create BACK Button for scene and add to Game Scene container. Register for onclick event
            this._gameBtnBack = new objects.Button("Return", config.Screen.TOPLEFT_X, config.Screen.TOPLEFT_Y);
            this.addChild(this._gameBtnBack);
            this._gameBtnBack.on("click", this._onBackButtonClick, this);
            // Create GAME OVER Button for scene and add to Game Scene container. Register for onclick event
            this._gameBtnOver = new objects.Button("BadEnd", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._gameBtnOver);
            this._gameBtnOver.on("click", this._onGameOverButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        // Run on every tick
        Node14.prototype.update = function () {
            // Update objects
        };
        // Functions for when button is pressed
        Node14.prototype._onBackButtonClick = function (event) {
            // Change global scene variable to NODE7. Call global changeScene() function
            scene = config.Scene.NODE7;
            changeScene();
        };
        Node14.prototype._onGameOverButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        };
        return Node14;
    }(objects.Scene));
    scenes.Node14 = Node14;
})(scenes || (scenes = {}));
//# sourceMappingURL=node14.js.map