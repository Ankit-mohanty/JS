const arr = [1, 2, 3];/* 
const mytotal = arr.reduce((acc,curval)=>{
    console.log(`acc value is ${acc} and Current Value is ${curval}`);
    return acc + curval;  
},0) */
const mytotal = arr.reduce((acc, curr) => acc + curr, 0);
console.log(mytotal); // 6
/*acc value is 0 and Current Value is 1
acc value is 1 and Current Value is 2
acc value is 3 and Current Value is 3
6
  */
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
];
const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0);
console.log(priceToPay);//22996