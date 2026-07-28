alert("JavaScript funcionando!");
// ===============================
// QRFila - Script Principal
// ===============================

// Obtém os parâmetros da URL
const parametros = new URLSearchParams(window.location.search);

// Obtém o número informado
const numero = parametros.get("n");

// Elemento que exibirá a senha
const visor = document.getElementById("numero");

if (numero !== null && !isNaN(numero)) {

    // Converte para inteiro
    const valor = parseInt(numero);

    // Limite permitido
    if (valor >= 1 && valor <= 40) {

        // Formata com 3 dígitos
        const formatado = valor.toString().padStart(3, "0");

        visor.textContent = "Nº " + formatado;

        document.title = "QRFila • Nº " + formatado;

        // Vibração (Android)
        if ("vibrate" in navigator) {
            navigator.vibrate(120);
        }

    } else {

        visor.innerHTML = "QR Inválido";

    }

} else {

    visor.innerHTML = "Escaneie um QR Code";

}
