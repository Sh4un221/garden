import {
    getAllOfficesCodeAndCity,
    getAllOfficesAndPhonesFromSpain,
} from "./module/offices.js"

import {
    getAllNameSurnamesAndEmailInCargeOfBossSeven,
    getBossesFullnameAndEmail,
    getAllEmployees
} from "./module/employees.js"

import {
    getAllSpainClients,
    // getAll
} from "./module/clients.js"
import {
    getRequestDeliveredInJanuary,
    getRejectRequestsByYear,
    getAllRequestEarlyTwoDays,
    getAllLateRequest,
    getAllStatus,
    getClientsRequestByYear,
} from "./module/requests.js"

import {
    getPaymentsByYear,
    getAllPaymentStatus
} from "./module/payments.js"

import{
    get
}from "./module/products.js"
// console.log(await getAllOfficesCodeAndCity());
// console.log(await getAllOfficesAndPhonesFromSpain());
// console.log(await getAllNameSurnamesAndEmail());
// console.log(await getBossesFullnameAndEmail());
// console.log(await getAllEmployees());
// console.log(await getAllSpainClients());
// console.log(await getClientsRequestByDate(2008));
// console.log(await getAllLateRequest());
// console.log(await getAllRequestEarlyTwoDays());
// console.log(await getRejectRequestsByDate(2009));
// console.log(await getRequestDeliveredByMonth());
// console.log(await getPaymentsByYear(2008));
console.log(await get())
