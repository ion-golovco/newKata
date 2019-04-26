//Genereaza numere si le incrementeaza cu un increment

let number = Math.floor(Math.random()*255)
let returnul = 0
let inc = 1
let index = 0

function incremental(n,inc){
    returnul = n+inc
}
function minusIncremental(n,inc){
    returnul = n-inc
}
main()
function main(){
    if(returnul<number){
        while(returnul<number){
            incremental(returnul,inc)
            console.log([returnul,number])
        }
    }
    if(returnul>number){
        while(returnul>number){
            minusIncremental(returnul,inc)
            console.log([returnul,number])
          }
    }

    //This is a limit because it does create infinite arrays so it nedds an end
    if(number>220){
        return console.log("gata boss")
    }

    if(returnul>=number){
        index = index+1
        number = Math.floor(Math.random()*255)
        main()
    }
}

