function verificarNumeros() {
  const numero1 = parseInt(document.getElementById("numero1").value);
  const numero2 = parseInt(document.getElementById("numero2").value);
  const resultadoParOuImpar = document.getElementById("resultadoParOuImpar");
  const resultadoPrimoOuComposto = document.getElementById(
    "resultadoPrimoOuComposto"
  );
  const resultadoMMC = document.getElementById("resultadoMMC");
  const resultadoMDC = document.getElementById("resultadoMDC");

  if (isNaN(numero1) || isNaN(numero2)) {
    resultadoParOuImpar.textContent = "Por favor, digite dois números.";
    resultadoParOuImpar.style.color = "red";
    resultadoPrimoOuComposto.textContent = "";
    resultadoMMC.textContent = "";
    resultadoMDC.textContent = "";
    return;
  }

  // Verificar se é par ou ímpar
  const parOuImpar1 = numero1 % 2 === 0 ? "Par" : "Ímpar";
  const parOuImpar2 = numero2 % 2 === 0 ? "Par" : "Ímpar";
  resultadoParOuImpar.textContent = `O número ${numero1} é ${parOuImpar1}. O número ${numero2} é ${parOuImpar2}.`;
  resultadoParOuImpar.style.color = "green";

  // Verificar se é primo ou composto
  const primoOuComposto1 = isPrimo(numero1) ? "Primo" : "Composto";
  const primoOuComposto2 = isPrimo(numero2) ? "Primo" : "Composto";
  resultadoPrimoOuComposto.textContent = `O número ${numero1} é ${primoOuComposto1}. O número ${numero2} é ${primoOuComposto2}.`;
  resultadoPrimoOuComposto.style.color = "blue";

  // Calcular MMC e MDC
  const mmc = calcularMMC(numero1, numero2);
  const mdc = calcularMDC(numero1, numero2);
  resultadoMMC.textContent = `O MMC de ${numero1} e ${numero2} é ${mmc}.`;
  resultadoMMC.style.color = "orange";
  resultadoMDC.textContent = `O MDC de ${numero1} e ${numero2} é ${mdc}.`;
  resultadoMDC.style.color = "purple";
}

function isPrimo(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;

  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

function calcularMDC(a, b) {
  if (b === 0) return a;
  return calcularMDC(b, a % b);
}

function calcularMMC(a, b) {
  return Math.abs(a * b) / calcularMDC(a, b);
}
