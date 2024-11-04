function avg(numbers) {
    let s=0;
    for(let i=0;i<numbers.length;i++) {
        s+=numbers[i];
    }
    return s/numbers.length;
}

function prime(num) {
    if(num<=1)
        return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function factorial(num) {
    if (num < 0) return "The input you entered is not acceptable.";
    if (num === 0 || num === 1) return 1;
    if(num>15) return "Please enter a number less than or equal to 15."
    
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

module.exports={
    avg,
    prime,
    factorial
}