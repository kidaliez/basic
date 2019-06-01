function fibo(num) {
    let loop = true
    let until = 1

    let after = 1
    let before = 1

    let res = 1
    
    // Loop untill loop == false
    while (loop) {
        // Check if untill == num
        if (until == num) {
            loop = false
        }
        // Update before with old res value
        before = res
        // Update res with after
        res += after
        // Update after with before
        after = before
        // Console res
        console.log(res)
        // Until + 1
        until++
    }

    
}

fibo(10)
// 2 3 5 8 13 21 34 55 89 144