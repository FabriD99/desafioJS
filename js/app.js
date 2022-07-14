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
let carrito = document.getElementById("carrito");

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

MeatLover.onclick = () => {
  lista.push(productos[0].nombre);
  localStorage.setItem("Carrito", JSON.stringify(lista));
};
BetoBurger.onclick = () => {
  lista.push(productos[1].nombre);
  localStorage.setItem("Carrito", JSON.stringify(lista));
};
TheClassic.onclick = () => {
  lista.push(productos[2].nombre);
  localStorage.setItem("Carrito", JSON.stringify(lista));
};
RoyaleBacon.onclick = () => {
  lista.push(productos[3].nombre);
  localStorage.setItem("Carrito", JSON.stringify(lista));
};
SweetOnion.onclick = () => {
  lista.push(productos[4].nombre);
  localStorage.setItem("Carrito", JSON.stringify(lista));
};

const mostrarProductos = () => {
  let products = localStorage.getItem("Carrito");
  if (products) {
    products = JSON.parse(products);
    lista = products;
  }
  products?.forEach((product) => {
    let li = document.createElement("li");
    li.innerHTML = product;
    carrito.appendChild(li);
  });
};

mostrarProductos();

vaciar.onclick = () => {
  Swal.fire({
    title: "Carrito vaciado",
    icon: "error",
  });
  vaciarCarrito();
};

submit.onclick = (e) => {
  e.preventDefault();
  Swal.fire({
    title: "Mensaje enviado",
    icon: "success",
  });
};