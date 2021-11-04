python is general purpose implementation of things
but alwyas using someone elses code for dealing with everything
lots of operations take much longer - the price of convenience.
with no compiling, you also pay the price for the interpreter.

import cs50
from cs50 import get_string
from cs50 import get_string, get_float, get_int

range
list - like an array that automatically resizes itself
tuple - math or gps, have x&y coords. comma separated values.
dict - keys and values.
set

str actually exists as a data type.

in python these are called lists, not quite arrays.
for i in [0, 1, 2]:
    print("hello, world")
could actually have put any numbers in the list since we're not printing i's values.
but long lists? range(3). i.e. for i in range(3):


i = 0
while i < 3:
    print("hello, world")
    i += 1

while True:
    print("hello, world")

indentation is NECESSARY
if x < y:
    print("x is less than y")
elif x > y:
    print("y is less than x")
else:
    print("x is equal to y")

counter += 1, but no counter++

from cs50 import get_string

answer = get_string("What's your name? ")
print(f"hello, {answer}")
# print("hello, " + answer)

ps. can use input() instead of get_string