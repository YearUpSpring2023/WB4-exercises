function getMealCost(orders) {
    let sum = 0;
    let numOrders = orders.length;
    for (let i = 0; i < numOrders; i++) {
        sum += orders[i].price;

    }
    return sum;
}

let myOrder = [
    { item: "Chicken Tacos", price: 8.95 },
    { item: "Guacamole", price: 2.85 },
    { item: "Sweet Tea", price: 2.75 }
];
let yourOrder = [
    { item: "Hamburger", price: 6.95 },
    { item: "Fries", price: 2.25 },
    { item: "Sweet Tea", price: 2.75 },
    { item: "Fried Apple Pie", price: 4.95 }
];

let mealCost = getMealCost(myOrder);

let totalWithTip = mealCost * 1.2;
console.log("My meal costs " + totalWithTip.toFixed(2));
mealCost = getMealCost(yourOrder);
totalWithTip = mealCost * 1.2;
console.log("Your meal costs " + totalWithTip.toFixed(2));
