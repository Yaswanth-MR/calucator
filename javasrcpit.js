function buttonClick(event) {
    const buttonText = event.target.textContent;
    const screen = document.getElementById('screen');

    if (buttonText === '=') {
        calculate();
    } else if (buttonText === 'C') {
        clearScreen();
    } else {
        screen.textContent += buttonText;
    }
}

function calculate() {
    const screen = document.getElementById('screen');
    try {
        const result = Function('return ' + screen.textContent)();
        screen.textContent = result;
    } catch (error) {
        screen.textContent = 'Error';
    }
}

function clearScreen() {
    const screen = document.getElementById('screen');
    screen.textContent = '0';
}
