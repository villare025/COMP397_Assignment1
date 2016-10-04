/*
    Module to store globally accessible values and states for the game.
*/
module config {
    export class Scene {
        public static MENU : number = 0;
        public static NODE1 : number = 1;
        public static NODE2 : number = 2;
        public static NODE3 : number = 3;
        public static NODE4 : number = 4;
        public static NODE5 : number = 5;
        public static NODE6 : number = 6;
        public static NODE7 : number = 7;
        public static NODE8 : number = 8;
        public static NODE9 : number = 9;
        public static NODE10 : number = 10;
        public static NODE11 : number = 11;
        public static NODE12 : number = 12;
        public static NODE13 : number = 13;
        public static NODE14 : number = 14;
        public static NODE15 : number = 15;
        public static PREFACE : number = 16;
        public static OVER : number = 17;
        public static GAME : number = 18;
    }

    export class Screen {
        public static WIDTH : number = 640;
        public static HEIGHT : number = 480;
        public static CENTER_X : number = 320;
        public static CENTER_Y : number = 240;
        public static TOPLEFT_X : number = 95;
        public static TOPLEFT_Y : number = 35;
        public static TOPRIGHT_X : number = 652;
        public static TOPRIGHT_Y : number = 35;
        public static CHOICE1_X : number = 110;
        public static CHOICE1_Y : number = 430;
        public static CHOICE2_X : number = 475;
        public static CHOICE2_Y : number = 430;
        public static OVER_X : number = 320;
        public static OVER_Y : number = 435;
    }
    
    export class Game {
        public static FPS : number = 60;
    }
}