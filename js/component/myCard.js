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

} from "../module/clients.js";
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

    }
}