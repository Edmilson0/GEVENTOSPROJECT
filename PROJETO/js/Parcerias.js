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

    let CodigoDocenteGuardado = ""

    let nomeEmpresa = document.getElementById("modalNomeEmpresa")
    let locaEmpresa = document.getElementById("modalLocalizaçaoEmpresa")
    let linkEmpresa = document.getElementById("modalLinkEmpresa")
    let linkLogotipo = document.getElementById("modalImagemEmpresa")
    let frmParcerias = document.getElementById("frmParcerias")
    let btnRemover = document.getElementById("btnRemoverr")
    let btnAdicionarParceria = document.getElementById("btnAdParcerias")
    let ModalRegistar = document.getElementById("frmRegistar")
    btnAdicionarParceria.style.display='none'

    let btnLogout = document.getElementById("optLogout")
    let btnConfig = document.getElementById("linkConfig")
    let btnRegisto = document.getElementById("optRegisto")
    let btnLogin = document.getElementById("optLogin")
 
    btnLogout.style.display = 'none'
    btnConfig.style.display = 'none'


    let arrayEstadoUt = []
    let estado = ""

    let stadoUtilizador = false
    let utilizadorOnline = ""



    if (localStorage.getItem("Parcerias")) {
        let tempArrayParcerias = []
        tempArrayParcerias = JSON.parse(localStorage.getItem("Parcerias"))
        for (let i = 0; i < tempArrayParcerias.length; i++) {
            let novoParceria = new Parcerias(tempArrayParcerias[i]._Empresa, tempArrayParcerias[i]._localizaçao, tempArrayParcerias[i]._linkLogotipo, tempArrayParcerias[i]._link)
            arrayParcerias.push(novoParceria)

        }

    }


    if (localStorage.getItem("utilizadores")) {
        let tempArray = []
        tempArray = JSON.parse(localStorage.getItem("utilizadores"))
        for (let i = 0; i < tempArray.length; i++) {
            let novoutilizador = new Utilizador(tempArray[i]._nome, tempArray[i]._email, tempArray[i]._password, tempArray[i]._foto, tempArray[i]._tipoUtilizador)
            arrayUtilizadores.push(novoutilizador)

        }

    }



    if (localStorage.getItem("estadoUtitlizador")) {
        utilizadorOnline = localStorage.getItem("estadoUtitlizador")
    }
    let pos1 = utilizadorOnline.indexOf(",")
    let pos2 = utilizadorOnline.lastIndexOf(",")
    let substring2 = utilizadorOnline.substring(0, pos1)
    let substring4 = utilizadorOnline.substring(pos2 + 1, utilizadorOnline.length)
    let substring3 = utilizadorOnline.substring(pos1 + 1, pos2)
    let substring1 = utilizadorOnline.substring(pos1 + 1, utilizadorOnline.length)
   
    if (substring4 == "Visitante" || substring4 == "estudante" && substring3 == "true") {
        console.log("Docente")
        btnAdicionarParceria.style.display = 'none'
        btnLogout.style.display = 'block'
        btnLogin.style.display = 'none'
        btnRegisto.style.display = 'none'
        btnConfig.style.display = 'none'
    }
    if (substring1=="false") {
        
    }
    if (substring2 == "admin" && substring3 == "true") {

        btnLogout.style.display = 'block'
        btnLogin.style.display = 'none'
        btnRegisto.style.display = 'none'
        btnConfig.style.display = 'block'
        btnAdicionarParceria.style.display='block'
    }

    if (substring4 == "docente") {
        btnAdicionarParceria.style.display = 'block'
        btnLogout.style.display = 'block'
        btnLogin.style.display = 'none'
        btnRegisto.style.display = 'none'
        btnConfig.style.display = 'none'

    }
  
    let x = 0
    let navBarFoto = document.getElementById("fotoUser")
    for (let i = 0; i < arrayUtilizadores.length; i++) {

        if (substring2 == arrayUtilizadores[i]._nome && substring3 == "true") {

            navBarFoto.innerHTML += " <img class='img-responsive2' style=' width:14%; border-radius:50% ; 'src='" + arrayUtilizadores[i]._foto + "' alt='' srcset=''>"
            navBarFoto.innerHTML += "  <small  style='color:white ' id='helpId' >" + arrayUtilizadores[i]._nome + "</small>"

        }




    }

    if (substring3 == "false") {

        navBarFoto.innerHTML += " <img class='img-responsive2' style=' width:14%; border-radius:50% ; 'src='' alt='' srcset=''>"
        navBarFoto.innerHTML += "  <small  style='color:white ' id='helpId' ></small>"
    }

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
                swal({
                    icon: "success",
                    title: "Login com sucesso!",
                    text: "Bem vindo! " + utGuardados[i]._nome,
                });

                btnRegisto.style.display = 'none'
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

            if (substring4 == "Visitante" || substring4 == "estudante" && substring3 == "true") {
                console.log("Docente")
                btnAdicionarParceria.style.display = 'none'
                btnLogout.style.display = 'block'
                btnLogin.style.display = 'none'
                btnRegisto.style.display = 'none'
                btnConfig.style.display = 'none'
            }

            if (substring4 == "docente") {
                btnAdicionarParceria.style.display = 'block'
                btnLogout.style.display = 'block'
                btnLogin.style.display = 'none'
                btnRegisto.style.display = 'none'
                btnConfig.style.display = 'none'

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

            if (substring2 == arrayUtilizadores[i]._nome && substring3 == "true") {

                navBarFoto.innerHTML += " <img class='img-responsive2' style=' width:14%; border-radius:50% ; 'src='" + arrayUtilizadores[i]._foto + "' alt='' srcset=''>"
                navBarFoto.innerHTML += "  <small  style='color:white ' id='helpId' >" + arrayUtilizadores[i]._nome + "</small>"
             
            }
            else {
                x++
            }



        }
        if (x == arrayUtilizadores.length && substring3 == "true") {

            navBarFoto.innerHTML += " <i class='fas fa-user'></i>"
            navBarFoto.innerHTML += "  <small  style='color:white ' id='helpId' >" + substring2 + "</small>"

        }


    })

    //submeter os dados do utilizador 
    ModalRegistar.addEventListener("submit", function (event) {

        if (localStorage.getItem("Codigo")) {

            CodigoDocenteGuardado = localStorage.getItem("Codigo")

        }

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
            } else if (docente.checked == true) {
                //pedir o codigo do docente
                while (confirmarCodigoDocente != CodigoDocenteGuardado) {
                    confirmarCodigoDocente = prompt("Escreva o código de confimação")
                    window.location.reload()
                }

                tipoutilizador = "docente"
            }
            else {
                tipoutilizador = "Visitante"
            }
            //validar o campo de email
            for (let i = 0; i < arrayUtilizadores.length; i++) {

                if (emailUt != arrayUtilizadores[i]._email) {
                    varContEmail++
                }

            }
            //validar o nome
            for (let i = 0; i < arrayUtilizadores.length; i++) {

                if (nomeUt != arrayUtilizadores[i]._nome) {
                    varContNome++
                }

            }
            //enviar alerta
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
            //criar utilizador
            if (varContEmail == arrayUtilizadores.length && varContNome == arrayUtilizadores.length) {
                let novoutilizador = new Utilizador(nomeUt, emailUt, Password, fotoUt, tipoutilizador)
                arrayUtilizadores.push(novoutilizador)
                swal({
                    icon: "success",
                    title: "Registo com secesso!",
                    text: "Bem vindo! ",
                });

                localStorage.setItem("utilizadores", JSON.stringify(arrayUtilizadores))
                btnRegisto.style.display = 'none'
                btnLogin.style.display = 'none'
                btnLogout.style.display = 'block'
                stadoUtilizador = true
                arrayEstadoUt.push(nomeUt)
                arrayEstadoUt.push(stadoUtilizador)
                arrayEstadoUt.push(tipoutilizador)
                localStorage.setItem("estadoUtitlizador", arrayEstadoUt)
                arrayEstadoUt = []

            }

            ModalRegistar.reset()
            console.log(arrayUtilizadores)
            event.preventDefault()

        }

        if (localStorage.getItem("estadoUtitlizador")) {
            utilizadorOnline = localStorage.getItem("estadoUtitlizador")
        }
        let pos1 = utilizadorOnline.indexOf(",")
        let pos2 = utilizadorOnline.lastIndexOf(",")
        let substring2 = utilizadorOnline.substring(0, pos1)
        let substring3 = utilizadorOnline.substring(pos2 + 1, utilizadorOnline.length)


        if (substring3 == "Visitante" || substring3 == "Estudante") {
            btnAdicionarParceria.style.display = 'none'

        }
        else {
            btnAdicionarParceria.style.display = 'block'
        }


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
        console.log(substring2)

        arrayEstadoUt.push(substring2)
        arrayEstadoUt.push(stadoUtilizador)
        localStorage.setItem("estadoUtitlizador", arrayEstadoUt)
        arrayEstadoUt = []
        btnRegisto.style.display = 'block'
        btnLogin.style.display = 'block'
        btnLogout.style.display = 'none'
        btnAdicionarParceria.style.display = 'none'
        window.location.reload()

    })



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
  
    let strHtmlCard = ""

    if (localStorage.getItem("Parcerias")) {
        parceriasGuardados = JSON.parse(localStorage.getItem("Parcerias"))
    }
    for (let i = 0; i < parceriasGuardados.length; i++) {


        // Inicia a linha
        if (i % 2 == 0) {
            strHtmlCard += `<div class="row">`
        }

        // Cria a card
        strHtmlCard += `<div class="col-sm-6">
           <br>
           <br>
           <div class="card card-primary text-center" style="width:80%; height:100%">
           <img class="card-img-top" src="${parceriasGuardados[i]._linkLogotipo}" alt="Card image cap">
           <h3 class="card-title" style="background-color:rgb(218, 215, 209)">${parceriasGuardados[i]._Empresa}</h3>
          
               <div class="card-body">
               <a target="${parceriasGuardados[i]._link}" href="">Visite-nos</a>
              
        <br>
        <h5>Localização:</h5>
        <h6 class="card-text">${parceriasGuardados[i]._localizaçao}</h6>
        <br>
        <br>
        <a href=""style="text-align:left">
        <i  class="fas fa-times"></i>

        
        </a>
        <small style="text-align:left" class="form-text text-muted">
        Eliminar parceria
        </small>
      
                
               `




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
    let btnRemoverParcerias = document.getElementsByClassName("fas fa-times"), i;

    // 2. Para cada Trip vou definir uma Card e compô-la com os dados do objeto
    for (let i = 0; i < btnRemoverParcerias.length; i++) {
        btnRemoverParcerias[i].style.display = 'none'

    }

    //remover parcerias
    for (let i = 0; i < btnRemoverParcerias.length; i++) {

        btnRemoverParcerias[i].addEventListener("click", function () {

            let confirmação = confirm("Quer mesmo eliminar esta parceria?!")
            if (confirmação) {

                parceriasGuardados.splice(i, 1)
                localStorage.setItem("Parcerias", JSON.stringify(parceriasGuardados))
                console.log(parceriasGuardados)
                if (localStorage.getItem("Parcerias")) {
                    parceriasGuardados = JSON.parse(localStorage.getItem("Parcerias"))
                }
                console.log(parceriasGuardados)
    
                for (let i = 0; i < parceriasGuardados.length; i++) {
    
    
    
                    // Inicia a linha
                    if (i % 2 == 0) {
                        strHtmlCard += `<div class="row">`
                    }
    
                    // Cria a card
                    strHtmlCard += `<div class="col-sm-6">
               <br>
               <br>
               
               <div class="card card-primary text-center">
               <img class="card-img-top" src="${parceriasGuardados[i]._linkLogotipo}" alt="Card image cap">
               <h3 class="card-title" style="background-color:rgb(218, 215, 209)">${parceriasGuardados[i]._Empresa}</h3>
              
                   <div class="card-body">
                   <br>
                   <a target="${parceriasGuardados[i]._link}" href="">Visite-nos</a>
                
            <br>
            <br>
            <h5>Localização:</h5>
            <h6 class="card-text">${parceriasGuardados[i]._localizaçao}</h6>
            
            <a href="">
            <i style="text-align:left" class="fas fa-times"></i>
            </a>
            <small style="text-align:left" class="form-text text-muted">
            Eliminar parceria
            </small>
    
                        `
    
                    strHtmlCard += `</div>
                        </div>      
                    </div>`
    
                    // Fecha a linha
                    if (i % 2 == 1) {
                        strHtmlCard += `</div>`
                    }
                }
    
                
            }

        })

    }

    let utilizadorOnline = ""

    // ver o estado do utilizador
    if (localStorage.getItem("estadoUtitlizador")) {
        utilizadorOnline = localStorage.getItem("estadoUtitlizador")
    }
    let pos1 = utilizadorOnline.indexOf(",")
    let pos2 = utilizadorOnline.lastIndexOf(",")
    let substring2 = utilizadorOnline.substring(0, pos1)
    let substring4 = utilizadorOnline.substring(pos2 + 1, utilizadorOnline.length)
    let substring3 = utilizadorOnline.substring(pos1 + 1, pos2)

    // esconder botoes de acordo com o utlizador
    if (substring4 == "Visitante" || substring4 == "estudante" && substring3 == "true") {
        console.log("Docente")


        for (let i = 0; i < btnRemoverParcerias.length; i++) {
            btnRemoverParcerias[i].style.display = 'none'

        }
    }

    else if (substring4 == "docente") {
        for (let i = 0; i < btnRemoverParcerias.length; i++) {
            btnRemoverParcerias[i].style.display = 'block'

        }

    }
    else if (substring2 == "admin"&&substring3=="true") {

        for (let i = 0; i < btnRemoverParcerias.length; i++) {
            btnRemoverParcerias[i].style.display = 'block'

        }

    }
}

