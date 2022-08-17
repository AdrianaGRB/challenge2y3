let pizzas = [
  {
    id: 1,
    img: "./pizza1.jpeg",
    nombre: "anchopizza",
    ingredientes: ["anchoas", "salsa", "queso"],
    precio: 600,
  },

  {
    id: 2,
    img: "./pizza2.jpg",
    nombre: "hawaiana",
    ingredientes: ["salsa", "queso", "piña", "jamon"],
    precio: 800,
  },

  {
    id: 3,
    img: "./pizza3.jpg",
    nombre: "primavera",
    ingredientes: ["salsa", "queso", "aceituna", "maiz", "bacon"],
    precio: 500,
  },
  {
    id: 4,
    img: "./pizza4.jpg",
    nombre: "muzza",
    ingredientes: ["salsa", "queso", "orégano"],
    precio: 450,
  },
  {
    id: 5,
    img: "./pizza5.jpg",
    nombre: "bbqPork",
    ingredientes: ["salsa", "quesos", "cerdo", "bbq", "cebolla"],
    precio: 1200,
  },
  {
    id: 6,
    img: "./pizza6.jpg",
    nombre: "cuatro quesos",
    ingredientes: ["mozarela", "gongoncina", "fontina", "parmesano"],
    precio: 800,
  },
];

//! Desafío 1

/*  let nombre_pizzas = [] 

 let idPar= pizzas.filter ((pizza) => (pizza.id % 2 ==0)); */
//
/*  idPar.forEach((par) => {
  
 nombre_pizzas.push(par.nombre)

})

console.log (`Las pizzas con id par son ${nombre_pizzas.join(", ")}`)  */

//2

/*  switch (pizzas.some((pizza)=> pizza.precio <= 600)) {

    case true:
        console.log ("Si hay pizzas con precio menor a 600 pesos")
        break;

    case false:
        console.log ("No hay pizzas con precio menor a 600 pesos")    
        break;
}
 */

//3
/* let tipos_pizza[]

 pizzas.forEach ((pizza) => {
  console.log (`Las pizzas son ${pizza.nombre}`)
}) */

//4

/* pizzas.forEach ((pizza) => {
console.log (`los precios de las pizzas son ${pizza.precio}`)
}) */

//5

//pizzas.forEach ((pizza) => {
// console.log (`La pizza ${pizza.nombre} tiene el precio de ${pizza.precio} pesos`)
//}

//! Desafío 2
//* Elementos
let nombrePizza = document.getElementById("Nombre");
let precioPizza = document.getElementById("Precio");
let errorPizza = document.getElementById("Error");
let input = document.getElementById("number");
let buttonId = document.getElementById("Boton");
let imgPizza = document.getElementById("img");

buttonId.addEventListener("click", buscarPizza);

function buscarPizza() {
  const inputValue = parseInt(input.value);
  let pizzaEncontrada = pizzas.find((pizza) => inputValue === pizza.id);

  input.value = "";
  precioPizza.innerHTML = "";
  nombrePizza.innerHTML = "";
  errorPizza.innerHTML = "";

  if (pizzas.some((obj) => inputValue === obj.id)) {
    const pizzaName = document.createElement("h2");
    pizzaName.innerHTML = pizzaEncontrada.nombre;
    nombrePizza.appendChild(pizzaName);

    const pizzaPrice = document.createElement("h4");
    pizzaPrice.innerHTML = pizzaEncontrada.precio;
    precioPizza.appendChild(pizzaPrice);
  } else {
    const pizzaError = document.createElement("h3");
    pizzaError.innerHTML = "No existe ninguna pizza con ese ID :(";
    errorPizza.appendChild(pizzaError);
  }
}

//! Desafio 3
//variables de elementos
const nameInput = document.getElementById("searchedpizza");
const pizzasCard = document.getElementById("PizzasCards");

//* Local Storage
function sendTolocalStorage() {
  localStorage.setItem("pizzas", JSON.stringify(pizzas));
}

sendTolocalStorage();

/* function getLocalStorage (){
  if(JSON.parse(localStorage.getItem("pizzas"))){
    let pizzaas = JSON.parse(localStorage.getItem("pizzas"))
    console.log (pizzaas)
  }else {
    console.log ("no hay nada")
} 
}
getLocalStorage() */

//*buscar y renderizar
addEventListener("submit", buscarPorNombre);

function buscarPorNombre(e) {
  e.preventDefault();
  //variables
  const inputName = nameInput.value.trim().toLowerCase();
  const pizzaFind = pizzas.find((comida) => inputName === comida.nombre);
  nameInput.value = "";
  //newElement.innerHTML= ""
  pizzasCard.innerHTML = "";

  //if
  if (pizzas.some((obj) => inputName === obj.nombre)) {
    renderHtml();
  } else {
    console.log("sigue intentando");
  }
  //renderizar
  function renderHtml(namepizzaarray) {
    //console.log(pizza.nombre);
    const newElement = document.createElement("div");
    let cards = `<h2> Te ofrecemos una ${pizzaFind.nombre} </h2>
    <img src="${pizzaFind.img}" alt="">
    <p> Por tan solo ${pizzaFind.precio} pesos</p>
    <p> Ingredientes: ${pizzaFind.ingredientes.join(", ")} </p>`;

    newElement.innerHTML = cards;
    pizzasCard.appendChild(newElement);
  }
}
