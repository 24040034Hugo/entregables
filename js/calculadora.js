function calcular(operador) {
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    const spanOperador = document.getElementById('operador');

    if (isNaN(n1) || isNaN(n2)) {
        alert("Debes escribir los dos números para calcular.");
        return;
    }

    let resultado;
    switch (operador) {
        case '+':
            resultado = n1 + n2;
            break;
        case '-':
            resultado = n1 - n2;
            break;
        case '*':
            resultado = n1 * n2;
            break;
        case '/':
            if (n2 === 0) {
                alert("No se puede dividir entre 0.");
                return;
            }
            resultado = n1 / n2;
            break;
    }

    spanOperador.textContent = operador;
    spanOperador.classList.remove('oculto');
    document.getElementById('resultado').value = resultado;
}
