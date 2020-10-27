/* Strings
 a)Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

 b)Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

 c)Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

 d)Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

 e)Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

 f)Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

*/


//A)

var str1= 'mississippi';
console.log(str1.toUpperCase());


//B)
var str2= 'leonelhaiek';
var str3= str2.substring(0,5);
console.log(str3);

//c)
var str4= str2.substring(8,12);
console.log(str4);

//D)
var str5= str2.substring(0,1).toUpperCase();
var str6=str2.substring(1).toLowerCase();
var str7= str5 + str6 ;

console.log(str7);

//E)

var str8= 'lionel messi';

var str9= str8.indexOf(" ");
console.log(str9);

//F
var str10='electroencefalografista otorrinolaringólogo';
var str11= str10.substring(0,1).toUpperCase();
var str12=str10.substring(1,23);
var str13=str11 + str12;
var bco= str10.indexOf(" ");
var str14= str10.substring(23,24);
var str15= str10.substring(24,25).toUpperCase();
var str16=str10.substring(25.42);
var str17= str11+str12+str14+str15+str16;

console.log(str17);











