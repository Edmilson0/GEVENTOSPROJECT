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
    let btnRegisto = document.getElementById("optRegisto")
    let btnLogin = document.getElementById("optLogin")
    let btnCriarDocentes = document.getElementById("btnAdDocentes")
    let ModalRegistar = document.getElementById("frmRegistar")


    let arrayEstadoUt = []
    let estado = ""

    let stadoUtilizador = false
    let utilizadorOnline = ""


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

        if (localStorage.getItem("estadoUtitlizador")) {
            utilizadorOnline = localStorage.getItem("estadoUtitlizador")
        }
        let pos1 = utilizadorOnline.indexOf(",")
        let pos2 = utilizadorOnline.lastIndexOf(",")
        let substring2 = utilizadorOnline.substring(0, pos1)
        let substring3 = utilizadorOnline.substring(pos2 + 1, utilizadorOnline.length)


        if (substring3 == "Visitante" || substring3 == "Estudante") {
            btnCriarDocentes.style.display = 'none'


        }
        else {
            btnCriarDocentes.style.display = 'block'
        }

        event.preventDefault()

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
        btnCriarDocentes.style.display = 'none'
        btnLogout.style.display = 'none'

        event.preventDefault()

    })
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


            ModalRegistar.reset()
            console.log(arrayUtilizadores)
            event.preventDefault()

        }
        swal({
            icon: "success",
            title: "Registo com sucesso!",
            text: "Bem vindo! " + nomeUt,
        });

        localStorage.setItem("utilizadores", JSON.stringify(arrayUtilizadores))
        btnRegistar.style.display = 'none'
        btnLogin.style.display = 'none'
        btnLogout.style.display = 'block'
        stadoUtilizador = true
        arrayEstadoUt.push(nomeUt)
        arrayEstadoUt.push(stadoUtilizador)
        arrayEstadoUt.push(tipoutilizador)
        localStorage.setItem("estadoUtitlizador", arrayEstadoUt)
        arrayEstadoUt = []


        if (localStorage.getItem("estadoUtitlizador")) {
            utilizadorOnline = localStorage.getItem("estadoUtitlizador")
        }
        let pos1 = utilizadorOnline.indexOf(",")
        let pos2 = utilizadorOnline.lastIndexOf(",")
        let substring2 = utilizadorOnline.substring(0, pos1)
        let substring3 = utilizadorOnline.substring(pos2 + 1, utilizadorOnline.length)


        if (substring3 == "Visitante" || substring3 == "Estudante") {
            btnCriarDocentes.style.display = 'none'


        }
        else {
            btnCriarDocentes.style.display = 'block'
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
        if (i % 4 == 0) {
            strHtmlCard += `<div class="row">`
        }

        // Cria a card
        strHtmlCard += `<div class="col-sm-3">
        <br>
        <div class="card" style="width:80%; height:100%">
        <img style="width:100%" src="${DocentesGuardados[i]._foto}" alt="">
       
            <div class="card-body">
            <h5 class="card-text">${DocentesGuardados[i]._NomeDocente}</h5>
                <p class="card-text">${ DocentesGuardados[i]._formaçao}</p>
                <p class="card-text">${ DocentesGuardados[i]._CV}</p>
               
              
                <br>
                <input name="" id="btnLerCV" class="btn z" type="button" value="Ler">
                <small id="helpId" class="form-text text-muted">Ler o Curriculum Vitae do docente</small>
                
               
                    <hr>`


        strHtmlCard += `</div>
                    </div>      
                </div>`

        // Fecha a linha
        if (i % 4 == 3) {
            strHtmlCard += `</div>`
        }
    }


    myCard.innerHTML = strHtmlCard


    let header = ""
    let content = ""
    let strSubmitFunc = hideModal();
    btnText = "Just do it!";

    if (localStorage.getItem("Docentes")) {
        DocentesGuardados = JSON.parse(localStorage.getItem("Docentes"))
    }


    let btnLerCV = document.getElementsByClassName("btn z")
    let modalBody = document.getElementsByClassName("modal-body")
    let arraTodosDocentes=[]

    
    if (localStorage.getItem("Docentes")) {
        let tempArrayDocentes = []
        arraTodosDocentes= JSON.parse(localStorage.getItem("Docentes"))
       

    }

    for (let i = 0; i < btnLerCV.length; i++) {

        btnLerCV[i].addEventListener("click", function () {

            header = arrayDocentes[i]._NomeDocente+": "+"Curriculum Vitae";
            content = arrayDocentes[i]._CV;


            doModal('myModal', header, content);


        })

    }

}

function doModal(placementId, heading, formContent) {
    let html = '<div id="modalWindow" class="modal hide fade in" style="display:none; width:50%;height: 50%; background-color:white">';
    html += '<div class="modal-header">';
    html += '<a class="btn btn-danger" data-dismiss="modal">×</a>';
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
}


function hideModal() {
    // Using a very general selector - this is because $('#modalDiv').hide
    // will remove the modal window but not the mask
    $('.modal.in').modal('hide');
}

