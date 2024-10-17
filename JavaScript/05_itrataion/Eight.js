const myNum = [ 1, 2, 3]

// const myTotal = myNum.reduce(function(acc, curraval) {
//     console.log(`acc: ${acc} and curraval: ${curraval}`);
//     return acc + curraval;
    
// }, 0)

const myTotal = myNum.reduce( (acc,curr) => acc+curr , 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999

    },
    {
        itemName: "py course",
        price: 999

    },
    {
        itemName: "mobile dev course",
        price: 5999

    },
    {
        itemName: "data science course",
        price: 12999

    },
]

const shoppingCartPayment = shoppingCart.reduce( (acc, item) => acc+item.price,0 )

console.log(shoppingCartPayment);
