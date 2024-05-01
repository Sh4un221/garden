import {
    getAllOfficesCodeAndCity,
    getAllOfficesAndPhonesFromSpain,

} from "./module/offices.js"

import {
    getAllNameSurnamesAndEmailInCargeOfBossSeven,
    getBossesFullnameAndEmail,
    getAllEmployees,
    getEmployeesWithBoss,
    getEmployeesWithBosses,
    getEmployeesWithoutOffice,
    getEmployeesWithoutClients,
    getEmployeesWithoutClientsAndTheirOffices,
    getEmployeesWithoutOfficeAndWithoutClients

} from "./module/employees.js"

import {
    getAllSpainClients,
    getAllClientsInMadrid,
    getClientsEmploy,
    getClientsAndEmployeesNames,
    getClientsWhoMadePayment,
    getClientsWhoNotMadePayment,
    getClientsWhoMadePaymentsAndTheyCity,
    getClientsWhoDidntMadePaymentsAndTheyCity,
    getOfficeAddressOfClientsFromFuenlabrada,
    clientsWhoReceivedTheirRequestLate,
    getClientsWithoutPayments,
    getClientsWithoutRequest,
    getClientsWithoutPaymentsAndRequest

} from "./module/clients.js"
import {
    getRequestDeliveredInJanuary,
    getRejectRequestsByYear,
    getAllRequestEarlyTwoDays,
    getAllLateRequest,
    getAllStatus,
    getClientsRequestByYear
} from "./module/requests.js"

import {
    getPaymentsByYear,
    getAllPaymentStatus,
    getPaymentByClientCode
} from "./module/payments.js"

import {
    getProductsWithGammaOrnamentales
} from "./module/products.js"
import {
    lisOfProductRangesPurchasedByClient
} from "./module/request_details.js"
import { log } from "console"

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
// console.log(await getProductsWithGammaOrnamentales())
// console.log(await getAllClientsInMadrid());
// console.log(await getClientsEmploy());
// console.log(await getClientsAndEmployeesNames());
// console.log(await getClientsWhoMadePayment());
//console.log(await getClientsWhoNotMadePayment());
// console.log(await getPaymentByClientCode(6));
//console.log(await getClientsWhoMadePaymentsAndTheyCity());
//console.log(await getClientsWhoDidntMadePaymentsAndTheyCity());
// console.log(await getOfficeAddressOfClientsFromFuenlabrada());
// console.log(await getEmployeesWithBoss());
// console.log(await getEmployeesWithBosses());
// console.log(await clientsWhoReceivedTheirRequestLate());
// console.log(await lisOfProductRangesPurchasedByClient());
// console.log(await getClientsWithoutPayments());
// console.log(await getClientsWithoutRequest());
// console.log(await getClientsWithoutPaymentsAndRequest());
// console.log(await getEmployeesWithoutOffice());
// console.log(await getEmployeesWithoutClients());
// console.log(await getEmployeesWithoutClientsAndTheirOffices());
console.log(await getEmployeesWithoutOfficeAndWithoutClients());