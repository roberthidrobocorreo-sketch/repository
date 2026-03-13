const prompt = require("prompt-sync")();
const fs = require("fs");
const readline = require("readline-sync");
const { Acta, Documento } = require("./claseDocumentos");
let baseDatos = new Documento("./bd.json");

var opcion = 0;

do {
    console.clear();
    console.log("\n--- GESTOR DE DOCUMENTOS INSTITUCIONALES ---");
    console.log("1. Crear Nuevo Documento");
    console.log("2. Ver Documentos Registrados");
    console.log("3. Modificar Documentos");
    console.log("4. Eliminar Documento");
    console.log("5. Salir");
    
    opcion = prompt("Elige una opción: ");
    

    switch (opcion) {
        case "1":
            console.clear();
            console.log("\nRegistrando un nuevo documento...");

            id = baseDatos.generarId();
            let tipo = prompt("Tipo (Acta/Planilla): ");
            let titulo = prompt("Título del Documento: ");
            let responsable = prompt("Autor: ");
            let fecha = new Date().toLocaleDateString();
            
            baseDatos.registrarDocumento(id, tipo, titulo, responsable, fecha);
            
            console.log("Guardado. No pierdas el ID: " + id);
            break;
        case "2":
            console.clear();
            console.log("\nReflejando registros ingresados...");
            if (baseDatos.registros.length === 0) {
                console.log("Bandeja de documentos vacia");
                readline.keyInPause("presione una tecla para continuar");
                break;
            }
            else{
                console.table(baseDatos.registros);
                readline.keyInPause("presione una tecla para continuar");
                break;
            }
            
        case "3":
            console.clear();
            console.log("\nModificando documentos...");

            let opcionModificar = 0;
            do{
                    console.log("1. Modificar Titulo");
                    console.log("2. Modificar Tipo");
                    console.log("3. Modificar Responsable");
                    console.log("4. Salir");

                    opcionModificar = Number(prompt("Elija la opcion: "))
                    switch(opcionModificar){

                        case 1:
                            console.clear();
                            id = prompt("Pon el ID del documento que quieres cambiar: ");
            
                        if(!baseDatos.existeDocumento(id)){
                            console.log("No existe el documento");
                            readline.keyInPause("presione una tecla para continuar");
                        break;
                        }
                        else{
                            let titulo = prompt("Escriba el nuevo titulo: ");
                            baseDatos.modificarTituloDoc(id, titulo);
                            console.log("Actualizado con éxito.");
                            readline.keyInPause("presione una tecla para continuar");
                        break;
                        }

                        case 2:
                            console.clear();
                            id = prompt("Pon el ID del documento que quieres cambiar: ");
            
                        if(!baseDatos.existeDocumento(id)){
                            console.log("No existe el documento");
                            readline.keyInPause("presione una tecla para continuar");
                        break;
                        }
                        else{
                            let tipo = prompt("Escriba el nuevo tipo: ");
                            baseDatos.modificarTipoDoc(id, tipo);
                            console.log("Actualizado con éxito.");
                            readline.keyInPause("presione una tecla para continuar");
                        break;
                        }

                        case 3:
                            console.clear();
                            id = prompt("Pon el ID del documento que quieres cambiar: ");
            
                        if(!baseDatos.existeDocumento(id)){
                            console.log("No existe el documento");
                            readline.keyInPause("presione una tecla para continuar");
                        break;
                        }
                        else{
                            let responsable = prompt("Escriba el nuevo responsable: ");
                            baseDatos.modificarResponsableDoc(id, responsable);
                            console.log("Actualizado con éxito.");
                            readline.keyInPause("presione una tecla para continuar");
                        break;
                        }

                        case 4:
                            console.clear();
                            console.log("\nProceso finalizado.")
                            readline.keyInPause("presione una tecla para continuar");
                        break;

                        default:
                            console.log("Eleccion invalida");
                            readline.keyInPause("presione una tecla para continuar");
                    }
            }while(opcionModificar != 4);
        break;
        case "4":
            console.clear();
            console.log("\nBorrando documento...");
            idBusqueda = prompt("Pon el ID del documento que quieres eliminar: ");
            
            if(!baseDatos.existeDocumento(idBusqueda)){
                console.log("No existe el Documento");
                readline.keyInPause("presione una tecla para continuar");
                break;
            }
            else{
                baseDatos.eliminarDocumento(idBusqueda);
                console.log("Eliminado con éxito.");
                readline.keyInPause("presione una tecla para continuar");
                break;
            }
        case "5":
            console.log("\nDatos guardados. Proceso finalizado.")
            console.log("\nHasta luego...");
        break;

        default:
            console.log("\nOpción invalida");
        break;
    }

} while (opcion != 5);

baseDatos.cerrarBD();