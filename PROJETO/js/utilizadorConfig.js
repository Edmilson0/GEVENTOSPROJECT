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


    if (localStorage.getItem("utilizadores")) {

        tempArray = JSON.parse(localStorage.getItem("utilizadores"))


    }

    let tblUtilizadorConfig = document.getElementById("tblUtilizadorConfig")
    tblUtilizadorConfig.innerHTML = ""

    let str = ""
    str = "<thead class='thead-dark'><tr><th>UTILIZADOR</th><th>ID</th><th>AÇÃO</th></tr></thead><tbody>"
    for (let i = 0; i < arrayUtilizadores.length; i++) {
        str += "<tr>"
        str += "<td style=>" + arrayUtilizadores[i]._nome + "</td>"

        str += "<td style=>" + arrayUtilizadores[i]._idUt + "</td>"
        str += "<td style=><a href=''><i id=" + arrayUtilizadores[i]._idUt + " class='fas fa-times'></i></a></td>"
        str += "</tr>"
    }
    str += "<tbody>"
    tblUtilizadorConfig.innerHTML = str

    let btnRemoverUt = document.getElementsByClassName("fas fa-times")

    for (let i = 0; i < btnRemoverUt.length; i++) {

        btnRemoverUt[i].addEventListener("click", function (event) {

            let getAtribute = btnRemoverUt[i].getAttribute("id")
            console.log(getAtribute)
            for (let i = 0; i < arrayUtilizadores.length; i++) {

                if (getAtribute == arrayUtilizadores[i]._idUt) {
                    arrayUtilizadores.splice(i, 1)

                    localStorage.setItem("utilizadores", JSON.stringify(arrayUtilizadores))

                    str = "<thead class='thead-dark'><tr><th>UTILIZADOR</th><th>ID</th><th>AÇÃO</th></tr></thead><tbody>"
                    for (let i = 0; i < arrayUtilizadores.length; i++) {
                        str += "<tr>"
                        str += "<td style=>" + arrayUtilizadores[i]._nome + "</td>"
                
                        str += "<td style=>" + arrayUtilizadores[i]._idUt + "</td>"
                        str += "<td style=><a href=''><i id=" + arrayUtilizadores[i]._idUt + " class='fas fa-times'></i></a></td>"
                        str += "</tr>"
                    }
                    str += "<tbody>"
                    tblUtilizadorConfig.innerHTML = str
                    event.preventDefault()
                }

            }


        })

    }


    
   

}