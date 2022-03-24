// Função principal da primeira requisição de dados
function carregarDadosMarcas() {
  // Requisição de dados das marcas de carros na API.
  function carregarCarros() {
    let request = new XMLHttpRequest()
    let url = 'https://parallelum.com.br/fipe/api/v1/carros/marcas'

    request.open('GET', url, false)
    request.send()
    return request.responseText
  }

  // Lista os carros dinamicamente no documento HTML.
  function listaCarros() {
    data = carregarCarros()
    carros = JSON.parse(data)
    let ul = document.getElementById('car-list')
    for (let i in carros) {
      let li = document.createElement('li')
      li.innerText = carros[i].nome
      li.setAttribute('id', carros[i].codigo)
      ul.appendChild(li)
    }
  }

  // Requisição de dados das marcas de motos na API.
  function carregarMotos() {
    let request = new XMLHttpRequest()
    let url = 'https://parallelum.com.br/fipe/api/v1/motos/marcas'

    request.open('GET', url, false)
    request.send()
    return request.responseText
  }

  // Lista as motos dinamicamente no documento HTML.
  function listaMotos() {
    data = carregarMotos()
    motos = JSON.parse(data)
    let ul = document.getElementById('bike-list')
    for (let i in motos) {
      let li = document.createElement('li')
      li.innerText = motos[i].nome
      li.setAttribute('id', motos[i].codigo)
      ul.appendChild(li)
    }
  }

  // Requisição de dados das marcas de caminhões na API.
  function carregarCaminhoes() {
    let request = new XMLHttpRequest()
    let url = 'https://parallelum.com.br/fipe/api/v1/caminhoes/marcas'

    request.open('GET', url, false)
    request.send()
    return request.responseText
  }

  // Lista os caminhões dinamicamente no documento HTML.
  function listaCaminhoes() {
    data = carregarCaminhoes()
    caminhoes = JSON.parse(data)
    let ul = document.getElementById('truck-list')
    for (let i in caminhoes) {
      let li = document.createElement('li')
      li.innerText = caminhoes[i].nome
      li.setAttribute('id', caminhoes[i].codigo)
      ul.appendChild(li)
    }
  }

  // Chamada das funções para listar todos os itens.
  listaCarros()
  listaMotos()
  listaCaminhoes()
}

// Função responsável por requisitar os dados e passar para a outra página após
// clique na marca desejada, mostrando os modelos.
function carregarDadosModelos() {
  let idCarro
  let ulCarro = document.getElementById('car-list')
  // Event Listener que pega o id do elemento após o clique
  // e lança-o no código para ser modificado na url de requisição.
  ulCarro.addEventListener('click', function (event) {
    return (idCarro = event.target.id), modelCars(idCarro)
  })

  // Função responsável por requisitar os modelos de carros na API após receber o id.
  function modelCars(id) {
    let request = new XMLHttpRequest()

    request.open(
      'GET',
      `https://parallelum.com.br/fipe/api/v1/carros/marcas/${id}/modelos`,
      false
    )
    request.send()
    requisicaoCarro = JSON.parse(request.responseText)
    // Passa o arquivo recebido para a memória do navegador durante a sessão
    // para ser utilizado na página que será aberta.
    sessionStorage.setItem('jsArray', JSON.stringify(requisicaoCarro))
    location.href = 'lista.html'
  }

  let idMoto
  let ulMoto = document.getElementById('bike-list')
  // Event Listener que pega o id do elemento após o clique
  // e lança-o no código para ser modificado na url de requisição.
  ulMoto.addEventListener('click', function (event) {
    return (idMoto = event.target.id), modelMoto(idMoto)
  })

  // Função responsável por requisitar os modelos de motos na API após receber o id.
  function modelMoto(id) {
    let request = new XMLHttpRequest()

    request.open(
      'GET',
      `https://parallelum.com.br/fipe/api/v1/motos/marcas/${id}/modelos`,
      false
    )
    request.send()
    requisicaoMotos = JSON.parse(request.responseText)
    // Passa o arquivo recebido para a memória do navegador durante a sessão
    // para ser utilizado na página que será aberta.
    sessionStorage.setItem('jsArray', JSON.stringify(requisicaoMotos))
    location.href = 'lista.html'
  }

  let idCaminhao
  let ulCaminhao = document.getElementById('truck-list')
  // Event Listener que pega o id do elemento após o clique
  // e lança-o no código para ser modificado na url de requisição.
  ulCaminhao.addEventListener('click', function (event) {
    return (idCaminhao = event.target.id), modelCaminhao(idCaminhao)
  })

  // Função responsável por requisitar os modelos de caminhões na API após receber o id.
  function modelCaminhao(id) {
    let request = new XMLHttpRequest()

    request.open(
      'GET',
      `https://parallelum.com.br/fipe/api/v1/caminhoes/marcas/${id}/modelos`,
      false
    )
    request.send()
    requisicaoCaminhao = JSON.parse(request.responseText)
    // Event Listener que pega o id do elemento após o clique
    // e lança-o no código para ser modificado na url de requisição.
    sessionStorage.setItem('jsArray', JSON.stringify(requisicaoCaminhao))
    location.href = 'lista.html'
  }
}

// Chamada das duas principais funções do código
carregarDadosMarcas()
carregarDadosModelos()
