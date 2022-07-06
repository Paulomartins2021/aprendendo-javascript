// o que sao funcoes = sao blocos de comandos e instrucoes para a execucao de determinadas tarefas: ex function nomeDaFuncao(){ ${instrucao};} nomeDaFuncao();

function funcao(){
    console.log( 'essa mensagem veio de uma funcao');
}
funcao();

// como declarar : geralmente se utiliza a palavra reservada "function" seguida de parenteses '()'e '{}'chaves ; ()indica quee um objeto fo tipo function e {} indica que e um bloco de instrucao.

// funcoes com parametros = as funcoes podem receber em sua declaracao, para,etros, que servem como variaveis, onde sua atribuicao pode ser feita durante a chamada da funcao ex. function nomeDaFuncao(paramentro){ ${instrucao};} nomeDaFuncao(valorDoParametro)

function mensagem(primeiro, segundo){
    console.log(primeiro, segundo)
}
mensagem('Tudo certo' , 'jovem')

// Funcoes - https://developer.mozila.org/pt-BR/docs/Web/JavaScript/Guide/Functions