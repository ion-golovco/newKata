//Genereaza numere si le incrementeaza cu un increment
let number = Math.floor(Math.random()*255)
let returnul = 0
let inc = 1
let index = 0
function incremental(n,inc){
    returnul = n+inc
}
main()
function main(){
    while(returnul<=number){
        incremental(returnul,inc)
        console.log([returnul,number])
    }
    if(number>250){
        return console.log("gata boss")
    }
    if(returnul>=number){
        index = index+1
        number = Math.floor(Math.random()*255)
        returnul = 0
        main()
    }
}


