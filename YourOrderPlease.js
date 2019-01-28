function order(words) {
    words = words.split(" ")
    let obj = {}
    for(i=0;i<words.length;i+=1){
        obj[words[i].match(/\d/g)]=words[i]
    }
    let res = []
    for(i=1;i<=words.length;i+=1){
        res.push(obj[i])
    }
    return res.join(" ")
}
console.log(order("is2 Thi1s T4est 3a"))