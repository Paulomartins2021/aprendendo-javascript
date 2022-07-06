// tipos primitivos

// boleanos
var vouf = false;
console.log (typeof'vouf');

// number

var numeroqualquer = 1;
console.log(typeof 'numeroqualquer');

// string

var nome = 'Paulo';
console.log (typeof'nome');

// como declarar
// var = ecopo global e local, pode ter seu valor alterado, se nao tiver valor inicial sera tratada como null;
var variavel = 'Paulo'
console.log (variavel);

//let - escopo local de bloco, pode ter seu valor alterado, sem valor inicial null
let variavel2 = 'Alamo';
variavel2 = 'paulo'
console.log(variavel2);

//const = escopo local de bloco.somente leitura, valor inicial obrigatorio e nao pode ser alterado

const constante = 'rose';
console.log(constante);

//escopo global quando a avriavel é declarada fora de qualquer bloco sua visibilidade fica disponivel em todo codigo

var escopoglobal = 'global';
console.log(escopoglobal);

// escopo local quando a variavel é declarada dentro de um bloco e sua visibilidade pode ficar disponivel ou não.

function escopolocal() {
    let escopolocalInterno = 'local';
    console.log(escopolocalInterno);
}
escopolocal();

// regras de variaveis 
// iniciar com letras undescore _ ou $ ; nao iniciar com numero exemplo : var nome ou var_nome
// nao usar espacos exemplo var nomeCompleto ou var nome_completo
// nao usar palavras reservadas ex: var function
// declarar as variaveis sempre no topo do codigo


// atribuicao o sinal de igualdade "=" em JavaScript significa atribuicao ex var nome = "meu nome"
var atribuicao = 'paulo'


// comparacao : para fazermos uma comparacao de valores usamos "==" exemplo:
//como declarar: "0" == 0; e como ler : "0" tem o valor igual a 0 ? neste caso retorna true
 var comparacao = '0' == 0;
 console.log(comparacao);

 //comparcao identica - para fazermos uma comparacao de valores e tipos em JavaScript usamos "==="
 // exe: como declarar: "0" === 0; como ler : o "0"tem valor e o tipo identicoa 0 neste caso retorna false
 
 var comparacaoIdentica = "0" === 0;
 console.log( comparacaoIdentica);

 // operadore aritmeticos : + adicao, - subtracao, * multiplicacao, / divisao real, % divisao inteira, ** potenciacao;
 
var adicao = 1+ 1;
 console.log(adicao);

var subtracao = 2+ 1;
 console.log(subtracao);
 
var multiplicacao = 8 * 1;
 console.log(multiplicacao);
 
var divisaoreal = 16 / 4;
console.log(divisaoreal);
 
var divisaoInteira= 5 % 2;
 console.log(divisaoInteira);
 
var potenciacao= 2 ** 10;
console.log(potenciacao);

// operadores relacionais soa operadores que consultam a relacao entre valoes : > maoir uqe , < menor que, >= maior ou igual a , <= menor ou igual a.

var maior = 5 > 2;
console.log(maior);

var menor = 5 < 2;
console.log(menor);

var maiorouigual = 5 >= 2;
console.log(maiorouigual);

var menorouigual = 5 <= 2;
console.log(menorouigual);

// operadores logicos que consultam valores logicos : && = "e" considera que todos os valores sejam true; || - "ou" considera que qualquer valor seja true; ! - "nao" inverte o valor de true para false ou vice-versa.

var e = true && false ;
console.log(e);

var ou = true || false ;
console.log(ou);

var nao = !- false ;
console.log(nao);


