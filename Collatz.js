// Print the collatz sequence starting with positive integer n.
// Ex: collatz(4) should return "4->2->1"
function collatz(n){
let ni = n
let result= []
let strf = ""
for(i=0;n!=1;i+=1){
    if(n%2==0){
        n=n/2
        result.push(n)
    }else{
       n=n*3+1
        result.push(n)
        }
    }
for(i=0;i<result.length;i+=1){
    strf += "->"+ result[i]
}
return ni+ strf
}
console.log(collatz(10))