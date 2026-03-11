const prompt = require("prompt-sync")();

var documentos = [];
var opcion = 0;

do {
    console.log("\n--- GESTOR DE DOCUMENTOS INSTITUCIONALES ---");
    console.log("1. Crear Nuevo Documento");
    console.log("2. Ver Documentos Registrados");
    console.log("3. Modificar Títulos");
    console.log("4. Eliminar Documento");
    console.log("5. Salir");
    
    opcion = prompt("Elige una opción: ");
    let idBusqueda;

    switch (opcion) {
        case "1":
            console.log("\nRegistrando un nuevo documento...");
            let id = Date.now();
            let tipo = prompt("Tipo (Acta/Planilla): ");
            let titulo = prompt("Título del Documento: ");
            let resp = prompt("Autor: ");
            
            documentos.push({
                id: id,
                tipo: tipo,
                titulo: titulo,
                responsable: resp,
                fecha: new Date().toLocaleDateString()
            });
            console.log("Guardado. No pierdas el ID: " + id);
            break;

        case "2":
            console.log("\nReflejando registros ingresados...");
            if (documentos.length === 0) {
                console.log("Bandeja de documentos vacia");
                break;
            }
            console.table(documentos);
            break;

        case "3":
            console.log("\nModificando títulos...");
            idBusqueda = prompt("Pon el ID del documento que quieres cambiar: ");
            let docEncontrado = documentos.find(d => d.id == idBusqueda);
            
            if (docEncontrado === undefined) {
                console.log("El ID no es existente.");
                break;
            }
            
            let nuevoTitulo = prompt("Nuevo título: ");
            docEncontrado.titulo = nuevoTitulo;
            console.log("Actualizado con éxito.");
            break;

        case "4":
            console.log("\nBorrando documento...");
            idBusqueda = prompt("Pon el ID del documento que quieres eliminar: ");
            let indice = documentos.findIndex(d => d.id == idBusqueda);
            
            if (indice === -1) {
                console.log("Documento no encontrado");
                break;
            }
            
            documentos.splice(indice, 1);
            console.log("Eliminado exitosamente");
            break;

        case "5":
            console.log("\nHasta luego...");
            break;

        default:
            console.log("\nOpción invalida");
            break;
    }
    

} while (opcion != 5);

console.clear;