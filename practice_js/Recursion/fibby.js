 const fibby = function(x) {
    if (x < 2) {
        return x
    } else {
        return fibby(x - 1) + fibby(x - 2)
    }
 }  // took forever because of the instances of febby not because it's a bad equation
 console.log(fibby(40));