const product = { name: 'shirt', price: 500, quantity:7}
const {price:prices, quantity, tax=2} = product
const color = product.color ? product.color:"red"
console.log(prices + " "+ quantity+ " "+ tax+ " "+ color)
console.log(`product name: ${product.name} in ${color} price is ${prices} quantity available ${quantity} on tax ${tax} `)




