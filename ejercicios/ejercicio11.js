/**
 * 11 -  Modificar la función anterior para convertirla en forma de
programación declarativa
 */

let arrayNum = [2,3,4,5,6,7,2,2,2];
let numero = 2;
let newArray = [];

function ejercicio11(num,numMult){
    if(num <= 0 || isNaN(num)){
        console.log("no es un número válido");
    }else{
        for(let i=0; i<arrayNum.length; i++){
            let mult = arrayNum[i]*numMult;
            console.log(mult);
        }
    }
}
console.log(ejercicio11(8,33));