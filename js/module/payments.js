// 13. Devuelve un listado con todos los pagos que se realizaron en el año `2008` mediante `Paypal`. Ordene el resultado de mayor a menor.
export const getPaymentsByYear = async (year = 2008) => {
    let res = await fetch("http://localhost:5505/payments?payment=PayPal")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(request => {
        if (request.date_payment?.split('-')[0] == year) {
            dataUpdate.push({
                code_client: request.code_client,
                payment: request.payment,
                total: request.total
            })
        }
    })
    dataUpdate = [... new Set(dataUpdate)]
    return dataUpdate.sort((a, b) => b.total - a.total)
}
// 14. Devuelve un listado con todas las formas de pago que aparecen en la tabla `pago`. Tenga en cuenta que no deben aparecer formas de pago repetidas.
export const getAllPaymentStatus = async () => {
    let res = await fetch("http://localhost:5505/payments")
    let data = await res.json();
    let dataUpdate = new Set();
    data.forEach(request => {
        request.payment ? dataUpdate.add(request.payment) : dataUpdate = dataUpdate;
    })

    dataUpdate = [... new Set(dataUpdate)];

    return dataUpdate.sort((a, b) => a - b)
}

export const getPaymentByClientCode = async (clientCode) => {
    let res = await fetch(`http://localhost:5505/payments?code_client=${clientCode}`);
    let data = await res.json();
    return data;

}