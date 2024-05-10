import {
    getAllSpainClients,
    getAllClientsInMadrid,
    getClientsAndEmployeesNames,
    getClientsWhoMadePayment,
    getClientsWhoNotMadePayment,
    getClientsWhoMadePaymentsAndTheyCity,
    getClientsWhoDidntMadePaymentsAndTheyCity,
    getOfficeAddressOfClientsFromFuenlabrada,
    getClientsEmploy,
    clientsWhoReceivedTheirRequestLate,
    getClientsWithoutPayments,
    getClientsWithoutRequest,
    getClientsWithoutPaymentsAndRequest,
    getClientRequestsWithoutPayments,


} from "../module/clients.js";

import {
    getAllNameSurnamesAndEmailInCargeOfBossSeven,
    getBossesFullnameAndEmail,
    getAllEmployees,
    getEmployeesWithBoss,
    getEmployeesWithBosses,
    getEmployeesWithoutOffice,
    getEmployeesWithoutClients,
    getEmployeesWithoutClientsAndTheirOffices,
    getEmployeesWithoutOfficeAndWithoutClients,
    getEmployeesWithoutClientsAndTheirBosses
} from "../module/employees.js"

import {
    getAllOfficesCodeAndCity,
    getAllOfficesAndPhonesFromSpain,
    OfficesExcludingSalesRepsWithFruitPurchases
} from "../module/offices.js"

import {
    getPaymentsByYear,
    getAllPaymentStatus

}from "../module/payments.js"

import{
    getProductsWithGammaOrnamentales,
    getProductsWithoutRequest,
    getProductsWithoutRequestWithDescription

}from "../module/products.js"

import{
    lisOfProductRangesPurchasedByClient,
} from "../module/request_details.js"

import{
    getAllStatus,
    getClientsRequestByYear,
    getAllLateRequest,
    getAllRequestEarlyTwoDays,
    getRejectRequestsByYear,
    getRequestDeliveredInJanuary
} from"../module/requests.js"

export class Mycard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = /*html*/`
            <link rel="stylesheet" href="../css/myCard.css">  
        `
    }
    async getSpainClientsDesign() {
        let data = await getAllSpainClients();
        var i = 1
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Cliente ${i}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del cliente: </b>${val.nombre}</p>
                        </div>
                    </div>
                </div>
            `;
            i += 1
        });
    }
    async getAllClientsInMadridDesign() {
        let data = await getAllClientsInMadrid();
        var i = 1
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`  
                <div class="report__card">
                <div class="card__title">
                    <div>Cliente ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b>${val.nombre}</p>
                        <p><b>Region: </b>${val.region}</p>
                        <p><b>Representate de ventas: </b>${val.representante_de_ventas}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
    }
    async getClientsAndEmployeesNamesDesign() {
        let data = await getClientsAndEmployeesNames();
        data.forEach(val => {
            this.shadowRoot.innerHTML +=/*html*/ `  
                <div class="report__card">
                <div class="card__title">
                    <div>${val.client_name}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del empleado: </b>${val.name_employee}</p>
                        <p><b>Apellidos del empleado: </b>${val.lastnames_employee}</p>
                    </div>
                </div>
            </div>
            `;
        });
    }
    async getClientsWhoMadePaymentDesign() {
        let data = await getClientsWhoMadePayment();
        data.forEach(val => {
            this.shadowRoot.innerHTML +=/*html*/ `
                <div class="report__card">
                <div class="card__title">
                    <div>${val.client_name}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del empleado: </b>${val.name_employee}</p>
                        <p><b>Apellidos del empleado: </b>${val.lastnames_employee}</p>
                    </div>
                </div>
            </div>
            `;
        });
    }
    async getClientsWhoNotMadePaymentDesign() {
        let data = await getClientsWhoNotMadePayment();
        data.forEach(val => {
            this.shadowRoot.innerHTML += `
                <div class="report__card">
                <div class="card__title">
                    <div>${val.client_name}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del empleado: </b>${val.name_employee}</p>
                    </div>
                </div>
            </div>
            `;
        });
    }
    async getClientsWhoMadePaymentsAndTheyCityDesign() {
        let data = await getClientsWhoMadePaymentsAndTheyCity();
        data.forEach(val => {
            this.shadowRoot.innerHTML += `
                <div class="report__card">
                <div class="card__title">
                    <div>${val.client_name}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del empleado: </b>${val.name_employee}</p>
                        <p><b>Apellidos del empleado: </b>${val.lastnames_employee}</p>
                        <p><b>Ciudad: </b>${val.city}</p>
                    </div>
                </div>
            </div>
            `;
        });
    }
    async getClientsWhoDidntMadePaymentsAndTheyCityDesign() {
        let data = await getClientsWhoDidntMadePaymentsAndTheyCity();
        data.forEach(val => {
            this.shadowRoot.innerHTML += `
                <div class="report__card">
                <div class="card__title">
                    <div>${val.client_name}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del empleado: </b>${val.name_employee}</p>
                        <p><b>Apellidos del empleado: </b>${val.lastnames_employee}</p>
                        <p><b>Ciudad: </b>${val.city}</p>
                    </div>
                </div>
            </div>
            `;
        });
    }
    async getOfficeAddressOfClientsFromFuenlabradaDesign() {
        let data = await getOfficeAddressOfClientsFromFuenlabrada();
        data.forEach(val => {
            this.shadowRoot.innerHTML += `
                <div class="report__card">
                <div class="card__title">
                    <div>${val.client_name}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Direccion 1: </b>${val.address1}</p>
                        <p><b>Info adicional: </b>${val.address2}</p>
                    </div>
                </div>
            </div>
            `;
        });
    }
    async getClientsEmployDesign() {
        let data = await getClientsEmploy();
        data.forEach(val => {
            this.shadowRoot.innerHTML += `
                <div class="report__card">
                <div class="card__title">
                    <div>${val.client_name}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del empleado: </b>${val.name_employee}</p>
                        <p><b>Ciudad: </b>${val.city}</p>
                    </div>
                </div>
            </div>
            `;
        });
    }
    async clientsWhoReceivedTheirRequestLateDesign() {
        let data = await clientsWhoReceivedTheirRequestLate();
        var i = 1
        data.forEach(val => {
            this.shadowRoot.innerHTML += `
                <div class="report__card">
                <div class="card__title">
                    <div>Cliente ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                    <p><b>Nombre del cliente: </b>${val.client_name}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
    }
    async getClientsWithoutPaymentsDesign() {
        let data = await getClientsWithoutPayments();
        var i = 1
        data.forEach(val => {
            this.shadowRoot.innerHTML += `
                <div class="report__card">
                <div class="card__title">
                    <div>Cliente ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                    <p><b>Nombre del cliente: </b>${val}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
    }
    async getClientsWithoutRequestDesign() {
        let data = await getClientsWithoutRequest();
        var i = 1
        data.forEach(val => {
            this.shadowRoot.innerHTML += `
                <div class="report__card">
                <div class="card__title">
                    <div>Cliente ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                    <p><b>Nombre del cliente: </b>${val.name}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
    }
    async getClientsWithoutPaymentsAndRequestDesign() {
        let data = await getClientsWithoutPaymentsAndRequest();
        var i = 1
        data.forEach(val => {
            this.shadowRoot.innerHTML += `
                <div class="report__card">
                <div class="card__title">
                    <div>Cliente ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                    <p><b>Nombre del cliente: </b>${val.name}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
    }
    async getClientRequestsWithoutPaymentsDesign() {
        let data = await getClientRequestsWithoutPayments();
        var i = 1
        data.forEach(val => {
            this.shadowRoot.innerHTML += `
                <div class="report__card">
                <div class="card__title">
                    <div>Cliente ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                    <p><b>Nombre del cliente: </b>${val.name}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
    }

    async getAllNameSurnamesAndEmailInCargeOfBossSevenDesign() {
        let data = await getAllNameSurnamesAndEmailInCargeOfBossSeven();
        var i = 1
        data.forEach(val => {
            this.shadowRoot.innerHTML += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Empleado ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b>${val.nombre}</p>
                        <p><b>Apellidos: </b>${val.apellidos}</p>
                        <p><b>email: </b>${val.email}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
    }
    async getBossesFullnameAndEmailDesign() {
        let data = await getBossesFullnameAndEmail();
        data.forEach(val => {
            this.shadowRoot.innerHTML += `  
                <div class="report__card">
                <div class="card__title">
                    <div>${val.puesto}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b>${val.nombre}</p>
                        <p><b>Apellidos: </b>${val.apellidos}</p>
                        <p><b>email: </b>${val.email}</p>
                    </div>
                </div>
            </div>
            `;
        });
    }
    async getAllEmployeesDesign() {
        let data = await getAllEmployees();
        data.forEach(val => {
            this.shadowRoot.innerHTML += `  
                <div class="report__card">
                <div class="card__title">
                    <div>${val.puesto}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b>${val.nombre}</p>
                        <p><b>Apellidos: </b>${val.apellidos}</p>
                    </div>
                </div>
            </div>
            `;
        });
    }
    async getEmployeesWithBossDesign() {
        let data = await getEmployeesWithBoss();
        var i = 1
        data.forEach(val => {
            this.shadowRoot.innerHTML += `
                <div class="report__card">
                <div class="card__title">
                    <div>Reporte ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre los empleados: </b>${val.employees}</p>
                        <p><b>Nombre del jefe </b>${val.nameBoss}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
    }
    async getEmployeesWithBossesDesign() {
        let data = await getEmployeesWithBosses();
        var i = 1
        data.forEach(val => {
            this.shadowRoot.innerHTML += `
                <div class="report__card">
                <div class="card__title">
                    <div>Datos</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del empleado: </b>${val.NombreDelTrabajador}</p>
                        <p><b>Nombre del jefe: </b>${val.NombreDelJefe}</p>
                        <p><b>Jefe de mi jefe: </b>${val.jefeDelJefe}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
    }
    async getEmployeesWithoutOfficeDesign() {
        let data = await getEmployeesWithoutOffice();
        console.log(data);
        var i = 1
        data.forEach(val => {
            this.shadowRoot.innerHTML += `
                <div class="report__card">
                <div class="card__title">
                    <div>Empleado ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                    <p><b>Nombre del empleado: </b>${val.name}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
    }
    async getEmployeesWithoutClientsDesign() {
        let data = await getEmployeesWithoutClients();
        console.log(data);
        var i = 1
        data.forEach(val => {
            this.shadowRoot.innerHTML += `
                <div class="report__card">
                <div class="card__title">
                    <div>Empleado ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                    <p><b>Nombre del empleado: </b>${val.name}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
    }
    async getEmployeesWithoutClientsAndTheirOfficesDesign() {
        let data = await getEmployeesWithoutClientsAndTheirOffices();
        console.log(data);
        var i = 1
        data.forEach(val => {
            this.shadowRoot.innerHTML += `
                <div class="report__card">
                <div class="card__title">
                    <div>Empleado ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                    <p><b>Nombre del empleado: </b>${val.name}</p>
                    <p><b>ID de la oficina: </b>${val.office["code_office"]}</p>
                    <p><b>Ciudad de la oficina: </b>${val.office["city"]}</p>

                    </div>
                </div>
            </div>
            `;
            i += 1
        });
    }
    async getEmployeesWithoutOfficeAndWithoutClientsDesign() {
        let data = await getEmployeesWithoutOfficeAndWithoutClients();
        console.log(data);
        var i = 1
        data.forEach(val => {
            this.shadowRoot.innerHTML += `
                <div class="report__card">
                <div class="card__title">
                    <div>Empleado ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                    <p><b>Nombre del empleado: </b>${val.name}</p>           
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
    }
    async getEmployeesWithoutClientsAndTheirBossesDesign() {
        let data = await getEmployeesWithoutClientsAndTheirBosses();
        console.log(data);
        var i = 1
        data.forEach(val => {
            this.shadowRoot.innerHTML += `
                <div class="report__card">
                <div class="card__title">
                    <div>Empleado ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                    <p><b>Nombre del empleado: </b>${val.name}</p>     
                    <p><b>Nombre de su jefe directo: </b>${val.boss_name}</p>       
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
    }

    async getAllOfficesCodeAndCityDesign() {
        let data = await getAllOfficesCodeAndCity();
        var i = 1
        data.forEach(val => {
            this.shadowRoot.innerHTML += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Reporte ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo: </b>${val.codigo}</p>
                        <p><b>Ciudad: </b>${val.ciudad}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
    }
    async getAllOfficesAndPhonesFromSpainDesign() {
        let data = await getAllOfficesAndPhonesFromSpain();
        var i = 1
        data.forEach(val => {
            this.shadowRoot.innerHTML += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Reporte ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Ciudad: </b>${val.ciudad}</p>
                        <p><b>Telefono: </b>${val.telefono}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
    }
    async OfficesExcludingSalesRepsWithFruitPurchasesDesign() {
        let data = await OfficesExcludingSalesRepsWithFruitPurchases(); 
        var i = 1
        data.forEach(val => {
            this.shadowRoot.innerHTML += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Reporte ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo de la oficina: </b>${val}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
    }

    async getPaymentsByYearDesign(){
        let data = await getPaymentsByYear();
        var i = 1
        data.forEach(val => {
            this.shadowRoot.innerHTML += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Pago  ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo del cliente: </b>${val.code_client}</p>
                        <p><b>Medio de pago: </b>${val.payment}</p>
                        <p><b>Total: </b>${val.total}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
    }
    async getAllPaymentStatusDesign(){
        let data = await getAllPaymentStatus();
        var i = 1
        data.forEach(val => {
            this.shadowRoot.innerHTML += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Metodo de pago  ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Medio de pago: </b>${val}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
    }

    async getProductsWithGammaOrnamentalesDesign(){
        let data = await getProductsWithGammaOrnamentales();
        var i = 1
        data.forEach(val => {
            this.shadowRoot.innerHTML += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Producto ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b>${val.name}</p>
                        <p><b>Precio de venta: </b>${val.price}</p>
                        <p><b>Stock: </b>${val.stock}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
    }
    async getProductsWithoutRequestDesign(){
        let data = await getProductsWithoutRequest();
        var i = 1
        data.forEach(val => {
            this.shadowRoot.innerHTML += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Producto ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b>${val.product_name}</p>
                        <p><b>Gama: </b>${val.gama}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
    }
    async getProductsWithoutRequestWithDescriptionDesign(){
        let data = await getProductsWithoutRequestWithDescription();
        console.log(data);
        var i = 1
        data.forEach(val => {
            if (val.description==undefined){
                val.description="No hay descripcion"
            }
            this.shadowRoot.innerHTML += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Producto ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo: </b>${val.product_code}</p>
                        <p><b>Nombre: </b>${val.product_name}</p>
                        <p><b>Descripcion: </b>${val.description}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
    }
    async lisOfProductRangesPurchasedByClientDesign(){
        let data = await lisOfProductRangesPurchasedByClient();
        data.forEach(val => {
            this.shadowRoot.innerHTML += `
                <div class="report__card">
                <div class="card__title">
                    <div>${val.client_name}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                    <p><b>Gama: </b>${val.gama}</p>
                    </div>
                </div>
            </div>
            `;
        });
    }

    async getAllStatusDesign(){
        let data = await getAllStatus();
        var i = 1
        data.forEach(val => {
            this.shadowRoot.innerHTML += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Estado ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Status: </b>${val}</p>

                    </div>
                </div>
            </div>
            `;
            i += 1
        });
    }
    async getClientsRequestByYearDesign(){
        let data = await getClientsRequestByYear();
        var i = 1
        data.forEach(val => {
            this.shadowRoot.innerHTML += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Cliente ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo del cliente: </b>${val}</p>

                    </div>
                </div>
            </div>
            `;
            i += 1
        });
    }
    async getAllLateRequestDesign(){
        let data = await getAllLateRequest();
        var i = 1
        data.forEach(val => {
            this.shadowRoot.innerHTML += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Pedido ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo del pedido: </b>${val.Codigo_del_pedido}</p>
                        <p><b>Codigo del cliente: </b>${val.Codigo_del_cliente}</p>
                        <p><b>Fecha esperada: </b>${val.Fecha_esperada}</p>
                        <p><b>Fecha de entrega: </b>${val.Fecha_de_entrega}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
    }
    async getAllRequestEarlyTwoDaysDesign(){
        let data = await getAllRequestEarlyTwoDays();
        var i = 1
        data.forEach(val => {
            this.shadowRoot.innerHTML += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Pedido ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo del pedido: </b>${val.Codigo_del_pedido}</p>
                        <p><b>Codigo del cliente: </b>${val.Codigo_del_cliente}</p>
                        <p><b>Fecha esperada: </b>${val.Fecha_esperada}</p>
                        <p><b>Fecha de entrega: </b>${val.Fecha_de_entrega}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
    }
    async getRejectRequestsByYearDesign(){
        let data = await getRejectRequestsByYear();
        var i = 1
        data.forEach(val => {
            this.shadowRoot.innerHTML += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Pedido ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo del pedido: </b>${val.Codigo_del_pedido}</p>
                        <p><b>Codigo del cliente: </b>${val.Codigo_del_cliente}</p>
                        <p><b>Fecha esperada: </b>${val.Fecha_esperada}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });       
    }
    async getRequestDeliveredInJanuaryDesign(){
        let data = await getRequestDeliveredInJanuary();
        var i = 1
        data.forEach(val => {
            this.shadowRoot.innerHTML += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Pedido ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo del pedido: </b>${val.Codigo_del_pedido}</p>
                        <p><b>Codigo del cliente: </b>${val.Codigo_del_cliente}</p>
                        <p><b>Fecha de entrega: </b>${val.Fecha_de_entrega}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
    }
    static get observedAttributes() {
        return ["logic"];
    }
    attributeChangedCallback(name, old, now) {
        if (name == "logic" && now == "client_6") this.getSpainClientsDesign()
        if (name == "logic" && now == "client_16") this.getAllClientsInMadridDesign()
        if (name == "logic" && now == "mtclient_1") this.getClientsAndEmployeesNamesDesign()
        if (name == "logic" && now == "mtclient_2") this.getClientsWhoMadePaymentDesign()
        if (name == "logic" && now == "mtclient_3") this.getClientsWhoNotMadePaymentDesign()
        if (name == "logic" && now == "mtclient_4") this.getClientsWhoMadePaymentsAndTheyCityDesign()
        if (name == "logic" && now == "mtclient_5") this.getClientsWhoDidntMadePaymentsAndTheyCityDesign()
        if (name == "logic" && now == "mtclient_6") this.getOfficeAddressOfClientsFromFuenlabradaDesign()
        if (name == "logic" && now == "mtclient_7") this.getClientsEmployDesign()
        if (name == "logic" && now == "mtclient_10") this.clientsWhoReceivedTheirRequestLateDesign()
        if (name == "logic" && now == "mteclient_1") this.getClientsWithoutPaymentsDesign()
        if (name == "logic" && now == "mteclient_2") this.getClientsWithoutRequestDesign()
        if (name == "logic" && now == "mteclient_3") this.getClientsWithoutPaymentsAndRequestDesign()
        if (name == "logic" && now == "mteclient_11") this.getClientRequestsWithoutPaymentsDesign()

        if (name == "logic" && now == "employ_3") this.getAllNameSurnamesAndEmailInCargeOfBossSevenDesign()
        if (name == "logic" && now == "employ_4") this.getBossesFullnameAndEmailDesign()
        if (name == "logic" && now == "employ_5") this.getAllEmployeesDesign()
        if (name == "logic" && now == "mtemploy_8") this.getEmployeesWithBossDesign()
        if (name == "logic" && now == "mtemploy_9") this.getEmployeesWithBossesDesign()
        if (name == "logic" && now == "mteemploy_4") this.getEmployeesWithoutOfficeDesign()
        if (name == "logic" && now == "mteemploy_5") this.getEmployeesWithoutClientsDesign()
        if (name == "logic" && now == "mteemploy_6") this.getEmployeesWithoutClientsAndTheirOfficesDesign()
        if (name == "logic" && now == "mteemploy_7") this.getEmployeesWithoutOfficeAndWithoutClientsDesign()
        if (name == "logic" && now == "mteemploy_12") this.getEmployeesWithoutClientsAndTheirBossesDesign()

        if (name == "logic" && now == "offices_1") this.getAllOfficesCodeAndCityDesign()
        if (name == "logic" && now == "offices_2") this.getAllOfficesAndPhonesFromSpainDesign()
        if (name == "logic" && now == "mteoffices_10") this.OfficesExcludingSalesRepsWithFruitPurchasesDesign()

        if (name == "logic" && now == "payments_13") this.getPaymentsByYearDesign()
        if (name == "logic" && now == "payments_14") this.getAllPaymentStatusDesign()
        
        if (name == "logic" && now == "products_15") this.getProductsWithGammaOrnamentalesDesign()
        if (name == "logic" && now == "mteproducts_8") this.getProductsWithoutRequestDesign()
        if (name == "logic" && now == "mteproducts_9") this.getProductsWithoutRequestWithDescriptionDesign()

        if (name == "logic" && now == "mtrdetails_11") this.lisOfProductRangesPurchasedByClientDesign()

        if (name == "logic" && now == "requst_7") this.getAllStatusDesign()
        if (name == "logic" && now == "requst_8") this.getClientsRequestByYearDesign()
        if (name == "logic" && now == "requst_9") this.getAllLateRequestDesign()
        if (name == "logic" && now == "requst_10") this.getAllRequestEarlyTwoDaysDesign()
        if (name == "logic" && now == "requst_11") this.getRejectRequestsByYearDesign()
        if (name == "logic" && now == "requst_12") this.getRequestDeliveredInJanuaryDesign()

    }
}