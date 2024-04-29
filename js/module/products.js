export const getProductByCode = async (code) => {
    let res = await fetch(`http://localhost:5506/products?code_product=${code}`)
    let data = await res.json()
    return data
}
// 15. Devuelve un listado con todos los productos que pertenecen a la gama `Ornamentales` y que tienen más de `100` unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.
export const getProductsWithGammaOrnamentales = async () => {
    let res = await fetch("http://localhost:5506/products?gama=Ornamentales")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(request => {
        if (request.stock > 100)
            dataUpdate.push({
                name: request.name,
                code: request.code_product,
                price: request.price_sale,
                stock: request.stock
            })
    })
    return dataUpdate.sort((a, b) => b.price - a.price)
}