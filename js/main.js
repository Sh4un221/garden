import {
    getAllOfficesCodeAndCity,
    getAllOfficesAndPhonesFromSpain,
} from "./module/offices.js"

import{
    getAllNameSurnamesAndEmailInCargeOfBossSeven,
    getBossesFullnameAndEmail,
    getAllEmployees
} from "./module/employees.js"

import {
    getAllSpainClients,
    // getAll
}from "./module/clients.js"
import {
    // getAll,
    getAllLateRequest,
    getAllStatus,
    getClientsRequestByDate
}from "./module/requests.js"
// console.log(await getAllOfficesCodeAndCity());
// console.log(await getAllOfficesAndPhonesFromSpain());
// console.log(await getAllNameSurnamesAndEmail());
// console.log(await getBossesFullnameAndEmail());
// console.log(await getAllEmployees());
// console.log(await getAllSpainClients());
// console.log(await getClientsRequestByDate(2008));
console.log(await getAllLateRequest());