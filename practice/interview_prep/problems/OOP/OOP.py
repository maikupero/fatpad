from typing import List

class Topping:
    def __init__(self, name, purchase_price, store_price):
        self.name = name
        self.purchase_price = purchase_price
        self.store_price = store_price


class Drink:
    def __init__(self, flavor: str):
        self.flavor = flavor
    
    def get_price(self) -> int:
        return drinkPrices[self.flavor]

class Pizza:
    def __init__(self, base: str, size: str, toppings: List[Topping]):
        self.base = base
        self.size = size
        self.toppings = toppings

    def get_price(self, price_type) -> float:
        toppingsPrice = sum([getattr(topping, price_type) for topping in self.toppings])
        return sizePrices[self.size] + basePrices[self.base] + toppingsPrice

        
class Order:
    def __init__(self, pizzas: List[Pizza], drinks: List[Drink]):
        self.pizzas = pizzas
        self.drinks = drinks


    def calculate_price(self, deal):
        price = sum([drink.get_price() for drink in self.drinks])

        price += self.apply_deal(self.pizzas, deal)

        for i, pizza in enumerate(self.pizzas): 
            if i % 2 == 0:
                price += pizza.get_price() * .5
            else:
                price += pizza.get_price()

        return price


basePrices = {
    'thin': 2,
    'thick': 3
}
sizePrices = {
    '6': 4,
    '12': 6,
    '18': 8
}
tops = {
    'pepperoni': Topping("Big Peppa'", 3, 2),
    'mushroom': Topping("The Mush'", 2.5, 1.5),
    'onion': Topping("Ony Honey", 4, 3),
    'anchovies': Topping("Stinky Fish", 5, 1)
}

drinkPrices = {
    'orange': 2,
    'coke': 2.5,
    'water': 1
}

myPizza = Pizza('thin', '6', [tops['pepperoni'], tops['mushroom']])
print(f"{myPizza.get_price('purchase_price') - myPizza.get_price('store_price')}")


























# class Pizza:
#     base = ''
#     size = 0
#     toppings = []

#     def assemble(self, order):
#         self.base = order[0]
#         self.size = order[1]
#         self.toppings = order[2]
#         print(f"Pizza assembled with {self.base} crust, {self.size} inches, and {self.toppings}.")
#         return
    
#     def bake(self):
#         print("Pizza baked!")
#         return

#     def calculatePrice(self):
#         return 0

# p1 = Pizza()
# print(p1)
# p1.assemble(['thin',6,'pepperoni'])
# p1.bake()