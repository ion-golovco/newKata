function alphabetPosition(text) {
    let arr = text
    arr = arr.replace(/[^A-Za-z]/g, '');
    if (arr.length == 0) { return "" }
    let abc = ' abcdefghijklmnopqrstuvwxyz'
    text = text.replace(/[^A-Za-z]/g, '');
    abc = abc.split("")
    text = text.split(" ").join("")
    text = text.split("")
    for (let j, i = 0; i < text.length; i += 1) {
        for (j = 1; j < abc.length; j += 1) {
            if (text[i] == abc[j]) {
                text[i] = j.toString()
                j == 1
            }
        }
    } for (let j = 1; j <= abc.length; j += 1) {
        text[0] = text[0].toLowerCase()
        if (text[0] == abc[j]) {
            text[0] = j.toString()
            break
        }
    }
    text = text.join(" ")
    return text
}
console.log(alphabetPosition("#$8<>^#$dfdf%>"))