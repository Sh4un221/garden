import { getRequestDetailsByProductCode } from "./request_details.js"
import {getGamaByName} from "./gama.js"
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
//8. Devuelve un listado de los productos que nunca han aparecido en un pedido.
export const getProductsWithoutRequest = async () => {
    let res = await fetch("http://localhost:5506/products")
    let products = await res.json()
    let data = []
    for (let product of products) {
        const details = await getRequestDetailsByProductCode(product.code_product)
        if (!details.length) {
            data.push({
                product_code:product.code_product,
                product_name:product.name,
                gama:product.gama,       
            })
        }
    }
    return data.sort((a,b)=>a.id-b.id)
}
//9. Devuelve un listado de los productos que nunca han aparecido en un pedido. El resultado debe mostrar el nombre, la descripción y la imagen del producto.

export const getProductsWithoutRequestWithDescription = async () => {
    let res = await fetch("http://localhost:5506/products")
    let products = await res.json()
    let data = []
    for (let product of products) {
        const details = await getRequestDetailsByProductCode(product.code_product)
        if (!details.length) {
            data.push({
                product_code:product.code_product,
                product_name:product.name,
                description:product.description,   
            })
        }
    }
    return data.sort((a,b)=>a.id-b.id)
}