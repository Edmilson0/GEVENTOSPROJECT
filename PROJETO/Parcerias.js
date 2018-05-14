let arrayParcerias = []

class Parcerias {
    constructor(IdParcerias, Empresa, localizaçao, link) {
        this._IdParcerias = Parcerias.getLastId() + 1
        this.Empresa = Empresa
        this.localizaçao = localizaçao
        this.link = link
    }

    // Propriedade id
    get IdParcerias() {
        return this._IdParcerias
    }

    // Propriedade empresa
    get Empresa() {
        return this._Empresa
    }
    set Empresa(novoEmpresa) {
        this._Empresa = novoEmpresa
    }

    // Propriedade localizaçao
    get localizaçao() {
        return this._localizaçao
    }

    set localizaçao(novoLocalizaçao) {
        this._localizaçao = novoLocalizaçao
    }

    // Propriedade Link
    get link() {
        return this._link
    }
    set link(novoLink) {
        this._link = novoLink
    }

    // obter o ultimo id
    static getLastId() {
        let lastId = 0
        if (arrayParcerias.length > 0) {
            lastId = arrayParcerias[arrayParcerias.length - 1].IdParcerias
        }
        return lastId
    }


}

window.onload = function () {

    let nomeEmpresa = document.getElementById("modalNomeEmpresa")
    let locaEmpresa = document.getElementById("modalLocalizaçaoEmpresa")
    let linkEmpresa = document.getElementById("modalLinkEmpresa")
    let frmParcerias = document.getElementById("frmParcerias")

    frmParcerias.addEventListener("submit", function (events) {
        
        let novaParceria = new Parcerias(nomeEmpresa.value, locaEmpresa.value, linkEmpresa.value)
        arrayParcerias.push(novaParceria)
        localStorage.setItem("Parcerias", JSON.stringify(arrayParcerias))
        alert("Adicionado com sucesso")
        events.preventDefault()
        frmParcerias.reset()
        
    })

}