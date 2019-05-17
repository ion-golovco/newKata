function narcissistic(value) {
    let tart = value
    value = value.toString();
    value = value.split("").map(Number);
    for (i = 0; i < value.length; i += 1) {
        value[i] = Math.pow(value[i], value.length)
    }
    value = value.reduce((a, b) => a + b)
    return tart == value ? true : false
}
console.log(narcissistic(63456356))
