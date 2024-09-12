const lista = [100, 80, 60, 120, 90]
const soma= (acc,num) => acc + num
const multi1 = (num) => num*1
const resultado = [(lista.reduce(soma))]

console.log(resultado.map(multi1))