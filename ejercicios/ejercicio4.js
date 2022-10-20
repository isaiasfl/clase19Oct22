/**
 * 
 * @author Iván (okami315)
 * @description
 * Crear una función que aplique un IVA al precio (21%) y lo
    almacene en el propio campo de precio.
 */


    const objeto = [
        {
        nombre: 'Antonio',
        apellido: 'Gutiérrez',
        edad: 13,
        curso: 'Web student',
        equipo: { Modelo: "HP Proliant 730", precio: 730,},
        },
        {
        nombre: 'Lucia',
        apellido: 'Martos',
        edad: 21,
        curso: 'Web development',
        equipo: { Modelo: "Acer AK340", precio: 875,},
        },
    ];

    /**
     * Función que modifica el precio aplicando el 21% de IVA -- IMPURA 
     *  
     */
    // function aplicarIVA() {
     
    //     for (const key in objeto) {
            
    //         objeto[key].equipo.precio = ((objeto[key].equipo.precio*21)/100)+objeto[key].equipo.precio;

    //       }
    //       return objeto;
    // }
    // console.log(aplicarIVA());

       /**
     * Función que modifica el precio aplicando el 21% de IVA -- PURA 
     *  
     */
        function aplicarIVA() {
            let clone = structuredClone(objeto);
            for (const key of clone) {
                
                key.equipo.precio = ((key.equipo.precio*21)/100)+key.equipo.precio;
    
              }
              return clone;
        }
        console.log(aplicarIVA());
        console.log(objeto);