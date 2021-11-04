    # What about taking input here?
def main():
    meow(3)

def meow(n):
    for i in range(n):
        print("meow")

main()

    # Need to call main at the bottom
def main():
    for i in range(3):
        meow()

def meow():
    print("meow")

main()

    # Can define a main function like this, like we do in C. 
    # But even then it doesn't work.
# def main():
#     for i in range(3):
#         meow()

# def meow():
#     print("meow")


    # This will not work:
# for i in range(3):
#     meow()

# def meow():
#     print("meow")


# for i in range(3):
#     print("meow")