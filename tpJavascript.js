

// Calcula monto

function CalcularMonto() {
    // Porcentaje de descuentos
    const DescEstudiante = 0.8;
    const DescTrainee = 0.5;
    const DescJunior = 0.15;

    // Precio de ticket
    const PrecioBase = 200;
    var Total = 0;

    // Recupero cantidad
    var cantidadTicketsElemento = document.getElementById("cantidad");
    var cantidadTickets = parseInt(cantidadTicketsElemento.value);

    // Recupero categoria
    var elementocategoria = document.getElementById("categoria");
    //var categoriaSeleccionada = parseInt(elementocategoria.options[elementocategoria.selectdIndex].value);
    var categoriaSeleccionada = categoria.selectedIndex;

    //categoriaSeleccionada=1;
    switch (categoriaSeleccionada) {
        case 1:
            DescuentoPorcentaje = DescEstudiante;
            break;

        case 2:
            DescuentoPorcentaje = DescTrainee;
            break;

        case 3:
            DescuentoPorcentaje = DescJunior;
            break;

        default:
            DescuentoPorcentaje = 0;
            break;
    }


    // Monto del descuento
    DescuentoAplicar = PrecioBase * DescuentoPorcentaje;

    // Total Monto
    Total = ((PrecioBase - DescuentoAplicar) * cantidadTickets);

    // Asigno al documento el total
    document.getElementById('total').value = "Total a pagar: $" + Total;


}