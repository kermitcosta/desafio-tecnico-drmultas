// Chamada para carregar os arquivos que vieram da página anterior.
jsarray = JSON.parse(sessionStorage.getItem('jsArray'))

// Função responsável por inserir dinamicamente no HTML o modelo dos veículos
function listaModelos(data) {
  // Tratamento do JSON para array com a finalidade de mostrar em ordem
  // alfabética invertida. (O arquivo original já vem em ordem alfabética).
  let modelos = data.modelos
  let nomes = []
  for (i in modelos) {
    nomes.push(modelos[i].nome)
  }
  nomes.reverse()
  let ul = document.getElementById('lista-final')
  for (let i in nomes) {
    let li = document.createElement('li')
    li.innerText = nomes[i]
    ul.appendChild(li)
  }
}

// Chamada da função principal que insere os dados.
listaModelos(jsarray)
