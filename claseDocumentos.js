//claseDocumentos
const fs = require("fs");
const prompt = require("prompt-sync")();
const readline = require('readline-sync');

class Archivo {
    id;
    titulo;
    responsable;

    constructor(id, titulo, responsable){
        this.id = id;
        this.titulo = titulo;
        this.responsable = responsable;
    };
}

class Acta extends Archivo {
    
    tipo;
    fecha;

    constructor(id, tipo, titulo, responsable, fecha){
        super(id, titulo, responsable);

        this.tipo = tipo;
        this.fecha = fecha;
    }

    modificarTitulo(titulo){
        this.titulo = titulo;
    }
    modificarTipo(tipo){
        this.tipo = tipo;
    }
    modificarResponsable(responsable){
        this.responsable = responsable;
    }
}

class Documento {

    #registro_institucional = [];
    #JsonName = "";
    
    constructor(JsonName){
    this.#JsonName = JsonName;
    if (fs.existsSync(JsonName)) {
        const dataBase = fs.readFileSync(JsonName, "utf8");
        const data = JSON.parse(dataBase).registro_institucional;
    
        this.#registro_institucional = data.map(a => new Acta(a.id, a.tipo, a.titulo, a.responsable, a.fecha))
    }else{
        const dataBase = JSON.stringify({registro_institucional: []}, null, 2);
        fs.writeFileSync(JsonName, dataBase);
    }
    }
    get registros() {
        return this.#registro_institucional;
    }
    
    generarId(){
        return this.#registro_institucional.length + 1;
    }

    registrarDocumento(id, tipo, titulo, responsable, fecha){
        const nuevoDocumento = new Acta(id, tipo, titulo, responsable, fecha);
        this.#registro_institucional.push(nuevoDocumento);
    }

    buscarDocumento(id){
        return this.#registro_institucional.find(doc => doc.id == id);
    }

    existeDocumento(id){
        return this.#registro_institucional.some(doc => doc.id == id)
    }

    modificarTituloDoc(id, titulo){
        let doc = this.buscarDocumento(id);
        doc.modificarTitulo(titulo);
    }

    modificarTipoDoc(id, tipo){
        let doc = this.buscarDocumento(id);
        doc.modificarTipo(tipo);
    }

    modificarResponsableDoc(id, responsable){
        let doc = this.buscarDocumento(id);
        doc.modificarResponsable(responsable);
    }

    eliminarDocumento(id){
        let doc = this.#registro_institucional.findIndex(doc => doc.id == id);
        if (doc !== -1){
            this.#registro_institucional.splice(doc, 1);
        }
        
    }

    cerrarBD(){
        const dataBase = JSON.stringify({registro_institucional: this.#registro_institucional }, null, 2);
        fs.writeFileSync(this.#JsonName, dataBase);
    }

}

module.exports.Acta = Acta;
module.exports.Documento = Documento;