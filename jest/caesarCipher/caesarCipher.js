function caesarCipher(str, num) {
    requiredString = "";
    for (let i = 0; i < str.length; i++) {
        if (containsSpecialChars(str[i])) {
            requiredString += str[i];
        } else if (str[i] == " ") {
            requiredString += str[i];
        } else {
            code = str.charCodeAt(i);
            if (code <= 90 && code + num > 90) {
                overflow = code + num - 90;
                overflowCode = 64 + overflow;
                requiredString += String.fromCharCode(overflowCode);
                continue;
            } else if (code + num > 122) {
                overflow = code + num - 122;
                overflowCode = 96 + overflow;
                requiredString += String.fromCharCode(overflowCode);
                continue;
            }
            newCode = code + num;
            requiredString += String.fromCharCode(newCode);
        }
    }
    return requiredString;
}

function containsSpecialChars(str) {
    // Define a regular expression that matches common special characters.
    // Note: Characters like `[]` and `\` need to be escaped with a backslash.
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
}

module.exports = caesarCipher;
