let input = (n) => {
    let array = n;
    console.log(array);
    array.forEach((y, yIdx) => {
        y.forEach((x, xIdx) => {
            y[x] += 1;
            console.log(x, xIdx);
        });
        console.log(y, yIdx);
        array[y] += 1;
    });
    return array
}

console.log(input(
[1,2,3],
[4,5,6],
[7,8,9]
));