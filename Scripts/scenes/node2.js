/*
    File Name:             Scene Node 2 - TS|JS File
    Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
    Last Modified Date:    Monday, October 3nd, 2016
    Website Name:          EV - COMP397 - Assignment 1
    Program Description:   JS file that contains the components that
                           are required to render the game's Node 2 scene.
    Revision History:      Set the Initial Node 2 components aka comments, buttons, and scene switches.
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Node2 = (function (_super) {
        __extends(Node2, _super);
        // CONSTRUCTOR
        function Node2() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Node2.prototype.start = function () {
            // Add objects to the scene
            console.log("Node 2 scene started");
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("PLAY NODE 2", "60px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._gameLabel);
            // Create Back Button for scene and add to Game Scene container. Register for onclick event
            this._gameBtnBack = new objects.Button("Return", config.Screen.TOPLEFT_X, config.Screen.TOPLEFT_Y);
            this.addChild(this._gameBtnBack);
            this._gameBtnBack.on("click", this._onBackButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        // Run on every tick
        Node2.prototype.update = function () {
            // Update objects
        };
        // Functions for when button is pressed
        Node2.prototype._choice1ButtonClick = function (event) {
            // Change global scene variable to NODE4. Call global changeScene() function
            scene = config.Scene.NODE4;
            changeScene();
        };
        Node2.prototype._choice2ButtonClick = function (event) {
            // Change global scene variable to NODE5. Call global changeScene() function
            scene = config.Scene.NODE5;
            changeScene();
        };
        Node2.prototype._onBackButtonClick = function (event) {
            // Set global variable to NODE1 Scene and call changescene function
            scene = config.Scene.NODE1;
            changeScene();
        };
        return Node2;
    }(objects.Scene));
    scenes.Node2 = Node2;
})(scenes || (scenes = {}));
//# sourceMappingURL=node2.js.map