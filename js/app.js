let lista = [];

let confirmarCompra = document.getElementById("confirmarCompra");
confirmarCompra.onclick = () => {
  Swal.fire({
    title: "¡Gracias por tu compra!",
    icon: "success",
  });
  vaciarCarrito();
  setTimeout(() => {
    window.location.reload();
  }, 2000);
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

let vaciar = document.getElementById("vaciarCarrito");
const vaciarCarrito = () => {
  lista = [];
  localStorage.clear();
};

vaciar.onclick = () => {
  Swal.fire({
    title: "Carrito vaciado",
    icon: "error",
  });
  setTimeout(() => {
    window.location.reload();
  }, 2000);
  vaciarCarrito();
};

const productos = "js/productos.json";
let hamburguesas = document.getElementById("hamburguesas");
fetch(productos)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((hamburguesa) => {
      let option = document.createElement("div");
      option.innerHTML = `<a href='#${hamburguesa.id}'>${hamburguesa.nombre}</a>`;
      hamburguesas.appendChild(option);

      let div = document.createElement("div");
      div.classList.add("card");
      div.innerHTML = `
      <div id="${hamburguesa.id}" style="display:flex; flex-direction:column; align-items: center; padding:40px">
      <img src="${hamburguesa.img}" width="30%" alt="Foto producto">
      <h3>${hamburguesa.nombre}</h3>
      <p>${hamburguesa.descripcion}</p>
      <h5>$${hamburguesa.precio}</h5>
      <button class="btn btn-primary" id="${hamburguesa.nombre}">Agregar</button>
      </div>
      `;
      document.getElementById("productos").appendChild(div);

      let agregar = document.getElementById(hamburguesa.nombre);
      agregar.onclick = () => {
        lista.push(hamburguesa.nombre);
        localStorage.setItem("Carrito", JSON.stringify(lista));
        window.location.reload();
      };
    });
  })
  .catch((error) => console.log(error));

let submit = document.getElementById("submit");
submit.onclick = (e) => {
  e.preventDefault();
  Swal.fire({
    title: "Mensaje enviado",
    icon: "success",
  });
};

mostrarProductos();
