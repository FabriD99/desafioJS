let lista = [];
const productos = [
  {
    id: 1,
    nombre: "Meat Lover",
    precio: "900",
  },
  {
    id: 2,
    nombre: "Beto Burger",
    precio: "800",
  },
  {
    id: 3,
    nombre: "The Classic",
    precio: "800",
  },
  {
    id: 4,
    nombre: "Royale Bacon",
    precio: "800",
  },
  {
    id: 5,
    nombre: "Sweet Onion",
    precio: "800",
  },
];

let confirmarCompra = document.getElementById("confirmarCompra");
let limpiarCarrito = document.getElementById("limpiarCarrito");
let MeatLover = document.getElementById("MeatLover");
let BetoBurger = document.getElementById("BetoBurger");
let TheClassic = document.getElementById("TheClassic");
let RoyaleBacon = document.getElementById("RoyaleBacon");
let SweetOnion = document.getElementById("SweetOnion");
let submit = document.getElementById("submit");
let vaciar = document.getElementById("vaciarCarrito");

const vaciarCarrito = () => {
  lista = [];
  localStorage.clear();
};

const swa = () => {
  Swal.fire({
    title: "¡Gracias por tu compra!",
    icon: "success",
  });
};

confirmarCompra.onclick = () => {
  swa();
  vaciarCarrito();
};

let carrito = document.getElementById("carrito");
const mostrarCarrito = () => {
  let carritoHTML = "";
  for (let i = 0; i < lista.length; i++) {
    carritoHTML += `<li>${lista[i]}</li>`;
  }
  carrito.innerHTML = carritoHTML;
};

carrito.onclick = () => {
  mostrarCarrito();
}


MeatLover.onclick = () => {
  lista.push(productos[0].nombre);
  localStorage.setItem("Meat Lover", JSON.stringify(lista));
  console.log("MeatLover");
};
BetoBurger.onclick = () => {
  lista.push(productos[1].nombre);
  localStorage.setItem("Beto Burger", JSON.stringify(lista));
  console.log("BetoBurger");
};
TheClassic.onclick = () => {
  lista.push(productos[2].nombre);
  localStorage.setItem("The Classic", JSON.stringify(lista));
  console.log("TheClassic");
};
RoyaleBacon.onclick = () => {
  lista.push(productos[3].nombre);
  localStorage.setItem("Royale Bacon", JSON.stringify(lista));
  console.log("RoyaleBacon");
};
SweetOnion.onclick = () => {
  lista.push(productos[4].nombre);
  localStorage.setItem("Sweet Onion", JSON.stringify(lista));
  console.log("SweetOnion");
};

vaciar.onclick = () => {
  vaciarCarrito();
};

submit.onclick = (e) => {
  e.preventDefault();
  alert("Mensaje enviado");
};
