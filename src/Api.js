const API_DNS = "https://fakestoreapi.com/products";

export const categories = [
    {
        name: "Iphone",
        title: "Iphone",
        path: "/category/men's clothing",
        isLarge: false,
    },
    {
        name: "Eletronicos",
        title: "Eletronicos",
        path: "/category/electronics",
        isLarge: false,
    },
];

export const getPecas = async (path) => {
    try {
        let url = API_DNS + path;

        const response = fetch(url);

        return (await response).json();
    } catch (error) {
        console.log("error getPecas: ", error);
    }
};