/*
	File Name:             Scene Menu - TS|JS File 
	Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino 
	Last Modified Date:    Monday, October 3nd, 2016
	Website Name:          EV - COMP397 - Assignment 1
	Program Description:   JS file that contains the components that 
                           are required to render the game's Menu scene.
    Revision History:      Set the Menu BG Sound to play every neutral node.
*/

module scenes {
    export class Menu extends objects.Scene {

        // Private instance variables
        // Label or bitmap
        // Button 
        private _bg: createjs.Bitmap;
        private _menuBtnStart: objects.Button;
        private _menuBtnPreface: objects.Button;
        private _menuLabel: objects.Label;
        private _menuButtonOver: objects.Button;

        // Menu Class Contructor
        constructor() {
            super();
        }

        public start(): void {
            // Add objects to the scene
            console.log("Menu Scene Started");

            // Start Music
            createjs.Sound.stop();
            var bgAll = createjs.Sound.play("MUSIC_All");
            bgAll.play({ interrupt: createjs.Sound.INTERRUPT_ANY, loop: -1, volume: 1 });

             // Create BG for scene and add to Game Scene container
            this._bg = new createjs.Bitmap(assets.getResult("BG_Title"));
            this.addChild(this._bg);

            // Add START Button to scene. Register for click callback function
            this._menuBtnStart = new objects.Button("Start", config.Screen.CENTER_X + 135, config.Screen.CENTER_Y + 72);
            this.addChild(this._menuBtnStart);
            this._menuBtnStart.on("click", this._startButtonClick, this);
            
            // Add PREFACE Button to scene. Register for click callback function
            this._menuBtnPreface = new objects.Button("Preface", config.Screen.CENTER_X + 135, config.Screen.CENTER_Y + 155);
            this.addChild(this._menuBtnPreface);
            this._menuBtnPreface.on("click", this._prefaceButtonClick, this);

            // Add TITLE Label to scene and add to Game Scene container 
            this._menuLabel = new objects.Label("The\nTruth's\nWay", "bold 60px Kaushan Script", "#00008B", config.Screen.CENTER_X + 250, config.Screen.CENTER_Y - 120);
            this._menuLabel.textAlign = "center";
            this.addChild(this._menuLabel); 

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
        private _prefaceButtonClick(event: createjs.MouseEvent) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.PREFACE;
            changeScene();
        }
        private _overButtonClick(event: createjs.MouseEvent) {
            scene = config.Scene.NODE15;
            changeScene();
        }
    }
}