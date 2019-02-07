function humanReadable(seconds) {
    if (seconds > 359999) { return "no" }
    let min = 0
    let hours = 0
    for (i = 0; i < 1; i += 1) {
        if (seconds % 60 < 60) {
            min += Math.floor(seconds / 60)
            seconds = seconds % 60
        } if (min % 60 < 60) {
            hours += Math.floor(min / 60)
            min = min % 60
        }
    }
    let time = [hours, min, seconds]
    for (i = 0; i < time.length; i += 1) {
        time[i] = "0" + time[i]
        time[i] = time[i].slice(-2)
    }
    return time.join(":")
}
console.log(humanReadable(300))