const estudiantes = [
    {
        nombre: 'Antonio',
        apellidos: 'Gutiérrez',
        edad: 13,
        curso: 'Web student',
        equipo:{
             modelo: "HP Proliant 730", 
             precio: 787,
             },
    },
    {
        nombre: 'Lucía',
        Apellidos : 'Martos',
        edad: 21,
        curso: 'Web development',
        equipo: 
            {
            modelo : "Acer AK340", 
            precio : 875 ,
            },
    }
];
/**
 * @description //  3. Crear una función PURA que modifique el curso pero NO al objeto original.
 * @param {*} obj 
 * @returns modifica el curso de nuevo objeto creado
 */
const f3 = (obj) =>{
    const obj2= structuredClone(obj);
    for(item of obj2){
        item.curso = 'Web development';
    } 
    return obj2;    
}
