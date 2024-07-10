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
        let char = inputText.substr(i, 5);

        switch (char) {
            case 'enter':
                outputText += 'e';
                i += 5;
                break;
            case 'imes':
                outputText += 'i';
                i += 4;
                break;
            case 'ai':
                outputText += 'a';
                i += 2;
                break;
            case 'ober':
                outputText += 'o';
                i += 4;
                break;
            case 'ufat':
                outputText += 'u';
                i += 4;
                break;
            default:
                // Si no encuentra ninguna secuencia de 5 caracteres válida, agrega el carácter actual
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
