let minimo = Math.min(2, -7, 8, 4, 0)
let maximo = Math.max(2, -7, 8, 4, 0)

console.log({minimo, maximo})

let nums = [2, -7, 8, 4, 0]

// A sintaxe de espalhamento é capaz de "desempacotar" um
// vetor em uma lista de valores avulsos
minimo = Math.min(...nums)
maximo = Math.max(...nums)

console.log({minimo, maximo})

console.log('vetor', nums)
console.log('soltos', ...nums)

//cd entra na pasta
//node nome_arqivo executa ele



//espalhameto de objetos
let carro1 = {marca: 'fiat', modelo: '147', cor: 'azul', ano: 1981}

//let carro2 = carro1 //copiand o carro para uma nova variavel

//carro2.marca = 'Chevrolet'
//carro2.modelo = 'Chevrolet'
//carro2.cor = 'Marrom'

//console.log({carro1, carro2})

//deu ruim pq isso é variável do tipo objetos (Vetores tambem sao objetos)
//os dois vão ter o mesmo valor pois copiar a variável assim está errado, o que esta acontecendo ai
//é que o mesmo local te 2 nomes ent na teoria nao sao duas variaveis
//na verdade o carro 2 copio a mesma posição de memoria, altera um que altera outro
//foi criado uma nova referência

//------------------------------------------------------------------------------------------------------------//

//ussando espalhamento para copiar e nao referenciar

let carro2 = {...carro1}

carro2.marca = 'Chevrolet'
carro2.modelo = 'Chevrolet'
carro2.cor = 'Marrom'
console.log({carro1, carro2})

//criando funções com um número arbitrário de parâmetros
// "..." dentro de uma função como parâmetro tem função contrario, ele cria um vetor em vez de demonta

function somaTudo(...nums){ //recebe os parâmetros como espalhamento, ele recebe os valores separados e transforma em vetor
    let soma = 0
    for(let n of nums) soma += n //vai somando os valores entre eles a cada passada, o 'OF' percorre todo o vetor
    return soma
}
console.log(somaTudo(1, 2, 3, 4)) //chama a função somaTudo e com os 4 valores, lá ele montara um vetor para somar tudo
console.log(somaTudo(1, 2))
console.log(somaTudo(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

//Função em que o meu parâmetro é fixo e os deais são asbitrários
//chamado de parâmetro de restos

function calcular(operador, ...operandos){//Se tiver esses parâmetro fixos junto com o de espalhamento, sempre o ... tem que ser o último, e só pode ter 1 deles
    switch(operador){
        case '+':
            let soma = 0
            for(let o of operador) soma += 0
            return soma
        case '*':
            let produto = 0
            for(let o of operador) produto *= 0
            return produto
    }
}

console.log(calcular('+', 1, 2, 3, 4))
console.log(calcular('*', 1, 2, 3, 4))

//usando espalhamento para concatenação de vetores

let hortalicas = ['alface', 'beterraba', 'cenoura', 'chuchu']
let frutas = ['abacaxi', 'laranja', 'maçã', 'uva']
let hortifruti = [...hortalicas, ...frutas]


console.log({hortalicas, frutas, hortifruti})

