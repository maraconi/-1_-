function number(n) {
    let numbers = []
    step:
        for(let i = 1; (k = numbers.length) < n; i++) {
            for(let j = 2; j < k; j++) {
                if ( i % j == 0) continue step;
            }
            numbers.push(i);
        }
        return numbers;
}
console.log(number(+process.argv[2]));

