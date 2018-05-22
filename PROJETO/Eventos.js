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

//################+++++################################################

let arrayPontuaçao = []

class Pontuaçao {
    constructor(tituloEvento, imagem, pontuação, responsavel) {

        this.tituloEvento = tituloEvento
        this.imagem = imagem
        this.pontuação = pontuação
        this.responsavel = responsavel
    }

    // Propriedade tituloEvento
    get tituloEvento() {
        return this._tituloEvento
    }

    // Propriedade tituloEvento
    get tituloEvento() {
        return this._tituloEvento
    }
    set tituloEvento(novoTituloEvento) {
        this._tituloEvento = novoTituloEvento
    }

    // Propriedade imagem
    get imagem() {
        return this._imagem
    }

    set imagem(novoImagem) {
        this._imagem = novoImagem
    }

    // Propriedade pontuação
    get pontuação() {
        return this._pontuação
    }

    set pontuação(novoPontuação) {
        this._pontuação = novoPontuação
    }

    // Propriedade responsavel
    get responsavel() {
        return this._responsavel
    }
    set responsavel(novoResponsavel) {
        this._responsavel = novoResponsavel
    }

}


//################+++++##############################################


window.onload = function () {

    renderCatalog()
    let btnLogout = document.getElementById("optLogout")
    let btnConfig = document.getElementById("linkConfig")
    btnLogout.style.display = 'none'
    btnConfig.style.display = 'none'

    let verCategoria = document.getElementById("optVerPorCategorias")
    let btnVer = document.getElementById("ver")
    let btnPontuar = document.getElementById("btnPOntuar")
    let btnRange = document.getElementById("inputRange")
    let btnCriarEventos = document.getElementById("btnCriarEventos")
    let frmCriarEventos = document.getElementById("frmCriarEventos")
    let verEventosPorCategoria = document.getElementById("optVerPorCategorias").value

    let arrayEstadoUt = []
    let estado = ""

    let stadoUtilizador = false


    if (localStorage.getItem("estadoUtitlizador")) {
        estado = localStorage.getItem("estadoUtitlizador")
    }
    let pos1 = estado.indexOf(",")
    let pos2 = estado.lastIndexOf(",")
    let substring1 = estado.substring(pos1 + 1, estado.length)
    let substring2 = estado.substring(0, pos1)
    let substring3 = estado.substring(pos2 + 1, estado.length)

    if (substring3 == "Visitante" || substring3 == "Estudante") {
        btnCriarEventos.style.display = 'none'
        btnRange.style.display='none'
        btnPontuar.style.display = 'none'

    }
    else {
        btnCriarEventos.style.display = 'block'
    }


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

    btnVer.addEventListener("click", function () {
        let EventosGuardados2 = ""

        for (var i = 0; i < localStorage.length; i++) {

            if (i == 1) {
                EventosGuardados2 = JSON.parse(localStorage.getItem(localStorage.key(i)))
            }



        }
        for (let i = 0; i < EventosGuardados2.length; i++) {
            if (verCategoria.value == EventosGuardados2[i]._categoria) {

                renderCatalog()
            }

        }



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


        console.log(EventosGuardados[i]._categoria)
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
                            <div class="col-sm-3">
                            
                            </div>
        
                            <div class="col-sm-9">
                            <form action="/action_page.php" method="get">
                            <small id="helpId" class="form-text text-muted">Pontuar</small>
                            <input id="inputRange" type="range" name="vol" value="0" min="0" max="10">
                       
                                <input id="btnPOntuar" type="submit" class="btn btn-warning"></input>
                            
                        </form>
                            </div>
                            </div>
                            <div class="row">
                            <h5>Comentários:</h5>
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


    /*
        //###################++#############################
        let linkImagem = ""
        let responsavelEvento = ""
        let tituloEvento = ""
        let itensLocal = ""
        let btnPontuar = document.getElementById("btnPOntuar")
        let eventoPonto = document.getElementById("eventoPonto")
    
        for (var i = 0; i < localStorage.length; i++) {
    
            if (i == 1) {
                itensLocal = JSON.parse(localStorage.getItem(localStorage.key(i)))
            }
    
            for (let i = 0; i < btnPontuar.length; i++) {
    
                btnPontuar[i].addEventListener("click", function () {
    
    
                    for (let i = 0; i < itensLocal.length; i++) {
    
                        linkImagem = itensLocal[i]._imagem
                        responsavelEvento = itensLocal[i]._responsavel
                        tituloEvento = itensLocal._responsavel
    
                    }
    
                    let novoPonto = new Pontuaçao(tituloEvento, linkImagem, eventoPonto.value, responsavelEvento)
                    localStorage.setItem("Pontuação", JSON.stringify(novoPonto))
                    console.log("sucesso")
    
                })
    
            }
    
    
        }
    
    
    
    
    */

    //#################++#############################

}