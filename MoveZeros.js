var moveZeros = function (arr) {
   let zeros = 0
   for(let i=0;i<arr.length;i+=1){
     if(arr[i]==0){
     arr.splice(i,1)
     i-=1
     zeros+=1
     }
    }
   for(i=0;i<zeros;i+=1){arr.push(0)}
  return arr
}
console.log(moveZeros(["a",1,2,"b",0,0,1,null,0,1,0,3,0,1]))