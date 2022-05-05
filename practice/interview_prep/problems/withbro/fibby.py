from functools import cache

@cache
def fibby_iter(n: int) -> int:
    for i in range: 
        return 

def fibby_recur(n: int) -> int:
    if isinstance(n, int) and n > 0:
        if n == 1:
            return 0
        if n == 2: 
            return 1
        return fibby_recur(n-1) + fibby_recur(n-2)
    else:
        raise Exception("Error")

print(fibby_recur(100))










    


