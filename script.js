// script.js

function generatePassword(length, options) {
    const { includeUppercase, includeLowercase, includeNumbers, includeSpecialChars } = options;

    // Cek apakah setidaknya satu tipe karakter dipilih
    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSpecialChars) {
        throw new Error("At least one character type must be selected.");
    }

    const uppercaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseCharset = "abcdefghijklmnopqrstuvwxyz";
    const numbersCharset = "0123456789";
    const specialCharset = "!@#$%^&*()";
    
    let charset = '';
    if (includeUppercase) charset += uppercaseCharset;
    if (includeLowercase) charset += lowercaseCharset;
    if (includeNumbers) charset += numbersCharset;
    if (includeSpecialChars) charset += specialCharset;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    
    return password;
}

module.exports = { generatePassword };