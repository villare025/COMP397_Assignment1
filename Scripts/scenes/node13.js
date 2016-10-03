/*
    File Name:             Scene Node 13 - TS|JS File
    Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
    Last Modified Date:    Monday, October 3nd, 2016
    Website Name:          EV - COMP397 - Assignment 1
    Program Description:   JS file that contains the components that
                           are required to render the game's Node 13 scene.
    Revision History:      Set the Initial Node 13 components aka comments, buttons, and scene switches.
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Node13 = (function (_super) {
        __extends(Node13, _super);
        // CONSTRUCTOR
        function Node13() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Node13.prototype.start = function () {
            // Add objects to the scene
            console.log("Node 13 scene started");
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("PLAY NODE 13", "60px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._gameLabel);
            // Create BACK Button for scene and add to Game Scene container. Register for onclick event
            this._gameBtnBack = new objects.Button("Return", config.Screen.TOPLEFT_X, config.Screen.TOPLEFT_Y);
            this.addChild(this._gameBtnBack);
            this._gameBtnBack.on("click", this._onBackButtonClick, this);
            // Create GAME OVER Button for scene and add to Game Scene container. Register for onclick event
            this._gameBtnOver = new objects.Button("Back", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._gameBtnOver);
            this._gameBtnOver.on("click", this._onBackButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        // Run on every tick
        Node13.prototype.update = function () {
            // Update objects
        };
        // Functions for when button is pressed
        Node13.prototype._onBackButtonClick = function (event) {
            // Change global scene variable to NODE6. Call global changeScene() function
            scene = config.Scene.NODE6;
            changeScene();
        };
        Node13.prototype._onGameOverButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        };
        return Node13;
    }(objects.Scene));
    scenes.Node13 = Node13;
})(scenes || (scenes = {}));
//# sourceMappingURL=node13.js.map