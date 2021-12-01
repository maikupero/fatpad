import csv

titles = {}

with open("Favorite TV Shows - Form Responses 1.csv", "r") as file:
    reader = csv.DictReader(file)
    next(reader)
    for row in reader:
        title = row["title"].strip().upper()
        if title not in titles:
            titles[title] = 0
        titles[title] += 1
 
# sorted() sorts dicts by the keys. Can also take another argument called 'key'. which ought to be a function.
# First Class Objects. pass them around like they are variables themselves.
# Need a function to sort dictionary by its values. 
# Give it a title, it gives you the count.
def f(title):
    return titles[title]

    # Note: we do not call the function when passing it into sorted. It will call it for us.

    # Also, instead of key=f and defining our function as above, if short enough!:
    #   key=lambda, title: titles[title]
    # lambda is an anonymous function. no name chosen. does care about arguments and return value.
    #   key=lambda, argument: (return)
    
# Will call function f on every value in the dict. And use that to do the sorting.
# In descending order? reverse=true
for title in sorted(titles, key=f, reverse=True):
    print(title, titles[title])