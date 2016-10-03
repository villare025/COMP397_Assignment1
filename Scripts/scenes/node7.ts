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

module scenes {
    export class Node7 extends objects.Scene {

        // PRIVATE VARIABLES
        private _gameBtnBack: objects.Button;
        private _gameLabel: objects.Label;
        private _gameBtnChoice1: objects.Button;
        private _gameBtnChoice2: objects.Button;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start(): void {
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
        }

        // Run on every tick
        public update(): void {
            // Update objects
        }

        // Functions for when button is pressed
        private _choice1ButtonClick(event: createjs.MouseEvent) {
            // Change global scene variable to NODE14. Call global changeScene() function
            scene = config.Scene.NODE14;
            changeScene();
        }
        private _choice2ButtonClick(event: createjs.MouseEvent) {
            // Change global scene variable to NODE15. Call global changeScene() function
            scene = config.Scene.NODE15;
            changeScene();
        }
        private _onBackButtonClick(event: createjs.MouseEvent) {
            // Set global variable to NODE3 Scene and call changescene function
            scene = config.Scene.NODE3;
            changeScene();
        }
    }
}