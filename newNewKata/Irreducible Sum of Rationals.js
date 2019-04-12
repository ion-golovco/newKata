function sumFracts(l) {
    console.log(l)
    if (l == 0) {
        return null
    }
    let arr = l
    let div = []
    let aiv = []
    for (i = 0; i < l.length; i += 1) {
        div.push(l[i][1])
        aiv.push(l[i][0])
    }
    function gcd(a, b) {
        if (b) {
            return gcd(b, a % b);
        } else {
            return Math.abs(a);
        }
    }
    let lcd = (gcd, a, b) => {
        return a / gcd * b
    }
    let ll = 0
    function sum(arr1, arr2) {
        for (i = 0; i < 1; i += 1) {
            ll = lcd(gcd(arr1[1], arr2[1]), arr1[1], arr2[1])
            let ar1 = ll / arr1[1]
            let ar2 = ll / arr2[1]
            let ar10 = ar1 * arr1[0]
            let ar20 = ar2 * arr2[0]
            let res = ar10 + ar20
            return [res, ll]
        }
    }
    let indx = 0
    let resulo = arr[0]
    while (1 < l.length) {
        arr.splice(0, 2, sum(arr[indx], arr[indx + 1]))
        console.log(arr)
    } if (arr[0][0] % arr[0][1] == 0) {
        return arr[0][0] / arr[0][1]
    } else if (arr[0][0] % 2 == 0 && arr[0][1] % 2 == 0) {
        let result = []
        result.push(arr[0][0] / 2)
        result.push(arr[0][1] / 2)

        if (result[0] % 2 == 0 && result[1] % 2 == 0) {
            result[0] = result[0] / 2
            result[1] = result[1] / 2
        }
        return result
    } else if (arr[0][0] % 5 == 0 && arr[0][1] % 5 == 0) {
        let result = []
        result.push(arr[0][0] / 5)
        result.push(arr[0][1] / 5)
        return result
    } else {
        return arr[0]
    }
}
//wtf is this and why does it work
console.log(sumFracts([[100,9], [4, 4],[17,6],[19,7],[97,8]]))