let arrayTestemuhos = []

class Testemunhos {
    constructor(nomeTe, testemunho,fotoTe) {
        this._idTes = Testemunhos.getLastId() + 1
        this.nomeTe = nomeTe
        this.testemunho = testemunho
        this.fotoTe = fotoTe
    }
    // Propriedade id
    get idTes() {
        return this._idTes
    }

    // Propriedade nomeTe
    get nomeTe() {
        return this._nomeTe
    }
    set nomeTe(novoNomeTe) {
        this._nomeTe = novoNomeTe
    }

    // Propriedade testemunho
    get testemunho() {
        return this._testemunho
    }

    set testemunho(novoTestemunho) {
        this._testemunho = novoTestemunho
    }
     // Propriedade fotoTe
     get fotoTe() {
        return this._fotoTe
    }
    set fotoTe(novoFotoTe) {
        this._fotoTe = novoFotoTe
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
    renderCatalog()

    let btnLogout = document.getElementById("optLogout")
    let btnConfig = document.getElementById("linkConfig")
    btnLogout.style.display = 'none'
    btnConfig.style.display = 'none'

    let nomeTe =document.getElementById("nomeTe")
    let fotoTe =document.getElementById("fotoTe")
    let utGuardados = ""
    let frmTestemunho = document.getElementById("frmTestemunhos")
    let testemunho = document.getElementById("modelTestemunho")

    frmTestemunho.addEventListener("submit", function (events) {
        renderCatalog()

        //percorrer o local storage e converter os dados em objets
        for (let i = 0; i < localStorage.length; i++) {

            utGuardados = JSON.parse(localStorage.getItem(localStorage.key(i)))

        }

        //verificar se o utilizador existe para submeter os eventos
        for (let i = 0; i < utGuardados.length; i++) {

            if (utGuardados[i]._idUt) {
                IdTe = utGuardados[i]._idUt

                let novoTestemunho = new Testemunhos(nomeTe.value, testemunho.value,fotoTe.value)
                arrayTestemuhos.push(novoTestemunho)
                localStorage.setItem("Testemunho", JSON.stringify(arrayTestemuhos))
                events.preventDefault()

            }


        }

    })




}
// Função que vai alimentar o meu catálogo
function renderCatalog() {

    let myCard = document.getElementById("myCardTestemunhos")
    let TestemunhosGuardados = ""
    // 1. Iterar sobre o array de Trips

    // 2. Para cada Trip vou definir uma Card e compô-la com os dados do objeto
    let strHtmlCard = ""

    for (var i = 0; i < localStorage.length; i++) {

        if (i == 4) {
            TestemunhosGuardados = JSON.parse(localStorage.getItem(localStorage.key(i)))
        }

       

    }
    for (let i = 0; i <  TestemunhosGuardados.length; i++) {

        console.log( TestemunhosGuardados[i])
        // Inicia a linha
        if (i % 4 == 0) {
            strHtmlCard += `<div class="row">`
        }

        // Cria a card
        strHtmlCard += `<div class="col-sm-12">
           <br>
            <div class="card card-primary w-100">
           
           
                <div class="card-body">
                <img src="${TestemunhosGuardados[i]._fotoTe}" alt="">
                <h6 class="card-text">${TestemunhosGuardados[i]._nomeTe}</h6>
                    <p class="card-text">${ TestemunhosGuardados[i]._testemunho}</p>
                   
                  
                   
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