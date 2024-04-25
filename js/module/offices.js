import {
    getEmployByCode,
    getEmployByOfficeCode,
} from "./employees.js";
import{
    getClientsBySalesManager
}from"./clients.js"
//1. Devuelve un listado con el còdigo de oficina y la ciudad donde hay oficinas
export const getAllOfficesCodeAndCity = async () => {
    let res = await fetch("http://localhost:5504/offices")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            codigo: val.code_office,
            ciudad: val.city
        })
    });
    return dataUpdate;
}
// 2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España.
export const getAllOfficesAndPhonesFromSpain = async () => {
    let res = await fetch("http://localhost:5504/offices?country=España")//para igualar no se le pone nada despues del ? antes del =
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            ciudad: val.city,
            telefono: val.movil
        })
    })
    return dataUpdate;
}

export const getOfficesByCode = async (code) => {
    let res = await fetch(`http://localhost:5504/offices?code_office=${code}`)
    let dataOffice = await res.json();
    return dataOffice
}
//Consultas Multitabla
//6.Lista la dirección de las oficinas que tengan clientes en `Fuenlabrada`.
export const getOfficesAdressWithClientsFromFuenlabrada = async () => {
    let res = await fetch("http://localhost:5504/offices")
    let offices = await res.json()
    for (let i = 0; i < offices.length; i++) {
        let {
            city,
            country,
            region,
            postal_code,
            movil,
            id,
            ...officesUpdate
        } = offices[i]
        let [employee] = await getEmployByOfficeCode(officesUpdate.code_office)
        let{
            name,
            lastname1,
            lastname2,
            extension,
            email,
            code_boss,
            position,
            id:idEmployee,
            ...employeeUpdate
        }=employee
        let [client]=await getEmployByCode()
   
        // let{
        //     client_code,
        //     ...clientUpdate
        // }=client
    }

}