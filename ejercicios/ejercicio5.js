/**
 * @author: Victor Manuel Melguizo Guerrero
 * @version: 1.0.0
 * Ejercicio 5 de la Relación de ejercicios basicos
 */

/**
 * Modifica la función anterior para que le pase un objeto y
    una cantidad de iva, y seguidamente modifique el campo precio
    con el iva correspondiente.

 * @param {object} objeto
 * @param {number} iva
 * @returns object
 */
    function sumarIVANum(objeto,iva){
        const copia=structuredClone(objeto);
        let precio=copia.equipo.Precio;
        precio=(precio*(iva/100))+precio;
        copia.equipo.Precio=precio;
        return copia;
    }