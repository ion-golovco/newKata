function solution(input, m) {
    let str = input.split("\n")
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str[i].length; j++) {
            if (str[i].charAt(j) == m[0] || str[i].charAt(j) == m[1]) {
                str[i] = str[i].slice(0, j - 1)
                console.log(j, i)
            }
        }
    }
    return str.join("\n")
};
console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]))

//https://www.codewars.com/kata/strip-comments/train/javascript
// heyy boii it works
