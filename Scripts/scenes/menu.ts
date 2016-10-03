/*
	File Name:             Scene Menu - TS|JS File 
	Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino 
	Last Modified Date:    Sunday, October 2nd, 2016
	Website Name:          EV - COMP397 - Assignment 1
	Program Description:   JS file that contains the components that 
                           are required to render the game's Menu scene.
    Revision History:      Set the Initial Menu components aka comments, buttons, and scene switches.
*/

module scenes {
    export class Menu extends objects.Scene {

        // Private instance variables
        // Label or bitmap
        // Button 
        private _menuButton: objects.Button;
        private _menuLabel: objects.Label;
        private _menuButtonOver: objects.Button;

        // Menu Class Contructor
        constructor() {
            super();
        }

        public start(): void {
            console.log("Menu Scene Started");

            this._menuLabel = new objects.Label("Welcome to New Scene", "Comic Sans 50px", "#00008B", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._menuLabel);


            // Add button to scene. Register for click callback function
            this._menuButton = new objects.Button("Start", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._menuButton);
            this._menuButton.on("click", this._startButtonClick, this);


            this._menuButtonOver = new objects.Button("GameOver", config.Screen.CENTER_X, config.Screen.CENTER_Y - 180);
            this.addChild(this._menuButtonOver);
            this._menuButtonOver.on("click", this._overButtonClick, this);

            // Add menu scene to global stage container
            stage.addChild(this);
        }

        // Run on every tick
        public update(): void {
            // Update objects
        }

        // Function for when button is pressed
        private _startButtonClick(event: createjs.MouseEvent) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.NODE1;
            changeScene();
        }
        private _overButtonClick(event: createjs.MouseEvent) {
            scene = config.Scene.NODE15;
            changeScene();
        }
    }
}