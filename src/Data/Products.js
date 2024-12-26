export const products = [
    // Categoría: Muebles
    {
      id: 1,
      nombre: "Silla de madera",
      categoria: "Muebles",
      precio: 69999,
      descripcion: "Silla de madera resistente con acabado barnizado",
      disponible: true,
      stock: 10,
      img: "/img/product1.jpeg"
    },
    {
      id: 2,
      nombre: "Sillón reclinable",
      categoria: "Muebles",
      precio: 200143,
      descripcion: "Sillón cómodo con función reclinable y tapizado de cuero",
      disponible: true,
      stock: 5,
      img: "/img/product2.jpg"
    },
    {
      id: 3,
      nombre: "Mesa de luz moderna",
      categoria: "Muebles",
      precio: 25157,
      descripcion: "Mesa de luz con diseño minimalista y cajones",
      disponible: true,
      stock: 20,
      img: "/img/product3.jpg"
    },
    {
      id: 4,
      nombre: "Silla de oficina ergonómica",
      categoria: "Muebles",
      precio: 152999,
      descripcion: "Silla ajustable con soporte lumbar y reposabrazos",
      disponible: true,
      stock: 8,
      img: "/img/product4.jpeg"
    },
    {
      id: 5,
      nombre: "Mesa de comedor extensible",
      categoria: "Muebles",
      precio: 153090,
      descripcion: "Mesa de comedor extensible para hasta 10 personas",
      disponible: true,
      stock: 4,
      img: "/img/product5.jpg"
    },
  
    // Categoría: Iluminación
    {
      id: 6,
      nombre: "Lámpara de pie",
      categoria: "Iluminación",
      precio: 150000,
      descripcion: "Lámpara de pie ajustable con pantalla de tela",
      disponible: true,
      stock: 15,
      img: "/img/product6.jpeg"
    },
    {
      id: 7,
      nombre: "Lámpara de mesa",
      categoria: "Iluminación",
      precio: 20450,
      descripcion: "Lámpara de mesa con base de metal y pantalla de vidrio",
      disponible: false,
      stock: 0,
      img: "/img/product7.jpg"
    },
    {
      id: 8,
      nombre: "Araña de techo moderna",
      categoria: "Iluminación",
      precio: 161999,
      descripcion: "Araña de techo con diseño contemporáneo de acero inoxidable",
      disponible: true,
      stock: 2,
      img: "/img/product8.jpg"
    },
    {
      id: 9,
      nombre: "Lámpara LED de escritorio",
      categoria: "Iluminación",
      precio: 20455,
      descripcion: "Lámpara de escritorio con luz LED ajustable y puerto USB",
      disponible: true,
      stock: 30,
      img: "/img/product9.jpg"
    },
    {
      id: 10,
      nombre: "Foco inteligente RGB",
      categoria: "Iluminación",
      precio: 9499,
      descripcion: "Foco inteligente con control por app y múltiples colores",
      disponible: true,
      stock: 50,
      img: "/img/product10.jpg"
    },
  
    // Categoría: Decoración
    {
      id: 11,
      nombre: "Cuadro abstracto grande",
      categoria: "Decoración",
      precio: 45999,
      descripcion: "Cuadro abstracto de gran tamaño enmarcado",
      disponible: true,
      stock: 7,
      img: "/img/product11.jpg"
    },
    {
      id: 12,
      nombre: "Espejo de pared redondo",
      categoria: "Decoración",
      precio: 41989,
      descripcion: "Espejo decorativo redondo con marco dorado",
      disponible: true,
      stock: 5,
      img: "/img/product12.jpg"
    },
    {
      id: 13,
      nombre: "Alfombra persa",
      categoria: "Decoración",
      precio: 19500,
      descripcion: "Alfombra persa tejida a mano, tamaño 2x3 metros",
      disponible: true,
      stock: 3,
      img: "/img/product13.jpg"
    },
    {
      id: 14,
      nombre: "Florero de vidrio",
      categoria: "Decoración",
      precio: 11120,
      descripcion: "Florero alto de vidrio transparente",
      disponible: true,
      stock: 25,
      img: "/img/product14.jpeg"
    },
    {
      id: 15,
      nombre: "Cojín decorativo",
      categoria: "Decoración",
      precio: 10200,
      descripcion: "Cojín decorativo de algodón con diseño geométrico",
      disponible: true,
      stock: 50,
      img: "/img/product15.jpg"
    },
  
    // Categoría: Electrodomésticos
    {
      id: 16,
      nombre: "Aspiradora robot",
      categoria: "Electrodomésticos",
      precio: 518999,
      descripcion: "Aspiradora robot con navegación inteligente y control remoto",
      disponible: true,
      stock: 10,
      img: "/img/product16.jpg"
    },
    {
      id: 17,
      nombre: "Microondas con grill",
      categoria: "Electrodomésticos",
      precio: 269999,
      descripcion: "Microondas de 30L con grill integrado",
      disponible: true,
      stock: 12,
      img: "/img/product17.jpg"
    },
    {
      id: 18,
      nombre: "Licuadora de alta potencia",
      categoria: "Electrodomésticos",
      precio: 92999,
      descripcion: "Licuadora con motor de alta potencia y múltiples velocidades",
      disponible: true,
      stock: 20,
      img: "/img/product18.jpg"
    },
    {
      id: 19,
      nombre: "Cafetera express",
      categoria: "Electrodomésticos",
      precio: 252999,
      descripcion: "Cafetera express con molinillo integrado",
      disponible: true,
      stock: 8,
      img: "/img/product19.jpg"
    },
    {
      id: 20,
      nombre: "Aire acondicionado portátil",
      categoria: "Electrodomésticos",
      precio: 700000,
      descripcion: "Aire acondicionado portátil con control remoto y función de calefacción",
      disponible: true,
      stock: 6,
      img: "/img/product20.jpeg"
    }
  ];
  
  // Ejemplo de cómo acceder a un producto
  console.log(products[0].nombre); // "Silla de madera"
  