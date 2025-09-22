const productos = [
  {
    nombre: "Cabezal Sparring",
    description: "Cabezal de Sparring.",
    categoria: "Protectores",
    marca: "Gran Marc",
    talle: ["1", "2", "3"],
    precio: 35000,
    web: "https://www.granmarctiendaonline.com.ar/productos/cabezal-cerrado/",
    imagen: "cabezal-cerrado.webp",
  },
  {
    nombre: "Dobok Dan",
    description: "Bobok aprobado para torneos internacionales.",
    categoria: "Dobok",
    marca: "Daedo",
    talle: ["1", "2", "3", "4", "5", "6", "7", "8"],
    precio: 115000.56,
    web: "https://www.daedo.com/products/taitf-10813",
    imagen: "dobok.webp",
  },
  {
    nombre: "Escudo de Potencia",
    description: "Escudo de potencia para entrenamientos.",
    categoria: "Entrenamiento",
    marca: "Gran Marc",
    talle: ["s/talle"],
    precio: 51700.5,
    web: "https://www.granmarctiendaonline.com.ar/productos/escudo-de-potencia-grande/",
    imagen: "escudo-potencia.webp",
  },
  {
    nombre: "Par de focos redondos",
    description: "Par de focos de 25cm x 25cm para hacer entrenamiento.",
    categoria: "Entrenamiento",
    marca: "Gran Marc",
    talle: ["s/talle"],
    precio: 15000.3,
    web: "https://www.granmarctiendaonline.com.ar/productos/foco-con-dedos/",
    imagen: "foco-con-dedos.webp",
  },
  {
    nombre: "Guantes 10 onzas",
    description:
      "Guantes de Sparring de 10 onzas habilitados para torneos internacionales",
    categoria: "Protectores",
    marca: "Daedo",
    talle: ["s/talle"],
    precio: 35000,
    web: "https://www.daedo.com/products/pritf-2020",
    imagen: "protectores-manos.webp",
  },
  {
    nombre: "Protectores Pie",
    description: "Protectores de Pie habilitados para torneos internacionales",
    categoria: "Protectores",
    marca: "Daedo",
    talle: ["XXS", "XS", "S", "M", "L", "XL"],
    precio: 35000.43,
    web: "https://www.daedo.com/collections/collection-itf-gloves/products/pritf-2022",
    imagen: "protectores-pie.webp",
  },
];


let mostrarDetalle = (id) =>
{
  document.getElementById("detalle").style.display = "block";
  document.getElementById("titulo-prod").innerText = productos[id].nombre;
  document.getElementById("descr-prod").innerText = productos[id].description;
  document.getElementById("precio-prod").innerText = productos[id].precio;
}

let cerrarModal = () =>
{
  document.getElementById("detalle").style.display = "none";
}

let mostrarCatalogo = (prod = productos) =>
{
  let contenido = "";
  
  prod.forEach((prod, id) =>
  {
    contenido+=`<div>
            <img src="images/${prod.imagen}" alt="${prod.nombre}" />
            <h3>${prod.nombre}</h3>
            <p>${formatPrice(prod.precio)}</p>
            <button type="button" onclick="mostrarDetalle(${id})">Ver Detalle</button>
            <button type="button" onclick="agregarAlcarrito(${id})">Agregar al carrito</button> 
        </div>`;
  });

  document.getElementById("catalogo").innerHTML = contenido;
}

let agregarAlcarrito = (id) =>
{
  const listaInicial = JSON.parse(localStorage.getItem("carrito"));
  if(listaInicial==null)
  {
    listadoProductos=[];
  }
  else
  {
    listadoProductos = listaInicial;
  }
  
  listadoProductos.push(id);
  localStorage.setItem("carrito", JSON.stringify(listadoProductos));
  contarProductos();
}

let mostrarCarrito = () =>
{
  let contenido = "";
  let total = 0;


  const carrito = JSON.parse(localStorage.getItem("carrito"))

if (carrito!=null)
{
  const listProd = [];
  const listCant = [];

  carrito.forEach((num) => 
  {
    if (!listProd.includes(num))
    {
      listProd.push(num);
      listCant.push(1);
    }
    else
    {
      const inx = listProd.indexOf(num);
      listCant[inx] +=1;
    }
  })


  listProd.forEach((num, id) =>
  {
    const element = productos[num];
    contenido+=`<div>
            <h3>${element.nombre}</h3>
            <p>${formatPrice(element.precio)}</p>
            <p>Cantidad: ${listCant[id]}</p>
            <button type="button" onclick="eliminarProducto(${id})">Eliminar producto</button>
        </div>`;
        total+= element.precio * listCant[id];
        
  });
}
  contenido+= `<p>Total: ${formatPrice(total)}</p>`
  contenido+= `<button type="button" onclick="vaciarCarrito()">Vaciar carrito</button>`;
  document.getElementById("mostrar-carrito").innerHTML = contenido;
}

let vaciarCarrito = () =>
{
  localStorage.removeItem("carrito");
  contarProductos();
  window.location.reload();
}


let eliminarProducto = (id) =>
{
  const carrito = JSON.parse(localStorage.getItem("carrito"));
  carrito.splice(id, 1);

  if(carrito.length > 0)
  {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
  else
  {
    localStorage.removeItem("carrito");
  }
  contarProductos();
  localStorage.setItem("carrito", JSON.stringify(carrito));
  window.location.reload();
}

let filtrarProducto = () => //El toLowerCase() no esta funcionando
{
  let searchWord = document.getElementById("search").value;
  let min = document.getElementById("price-min").value;
  let max = document.getElementById("price-max").value;
  let prot = document.getElementById("protectores").checked;
  let entr = document.getElementById("entrenamiento").checked;
  let dob = document.getElementById("dobok").checked;
  let marca = document.getElementById("marca").value;

  let newLista = productos;

if (searchWord)
{
  newLista = newLista.filter((prod) => prod.nombre.toLowerCase().includes(searchWord.toLowerCase()) 
  || prod.description.toLowerCase().includes(searchWord.toLowerCase()));
}

if (min)
{
  newLista = newLista.filter((prod => prod.precio >= min));
}

if (max)
{
  newLista = newLista.filter((prod => prod.precio <= max));
}

let category = [];
prot ? category.push("Protectores") : "";
entr ? category.push("Entrenamiento") : "";
dob ? category.push("Dobok") : "";

if (category.length>0)
{
  newLista = newLista.filter((prod) => category.includes(prod.categoria));
}

if (marca !== "Todas")
{
  newLista = newLista.filter((prod) => prod.marca === marca);
}
  mostrarCatalogo(newLista);
}

let formatPrice = (price) =>
{
  const numberFormat = new Intl.NumberFormat("es-AR", {currency: "ARS", style: "currency", });
  return numberFormat.format(price);
}

let contarProductos = () => 
{
  const getCart = JSON.parse(localStorage.getItem("carrito"));
  if (getCart != null)
  {
    document.getElementById("cant-prod").innerText = getCart.length;
  }
}