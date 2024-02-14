$(document).ready(function() {
    // Abre o cierra el menú cuando se hace clic en el botón "boton-menu"
    document.getElementById('boton-menu').addEventListener('click', function() {
        var menu = document.getElementById('menu');
        menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    });

    // Aquí puedes colocar el resto de tu código JavaScript
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    // Función para abrir el sobre
    function openEnvelope() {
        envelope.addClass("open").removeClass("close");
    }

    // Función para cerrar el sobre
    function closeEnvelope() {
        envelope.addClass("close").removeClass("open");
    }

    // Evento de clic para abrir el sobre
    btn_open.click(function() {
        openEnvelope();
    });

    // Evento de clic para cerrar el sobre
    btn_reset.click(function() {
        closeEnvelope();
    });
});

