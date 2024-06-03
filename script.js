function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function appendCharacter(character) {
    document.getElementById('display').innerText += character;
}

function calculate() {
    try {
        const result = eval(document.getElementById('display').innerText);
        document.getElementById('display').innerText = result;
    } catch (error) {
        document.getElementById('display').innerText = 'Error';
    }
}
