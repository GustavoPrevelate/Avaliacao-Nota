'use strict'

const adicionar = document.getElementById('add')

// const adicionarCard = () => alert('Olá Mundo');

// function adicionarCard() {
//     alert('Olá Mundo!')
// }

// const adicionarCard = () => {
//     const container = document.getElementById('container')
//         // const container = document.querySelector('#container')
//     container.innerHTML = container.innerHTML + '<div class="items"></div>'

// }

const adicionarCard = (aluno, notaAluno) => {
    notaAluno = Number(notaAluno);
    const container = document.getElementById('container')
    const novaDiv = document.createElement('div')


    if (isNaN(notaAluno)) {
        alert('Aceita apenas numeros para a nota.')

    } else if (notaAluno == "" || aluno == "") {
        alert('A tabela não pode estar vazia')
    } else if (notaAluno > 10 || notaAluno < 0) {
        alert('A nota do aluno precisa estar entre 0 e 10')
    } else if (notaAluno >= 5) {
        novaDiv.classList.add('aluno')
        container.appendChild(novaDiv)
        novaDiv.innerHTML = `<h2 class="aluno__title">${aluno}<\h2><h3 class="notaText">${notaAluno}<\h3>`
        novaDiv.classList.add('aluno__azul')
    } else if (notaAluno < 5) {
        novaDiv.classList.add('aluno')
        container.appendChild(novaDiv)
        novaDiv.innerHTML = `<h2 class="aluno__title">${aluno}<\h2><h3 class="notaText">${notaAluno}<\h3>`
        novaDiv.classList.add('aluno__vermelho')
    }
    container.appendChild(novaDiv)

}

const handleClick = () => {
    const nomeAluno = prompt('Digite um nome para o card')
    const nota = prompt('Digite a nota')
    adicionarCard(nomeAluno, nota)
}
adicionar.addEventListener('click', handleClick);

// SOLID - responsabilidade - unica
// Funções puras