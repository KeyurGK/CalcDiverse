function calculate() {
    let userInput = document.getElementById("userInput").value;

    // Check if the input is a valid 6-digit number
    if (/^\d{3}\d{3}$/.test(userInput)) {
        // Extract the first 3 digits
        let originalNumber = userInput.slice(0, 3);

        // Perform the trick
        let result1 = userInput * 1; // Convert userInput to a number
        let result2 = result1 / 11;
        let result3 = result2 / 13;
        let finalResult = result3 / originalNumber;

        // Display the result on the page
        calculationText = `
            Step 1: ${userInput} * 1 = ${result1}
            Step 2: ${result1} / 11 = ${result2.toFixed(2)}
            Step 3: ${result2.toFixed(2)} / 13 = ${result3.toFixed(2)}
            Step 4: ${result3.toFixed(2)} / ${originalNumber} = ${finalResult.toFixed(0)}
        `;

        // Display the result and calculation on the page
        document.getElementById("result").innerText = `The final answer is: ${finalResult.toFixed(0)}! Thala for a Reason!`;
        document.getElementById("calculation").innerText = `Calculations:\n${calculationText}`;
    } else {
        // Display an error message
        document.getElementById("result").innerText = "Invalid input, Thala. Please enter a 6-digit number with the same 3 digits repeated.";
        document.getElementById("calculation").innerText = "Calculations: Invalid input.";
    }
}