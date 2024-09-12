//jeito anterior

/*const lista = [100,80,60,120,90]
onst soma = (acc,num) => acc + num 
const soma0 = (num) => num*1
const resultado = [(lista.reduce(soma))]

console.log(resultado.map(soma0))
*/

//novo jeito

const lista = [100,80,60,120,90]
const soma = (acc,num) => acc + num 
const soma0 = (num) => num*0 +resultado
const resultado = (lista.reduce(soma))

console.log(lista.map(soma0))