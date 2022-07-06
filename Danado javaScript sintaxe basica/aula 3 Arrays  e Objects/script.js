// vetores ou arrays : Arrays sao um tipo de lista, ou matriz de variaveis, onde cada variavel possui um indice. os valores podem ser de varios tipos. imagine que um array e uma caixa com varias outras caixas dentro e cada um contendo algum valor, ex : let arry = ['string' , 1 , true , ....] .  O array deve ser declarado entre "[]" e podem guardar valor dentro de seus indices : inclusive outros arrays. exemplo : let array = ['string'] , 1 , true, false, [array1], [array2]. o indice so e acessado por um numero inteiro, onde ) e o primeiro indice. Cada indice é separado por virgula.

//let array = ['string', 1, true];
//console.log(array);

//let novoarray = ['string'], 1, true, false, [array1], [array2], [array3];
//console.log(novoarray)

// manipulando arrays : ao ser declarado. o Array traz consigo uma serie de metodos para manipula-lo : forEach() - itera uma array; push()- add item no final do array; pop() - remove item no final do array, shift() remove item no inicio do array, unshift() add item no inico do array, inexOf() retorna o indice de um valor, splice() remove ou substitue um item pelo indice, slice() retorna uma parte de um array existente.

/* array.forEach(function{iten , index{console.log(iten,index)})
console.log(array */

/*array.push("novo item");
console.log(array) */

/*array.pop();
console.log(array) */

/* array.shift();
console.log(array) */

/* array.unshift("novo item no inicio");
console.log(array) */

/* console.log(array.inexOf(true)) */

/* array.splice(0 , 3);
console.log(array) */

/* let novoarray= array.slice(0, 3);
console.log(array) */

// objetos Dados que possuem propriedades e valores que definem suas caracterisiticas. deve ser declarado entre chaves "{}". 
/* var xicara = {
    cor : azul
    tamanho : p
    funcao : tomarCafe ()

}*/

var object = {string: 'string', number: 2 , Boolean: true , array("array"), objectInterno: "objetoInterno" }
console.log(object)
// desistruturacao
var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var {string, Boolean, objectInterno} = object ;
console.log(string, Boolean, objectInterno);