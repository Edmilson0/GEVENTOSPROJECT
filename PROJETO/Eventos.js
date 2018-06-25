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

//################ Comentarios ################################################

let arrayComentarios = []
let arrayTotalComentarios=[]

class Comentarios {
    constructor(NomeUilizador, comentario, idDoEventoComentado) {

        this.NomeUilizador = NomeUilizador
        this.comentario = comentario
        this.idDoEventoComentado = idDoEventoComentado

    }

    // Propriedade NomeUilizador
    get NomeUilizador() {
        return this._NomeUilizador
    }
    set NomeUilizador(novoNomeUilizador) {
        this._NomeUilizador = novoNomeUilizador
    }

    // Propriedade comentario
    get comentario() {
        return this._comentario
    }

    set comentario(novocomentario) {
        this._comentario = novocomentario
    }

    // Propriedade idDoEventoComentado
    get idDoEventoComentado() {
        return this._idDoEventoComentado
    }

    set idDoEventoComentado(novoidDoEventoComentado) {
        this._idDoEventoComentado = novoidDoEventoComentado
    }


}


//################+++++##############################################

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

//################+++++################################################

let arrayIrEventos = []

let arrayTotalIrEventos = []

class IrEventos {
    constructor(idEvento, interessado, ir) {

        this.idEvento = idEvento
        this.interessado = interessado
        this.ir = ir


    }

    // Propriedade idEvento
    get idEvento() {
        return this._idEvento
    }
    set idEvento(novoidEvento) {
        this._idEvento = novoidEvento
    }


    // Propriedade interessado
    get interessado() {
        return this._interessado
    }

    set interessado(novointeressado) {
        this._interessado = novointeressado
    }
    // Propriedade ir
    get ir() {
        return this._ir
    }

    set ir(novoIr) {
        this._ir = novoIr
    }


}
//################ Classe pontuar eventos ################################################

let arrayPontuarEventos = []

class Pontuação {
    constructor(idEventoPontuado, nomeUti, pontuação) {

        this.idEventoPontuado = idEventoPontuado
        this.nomeUti = nomeUti
        this.pontuação = pontuação


    }

    // PropriedadeidEventoPontuado
    get idEventoPontuado() {
        return this._idEventoPontuado
    }
    set idEventoPontuado(novoidEventoPontuado) {
        this._idEventoPontuado = novoidEventoPontuado
    }

    // Propriedade nomeUti
    get nomeUti() {
        return this._nomeUti
    }

    set nomeUti(novonomeUti) {
        this._nomeUti = novonomeUti
    }
    // Propriedade pontuação
    get pontuação() {
        return this._pontuação
    }

    set pontuação(novopontuação) {
        this._pontuação = novopontuação
    }

}

//################ Classe total pontuação dos eventos ################################################

let arrayTotalPontuaçãoEventos = []
let arrayPontuaçãoGeral = []

class PontuaçãoTotal {

    constructor(idEventoPontuaçãoTotal, pontuacaoTotal, nomeEvento, dataRealizacao, eventoImage) {

        this.idEventoPontuaçãoTotal = idEventoPontuaçãoTotal
        this.pontuacaoTotal = pontuacaoTotal
        this.nomeEvento = nomeEvento
        this.dataRealizacao = dataRealizacao
        this.eventoImage = eventoImage

        /*  arrayTotalPontuaçãoEventos.sort(function(a,b) {return (a.pontuacaoTotal > b.pontuacaoTotal) ? 1 : ((b.pontuacaoTotal > a.pontuacaoTotal) ? -1 : 0);} );*/
    }


    // Propriedade idEventoPontuaçãoTotal
    get idEventoPontuaçãoTotal() {
        return this.idEventoPontuaçãoTotal
    }
    set idEventoPontuaçãoTotal(novoidEventoPontuaçãoTotal) {
        this._idEventoPontuaçãoTotal = novoidEventoPontuaçãoTotal
    }

    // Propriedade pontuacaoTotal
    get pontuacaoTotal() {
        return this._pontuacaoTotal
    }

    set pontuacaoTotal(novopontuacaoTotal) {
        this._pontuacaoTotal = novopontuacaoTotal
    }
    // Propriedade nomeEvento
    get nomeEvento() {
        return this._nomeEvento
    }

    set nomeEvento(novonomeEvento) {
        this._nomeEvento = novonomeEvento
    }
    // Propriedade dataRealizacao
    get dataRealizacao() {
        return this._dataRealizacao
    }

    set dataRealizacao(novodataRealizacao) {
        this._dataRealizacao = novodataRealizacao
    }
    // Propriedade eventoImage
    get eventoImage() {
        return this._eventoImage
    }

    set eventoImage(novoeventoImage) {
        this._eventoImage = novoeventoImage
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
    esconderIcon()
    PontuarEventos()

    let CodigoDocenteGuardado = ""

    let btnLogout = document.getElementById("optLogout")
    let btnConfig = document.getElementById("linkConfig")

    btnConfig.style.display = 'none'


    let verCategoria = document.getElementById("optVerPorCategorias")
    let btnVer = document.getElementById("ver")
    let btnPontuar = document.getElementById("btnPOntuar")
    let btnRange = document.getElementById("inputRange")
    let btnCriarEventos = document.getElementById("btnCriarEventos")
    let frmCriarEventos = document.getElementById("frmCriarEventos")
    //btnCriarEventos.style.display = 'none'
    let btnRegisto = document.getElementById("optRegisto")

    let btnLogin = document.getElementById("optLogin")
    let ModalRegistar = document.getElementById("frmRegistar")
    btnLogout.style.display = 'none'




    if (localStorage.getItem("Eventos")) {
        let tempArrayEventos = []
        tempArrayEventos = JSON.parse(localStorage.getItem("Eventos"))
        for (let i = 0; i < tempArrayEventos.length; i++) {
            let novoEvents = new Eventos(tempArrayEventos[i]._data, tempArrayEventos[i]._hora, tempArrayEventos[i]._sala, tempArrayEventos[i]._categoria, tempArrayEventos[i]._responsavel, tempArrayEventos[i]._imagem, tempArrayEventos[i]._designacao)


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

    if (localStorage.getItem("Interessados")) {
        let tempArrayInteressados = []
        arrayIrEventos = JSON.parse(localStorage.getItem("Interessados"))


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

    if (substring4 == "Visitante" || substring4 == "estudante" && substring3 == "true") {
        btnCriarEventos.style.display = 'none'
    }

    if (substring3 == "true") {


        btnLogout.style.display = 'block'
        btnLogin.style.display = 'none'
        btnRegisto.style.display = 'none'
    }
    if (substring2 == "admin" && substring3 == "true") {

        btnLogout.style.display = 'block'
        btnLogin.style.display = 'none'
        btnRegisto.style.display = 'none'
        btnConfig.style.display = 'block'

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
        let substring5 = utilizadorOnline.substring(pos1 + 1, pos2)

        if (substring3 == "Visitante" || substring3 == "Estudante") {
            btnCriarEventos.style.display = 'none'

        }
        else {
            btnCriarEventos.style.display = 'block'
        }


        for (let i = 0; i < arrayUtilizadores.length; i++) {

            if (substring2 == arrayUtilizadores[i]._nome && substring5 == "true") {

                navBarFoto.innerHTML += " <img class='img-responsive2' style=' width:14%; border-radius:50% ; 'src='" + arrayUtilizadores[i]._foto + "' alt='' srcset=''>"
                navBarFoto.innerHTML += "  <small  style='color:white ' id='helpId' >" + arrayUtilizadores[i]._nome + "</small>"
                console.log("putak pari")
            }
            else {
                x++
            }



        }
        if (x == arrayUtilizadores.length && substring5 == "true") {

            navBarFoto.innerHTML += " <i class='fas fa-user'></i>"
            navBarFoto.innerHTML += "  <small  style='color:white ' id='helpId' >" + substring2 + "</small>"

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
        btnCriarEventos.style.display = 'none'
        btnLogout.style.display = 'none'
        btnConfig.style.display = 'none'

        navBarFoto.innerHTML += ""
        navBarFoto.innerHTML += ""

        window.location.reload()
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

                }
                tipoutilizador = "docente"
                window.location.reload()
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
            window.location.reload()
            event.preventDefault()

        }


    })




    //submeter eventos
    frmCriarEventos.addEventListener("submit", function (event) {

        let data = document.getElementById("ModalData").value
        let horario = document.getElementById("ModalHorário").value
        let sala = document.getElementById("ModalSala").value
        let imagem = document.getElementById("ModalImagem").value
        let responsavel = document.getElementById("ModalResponsavel").value
        let categoria = document.getElementById("optCategorias").value
        let designacao = document.getElementById("ModalDesigEvento").value

        let dataEvento = Date.parse(data)
        let dataAtual = Date.parse(Date())

        if (dataEvento < dataAtual) {

            alert("A data do evento tem de ser maior à data atual!")
            event.preventDefault()

        }
        else {

            let novoEventos = new Eventos(data, horario, sala, categoria, responsavel, imagem, designacao)
            arrayEventos.push(novoEventos)

            localStorage.setItem("Eventos", JSON.stringify(arrayEventos))
            swal({
                icon: "success",
                title: "Evento submetido com sucesso!",
                text: "Bem vindo! ",
            });

            renderCatalog()

            event.preventDefault()

        }

    })

    //ver eventos por categoria
    let myCard = document.getElementById("myCardEventos")
    let strHtmlCard2 = ""
    let contador = 0

    let acumulador = 0

    btnVer.addEventListener("click", function () {

        let strHtmlCard2 = ""
        let total = 0

        let somador = 0
        let acumulado = 0


        strHtmlCard2 = ""
        if (localStorage.getItem("PontuaçãoGeral")) {
            let tempArrayPontuação = []
            tempArrayPontuação = JSON.parse(localStorage.getItem("PontuaçãoGeral"))
            for (let i = 0; i < tempArrayPontuação.length; i++) {
                let novoPontuaçõesGerais = new Pontuação(tempArrayPontuação[i]._idEventoPontuadoTotal, tempArrayPontuação[i]._pontuacaoTotal, tempArrayPontuação[i].nomeEvento)
                arrayPontuaçãoGeral.push(novoPontuaçõesGerais)

            }

        }

        if (localStorage.getItem("Interessados")) {
            arrayIrEventos = JSON.parse(localStorage.getItem("Interessados"))
        }
        if (localStorage.getItem("TotalInteressados")) {
            arrayTotalIrEventos = JSON.parse(localStorage.getItem("TotalInteressados"))
        }

        let EventosGuardados2 = ""
        let EventosGuardadosPorCateg = ""
        let contCategoria = 0
        if (verCategoria.value == "Todos") {
            renderCatalog()
        }

        if (localStorage.getItem("Eventos")) {
            EventosGuardados2 = JSON.parse(localStorage.getItem("Eventos"))
        }

        for (let i = 0; i < EventosGuardados2.length; i++) {

            if (verCategoria.value == EventosGuardados2[i]._categoria) {
                console.log(EventosGuardados2[i]._categoria)

                console.log("entrei")


                // Inicia a linha
                if (i % 2 == 0) {
                    strHtmlCard2 += `<div class="row">`
                }

                // Cria a card
                strHtmlCard2 += `<div class="col-sm-6">
               <br>
                <div id="${EventosGuardados2[i]._idEv}" class="card" style="width:80%; height:100%">
                <img class="card-img-top" style="height:235px;" src="${EventosGuardados2[i]._imagem}" alt="Card image cap">
                <h3 class="card-title" style="background-color:rgb(218, 215, 209);text-align:center">${EventosGuardados2[i]._categoria}</h3>
               
                    <div class="card-body">
                    <p class="card-text">${EventosGuardados2[i]._designacao}</p>
                    <br>
                       
                    <div class="row">
                    <div class="col-sm-6">
                    <li class="card-text">RESPONSAVEL: <small id="helpId" class="form-text text-muted">${EventosGuardados2[i]._responsavel}</small> </li>
                    <li>Data:</li>
                    <h6 class="card-text"> <small id="helpId" class="form-text text-muted">${EventosGuardados2[i]._data}</small> </h6>
                    </div>
                    <div class="col-sm-6">
                    <li>Hora:</li>
                    <h6 class="card-text"> <small id="helpId" class="form-text text-muted">${EventosGuardados2[i]._hora}</small> </h6>
                    <li>Sala:</li>
                    <h6 class="card-text"> <small id="helpId" class="form-text text-muted">${EventosGuardados2[i]._sala}</small> </h6>
                    </div>
                       
                    </div>
                    <br>
                    <br>
                
                        <div class="row">
                        <div class="col-sm-6">
                        <a href="">   <i class="fas fa-trash"></i></a>
                        `

                for (let o = 0; o < arrayPontuaçãoGeral.length; o++) {

                    if (EventosGuardados2[i]._idEv == arrayPontuaçãoGeral[o]._idEventoPontuaçãoTotal) {

                        somador = parseInt(arrayPontuaçãoGeral[o]._pontuacaoTotal)

                    }

                }


                strHtmlCard2 += ` <h1 class="card-text"> &#x2605; ${somador}</h1> `

                strHtmlCard2 += `
                        </div>
                       
                        <div class="col-sm-3">
                        <small id="helpId" class="form-text text-muted">Interessados</small>
                            `//fechar


                for (let y = 0; y < arrayTotalIrEventos.length; y++) {

                    if (arrayTotalIrEventos[y]._idEvento == EventosGuardados2[i]._idEv) {
                        total = parseInt(arrayTotalIrEventos[y]._ir)

                    }

                }
                //abrir

                strHtmlCard2 += `
                <small id="helpId" class="form-text text-muted">${ total}</small>
                
                `//fechar


                strHtmlCard2 += ` <hr style="background-color:rgb(238, 168, 29)">
                            </div>
                            </div>
                
                            
                
                            <div class="row">
                                      
            
                            <div class="col-sm-3">
                            
                            </div>
                
                            <div class="col-sm-9">
                            
                            
                        </form>
                            </div>
                            </div>
                            <br>
                            <div class="row">
                            <div class="form-group">
                
              
                <br>
       
                
                </div>
                            </div>
                          
                            `




                strHtmlCard2 += `</div>
                        </div>      
                    </div>`

                // Fecha a linha
                if (i % 2 == 1) {
                    strHtmlCard2 += `</div>`
                }

                myCard.innerHTML = strHtmlCard2


            } else if (verCategoria.value != EventosGuardados2[i]._categoria && verCategoria.value != "Todos") {
                contCategoria++
            }
            else if (verCategoria.value == "Todos") {
                window.location.reload()
            }

            if (contCategoria == EventosGuardados2.length) {
                swal({
                    icon: "error",
                    title: "Evento não existente!",

                });
                contCategoria = 0
            }



        }




        //interessados em ir aos eventos
        let btnIrEventos = document.getElementsByClassName("btn btn-warning ir"), i;


        for (let z = 0; z < btnIrEventos.length; z++) {

            btnIrEventos[z].style.display = 'none'

        }

        let click = 0


        for (let w = 0; w < btnIrEventos.length; w++) {


            btnIrEventos[w].addEventListener("click", function () {
                btnIrEventos[w].style.display = 'none'
                click = 1
                if (localStorage.getItem("Interessados")) {
                    arrayIrEventos = JSON.parse(localStorage.getItem("Interessados"))
                }

                idDoEvento = EventosGuardados2[i]._idEv

                let objtIteressados = new IrEventos(idDoEvento, substring2, click)
                arrayIrEventos.push(objtIteressados)

                localStorage.setItem("Interessados", JSON.stringify(arrayIrEventos))

                click = 0


            })


        }



        //################# ver comentario#############################

        let header = ""
        let contentUtilizador = ""
        let contentComentario = ""

        let verComentarios = document.getElementsByClassName("fas fa-comments")
       

        for (let i = 0; i < verComentarios.length; i++) {

            verComentarios[i].addEventListener("click", function (event) {
             
                if (localStorage.getItem("Comentarios")) {
                    arrayComentarios = JSON.parse(localStorage.getItem("Comentarios"))
                }
                

                var today = new Date();
                var dd = today.getDate();
                var mm = today.getMonth() + 1
                var yyyy = today.getFullYear();

                for (let x = contador; x < EventosGuardados2.length; x++) {

                    for (let i = 0; i < arrayComentarios.length; i++) {
                        acumulador++
                        if (arrayComentarios[i]._idDoEventoComentado == EventosGuardados2[x]._idEv) {

                            header = "Comentários";
                            contentUtilizador += " <i class='fas fa-user'></i>" + "<h4 style='color:black; background-color:whites;font-family:arial'>" + arrayComentarios[i]._NomeUilizador + "<small style = 'padding-left:40%;'><small>" + dd + "/" + mm + "/" + yyyy + "</small></small>" + "</h4>" + "\n" + arrayComentarios[i]._comentario + "\n" + "<br><br>";


                        }

                    }
                    if (acumulador >= arrayComentarios.length) {
                        contador = x + 1

                        console.log()
                        total = 0
                        break
                    }
                    else {
                        contador = x

                    }


                }

                console.log(contentUtilizador)
                doModal('myModal', header, contentUtilizador);
             
                event.preventDefault()

            })

        }



        event.preventDefault()

    })

}


// Função que vai alimentar o meu catálogo
function renderCatalog() {

    esconderIcon()

    let myCard = document.getElementById("myCardEventos")

    let EventosGuardados = ""

    let strHtmlCard = ""

    arrayInteressados = []
    let idDoEvento = ""
    let idDoUtilizador = ""
    let nomeUtilizadorLogado = ""



    let estado = ""
    if (localStorage.getItem("estadoUtitlizador")) {
        estado = localStorage.getItem("estadoUtitlizador")
    }
    let pos1 = estado.indexOf(",")
    let pos2 = estado.lastIndexOf(",")
    let substring1 = estado.substring(pos1 + 1, pos2)
    let tipoutilizador = estado.substring(pos2 + 1, estado.length)
    nomeUtilizadorLogado = estado.substring(0, pos1)

    if (localStorage.getItem("Interessados")) {
        arrayIrEventos = JSON.parse(localStorage.getItem("Interessados"))
    }

    if (localStorage.getItem("Eventos")) {
        EventosGuardados = JSON.parse(localStorage.getItem("Eventos"))
    }

    if (localStorage.getItem("Pontuação")) {
        let tempArrayPontuação = []
        tempArrayPontuação = JSON.parse(localStorage.getItem("Pontuação"))
        for (let i = 0; i < tempArrayPontuação.length; i++) {
            let novoPontuação = new Pontuação(tempArrayPontuação[i]._idEventoPontuado, tempArrayPontuação[i]._nomeUti, tempArrayPontuação[i]._pontuação)
            arrayPontuarEventos.push(novoPontuação)

        }

    }

    let contador = 0
    let acumulador = 0
    let total = 0

    let t = 0
    let somador = 0
    let acumulado = 0
    let vezes = 0

    for (let i = 0; i < EventosGuardados.length; i++) {
        console.log()



        // Inicia a linha
        if (i % 2 == 0) {
            strHtmlCard += `<div class="row">`
        }

        // Cria a card
        strHtmlCard += ` <div class="col-sm-6">
                   <br>
                   
                    <div id="${EventosGuardados[i]._idEv}" class="card" style="width:80%; height:100%">
                   
                    <img class="card-img-top" style="height:235px;" src="${EventosGuardados[i]._imagem}" alt="Card image cap">
 
                    <h1 class="card-title" style="; text-align:center;  font-family: arial">${EventosGuardados[i]._categoria}</h1>
                        <div class="card-body">
                           
                            <p class="card-text">${EventosGuardados[i]._designacao}</p>
                            <br>
                           
                            
                            <div class="row">
                            <div class="col-sm-6">
                            <li class="card-text">RESPONSAVEL:&#x263a; <small id="helpId" class="form-text text-muted">${EventosGuardados[i]._responsavel}</small> </li>
                            <li>Data:</li>
                            <h6 class="card-text"> <small id="helpId" class="form-text text-muted">${EventosGuardados[i]._data}</small> </h6>
                            </div>
                            <div class="col-sm-6">
                            <li>Hora:</li>
                            <h6 class="card-text"> <small id="helpId" class="form-text text-muted">${EventosGuardados[i]._hora}</small> </h6>
                            <li>Sala:</li>
                            <h6 class="card-text"> <small id="helpId" class="form-text text-muted">${EventosGuardados[i]._sala}</small> </h6>
        
                            </div>
                        
                        </div>
                        <br>
                        <br>
                            <div class="row">
                            <div class="col-sm-6">
                            <a href="">   <i id="${EventosGuardados[i]._idEv}" class="fas fa-trash"></i></a>
                          
                           `
        for (let x = t; x < EventosGuardados.length; x++) {

            for (let a = 0; a < arrayPontuarEventos.length; a++) {
                acumulado++
                if (EventosGuardados[x]._idEv == arrayPontuarEventos[a]._idEventoPontuado) {

                    somador += parseInt(arrayPontuarEventos[a]._pontuação)
                    vezes++

                }

            }
            if (acumulado >= arrayPontuarEventos.length) {
                t = x + 1
                strHtmlCard += ` <h1 class="card-text"> &#x2605; ${somador}</h1> `


                let novoPontuaçãoTotal = new PontuaçãoTotal(EventosGuardados[x]._idEv, somador / vezes, EventosGuardados[x]._categoria, EventosGuardados[x]._data, EventosGuardados[x]._imagem)
                let novoPontuaçãoGeral = new PontuaçãoTotal(EventosGuardados[x]._idEv, somador, EventosGuardados[x]._categoria, EventosGuardados[x]._data, EventosGuardados[x]._imagem)
                arrayTotalPontuaçãoEventos.push(novoPontuaçãoTotal)
                arrayPontuaçãoGeral.push(novoPontuaçãoGeral)
                var sorted = _.sortBy(arrayTotalPontuaçãoEventos, "pontuacaoTotal")
                localStorage.setItem("PontuaçãoGeral", JSON.stringify(arrayPontuaçãoGeral))
                localStorage.setItem("TotalPontuação", JSON.stringify(sorted))
                somador = 0
                vezes = 0
                break
            }
            else {
                t = x
            }

        }


        strHtmlCard += `
                            </div>
                            <div class="col-sm-3">
                            <button id="btnIrEvento" type="button" class="btn btn-warning ir">Ir</button>
                            </div>
                            <div class="col-sm-3">
                            <small id="helpId" class="form-text text-muted">Interessados</small>
                            `//fechar
        for (let x = contador; x < EventosGuardados.length; x++) {

            for (let q = 0; q < arrayIrEventos.length; q++) {
                acumulador++
                if (arrayIrEventos[q]._idEvento == EventosGuardados[x]._idEv) {
                    total += parseInt(arrayIrEventos[q]._ir)

                }


            }
            if (acumulador >= arrayIrEventos.length) {
                contador = x + 1

                console.log()
                //abrir

                strHtmlCard += `
<small id="helpId" class="form-text text-muted">${ total}</small>
`//fechar
                let objtIteressados = new IrEventos(EventosGuardados[x]._idEv, nomeUtilizadorLogado, total)
                arrayTotalIrEventos.push(objtIteressados)


                localStorage.setItem("TotalInteressados", JSON.stringify(arrayTotalIrEventos))
                total = 0
                break
            }
            else {
                contador = x

            }


        }






        strHtmlCard += ` <hr style="background-color:rgb(238, 168, 29)">
        
            </div>
            </div>
  
            <div class="row">


            <form>
            <small id="helpId" class="form-text text-muted">Pontuar de 1 a 5</small>
            <input class="inputPontuar" type="number" name="quantity" min="1" max="5">
          </form>

            <div class="col-sm-3">
            
            <a href="">  <i class="fas fa-hand-point-right"></i></a>
            <small id="helpId" class="form-text text-muted p">enviar pontuação</small>
           
            </div>
            <div class="col-sm-9">
            
            
        </form>
            </div>
            </div>
            <br>
            <div class="row">
            <div class="form-group">
<input type="text" class="form-control co" name="" id="comentario" aria-describedby="helpId" placeholder="Comentar">
<br>
<a href="">
<i class="fas fa-comments"><small>Ver comentários</small></i>
</a>
_ _
<a href="">
<i class="fas fa-location-arrow a"></i>
</a>
</div>
            </div>
          
            `


        strHtmlCard += `</div>
            </div>      
        </div>`

        // Fecha a linha
        if (i % 2 == 1) {
            strHtmlCard += `</div>  <br>  <br>`
        }

    }

    myCard.innerHTML = strHtmlCard



    //interessados em ir aos eventos
    let btnIrEventos = document.getElementsByClassName("btn btn-warning ir"), i;

    let contadorr = 0
    let acumuladorr = 0

    for (let x = contadorr; x < arrayIrEventos.length; x++) {

        for (let i = 0; i < btnIrEventos.length; i++) {
            acumulador++
            if (nomeUtilizadorLogado == arrayIrEventos[x]._interessado && EventosGuardados[i]._idEv == arrayIrEventos[x]._idEvento) {
                btnIrEventos[i].style.display = 'none'
                console.log(nomeUtilizadorLogado)
                console.log(EventosGuardados[i]._idEv)
            }


        }

        if (acumuladorr >= btnIrEventos.length) {
            contadorr = x + 1

        }
        else {
            contadorr = x

        }


    }

    let click = 0


    for (let i = 0; i < btnIrEventos.length; i++) {


        btnIrEventos[i].addEventListener("click", function () {
            btnIrEventos[i].style.display = 'none'
            click = 1
            if (localStorage.getItem("Interessados")) {
                arrayIrEventos = JSON.parse(localStorage.getItem("Interessados"))
            }
            idDoEvento = EventosGuardados[i]._idEv


            let objtIteressados = new IrEventos(idDoEvento, nomeUtilizadorLogado, click)
            arrayIrEventos.push(objtIteressados)


            localStorage.setItem("Interessados", JSON.stringify(arrayIrEventos))


            click = 0

            //##################### atualizar catalogo ########################

            window.location.reload()


        })


    }

    //################### comentar eventos#############################

    let btnComentarEventos = document.getElementsByClassName("fas fa-location-arrow a")
    let comentarioDoUtilizador = document.getElementsByClassName("form-control co")
    let varCometario = ""
    let arrayDosComentarios = []

    if (localStorage.getItem("Comentarios")) {
        arrayComentarios = JSON.parse(localStorage.getItem("Comentarios"))
    }

    for (let i = 0; i < btnComentarEventos.length; i++) {

        btnComentarEventos[i].addEventListener("click", function () {

            if (comentarioDoUtilizador[i].value != "" && substring1 == "true") {
                varCometario = comentarioDoUtilizador[i].value

                let novoComentarios = new Comentarios(nomeUtilizadorLogado, varCometario, EventosGuardados[i]._idEv)
                arrayComentarios.push(novoComentarios)
            
                localStorage.setItem("Comentarios", JSON.stringify(arrayComentarios))

                alert("Comentário enviado com sucesso")
                window.location.reload()
                event.preventDefault()
            }
            else {
                alert("Faça o login ou verefique que escreveu o comentário")
                event.preventDefault()
            }




        })

    }



    //################# ver comentario#############################

    let header = ""
    let contentUtilizador = ""
    let contentComentario = ""


    let strSubmitFunc = hideModal();

    let verComentarios = document.getElementsByClassName("fas fa-comments")
    contador = 0

    if (localStorage.getItem("Comentarios")) {
        arrayComentarios = JSON.parse(localStorage.getItem("Comentarios"))
    }
    for (let x = contador; x < EventosGuardados.length; x++) {

        for (let i = 0; i < arrayComentarios.length; i++) {
            
            if (arrayComentarios[i]._idDoEventoComentado == EventosGuardados[x]._idEv) {
                console.log("fodas")
                let novoTotalComentarios = new Comentarios(nomeUtilizadorLogado, arrayComentarios[i]._comentario, EventosGuardados[x]._idEv)
                arrayTotalComentarios.push(novoTotalComentarios)
            
                localStorage.setItem("TotalComentarios", JSON.stringify(arrayTotalComentarios))

            }
            acumulador++
        }
        if (acumulador >= arrayComentarios.length) {
            contador = x + 1

            console.log()
            total = 0
            break
        }
        else {
            contador = x

        }


    }

    for (let i = 0; i < verComentarios.length; i++) {

        verComentarios[i].addEventListener("click", function (event) {
            contador = i
           

            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1
            var yyyy = today.getFullYear();

            for (let x = contador; x < EventosGuardados.length; x++) {

                for (let i = 0; i < arrayComentarios.length; i++) {
                    acumulador++
                    if (arrayComentarios[i]._idDoEventoComentado == EventosGuardados[x]._idEv) {

                        header = "Comentários";
                        contentUtilizador += " <i class='fas fa-user'></i>" + "<h4 style='color:black; background-color:whites;font-family:arial'>" + arrayComentarios[i]._NomeUilizador + "<small style = 'padding-left:40%;'><small>" + dd + "/" + mm + "/" + yyyy + "</small></small>" + "</h4>" + "\n" + arrayComentarios[i]._comentario + "\n" + "<br><br>";


                    }

                }
                if (acumulador >= arrayComentarios.length) {
                    contador = x + 1

                    console.log()
                    total = 0
                    break
                }
                else {
                    contador = x

                }


            }

            console.log(contentUtilizador)
            doModal('myModal', header, contentUtilizador);
            hideModal()

            event.preventDefault()

        })

    }

    //##################### Eliminar eventos ###########################

    let iconRemoverEvento = document.getElementsByClassName("fas fa-trash")
    if (localStorage.getItem("Eventos")) {
        EventosGuardados = JSON.parse(localStorage.getItem("Eventos"))
    }

    let comentariosLocal = ""
    let pontuaçõesLocais = ""
    let interessadosLocal = ""



    for (let i = 0; i < iconRemoverEvento.length; i++) {

        iconRemoverEvento[i].addEventListener("click", function (event) {
            if (localStorage.getItem("Interessados")) {
                interessadosLocal = JSON.parse(localStorage.getItem("Interessados"))
            }

            if (localStorage.getItem("Comentarios")) {
                comentariosLocal = JSON.parse(localStorage.getItem("Comentarios"))
            }
            if (localStorage.getItem("Pontuação")) {
                pontuaçõesLocais = JSON.parse(localStorage.getItem("Pontuação"))
            }


            let apanhaId = iconRemoverEvento[i].getAttribute("id")

            let confirmação = confirm("Desejas eliminar o evento?!")

            if (confirmação) {
                EventosGuardados.splice(i, 1)
                localStorage.setItem("Eventos", JSON.stringify(EventosGuardados))

                // remover interessados do evento eliminado
                for (let y = interessadosLocal.length - 1; y >= 0; y--) {

                    if (apanhaId == interessadosLocal[y]._idEvento) {
                        interessadosLocal.splice(y, 1)
                    }
                }
                localStorage.setItem("Interessados", JSON.stringify(interessadosLocal))

                // remover comentarios do evento eliminado
                for (let h = comentariosLocal.length - 1; h >= 0; h--) {
                    console.log(comentariosLocal[h]._idDoEventoComentado)

                    if (apanhaId == comentariosLocal[h]._idDoEventoComentado) {
                        comentariosLocal.splice(h, 1)

                    }

                }
                localStorage.setItem("Comentarios", JSON.stringify(comentariosLocal))

                // remover pontuações do evento pontuaçõesLocais
                for (let j = pontuaçõesLocais.length - 1; j >= 0; j--) {

                    if (apanhaId == pontuaçõesLocais[j]._idEventoPontuado) {
                        pontuaçõesLocais.splice(j, 1)

                    }

                }
                localStorage.setItem("Pontuação", JSON.stringify(pontuaçõesLocais))
                alert("Evento eliminado")
            }

           
            window.location.reload()
            event.preventDefault()
        })
    }






}

function doModal(placementId, heading, formContent) {

    let html = '<div id="modalWindow" class="modal fade" style="display:none;left:30%; width:50%;height: 50%; background-color:white">';
    html += '<div class="modal-header">';
    html += '<a id="fecharModal" class="btn btn-danger" data-dismiss="modal">×</a>';

    html += '<h4 style="color:black">' + heading + '</h4>'
    html += '</div>';
    html += '<div class="modal-body">';
    html += '<p>';

    html += '<h6 style="color:black; background-color:white;font-family:arial">' + formContent + '</h6>';
    html += '</div>';
    html += '</span>'; // close button
    html += '</div>';  // footer
    html += '</div>';  // modalWindow
    $("#myModalCo").html(html);
    $("#modalWindow").modal();

    let btnFechar = document.getElementById("fecharModal")

    btnFechar.addEventListener("click", function () {
        window.location.reload()
    })

}


function hideModal() {
    // Using a very general selector - this is because $('#modalDiv').hide
    // will remove the modal window but not the mask
    $('#myModalCo').modal('hide');
}

function esconderIcon() {

    let iconRemoverEvento = document.getElementsByClassName("fas fa-trash"), i;

    let nomeUtilizadorLogado = ""

    let EventosGuardados = ""

    if (localStorage.getItem("Eventos")) {
        EventosGuardados = JSON.parse(localStorage.getItem("Eventos"))
    }

    let estado = ""
    if (localStorage.getItem("estadoUtitlizador")) {
        estado = localStorage.getItem("estadoUtitlizador")
    }
    let pos1 = estado.indexOf(",")
    let pos2 = estado.lastIndexOf(",")
    let substring1 = estado.substring(pos1 + 1, pos2)
    let tipoutilizador = estado.substring(pos2 + 1, estado.length)
    console.log(substring1)
    nomeUtilizadorLogado = estado.substring(0, pos1)


    for (let i = 0; i < iconRemoverEvento.length; i++) {


        if (nomeUtilizadorLogado == "admin" || tipoutilizador == "docente" && substring1 == "true") {
            iconRemoverEvento[i].style.display = 'block'


        }

        else if (substring1 == "false") {
            iconRemoverEvento[i].style.display = 'none'
        }
        else {
            iconRemoverEvento[i].style.display = 'none'
        }

    }

}
function PontuarEventos() {

    let nomeUtilizadorLogado = ""



    let estado = ""
    if (localStorage.getItem("estadoUtitlizador")) {
        estado = localStorage.getItem("estadoUtitlizador")
    }
    let pos1 = estado.indexOf(",")
    let pos2 = estado.lastIndexOf(",")
    let substrings1 = estado.substring(pos1 + 1, pos2)
    let substrings2 = estado.substring(pos1 + 1, estado.length)
    let tipoutilizador = estado.substring(pos2 + 1, estado.length)
    nomeUtilizadorLogados = estado.substring(0, pos1)

    /* if (localStorage.getItem("Pontuação")) {
         let tempArrayPontuação = []
         tempArrayPontuação = JSON.parse(localStorage.getItem("Pontuação"))
         for (let i = 0; i < tempArrayPontuação.length; i++) {
             let novoPontuação = new Pontuação(tempArrayPontuação[i]._idEventoPontuado,tempArrayPontuação[i]._nomeUti, tempArrayPontuação[i]._pontuação)
             arrayPontuarEventos.push(novoPontuação)
 
         }
 
     }*/

    if (localStorage.getItem("Eventos")) {
        let tempArrayEventos = []
        tempArrayEventos = JSON.parse(localStorage.getItem("Eventos"))
        for (let i = 0; i < tempArrayEventos.length; i++) {
            let novoEvents = new Eventos(tempArrayEventos[i]._data, tempArrayEventos[i]._hora, tempArrayEventos[i]._sala, tempArrayEventos[i]._categoria, tempArrayEventos[i]._responsavel, tempArrayEventos[i]._imagem, tempArrayEventos[i]._designacao)
            arrayEventos.push(novoEvents)

        }

    }


    //###################### pontuar eventos #####################
    let contar = 0
    let valorPontuação = document.getElementsByClassName("inputPontuar")
    let label = document.getElementsByClassName("form-text text-muted p")
    let enviarPont = document.getElementsByClassName("fas fa-hand-point-right"), i

    for (let i = 0; i < enviarPont.length; i++) {



        if (substrings2 == "false") {
            enviarPont[i].style.display = 'none'
        }

        if (substrings1 == "true") {

            enviarPont[i].style.display = 'block'

        }
        else {
            enviarPont[i].style.display = 'none'
        }


    }

    for (let x = 0; x < arrayPontuarEventos.length; x++) {

        for (let i = 0; i < arrayEventos.length; i++) {

            if (nomeUtilizadorLogados == arrayPontuarEventos[x]._nomeUti && arrayEventos[i]._idEv == arrayPontuarEventos[x]._idEventoPontuado) {
                enviarPont[i].style.display = 'none'
                label[i].style.display = 'none'

                console.log("porra")
            }

        }
        if (x == arrayEventos.length) {
            x++
        }
        else {
            x = x
        }

    }


    for (let i = 0; i < enviarPont.length; i++) {

        enviarPont[i].addEventListener("click", function (event) {

            if (valorPontuação[i].value != "" && valorPontuação[i].value <= 5) {

                if (localStorage.getItem("Pontuação")) {

                    arrayPontuarEventos = JSON.parse(localStorage.getItem("Pontuação"))


                }

                let novoPontos = new Pontuação(arrayEventos[i]._idEv, nomeUtilizadorLogados, valorPontuação[i].value)
                arrayPontuarEventos.push(novoPontos)
                localStorage.setItem("Pontuação", JSON.stringify(arrayPontuarEventos))
                enviarPont[i].style.display = 'none'
                label[i].style.display = 'none'

                alert("Pontuação enviado com sucesso")
                window.location.reload()
                event.preventDefault()
            }
            else {
                alert("Primeiro tem de adicionar uma pontuação ou verefique se a pontuação é menor ou igual a 5")
                console.log(valorPontuação.length)
                event.preventDefault()
            }

        })

    }


}



