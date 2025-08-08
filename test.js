// Apply background and text color immediately
document.body.style.background = "black";
document.body.style.color = "white";

// Create HTML form to ask questions instantly
document.body.innerHTML = `
    <h1>Welcome to JavaScript!</h1>
    <p>What's your name? <input id="name" type="text"></p>
    <p>Enter the first number: <input id="num1" type="number"></p>
    <p>Enter the second number: <input id="num2" type="number"></p>
    <button onclick="showResult()">Submit</button>
    <div id="result"></div>
`;

// Function to calculate and show result
function showResult() {
    let name = document.getElementById('name').value;
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let sum = num1 + num2;

    document.getElementById('result').innerHTML = `
        <p>Nice to meet you, ${name}!</p>
        <p>The sum of ${num1} and ${num2} is: ${sum}</p>
    `;
}
