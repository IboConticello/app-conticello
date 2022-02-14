const products = [
    {
    id: 1,
    name: "PC GAMER",
    img: "https://static-geektopia.com/storage/t/i/701/70103/05-3.webp",
    description: "Cougar Conquer 2 PRO",
    price: 15000,
    },
    {
    id: 2,
    name: "PC GAMER 2",
    img: "https://sc04.alicdn.com/kf/H14f0797bdb0940c6acd277e072ba7d72F.jpg",
    description: "Jonsbo Mod-5",
    price: 12000,
    },
    {
    id: 3,
    name: "GPU",
    img: "https://http2.mlstatic.com/D_NQ_NP_736598-MLA48086025849_112021-O.webp",
    description: "Rtx 3090 Xtreme Waterforce",
    price: 5000,
    },
    {
    id: 4,
    name: "CPU",
    img: "https://http2.mlstatic.com/D_NQ_NP_697795-MLA48475818103_122021-O.webp",
    description: "Ryzen Threadripper",
    price: 2300,
    },
    {
    id: 5,
    name: "RAM",
    img: "https://http2.mlstatic.com/D_NQ_NP_944031-MLA47963693090_102021-O.webp",
    description: "Ram Corsair",
    price: 50,
    },
    {
    id: 6,
    name: "TOWER",
    img: "https://http2.mlstatic.com/D_NQ_NP_752881-MLA44703655336_012021-O.webp",
    description: "Gabinete Essenses",
    price: 150,
    }
];

export const getProducts = () => {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
    });
};