const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];

//frutas, bebidas, higiene

let frutas = []
let bebidas = []
let higiene = []



function separaItens(lista) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].category === "Frutas") {
      frutas.push(lista[i])
    } else if (lista[i].category === "Bebidas") {
      bebidas.push(lista[i])
    } else {
      higiene.push(lista[i])
    }
  }

}
separaItens(products)

function verificaImagem(lista){
  for(let i=0; i<lista.length; i++){
      if(lista[i].image === undefined){
        lista[i].image="./img/products/no-img.svg"
      }
  }
}
verificaImagem(frutas)
verificaImagem(higiene)
verificaImagem(bebidas)


function criarItem(lista) {
  let nomeProduto = lista.title
  let categoriaProduto = lista.category
  let precoProduto = lista.price
  let imagemProduto = lista.image

  tagLi = document.createElement('li')
  tagH1 = document.createElement('h1')
  tagH5 = document.createElement('h5')
  tagStrong = document.createElement('strong')
  tagImage = document.createElement('img')
  tagDiv = document.createElement('div')


  tagLi.classList.add('product')
  tagDiv.classList.add('product-main')
  tagH1.classList.add('product-title')
  tagH5.classList.add('product-category')
  tagStrong.classList.add('product-price')
  tagImage.classList.add('product-img')

  tagH1.innerText = nomeProduto
  tagH5.innerText = categoriaProduto
  tagStrong.innerText = precoProduto
  tagImage.src = `${imagemProduto}`

  tagDiv.append(tagH1, tagH5, tagStrong)
  tagLi.append(tagImage, tagDiv)

  return tagLi
}
criarItem(frutas)
criarItem(bebidas)
criarItem(higiene)


let secaoFrutas=document.querySelector('.products-section-1')
let secaoDrinks= document.querySelector('.products-section-2')
let secaoHigiene=document.querySelector('.products-section-3')
let listaFrutas= document.querySelector(".listaFrutas")
let listaDrinks= document.querySelector(".listaDrinks")
let listaHigiene= document.querySelector(".listaHigiene")

let titleFrutas=document.createElement('h1')
let titleDrinks=document.createElement('h1')
let titleHigiene= document.createElement('h1')

titleDrinks.innerText='Bebidas'
titleFrutas.innerText="Frutas"
titleHigiene.innerText='Higiene'

let divFrutas= document.createElement('div')
divFrutas.classList.add('products-content', 'fruits')

let divDrinks= document.createElement('div')
divDrinks.classList.add('products-content', 'drinks')

let divHigiene=document.createElement('div')
divHigiene.classList.add('products-content', 'hygiene')

secaoFrutas.appendChild(titleFrutas)
secaoHigiene.appendChild(titleHigiene)
secaoDrinks.appendChild(titleDrinks)



function renderizaItens(lista, referenciaHtml, referencial2, referencial3){

  for(let i=0; i<lista.length; i++){
   let listaProdutos= lista[i]

   let listaRenderizando= criarItem(listaProdutos)
   referenciaHtml.appendChild(listaRenderizando)

  }
  referencial2.appendChild(referenciaHtml)
  referencial3.appendChild(referencial2)
}
renderizaItens(frutas, listaFrutas, divFrutas, secaoFrutas)
renderizaItens(bebidas, listaDrinks, divDrinks, secaoDrinks)
renderizaItens(higiene, listaHigiene, divHigiene, secaoHigiene)




