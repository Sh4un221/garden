import { getClientByEmployeeCode } from "./clients.js";
import { getEmployByCode, getEmployeeByOfficeCode, getEmployeesWithBoss } from "./employees.js";
import { getProductByCode } from "./products.js";
import { getRequestDetailsByRequest } from "./request_details.js";
import { getRequestByCodeClient } from "./requests.js";

async function getSalesRepsWithFruitPurchases(offices) {
    const salesRepsWithFruitPurchases = [];
    for (const office of offices) {
        const employees = await getEmployeeByOfficeCode(office.code_office);
        for (const employee of employees) {
            const clients = await getClientByEmployeeCode(employee.employee_code);
            for (const client of clients) {
                const requests = await getRequestByCodeClient(client.client_code);
                for (const request of requests) {
                    const details = await getRequestDetailsByRequest(request.code_request);
                    for (const detail of details) {
                        const product = await getProductByCode(detail.product_code);
                        if (product.gama === "Frutales") {
                            salesRepsWithFruitPurchases.push({ employee_code: employee.employee_code, office_code: office.code_office });
                        }
                    }
                }
            }
        }
    }
    return salesRepsWithFruitPurchases;
}
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
//Multitabla composicion externa
//10. Devuelve las oficinas donde **no trabajan** ninguno de los empleados que hayan sido los representantes de ventas de algún cliente que haya realizado la compra de algún producto de la gama `Frutales`.

export const OfficesExcludingSalesRepsWithFruitPurchases = async () => {
    const res = await fetch("http://localhost:5504/offices");
    const offices = await res.json();

    const salesRepsWithFruitPurchases = await getSalesRepsWithFruitPurchases(offices);//funcion creada para encontrar todas las oficinas que estan asociadas con un cliente que comprara algo de gama Frutales

    const officesWithoutSalesReps = offices.filter(office => {
        return !salesRepsWithFruitPurchases.some(salesRep => salesRep.office_code === office.code_office);
    });

    return officesWithoutSalesReps.map(office => office.code_office);
}






