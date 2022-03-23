function carregarCarros() {
  let request = new XMLHttpRequest()
  let url = 'https://parallelum.com.br/fipe/api/v1/carros/marcas'

  request.open('GET', url, false)
  request.send()
  return request.responseText
}

function listaCarros() {
  data = carregarCarros()
  let carros = JSON.parse(data)
  let ul = document.getElementById('car-list')
  for (let i in carros) {
    let li = document.createElement('li')
    li.innerText = carros[i].nome
    li.setAttribute('onclick', "location.href='lista.html'")
    li.setAttribute('id', 'car' + carros[i].codigo)
    ul.appendChild(li)
  }
}

function carregarMotos() {
  let request = new XMLHttpRequest()
  let url = 'https://parallelum.com.br/fipe/api/v1/motos/marcas'

  request.open('GET', url, false)
  request.send()
  return request.responseText
}

function listaMotos() {
  data = carregarMotos()
  let motos = JSON.parse(data)
  let ul = document.getElementById('bike-list')
  for (let i in motos) {
    let li = document.createElement('li')
    li.innerText = motos[i].nome
    li.setAttribute('onclick', "location.href='lista.html'")
    li.setAttribute('id', 'bike' + motos[i].codigo)
    ul.appendChild(li)
  }
}

function carregarCaminhoes() {
  let request = new XMLHttpRequest()
  let url = 'https://parallelum.com.br/fipe/api/v1/caminhoes/marcas'

  request.open('GET', url, false)
  request.send()
  return request.responseText
}

function listaCaminhoes() {
  data = carregarCaminhoes()
  let caminhao = JSON.parse(data)
  let ul = document.getElementById('truck-list')
  for (let i in caminhao) {
    let li = document.createElement('li')
    li.innerText = caminhao[i].nome
    li.setAttribute('onclick', "location.href='lista.html'")
    li.setAttribute('id', 'truck' + caminhao[i].codigo)
    ul.appendChild(li)
  }
}

listaCarros()
listaMotos()
listaCaminhoes()
