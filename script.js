function encrypt() {
    let inputText = document.getElementById('input-text').value.trim().toLowerCase();
    let outputText = '';

    for (let i = 0; i < inputText.length; i++) {
        switch (inputText[i]) {
            case 'e':
                outputText += 'enter';
                break;
            case 'i':
                outputText += 'imes';
                break;
            case 'a':
                outputText += 'ai';
                break;
            case 'o':
                outputText += 'ober';
                break;
            case 'u':
                outputText += 'ufat';
                break;
            default:
                outputText += inputText[i];
        }
    }

    document.getElementById('output-text').value = outputText;
}

function decrypt() {
    let inputText = document.getElementById('input-text').value.trim().toLowerCase();
    let outputText = '';

    let i = 0;
    while (i < inputText.length) {
        let char = inputText[i];

        // Verificar las reglas de desencriptación
        switch (char) {
            case 'e':
                if (inputText.substr(i, 5) === 'enter') {
                    outputText += 'e';
                    i += 5;
                } else {
                    outputText += 'e';
                    i++;
                }
                break;
            case 'i':
                if (inputText.substr(i, 3) === 'imes') {
                    outputText += 'i';
                    i += 4;
                } else {
                    outputText += 'i';
                    i++;
                }
                break;
            case 'a':
                if (inputText.substr(i, 2) === 'ai') {
                    outputText += 'a';
                    i += 2;
                } else {
                    outputText += 'a';
                    i++;
                }
                break;
            case 'o':
                if (inputText.substr(i, 4) === 'ober') {
                    outputText += 'o';
                    i += 4;
                } else {
                    outputText += 'o';
                    i++;
                }
                break;
            case 'u':
                if (inputText.substr(i, 4) === 'ufat') {
                    outputText += 'u';
                    i += 4;
                } else {
                    outputText += 'u';
                    i++;
                }
                break;
            default:
                outputText += char;
                i++;
                break;
        }
    }

    document.getElementById('output-text').value = outputText;
}

function copyToClipboard() {
    let outputText = document.getElementById('output-text');
    outputText.select();
    outputText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Texto copiado al portapapeles: " + outputText.value);
}
