function high(x) {
    let abc = ' abcdefghijklmnopqrstuvwxyz'.split("")
    let res = {}
    let curr = 0
    x = x.split(" ")
    let arr = []
    for (let cu, j, i = 0; i < x.length; i += 1) {
        for (j = 0; j < x[i].length; j += 1) {
            for (cu = 1; cu < abc.length; cu += 1) {
                if (x[i][j] == abc[cu]) {
                    curr += cu
                }
            }
        }
        arr.push([curr, x[i]])
        curr = 0
    }
    for(i=0;i<arr.length;i+=1){
        res[arr[i][1]]=arr[i][0]
    }
    res = Object.keys(res).sort(function(a,b){return res[a]-res[b]})
    return res[res.length-1]
}
console.log(high("man i need a taxib up to ubudxx"))