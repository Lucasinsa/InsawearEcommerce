export const getProducts = async() => {
    const response = await fetch("/src/data/data.json")
    const data = await response.json()
    return data
}