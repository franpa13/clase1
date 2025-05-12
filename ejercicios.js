// 1.Crear una variable denominada integrantes y asignarle la cadena de texto con los
// nombres de los integrantes del grupo.
// Mostrar por consola el siguiente texto:
// Somos (el valor de la variable) y estamos aprendiendo javascript.
// ctrl + }

// let integrantes = "Fran , Naty , Facu";

// console.log(`Somos ${integrantes} y estamos aprendiendo javascript.`);

// 2.Mostrar por consola los primeros 10 números pares.

// let contadorPares = 0;
// let num = 1;

// while (contadorPares < 10) {

//     if (num % 2 === 0) {
//         console.log(num);
//         contadorPares++;
//     }

//     num++

// }

// 3.Calcular y mostrar por consola el área de un círculo cuyo radio = 7,5
// const PI = 3.14

// const areaCirculo = (radio) => {
//     let area;
//     area = PI * (radio * radio)
//     return area;

// }

// let calculoFinal = areaCirculo(7.5)

// console.log(calculoFinal, "area del circulo");


// 6. Crear un array denominado edades con al menos 8 edades distintas.
// (metodo forEach y for)
// const edades = [10, 12, 15, 18, 20, 25, 30, 35];
// let valorCanitidadEdades = edades.length
// let promedio = 0;
// let suma = 0;

// edades.map((edad) => {suma = suma + edad})
// promedio = suma / valorCanitidadEdades
// console.log(promedio , "promedio de edades");


// for (let i = 0; i < valorCanitidadEdades; i++) {
//     suma = suma + edades[i]
// }
// promedio = suma / valorCanitidadEdades

// console.log(promedio, "promedio de edades");


// 7. Declarar un array denominado nombres con al menos 6 nombres.
// Obtener el nombre más largo del array nombres.
// Las cadenas de textos (String) son listas de caracteres y las listas tienen un largo (length)
// que indica su tamaño.

// let nombres = ["Fran", "Facu", "Naty", "Gonzalo", "Joaquin", "Lucas"];

// let nombreMasLargo = nombres[0];
// nombres.forEach((name) => {
//     if (name.length > nombreMasLargo.length) {
//         nombreMasLargo = name;
//     }
// })

// console.log(nombreMasLargo, "nombre mas largo");

// let nombreMasLargo = nombres[0]

// for (let i = 1; i < nombres.length; i++) {
//     if (nombres[i].length > nombreMasLargo.length) {
//         nombreMasLargo = nombres[i]
//     }

// }
// console.log(nombreMasLargo, "nombre mas largo");

