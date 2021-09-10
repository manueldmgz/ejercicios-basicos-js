/*
1.- Crear un programa que solicite al usuario su nombre por prompt y devuelva el siguiente saludo:
"Hola nombre, saludos desde javascript".
Nota: El saludo puede ser mostrado por consola o por html.

var nombre = prompt('Ingresa tu nombre')
alert ("Hola, " + nombre + ". ¡Saludos desde Javascript!");



2.- Crear un programa que solicite 2 números por prompt. Mandar esos dos valores a una función por
parámetros para realizar las operaciones aritméticas básicas( suma, resta, multiplicación y división), y mostrar el resultado.
Nota: El resultado puede ser mostrado por consola o por html.
*/ 

var num1 = parseInt( prompt('Ingresa el primer número'));
var num2 = parseInt (prompt('Ingresa el segundo número'));
document.write ("Su suma es "+(num1+num2));
document.write ("Su resta es "+ (num1-num2));
document.write ("Su multiplicación es " + num1*num2);
document.write ("Su división es " + num1/num2);


