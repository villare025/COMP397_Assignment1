/*
	File Name:             Scene Node 13 - TS|JS File 
	Author:                Elaine Mae Villarino 
    Last Modified By:      Elaine Mae Villarino 
	Last Modified Date:    Sunday, October 2nd, 2016
	Website Name:          EV - COMP397 - Assignment 1
	Program Description:   JS file that contains the components that 
                           are required to render the game's Node 13 scene.
    Revision History:      Set the Initial Node 13 components aka comments, buttons, and scene switches.
*/

module scenes {
    export class Node13 extends objects.Scene {

        // PRIVATE VARIABLES
        private _gameBtnBack: objects.Button;
        private _gameLabel: objects.Label;
        private _gameBtnOver: objects.Button;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start(): void {
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
        }

        // Run on every tick
        public update(): void {
            // Update objects
        }

        // Functions for when button is pressed
        private _onBackButtonClick(event: createjs.MouseEvent) {
            // Change global scene variable to NODE6. Call global changeScene() function
            scene = config.Scene.NODE6;
            changeScene();
        }
        private _onGameOverButtonClick(event: createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}