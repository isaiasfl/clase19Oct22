/**
 * autor: jairo comino
 * 6 Modificar la función anterior para que redondee el precio del IVA con 3 decimales.
 * 
 */
 function precioiva3(IVA){
    const copia = structuredClone(estudiantes);
    copia=copia.equipo.precio*(IVA/100)+1;
    copia= Math.pow(copia.equipo.precio);
    return copia;
    console.log(copia.precio);
}



