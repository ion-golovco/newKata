function createPhoneNumber(numbers){
  let res = "("
  for(i=0;i<numbers.length;i+=1){
    if(i>2){res+=") ";break}
    res+=numbers[i]
  }
  for(i=3;i<numbers.length;i+=1){
    if(i>5){res+="-";break}
    res+=numbers[i]
  }
  for(i=6;i<numbers.length;i+=1){
    res+=numbers[i]
  }
  return res
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))