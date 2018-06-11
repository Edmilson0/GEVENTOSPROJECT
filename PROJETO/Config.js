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

//#############################parcerias##################################

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

//#####################docentes############################
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
        if (arrayTestemuhos.length > 0) {
            lastId = arrayTestemuhos[arrayTestemuhos.length - 1].IdDocente
        }
        return lastId
    }


}

//##########################Testemunhos#########################
let arrayTestemuhos = []

class Testemunhos {
    constructor(nomeTe, testemunho, fotoTe) {
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

//########################## Utilizadores #########################
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



//##########################windowLoad#########################

window.onload = function () {

    atualizaTabela()
    atualizaTabelaTestemunho()
    atualizaTabelaEventos()
    atualizaCardUtilizador()
    let frmCriarEventos = document.getElementById("frmCriarEventosConfig")


    //submeter eventos
    frmCriarEventos.addEventListener("submit", function (event) {

        let data = document.getElementById("configData").value
        let horario = document.getElementById("configHorário").value
        let sala = document.getElementById("configSala").value
        let imagem = document.getElementById("configImagem").value
        let responsavel = document.getElementById("configResponsavel").value
        let categoria = document.getElementById("configCategorias").value
        let designacao = document.getElementById("configDesigEvento").value

        let utGuardados = ""

        let novoEventos = new Eventos(data, horario, sala, categoria, responsavel, imagem, designacao)
        arrayEventos.push(novoEventos)

        localStorage.setItem("Eventos", JSON.stringify(arrayEventos))




        console.log(arrayEventos)
        event.preventDefault()

    })

    //########################parcerias#########################

    let nomeEmpresa = document.getElementById("configNomeEmpresa")
    let locaEmpresa = document.getElementById("configLocalizaçaoEmpresa")
    let linkEmpresa = document.getElementById("configLinkEmpresa")
    let linkLogotipo = document.getElementById("configImagemEmpresa")
    let frmParcerias = document.getElementById("frmCriarParceriasConfig")

    frmParcerias.addEventListener("submit", function (events) {

        let novaParceria = new Parcerias(nomeEmpresa.value, locaEmpresa.value, linkLogotipo.value, linkEmpresa.value)
        arrayParcerias.push(novaParceria)
        localStorage.setItem("Parcerias", JSON.stringify(arrayParcerias))
        alert("Adicionado com sucesso")
        console.log(arrayEventos)
        events.preventDefault()
        frmParcerias.reset()

    })

    //#############################docentes######################
    let nomeDocente = document.getElementById("modalNomeDocente")
    let formaçao = document.getElementById("modalFormaçaoDocente")
    let foto = document.getElementById("modalFotoDocente")
    let cv = document.getElementById("modalCVDocente")
    let frmDocentes = document.getElementById("frmDocentes")

    frmDocentes.addEventListener("submit", function (events) {

        let novaDocentes = new Docentes(nomeDocente.value, foto.value, formaçao.value, cv.value)
        arrayTestemuhos.push(novaDocentes)
        localStorage.setItem("Docentes", JSON.stringify(arrayTestemuhos))
        alert("Adicionado com sucesso")

        events.preventDefault()
        frmDocentes.reset()

    })

    //#############################Eliminar parcerias######################

    let frmEliminar = document.getElementById("frmEliminarParcerias")


    frmEliminar.addEventListener("submit", function (events) {
        let cont = 0

        let nomeParceriaEliminar = document.getElementById("nomeParceriaAEliminar").value

        let parceriasGuardados = ""
        // 1. Iterar sobre o array de Trips

        // eliminar parcerias
        let strHtmlCard = ""



        if (localStorage.getItem("Parcerias")) {
            parceriasGuardados = JSON.parse(localStorage.getItem("Parcerias"))
        }


        for (let i = 0; i < parceriasGuardados.length; i++) {

            if (nomeParceriaEliminar == parceriasGuardados[i]._Empresa) {
                parceriasGuardados.splice(i, 1)

                localStorage.setItem("Parcerias", JSON.stringify(parceriasGuardados))
            }
            else {
                cont++
            }

        }
        if (cont == parceriasGuardados.length) {
            alert("Nome inválido")
        }
        events.preventDefault()
        rend

    })


    //#############################Eliminar docentes######################

    let frmEliminarD = document.getElementById("frmEliminarDocentes")


    frmEliminarD.addEventListener("submit", function (events) {
        let contD = 0

        let nomeDocenteEliminar = document.getElementById("nomeDocenteAEliminar").value

        let docentesGuardados = ""


        // eliminar



        if (localStorage.getItem("Docentes")) {
            docentesGuardados = JSON.parse(localStorage.getItem("Docentes"))
        }


        for (let i = 0; i < docentesGuardados.length; i++) {

            if (nomeDocenteEliminar == docentesGuardados[i]._NomeDocente) {
                docentesGuardados.splice(i, 1)

                localStorage.setItem("Docentes", JSON.stringify(docentesGuardados))
                atualizaTabela()
            }
            else {
                contD++
            }

        }
        if (contD == docentesGuardados.length) {
            alert("Nome inválido")
        }


        events.preventDefault()
        atualizaTabela()

    })



    //#############################Eliminar testemunhos######################

    let frmEliminarT = document.getElementById("frmEliminarTestemunhos")


    frmEliminarT.addEventListener("submit", function (events) {
        let contT = 0

        let nomeTestemunhoEliminar = document.getElementById("nomeTeEliminar").value

        let testemunhoGuardados = ""


        // eliminar parcerias



        if (localStorage.getItem("Testemunho")) {
            testemunhoGuardados = JSON.parse(localStorage.getItem("Testemunho"))
        }


        for (let i = 0; i < testemunhoGuardados.length; i++) {

            if (nomeTestemunhoEliminar == testemunhoGuardados[i]._nomeTe) {
                testemunhoGuardados.splice(i, 1)

                localStorage.setItem("Testemunho", JSON.stringify(testemunhoGuardados))
            }
            else {
                contD++
            }

        }
        if (contD == testemunhoGuardados.length) {
            alert("Nome inválido")
        }
        events.preventDefault()
        atualizaTabelaTestemunho()

    })

    //#############################Eliminar eventos######################

    let frmEliminarE = document.getElementById("frmEliminarEventos")


    frmEliminarE.addEventListener("submit", function (events) {
        let contE = 0

        let IdEventoEliminar = document.getElementById("idEventosAEliminar").value


        // eliminar Eventos

        let tempArrayEventos = ""

        if (localStorage.getItem("Eventos")) {

            tempArrayEventos = JSON.parse(localStorage.getItem("Eventos"))

        }


        for (let i = 0; i < tempArrayEventos.length; i++) {

            if (IdEventoEliminar == tempArrayEventos[i]._idEv) {
                tempArrayEventos.splice(i, 1)

                localStorage.setItem("Eventos", JSON.stringify(tempArrayEventos))
                atualizaTabelaEventos()
            }
            else {
                contE++
            }

        }
        if (contE == tempArrayEventos.length) {
            alert("Id inválido")
        }
        events.preventDefault()


    })



    //#############################Eliminar utitlizadores######################

    let frmEliminarU = document.getElementById("frmEliminarUtilizadores")


    frmEliminarU.addEventListener("submit", function (events) {
        let contU = 0

        let nomeUtilizador = document.getElementById("idUtilizadoresAEliminar").value


        // eliminar utilizador

        let tempArrayUtilizadores = ""

        if (localStorage.getItem("utilizadores")) {

            tempArrayUtilizadores = JSON.parse(localStorage.getItem("utilizadores"))

        }


        for (let i = 0; i < tempArrayUtilizadores.length; i++) {

            if (nomeUtilizador == tempArrayUtilizadores[i]._nome) {
                tempArrayUtilizadores.splice(i, 1)

                localStorage.setItem("utilizadores", JSON.stringify(tempArrayUtilizadores))
            

            }
            else {
                contU++
            }

        }
        if (contU == tempArrayUtilizadores.length) {
            alert("Id inválido")
        }
        atualizaCardUtilizador()

        events.preventDefault()


    })


}

// Função que atualiza a tabela
function atualizaTabela() {

    if (localStorage.getItem("Docentes")) {
        let temparrayTestemuhos = []
        temparrayTestemuhos = JSON.parse(localStorage.getItem("Docentes"))
        for (let i = 0; i < temparrayTestemuhos.length; i++) {
            let novodocente = new Docentes(temparrayTestemuhos[i]._NomeDocente, temparrayTestemuhos[i]._foto, temparrayTestemuhos[i]._formaçao, temparrayTestemuhos[i]._CV)
            arrayTestemuhos.push(novodocente)

        }

    }

    let tblDocentes = document.getElementById("tblDocentes")
    let str = ""
    str = "<thead class='thead-dark'><tr><th>FOTO</th><th>NOME</th></tr></thead><tbody>"
    for (let i = 0; i < arrayTestemuhos.length; i++) {
        str += "<tr>"
        str += "<td> <img class='card-img-top' style='width:30%; height:40%' src='" + arrayTestemuhos[i]._foto + "'></td>"

        str += "<td style='color:white'>" + arrayTestemuhos[i]._NomeDocente + "</td>"
        str += "</tr>"
    }
    str += "<tbody>"
    tblDocentes.innerHTML = str

}

// Função que atualiza a tabela
function atualizaTabelaTestemunho() {

    if (localStorage.getItem("Testemunho")) {
        let tempArrayTestemunho = []
        tempArrayTestemunho = JSON.parse(localStorage.getItem("Testemunho"))
        for (let i = 0; i < tempArrayTestemunho.length; i++) {
            let novotestemunho = new Testemunhos(tempArrayTestemunho[i]._nomeTe, tempArrayTestemunho[i]._testemunho, tempArrayTestemunho[i]._fotoTe)
            arrayTestemuhos.push(novotestemunho)

        }

    }

    let tblDocentes = document.getElementById("tblTestemunhos")
    let str = ""
    str = "<thead class='thead-dark'><tr><th>FOTO</th><th>NOME</th></tr></thead><tbody>"
    for (let i = 0; i < arrayTestemuhos.length; i++) {
        str += "<tr>"
        str += "<td> <img class='card-img-top' style='width:30%; height:40%' src='" + arrayTestemuhos[i]._fotoTe + "'></td>"

        str += "<td style='color:white'>" + arrayTestemuhos[i]._nomeTe + "</td>"
        str += "</tr>"
    }
    str += "<tbody>"
    tblDocentes.innerHTML = str

}

// Função que atualiza a tabela eventos
function atualizaTabelaEventos() {

    if (localStorage.getItem("Eventos")) {
        let tempArrayEventos = []
        tempArrayEventos = JSON.parse(localStorage.getItem("Eventos"))
        for (let i = 0; i < tempArrayEventos.length; i++) {
            let novoEvents = new Eventos(tempArrayEventos[i]._data, tempArrayEventos[i]._hora, tempArrayEventos[i]._sala, tempArrayEventos[i]._categoria, tempArrayEventos[i]._responsavel, tempArrayEventos[i]._imagem, tempArrayEventos[i]._designacao)
            arrayEventos.push(novoEvents)

        }

    }

    let tblEventos = document.getElementById("tblEventos")
    let str = ""
    str = "<thead class='thead-dark'><tr><th>IMAGEM</th><th>NOME</th><th>ID</th></tr></thead><tbody>"
    for (let i = 0; i < arrayEventos.length; i++) {
        str += "<tr>"
        str += "<td> <img class='card-img-top' style='width:30%; height:40%' src='" + arrayEventos[i]._imagem + "'></td>"

        str += "<td style='color:white'>" + arrayEventos[i]._categoria + "</td>"
        str += "<td style='color:white'>" + arrayEventos[i]._idEv + "</td>"
        str += "</tr>"
    }
    str += "<tbody>"
    tblEventos.innerHTML = str

}

// Função que atualiza a tabela utilizador
function atualizaCardUtilizador() {

    if (localStorage.getItem("utilizadores")) {
        let tempArray = []
        tempArray = JSON.parse(localStorage.getItem("utilizadores"))
        for (let i = 0; i < tempArray.length; i++) {
            let novoutilizador = new Utilizador(tempArray[i]._nome, tempArray[i]._email, tempArray[i]._password, tempArray[i]._foto, tempArray[i]._tipoUtilizador)
            arrayUtilizadores.push(novoutilizador)

        }

    }

    let cardUtilizador = document.getElementById("cardUtilizadoresExistentes")
    let strU = ""


    strU = "<thead class='thead-dark'><tr><th>NOME</th><th>TIPO DE UTILIZADOR</th></tr></thead><tbody>"
    for (let i = 0; i <  arrayUtilizadores.length; i++) {
        strU += "<tr>"
     
        strU += "<td style='color:white'>" +  arrayUtilizadores[i]._nome + "</td>"
        strU += "<td style='color:white'>" + arrayUtilizadores[i]._tipoUtilizador + "</td>"
       
        strU += "</tr>"
    }
    strU += "<tbody>"


        cardUtilizador.innerHTML = strU


}







