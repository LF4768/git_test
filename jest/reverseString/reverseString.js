function reverse(str) {
    list = str.split("");
    let i = list.length - 1;
    let revStr = "";
    while (i != -1) {
        revStr += list[i];
        i--;
    }
    return revStr;
}

module.exports = reverse;
