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

//################+++++################################################

let arrayPontuaçao = []

class Pontuaçao {
    constructor(tituloEvento, imagem, pontuação, responsavel) {

        this.tituloEvento = tituloEvento
        this.imagem = imagem
        this.pontuação = pontuação
        this.responsavel = responsavel
    }

    // Propriedade tituloEvento
    get tituloEvento() {
        return this._tituloEvento
    }

    // Propriedade tituloEvento
    get tituloEvento() {
        return this._tituloEvento
    }
    set tituloEvento(novoTituloEvento) {
        this._tituloEvento = novoTituloEvento
    }

    // Propriedade imagem
    get imagem() {
        return this._imagem
    }

    set imagem(novoImagem) {
        this._imagem = novoImagem
    }

    // Propriedade pontuação
    get pontuação() {
        return this._pontuação
    }

    set pontuação(novoPontuação) {
        this._pontuação = novoPontuação
    }

    // Propriedade responsavel
    get responsavel() {
        return this._responsavel
    }
    set responsavel(novoResponsavel) {
        this._responsavel = novoResponsavel
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



window.onload = function () {

    renderCatalog()

    if (localStorage.getItem("Eventos")) {
        let tempArrayEvents = []
        tempArrayEvents = JSON.parse(localStorage.getItem("Eventos"))
        for (let i = 0; i < tempArrayEvents.length; i++) {
            let novoEvents = new Utilizador(tempArrayEvents[i]._nome, tempArrayEvents[i]._email, tempArrayEvents[i]._password, tempArrayEvents[i]._foto, tempArrayEvents[i]._tipoUtilizador)
            arrayEventos.push(novoEvents)   
            
        }

    }


    let btnLogout = document.getElementById("optLogout")
    let btnConfig = document.getElementById("linkConfig")

    btnConfig.style.display = 'none'
   

    let verCategoria = document.getElementById("optVerPorCategorias")
    let btnVer = document.getElementById("ver")
    let btnPontuar = document.getElementById("btnPOntuar")
    let btnRange = document.getElementById("inputRange")
    let btnCriarEventos = document.getElementById("btnCriarEventos")
    let frmCriarEventos = document.getElementById("frmCriarEventos")
   btnCriarEventos.style.display='none'
    let btnRegisto = document.getElementById("optRegisto")
    
    let btnLogin = document.getElementById("optLogin")
    let ModalRegistar = document.getElementById("frmRegistar")
    btnLogout.style.display = 'none'
   

    if (localStorage.getItem("utilizadores")) {
        let tempArrayEvents = []
        tempArrayEvents = JSON.parse(localStorage.getItem("utilizadores"))
        for (let i = 0; i < tempArrayEvents.length; i++) {
            let novoutilizador = new Eventos(tempArrayEvents[i]._data, tempArrayEvents[i]._hora, tempArrayEvents[i]._sala, tempArrayEvents[i]._categoria, tempArrayEvents[i]._responsavel, tempArrayEvents[i]._imagem, tempArrayEvents[i]._designacao)
            arrayUtilizadores.push(novoutilizador)   
            
        }

    }


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
    
    
        if (substring3 == "Visitante"||substring3 == "Estudante") {
          btnCriarEventos.style.display='none'
            
        }
        else{
            btnCriarEventos.style.display='block'
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
        btnCriarEventos.style.display = 'none'
        btnLogout.style.display = 'none'
        btnConfig.style.display = 'none'


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
                tipoutilizador = "Estudante"
            } else if (docente.checked == true) {
                tipoutilizador = "Docente"
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
            title: "Login com sucesso!",
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

        let utGuardados = ""

        let novoEventos = new Eventos(data, horario, sala, categoria, responsavel, imagem, designacao)
        arrayEventos.push(novoEventos)

        localStorage.setItem("Eventos", JSON.stringify(arrayEventos))

        renderCatalog()


        console.log(arrayEventos)
        event.preventDefault()

    })

    //ver eventos por categoria
    let myCard = document.getElementById("myCardEventos")
    let strHtmlCard2 = ""

    btnVer.addEventListener("click", function () {
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

                console.log("entrei")


                // 1. Iterar sobre o array de Trips

                // 2. Para cada Trip vou definir uma Card e compô-la com os dados do objeto



                // Inicia a linha
                if (i % 2 == 0) {
                    strHtmlCard2 += `<div class="row">`
                }

                // Cria a card
                strHtmlCard2 += `<div class="col-sm-6">
                               <br>
                                <div class="card">
                                <h3 class="card-title" style="background-color:rgb(218, 215, 209)">${EventosGuardados2[i]._categoria}</h3>
                                <img class="card-img-top" style="height:235px;" src="${EventosGuardados2[i]._imagem}" alt="Card image cap">
                                    <div class="card-body">
                                       
                                        <p class="card-text">${EventosGuardados2[i]._designacao}</p>
                                        <br>
                                        <h5>Responsável:</h5>
                                        <h6 class="card-text">${EventosGuardados2[i]._responsavel}</h6>
                                        <h5>Data:</h5>
                                        <h6 class="card-text">${EventosGuardados2[i]._data}</h6>
                                        <h5>Hora:</h5>
                                        <h6 class="card-text">${EventosGuardados2[i]._hora}</h6>
                                        <h5>Sala:</h5>
                                        <h6 class="card-text">${EventosGuardados2[i]._sala}</h6>
                    
                                        <div class="row">
                                        <div class="col-sm-6">
                                       
                                        </div>
                                        <div class="col-sm-3">
                                        <button type="button" class="btn btn-warning">Ir</button>
                                        </div>
                                        <div class="col-sm-3">
                                        <small id="helpId" class="form-text text-muted">Interessados</small>
                                        </div>
                                        </div>
                    
                                        <hr style="background-color:rgb(238, 168, 29)">
                    
                                        <div class="row">
                                        <div class="col-sm-3">
                                        
                                        </div>
                    
                                        <div class="col-sm-9">
                                        <form action="/action_page.php" method="get">
                                        <small id="helpId" class="form-text text-muted">Pontuar</small>
                                        <input id="inputRange" class="range" type="range" name="vol" value="0" min="0" max="10">
                                   
                                            <input id="btnPOntuar" type="submit" class="btn btn-warning"></input>
                                        
                                    </form>
                                        </div>
                                        </div>
                                        <br>
                                        <div class="row">
                                        <div class="form-group">
     
      <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Comentar">
     
    </div>
                                        </div>
                                      
                                        <br>`




                strHtmlCard2 += `</div>
                                        </div>      
                                    </div>`

                // Fecha a linha
                if (i % 2 == 1) {
                    strHtmlCard2 += `</div>`
                }

                myCard.innerHTML = strHtmlCard2
                strHtmlCard2 = ""

            } else if (verCategoria.value != EventosGuardados2[i]._categoria && verCategoria.value != "Todos") {
                contCategoria++
            }

            if (contCategoria == EventosGuardados2.length) {
                swal({
                    icon: "error",
                    title: "Evento não existente!",
                    
                });
            }

        }


    })

    /*
           
   */
}


// Função que vai alimentar o meu catálogo
function renderCatalog() {



    let myCard = document.getElementById("myCardEventos")

    let EventosGuardados = ""


    // 1. Iterar sobre o array de Trips

    // 2. Para cada Trip vou definir uma Card e compô-la com os dados do objeto
    let strHtmlCard = ""

    if (localStorage.getItem("Eventos")) {
        EventosGuardados = JSON.parse(localStorage.getItem("Eventos"))
    }


    for (let i = 0; i < EventosGuardados.length; i++) {


        console.log(EventosGuardados[i]._categoria)
        // Inicia a linha
        if (i % 2 == 0) {
            strHtmlCard += `<div class="row">`
        }

        // Cria a card
        strHtmlCard += `<div class="col-sm-6">
                   <br>
                    <div class="card">
                    <h3 class="card-title" style="background-color:rgb(218, 215, 209)">${EventosGuardados[i]._categoria}</h3>
                    <img class="card-img-top" style="height:235px;" src="${EventosGuardados[i]._imagem}" alt="Card image cap">
                        <div class="card-body">
                           
                            <p class="card-text">${EventosGuardados[i]._designacao}</p>
                            <br>
                            <h5>Responsável:</h5>
                            <h6 class="card-text">${EventosGuardados[i]._responsavel}</h6>
                            <h5>Data:</h5>
                            <h6 class="card-text">${EventosGuardados[i]._data}</h6>
                            <h5>Hora:</h5>
                            <h6 class="card-text">${EventosGuardados[i]._hora}</h6>
                            <h5>Sala:</h5>
                            <h6 class="card-text">${EventosGuardados[i]._sala}</h6>
        
                            <div class="row">
                            <div class="col-sm-6">
                           
                            </div>
                            <div class="col-sm-3">
                            <button type="button" class="btn btn-warning">Ir</button>
                            </div>
                            <div class="col-sm-3">
                            <small id="helpId" class="form-text text-muted">Interessados</small>
                            <hr style="background-color:rgb(238, 168, 29)">
                            </div>
                            </div>
        
                            
        
                            <div class="row">
                            <div class="col-sm-3">
                            
                            </div>
        
                            <div class="col-sm-9">
                            <form action="/action_page.php" method="get">
                            <small id="helpId" class="form-text text-muted">Pontuar</small>
                            <input id="inputRange" class="pontuar" type="range" name="vol" value="0" min="0" max="10">
                       
                                <input id="btnPOntuar" type="submit" class="btn btn-warning"></input>
                            
                        </form>
                            </div>
                            </div>
                            <br>
                            <div class="row">
                            <div class="form-group">
     
      <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Comentar">
     
    </div>
                            </div>
                          
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



    //###################++#############################
   


    //#################++#############################

}