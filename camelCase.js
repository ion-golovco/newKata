function toCamelCase(str){
    str = str.split(/-|_/)
    for(i=1;i<str.length;i+=1){
        str[i] = str[i].charAt(0).toUpperCase()+str[i].substr(1);
    }
    return str.join("")
}
console.log(toCamelCase("The-Stealth_warrior"))