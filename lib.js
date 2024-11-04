function avg(numbers) {
    let s=0;
    for(let i=0;i<numbers.length;i++) {
        s+=numbers[i];
    }
    return s/numbers.length;
}

function prime(num) {
    return false;
}

function factorial(num) {
    return -1;
}

module.exports={
    avg,
    prime,
    factorial
}