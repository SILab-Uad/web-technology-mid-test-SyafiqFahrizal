// TODO: Implement the password generation logic based on user input

const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    let characterSet = "";

    // TODO: Create a variable for the character set based on selected option

    if (options.includeUppercase) characterSet += uppercase;
    if (options.includeLowercase) characterSet += lowercase;
    if (options.includeNumbers) characterSet += numbers;
    if (options.includeSpecialChars) characterSet += specialChars;

    if (characterSet.length === 0) return "";

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

    // TODO: Generate the password based on the selected criteria
    return password;
};

// TODO: Add event listener to the button to call generatePassword and display the output

// BONUS: Implement the copy to clipboard functionality

document.getElementById("generateBtn").addEventListener("click", () => {
    const length = parseInt(document.getElementById("length").value);
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeLowercase = document.getElementById("includeLowercase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSpecialChars = document.getElementById("includeSpecialChars").checked;

    const options = {
        includeUppercase,
        includeLowercase,
        includeNumbers,
        includeSpecialChars
    };

    const password = generatePassword(length, options);
    document.getElementById("passwordOutput").textContent = password;
});

document.getElementById("copyBtn").addEventListener("click", () => {
    const passwordOutput = document.getElementById("passwordOutput").textContent;
    navigator.clipboard.writeText(passwordOutput).then(() => {
        alert("Password copied to clipboard!");
    }).catch(err => {
        console.error("Error copying password: ", err);
    });
});
