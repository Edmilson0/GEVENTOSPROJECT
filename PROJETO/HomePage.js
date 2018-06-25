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

    $(window).on('scroll', function () {
    
            if ($(window).scrollTop()) {
                $('nav').addClass('black');
            }
            else {
                $('nav').removeClass('black');
            }
        })
    
    

    renderCatalog()
    renderCatalogEventos()
    renderCatalogD()

    let CodigoDocenteGuardado = ""

    let ModalRegistar = document.getElementById("frmRegistar")
    let btnLogin = document.getElementById("optLogin")
    let frmLogin = document.getElementById("frmLogin")
    let btnLogout = document.getElementById("optLogout")
    let btnRegistar = document.getElementById("linkRegistar")
    let btnConfig = document.getElementById("linkConfig")
    let arrayEstadoUt = []


    btnLogout.style.display = 'none'
    btnConfig.style.display = 'none'

    //buscar todos os utilizadores
    if (localStorage.getItem("utilizadores")) {
        let tempArray = []
        tempArray = JSON.parse(localStorage.getItem("utilizadores"))
        for (let i = 0; i < tempArray.length; i++) {
            let novoutilizador = new Utilizador(tempArray[i]._nome, tempArray[i]._email, tempArray[i]._password, tempArray[i]._foto, tempArray[i]._tipoUtilizador)
            arrayUtilizadores.push(novoutilizador)

        }

    }

    // adicionar admin

    /*let arrayAdmmin=[]

    let newAdmin= new Utilizador("admin","admin@admin","admin","....","admin")
    arrayAdmmin.push(newAdmin)
    localStorage.setItem("utilizadores",JSON.stringify(arrayAdmmin))*/


    let utilizadorOnline = ""

    // tirar botões de acordo com o utilizador online
    if (localStorage.getItem("estadoUtitlizador")) {
        utilizadorOnline = localStorage.getItem("estadoUtitlizador")
    }
    let pos1 = utilizadorOnline.indexOf(",")
    let pos2 = utilizadorOnline.lastIndexOf(",")
    let substring2 = utilizadorOnline.substring(0, pos1)
    let substring4 = utilizadorOnline.substring(pos2 + 1, utilizadorOnline.length)
    let substring3 = utilizadorOnline.substring(pos1 + 1, pos2)


    if (substring3 == "true") {


        btnLogout.style.display = 'block'
        btnLogin.style.display = 'none'
        btnRegistar.style.display = 'none'
    }
    if (substring2 == "admin" && substring3 == "true") {

        btnLogout.style.display = 'block'
        btnLogin.style.display = 'none'
        btnRegistar.style.display = 'none'
        btnConfig.style.display = 'block'

    }
    let x = 0
    let navBarFoto = document.getElementById("fotoUser")
    for (let i = 0; i < arrayUtilizadores.length; i++) {
        // inserir foto do utilizODR na navbar
        if (substring2 == arrayUtilizadores[i]._nome && substring3 == "true") {

            navBarFoto.innerHTML += " <img class='img-responsive2' style=' width:14%; border-radius:50% ; 'src='" + arrayUtilizadores[i]._foto + "' alt='' srcset=''>"
            navBarFoto.innerHTML += "  <small  style='color:white ' id='helpId' >" + arrayUtilizadores[i]._nome + "</small>"

        }




    }

    // tirar a foto da navbar
    if (substring3 == "false") {

        navBarFoto.innerHTML += " <img class='img-responsive2' style=' width:14%; border-radius:50% ; 'src='' alt='' srcset=''>"
        navBarFoto.innerHTML += "  <small  style='color:white ' id='helpId' ></small>"
    }

    //submeter os dados do utilizador 
    ModalRegistar.addEventListener("submit", function (event) {
        // buscar o codigo do docente
        if (localStorage.getItem("Codigo")) {
            CodigoDocenteGuardado = localStorage.getItem("Codigo")

        }
        // dados do utilizador
        let estudante = document.getElementById("estudante")
        let docente = document.getElementById("docente")
        let nomeUt = document.getElementById("ModalNome").value
        let emailUt = document.getElementById("ModalEmail").value
        let fotoUt = document.getElementById("ModalFoto").value
        let tipoutilizador;
        let Password = document.getElementById("ModalPasswordR").value
        let confPassword = document.getElementById("ModalConfPassword").value
        let stadoUtilizador = false
        let varContNome = 0
        let varContEmail = 0
        let confirmarCodigoDocente = ""


        //validar as passwords
        if (confPassword != Password) {
            alert("password diferentes")
            event.preventDefault()
        } else {
            //verificar se as checked boxes estão preenchidas e criar o objeto
            if (estudante.checked == true) {
                tipoutilizador = "estudante"
            }
            // vereficar checks boxes
            else if (docente.checked == true) {
                //se for docente pedir o codigo
                while (confirmarCodigoDocente != CodigoDocenteGuardado) {

                    confirmarCodigoDocente = prompt("Escreva o código de confimação")
                }

                tipoutilizador = "docente"
            }
            else {
                tipoutilizador = "Visitante"
            }
            //validar o campo do email
            for (let i = 0; i < arrayUtilizadores.length; i++) {

                if (emailUt != arrayUtilizadores[i]._email) {
                    varContEmail++
                }

            }
            //validar o campo do nome
            for (let i = 0; i < arrayUtilizadores.length; i++) {

                if (nomeUt != arrayUtilizadores[i]._nome) {
                    varContNome++
                }

            }
            //mandar um alerta se o nome e oemail já tiverem sido criado
            if (varContNome == arrayUtilizadores.length) {


            }
            else {
                alert("Nome do utilizador já existente.")
            }

            if (varContEmail == arrayUtilizadores.length) {

            }
            else {
                alert("Email do utilizador já existente.")
            }


            //criar objeto utulizador
            if (varContEmail == arrayUtilizadores.length && varContNome == arrayUtilizadores.length) {
                let novoutilizador = new Utilizador(nomeUt, emailUt, Password, fotoUt, tipoutilizador)
                arrayUtilizadores.push(novoutilizador)
                swal({
                    icon: "success",
                    title: "Registo com secesso!",
                    text: "Bem vindo! ",
                });
                localStorage.setItem("utilizadores", JSON.stringify(arrayUtilizadores))
                btnRegistar.style.display = 'none'
                btnLogin.style.display = 'none'
                btnLogout.style.display = 'block'
                stadoUtilizador = true
                // mudar o estado do utilizador
                arrayEstadoUt.push(nomeUt)
                arrayEstadoUt.push(stadoUtilizador)
                arrayEstadoUt.push(tipoutilizador)
                localStorage.setItem("estadoUtitlizador", arrayEstadoUt)
                arrayEstadoUt = []


            }

            ModalRegistar.reset()
            window.location.reload()
            event.preventDefault()

        }



    })

    //Fazendo logout
    btnLogout.addEventListener("click", function (event) {
        let estado = ""
        // iterar sobre a strig estado
        if (localStorage.getItem("estadoUtitlizador")) {
            estado = localStorage.getItem("estadoUtitlizador")
        }

        let pos1 = estado.indexOf(",")
        let pos2 = utilizadorOnline.lastIndexOf(",")
        let substring1 = estado.substring(pos1 + 1, estado.length)
        let substring2 = estado.substring(0, pos1)
        let substring5 = utilizadorOnline.substring(pos1 + 1, pos2)
        stadoUtilizador = false

        arrayEstadoUt.push(substring2)
        arrayEstadoUt.push(stadoUtilizador)
        localStorage.setItem("estadoUtitlizador", arrayEstadoUt)
        arrayEstadoUt = []
        //esconder btns
        btnRegistar.style.display = 'block'
        btnLogin.style.display = 'block'
        btnLogout.style.display = 'none'
        navBarFoto.innerHTML += ""
        navBarFoto.innerHTML += ""

        window.location.reload()
    })

    //fazendo login
    frmLogin.addEventListener("submit", function (event) {

        let optRegistar = document.getElementById("linkRegistar")
        let barra = document.getElementById("barra")
        let loginName = document.getElementById("ModalName")
        let loginPass = document.getElementById("ModalPassword")
        //buscar no local storage os utilizadores

        let utGuardados = ""
        let cont = 0


        //percorrer o local storage e converter os dados em objets
        if (localStorage.getItem("utilizadores")) {
            utGuardados = JSON.parse(localStorage.getItem("utilizadores"))
        }

        //verificar se o utilizador existe ou não
        for (let i = 0; i < utGuardados.length; i++) {

            if (utGuardados[i]._nome == loginName.value && utGuardados[i]._password == loginPass.value) {
                swal({
                    icon: "success",
                    title: "Login com sucesso!",
                    text: "Bem vindo! " + utGuardados[i]._nome,
                });

                btnRegistar.style.display = 'none'
                btnLogin.style.display = 'none'
                btnLogout.style.display = 'block'
                stadoUtilizador = true
                arrayEstadoUt.push(loginName.value)
                arrayEstadoUt.push(stadoUtilizador)
                arrayEstadoUt.push(utGuardados[i]._tipoUtilizador)
                localStorage.setItem("estadoUtitlizador", arrayEstadoUt)
                arrayEstadoUt = []

                frmLogin.reset()
                window.location.reload()
                event.preventDefault()

            }

            else {
                cont++
            }

        }
        //se o utilizador não exister emite uma mensagem
        if (cont == utGuardados.length) {
            swal({
                icon: "error",
                title: "Utilizador não existente!",

            });
            event.preventDefault()
        }



        for (let i = 0; i < arrayUtilizadores.length; i++) {

            if (substring2 == arrayUtilizadores[i]._nome && substring5 == "true") {

                // inserir foto na navbar
                navBarFoto.innerHTML += " <img class='img-responsive2' style=' width:14%; border-radius:50% ; 'src='" + arrayUtilizadores[i]._foto + "' alt='' srcset=''>"
                navBarFoto.innerHTML += "  <small  style='color:white ' id='helpId' >" + arrayUtilizadores[i]._nome + "</small>"
                console.log("putak pari")
            }
            else {
                x++
            }



        }
        //tirar foto da navbar
        if (x == arrayUtilizadores.length && substring5 == "true") {

            navBarFoto.innerHTML += " <i class='fas fa-user'></i>"
            navBarFoto.innerHTML += "  <small  style='color:white ' id='helpId' >" + substring2 + "</small>"

        }


    })


}
//######33#######catalogoParcerias###########

// Função que vai alimentar o meu catálogo
function renderCatalog() {

    let myCard = document.getElementById("HomePageCartParcerias")
    let parceriasGuardados = ""
  
    let strHtmlCard = ""
    //buscar as parcerias
    if (localStorage.getItem("Parcerias")) {
        parceriasGuardados = JSON.parse(localStorage.getItem("Parcerias"))
    }

    //preencher a card
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
           <div class="card card-primary text-center" style="width:80%; height:100%">
         
           <br>
          
               <div class="card-body">
               <img class="card-img-top" src="${parceriasGuardados[i]._linkLogotipo}" alt="Card image cap">
               <h3 class="card-title" style="background-color:rgb(218, 215, 209)">${parceriasGuardados[i]._Empresa}</h3>
          
        <br>
      
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
    let TotalPontuaçãoGuardados = ""
   
    let strHtmlCardE = ""
    //buscar todos os eventos
    if (localStorage.getItem("TotalPontuação")) {
        TotalPontuaçãoGuardados = JSON.parse(localStorage.getItem("TotalPontuação"))
    }
    // buscar apenas os 3 mais pontuados
    for (let i = TotalPontuaçãoGuardados.length - 1; i >= TotalPontuaçãoGuardados.length - 3; i--) {


        // Inicia a linha
        if (i % 4 == 1) {
            strHtmlCardE += `<br><br><div class="row">`
        }

        // Cria a card
        strHtmlCardE += `<div class="col-sm-4">
            <div class="card" style="width: 18rem;background-color:antiquewhite;">
            <img style="height:100%;" class="card-img-top" src="${TotalPontuaçãoGuardados[i]._eventoImage}" alt="Card image cap">
                <div class="card-body">
                <h3 class="card-title" style="text-align:center">${TotalPontuaçãoGuardados[i]._nomeEvento}</h3>
                <div class="row">
                <div class="col-sm-6">
                <h5>Pontuação média:</h5>
                <h1 class="card-text"> &#x2605;${TotalPontuaçãoGuardados[i]._pontuacaoTotal}</h1> 
                </div>
                <div class="col-sm-6">
                <h5>Data:</h5>
                <h6 class="card-text">${TotalPontuaçãoGuardados[i]._dataRealizacao}</h6>
                </div>
                </div> <br>`
        strHtmlCardE += `</div>
            </div>      
        </div>`

        // Fecha a linha
        if (i % 4 == 2) {
            strHtmlCardE += `</div><br>`
        }

    }

    myCard.innerHTML = strHtmlCardE

}

//##################catalogoDocentes"##########################

// Função que vai alimentar o meu catálogo
function renderCatalogD() {

    let myCard = document.getElementById("HomePageCartDocentes")
    let DocentesGuardados = ""
  
    let strHtmlCardD = ""
    //buscar todos os docentes
    if (localStorage.getItem("Docentes")) {
        DocentesGuardados = JSON.parse(localStorage.getItem("Docentes"))
    }

    //preencher a card com os dados
    for (let i = 0; i < DocentesGuardados.length; i++) {

        if (i < 7) {

            // Inicia a linha
            if (i % 6 == 0) {
                strHtmlCardD += `<div class="row">`
            }

            // Cria a card
            strHtmlCardD += `<div class="col-sm-2">
        <div class="card card-primary text-center" style="width:80%; height:100%">
        <img style="border-radius: 50%;padding-left:10%;padding-right:10%;height:50%;padding-top:8%;""  src="${DocentesGuardados[i]._foto}" alt="">
       
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


