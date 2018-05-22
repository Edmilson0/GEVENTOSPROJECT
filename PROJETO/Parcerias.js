let arrayParcerias = []

class Parcerias {
    constructor(Empresa, localizaçao, linkLogotipo, link) {
        this._IdParcerias = Parcerias.getLastId() + 1
        this.Empresa = Empresa
        this.localizaçao = localizaçao
        this.linkLogotipo = linkLogotipo
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
    // Propriedade LinkLogotipo
    get linkLogotipo() {
        return this._linkLogotipo
    }
    set linkLogotipo(novoLinkLogotipo) {
        this._linkLogotipo = novoLinkLogotipo
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
    renderCatalog()

    let btnLogout = document.getElementById("optLogout")
    let btnConfig = document.getElementById("linkConfig")
    btnLogout.style.display = 'none'
    btnConfig.style.display = 'none'

    let nomeEmpresa = document.getElementById("modalNomeEmpresa")
    let locaEmpresa = document.getElementById("modalLocalizaçaoEmpresa")
    let linkEmpresa = document.getElementById("modalLinkEmpresa")
    let linkLogotipo = document.getElementById("modalImagemEmpresa")
    let frmParcerias = document.getElementById("frmParcerias")

    frmParcerias.addEventListener("submit", function (events) {

        let novaParceria = new Parcerias(nomeEmpresa.value, locaEmpresa.value, linkLogotipo.value, linkEmpresa.value)
        arrayParcerias.push(novaParceria)
        localStorage.setItem("Parcerias", JSON.stringify(arrayParcerias))
        alert("Adicionado com sucesso")
        events.preventDefault()
        frmParcerias.reset()
        renderCatalog()
    })




}

// Função que vai alimentar o meu catálogo
function renderCatalog() {



    let myCard = document.getElementById("cardParserias")
    let parceriasGuardados = ""
    // 1. Iterar sobre o array de Trips

    // 2. Para cada Trip vou definir uma Card e compô-la com os dados do objeto
    let strHtmlCard = ""

    for (var i = 0; i < localStorage.length; i++) {

        if (i == 3) {
            parceriasGuardados = JSON.parse(localStorage.getItem(localStorage.key(i)))
            arrayParcerias.push(parceriasGuardados)
        }



    }
    for (let i = 0; i < parceriasGuardados.length; i++) {


        // Inicia a linha
        if (i % 2 == 0) {
            strHtmlCard += `<div class="row">`
        }

        // Cria a card
        strHtmlCard += `<div class="col-sm-6">
           <br>
           <div class="card card-primary text-center">
           <img class="card-img-top" src="${parceriasGuardados[i]._linkLogotipo}" alt="Card image cap">
           <h3 class="card-title" style="background-color:rgb(218, 215, 209)">${parceriasGuardados[i]._Empresa}</h3>
          
               <div class="card-body">
               <a class="nav-link" href="${parceriasGuardados[i]._link}">Visite-nos</a>
        <br>
        <h5>Responsável:</h5>
        <h6 class="card-text">${parceriasGuardados[i]._localizaçao}</h6>
        
            <input id="btnRemoverr" value="Remover" type="submit" class="btn btn-warning"></input>
           
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

    let parceriasGuardadosLocais = ""
    let btnRemoverParcerias = document.getElementById("btnRemoverr")

    // 2. Para cada Trip vou definir uma Card e compô-la com os dados do objeto


    for (var i = 0; i < localStorage.length; i++) {

        if (i == 3) {
            parceriasGuardadosLocais = JSON.parse(localStorage.getItem(localStorage.key(i)))
        }


    }

    for (let i = 0; i < btnRemoverParcerias.length; i++) {

        btnRemoverParcerias[i].addEventListener("click", function () {

            for (var i = 0; i < parceriasGuardadosLocais.length; i++) {


                console.log(parceriasGuardadosLocais[i])

            }


        })

    }
}

