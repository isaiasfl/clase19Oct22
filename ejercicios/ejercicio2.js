/*
@autor: Antonio Villena Díaz
@description: 

    2. Crear una función NO PURA que modifique la edad. ¿Ha modificado la edad del objeto original?

*/

/**
 * 
 * @param {array} estudiantes
 * @returns Array
*/

function ejercicio2(estudiantes){

    //Para que sea no pura, modifica la edad del objeto original.


    //Para recorrer el array estudiantes, uso un for of, utilizado para recorrer listas iterables como arrays.
    //Accedo a cada objeto del array, y desde ese objeto accedo a sus datos para cambiarlos.

    for(let objeto of estudiantes){
        objeto.Edad+=1;
    }

    return estudiantes;

}