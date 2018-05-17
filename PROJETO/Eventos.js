//classe eventos
let arrayEventos = []
let utiId = 0
class Eventos {
    constructor(data, hora, sala, categoria, responsavel, imagem, designacao) {

        this._idEv = Eventos.getLastIdE() + 1
        this.data = data
        this.hora = hora
        this.categoria = categoria
        this.responsavel = responsavel
        this.imagem = imagem
        this.sala = sala
        this.designacao = designacao

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


    renderCatalog()



    let btnCriarEventos = document.getElementById("btnCriarEventos")
    let frmCriarEventos = document.getElementById("frmCriarEventos")
    btnCriarEventos.style.display = 'block'

    //submeter eventos
    frmCriarEventos.addEventListener("submit", function (event) {

        let data = document.getElementById("ModalData").value
        let horario = document.getElementById("ModalHorário").value
        let sala = document.getElementById("ModalSala").value
        let imagem = document.getElementById("ModalImagem").value
        let responsavel = document.getElementById("ModalResponsavel").value
        let categoria = document.getElementById("optCategorias").value
        let designacao = document.getElementById("ModalDesigEvento").value

        let utGuardados = ""

        let novoEventos = new Eventos(data, horario, sala, categoria, responsavel, imagem, designacao)
        arrayEventos.push(novoEventos)

        localStorage.setItem("Eventos", JSON.stringify(arrayEventos))

        renderCatalog()


        console.log(arrayEventos)
        event.preventDefault()

    })



}


// Função que vai alimentar o meu catálogo
function renderCatalog() {

    let myCard = document.getElementById("myCardEventos")
    let EventosGuardados = ""
    // 1. Iterar sobre o array de Trips

    // 2. Para cada Trip vou definir uma Card e compô-la com os dados do objeto
    let strHtmlCard = ""

    for (var i = 0; i < localStorage.length; i++) {

        if (i == 1) {
            EventosGuardados = JSON.parse(localStorage.getItem(localStorage.key(i)))
        }



    }
    for (let i = 0; i < EventosGuardados.length; i++) {

        console.log(EventosGuardados[i])
        // Inicia a linha
        if (i % 2 == 0) {
            strHtmlCard += `<div class="row">`
        }

        // Cria a card
        strHtmlCard += `<div class="col-sm-6">
           <br>
            <div class="card">
            <h3 class="card-title" style="background-color:rgb(218, 215, 209)">${EventosGuardados[i]._categoria}</h3>
            <img class="card-img-top" src="${EventosGuardados[i]._imagem}" alt="Card image cap">
                <div class="card-body">
                   
                    <p class="card-text">${EventosGuardados[i]._designacao}</p>
                    <br>
                    <h5>Responsável:</h5>
                    <h6 class="card-text">${EventosGuardados[i]._responsavel}</h6>
                    <h5>Data:</h5>
                    <h6 class="card-text">${EventosGuardados[i]._data}</h6>
                    <h5>Hora:</h5>
                    <h6 class="card-text">${EventosGuardados[i]._hora}</h6>
                    <h5>Sala:</h5>
                    <h6 class="card-text">${EventosGuardados[i]._sala}</h6>

                    <div class="row">
                    <div class="col-sm-6">
                   
                    </div>
                    <div class="col-sm-3">
                    <button type="button" class="btn btn-warning">Ir</button>
                    </div>
                    <div class="col-sm-3">
                    <small id="helpId" class="form-text text-muted">Interessados</small>
                    </div>
                    </div>

                    <hr style="background-color:rgb(238, 168, 29)">

                    <div class="row">
                    <div class="col-sm-6">
                    <h5>Comentários:</h5>
                    </div>

                    <div class="col-sm-6">
                    <form action="/action_page.php" method="get">
                    <small id="helpId" class="form-text text-muted">Pontuar</small>
                    <input type="range" name="points" min="0" max="10">
                    <button type="button" class="btn btn-secondary">Pontuar</button>
                </form>
                    </div>
                    </div>
                  
                    <br>`




        strHtmlCard += `</div>
                    </div>      
                </div>`

        // Fecha a linha
        if (i % 2 == 1) {
            strHtmlCard += `</div>`
        }
    }

    myCard.innerHTML = strHtmlCard
}