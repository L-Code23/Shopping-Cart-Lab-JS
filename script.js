let fruit = ["Oranges(bag), 5.99", "Grapes, 4.99","Pineapple, 6.00", "Peaches(bag), 6.00"]
let meat = ["Chicken, 7.00","Ribeye, 15.00","Spareribs, 12.00","Pork Butt, 8.00"]
let drygoods = ["Curry, 5.00","Pasta, 2.00","Rice,3.00", "Bread, 3.00"]


fruit.forEach((f) =>console.log(f)) 
meat.forEach((f) =>console.log(f)) 
drygoods.forEach((f) =>console.log(f)) 


let shoppingcart = [];
function AddToCart(item, price){
    let grocery = {
        Item:item,
        Price:price
    };
    shoppingcart.push(grocery)
   
   
    
  
    console.log(shoppingcart);

}
function Checkout(price){
    let total = shoppingcart.reduce((accumulator,currentValue)=>{
    let item = currentValue.split(",");
    let price = parseFloat(item[1]);
    accumulator + price;

},0);
console.log("Total cost",totalCost.tofixed(2));
}


