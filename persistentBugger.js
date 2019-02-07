function persistence(num) {
    if(num<10){return 0}
   for(i=1;i<10;i+=1){
       let nu =num.toString().split("").map(Number)
        num = nu.reduce((a,b)=>a*b)
        if(num<10){return i}
        nu = num.toString().split("").map(Number)
   }
}
console.log(persistence(999))