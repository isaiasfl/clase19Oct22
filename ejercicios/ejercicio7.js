/**
 * @author: Pablo GF
 * @version: 1.0.0
 * Ejercicio 7 de la Relación de ejercicios
 */

/**
 * @description Dado un array de números enteros (generar vosotros uno
cualquiera). Crear una función imperativa que le pase como
primer parámetro el array y como segundo el número que deseo
buscar en el array y que me muestre. [No usar funciones
propias de los arrays].
 * @param {array} array 
 * @param {number} n
 * @returns {number} num
 */
const miArray=[12,11,23,1,70,6,22,15,6,3,21];

function buscarNumero(array,n){
    let num=0;
    let chivato=true;
    for(numero of array){
        if(numero==n){
            num=n;
            chivato=false;
        }
    }
    if(chivato){
        num="El número no se encuentra en el array";
    }
    return num
}