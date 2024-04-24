// Devuelve un listado con todos los productos que pertenecen a la gama `Ornamentales` y que tienen más de `100` unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.
export const getProductsWithGammaOrnamentales = async () => {
    let res = await fetch("http://localhost:5506/products?gama=Ornamentales")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(request => {
        if (request.stock > 100)
            dataUpdate.push({
                Nombre: request.name,
                Codigo: request.code_product,
                Precio: request.price_sale,
                Stock: request.stock
            })
    })
    return dataUpdate.sort((a, b) => a - b)
}