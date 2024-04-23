var hola; //variable global

let nmr1 =1;
let nmr_1 = "1";

console.log(nmr1+nmr_1+1);

if (nmr1 == nmr_1){
    console.log("hola")
}

let alumno ={
    rut:'1111111',
    nombre: 'nombre',
    edad:34
};


let alumnos = [
    {
        rut:'1111111',
        nombre: 'Juan',
        apellido: 'Jimenez',
        edad:34
    },
    {
        rut:'2222222',
        nombre: 'Pedro',
        Apellido: 'Ocares',
        edad:24
    },
    {
        rut:'3333333',
        nombre: 'Jorge',
        apeliido: 'Saavedra',
        edad:21
    },
    {
        rut:'4444444',
        nombre: 'Nicolas',
        apellido: 'Santana',
        edad: 10
    },
    {
        rut:'55555555',
        nombre: 'Abraham',
        apellido: 'Gutierrez',
        edad:14
    }

]

console.log(alumnos)


let cont = 0
for (let index = 0; index < alumnos.length; index++) {
    const element=alumnos[index]

    if (element.edad >= 18){
        cont++
        console.log("nombre: "+element.nombre+" edad: "+element.edad)
    }
    
}
console.log("en total son: "+cont)

