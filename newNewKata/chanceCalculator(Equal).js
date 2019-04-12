function round(value, precision) {
    let multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
function chance(numberOfElements, limitI) {
    let obj = {}
    let arr = []
    for (i = 0; i < limitI; i++) {
        arr.push(Math.ceil(Math.random()*numberOfElements))
    }
    for(i=0;i<arr.length;i++){
        let count = 0
        let curr = arr[i]
        for(let i = 0; i < arr.length; ++i){
            if(arr[i] == curr){
                count++;
            }
        }
        obj[arr[i]] = count
        count = 0
    }
        Object.keys(obj).map(function(key,index) {
            obj[key] = round((obj[key]/limitI)*100,2) ;
          });
    return obj
}
console.log(chance(4,50000))


//whatttt?
//this is like 1 in 2.5 million chance
/*{ '1': 1,
  '2': 1,
  '3': 1,
  '4': 1,
  '6': 2,
  '7': 1,
  '8': 1,
  '9': 1,
  '10': 1 }*/
