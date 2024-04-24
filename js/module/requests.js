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
export const getClientsRequestByDate = async (date) => {
    let res = await fetch("http://localhost:5508/requests")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(request => {
        if (request.date_request?.split('-')[0] == date) {
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
                Fecha_de_esperada: request.date_wait,
                Fecha_de_entrega: request.date_delivery,
            })
        }
    })
    return dataUpdate;
}