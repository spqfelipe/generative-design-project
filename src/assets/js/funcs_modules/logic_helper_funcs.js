// Helper functions for logic 

function layerPicker(constructorArray, layerColor, limit){
    let cont = 0

    for (let lay of constructorArray){   
        let picker = random(1)
        if(picker > lay.weight && lay.used == false){
            LAYERS.push(lay.init(layerColor))
            lay.used = true
            cont++
        }

        if(cont >= limit) {break;}
    }

}

