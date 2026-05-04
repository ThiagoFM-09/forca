const btnComecar = document.querySelector("#comecar")

const montarTabuleiro = (palavra) => {
    const ulLetras = document.querySelector(".tentativas")
    ulLetras.innerHTML = ""
    for(let i=0; i< palavra.length; i++) {
        ulLetras.innerHTML += "<li></li>"
    }
}

const sortearPalavra = listaPalavras => {
    const totalPalavras = listaPalavras.length
    const numSorteio = Math.floor(Math.random()*totalPalavras)
     return listaPalavras[numSorteio]
}
let palavraSorteada = ""
let acertos = 0;
btnComecar.addEventListener("click", () => {
    palavraSorteada  = sortearPalavra(palavras)
    // preciso criar o tabuleiro com a qtd de letras da palavraSorteada
    // montar o tabuleiro
    montarTabuleiro(palavraSorteada)
    console.log(palavraSorteada)
    
})

const btnJogar = document.querySelector("#jogar")
btnJogar.addEventListener("click", () => {
    const input = document.querySelector("#entrada")
    const letra = input.value.toUpperCase()
    const liDoDOM = document.querySelectorAll(".tentativas li")

    let acertou = false;

    for (let i = 0; i < palavraSorteada.length; i++) {
        if (palavraSorteada[i].toUpperCase() === letra && liDoDOM[i].innerHTML === "") {
            liDoDOM[i].innerHTML = letra;
            acertou = true;
            acertos++;
        }
    }

    if (!acertou) {
        erros++
        mostrarParte()

        if (erros+1 === partes.length) {
            alert("Você perdeu! A palavra era: " + palavraSorteada)
        }
    }
    if(acertos === palavraSorteada.length){
        alert("Parabéns, você venceu!")
    }
    input.value = ""
})
let erros = -1
const partes = [".cabeca", ".corpo", ".braco-esq", ".braco-dir", ".perna-esq", ".perna-dir"]

const mostrarParte = () => {
    if(erros < partes.length)
        document.querySelector(partes[erros]).style.display = "block"
}
