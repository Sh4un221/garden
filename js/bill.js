import { getAllProductBill } from "./component/shopBillCamper.js"
let myBill = document.querySelector("#myBill")
let data = await getAllProductBill();
let row = "";

data.forEach((val, id) => {
    val.products.forEach(product => {
        row += `
        <tr>
        <td>${product.descript}</td>
        <td>${product.quantity}</td>
        <td>${product.price}</td>
        <td>${product.total}</td>
        </tr>
        `
    })
})
myBill.innerHTML = row
