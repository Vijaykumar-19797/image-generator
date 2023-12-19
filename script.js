let buttonAdd = document.getElementById('button')
let buttonRemove = document.getElementById('remove')
let container = document.getElementById('container')

buttonAdd.addEventListener('click',generateImage)
buttonRemove.addEventListener('click',removeImage)

let images = ['1','2','3','4']

function generateImage()
{
  let index = Math.floor(Math.random()*images.length)
  let span = document.createElement('span')
  span.innerHTML = `<img src="${images[index]}.jpg">`
  container.appendChild(span)

}

function removeImage()
{
let spanElements = document.querySelectorAll('span')
let index = spanElements.length-1
container.removeChild(spanElements[index])
}
