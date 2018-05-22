let arrayDocentes = []

class Docentes {
    constructor(NomeDocente, foto, formaçao, CV) {
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
    renderCatalog()

    let btnLogout = document.getElementById("optLogout")
    let btnConfig = document.getElementById("linkConfig")
    btnLogout.style.display = 'none'
    btnConfig.style.display = 'none'

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
        renderCatalog()
        events.preventDefault()
        frmDocentes.reset()

    })

}
// Função que vai alimentar o meu catálogo
function renderCatalog() {

    let myCard = document.getElementById("cardDocentes")
    let DocentesGuardados = ""
    // 1. Iterar sobre o array de Trips

    // 2. Para cada Trip vou definir uma Card e compô-la com os dados do objeto
    let strHtmlCard = ""

    for (var i = 0; i < localStorage.length; i++) {

        if (i == 0) {
            DocentesGuardados = JSON.parse(localStorage.getItem(localStorage.key(i)))
        }



    }
    for (let i = 0; i < DocentesGuardados.length; i++) {

        console.log(DocentesGuardados[i])
        // Inicia a linha
        if (i % 4 == 0) {
            strHtmlCard += `<div class="row">`
        }

        // Cria a card
        strHtmlCard += `<div class="col-sm-3">
        <div class="card card-primary text-center">
        <img style="width:100%" src="${DocentesGuardados[i]._foto}" alt="">
       
            <div class="card-body">
            <h6 class="card-text">${DocentesGuardados[i]._NomeDocente}</h6>
                <p class="card-text">${ DocentesGuardados[i]._formação}</p>
                <p class="card-text">${ DocentesGuardados[i]._CV}</p>
               
              
                <br>
                <input name="" id="btnLerCV" class="btn btn-secondary" type="button" value="Ler">
                <small id="helpId" class="form-text text-muted">Ler o Curriculum Vitae do docente</small>
       
               
                    <br>`


        strHtmlCard += `</div>
                    </div>      
                </div>`

        // Fecha a linha
        if (i % 4 == 3) {
            strHtmlCard += `</div>`
        }
    }


    myCard.innerHTML = strHtmlCard

}


