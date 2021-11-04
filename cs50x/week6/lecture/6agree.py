from cs50 import get_string

s = get_string("Do you agree? ")

if s.lower() in ["y", "yes"]:
    print("Agreed.")
elif s.lower() in ["n", "no"]:
    print("Not agreed.")
else:
    print("Give me a Y or N brother, try again.")

# Can use single and double quotes interchangeably .. ? 
# In python there is no char type. Everything's a string. Less control, more features.