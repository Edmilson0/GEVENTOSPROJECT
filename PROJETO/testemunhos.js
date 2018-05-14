let arrayTestemuhos = []

class Testemunhos {
    constructor(IdTe, testemunho) {
        this._idTes = Testemunhos.getLastId() + 1
        this.IdTe = IdTe
        this.testemunho = testemunho
    }
    // Propriedade id
    get idTes() {
        return this._idTes
    }

    // Propriedade IdTe
    get IdTe() {
        return this._IdTe
    }
    set IdTe(novoIdTe) {
        this._IdTe = novoIdTe
    }

    // Propriedade testemunho
    get testemunho() {
        return this._testemunho
    }

    set testemunho(novoTestemunho) {
        this._testemunho = novoTestemunho
    }
    // obter o ultimo id
    static getLastId() {
        let lastId = 0
        if (arrayTestemuhos.length > 0) {
            lastId = arrayTestemuhos[arrayTestemuhos.length - 1].idTes
        }
        return lastId
    }


}

window.onload = function () {


    let IdTe = ""
    let utGuardados = ""
    let frmTestemunho = document.getElementById("frmTestemunhos")
    let testemunho = document.getElementById("modelTestemunho")

    frmTestemunho.addEventListener("submit", function (events) {

        //percorrer o local storage e converter os dados em objets
        for (let i = 0; i < localStorage.length; i++) {

            utGuardados = JSON.parse(localStorage.getItem(localStorage.key(i)))

        }

        //verificar se o utilizador existe para submeter os eventos
        for (let i = 0; i < utGuardados.length; i++) {

            if (utGuardados[i]._idUt) {
                IdTe = utGuardados[i]._idUt

                let novoTestemunho = new Testemunhos(IdTe, testemunho.value)
                arrayTestemuhos.push(novoTestemunho)
                localStorage.setItem("Testemunho", JSON.stringify(arrayTestemuhos))
                events.preventDefault()

            }


        }

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