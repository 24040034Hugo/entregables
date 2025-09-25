function cargarPrograma(ruta) {
            const visor = document.getElementById('visor');
            const mensajeInicial = document.getElementById('mensaje-inicial');
            const errorMensaje = document.getElementById('error-mensaje');
            
            // Ocultar mensajes previos
            mensajeInicial.style.display = 'none';
            errorMensaje.style.display = 'none';
            visor.style.display = 'block';
            
            // Cargar la página
            visor.src = ruta;
            
            // Manejar errores de carga
            visor.onload = function() {
                console.log(`Programa cargado: ${ruta}`);
            };
            
            visor.onerror = function() {
                mostrarError(`No se pudo cargar el programa: ${ruta}`);
            };
        }

        // Función para limpiar el visor y volver al inicio
        function limpiarVisor() {
            const visor = document.getElementById('visor');
            const mensajeInicial = document.getElementById('mensaje-inicial');
            const errorMensaje = document.getElementById('error-mensaje');
            
            visor.style.display = 'none';
            errorMensaje.style.display = 'none';
            mensajeInicial.style.display = 'flex';
            visor.src = '';
        }

        // Función para mostrar errores
        function mostrarError(mensaje) {
            const visor = document.getElementById('visor');
            const mensajeInicial = document.getElementById('mensaje-inicial');
            const errorMensaje = document.getElementById('error-mensaje');
            
            visor.style.display = 'none';
            mensajeInicial.style.display = 'none';
            errorMensaje.style.display = 'block';
            errorMensaje.innerHTML = `
                <h3>⚠️ Error al cargar el programa</h3>
                <p>${mensaje}</p>
                <p><small>Verifica que el archivo existe en la ruta correcta</small></p>
            `;
        }

        // Función legacy para compatibilidad (por si tienes código que usa 'mostrar')
        function mostrar(ruta) {
            cargarPrograma(ruta);
        }

        // Inicialización
        document.addEventListener('DOMContentLoaded', function() {
            console.log('Portal de Programas iniciado correctamente');
        });