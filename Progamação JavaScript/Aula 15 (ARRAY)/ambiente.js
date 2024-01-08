let num = [5,8,2]
num[3] = 6 //Adiciona em um espaço especifico que não exista
num.push(7) //Adiciiona em qualquer espaço
num.sort() //Coloca os numeros em ordem crescente

console.log(num)
num.length //Mostra quantos espaços tem
let posi = num.indexOf(7) //Mostra a posição que o valor 7 esta se aparecer numero negativo n existe este valor nos espaços

console.log('esta na posição: '+ posi)