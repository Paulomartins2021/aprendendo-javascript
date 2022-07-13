function comparaNumeros(num1, num2){

    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criarSegundaFrase(num1, num2),
    return '${primeiraFrase} $ {segundaFrase}'
}
function criaPrimeiraFrase(num1, num2){
    let saoIguais = '';

    if (num1 !== num2){
        saoIguais = 'nao';
    }
    return 'Os numeros $(num1) e $(num2) $ (saoIguais) sao iguais.'
}
function criarSegundaFrase (num1, num2){
    const soma = num1 + num2 ;
    let resultado10 = 'menor';
    let resutado20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;
    if( compara10){
        resultado10 = 'maior'
    }
    if (compara20) {
        resultado20 = 'maior';
    }
    return 'Sua some é ${soma} , que e ${resultado10} que 10 e ${resultado20} que20'
}
console.log(comparaNumeros(1, 2));
   
   
   
  /*  const saoIguais = num1 === num2;
    const soma = num1 + num2;

   if (saoIguais){
        return"Sao iguais";
    }
         return "Nao sao iguais";

 return sao iguais ? "Sao iguais" : "nao sao iguais" operador condicional */
