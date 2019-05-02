/*  
******************************************************
                HELPER FUNCTIONS MODULE
******************************************************

This modul has all helper functions. 
*/


// ****** FUNC - Point On Circle  
// Desc: creates point in circle 
function pointOnCircle(posX, posY, radius, angle){
    const x = posX + radius * cos(angle)
    const y = posY + radius * sin(angle)

    return createVector(x,y)
}


// ****** FUNC - Hexagon No Fill 
// Desc: creates a no fill hexagon
function hexagonNoFill(posX, posY, radius){
    const rotAngle = 360 / 6
    noFill()
    beginShape()
    for(let i = 0; i < 6; i++){
        const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle)
        vertex(thisVertex.x, thisVertex.y)
    }
    endShape(CLOSE)
}


// ****** FUNC - Hexagon 
// Desc: cretaes a hexagon
function hexagon(posX, posY, radius){
    const rotAngle = 360 / 6
    beginShape()
    for(let i = 0; i < 6; i++){
        const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle)
        vertex(thisVertex.x, thisVertex.y)
    }
    endShape(CLOSE)
}


// ****** FUNC - MyTriangle 
// Desc: creates a triangle facing inwards or outwards
function myTriangle (center, radius, direction) {
    if (direction) {
      beginShape();
      vertex(center + radius * cos(0), radius * sin(0));
      vertex(center + radius * cos(120), radius * sin(120));
      vertex(center + radius * cos(240), radius * sin(240));
      endShape(CLOSE); 
    } else {
      beginShape();
      vertex(center + radius * cos(180), radius * sin(180));
      vertex(center + radius * cos(300), radius * sin(300));
      vertex(center + radius * cos(60), radius * sin(60));
      endShape(CLOSE);
    }
  }