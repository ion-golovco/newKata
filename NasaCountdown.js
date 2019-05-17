function countdown(millisecs) {
    let start = millisecs.toString()
    let a, hr = 0
    let min = 0
    let sec = Math.abs(millisecs) / 1000
    if (sec % 60 < 60) {
        min += Math.floor(sec / 60)
        sec = sec % 60
    } if (min % 60 < 60) {
        hr += Math.floor(min / 60)
        min = min % 60
    }
    if (hr > 99) {
        a = -3
    } else { a = -2 }
    sec = ('0' + sec).slice(-2)
    min = ('0' + min).slice(-2)
    hr = ('0' + hr).slice(a)
    let res = []
    if (start[0] == "-") {
        res.push("-")
    } else {
        res.push("+")
    }
    let acc = [hr, min, sec].join(":")
    res.push(acc)
    return res.join("")
}
console.log(countdown(-36000000))