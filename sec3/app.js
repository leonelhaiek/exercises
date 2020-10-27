/* Arrays
A)Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)

B) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

C)Agregar un elemento al principio y al final del array (utilizar unshift y push).

D)Quitar un elemento del principio y del final del array (utilizar shift y pop).

E)Invertir el orden del array (utilizar reverse)

F)Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

G)Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

*/


//A)
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(months[4]+" "+months[10]);

//B)
months=months.sort();
console.log(months);

//C)

months.unshift("Leonel");
months.push("Haiek");
console.log(months);

//D)
months.shift();
months.pop();
console.log(months);

//E)
months.reverse();
console.log(months);

//F)
console.log(months.join("-"));

//G)

months2=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
months3=months2.slice(4,11);
console.log(months3);








