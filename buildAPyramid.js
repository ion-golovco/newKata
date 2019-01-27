function towerBuilder(nFloors) {
    let sp = nFloors - 1
    let space = " "
    let stea = "*"
    let res = []
    let j = 1
    for (i = 0; i < nFloors; i += 1) {
        res.push(space.repeat(sp) + stea.repeat(j) + space.repeat(sp))
        sp -= 1
        j += 2
    }
    return res
}
console.log(towerBuilder(4))
