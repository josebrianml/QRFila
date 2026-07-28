// ===============================
// QRFila - Script Principal
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const visor = document.getElementById("numero");

    // Se não encontrar o visor, encerra
    if (!visor) return;


    // Pega o número da URL
    const parametros = new URLSearchParams(window.location.search);
    const numero = parametros.get("n");


    // Verifica se existe número
    if (numero === null) {
        visor.textContent = "Escaneie um QR Code";
        return;
    }


    // Converte para número
    const valor = Number(numero);


    // Validação
    if (valor >= 1 && valor <= 40) {

        const formatado = String(valor).padStart(3, "0");

        visor.textContent = "Nº " + formatado;

        document.title = "QRFila - Nº " + formatado;


        // Vibração no celular
        if (navigator.vibrate) {
            navigator.vibrate(120);
        }


    } else {

        visor.textContent = "QR Inválido";

    }

});


// ===============================
// Gerador dos links dos QR Codes
// ===============================

function gerarNumerosFila() {

    const lista = [];

    const endereco = window.location.origin + window.location.pathname;


    for (let i = 1; i <= 40; i++) {

        lista.push({
            numero: String(i).padStart(3, "0"),
            link: endereco + "?n=" + i
        });

    }


    return lista;

}
