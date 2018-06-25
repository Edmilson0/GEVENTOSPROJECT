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
    let CodigoDocenteGuardado = ""

    let codigoDocente = "Docente"
    localStorage.setItem("Codigo", codigoDocente)

    let btnLogout = document.getElementById("optLogout")
    let btnConfig = document.getElementById("linkConfig")
    btnLogout.style.display = 'none'
    btnConfig.style.display = 'none'

    let nomeDocente = document.getElementById("modalNomeDocente")
    let formaçao = document.getElementById("modalFormaçaoDocente")
    let foto = document.getElementById("modalFotoDocente")
    let cv = document.getElementById("modalCVDocente")
    let frmDocentes = document.getElementById("frmDocentes")
    let btnRegisto = document.getElementById("optRegisto")
    let btnLogin = document.getElementById("optLogin")
    let btnCriarDocentes = document.getElementById("btnAdDocentes")
    btnCriarDocentes.style.display = 'none'
    let ModalRegistar = document.getElementById("frmRegistar")
    let iconRemoverDocentes = document.getElementsByClassName("fas fa-trash d"), i;
    for (let i = 0; i < iconRemoverDocentes.length; i++) {
        iconRemoverDocentes[i].style.display = 'none'

    }



    if (localStorage.getItem("utilizadores")) {
        let tempArray = []
        tempArray = JSON.parse(localStorage.getItem("utilizadores"))
        for (let i = 0; i < tempArray.length; i++) {
            let novoutilizador = new Utilizador(tempArray[i]._nome, tempArray[i]._email, tempArray[i]._password, tempArray[i]._foto, tempArray[i]._tipoUtilizador)
            arrayUtilizadores.push(novoutilizador)

        }

    }

    if (localStorage.getItem("Docentes")) {
        let tempArrayDocentes = []
        tempArrayDocentes = JSON.parse(localStorage.getItem("Docentes"))
        for (let i = 0; i < tempArrayDocentes.length; i++) {
            let novodocente = new Docentes(tempArrayDocentes[i]._NomeDocente, tempArrayDocentes[i]._foto, tempArrayDocentes[i]._formaçao, tempArrayDocentes[i]._CV)
            arrayDocentes.push(novodocente)

        }

    }
    let utilizadorOnline = ""

    if (localStorage.getItem("estadoUtitlizador")) {
        utilizadorOnline = localStorage.getItem("estadoUtitlizador")
    }
    let pos1 = utilizadorOnline.indexOf(",")
    let pos2 = utilizadorOnline.lastIndexOf(",")
    let substring2 = utilizadorOnline.substring(0, pos1)
    let substring4 = utilizadorOnline.substring(pos2 + 1, utilizadorOnline.length)
    let substring3 = utilizadorOnline.substring(pos1 + 1, pos2)

    if (substring4 == "estudante" || substring4 == "Visitante" && substring3 == "true") {

        btnCriarDocentes.style.display = 'none'
        btnLogout.style.display = 'block'
        btnLogin.style.display = 'none'
        btnRegisto.style.display = 'none'
    }
    else if (substring4 == "docente" || substring4 == "admin" && substring3 == "true") {

        btnCriarDocentes.style.display = 'block'
        btnLogout.style.display = 'block'
        btnLogin.style.display = 'none'
        btnRegisto.style.display = 'none'
    }
    else if (substring2 == "admin" && substring3 == "true") {

        btnLogout.style.display = 'block'
        btnLogin.style.display = 'none'
        btnRegisto.style.display = 'none'
        btnConfig.style.display = 'block'
        btnCriarDocentes.style.display = 'block'

    }

    let x = 0
    let navBarFoto = document.getElementById("fotoUser")
    for (let i = 0; i < arrayUtilizadores.length; i++) {

        if (substring2 == arrayUtilizadores[i]._nome && substring3 == "true") {

            navBarFoto.innerHTML += " <img  class='img-responsive2' style=' width:14%; border-radius:50% ; 'src='" + arrayUtilizadores[i]._foto + "' alt='' srcset=''>"
            navBarFoto.innerHTML += "  <small  style='color:white ' id='helpId' >" + arrayUtilizadores[i]._nome + "</small>"

        }




    }


    if (substring3 == "false") {

        navBarFoto.innerHTML += " <img  class='img-responsive2' style=' width:14%; border-radius:50% ; 'src='' alt='' srcset=''>"
        navBarFoto.innerHTML += "  <small  style='color:white ' id='helpId' ></small>"
    }
    renderCatalog()


    let arrayEstadoUt = []
    let estado = ""

    let stadoUtilizador = false



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




        }
        //se o utilizador não exister emite uma mensagem
        if (cont == utGuardados.length) {
            swal({
                icon: "error",
                title: "Utilizador não existente!",
               
            });
            event.preventDefault()
        }

        if (localStorage.getItem("estadoUtitlizador")) {
            utilizadorOnline = localStorage.getItem("estadoUtitlizador")
        }
        let pos1 = utilizadorOnline.indexOf(",")
        let pos2 = utilizadorOnline.lastIndexOf(",")
        let substring2 = utilizadorOnline.substring(0, pos1)
        let substring3 = utilizadorOnline.substring(pos2 + 1, utilizadorOnline.length)
        let substring4 = utilizadorOnline.substring(pos1 + 1, pos2)

        if (substring3 == "Visitante" || substring3 == "estudante" && substring4 == "true") {
            btnCriarDocentes.style.display = 'none'
            for (let i = 0; i < iconRemoverDocentes.length; i++) {
                iconRemoverDocentes[i].style.display = 'none'

            }
            console.log(substring3)

        }

        else {
            btnCriarDocentes.style.display = 'block'
            for (let i = 0; i < iconRemoverDocentes.length; i++) {
                iconRemoverDocentes[i].style.display = 'block'

            }
        }

        for (let i = 0; i < arrayUtilizadores.length; i++) {

            if (substring2 == arrayUtilizadores[i]._nome && substring4 == "true") {

                navBarFoto.innerHTML += " <img  class='img-responsive2' style=' width:14%; border-radius:50% ; 'src='" + arrayUtilizadores[i]._foto + "' alt='' srcset=''>"
                navBarFoto.innerHTML += "  <small  style='color:white ' id='helpId' >" + arrayUtilizadores[i]._nome + "</small>"
                console.log("putak pari")
            }
            else {
                x++
            }



        }
        if (x == arrayUtilizadores.length && substring4 == "true") {

            navBarFoto.innerHTML += " <i class='fas fa-user'></i>"
            navBarFoto.innerHTML += "  <small  style='color:white ' id='helpId' >" + substring2 + "</small>"

        }


        renderCatalog()

        event.preventDefault()

    })


    //Fazendo logout
    btnLogout.addEventListener("click", function (event) {

        for (let i = 0; i < iconRemoverDocentes.length; i++) {
            iconRemoverDocentes[i].style.display = 'block'

        }


        let estado = ""

        if (localStorage.getItem("estadoUtitlizador")) {
            estado = localStorage.getItem("estadoUtitlizador")
        }
        let pos1 = estado.indexOf(",")

        let substring1 = estado.substring(pos1 + 1, estado.length)
        let substring2 = estado.substring(0, pos1)

        stadoUtilizador = false
        console.log(substring1)

        arrayEstadoUt.push(substring2)
        arrayEstadoUt.push(stadoUtilizador)
        localStorage.setItem("estadoUtitlizador", arrayEstadoUt)
        arrayEstadoUt = []
        btnRegisto.style.display = 'block'
        btnLogin.style.display = 'block'
        btnCriarDocentes.style.display = 'none'
        btnLogout.style.display = 'none'


        for (let i = 0; i < iconRemoverDocentes.length; i++) {
            iconRemoverDocentes[i].style.display = 'none'

        }

        navBarFoto.innerHTML += ""
        navBarFoto.innerHTML += ""
        window.location.reload()
        event.preventDefault()

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

                while (confirmarCodigoDocente != CodigoDocenteGuardado) {
                    confirmarCodigoDocente = prompt("Escreva o código de confimação")
                    window.location.reload()
                }


                tipoutilizador = "docente"

                event.preventDefault()


            }
            else {
                tipoutilizador = "Visitante"
            }
            for (let i = 0; i < arrayUtilizadores.length; i++) {

                if (emailUt != arrayUtilizadores[i]._email) {
                    varContEmail++
                }

            }

            for (let i = 0; i < arrayUtilizadores.length; i++) {

                if (nomeUt != arrayUtilizadores[i]._nome) {
                    varContNome++
                }

            }

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





    })



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



    if (localStorage.getItem("Docentes")) {
        DocentesGuardados = JSON.parse(localStorage.getItem("Docentes"))
    }



    for (let i = 0; i < DocentesGuardados.length; i++) {


        // Inicia a linha
        if (i % 3 == 0) {
            strHtmlCard += `<div class="row">`
        }

        // Cria a card
        strHtmlCard += `<div class="col-sm-4">
        <br>
        <div class="card" style="width:70%; height:100%">
        <img style="border-radius: 50%;padding-left:25%;padding-right:25%;height:35%;padding-top:8%;""  src="${DocentesGuardados[i]._foto}" alt="">
       
            <div class="card-body">
            <h5 class="card-text">${DocentesGuardados[i]._NomeDocente}</h5>
                <p class="card-text">${ DocentesGuardados[i]._formaçao}</p>
               
                <br>
                <input name="" id="btnLerCV" class="btn z" type="button" value="Ler">
                <small id="helpId" class="form-text text-muted">Ler o Curriculum Vitae do docente</small>
                <a href=""><i id="iconRemoverDocentes" class="fas fa-trash de"></i></a>
               
                   `


        strHtmlCard += `</div>
                    </div>      
                </div>`

        // Fecha a linha
        if (i % 3 == 2) {
            strHtmlCard += `</div> <hr> <hr>`
        }
    }


    myCard.innerHTML = strHtmlCard

    let iconRemoverDocentes = document.getElementsByClassName("fas fa-trash de"), i;

    for (let i = 0; i < iconRemoverDocentes.length; i++) {
        iconRemoverDocentes[i].style.display = 'none'

    }

    let utilizadorOnline = ""

    if (localStorage.getItem("estadoUtitlizador")) {
        utilizadorOnline = localStorage.getItem("estadoUtitlizador")
    }
    let pos1 = utilizadorOnline.indexOf(",")
    let pos2 = utilizadorOnline.lastIndexOf(",")
    let substring2 = utilizadorOnline.substring(0, pos1)
    let substring3 = utilizadorOnline.substring(pos2 + 1, utilizadorOnline.length)
    let substring4 = utilizadorOnline.substring(pos1 + 1, pos2)

    console.log(iconRemoverDocentes.length)
    for (let i = 0; i < iconRemoverDocentes.length; i++) {

        if (substring3 == "Visitante" || substring3 == "estudante" && substring4 == "true") {
            iconRemoverDocentes[i].style.display = 'none'
        }
        if (substring3 == "docente" || substring2 == "admin" && substring4 == "true") {

            iconRemoverDocentes[i].style.display = 'block'

        }
    }


    //remover docentes



    for (let i = 0; i < iconRemoverDocentes.length; i++) {

        iconRemoverDocentes[i].addEventListener("click", function (event) {
            let confirmação = confirm("Deseja mesmo eliminar o docente?")

            if (confirmação) {
                DocentesGuardados.splice(i, 1)
                alert("Docente eliminado com sucesso")
                localStorage.setItem("Docentes", JSON.stringify(DocentesGuardados))


                // Inicia a linha
                if (i % 3 == 0) {
                    strHtmlCard += `<div class="row">`
                }

                // Cria a card
                strHtmlCard += `<div class="col-sm-4">
        <br>
        <div class="card" style="width:80%; height:100%">
        <imgstyle="border-radius: 50%;padding-left:25%;padding-right:25%;height:35%;padding-top:8%;"" src="${DocentesGuardados[i]._foto}" alt="">
       
            <div class="card-body">
            <h5 class="card-text">${DocentesGuardados[i]._NomeDocente}</h5>
                <p class="card-text">${ DocentesGuardados[i]._formaçao}</p>
               
                <br>
                <input name="" id="btnLerCV" class="btn z" type="button" value="Ler">
                <small id="helpId" class="form-text text-muted">Ler o Curriculum Vitae do docente</small>
                <a href=""><i id="iconRemoverDocentes" class="fas fa-trash de"></i></a>
               
                    `


                strHtmlCard += `</div>
                    </div>      
                </div>`

                // Fecha a linha
                if (i % 3 == 2) {
                    strHtmlCard += `</div> <hr> <hr>`
                }


            }


        })

    }


    //preencher a modal do curriculum

    let header = ""
    let content = ""
    let img = ""
    let strSubmitFunc = hideModal();
    btnText = "Just do it!";

    if (localStorage.getItem("Docentes")) {
        DocentesGuardados = JSON.parse(localStorage.getItem("Docentes"))
    }


    let btnLerCV = document.getElementsByClassName("btn z")
    let modalBody = document.getElementsByClassName("modal-body")
    let arraTodosDocentes = []


    if (localStorage.getItem("Docentes")) {
        let tempArrayDocentes = []
        arraTodosDocentes = JSON.parse(localStorage.getItem("Docentes"))


    }

    for (let i = 0; i < btnLerCV.length; i++) {

        btnLerCV[i].addEventListener("click", function () {

            header = arrayDocentes[i]._NomeDocente + ": " + "Curriculum Vitae";
            content = arrayDocentes[i]._CV;
            img = arrayDocentes[i]._foto


            doModal('myModal', header, content);


        })

    }

}

function doModal(placementId, heading, formContent) {
    let html = '<div id="modalWindow" class="modal hide fade in"style="left:30%; width:50%;height: 50%; background-color:white;">';
    html += '<div class="modal-header">';
    html += '<a id="fecharModalComentario" class="btn btn-danger" data-dismiss="modal">×</a>';

    html += '<h4 style="color:black">' + heading + '</h4>'
    html += '</div>';
    html += '<div class="modal-body">';
    html += '<p>';
    html += '<h6 style="color:black; background-color:white;font-family:arial">' + formContent + '</h6>';
    html += '</div>';
    html += '</span>'; // close button
    html += '</div>';  // footer
    html += '</div>';  // modalWindow
    $("#myModal").html(html);
    $("#modalWindow").modal();

    let btnFechar = document.getElementById("fecharModalComentario")
    btnFechar.addEventListener("click", function () {
        window.location.reload()
    })
}


function hideModal() {
    // Using a very general selector - this is because $('#modalDiv').hide
    // will remove the modal window but not the mask
    $('.modal.in').modal('hide');
}

