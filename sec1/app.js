/* 1) Variables y Operadores 
   a)Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.
   b)Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
   c)Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado la suma una 3er variable (utilizar length).
 */
//a)
 var num1 = 5;
 var num2 = 10;
 var num3= num1 + num2;

 console.log(num3);

 //b)
var animales = 'Los animales Salvajes presentan , ';
var colores= 'diveros colores para llamar la atencion de sus pares. ';

var mixer = animales + colores; 
console.log(mixer);

//c

var str1= 'Leonel';
var str2 ='Haiek';
var str3= str1.length + str2.length;

console.log(str3);