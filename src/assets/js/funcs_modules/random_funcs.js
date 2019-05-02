// MODULO PARA TODAS AS FUNÇOES DE RANDOM 


// Retorna verdadeiro ou falso em uma chance de 50%
function randomSelectTwo(){
    const rand = random(1)

    if (rand > 0.5){
        return true 
    }else{
        return false 
    }
}
