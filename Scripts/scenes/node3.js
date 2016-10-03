/*
    File Name:             Scene Node 3 - TS|JS File
    Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
    Last Modified Date:    Monday, October 3nd, 2016
    Website Name:          EV - COMP397 - Assignment 1
    Program Description:   JS file that contains the components that
                           are required to render the game's Node 3 scene.
    Revision History:      Set the Initial Node 3 components aka comments, buttons, and scene switches.
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Node3 = (function (_super) {
        __extends(Node3, _super);
        // CONSTRUCTOR
        function Node3() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Node3.prototype.start = function () {
            // Add objects to the scene
            console.log("Node 3 scene started");
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("PLAY NODE 3", "60px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._gameLabel);
            // Create Back Button for scene and add to Game Scene container. Register for onclick event
            this._gameBtnBack = new objects.Button("Return", config.Screen.TOPLEFT_X, config.Screen.TOPLEFT_Y);
            this.addChild(this._gameBtnBack);
            this._gameBtnBack.on("click", this._onBackButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        // Run on every tick
        Node3.prototype.update = function () {
            // Update objects
        };
        // Functions for when button is pressed
        Node3.prototype._choice1ButtonClick = function (event) {
            // Change global scene variable to NODE6. Call global changeScene() function
            scene = config.Scene.NODE6;
            changeScene();
        };
        Node3.prototype._choice2ButtonClick = function (event) {
            // Change global scene variable to NODE7. Call global changeScene() function
            scene = config.Scene.NODE7;
            changeScene();
        };
        Node3.prototype._onBackButtonClick = function (event) {
            // Set global variable to NODE1 Scene and call changescene function
            scene = config.Scene.NODE1;
            changeScene();
        };
        return Node3;
    }(objects.Scene));
    scenes.Node3 = Node3;
})(scenes || (scenes = {}));
//# sourceMappingURL=node3.js.map