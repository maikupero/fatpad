# https://www.hackerrank.com/challenges/contacts

def contacts(queries):
    res = []
    names = set()
    
    for (i, query) in enumerate(queries):
        command = query[0]
        textQuery = query[1]
        if command == 'add':
            names.add(textQuery)
        elif command == 'find':
            count = 0
            for name in names:
                if name.startswith(textQuery):
                    count += 1
            res.append(count)
            
    return res