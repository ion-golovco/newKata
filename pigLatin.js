function pigIt(str){
  str = str.split(" ")
  let acc = []
  for(i=0;i<str.length;i+=1){
    if(str[i]!=="!"&&str[i]!==","&&str[i]!=="."&&str[i]!=="?"){
    curr = str[i][0]
    acc=str[i].slice(1)
    str[i]=acc+curr+"ay"
     }
  }
return str.join(" ")
}
console.log(pigIt('Pig latin is cool ?'))