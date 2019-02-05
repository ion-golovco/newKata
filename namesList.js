function list(names) {
    if(names.length==0){return ""}
    let res = names[0].name
    let res1 = Object.values(names)
    if(names.length==2){
        return res + " & " + names[names.length - 1].name
    }
    if (names.length > 2) {
        for (i = 1; i < names.length; i += 1) {
            if (i > names.length - 2) { return res + " & " + names[names.length - 1].name }
            res += ", " + names[i].name
        }
    }
    return res
}
console.log(list([{name: 'Bart'},{name: 'Lisa'}]))