/// <reference path = "_reference.ts" />
/*
	File Name:             Core Game - TS|JS File 
	Author:                Elaine Mae Villarino
    Last Modified By:      Elaine Mae Villarino 
	Last Modified Date:    Sunday, October 2nd, 2016
	Website Name:          EV - COMP397 - Assignment 1
	Program Description:   JS file that contains the components that 
                           are required to render the game's core.
    Revision History:      Add the nodes to changeScene function.
*/

// Global Variables
var assets: createjs.LoadQueue;
var canvas: HTMLElement;
var stage: createjs.Stage;

var currentScene : objects.Scene;
var scene: number;

// Game scenes
var menuScene : scenes.Menu;
var gameScene : scenes.Game;

// Preload Assets required
var assetData:objects.Asset[] = [
    {id: "Start", src:"../../Assets/images/btnTitleStart.png"}, 
    {id: "Preface", src:"../../Assets/images/btnTitlePreface.png"}, 
    {id: "Return", src:"../../Assets/images/return.png"},
    {id: "BG", src:"../../Assets/images/bg.jpg"},
    {id: "BG_Title", src:"../../Assets/images/bgTitle.jpg"},
    {id: "BG_Node1", src:"../../Assets/images/bgNode1.jpg"},
    {id: "BG_Node2", src:"../../Assets/images/bgNode2.jpg"},
    {id: "BG_Node3", src:"../../Assets/images/bgNode3.jpg"},
    {id: "BG_Node4", src:"../../Assets/images/bgNode4.jpg"},
    {id: "BG_Node5", src:"../../Assets/images/bgNode5.jpg"},
    {id: "BG_Node6", src:"../../Assets/images/bgNode6.jpg"},
    {id: "BG_Node7", src:"../../Assets/images/bgNode7.jpg"},
    {id: "BG_Node8", src:"../../Assets/images/bgNode8.jpg"},
    {id: "BG_Node9", src:"../../Assets/images/bgNode9.jpg"},
    {id: "BG_Node10", src:"../../Assets/images/bgNode10.jpg"},
    {id: "BG_Node11", src:"../../Assets/images/bgNode11.jpg"},
    {id: "BG_Node12", src:"../../Assets/images/bgNode12.jpg"},
    {id: "BG_Node13", src:"../../Assets/images/bgNode13.jpg"},
    {id: "BG_Node14", src:"../../Assets/images/bgNode14.jpg"},
    {id: "BG_Node15", src:"../../Assets/images/bgNode15.jpg"},
    {id: "BadEnd", src:"../../Assets/images/btnBadEnd.jpg"},
    {id: "GoodEnd", src:"../../Assets/images/btnGoodEnd.jpg"}
];

function preload() {
    // Create a queue for assets being loaded
    assets = new createjs.LoadQueue(false);
    // assets.installPlugin(createjs.Sound);

    // Register callback function to be run when assets complete loading.
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}

function init() {
    // Reference to canvas element
    canvas = document.getElementById("canvas");

    // Tie canvas element to createjs stage container
    stage = new createjs.Stage(canvas);

    // Enable mouse events that are polled 20 times per tick
    stage.enableMouseOver(20);

    // Set FPS for game and register for "tick" callback function
    createjs.Ticker.setFPS(config.Game.FPS);
    createjs.Ticker.on("tick", this.gameLoop, this);

    // Set initial scene to MENU scene and call changeScene().
    scene = config.Scene.MENU;
    changeScene();
}

function gameLoop(event: createjs.Event): void {
    // Update whatever scene is currently active.
    //console.log("gameLoop update");
    currentScene.update();
    stage.update();
}

function changeScene() : void {
    
    // Simple state machine pattern to define scene swapping.
    switch(scene)
    {
        case config.Scene.MENU :
            stage.removeAllChildren();
            menuScene = new scenes.Menu();
            currentScene = menuScene;
            console.log("Starting MENU scene");
            break;
        case config.Scene.PREFACE :
            stage.removeAllChildren();
            currentScene = new scenes.Preface();
            console.log("Starting Preface scene");
            break;
        case config.Scene.NODE1 :
            stage.removeAllChildren();
            currentScene = new scenes.Node1();
            console.log("Starting NODE1 scene");
            break;
        case config.Scene.NODE2 :
            stage.removeAllChildren();
            currentScene = new scenes.Node2();
            console.log("Starting NODE2 scene");
            break;
        case config.Scene.NODE3 :
            stage.removeAllChildren();
            currentScene = new scenes.Node3();
            console.log("Starting NODE3 scene");
            break;
        case config.Scene.NODE4 :
            stage.removeAllChildren();
            currentScene = new scenes.Node4();
            console.log("Starting NODE4 scene");
            break;
        case config.Scene.NODE5 :
            stage.removeAllChildren();
            currentScene = new scenes.Node5();
            console.log("Starting NODE5 scene");
            break;
        case config.Scene.NODE6 :
            stage.removeAllChildren();
            currentScene = new scenes.Node6();
            console.log("Starting NODE6 scene");
            break;
        case config.Scene.NODE7 :
            stage.removeAllChildren();
            currentScene = new scenes.Node7();
            console.log("Starting NODE7 scene");
            break;
        case config.Scene.NODE8 :
            stage.removeAllChildren();
            currentScene = new scenes.Node8();
            console.log("Starting NODE8 scene");
            break;
        case config.Scene.NODE9 :
            stage.removeAllChildren();
            currentScene = new scenes.Node9();
            console.log("Starting NODE9 scene");
            break;
        case config.Scene.NODE10 :
            stage.removeAllChildren();
            currentScene = new scenes.Node10();
            console.log("Starting NODE10 scene");
            break;
        case config.Scene.NODE11 :
            stage.removeAllChildren();
            currentScene = new scenes.Node11();
            console.log("Starting NODE11 scene");
            break;
        case config.Scene.NODE12 :
            stage.removeAllChildren();
            currentScene = new scenes.Node12();
            console.log("Starting NODE12 scene");
            break;
        case config.Scene.NODE13 :
            stage.removeAllChildren();
            currentScene = new scenes.Node13();
            console.log("Starting NODE13 scene");
            break;
        case config.Scene.NODE14 :
            stage.removeAllChildren();
            currentScene = new scenes.Node14();
            console.log("Starting NODE14 scene");
            break;
        case config.Scene.NODE15 :
            stage.removeAllChildren();
            currentScene = new scenes.Node15();
            console.log("Starting NODE15 scene");
            break;
        case config.Scene.OVER :
            stage.removeAllChildren();
            currentScene = new scenes.Gameover();
            console.log("Starting GAME OVER scene");
            break;
        case config.Scene.GAME :
            stage.removeAllChildren();
            currentScene = new scenes.Game();
            console.log("Starting GAME scene");
            break;
    }
    
}