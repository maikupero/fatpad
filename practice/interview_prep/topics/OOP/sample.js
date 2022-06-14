//Class Pizza
class Pizza { //Thin Crust
    constructor (name, size, toppings)
    {
        this.name=name;
        if(size < 1 || size > 3)
            this.size=1;
        else
            this.size=size;
        this.toppings=toppings;
    }
    addTopping (topName){
        if (this.toppingCount < 5) //Max is 5 toppings
            this.toppings.push(topName);
    }
    get toppingCount(){
        return this.toppings.length;
    }
    get pizzaPrice(){
        //sm 10 , md= 13 , lrg=16
        //toppings 3 each
        let price=0;
        switch(this.size){
            case 1: price += 10 + ( 3 * this.toppingCount);
                break;
            case 2: price += 13 + ( 3 * this.toppingCount);
                break;
            case 3: price += 16 + ( 3 * this.toppingCount);
                break;
        }
        return price;
    }
    //Add printDetails
    get pizzaWeight(){
        let weight=0;
        switch(this.size){
            case 1: weight += 120;
             break;
            case 2: weight += 230;
             break;
            case 3: weight += 310;
            break;
        }
        return weight;
    }
    get pizzaCalories(){
        switch(this.size){
            case 1: return 180 + ( 10 * this.toppingCount);
            case 2: return 330 + ( 10 * this.toppingCount);
            case 3: return 410 + ( 10 * this.toppingCount);
        }
    }
    printDetails() {
        return `\nName: ${this.name}, Size: ${this.size}, Toppings: ${this.toppings}\nPrice: ${this.pizzaPrice}, Weight: ${this.pizzaWeight} Calories: ${this.pizzaCalories}`;
    }
}
let tops=['cheese', 'olives'];
let p1 = new Pizza('Margreeta', 2, tops);
p1.addTopping('Pineapples');
console.log(p1.printDetails());

//Thick Crust 
//Weight +100sm +150md +200lrg
//Calories +150sm + 230md + 330lrg
//Same price
class ThickCrust extends Pizza{
    constructor(name, size, toppings) {
        super("Thick Crust:" + name, size, toppings);
    }
    get pizzaWeight() {
        let weight = 0;
        switch (this.size) {
            case 1:
                weight += super.pizzaWeight + 100;
                break;
            case 2:
                weight +=super.pizzaWeight + 150;
                break;
            case 3:
                weight +=super.pizzaWeight + 200;
                break;
        }
        return weight;
    }
    get pizzaCalories() {
        switch (this.size) {
            case 1:
                return super.pizzaCalories + 150;
            case 2:
                return super.pizzaCalories + 230;
            case 3:
                return super.pizzaCalories + 330;
        }
    }
}

let tops1=['cheese', 'Peperoni - HALAL'];
let p2 = new ThickCrust('Margreeta', 1, tops1);
p2.addTopping('Pineapples');
p2.addTopping('Jalapenos');
console.log(p2.printDetails());

//Stuffed Crust - Thick Crust ONLY extent it.
//price +5sm +9md + 13lrg
//Calories +50sm +80md + 130lrg
class StuffedCrust extends ThickCrust {
    constructor(name, size, toppings) {
    super( name+' -Stuffed', size, toppings);
    this.size = size;
    }
    get pizzaPrice(){
    //sm 10 , md= 13 , lrg=16
    //toppings 3 each
    let price=0;
    switch(this.size){
    case 1: price += 10;
    break;
    case 2: price += 13;
    break;
    case 3: price += 16;
    break;
    }
    return super.pizzaPrice + price;
    }
    get pizzaCalories(){
    let crust = 0;
    switch(this.size) {
    case 1: crust += 5;
    case 2: crust += 9;
    case 3: crust += 130;
    }
    return super.pizzaCalories + crust;
    }
   }
   let p3 = new StuffedCrust('Chicken Ranch - Spicy', 3, tops1);
   console.log(p3.printDetails());
//Create Order Class -- 
//Composition of : Array of Pizzas + Customer ID 
//Functions
//1. Order Price - use reduce
//2. Order Count - simple
//3. Pizza with max calories -> filter?
//4. List Pizza by Size - > showPizzaSize(size) (size 1 to 3)
//5. Order details - reuse the Pizza details and show totals

let pizzas=[p1,p2,p3];
let custID=1000;

class PizzaOrder {
    constructor(pizzas, id){
        this.pizzas=pizzas;
        this.id=id;
    }
    get pizzaCount(){
        return this.pizzas.length;
    }
    get orderPrice(){
        let p = this.pizzas.reduce((acc, curr) => acc+=curr.pizzaPrice, 0);
        return p;
    }

    get totalCalories(){
        let totCal = pizzas.reduce((acc,curr) => acc += curr.pizzaCalories,0)
        return totCal;
    }
    get maxCaloryPizza(){
        let m = this.pizzas.reduce((acc, curr) => acc.pizzaCalories>curr.pizzaCalories?acc:curr,{});
        //return m;

        let maxCalPizza =pizzas.filter(p => p.pizzaCalories===Math.max(...pizzas.map(p => p.pizzaCalories), 0));
        return maxCalPizza;
    }
    pizzasBySize(size){
        return pizzas.filter(p=>p.size===size);

    }
    orderDetails(){
        let details =`Pizza count: ${this.pizzaCount}, Order price: ${this.orderPrice}, Total calories: ${this.totalCalories}\n`;
        this.pizzas.forEach(p => details+=p.printDetails());
        return details;
        

    }
}

let o1 = new PizzaOrder(pizzas, custID);
console.log(o1.pizzaCount);
console.log(o1.orderPrice);
console.log('Max Calory Pizza: ', o1.maxCaloryPizza);
console.log(o1.totalCalories);
console.log(o1.pizzasBySize(1));
console.log(o1.orderDetails());