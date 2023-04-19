function exercicio1(){
/*Desenvolva um algoritmo para percorrer um vetor de 15 elementos
inteiros já preenchido e imprima todos os valores pares.*/

    let elementos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    for(let item of elementos){
       if(elementos[item]%2===0){
       document.write(`${elementos[item]} `);
       }
    }

}

function exercicio2(){
/*Desenvolva um algoritmo para percorrer um vetor de 20 elementos inteiros 
e no final mostre a soma de todos os elementos.*/

    let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    let soma = 0;

    for(let i=0; i<vetor.length;i++){
        soma+=vetor[i];
    }
    console.log(soma);

}

function exercicio3(){
/*/*Desenvolva um algoritmo que preenche um vetor com os 4 primeiros números 
perfeitos.*/    
    
    let perfectNumber = [];
    let number = 2;
    let divisor = 0;

    while (perfectNumber.length < 4) {
        for (let i = 1; i < number; i++) {
            if (number % i === 0) {
            divisor += i;
        }
    }
    
    if (divisor === number) {
    perfectNumber.push(number);
    }
    divisor = 0;
    number++;
    }
    document.write(`${perfectNumber}`);
}

function exercicio4(){


    function unirVetores(){
        let vetor1 = [];
        let vetor2 = [];
        let vetorUnido = [];

        for(let i=1; i<=10;i++){
            vetor1[i] = Number.parseInt(prompt(`Digite o ${i}º número inteiro do primeiro vetor:`));
            vetorUnido.push(vetor1[i]);
        }
       
        for(let n=1; n<=10;n++){
            vetor2[n] = Number.parseInt(prompt(`Digite o ${n}º número inteiro do segundo vetor:`));
            vetorUnido.push(vetor2[n]);
        }

        console.log(vetorUnido);
    }

    unirVetores();

}

function exercicio5(){
/*Crie uma função que recebe um vetor de inteiros e um número inteiro e 
retorne verdadeiro se o número faz parte do vetor ou falso se não faz 
parte.*/

    let vetor = []
    let numero = 0;
    let identificador = false;

    function identificarNumero(){
        
        for(let i=0; i<=9;i++){
            vetor[i] = Number.parseInt(prompt(`Digite o ${i+1}º número do array: `));
        }

        numero = Number.parseInt(prompt('Digite um número para verificar se faz parte do array: '));

        for(let j=0; j<=9; j++){
            if(vetor[j]===numero){
                identificador = true;
            }
        }

        if(identificador){
            console.log('O número digitado faz parte do array informado.');
        }else{
            console.log('O número digitado não faz parte do array informado.');
        }

    }

    identificarNumero();

}

function exercicio6(){
/*Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes, e que exiba a lista desses nomes na tela. Após exibir essa lista, o programa deve mostrar também os nomes na ordem inversa em que o usuário os digitou.

Ex:
Entrada: Édson, Marcelo, Letícia, Ju, Thobias
Saída: Thobias, Ju, Letícia, Marcelo, Édson*/

    let listaNomes = [];

    for(let i=0; i<=4; i++){
        listaNomes[i] = prompt(`Digite o ${i+1}º nome: `);
    }

    alert(listaNomes);

    listaNomes.reverse();

    alert(listaNomes);
}



