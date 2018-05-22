//classe utilizador
let arrayUtilizadores = []


class Utilizador {
    constructor(nome, email, password, foto, tipoUtilizador) {
        this._idUt = Utilizador.getLastId() + 1
        this.nome = nome
        this.email = email
        this.password = password
        this.foto = foto
        this.tipoUtilizador = tipoUtilizador
    }
    // Propriedade id
    get idUt() {
        return this._idUt
    }

    // Propriedade nome
    get nome() {
        return this._nome
    }

    set nome(novoNome) {
        this._nome = novoNome
    }
    // Propriedade email
    get email() {
        return this._email
    }

    set email(novoEmail) {
        this._email = novoEmail
    }
    // Propriedade password
    get password() {
        return this._password
    }

    set password(novoPassword) {
        this._password = novoPassword
    }
    // Propriedade foto
    get foto() {
        return this._foto
    }

    set foto(novoFoto) {
        this._foto = novoFoto
    }
    // Propriedade tipo de utilizadores
    get tipoUtilizador() {
        return this._tipoUtilizador
    }

    set tipoUtilizador(novotipoUtilizador) {
        this._tipoUtilizador = novotipoUtilizador
    }

    // obter o ultimo id
    static getLastId() {
        let lastId = 0
        if (arrayUtilizadores.length > 0) {
            lastId = arrayUtilizadores[arrayUtilizadores.length - 1].idUt
        }
        return lastId
    }

}




window.onload = function () {
    renderCatalog()
    renderCatalogEventos()
    renderCatalogD()


    let ModalRegistar = document.getElementById("frmRegistar")
    let btnLogin = document.getElementById("optLogin")
    let frmLogin = document.getElementById("frmLogin")
    let btnLogout = document.getElementById("optLogout")
    let btnRegistar = document.getElementById("linkRegistar")
    let btnConfig = document.getElementById("linkConfig")
    let arrayEstadoUt = []


    btnLogout.style.display = 'none'
    btnConfig.style.display = 'none'


    //submeter os dados do utilizador 
    ModalRegistar.addEventListener("submit", function (event) {


        let estudante = document.getElementById("estudante")
        let docente = document.getElementById("docente")
        let nomeUt = document.getElementById("ModalNome").value
        let emailUt = document.getElementById("ModalEmail").value
        let fotoUt = document.getElementById("ModalFoto").value
        let tipoutilizador;
        let Password = document.getElementById("ModalPasswordR").value
        let confPassword = document.getElementById("ModalConfPassword").value
        let stadoUtilizador = false



        //validar as passwords
        if (confPassword != Password) {
            alert("password diferentes")
            event.preventDefault()
        } else {
            //verificar se as checked boxes estão preenchidas e criar o objeto
            if (estudante.checked == true) {
                tipoutilizador = "estudante"
            } else if (docente.checked == true) {
                tipoutilizador = "docente"
            }
            else {
                tipoutilizador = "Visitante"
            }

            let novoutilizador = new Utilizador(nomeUt, emailUt, Password, fotoUt, tipoutilizador)
            arrayUtilizadores.push(novoutilizador)

            alert("registo com sucesso")
            ModalRegistar.reset()
            console.log(arrayUtilizadores)
            event.preventDefault()

        }

        localStorage.setItem("utilizadores", JSON.stringify(arrayUtilizadores))
        btnRegistar.style.display = 'none'
        btnLogin.style.display = 'none'
        btnLogout.style.display = 'block'
        stadoUtilizador = true
        arrayEstadoUt.push(nomeUt)
        arrayEstadoUt.push(stadoUtilizador)
        arrayEstadoUt.push(tipoutilizador)
        localStorage.setItem("estadoUtitlizador", arrayEstadoUt)
        arrayEstadoUt=[]

    })

    //Fazendo logout
    btnLogout.addEventListener("click", function (event) {
        let estado = ""

        if (localStorage.getItem("estadoUtitlizador")) {
            estado = localStorage.getItem("estadoUtitlizador")
        }
        let pos1 = estado.indexOf(",")
        let substring1 = estado.substring(pos1 + 1, estado.length)
        let substring2 = estado.substring(0, pos1)
        stadoUtilizador = false
        
        arrayEstadoUt.push(substring2)
        arrayEstadoUt.push(stadoUtilizador)
        localStorage.setItem("estadoUtitlizador", arrayEstadoUt)
        arrayEstadoUt=[]
        btnRegistar.style.display = 'block'
        btnLogin.style.display = 'block'
        btnLogout.style.display='none'

        console.log(substring2)
        event.preventDefault()

    })

    //fazendo login
    frmLogin.addEventListener("submit", function (event) {

        let optRegistar = document.getElementById("linkRegistar")
        let barra = document.getElementById("barra")
        let loginName = document.getElementById("ModalName")
        let loginPass = document.getElementById("ModalPassword")
        //buscar no local storage os utilizadores
        let utInLocalStorage = JSON.parse(localStorage.getItem("utilizadores"))
        let utGuardados = ""
        let cont = 0


        //percorrer o local storage e converter os dados em objets
        if (localStorage.getItem("utilizadores")) {
            utGuardados = JSON.parse(localStorage.getItem("utilizadores"))
        }

        //verificar se o utilizador existe ou não
        for (let i = 0; i < utGuardados.length; i++) {

            if (utGuardados[i]._nome == loginName.value && utGuardados[i]._password == loginPass.value) {
                alert("bem vindo")

                btnRegistar.style.display = 'none'
                btnLogin.style.display = 'none'
                btnLogout.style.display = 'block'
                stadoUtilizador = true
                arrayEstadoUt.push(loginName.value)
                arrayEstadoUt.push(stadoUtilizador)
                arrayEstadoUt.push(utGuardados[i]._tipoUtilizador)
                localStorage.setItem("estadoUtitlizador", arrayEstadoUt)
                arrayEstadoUt=[]
                
                frmLogin.reset()
                event.preventDefault()

            }

            else {
                cont++
            }




        }
        //se o utilizador não exister emite uma mensagem
        if (cont == utGuardados.length) {
            alert("Utilizador não existente")
            event.preventDefault()
        }



        event.preventDefault()

    })


}
//######33#######catalogoParcerias###########

// Função que vai alimentar o meu catálogo
function renderCatalog() {



    let myCard = document.getElementById("HomePageCartParcerias")
    let parceriasGuardados = ""
    // 1. Iterar sobre o array de Trips

    // 2. Para cada Trip vou definir uma Card e compô-la com os dados do objeto
    let strHtmlCard = ""


    if (localStorage.getItem("Parcerias")) {
        parceriasGuardados = JSON.parse(localStorage.getItem("Parcerias"))
    }

    for (let i = 0; i < parceriasGuardados.length; i++) {

        console.log(parceriasGuardados[i])
        // Inicia a linha
        if (i % 3 == 0) {
            strHtmlCard += `<div class="row">`
        }

        // Cria a card
        strHtmlCard += `<div class="col-sm-4">
           <br>
           <br>
           <div class="card card-primary text-center">
           <img style="width:100%" class="card-img-top" src="${parceriasGuardados[i]._linkLogotipo}" alt="Card image cap">
           <h3 class="card-title" style="background-color:rgb(218, 215, 209)">${parceriasGuardados[i]._Empresa}</h3>
          
               <div class="card-body">
             
               <a class="nav-link" href="${parceriasGuardados[i]._link}">Visite-nos</a>
        <br>
        <h5>Loacalização:</h5>
        <h6 class="card-text">${parceriasGuardados[i]._localizaçao}</h6>
        
                    <br>`




        strHtmlCard += `</div>
                    </div>      
                </div>`

        // Fecha a linha
        if (i % 3 == 2) {
            strHtmlCard += `</div>`
        }
    }

    myCard.innerHTML = strHtmlCard
}

//##########################catalogoEventos#####################

// Função que vai alimentar o meu catálogo
function renderCatalogEventos() {



    let myCard = document.getElementById("HomePageCartEventos")
    let EventosGuardados = ""
    // 1. Iterar sobre o array de Trips

    // 2. Para cada Trip vou definir uma Card e compô-la com os dados do objeto
    let strHtmlCardE = ""

    for (var i = 0; i < localStorage.length; i++) {

        if (i == 1) {
            EventosGuardados = JSON.parse(localStorage.getItem(localStorage.key(i)))
        }



    }
    for (let i = 0; i < EventosGuardados.length; i++) {

        if (i < 4) {
            // Inicia a linha
            if (i % 3 == 0) {
                strHtmlCardE += `<div class="row">`
            }

            // Cria a card
            strHtmlCardE += `<div class="col-sm-4">
   <br>
    <div class="card">
    <h3 class="card-title" style="text-align:center">${EventosGuardados[i]._categoria}</h3>
    <img style="width:100%" class="card-img-top" src="${EventosGuardados[i]._imagem}" alt="Card image cap">
        <div class="card-body">
           
            <h5>Responsável:</h5>
            <h6 class="card-text">${EventosGuardados[i]._responsavel}</h6>
            <h5>Data:</h5>
            <h6 class="card-text">${EventosGuardados[i]._data}</h6>
          
            <br>`




            strHtmlCardE += `</div>
            </div>      
        </div>`

            // Fecha a linha
            if (i % 3 == 1) {
                strHtmlCardE += `</div>`
            }

        }



    }

    myCard.innerHTML = strHtmlCardE


}

//##################catalogoDocentes"##########################
// Função que vai alimentar o meu catálogo
function renderCatalogD() {

    let myCard = document.getElementById("HomePageCartDocentes")
    let DocentesGuardados = ""
    // 1. Iterar sobre o array de Trips

    // 2. Para cada Trip vou definir uma Card e compô-la com os dados do objeto
    let strHtmlCardD = ""

    for (var i = 0; i < localStorage.length; i++) {

        if (i == 0) {
            DocentesGuardados = JSON.parse(localStorage.getItem(localStorage.key(i)))
        }



    }
    for (let i = 0; i < DocentesGuardados.length; i++) {

        if (i < 7) {

            // Inicia a linha
            if (i % 6 == 0) {
                strHtmlCardD += `<div class="row">`
            }

            // Cria a card
            strHtmlCardD += `<div class="col-sm-2">
        <div class="card card-primary text-center">
        <img style="width:100%" src="${DocentesGuardados[i]._foto}" alt="">
       
            <div class="card-body">
            <h6 class="card-text">${DocentesGuardados[i]._NomeDocente}</h6>
               
       
               
                    <br>`


            strHtmlCardD += `</div>
                    </div>      
                </div>`

            // Fecha a linha
            if (i % 6 == 5) {
                strHtmlCardD += `</div>`
            }

        }



    }


    myCard.innerHTML = strHtmlCardD

}

