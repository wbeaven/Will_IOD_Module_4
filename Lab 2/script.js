document.getElementById("calculate").addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
    const resultEl = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2)) {
        resultEl.textContent = "Result: Please enter valid numbers.";
        return;
    }

    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                resultEl.textContent = "Result: Cannot divide by zero.";
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultEl.textContent = "Result: Invalid operation.";
            return;
    }

    resultEl.textContent = `Result: ${result}`;
});

document.getElementById("reset").addEventListener("click", () => {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("operator").value = "+";
    document.getElementById("result").textContent = "Result: ";
});
