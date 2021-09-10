/* Ciclo For en Javascript
    Sirve para ejecutar n cantidad de veces un código.



console.log('Hola');
console.log('Hola');
console.log('Hola');
console.log('Hola');
console.log('Hola');
console.log('Hola');


for(var contador = 0; contador < 11; contador++) {
    console.log('Hola desde el ciclo for. Vuelta ' + contador);
    }

const frutas = ['Manzana', 'Mango', 'Pera', 'Piña', 'Sandía', 'Melón'];
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);

*/


const frutas = ['Manzana', 'Mango', 'Pera', 'Piña', 'Sandía', 'Melón'];
console.log(frutas.length);

for(var i=0; i < frutas.length; i++){
    console.log(frutas[i]);
}
