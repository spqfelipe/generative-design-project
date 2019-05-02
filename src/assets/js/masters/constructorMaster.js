/*  
******************************************************
              CONSTRUCTOR MASTER MODULE
******************************************************

This module has all classes and methods to handle layer selection in this project 
*/

// -------> OBS: talvez seja melhor fazer algo que altere os pesos do que ficar duplicando codigo 
// -------> Tranformar layer picker em petodo ao inves de em modulo separado 

// ****** CLASS - Color Master 
// Desc: has all possible arrays for each layer to be drawn as well as method to handle 
// random selection of them 
class ConstructorMaster {
    constructor(){

        // All possible layers
        this.standardConstructorArray = [
            {
                name: 'Circles',
                init: (layerColor) => new Circles(layerColor),
                weight: 0.3,
                used: false
            }, 
            {
                name: 'SimpleLines',
                init: (layerColor) => new SimpleLines(layerColor),
                weight: 0.3,
                used: false
            },
            {
                name: 'OutLineShape',
                init: (layerColor) => new OutlineShape(layerColor),
                weight: 0.3,
                used: false
            },
            {
                name: 'DottedLines',
                init: (layerColor) => new DottedLines(layerColor),
                weight: 0.3,
                used: false
            },
            {
                name: 'CenteredShape',
                init: (layerColor) => new CenteredShape(layerColor),
                weight: 0.3,
                used: false
            },
            {
                name: 'RingOfShapes',
                init: (layerColor) => new RingOfShapes(layerColor),
                weight: 0.3,
                used: false
            },
            {
                name: 'SteppedHexagons',
                init: (layerColor) => new SteppedHexagons(layerColor),
                weight: 0.3,
                used: false
            },
        ]

        // BackLayer Options
        this.backLayerConstructorArray = [
            {
                name: 'DottedLines',
                init: (layerColor) => new DottedLines(layerColor),
                weight: 0.3,
                used: false
            },
            {
                name: 'SimpleLines',
                init: (layerColor) => new SimpleLines(layerColor),
                weight: 0.3,
                used: false
            },
            {
                name: 'OutLineShape',
                init: (layerColor) => new OutlineShape(layerColor),
                weight: 0.3,
                used: false
            },
            {
                name: 'RingOfShapes',
                init: (layerColor) => new RingOfShapes(layerColor),
                weight: 0.4,
                used: false
            },
            {
                name: 'SteppedHexagons',
                init: (layerColor) => new SteppedHexagons(layerColor),
                weight: 0.4,
                used: false
            },
            {
                name: 'SteppedCircles',
                init: (layerColor) => new SteppedCircles(layerColor),
                weight: 0.7,
                used: false
            },
        ]

        // Middle Layer Options
        this.midLayerConstructorArray = [
            {
                name: 'Circles',
                init: (layerColor) => new Circles(layerColor),
                weight: 0.3,
                used: false
            }, 
            {
                name: 'SimpleLines',
                init: (layerColor) => new SimpleLines(layerColor),
                weight: 0.3,
                used: false
            },
            {
                name: 'OutLineShape',
                init: (layerColor) => new OutlineShape(layerColor),
                weight: 0.3,
                used: false
            },
            {
                name: 'DottedLines',
                init: (layerColor) => new DottedLines(layerColor),
                weight: 0.3,
                used: false
            },
            {
                name: 'RingOfShapes',
                init: (layerColor) => new RingOfShapes(layerColor),
                weight: 0.3,
                used: false
            },
            {
                name: 'SteppedCircles',
                init: (layerColor) => new SteppedCircles(layerColor),
                weight: 0.7,
                used: false
            },
        ]

        // Top Layer Options
        this.topLayerConstructorArray = [
            {
                //solid
                name: 'CenteredShape', 
                init: (layerColor) => new CenteredShape(layerColor),
                weight: 0.3,
                used: false
            },
            {
                //solid
                name: 'RingOfShapes',
                init: (layerColor) => new RingOfShapes(layerColor),
                weight: 0.3,
                used: false
            },
            {
                name: 'Circles',
                init: (layerColor) => new Circles(layerColor),
                weight: 0.3,
                used: false
            },
            {
                name: 'OutLineShape',
                init: (layerColor) => new OutlineShape(layerColor),
                weight: 0.3,
                used: false
            },
        ]

        //For easy iteration purposes
        this.constructorTypeArray = [
            this.standardConstructorArray,
            this.backLayerConstructorArray, 
            this.midLayerConstructorArray, 
            this.topLayerConstructorArray
        ]
    }

    // ****** MTHD - Constructor Picker 
    // Desc: randomly selects a constructor type
    constructorPicker(){
        let randConstructorIndex = floor(random(0, this.constructorTypeArray.length))
        return this.constructorTypeArray[randConstructorIndex]
    }

    // ****** MTHD - Constructor Reset
    // Desc: resets all used layers of a constructor
    constructorReset(constructorArray){
        constructorArray.forEach(layer => {
            layer.used = false
        })
    }

}

