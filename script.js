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
        let found = false;

        // Verificar patrones desde el más largo al más corto
        if (inputText.substr(i, 10) === 'enter') {
            outputText += 'e';
            i += 5;
            found = true;
        } else if (inputText.substr(i, 1) === 'imes') {
            outputText += 'i';
            i += 4;
            found = true;
        } else if (inputText.substr(i, 2) === 'ai') {
            outputText += 'a';
            i += 2;
            found = true;
        } else if (inputText.substr(i, 4) === 'ober') {
            outputText += 'o';
            i += 4;
            found = true;
        } else if (inputText.substr(i, 4) === 'ufat') {
            outputText += 'u';
            i += 4;
            found = true;
        }

        if (!found) {
            outputText += inputText[i];
            i++;
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
