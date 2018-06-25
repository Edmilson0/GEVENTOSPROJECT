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


window.onload = function () {
    atualizaTabelaEventos()

    if (localStorage.getItem("Eventos")) {
        let tempArrayEventos = []
        tempArrayEventos = JSON.parse(localStorage.getItem("Eventos"))
        for (let i = 0; i < tempArrayEventos.length; i++) {
            let novoEvents = new Eventos(tempArrayEventos[i]._data, tempArrayEventos[i]._hora, tempArrayEventos[i]._sala, tempArrayEventos[i]._categoria, tempArrayEventos[i]._responsavel, tempArrayEventos[i]._imagem, tempArrayEventos[i]._designacao)
            arrayEventos.push(novoEvents)

        }

    }


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

        //  Verificar se a data selecionada não é superior à data atual
        // Date.parse() recebe uma data e converte para milissegundos (desde 1 de janeiro de 1970 até a essa data)


        let dataEvento = Date.parse(data)
        let dataAtual = Date.parse(Date())


        if (dataEvento < dataAtual) {

            alert("A data do evento tem de ser maior à data atual!")
            event.preventDefault()

        } else {
            let novoEventos = new Eventos(data, horario, sala, categoria, responsavel, imagem, designacao)
            tempArrayEvento.push(novoEventos)

            localStorage.setItem("Eventos", JSON.stringify(arrayEventos))

            swal({
                icon: "success",
                title: "Evento submetido com sucesso!",

            });


            console.log(arrayEventos)
            event.preventDefault()


        }




    })

    //#############################Eliminar eventos######################

    let frmEliminarE = document.getElementsByClassName("fas fa-times ar")

  
    let EventosGuardados = ""
    let comentariosLocal = ""
    let pontuaçõesLocais=""
    let interessadosLocal = ""

    for (let i = 0; i < frmEliminarE.length; i++) {

        frmEliminarE[i].addEventListener("click", function (event) {
            if (localStorage.getItem("Eventos")) {
                EventosGuardados = JSON.parse(localStorage.getItem("Eventos"))
            }
               

            if (localStorage.getItem("Interessados")) {
                interessadosLocal = JSON.parse(localStorage.getItem("Interessados"))
            }

            if (localStorage.getItem("Comentarios")) {
                comentariosLocal = JSON.parse(localStorage.getItem("Comentarios"))
            }
            if (localStorage.getItem("Pontuação")) {
                pontuaçõesLocais = JSON.parse(localStorage.getItem("Pontuação"))
            }


            let idEliminar = frmEliminarE[i].getAttribute("id")

            confirm("Desejas eliminar o evento?!")

            if (confirm) {
                EventosGuardados.splice(i, 1)
                localStorage.setItem("Eventos", JSON.stringify(EventosGuardados))

                // remover interessados do evento eliminado
                for (let y = interessadosLocal.length-1; y>=0; y--) {

                    if (idEliminar == interessadosLocal[y]._idEvento) {
                        interessadosLocal.splice(y, 1)
                    }
                }
                localStorage.setItem("Interessados", JSON.stringify(interessadosLocal))

                // remover comentarios do evento eliminado
                for (let h = comentariosLocal.length-1; h>=0; h--) {
                    console.log(comentariosLocal[h]._idDoEventoComentado)

                    if (idEliminar == comentariosLocal[h]._idDoEventoComentado) {
                        comentariosLocal.splice(h, 1)

                    }

                }
                localStorage.setItem("Comentarios", JSON.stringify(comentariosLocal))

                 // remover pontuações do evento pontuaçõesLocais
                 for (let j = pontuaçõesLocais.length-1; j>=0; j--) {
                   
                    if (idEliminar == pontuaçõesLocais[j]._idEventoPontuado) {
                        pontuaçõesLocais.splice(j, 1)

                    }

                }
                localStorage.setItem("Pontuação", JSON.stringify(pontuaçõesLocais))
            }

            alert("Evento eliminado")
            window.location.reload()
            atualizaTabelaEventos()

        })

    }



}


// Função que atualiza a tabela eventos
function atualizaTabelaEventos() {
    let tempArrayEvento = ""
    if (localStorage.getItem("Eventos")) {

        tempArrayEvento = JSON.parse(localStorage.getItem("Eventos"))


    }

    let tblEventos = document.getElementById("tblEventos")
    let str = ""
    str = "<thead class='thead-dark'><tr><th>IMAGEM</th><th>DATA</th><th>NOME</th><th>AÇÃO</th></tr></thead><tbody>"
    for (let i = 0; i < tempArrayEvento.length; i++) {
        str += "<tr>"
        str += "<td> <img class='card-img-top' style='width:20%; height:40%' src='" + tempArrayEvento[i]._imagem + "'></td>"
        str += "<td style=>" + tempArrayEvento[i]._data + "</td>"
        str += "<td style=>" + tempArrayEvento[i]._categoria + "</td>"
        str += "<td style=><a href=''><i id=" + tempArrayEvento[i]._idEv + " class='fas fa-times ar'></i></a></td>"
        str += "</tr>"
    }
    str += "<tbody>"
    tblEventos.innerHTML = str

}
