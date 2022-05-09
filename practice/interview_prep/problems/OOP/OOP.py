class Pizza:
    base = ''
    size = 0
    toppings = []

    def assemble(self, order):
        self.base = order[0]
        self.size = order[1]
        self.toppings = order[2]
        print(f"Pizza assembled with {self.base} crust, {self.size} inches, and {self.toppings}.")
        return
    
    def bake(self):
        print("Pizza baked!")
        return

    def calculatePrice(self):
        return 0

p1 = Pizza()
print(p1)
p1.assemble(['thin',6,'pepperoni'])
p1.bake()