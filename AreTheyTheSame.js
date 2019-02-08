function comp(array1, array2) {
  if (array1 == null || array2 == null) {
    return false
  }
  let array3 = []
  for (i = 0; i < array2.length; i += 1) {
    array3.push(Math.sqrt(array2[i]))
  }
  let res = 0
  array3.sort()
  array1.sort()
  for (i = 0; i < array1.length; i += 1) {
    if (array1[i] == array3[i]) {
      res += 1
    } else {
      return false
    }
  }
  return true
}
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]))