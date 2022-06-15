


class Pizza {
    constructor(base, size, toppings) {
        this.size = size;
        this.toppings = toppings;
        this.base = base;
        this.price = pizzaPrice();
    }

    pizzaPrice() {
        const basePrices = {
            'thin': 2,
            'thick': 3
        }
        const sizePrices = {
            '6': 4,
            '12': 6,
            '18': 8
        }
        const toppingsPrices = {
            'pepperoni': 2,
            'mushroom': 1,
            'onion': 1,
            'anchovies': 3
        }

        
        return sizePrices[this.size] + basePrices[this.base] + toppingsPrices[this.toppings]
    }
}

class Drink {
    constructor(drink) {
        this.drink = drink;
        this.price = drinkPrice(drink);
    }

    drinkPrice(drink) {
        const drinkPrices = {
            'orange': 2,
            'cola': 2.50,
            'wine': 6
        }
        return drinkPrices[drink]
    }
}

class Order {
    constructor(pizza, drink) {
        this.pizza = pizza;
        this.drink = drink;
        this.deal = checkDeals();
        this.total = calculatePrice();
    }

    checkDeals() {
        return  ? null : 
    }
}


const pizza1 = new Pizza('thin', '6', ['pepperoni', 'mushroom']);
const drink1 = new Drink('orange');
const pizza2 = new Pizza('thick', '12', ['onion']);
const drink2 = new Drink('cola');

const order = new Order([pizza1, pizza2], [drink1, drink2])



// Take 2
class Pizza {
    constructor (base, size, toppings) {
        this.base = base;
        this.size = [6,12,18].includes(size) ? size : 6;
        this.toppings = toppings;
    }

    addTopping (toppingName) {
        if (this.toppingCount < 5) //Max is 5 toppings
            this.toppings.push(toppingName);
    }

    toppingPrice() {
        let count = this.toppings.length;
        let price = 0;
        // First three toppings are 1$ each, then 2$
        while (count > 0) {
            count > 2 ? price += 1 : price += 2;
            count--;
        }
        return price
    }

    pizzaPrice() {
        let price = this.toppingPrice();
        
        switch (this.base) {
            case 'thin': price += 2;
                break;
            case 'thick': price += 3;
                break;  
        }
        
        switch (this.size) {
            case 6: price += 10;
                break;
            case 12: price += 13;
                break;
            case 18: price += 16;
                break;
        }

        return price;
    }

    printDetails() {
        return `\nSize: ${this.size}, Toppings: ${this.toppings}\nPrice: ${this.pizzaPrice}`;
    }
}

let p1 = new Pizza('thin', 12, ['mushrooms','anchovies']);
p1.addTopping('Pineapples', 'Onions');
console.log(p1.printDetails());
