String.prototype.camelCase=function(){
 let str =this.split(" ")
 let arr = []
  for(i=0;i<str.length;i+=1){
    arr.push(str[i].charAt(0).toUpperCase() + str[i].slice(1))
  }
  return arr.join("")
}
console.log(camelCase("test case"))