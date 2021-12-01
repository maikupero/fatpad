from cs50 import get_int

# Get input for height
while True:
    height = get_int("Height: ")
    if height > 0 and height < 9:
        break

# Separator for inbetween the two pyramids.
spaces = "  "

# Build!
for i in range(1, height + 1):
    print(" " * (height - i), end="")
    print("#" * i, end="")
    print(spaces, end="")
    print("#" * i)