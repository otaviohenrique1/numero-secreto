function verificaSeOChutePossuiUmValorValido(chute) {
  const numero = +chute; // Converte para numero

  if (chuteForInvalido(numero)) {
    // console.log("Valor inválido");
    elementoChute.innerHTML += "<div>Valor inválido</div>";
  }

  if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
    // console.log(`Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}`);
    elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`;
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
      <h2>Você acertou!</h2>
      <h3>O número secreto era ${numeroSecreto}</h3>
    `;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
      <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
    `;
  } else {
    elementoChute.innerHTML += `
      <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
    `;
  }
}


function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}