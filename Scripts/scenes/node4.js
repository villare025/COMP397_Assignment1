/*
    File Name:             Scene Node 4 - TS|JS File
    Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino
    Last Modified Date:    Monday, October 3nd, 2016
    Website Name:          EV - COMP397 - Assignment 1
    Program Description:   JS file that contains the components that
                           are required to render the game's Node 4 scene.
    Revision History:      Set the Node 4 Switch Button.
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Node4 = (function (_super) {
        __extends(Node4, _super);
        // CONSTRUCTOR
        function Node4() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Node4.prototype.start = function () {
            // Add objects to the scene
            console.log("Node 4 scene started");
            // Create BG for scene and add to Game Scene container
            this._bg = new createjs.Bitmap(assets.getResult("BG_Node4"));
            this.addChild(this._bg);
            // Create Back Button for scene and add to Game Scene container. Register for onclick event
            this._gameBtnBack = new objects.Button("Return", config.Screen.TOPLEFT_X, config.Screen.TOPLEFT_Y);
            this.addChild(this._gameBtnBack);
            this._gameBtnBack.on("click", this._onBackButtonClick, this);
            // Create Switch Button for scene and add to Game Scene container. Register for onclick event
            this._gameBtnSwitch = new objects.Button("Switch", config.Screen.TOPRIGHT_X, config.Screen.TOPRIGHT_Y);
            this.addChild(this._gameBtnSwitch);
            this._gameBtnSwitch.on("click", this._onSwitchButtonClick, this);
            // Create CHOICE 1 Button for scene and add to Game Scene container. Register for onclick event
            this._gameBtnChoice1 = new objects.Button("CHOICE_First", config.Screen.CHOICE1_X, config.Screen.CHOICE1_Y);
            this.addChild(this._gameBtnChoice1);
            this._gameBtnChoice1.on("click", this._choice1ButtonClick, this);
            // Create CHOICE 2 Button for scene and add to Game Scene container. Register for onclick event
            this._gameBtnChoice2 = new objects.Button("CHOICE_Second", config.Screen.CHOICE2_X, config.Screen.CHOICE2_Y);
            this.addChild(this._gameBtnChoice2);
            this._gameBtnChoice2.on("click", this._choice2ButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        // Run on every tick
        Node4.prototype.update = function () {
            // Update objects
        };
        // Functions for when button is pressed
        Node4.prototype._choice1ButtonClick = function (event) {
            // Change global scene variable to NODE8. Call global changeScene() function
            scene = config.Scene.NODE8;
            changeScene();
        };
        Node4.prototype._choice2ButtonClick = function (event) {
            // Change global scene variable to NODE9. Call global changeScene() function
            scene = config.Scene.NODE9;
            changeScene();
        };
        Node4.prototype._onBackButtonClick = function (event) {
            // Set global variable to NODE2 Scene and call changescene function
            scene = config.Scene.NODE2;
            changeScene();
        };
        Node4.prototype._onSwitchButtonClick = function (event) {
            // Set global variable to NODE5 Scene and call changescene function
            scene = config.Scene.NODE5;
            changeScene();
        };
        return Node4;
    }(objects.Scene));
    scenes.Node4 = Node4;
})(scenes || (scenes = {}));
//# sourceMappingURL=node4.js.map