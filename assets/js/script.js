document.addEventListener('DOMContentLoaded', () => {
    const reservaForm = document.getElementById('reservaForm');
    const mensajeExito = document.getElementById('mensajeExito');
    const navLinks = document.querySelectorAll('.nav-link');
    const menuNavbar = document.getElementById('navbarNav');

    // 1. Captura de datos y Modificación del DOM
    if (reservaForm) {
        reservaForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita recarga de página

            const nombre = document.getElementById('nombre').value;
            const fecha = document.getElementById('fecha').value;

            // Validación y respuesta visual
            if (nombre && fecha) {
                // Alerta nativa requerida por la rúbrica
                alert(`¡Hola ${nombre}! Tu reserva ha sido procesada con éxito  para el dia ${fecha}.`);

                // Modificación de estilos y contenido (DOM)
                mensajeExito.textContent = `Confirmado: Mesa para el ${fecha}. ¡Te esperamos!`;
                mensajeExito.classList.remove('d-none');
                mensajeExito.style.backgroundColor = "#d4edda";
                mensajeExito.style.color = "#155724";

                reservaForm.reset(); // Limpia el formulario
            }
        });
    }

    // 2. Cerrar menú móvil automáticamente al hacer click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const bsCollapse = bootstrap.Collapse.getInstance(menuNavbar);
            if (bsCollapse) {
                bsCollapse.hide();
            }
        });
    });
});