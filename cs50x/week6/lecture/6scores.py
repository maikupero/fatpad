from cs50 import get_int

scores = []
for i in range(3):
    scores.append(get_int("Score: "))

average = sum(scores) / len(scores)
print(f"Average: {average}")

# scores = [72, 73, 33]

# average = sum(scores) / len(scores)
# print(f"Average: {average}")


# scores = [72, 73, 33]

# print(f"Average: {sum(scores) / len(scores)}")

    # Just cast the float as a str
# scores = [72, 73, 33]

# print("Average: " + str(sum(scores) / len(scores)))