// Number data
const arr = [1,2,3,4,2,3,4,5,6,2,3,4,5,1,2,3]

let res = []

// Loop arr data
arr.forEach((d1) => {
    // Map res array, find exist number
    let num = res.map((d2,i2) => {
        return d2.num
    }).indexOf(d1)

    // Check if number exist
    if (num >= 0) {
        // Increment it
        res[num].total++
    } else {
        let data = {
            num: d1,
            total: 1
        }
        // Push new number
        res.push(data)
    }
})

let greates = 0
let final = []

res.map((d) => {
    // Check total
    if (d.total >= greates) {
        // Update greates with total value
        greates = d.total
        final.push(d)
    }
})

// Check if final result more than 1
if (final.length != 1) {
    let gr = 0
    let idx = 0
    // Map final, return max
    final.map((d,i) => {
        if (gr < d.num) {
            idx = i
            gr = d.num
        }
    })

    console.log(`Modus is ${final[idx].num} with ${final[idx].total} total`)
} else {
    console.log(`Modus is ${final[0].num} with ${final[0].total} total`)
}