function factorial(num) {
    // If num == 1, return 1
    if (num == 1) {
        return num;
    }
    // Return num * (num -1), until num == 1
    return num * factorial(num - 1)
}

console.log(factorial(10));
// 3628800