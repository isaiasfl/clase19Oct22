/* 
 * @ author: Mario Muñoz
 * @version: 1.0.0
 * @description Utilizando el mismo array anterior crear una función en forma
 * imperativa que le pase como parámetro el array y un número y
 * seguidamente multiplique todos los elementos del array por
 * el número indicado. Si el número es 0 o nada.. entonces no
 * multiplicará por nada.
*
*/

/** 
* @param {Array} array 
* @param {Number} n 
* @returns 
*/
const buscar=[11,18,20,1,40,6,20,18,9,2,20];
function multiplicarArray(array,n){
    let salida=[]
    if(n!=0){
        for(numero of array){
            salida.push(numero*n);
        }
    }else{
        salida=0;
    }
    return salida
}
console.log(multiplicarArray(buscar,2));
