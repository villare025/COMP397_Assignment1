/*
    File Name:             Scene Node 8 - TS|JS File
    Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
    Last Modified Date:    Monday, October 3nd, 2016
    Website Name:          EV - COMP397 - Assignment 1
    Program Description:   JS file that contains the components that
                           are required to render the game's Node 8 scene.
    Revision History:      Set the Node 8 background image with text.
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Node8 = (function (_super) {
        __extends(Node8, _super);
        // CONSTRUCTOR
        function Node8() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Node8.prototype.start = function () {
            // Add objects to the scene
            console.log("Node 8 scene started");
            // Create BG for scene and add to Game Scene container
            this._bg = new createjs.Bitmap(assets.getResult("BG_Node8"));
            this.addChild(this._bg);
            // Create BACK Button for scene and add to Game Scene container. Register for onclick event
            this._gameBtnBack = new objects.Button("Return", config.Screen.TOPLEFT_X, config.Screen.TOPLEFT_Y);
            this.addChild(this._gameBtnBack);
            this._gameBtnBack.on("click", this._onBackButtonClick, this);
            // Create GAME OVER Button for scene and add to Game Scene container. Register for onclick event
            this._gameBtnOver = new objects.Button("GameOver", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._gameBtnOver);
            this._gameBtnOver.on("click", this._onBackButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        // Run on every tick
        Node8.prototype.update = function () {
            // Update objects
        };
        // Functions for when button is pressed
        Node8.prototype._onBackButtonClick = function (event) {
            // Change global scene variable to NODE4. Call global changeScene() function
            scene = config.Scene.NODE4;
            changeScene();
        };
        Node8.prototype._onGameOverButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        };
        return Node8;
    }(objects.Scene));
    scenes.Node8 = Node8;
})(scenes || (scenes = {}));
//# sourceMappingURL=node8.js.map