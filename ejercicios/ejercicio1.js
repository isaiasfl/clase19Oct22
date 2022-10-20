
/**
 * @author: Juan
 * @description //  1. Crea una función que me devuelva un objeto clonado. Probarlo
 *                     con el objeto dado.
al.
 * @param {*} obj 
 * @returns modifica el curso de nuevo objeto creado
 */

function clonObjeto() {
    let clone = structuredClone(estudiantes);
    //  clone[0].Equipo.Modelo = "aNTONIO";
    // console.log(clone[0]);
    // console.log(estudiantes);

    return clone;
}