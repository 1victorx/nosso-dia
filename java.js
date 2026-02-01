const errado = document.querySelectorAll(".errado")
const correto = document.querySelector("#correto") 
const barra = document.querySelector("#barra")

// Funções 

function não () {
    alert("? pq tu errou")
}
function sim(){
    alert("essa tava fácil, foi só pra começar. Vamos ver como foi esse dia")
    let namoro = document.getElementById("namoro").href
    window.open(namoro, "_blank")
}

function naoela(){
    alert("você não é minha namorada, sai daqui")
}
function ela() {
    alert("oi amor é você, pode continuar")
}

errado.forEach((item) => {
    item.addEventListener("click", () => {
        não()
    })
})

// quando a classe for mais de um item eu preciso colocar o foreach e adicionar item

correto.addEventListener("click", () =>
    sim())

// quando for só um, não precisa

document.addEventListener("DOMContentLoaded", () => {
    const barra = document.querySelector("#barra")

    barra.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const nome = barra.value.trim().toLowerCase()

            if (nome === "vitória") {
                ela()
            } else {
                naoela()
            }
        }
    })
})

function errou(){
    alert("a gente nem saiu nesse dia")
}
function boa(){
    alert("boa amor, acertou! vou te levar para ver como foi esse dia")

    let praia = document.getElementById("praia").href
    window.open(praia, "_blank");
}
