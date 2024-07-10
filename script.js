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

        // Verificar las secuencias en orden de longitud
        for (let length = 5; length >= 2; length--) {
            if (i + length <= inputText.length) {
                let char = inputText.substr(i, length);

                switch (char) {
                    case 'enter':
                        outputText += 'e';
                        i += length;
                        found = true;
                        break;
                    case 'imes':
                        outputText += 'i';
                        i += length;
                        found = true;
                        break;
                    case 'ai':
                        outputText += 'a';
                        i += length;
                        found = true;
                        break;
                    case 'ober':
                        outputText += 'o';
                        i += length;
                        found = true;
                        break;
                    case 'ufat':
                        outputText += 'u';
                        i += length;
                        found = true;
                        break;
                }

                if (found) {
                    break; // Salir del bucle for una vez que se ha encontrado una coincidencia
                }
            }
        }

        if (!found) {
            // Si no se encontró ninguna coincidencia, agregar el carácter original
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
