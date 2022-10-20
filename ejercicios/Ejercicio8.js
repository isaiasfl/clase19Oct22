/**
    @autor: Chema SM
    @version: 1.0.0
    @description:
    Con respecto al ejercicio anterior. Crea una función que cuente cuántas veces está repetido dicho número dentro de mi array. [No usar funciones propias de los arrays].
 **/

//Ejercicio 8

document.getElementById('Ejercicio8_Run').onclick = function () {
    let value = parseInt(document.getElementById('Ejercicio8_Value').value);
    if(!isNaN(value)){
        let array = [5,2,3,21,9,7,13,6];
        let valor = Ejercicio8(array, value)
        if(!valor){
            document.getElementById('Ejercicio8_Error').innerText = "No se ha encontrado el numero";
        }else{
            console.log(valor);
            document.getElementById('Ejercicio8_Error').innerText = '';
        }
    }else{
        document.getElementById('Ejercicio8_Error').innerText = "Introduce un numero";
    }

};

/**
 * Con respecto al ejercicio anterior. Crea una función que
 * cuente cuántas veces está repetido dicho número dentro de mi
 * array. [No usar funciones propias de los arrays].
 * @param {number} max
 * @return array
 */

function Ejercicio8(array, value) {

    let iguales = 0;

    for (numero of array){
        if(numero == value){
            iguales++;
        }
    }

    return iguales;
}