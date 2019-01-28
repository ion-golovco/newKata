function duplicateCount(text) {
    text = text.toLowerCase().split("")
    text = text.reduce((acc, curr) => {
        if (!acc[curr]) {
            acc[curr] = 0;
        }
        acc[curr]++;
        return acc;
    }, {})
    let acc = 0
    let res = Object.values(text)
    for (let i = 0; i < res.length; i += 1) {
        if (res[i] > 1) {
            acc += 1
        }
    }
    return acc
}
console.log(duplicateCount("abcdAAae"))