let result = document.getElementById('result');

function appendToResult(value) {
    result.value += value;
}

function clearResult() {
    result.value = '';
}

function calculateResult() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Hata';
    }
}


function convertUnits() {
    const value = parseFloat(document.getElementById('unitValue').value);
    const unitType = document.getElementById('unitType').value;

    if (isNaN(value)) {
        document.getElementById('unitResult').innerText = 'Please enter a valid value.';
        return;
    }

    let result = 0;
    switch (unitType) {
        case 'inch':
            result = value * 0.0254;
            break;
        case 'feet':
            result = value * 0.3048;
            break;
        case 'meter':
            result = value;
            break;
        case 'centimeter':
            result = value / 100;
            break;
        default:
            document.getElementById('unitResult').innerText = 'Unvalid value.';
            return;
    }

    document.getElementById('unitResult').innerText = `conclusion: ${result.toFixed(2)} meter`;
}
