//classe utilizador
let arrayUtilizadores = []


class Utilizador {
    constructor(nome, email, password, foto, tipoUtilizador) {

        this._idUt = Utilizador.getLastId()+1
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
            lastId = arrayUtilizadores[arrayUtilizadores.length-1].idUt
        }
        return lastId
    }

}





window.onload = function () {

    let ModalRegistar = document.getElementById("frmRegistar")
    let btnLogin = document.getElementById("optLogin")
    let frmLogin = document.getElementById("frmLogin")


    //submeter os dados do utilizador 
    ModalRegistar.addEventListener("submit", function (event) {


        let estudante = document.getElementById("estudante")
        let nomeUt = document.getElementById("ModalNome").value
        let emailUt = document.getElementById("ModalEmail").value
        let fotoUt = document.getElementById("ModalFoto").value
        let tipoutilizador;
        let Password = document.getElementById("ModalPasswordR").value
        let confPassword = document.getElementById("ModalConfPassword").value



        //validar as passwords
        if (confPassword != Password) {
            alert("password diferentes")
            event.preventDefault()
        } else {
            //verificar se as checked boxes estão preenchidas e criar o objeto
            if (estudante.checked == true) {
                tipoutilizador = "estudante"
            } else {
                tipoutilizador = "docente"
            }

            let novoutilizador = new Utilizador(nomeUt, emailUt, Password, fotoUt, tipoutilizador)
            arrayUtilizadores.push(novoutilizador)
          
            alert("registo com sucesso")
            ModalRegistar.reset()
            console.log(arrayUtilizadores)
            event.preventDefault()

        }

        localStorage.setItem("utilizadores", JSON.stringify(arrayUtilizadores))


    })

    //fazendo login
    frmLogin.addEventListener("submit", function (event) {

        let optRegistar=document.getElementById("linkRegistar")
        let barra=document.getElementById("barra")
        let loginName = document.getElementById("ModalName")
        let loginPass = document.getElementById("ModalPassword")
        //buscar no local storage os utilizadores
        let utInLocalStorage = JSON.parse(localStorage.getItem("utilizadores"))
        let utGuardados = ""
        let cont = 0
       

        //percorrer o local storage e converter os dados em objets
        for (let i = 0; i < localStorage.length; i++) {

            utGuardados = JSON.parse(localStorage.getItem(localStorage.key(i)))

        }

        //verificar se o utilizador existe ou não
        for (let i = 0; i < utGuardados.length; i++) {

            if (utGuardados[i]._nome == loginName.value && utGuardados[i]._password == loginPass.value) {
                alert("bem vindo")

                 btnLogin.style.display = 'none'
                 barra.style.display = 'none'
                
                frmLogin.reset()

            }
            else {
                cont++
            }
          

        }
        //se o utilizador não exister emite uma mensagem
        if (cont == utGuardados.length) {
            alert("Utilizador não existente")
        }

        event.preventDefault()

    })


}


