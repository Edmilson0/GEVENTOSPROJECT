//classe eventos
let arrayEventos = []
let utiId = 0
class Eventos {
    constructor(data, hora, sala, categoria, responsavel, imagem, designacao, UtId) {

        this._idEv = Eventos.getLastIdE() + 1
        this.data = data
        this.hora = hora
        this.categoria = categoria
        this.responsavel = responsavel
        this.imagem = imagem
        this.sala = sala
        this.designacao = designacao
        this.UtId = UtId

    }
    // Propriedade id
    get idEv() {
        return this._idEv
    }

    // Propriedade data
    get data() {
        return this._data
    }

    set data(novoData) {
        this._data = novoData
    }
    // Propriedade hora
    get hora() {
        return this._hora
    }

    set hora(novoHora) {
        this._hora = novoHora
    }
    // Propriedade sala
    get sala() {
        return this._sala
    }

    set sala(novaSala) {
        this._sala = novaSala
    }
    // Propriedade categoria
    get categoria() {
        return this._categoria
    }

    set categoria(novoCategoria) {
        this._categoria = novoCategoria
    }
    // Propriedade responsavel
    get responsavel() {
        return this._responsavel
    }

    set responsavel(novoResponsavel) {
        this._responsavel = novoResponsavel
    }
    // Propriedade imagem
    get imagem() {
        return this._imagem
    }

    set imagem(novoImagem) {
        this._imagem = novoImagem
    }
    // Propriedade designaç~ºao
    get designacao() {
        return this._designacao
    }

    set designacao(novoDesignacao) {
        this._designacao = novoDesignacao
    }
    // Propriedade UTID
    get UtId() {
        return this._UtId
    }

    set UtId(novoUtId) {
        this._UtId = novoUtId
    }

    // obter o ultimo id
    static getLastIdE() {
        let lastIdE = 0
        if (arrayEventos.length > 0) {
            lastIdE = arrayEventos[arrayEventos.length - 1].idEv
        }
        return lastIdE
    }

}

window.onload = function () {

    
    let btnCriarEventos = document.getElementById("btnCriarEventos")
    let frmCriarEventos = document.getElementById("frmCriarEventos")
    btnCriarEventos.style.display='none'

    //submeter eventos
    frmCriarEventos.addEventListener("submit", function (event) {

        let data = document.getElementById("ModalData").value
        let horario = document.getElementById("ModalHorário").value
        let sala = document.getElementById("ModalSala").value
        let imagem = document.getElementById("ModalImagem").value
        let responsavel = document.getElementById("ModalResponsavel").value
        let categoria = document.getElementById("optCategorias").value
        let designacao = document.getElementById("ModalDesigEvento").value
        let EventosGuardados = ""
        let utGuardados = ""

        //percorrer o local storage e converter os dados em objets
        for (let i = 0; i < localStorage.length; i++) {

            utGuardados = JSON.parse(localStorage.getItem(localStorage.key(i)))

        }

        //verificar se o utilizador para submeter os eventos
        for (let i = 0; i < utGuardados.length; i++) {

            if (utGuardados[i]._idUt && utGuardados[i]._tipoUtilizador=="docente") {
                UtId = utGuardados[i]._idUt
                console.log(UtId)


                let novoEventos = new Eventos(data, horario, categoria, sala, responsavel, imagem, designacao, UtId)
                arrayEventos.push(novoEventos)

            }
            else{

                
            }

        }

     

       // localStorage.setItem("Eventos", JSON.stringify(arrayEventos))
      


        console.log(arrayEventos)
        event.preventDefault()

    })



}

/*
// Função que vai alimentar o meu catálogo
function renderCatalog(userId = 0, countryId = 0) {

    // 1. Iterar sobre o array de Trips

    // 2. Para cada Trip vou definir uma Card e compô-la com os dados do objeto
    let strHtmlCard = ""
    for (var i = 0; i < trips.length; i++) {
        if ((userId == 0 && countryId == 0) ||
            (userId == 0 && countryId == trips[i].country) ||
            (userId == trips[i].userId && countryId == 0) ||
            (userId == trips[i].userId && countryId == trips[i].country)) {

            // Inicia a linha
            if (i % 3 == 0) {
                strHtmlCard += `<div class="row">`
            }

            // Cria a card
            strHtmlCard += `<div class="col-sm-4">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${trips[i].link}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${trips[i].name}</h5>
                        <p class="card-text">${trips[i].description}</p>`
            if (userId != 0) {

                strHtmlCard += `<a id="${trips[i].id}" href="#" class="btn btn-danger remove">REMOVE</a>`
            }
            strHtmlCard += `</div>
                </div>      
            </div>`

            // Fecha a linha
            if (i % 3 == 2) {
                strHtmlCard += `</div>`
            }
        }
    }
}*/