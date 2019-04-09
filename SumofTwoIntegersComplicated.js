function add(x, y) {
    let minus
    if (x < 0) {
        minus = Math.abs(x) / x
    }
    if (y < 0) {
        minus = Math.abs(y) / y
    }
    let arr1 = new Array(Math.abs(x)).fill(0)
    let arr2 = new Array(Math.abs(y)).fill(0)
    if (x > 0 && y > 0) {
        let res = [].concat(arr1, arr2)
        return res.length
    } else if (x < 0 && y < 0) {
        let su = arr1.concat(arr2)
        return su.length * minus
    } else if (x < 0 || y < 0) {
        if (arr1.length > arr2.length) {
            arr1.splice(0, arr2.length)
            return arr1.length * minus
        } else {
            arr2.splice(0, arr1.length)
            return arr2.length * minus
        }
    }
}
console.log(add(-5074666, 44546555))
//works damn
