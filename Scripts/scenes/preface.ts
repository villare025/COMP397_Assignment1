/*
	File Name:             Scene Preface - TS|JS File 
	Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino 
	Last Modified Date:    Monday, October 3nd, 2016
	Website Name:          EV - COMP397 - Assignment 1
	Program Description:   JS file that contains the components that 
                           are required to render the game's Preface scene.
    Revision History:      Set the Initial Preface components aka comments, buttons, and scene switches.
*/

module scenes {
    export class Preface extends objects.Scene {

        // PRIVATE VARIABLES
        private _bg: createjs.Bitmap;
        private _prefaceBtnStart: objects.Button;
        private _prefaceBtnBack: objects.Button;
        private _prefaceTitle: objects.Label;
        private _prefaceParagraph: objects.Label;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start(): void {
            // Add objects to the scene
            console.log("Game scene started");

            // Create BG for scene and add to Game Scene container
            this._bg = new createjs.Bitmap(assets.getResult("BG_Title"));
            this.addChild(this._bg);

            // Add START Button to scene. Register for click callback function
            this._prefaceBtnStart = new objects.Button("Start", config.Screen.CENTER_X + 135, config.Screen.CENTER_Y + 110);
            this.addChild(this._prefaceBtnStart);
            this._prefaceBtnStart.on("click", this._startButtonClick, this);

            // Create RETURN Button for scene and add to Game Scene container. Register for onclick event
            this._prefaceBtnBack = new objects.Button("Return", config.Screen.CENTER_X + 280, config.Screen.CENTER_Y + 200);
            this.addChild(this._prefaceBtnBack);
            this._prefaceBtnBack.on("click", this._onBackButtonClick, this);

            // Create Label for scene and add to Game Scene container
            this._prefaceTitle = new objects.Label("Preface", "50px Verdana", "#000000", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y - 150);
            this.addChild(this._prefaceTitle);
            
            // Create Label for scene and add to Game Scene container
            this._prefaceParagraph = new objects.Label("Instructions: ", "14px Verdana", "#000000", config.Screen.CENTER_X + 53, config.Screen.CENTER_Y);
            this.addChild(this._prefaceParagraph);

            // Add gamescene to main stage container. 
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
        private _onBackButtonClick(event: createjs.MouseEvent) {
            // Set global variable to NODE1 Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}