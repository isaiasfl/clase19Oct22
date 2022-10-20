/**
 * @author Juanmi
 * @param {Array} miArrayParam 
 * @param {int} num
 * 9. Modificar la función anterior, para que tenga sentido en la
 * programación declarativa a través de algún recurso funcional
 * que posean los arrays.
 */

const function9 = (miArrayParam,num) => (miArrayParam.filter(numero => numero == num).length);
