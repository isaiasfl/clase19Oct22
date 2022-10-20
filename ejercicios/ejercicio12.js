/**
 * Ejercicio 12:
 * .Crear una función que calcule el máximo de los números de un
 * array pasados como parámetro.
 * @author Bruno Garcia Tripoli
 */

function BRB_MAX_v1(arr){
    return Math.max(...arr);
}

function BRB_MAX_v2(arr){
    let max = NaN;
    for(const v of arr)
        if(max<v)
            max = v;
    return max;
}