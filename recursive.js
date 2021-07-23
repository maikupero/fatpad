 const fibby = function(x) {
    if (x < 2) {
        return x
    } else {
        return fibby(x - 1) + fibby(x - 2)
    }
 }  // took forever because of the instances of febby not because it's a bad equation
 console.log(`expected 1, returned ${fibby(1)}`)
 console.log(`expected 3, returned ${fibby(4)}`)
 console.log(`expected 5, returned ${fibby(5)}`)
 console.log(`expected 21, returned ${fibby(6)}`)
 console.log(`expected 6765, returned ${fibby(18)}`)
 console.log(fibby(35))
 console.log(fibby(40))
 console.log(fibby(41))
 console.log(fibby(42))
 console.log(fibby(43))
 console.log(fibby(44))
 console.log(fibby(45))