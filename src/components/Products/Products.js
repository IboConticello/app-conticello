const products = [
    {
    id: 0,
    name: "PC GAMER Cougar Conquer 2 PRO",
    img: "https://static-geektopia.com/storage/t/i/701/70103/05-3.webp",
    description: "Cougar Conquer 2 PRO",
    price: 15000,
    category: "PC GAMER",
    stock: 1
    },
    {
    id: 1,
    name: "PC GAMER Jonsbo Mod-5",
    img: "https://sc04.alicdn.com/kf/H14f0797bdb0940c6acd277e072ba7d72F.jpg",
    description: "Jonsbo Mod-5",
    price: 12000,
    category: "PC GAMER",
    stock: 3
    },
    {
    id: 2,
    name: "GPU 3090 Xtreme Waterforce",
    img: "https://http2.mlstatic.com/D_NQ_NP_736598-MLA48086025849_112021-O.webp",
    description: "Rtx 3090 Xtreme Waterforce",
    price: 5000,
    category: "GPU",
    stock: 7
    },
    {
    id: 3,
    name: "CPU RYZEN Threadripper",
    img: "https://http2.mlstatic.com/D_NQ_NP_697795-MLA48475818103_122021-O.webp",
    description: "Ryzen Threadripper",
    price: 2300,
    category: "CPU",
    stock: 5
    },
    {
    id: 4,
    name: "RAM CORSAIR",
    img: "https://http2.mlstatic.com/D_NQ_NP_944031-MLA47963693090_102021-O.webp",
    description: "Ram Corsair",
    price: 50,
    category: "RAM",
    stock: 15
    },
    {
    id: 5,
    name: "TOWER Essenses",
    img: "https://http2.mlstatic.com/D_NQ_NP_752881-MLA44703655336_012021-O.webp",
    description: "Gabinete Essenses",
    price: 150,
    category: "TOWER",
    stock: 10
    },
    {
    id: 6,
    name: "GPU 3090 Rog Strix",
    img: "https://m.media-amazon.com/images/I/81Gs7wHNWsS._AC_SL1500_.jpg",
    description: "Rtx 3090 Rog Strix",
    price: 4500,
    category: "GPU",
    stock: 9
    },
    {
    id: 7,
    name: "CPU GAMER NZXT H710i",
    img: "https://www.shwetacomputer.com/wp-content/uploads/2020/04/h710i-matte-white1-800x800.jpg",
    description: "NZXT H710i",
    price: 10000,
    category: "PC GAMER",
    stock: 11
    },
    {
    id: 8,
    name: "TOWER Steel Mesh",
    img: "https://image.made-in-china.com/202f0j00DqLYdRfBaHbI/Hot-Sale-RGB-Strip-Light-MID-Tower-ATX-Gaming-Computer-PC-Case-with-Steel-Mesh-Design.jpg",
    description: "Gabinete Steel Mesh",
    price: 70,
    category: "TOWER",
    stock: 20
    },
    {
    id: 9,
    name: "RAM AOURUS",
    img: "https://pcnitro.cl/8487-large_default/gp-ars16g44-memoria-ram-aorus-ddr4-16gb-2x8gb-4400mhz-rgb-gp-ars16g44.jpg",
    description: "Ram Aourus",
    price: 60,
    category: "RAM",
    stock: 30
    },
    {
    id: 10,
    name: "CPU Intel Core i7 Marvel Edition",
    img: "https://m.media-amazon.com/images/I/61wql4bcfML._AC_.jpg",
    description: "Intel Core i7 Marvel Edition",
    price: 1000,
    category: "CPU",
    stock: 29
    },
    {
    id: 11,
    name: "CPU RYZEN 9 3900X",
    img: "https://armarpcgamer.com/wp-content/uploads/2021/07/71S31CWSs3L._AC_SL1093_.jpg",
    description: "Ryzen 9 3900X",
    price: 1000,
    category: "CPU",
    stock: 35
    },
];

// Filter
const CATEGORIAS = [
    {
    id: "",
    description: "All",
    },
    {
    id: "PC GAMER",
    description: "PC GAMER",
    },
    {
    id: "GPU",
    description: "GPU",
    },
    {
    id: "CPU",
    description: "CPU",
    },
    {
    id: "RAM",
    description: "RAM",
    },
    {
    id: "TOWER",
    description: "TOWER",
    },
];

// Return categories list
export const getCategorias = () => {
    return CATEGORIAS;
};

// Return products list
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1500);
    });
};

// Return product by category
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        const productsToResolve = products.filter(
            (item) => item.category === categoryId
        );
        resolve(productsToResolve);
    });
};