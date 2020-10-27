/* Funciones 
A)Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
B)A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
C)Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
D)A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
E)Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
*/

//A)

/*function suma (num1, num2){
    return(num1 + num2);
}

console.log(suma(5,15));*/

//B)

function suma(num1,num2){
    if(isNaN(num1) || (num2)){
        alert (" is not a number ");
     }else{
        alert(" is a number ");
     }
     return NaN;
}

console.log(suma(1,15));

//C)
function validateinterger (num){
    if(Number.isInteger(num)){
        return (true);
    }else {
        alert("El numero ingresado "+ num +" no es entero, se redondeara");
        num = Math.round(num);
        return(num);
    }
}

//D)
function suma (num1, num2){
    validatenumber(num1,num2);
    if (isNaN(num1) || isNaN(num2)){
        return NaN;
    }
    num1 = validateinterger(num1);
    num2 = validateinterger(num2);
    return (num1 + num2);
}

//E)
function validatenumber(num1,num2){
    if (typeof num1 !== "number" || typeof num2 !== "number"){
        alert("Uno de los parametros ingresados no es un numero");
        return NaN;
    }else{
        return(num1,num2);}
    }



 