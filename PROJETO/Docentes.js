let arrayDocentes = []

class Docentes {
    constructor(IdDocente, NomeDocente, foto, formaçao, CV) {
        this._IdDocente = Docentes.getLastId() + 1
        this.NomeDocente = NomeDocente
        this.foto = foto
        this.formaçao = formaçao
        this.CV = CV
    }

    // Propriedade id
    get IdDocente() {
        return this._IdDocente
    }

    // Propriedade NomeDocente
    get NomeDocente() {
        return this._NomeDocente
    }
    set NomeDocente(novoNomeDocente) {
        this._NomeDocente = novoNomeDocente
    }

    // Propriedade foto
    get foto() {
        return this._foto
    }

    set foto(novoFoto) {
        this._foto = novoFoto
    }

    // Propriedade formaçao
    get formaçao() {
        return this._formaçao
    }

    set formaçao(novoFormaçao) {
        this._formaçao = novoFormaçao
    }

    // Propriedade CV
    get CV() {
        return this._CV
    }
    set CV(novoCV) {
        this._CV = novoCV
    }

    // obter o ultimo id
    static getLastId() {
        let lastId = 0
        if (arrayDocentes.length > 0) {
            lastId = arrayDocentes[arrayDocentes.length - 1].IdDocente
        }
        return lastId
    }


}

window.onload = function () {

    let nomeDocente = document.getElementById("modalNomeDocente")
    let formaçao = document.getElementById("modalFormaçaoDocente")
    let foto = document.getElementById("modalFotoDocente")
    let cv = document.getElementById("modalCVDocente")
    let frmDocentes = document.getElementById("frmDocentes")

    frmDocentes.addEventListener("submit", function (events) {
        
        let novaDocentes = new Docentes(nomeDocente.value, foto.value, formaçao.value, cv.value)
        arrayDocentes.push(novaDocentes)
        localStorage.setItem("Docentes", JSON.stringify(arrayDocentes))
        alert("Adicionado com sucesso")
        events.preventDefault()
        frmDocentes.reset()
        
    })

}