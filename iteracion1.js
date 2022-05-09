//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
console.log(document.querySelector('button[class="showme"]'));
//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
console.log(document.querySelector('h1[id="pillado"]'));
//1.3 Usa querySelector para mostrar por consola todos los p
console.log(document.querySelectorAll('p'));
//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
console.log(document.querySelectorAll('[class="pokemon"]'));
//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
//data-function="testMe".
console.log(document.querySelectorAll('[data-function="testMe"]'));
//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
//data-function="testMe".
console.log(document.querySelectorAll('[data-function="testMe"]')[2]);

