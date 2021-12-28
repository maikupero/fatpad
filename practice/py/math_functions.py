# -------------------------------------------------------------------------------
# --------------------------- Enlightening solutions ----------------------------
# -------------------------------------------------------------------------------
# What is going on here?
class Int(int):
    """Pseudo-int with operation on it.
    """
    def __init__(self, value=0):
        super(Int, self).__init__(value)
        self.operation = None

    def __call__(self, operand=None):
        if operand is None:
            return self
        elif operand.operation == 'times':
            return self * operand
        elif operand.operation == 'plus':
            return self + operand
        elif operand.operation == 'minus':
            return self - operand
        elif operand.operation == 'divided_by':
            return self / operand


def operation(name):
    def _operation(arg):
        arg.operation = name
        return arg
    return _operation


(zero, one, two, three, four, five, six, seven, eight, nine) = (
                                        Int(0),Int(1), Int(2), Int(3), Int(4),
                                        Int(5), Int(6), Int(7), Int(8), Int(9))

plus = operation('plus')
minus = operation('minus')
times = operation('times')
divided_by = operation('divided_by')

# Much cleaner
def zero(f = None): return 0 if not f else f(0)
def one(f = None): return 1 if not f else f(1)
def two(f = None): return 2 if not f else f(2)
def three(f = None): return 3 if not f else f(3)
def four(f = None): return 4 if not f else f(4)
def five(f = None): return 5 if not f else f(5)
def six(f = None): return 6 if not f else f(6)
def seven(f = None): return 7 if not f else f(7)
def eight(f = None): return 8 if not f else f(8)
def nine(f = None): return 9 if not f else f(9)

def plus(y): return lambda x: x+y
def minus(y): return lambda x: x-y
def times(y): return lambda  x: x*y
def divided_by(y): return lambda  x: x/y

# -------------------------------------------------------------------------------
# -------------------------------- My solution ----------------------------------
# -------------------------------------------------------------------------------
# First intuition: Kinda cool, unique problem. 
# Got it clean on my first try 
# - however, turns out I didn't know what a lambda was.
def operate(left, operand, right):
        if operand == '+':
            return (left + right)
        elif operand == '*':
            return (left * right)
        elif operand == '-':
            return (left - right)
        elif operand == '/':
            return (left // right)

def zero(operand=None): 
    if not operand:
        return 0
    else:
        return operate(0, operand[0], operand[1])
def one(operand=None): 
    if not operand:
        return 1
    else:
        return operate(1, operand[0], operand[1])
def two(operand=None): 
    if not operand:
        return 2
    else:
        return operate(2, operand[0], operand[1])
def three(operand=None): 
    if not operand:
        return 3
    else:
        return operate(3, operand[0], operand[1])
def four(operand=None): 
    if not operand:
        return 4
    else:
        return operate(4, operand[0], operand[1])
def five(operand=None): 
    if not operand:
        return 5
    else:
        return operate(5, operand[0], operand[1])
def six(operand=None): 
    if not operand:
        return 6
    else:
        return operate(6, operand[0], operand[1]) 
def seven(operand=None): 
    if not operand:
        return 7
    else:
        return operate(7, operand[0], operand[1]) 
def eight(operand=None): 
    if not operand:
        return 8
    else:
        return operate(8, operand[0], operand[1])
def nine(operand=None): 
    if not operand:
        return 9
    else:
        return operate(9, operand[0], operand[1])

def plus(right): return ('+', right)
def times(right): return ('*', right)
def minus(right): return ('-', right)
def divided_by(right): return ('/', right)

print(f"Tested: {seven(times(five()))}\nExpect: {35}")
print(f"Tested: {four(plus(nine()))}\nExpect: {13}")
print(f"Tested: {eight(minus(three()))}\nExpect: {5}")
print(f"Tested: {six(divided_by(two()))}\nExpect: {3}")

# Move the first letter of each word to the end of it, 
# then add "ay" to the end of the word. Leave punctuation marks untouched.

# https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/python