/*
    Game Over Scene.  This is the scene when the player dies
*/

module scenes{
    export class Gameover extends objects.Scene{
        
        private _bg : createjs.Bitmap;
        private _gameButton : objects.Button;

        // CONSTRUCTOR
        constructor(){
            super();
        }
        
        // Run when the scene is started
        public start() :void {
            this._bg = new createjs.Bitmap(assets.getResult("BG"));
            this.addChild(this._bg);
            
            this._gameButton = new objects.Button("Back", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._gameButton);
            this._gameButton.on("click", this._onBackButtonClick, this);
                        
            stage.addChild(this);
            
        }
        
        // Run on every tick
        public update() :void {
            
        }
        private _onBackButtonClick(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}