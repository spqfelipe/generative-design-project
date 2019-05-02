/*  
******************************************************
                 COLOR MASTER MODULE
******************************************************

This module has all classes and methods to handle color in this project.
*/

// ****** CLASS - Color Master 
// Desc: has all possible intances of color schemes of this project. They are 
// subdivided into groups based on it's color combination.
class ColorMaster {

    constructor(){

        this.compound = [
            new ColorScheme(color(255,255,255), color(255,52,154), color(4,0,152), 'COMP_white_pink_blue'), 
            new ColorScheme(color(102,41,51), color(185,0,204), color(255, 25, 65), 'COMP_brown_pink_orange'), 
            new ColorScheme(color(41,102,100), color(25,255,248), color(0, 204, 82), 'COMP_darkGreen_cyan_lightGreen'), 
            new ColorScheme(color(100,102,41), color(246,255,25), color(204, 165, 0), 'COMP_brown_yellow'), 
            new ColorScheme(color(102,41,50), color(187,0,204), color(255, 25, 61), 'COMP_brown_pink_red'),
            new ColorScheme(color(23,38,62), color(150,0,46), color(189,12,47), 'COMP_darkBlue_wine_bloodRed'), 
            new ColorScheme(color(185,24,0), color(255,158,67), color(40,54,112), 'COMP_red_mustard_darkBlue'), 
            new ColorScheme(color(110,30,8), color(255,45,96), color(115,204,16), 'COMP_brown_pink_green'),
            new ColorScheme(color(44,19,79), color(0,28,224), color(228,172,57), 'COMP_darkPurple_blue_yellow')
        ]
        this.monocromatic = [
            new ColorScheme(color(3,0,79), color(70,64,215), color(8, 0, 207), 'MONO_blue'), 
            new ColorScheme(color(0,127,112), color(0,204,179), color(0, 255, 224), 'MONO_lightGreen'),
            new ColorScheme(color(127,127,0), color(204,204,0), color(255, 255, 0), 'MONO_yellow'), 
            new ColorScheme(color(127,17,0), color(204,27,0), color(255, 34, 0), 'MONO_red'), 
            new ColorScheme(color(127,0,115), color(204,0, 185), color(255, 0, 231), 'MONO_pink'),
            new ColorScheme(color(87,56,0), color(204,139, 0), color(213, 170, 170), 'MONO_sand') 
        ]

        //For easy iteration purposes
        this.colorTypeArray = [
            this.compound, 
            this.monocromatic
        ]
    }

    // ****** MTHD - Color Scheme Picker 
    // Desc: randomly selects a color scheme 
    colorSchemePicker(){
        let randTypeIndex = floor(random(0, this.colorTypeArray.length))
        let randSchemeIndex = floor(random(0, this.colorTypeArray[randTypeIndex].length))
        
        return this.colorTypeArray[randTypeIndex][randSchemeIndex]
        // return new ColorScheme(color(87,56,0), color(204,139, 0), color(213, 170, 170), 'MONO_pink') 
    }
}

// ****** CLASS - Color Scheme 
// Desc: defines the base colors of a drawing. 
class ColorScheme{
    constructor(background, primary, secondary, name) 
    {
        this.background = background
        this.primary = primary
        this.secondary = secondary
        this.name = name

        //For easy iteration purposes
        this.colorArray = [this.background, this.primary, this.secondary] 
    }
}
