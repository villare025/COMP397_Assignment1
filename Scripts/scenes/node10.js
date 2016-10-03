/*
    File Name:             Scene Node 10 - TS|JS File
    Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
    Last Modified Date:    Monday, October 3nd, 2016
    Website Name:          EV - COMP397 - Assignment 1
    Program Description:   JS file that contains the components that
                           are required to render the game's Node 10 scene.
    Revision History:      Set the Initial Node 10 components aka comments, buttons, and scene switches.
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Node10 = (function (_super) {
        __extends(Node10, _super);
        // CONSTRUCTOR
        function Node10() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Node10.prototype.start = function () {
            // Add objects to the scene
            console.log("Node 10 scene started");
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("PLAY NODE 10", "60px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
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
        Node10.prototype.update = function () {
            // Update objects
        };
        // Functions for when button is pressed
        Node10.prototype._onBackButtonClick = function (event) {
            // Change global scene variable to NODE5. Call global changeScene() function
            scene = config.Scene.NODE5;
            changeScene();
        };
        Node10.prototype._onGameOverButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        };
        return Node10;
    }(objects.Scene));
    scenes.Node10 = Node10;
})(scenes || (scenes = {}));
//# sourceMappingURL=node10.js.map