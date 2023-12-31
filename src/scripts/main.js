AOS.init();

const dataDoEvento = new Date("Oct 26, 2026 18:02:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24
    const horaEmMs = 1000* 60 * 60;
    const minutoEmMs = 1000 * 60

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento %  horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000)
    console.log(diasAteOEvento);
    console.log(horasAteOEvento);
    console.log(minutosAteOEvento);
    console.log(segundosAteOEvento)

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML ='Evento expirado';
    }

}, 1000);



document.addEventListener('DOMContentLoaded', function() {
    var formulario = document.querySelector('form');
    var nomeInput = document.querySelector('input[name="nome"]');
    var emailInput = document.querySelector('input[name="email"]');
    var botaoConfirmar = document.querySelector('button');

    nomeInput.addEventListener('input', verificarCamposPreenchidos);
    emailInput.addEventListener('input', verificarCamposPreenchidos);

    function verificarCamposPreenchidos() {
        if (nomeInput.value.trim() !== '' && emailInput.value.trim() !== '') {
            botaoConfirmar.removeAttribute('disabled');
        } else {
            botaoConfirmar.setAttribute('disabled', 'disabled');
        }
    }

    formulario.addEventListener('submit', function() {

        if (nomeInput.value.trim() !== '' && emailInput.value.trim() !== '') {
            alert('Obrigado pela confirmação! Aguardamos você no dia da festa, os detalhes do evento serão enviados por email. =)');
        }

    });
});


