/* estruturas condiconais: sao instrucoes para realizar determinadas tarefas a partir de uma condicao, seja de decisao ou repeticao , exemplo : um jogo precisa mudar o placar toda vez que um jogador marca a pontuacao. podemos utilizar as palavras reservadas "if" para esclarecer uma condicao ; */

var jogador1 = 1;
var jogador2 = 0; 
var placar ;
// ninho de if = podemos usar o if dentro de outro if , chamamos de aninhamento de if's ou ninho de if's

/*if (jogador1 !==-1){
if(jogador1>0){ 
    console.log('Jogador 1 marcou ponto');
}else if(jogador2>0) {
    console.log('jogador 2 marcou ponto')
}else {
console.log('ninguem marcou ponto')
}} */

// if ternario = podemos tambem fazer uma verificao em uma unica linha usando o if ternario ex. [condicao]? [intrucao]: [instrucao2]; jogador1>0 ? console.log ('marcou ponto): console.log ('nao marcou ponto);

// usando if ternario
jogador1 !== -1 && jogador2 !== -1 ? console.log ('os jogadores sao validos'): console.log('jogadores invalidos');

//usando if
if(jogador1>0 && jogador2 == 0) { 
    console.log('Jogador 1 marcou ponto');
    placar = jogador1 > jogador2 ;
// usando else if
}else if(jogador2>0 && jogador1 == 0 ) {
    console.log('jogador 2 marcou ponto');
    placar = jogador2 . jogador1;
}
//usando else
else {
console.log('ninguem marcou ponto')
}
/* usando switch/case = funciona como uma estrutura condicional tambem ex. 

switch (${expresao}{
    case 1 :
        ${instrucao};
    break;
    case 2:
        ${instrucao};
    break;
}*/

switch(placar){
    case placar = jogador1 > jogador2 :
        console.log('jogador 1 ganhou');
        break;
        case placar = jogador2 > jogador1 :
            console.log('jogadpr 2 ganhou') ;
            break;
            default:
            console.log('ninguem ganhou');
            break;

}

// lscos de repeticao = sao estruturas condicionais que repetem uma instrucao ate atingir determinada condicao : for , for/in, for/of, while, do/while

// usando for : for ([expreaoInicial]; [condicao]; [incremento]){declaracao}

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5',];

let object = { propriedade1 :'valor1', propriedade2 : 'valor2', propriedade3 : 'valor3',}

// for - executa uma funcao ate que ela seja falsa

for( let indice = 0; indice < aaray.length ; indice ++){
    console.log(indice)
}

// for/in funciona como repeticao a partir de uma propriedade: for ([indice] in [objeto do array]){ declaracao}

for (let i in array){
    console.log(i);
}

// com objest

for (i in object){
    console.log(i);
}

// for/of = funciona como uma repeticao a partir de um valor = for ([indice]of [array]){declaracao}

for (i of array){
    console.log (i);
}

// for/of object nao da para usar pois imprime cada letra em uma linha

/*for (i of object.propriedade1){
    console.log(i);
}*/

//while executa uma instrucao enquanto determinada condicao for verdadeira, a verficacao e feita antes da execucao 


var a = 0;
while (a<10){
    a++;
    console.log(a);
}
// Do/while executa uma instrucao 'ate que" determinada condicao seja falsa, a verificacao é feita depois da excucao;

do {
    a++;
    console.log (a);
}while (a < 10)