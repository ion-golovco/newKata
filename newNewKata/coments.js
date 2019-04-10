function solution(input, markers) {
    let strings = input.split("\n")
    for (let i = 0; i < strings.length; i++) {
        for (let j = 0; j < strings[i].length; j++) {
            if (strings[i].charAt(j) == markers[0] || strings[i].charAt(j) == markers[1]) {
                strings[i] = strings[i].slice(0, j - 1)
                console.log(j, i)
            }
        }
    }
    return strings.join("\n")
};
console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]))

//https://www.codewars.com/kata/strip-comments/train/javascript
// heyy boii it works