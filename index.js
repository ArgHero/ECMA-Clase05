//Recursividad

//Factorial
function factorial(n){
    if(n<=1)
        return 1;
    else{
        console.log(n);
        return n * factorial(n-1);
    }
}

console.log(factorial(-1));

//Fibonacci
function fibonacci(x){
    if(x===0 || x===1)
        return x;
    else
        return fibonacci(x-1)+fibonacci(x-2);
}
console.log(fibonacci(7));


