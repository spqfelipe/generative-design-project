/*  
******************************************************
                 MAIN SKETCH MODULE
******************************************************

This module is the main structure to all other modules. It uses the 
standard P5 (or Processing) structure to draw elements.
*/



// Canvas size in Pixels
const CANVAS_SIZE = 550

// Limits the actual drawing area. 
let CRYSTAL_SIZE = CANVAS_SIZE - 50

// Maximum number of sizes that a Crystal can have
const SIDES = 6

// Layers array in which instances of "drawable" objects will be stored
let LAYERS = []

// ****** FUNC - Setup 
// Desc: defines general setting to P5

function setup(){ // FUNC - Setup - BEGIN
    
    // Angle mode - degrees or radian
    angleMode(DEGREES)

    // Rectangle axis are centered 
    rectMode(CENTER)

    // Draw() function is executed only once 
    noLoop()

}// FUNC - Setup - END

// ****** FUNC - Draw 
// Desc: all drawing with P5 is done here. Two HTML canvas are used to 

function draw(){

    // Creates "defaultCanvas" for P5. All drwing are made in this canvas
    // and later layered into "finalCanvas" using Caman.js
    const create = createCanvas(CANVAS_SIZE, CANVAS_SIZE)

    // Hiding canvas using hide class from MaterializeCSS
    $("#defaultCanvas").addClass('hide')

    // Gets "finalCanvas" from HTML
    const finalCanvas = document.getElementById('finalCanvas')
    
    // Context of the "finalCanvas". Used to draw images coming from 
    // the "defaultCanvas"
    const ctxFinal = finalCanvas.getContext('2d')

    // New instance of ColorMaster
    const colorMasterInst = new ColorMaster() //ColorMaster Instance of the project

    // Randomly selects color scheme
    const selectedColorScheme = colorMasterInst.colorSchemePicker()

    // DEBUG Print
    console.log(selectedColorScheme.name)

    //New instance of Constructor Master
    const constructorMasterInst= new ConstructorMaster()

    // -------------------------------------------------------------------

    // Defines background 
    background(selectedColorScheme.background)

    // Creates image objects to copy current background
    const backgroundImg = new Image()
    backgroundImg.src = document.getElementById('defaultCanvas').toDataURL('image/png')

    // Uses created image to draw the background on the final canvas 
    backgroundImg.onload = function () {
        finalCanvas.width = backgroundImg.width
        finalCanvas.height = backgroundImg.height
        ctxFinal.drawImage(backgroundImg, 0, 0, backgroundImg.width, backgroundImg.height)
        finalCanvas.removeAttribute("data-caman-id");
    }

    // saveCanvas()
    clear()

    // Caman JS BEGIN
    // This whole section uses the Layers System of Caman to draw
    // multiple layers with different opacity
    Caman('#finalCanvas', function() {

        // ***** BACK LAYER ***** 
        
        CRYSTAL_SIZE = 800
        
        // Randomly a layer from the backLayerArray 
        layerPicker(constructorMasterInst.backLayerConstructorArray, selectedColorScheme.primary,3)

        // Draws every selected layer 
        LAYERS.forEach(layer => layer.render())
        
        // DEBUG Print
        console.log('BACK LAYER -- ', LAYERS)

        // Creates new layer using the current content of the "defultCanvas"
        this.newLayer(function() {

            let imgLayer = new Image()
            imgLayer.src = document.getElementById('defaultCanvas').toDataURL('image/png')

            this.opacity(35)

            this.overlayImage(imgLayer)
        })

        // saveCanvas()

        // Clears the "defaultCanvas" fot the next layer to be drawn
        clear()

        // ***** MID LAYER ***** 

        // Resets choosen layers 
        LAYERS = []

        CRYSTAL_SIZE = 500

        // Randomly selects a layer from the midLayerArray 
        layerPicker(constructorMasterInst.midLayerConstructorArray, selectedColorScheme.primary,2)
        layerPicker(constructorMasterInst.midLayerConstructorArray, selectedColorScheme.secondary,2)

        // Draws every selected layer 
        LAYERS.forEach(layer => layer.render())

        // DEBUG Print
        console.log('MID LAYER -- ', LAYERS)
        
        // Creates new layer using the current content of the "defultCanvas"
        this.newLayer(function() {

            let imgLayer = new Image()
            imgLayer.src = document.getElementById('defaultCanvas').toDataURL('image/png')

            this.opacity(60)

            this.overlayImage(imgLayer)
        })

        // saveCanvas()
        // Clears the "defaultCanvas" fot the next layer to be drawn
        clear()

        // ***** TOP LAYER ***** 

        // Resets choosen layers 
        LAYERS = []
        CRYSTAL_SIZE = 250

        // Randomly selects a layer from the topLayerArray 
        layerPicker(constructorMasterInst.topLayerConstructorArray, selectedColorScheme.secondary,2)

        // Draws every selected layer 
        LAYERS.forEach(layer => layer.render())

        console.log('TOP LAYER -- ', LAYERS)

        this.newLayer(function() {

            let imgLayer = new Image()
            imgLayer.src = document.getElementById('defaultCanvas').toDataURL('image/png')

            this.overlayImage(imgLayer)
        })

        // saveCanvas()

        // Renders the final Caman Image into "finalCanvas"
        this.render()
    })

}

