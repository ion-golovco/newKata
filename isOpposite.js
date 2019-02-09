let isOpposite = (s1, s2) => {
    if (s1.length !== s2.length || s1 == "" || s2 == "") { return false }
    for (let i = 0; i < s1.length; i += 1) {
        if (s1[i] == s2[i]) { return false }
    } return true
}
