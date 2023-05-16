const API_DNS = "https://api.mercadolibre.com/sites/MLB/search?q=celular"

export const categories = [
    {
        name: "Iphone",
        title: "Iphone",
        path: "/iphone/all/search?",
        isLarge: false,
    },
    {
        name: "Xaomi",
        title: "Xaomi",
        path: "/xaomi/all/search?",
        isLarge: false,
    },
]
export const getPecas = async (path) => {
    try{
        let url = API_DNS + path

        const response = fetch(url)

        return (await response).json()
    }catch (error) {
        console.log("error getPecas: ", error)
    }
}