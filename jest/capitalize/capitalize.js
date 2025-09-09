function capitalize(str) {
    list = str.split("");
    let i = 0;
    while (list[i] == " ") {
        i++;
    }
    list[i] = list[i].toUpperCase();
    return list.join("");
}

module.exports = capitalize;
