function calculadora(){
    const operacao = parseInt(prompt('Escolha uma operacao:\n1 - soma(+} \n2 - subtracao(-)\n3 - multiplicacao(*) \n4 - divisao real (/) \n5 - divisao inteiro(%) \n6 - potenciacao (**)'));

    if (!operacao|| operacao > 7){
        alert('Erro - operacao invalida');
        calculadora();
    } else {
        let n1 = parseFloat(prompt('Insira o primenro valor:'));
        let n2 = parseFloat(prompt('Insira o segundo valor:'));
        let resultado;
        
        if (!n1 || !n2){
            alert('Eroo - parametros invalidos')
            calculadora();
        }else{
    
        function soma(){
            resultado = n1 + n2;
            alert (`${n1} + ${n2} = ${resultado}`)
            novaOperacao();
        }
        function subtracao(){
            resultado = n1 - n2;
            alert (`${n1} - ${n2} = ${resultado}`)
            novaOperacao();
        }
        function multiplicacao(){
            resultado = n1 * n2;
            alert (`${n1}* ${n2} = ${resultado}`)
            novaOperacao();
        }
        function divisaoReal(){
            resultado = n1 / n2;
            alert (`${n1} / ${n2} = ${resultado}`)
            novaOperacao();
        }
        function divisaoInteira(){
            resultado = n1 % n2;
            alert (`o resto da divisao entre ${n1} e ${n2} é igual a ${resultado}`)
            novaOperacao();
        }
        function potenciacao(){
            resultado = n1 ** n2;
            alert (`${n1} elevado a  ${n2} ª e igual a  ${resultado}`)
            novaOperacao();
        }
        function novaOperacao (){
            let opcao = prompt('Deseja fazer outra operacao? \n1 = sim \n2 = nao');
            if (opcao == 1){
                calculadora();
            }else if (opcao == 2){
                alert('Ate mais')
            }else {
                alert ('Digite uma operacao valida')
                novaOperacao();
        }
            
        }
    /*if (operacao == 1){
        soma ();
    }else if (operacao == 2){
        subtracao ()
    }else if ( operacao == 3){
        multiplicacao();
    }else if ( operacao == 4){
        divisaoReal();
    } else if ( operacao == 5){
        divisaoInteira();
    }else if( operacao == 6){
        potenciacao();
    }*/
    }}
    switch (operacao){
        case 1 :
            soma();
            break;
            case 2 :
                subtracao();
                break;
                case 3 :
                    multiplicacao();
                    break;
                    case 4 :
                        divisaoReal();
                        break;
                        case 5 :
                            divisaoInteira();
                            break;
                            case 6 :
                                potenciacao();
                                break;
                                default :
                                break;
    }
}
calculadora();

// funcoes = https://developer.mozila.org/pt-BR/docs/Web/JavaScript/Guide?functions
// Number = htpps://developer.mozila.org/pt-BR/docs/Web/JavaScript/Reference/Global Objects/Number
// Window.prompt = htpps://developer.mozila.org/pt-BR/docs/Web/API/Window/prompt