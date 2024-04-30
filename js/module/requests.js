export const getRequestByCodeClient = async (code) => {
    let res = await fetch(`http://localhost:5508/requests?code_client=${code}`)
    let requests = res.json()
    return requests
}
export const getRequestByDetails = async (code) => {
    let res = await fetch(`http://localhost:5508/requests?code_request=${code}`)
    let data = await res.json();
    return data
}
// 7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.
export const getAllStatus = async () => {
    let res = await fetch("http://localhost:5508/requests")
    let data = await res.json();
    // let dataUpdate = new Set(); //forma 1 para set
    let dataUpdate = []; //forma 2 para array 

    data.forEach(request => {
        // request.status? dataUpdate.add(request.status): dataUpdate = dataUpdate; //forma 1 y devuelve set
        if (!(dataUpdate.includes(request.status))) { //forma 2
            dataUpdate.push(request.status) //forma 2
        }
    })
    // dataUpdate = [... new Set(dataUpdate)]; //forma 1 y devuelve array
    return dataUpdate;
}
// 8. Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008. Tenga en cuenta que deberá eliminar aquellos códigos de cliente que aparezcan repetidos. Resuelva la consulta:
export const getClientsRequestByYear = async (year=2008) => {
    let res = await fetch("http://localhost:5508/requests")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(request => {
        if (request.date_request?.split('-')[0] == year) {
            dataUpdate.push(request.code_client)
        }
    })
    dataUpdate = [... new Set(dataUpdate)]
    return dataUpdate.sort((a, b) => a - b)
}
//9. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.
export const getAllLateRequest = async () => {
    let res = await fetch("http://localhost:5508/requests?status=Entregado")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(request => {
        if (request.date_delivery?.split('-')[1] >= request.date_wait.split('-')[1] && (request.date_delivery?.split('-')[2] > request.date_wait.split('-')[2])) {
            dataUpdate.push({
                Codigo_del_pedido: request.code_request,
                Codigo_del_cliente: request.code_client,
                Fecha_esperada: request.date_wait,
                Fecha_de_entrega: request.date_delivery,
            })
        }
    })
    return dataUpdate;
}
// 10. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.
export const getAllRequestEarlyTwoDays = async () => {
    let res = await fetch("http://localhost:5508/requests?status=Entregado")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(request => {
        if (request.date_delivery?.split('-')[1] <= request.date_wait.split('-')[1] || ((request.date_delivery?.split('-')[2] - 2) < request.date_wait.split('-')[2])) {
            if (!(request.date_delivery.split('-')[2] == request.date_wait.split('-')[2])) {
                dataUpdate.push({
                    Codigo_del_pedido: request.code_request,
                    Codigo_del_cliente: request.code_client,
                    Fecha_esperada: request.date_wait,
                    Fecha_de_entrega: request.date_delivery,
                })
            }
        }
    })
    return dataUpdate;
}
// 11. Devuelve un listado de todos los pedidos que fueron **rechazados** en `2009`.
export const getRejectRequestsByYear = async (year=2009) => {
    let res = await fetch("http://localhost:5508/requests?status=Rechazado")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(request => {
        if (request.date_delivery?.split('-')[0] == year) {
            dataUpdate.push({
                Codigo_del_pedido: request.code_request,
                Codigo_del_cliente: request.code_client,
                Fecha_esperada: request.date_wait,
                Fecha_de_entrega: request.date_delivery,
                Estado: request.status
            })
        }
    })
    dataUpdate = [... new Set(dataUpdate)]
    return dataUpdate.sort((a, b) => a - b)
}
// 12. Devuelve un listado de todos los pedidos que han sido **entregados** en el mes de enero de cualquier año.
export const getRequestDeliveredInJanuary = async () => {
    let res = await fetch("http://localhost:5508/requests?status=Entregado")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(request => {
        if (request.date_delivery?.split('-')[1] === "01") {
            dataUpdate.push({
                Codigo_del_pedido: request.code_request,
                Codigo_del_cliente: request.code_client,
                Fecha_esperada: request.date_wait,
                Fecha_de_entrega: request.date_delivery,
                Estado: request.status
            })
        }
    })
    dataUpdate = [... new Set(dataUpdate)]
    return dataUpdate.sort((a, b) => a - b)
}
