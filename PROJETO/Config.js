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



//##########################windowLoad#########################

window.onload = function () {

    atualizaTabela()
    atualizaTabelaTestemunho()

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
        str +="</tr>"
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
        str +="</tr>"
    }
    str += "<tbody>"
    tblDocentes.innerHTML = str

}




