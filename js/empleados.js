// Convierte la primera letra en mayúscula y actualiza el valor real del campo
function primeraLetraMayuscula(campo) {
    let texto = campo.value.trim();
    if (texto.length > 0) {
        campo.value = texto.charAt(0).toUpperCase() + texto.slice(1);
    }
}

// Calcula las horas normales, extras y el pago
function calcularNomina() {
    const idEmpleado = document.getElementById('idEmpleado').value.trim();
    const nombre     = document.getElementById('nombre').value.trim();
    const horasStr   = document.getElementById('horas').value.trim();
    const costoStr   = document.getElementById('costo').value.trim();

    // ✅ Validar que todos los campos requeridos tengan datos
    if (!idEmpleado || !nombre || !horasStr || !costoStr) {
        alert("Debes llenar todos los campos antes de calcular.");
        return; // Detener la ejecución si faltan datos
    }

    const horas = parseFloat(horasStr);
    const costo = parseFloat(costoStr);

    let horasNormales = Math.min(horas, 40);
    let horasExtras   = horas > 40 ? horas - 40 : 0;

    // Horas extras pagadas al doble
    let subtotal = (horasNormales * costo) + (horasExtras * costo * 2);

    let ispt  = subtotal * 0.10;
    let total = subtotal - ispt;

    document.getElementById('horasNormales').value = horasNormales;
    document.getElementById('horasExtras').value   = horasExtras;
    document.getElementById('subtotal').value      = subtotal.toFixed(2);
    document.getElementById('ispt').value          = ispt.toFixed(2);
    document.getElementById('monto').value         = total.toFixed(2);
}

// Limpia todos los campos
function limpiarFormulario() {
    document.querySelectorAll('input').forEach(input => input.value = '');
}
