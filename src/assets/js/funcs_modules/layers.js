/*  
******************************************************
                    LAYERS MODULE
******************************************************

This module has all layers classes to create the drawings
*/

// Mesmo a cor da layer sendo atributo comum a todas elas ela foi colocada 
// na especificação dado que o valor so eh passado no init da layer especifica
// *** Passar para o Super nao funcionou 


// ****** CLASS - Layer
// Desc: base layer settings. All other classes extends this one
class Layer {
    constructor(colorTest) {

        this.sides = SIDES
        this.numShapes = this.sides
        this.angle = 360 / this.numShapes
        this.stepsOut = 8
        this.singleStep = (CRYSTAL_SIZE / 2) / this.stepsOut
        this.thinStroke = 1
        this.thickStroke = 2

        //Random
        this.randomWeight = randomSelectTwo() ? this.thinStroke : this.thickStroke
    }
}

// ****** CLASS - Circles
// Desc: creates fixed simple circle
class Circles extends Layer {
    constructor(layerColor) {
        super()

        this.shapeSize = (CRYSTAL_SIZE / 2) * 0.93
        this.position = (CRYSTAL_SIZE / 2) - (this.shapeSize / 2)
        this.layerColor = layerColor
    }

    // ****** MTHD - Render
    // Desc: draws on canvas using P5 commands
    render() {

        stroke(this.layerColor)
        strokeWeight(this.randomWeight)
        noFill()
        push()
        translate(width / 2, height / 2)
        for (let i = 0; i <= this.numShapes; i++) {
            ellipse(this.position, 0, this.shapeSize, this.shapeSize)
            rotate(this.angle)
        }
        pop()

    }
}

// ****** CLASS - Circles
// Desc: draws different size lines around the center of image
class SimpleLines extends Layer {
    constructor(layerColor) {
        super()

        this.numSteps = randomSelectTwo() ? this.stepsOut : int(this.stepsOut * 1.25)
        this.step = (CRYSTAL_SIZE / 2) / this.numSteps
        this.start = floor(random(0, this.numSteps))
        this.stop = floor(random(this.start, this.numSteps + 1))

        this.multiplier = this.multiplierSelector()
        this.linesNumShapes = this.numShapes * this.multiplier
        this.linesAngle = this.angle / this.multiplier

        this.layerColor = layerColor
    }

    // ****** MTHD - Multiplier Selector
    // Desc: randomply selects multiplier 1 to 3
    multiplierSelector() {
        const multiplierOpts = [1, 1, 1, 2, 3]
        const pick = floor(random(0, multiplierOpts.length))
        return multiplierOpts[pick]
    }

    // ****** MTHD - Render
    // Desc: draws on canvas using P5 commands
    render() {
        noFill()
        stroke(this.layerColor)
        strokeWeight(this.randomWeight)
        push()
        translate(width / 2, height / 2)

        for (let i = 0; i < this.linesNumShapes; i++) {
            line(this.start * this.step, 0, (this.stop + 1) * this.step, 0)
            rotate(this.linesAngle)
        }

        pop()
    }
}

// ****** CLASS - Outline Shape 
// Desc: creates outline circle or hexagon 
class OutlineShape extends Layer {
    constructor(layerColor) {
        super()

        this.layerColor = layerColor
    }

    // ****** MTHD - Render
    // Desc: draws on canvas using P5 commands
    render() {
        const pick = random(1)
        stroke(this.layerColor)
        strokeWeight(this.randomWeight)

        push()
        noFill()
        translate(height / 2, width / 2)

        if (pick > 0.5) {
            hexagonNoFill(0, 0, CRYSTAL_SIZE / 2)
        } else {
            ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
        }

        pop()
    }
}

// ****** CLASS - Dotted Lines
// Desc: creates dotted lines of various lengths and number of dots 
class DottedLines extends Layer {
    constructor(layerColor) {
        super()

        this.numShapes = randomSelectTwo() ? this.sides : this.sides * 2
        this.centerOffset = randomSelectTwo() ? this.singleStep : this.singleStep * 3
        this.shapeSize = 2

        this.multiplier = this.multiplierSelector()
        this.dotLineNumShape = this.numShapes * this.multiplier
        this.dotLineAngle = this.angle / this.multiplier

        this.layerColor = layerColor
    }

    // ****** MTHD - Multiplier Selector
    // Desc: randomply selects multiplier 1 to 3
    multiplierSelector() {
        const multiplierOpts = [1, 1, 1, 2, 3]
        const pick = floor(random(0, multiplierOpts.length))
        return multiplierOpts[pick]
    }

    // ****** MTHD - Render
    // Desc: draws on canvas using P5 commands
    render() {
        fill(this.layerColor)
        noStroke()
        push()
        translate(width / 2, height / 2)
        for (let i = 0; i <= this.numShapes; i++) {
            for (let x = this.centerOffset; x < CRYSTAL_SIZE / 2; x += this.singleStep) {
                ellipse(x, 0, this.shapeSize, this.shapeSize)
            }
            rotate(this.angle)
        }
        pop()
    }
}


// ****** CLASS - Centered Shape 
// Desc: creates rectangle, ellipse or hexagon at the center of image
class CenteredShape extends Layer {
    constructor(layerColor) {
        super()
        this.randomShape = random(1)
        this.shapeSize = randomSelectTwo() ? (this.singleStep * 2) * 1.5 : (this.singleStep * 2)

        this.layerColor = layerColor
    }

    // ****** MTHD - Multiplier Selector
    // Desc: randomply selects multiplier 1 to 3
    multiplierSelector() {
        const multiplierOpts = [1, 1, 1, 2, 3]
        const pick = floor(random(0, multiplierOpts.length))
        return multiplierOpts[pick]
    }

    // ****** MTHD - Render
    // Desc: draws on canvas using P5 commands
    render() {
        fill(this.layerColor)
        noStroke()
        push()
        translate(width / 2, height / 2)
        if (this.randomShape < 0.33) {
            rotate(45)
            rect(0, 0, this.shapeSize * 2, this.shapeSize * 2)
        } else if (this.randomShape < 0.66) {
            ellipse(0, 0, this.shapeSize * 2, this.shapeSize * 2)
        } else {
            rotate(this.angle / 2)
            hexagon(0, 0, this.shapeSize)
        }
        pop()
    }
}

// ****** CLASS - Ring of Shapes 
// Desc: creates different ring of shapes of different radius 
class RingOfShapes extends Layer {
    constructor(layerColor) {
        super()
        this.steps = floor(random(1, this.stepsOut))
        this.center = this.steps * this.singleStep
        this.randomShape = random(1)
        this.direction = randomSelectTwo() // used for triangle only
        this.radiusSelection()

        this.layerColor = layerColor
    }

    // ****** MTHD - Radius Selection
    // Desc: selects radius depending on position of ring
    radiusSelection() {
        if (this.steps < this.stepsOut / 2) {
            this.radius = floor(random(1, this.steps)) * this.singleStep
        } else if (this.steps > this.stepsOut / 2) {
            this.radius = floor(random(1, this.stepsOut - this.steps)) * this.singleStep
        } else {
            this.radius = floor(random(1, (this.stepsOut / 2) + 0.5)) * this.singleStep
        }
    }

    // ****** MTHD - Render
    // Desc: draws on canvas using P5 commands
    render() {
        stroke(this.layerColor)
        fill(this.layerColor)
        strokeWeight(this.weight)

        push()
        translate(width / 2, height / 2)
        let pick = random(1)
        for (let i = 0; i < this.numShapes; i++) {
            if (pick < 0.5) {
                myTriangle(this.center, this.radius, this.direction)
            } else {
                ellipse(0, this.center, this.radius, this.radius)
            }
            rotate(this.angle)
        }
        pop()
    }
}

// ****** CLASS - Stepped Hexagons 
// Desc: creates stepped hexagons from center of image. Ammount and size are randomized
class SteppedHexagons extends Layer {
    constructor(layerColor) {
        super()
        this.numSteps = randomSelectTwo() ? this.stepsOut : this.stepsOut * 1.25
        this.centerOffset = randomSelectTwo() ? (CRYSTAL_SIZE / 2) * 0.15 : (CRYSTAL_SIZE / 2) * 0.50
        this.singleStep = ((CRYSTAL_SIZE / 2) - this.centerOffset) / this.numSteps
        this.weight = randomSelectTwo() ? this.thinStroke : this.thickStroke

        this.layerColor = layerColor
    }

    // ****** MTHD - Render
    // Desc: draws on canvas using P5 commands
    render() {
        stroke(this.layerColor)
        noFill()
        strokeWeight(this.weight)
        push()
        translate(width / 2, height / 2)
        rotate(this.angle / 2)
        for (let i = 1; i < this.numSteps + 1; i++) {
            hexagon(0, 0, this.centerOffset + (i * this.singleStep))
        }
        pop()
    }
}

// ****** CLASS - Stepped Circles 
// Desc: creates stepped circles from center of image.
class SteppedCircles extends Layer {
    constructor(layerColor) {
        super()

        this.numSteps = randomSelectTwo() ? this.stepsOut : this.stepsOut * 1.25
        this.centerOffset = randomSelectTwo() ? (CRYSTAL_SIZE / 2) * 0.50 : (CRYSTAL_SIZE / 2) * 0.75
        this.singleStep = (CRYSTAL_SIZE - this.centerOffset) / this.numSteps
        this.weight = randomSelectTwo() ? this.thinStroke : this.thickStroke

        this.layerColor = layerColor
    }

    // ****** MTHD - Render
    // Desc: draws on canvas using P5 commands
    render() {
        stroke(this.layerColor)
        noFill()
        strokeWeight(this.weight)

        push()
        translate(width / 2, height / 2)
        for (let i = 1; i < this.numSteps + 1; i++) {
            ellipse(0, 0, this.centerOffset + (i * this.singleStep), this.centerOffset + (i * this.singleStep))
        }

        pop()
    }
}