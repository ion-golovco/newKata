function findOutlier(integers){
  let arrOdd = integers.filter(a=>a%2!==0)
  let arrEven = integers.filter(a=>a%2==0)
  if(arrOdd.length==1){
      return +arrOdd
  }else{
      return +arrEven
  }
}