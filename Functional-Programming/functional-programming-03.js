//Reduce basic
var orders = [
    { amount: 50},
    { amount: 500},
    { amount: 350},
    { amount: 225}
]

var totalAmount = orders.reduce(function(sum, order) {  //ES5
    return sum + order.amount
}, 0)

var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0)  //ES6

console.log(totalAmount) // 1125