/*
    File Name:             Scene Node 7 - TS|JS File
    Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
    Last Modified Date:    Monday, October 3nd, 2016
    Website Name:          EV - COMP397 - Assignment 1
    Program Description:   JS file that contains the components that
                           are required to render the game's Node 7 scene.
    Revision History:      Set the Initial Node 7 components aka comments, buttons, and scene switches.
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Node7 = (function (_super) {
        __extends(Node7, _super);
        // CONSTRUCTOR
        function Node7() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Node7.prototype.start = function () {
            // Add objects to the scene
            console.log("Node 7 scene started");
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("PLAY NODE 7", "60px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._gameLabel);
            // Create Back Button for scene and add to Game Scene container. Register for onclick event
            this._gameBtnBack = new objects.Button("Return", config.Screen.TOPLEFT_X, config.Screen.TOPLEFT_Y);
            this.addChild(this._gameBtnBack);
            this._gameBtnBack.on("click", this._onBackButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        // Run on every tick
        Node7.prototype.update = function () {
            // Update objects
        };
        // Functions for when button is pressed
        Node7.prototype._choice1ButtonClick = function (event) {
            // Change global scene variable to NODE14. Call global changeScene() function
            scene = config.Scene.NODE14;
            changeScene();
        };
        Node7.prototype._choice2ButtonClick = function (event) {
            // Change global scene variable to NODE15. Call global changeScene() function
            scene = config.Scene.NODE15;
            changeScene();
        };
        Node7.prototype._onBackButtonClick = function (event) {
            // Set global variable to NODE3 Scene and call changescene function
            scene = config.Scene.NODE3;
            changeScene();
        };
        return Node7;
    }(objects.Scene));
    scenes.Node7 = Node7;
})(scenes || (scenes = {}));
//# sourceMappingURL=node7.js.map