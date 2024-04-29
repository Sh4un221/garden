
import {
    getClientsEmploy,
    getClientsAndEmployeesNames,
    getClientsWhoMadePayment,
    getClientsWhoNotMadePayment,
    getClientsWhoMadePaymentsAndTheyCity,
    getOfficeAddressOfClientsFromFuenlabrada,
    getClientsWhoDidntMadePaymentsAndTheyCity,
    clientsWhoReceivedTheirRequestLate,
    getAllSpainClients,
    getAllClientsInMadrid
} from "./module/clients.js";
import {
    getEmployeesWithBoss,
    getEmployeesWithBosses,
    getAllNameSurnamesAndEmailInCargeOfBossSeven,
    getBossesFullnameAndEmail,
    getAllEmployees
} from "./module/employees.js"

import {
    lisOfProductRangesPurchasedByClient
} from "./module/request_details.js"
import {
    getAllOfficesCodeAndCity,
    getAllOfficesAndPhonesFromSpain,
} from "./module/offices.js"
import {
    getAllStatus,
    getClientsRequestByYear,
    getAllLateRequest,
    getAllRequestEarlyTwoDays,
    getRejectRequestsByYear,
    getRequestDeliveredInJanuary
} from "./module/requests.js"
import {
    getPaymentsByYear,
    getAllPaymentStatus
} from "./module/payments.js"
import {
    getProductsWithGammaOrnamentales
} from "./module/products.js"
const queryAboutOneTable1 = document.querySelector("#queryAboutOneTable1");
queryAboutOneTable1.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutOneTable1.children
    if (!report__container.innerHTML) {
        let data = await getAllOfficesCodeAndCity();
        let plantilla = "";
        console.log(data);
        var i = 1
        data.forEach(val => {
            plantilla += `  
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
        report__container.innerHTML = plantilla;
    }
})
const queryAboutOneTable2 = document.querySelector("#queryAboutOneTable2");
queryAboutOneTable2.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutOneTable2.children
    if (!report__container.innerHTML) {
        let data = await getAllOfficesAndPhonesFromSpain();
        let plantilla = "";
        console.log(data);
        var i = 1
        data.forEach(val => {
            plantilla += `  
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
        report__container.innerHTML = plantilla;
    }
})
const queryAboutOneTable3 = document.querySelector("#queryAboutOneTable3");
queryAboutOneTable3.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutOneTable3.children
    if (!report__container.innerHTML) {
        let data = await getAllNameSurnamesAndEmailInCargeOfBossSeven();
        let plantilla = "";
        console.log(data);
        var i = 1
        data.forEach(val => {
            plantilla += `  
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
        report__container.innerHTML = plantilla;
    }
})
const queryAboutOneTable4 = document.querySelector("#queryAboutOneTable4");
queryAboutOneTable4.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutOneTable4.children
    if (!report__container.innerHTML) {
        let data = await getBossesFullnameAndEmail();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `  
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
        report__container.innerHTML = plantilla;
    }
})
const queryAboutOneTable5 = document.querySelector("#queryAboutOneTable5");
queryAboutOneTable5.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutOneTable5.children
    if (!report__container.innerHTML) {
        let data = await getAllEmployees();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `  
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
        report__container.innerHTML = plantilla;
    }
})
const queryAboutOneTable6 = document.querySelector("#queryAboutOneTable6");
queryAboutOneTable6.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutOneTable6.children
    if (!report__container.innerHTML) {
        let data = await getAllSpainClients();
        let plantilla = "";
        console.log(data);
        var i = 1
        data.forEach(val => {
            plantilla += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Cliente ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b>${val.nombre}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
        report__container.innerHTML = plantilla;
    }
})
const queryAboutOneTable7 = document.querySelector("#queryAboutOneTable7");
queryAboutOneTable7.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutOneTable7.children
    if (!report__container.innerHTML) {
        let data = await getAllStatus();
        let plantilla = "";
        console.log(data);
        var i = 1
        data.forEach(val => {
            plantilla += `  
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
        report__container.innerHTML = plantilla;
    }
})
const queryAboutOneTable8 = document.querySelector("#queryAboutOneTable8");
queryAboutOneTable8.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutOneTable8.children
    if (!report__container.innerHTML) {
        let data = await getClientsRequestByYear();
        let plantilla = "";
        console.log(data);
        var i = 1
        data.forEach(val => {
            plantilla += `  
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
        report__container.innerHTML = plantilla;
    }
})
const queryAboutOneTable9 = document.querySelector("#queryAboutOneTable9");
queryAboutOneTable9.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutOneTable9.children
    if (!report__container.innerHTML) {
        let data = await getAllLateRequest();
        let plantilla = "";
        console.log(data);
        var i = 1
        data.forEach(val => {
            plantilla += `  
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
        report__container.innerHTML = plantilla;
    }
})
const queryAboutOneTable10 = document.querySelector("#queryAboutOneTable10");
queryAboutOneTable10.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutOneTable10.children
    if (!report__container.innerHTML) {
        let data = await getAllRequestEarlyTwoDays();
        let plantilla = "";
        console.log(data);
        var i = 1
        data.forEach(val => {
            plantilla += `  
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
        report__container.innerHTML = plantilla;
    }
})
const queryAboutOneTable11 = document.querySelector("#queryAboutOneTable11");
queryAboutOneTable11.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutOneTable11.children
    if (!report__container.innerHTML) {
        let data = await getRejectRequestsByYear();
        let plantilla = "";
        console.log(data);
        var i = 1
        data.forEach(val => {
            plantilla += `  
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
        report__container.innerHTML = plantilla;
    }
})
const queryAboutOneTable12 = document.querySelector("#queryAboutOneTable12");
queryAboutOneTable12.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutOneTable12.children
    if (!report__container.innerHTML) {
        let data = await getRequestDeliveredInJanuary();
        let plantilla = "";
        console.log(data);
        var i = 1
        data.forEach(val => {
            plantilla += `  
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
        report__container.innerHTML = plantilla;
    }
})
const queryAboutOneTable13 = document.querySelector("#queryAboutOneTable13");
queryAboutOneTable13.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutOneTable13.children
    if (!report__container.innerHTML) {
        let data = await getPaymentsByYear();
        let plantilla = "";
        console.log(data);
        var i = 1
        data.forEach(val => {
            plantilla += `  
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
        report__container.innerHTML = plantilla;
    }
})
const queryAboutOneTable14 = document.querySelector("#queryAboutOneTable14");
queryAboutOneTable14.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutOneTable14.children
    if (!report__container.innerHTML) {
        let data = await getAllPaymentStatus();
        let plantilla = "";
        console.log(data);
        var i = 1
        data.forEach(val => {
            plantilla += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Pago  ${i}</div>
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
        report__container.innerHTML = plantilla;
    }
})
const queryAboutOneTable15 = document.querySelector("#queryAboutOneTable15");
queryAboutOneTable15.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutOneTable15.children
    if (!report__container.innerHTML) {
        let data = await getProductsWithGammaOrnamentales();
        let plantilla = "";
        console.log(data);
        var i = 1
        data.forEach(val => {
            plantilla += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Producto ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Precio de venta: </b>${val.price}</p>
                        <p><b>Stock: </b>${val.stock}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
        report__container.innerHTML = plantilla;
    }
})
const queryAboutOneTable16 = document.querySelector("#queryAboutOneTable16");
queryAboutOneTable16.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutOneTable16.children
    if (!report__container.innerHTML) {
        let data = await getAllClientsInMadrid();
        let plantilla = "";
        console.log(data);
        var i = 1
        data.forEach(val => {
            plantilla += `  
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
        report__container.innerHTML = plantilla;
    }
})
const queryAboutTable1 = document.querySelector("#queryAboutTable1");
queryAboutTable1.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable1.children
    if (!report__container.innerHTML) {
        let data = await getClientsAndEmployeesNames();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `  
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
        report__container.innerHTML = plantilla;
    }
})
const queryAboutTable2 = document.querySelector("#queryAboutTable2");
queryAboutTable2.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable2.children
    if (!report__container.innerHTML) {
        let data = await getClientsWhoMadePayment();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
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
        report__container.innerHTML = plantilla;
    }
})
const queryAboutTable3 = document.querySelector("#queryAboutTable3");
queryAboutTable3.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable3.children
    if (!report__container.innerHTML) {
        let data = await getClientsWhoNotMadePayment();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
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
        report__container.innerHTML = plantilla;
    }
})
const queryAboutTable4 = document.querySelector("#queryAboutTable4");
queryAboutTable4.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable4.children
    if (!report__container.innerHTML) {
        let data = await getClientsWhoMadePaymentsAndTheyCity();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
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
        report__container.innerHTML = plantilla;
    }
})
const queryAboutTable5 = document.querySelector("#queryAboutTable5");
queryAboutTable5.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable5.children
    if (!report__container.innerHTML) {
        let data = await getClientsWhoDidntMadePaymentsAndTheyCity();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
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
        report__container.innerHTML = plantilla;
    }
})
const queryAboutTable6 = document.querySelector("#queryAboutTable6");
queryAboutTable6.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable6.children
    if (!report__container.innerHTML) {
        let data = await getOfficeAddressOfClientsFromFuenlabrada();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
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
        report__container.innerHTML = plantilla;
    }
})
const queryAboutTable7 = document.querySelector("#queryAboutTable7");
queryAboutTable7.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable7.children
    if (!report__container.innerHTML) {
        let data = await getClientsEmploy();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
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
        report__container.innerHTML = plantilla;
    }
})
const queryAboutTable8 = document.querySelector("#queryAboutTable8");
queryAboutTable8.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable8.children
    if (!report__container.innerHTML) {
        let data = await getEmployeesWithBoss();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Datos</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre los empleados: </b>${val.employees}</p>
                        <p><b>Nombre del jefe </b>${val.nameBoss}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
const queryAboutTable9 = document.querySelector("#queryAboutTable9");
queryAboutTable9.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable9.children
    if (!report__container.innerHTML) {
        let data = await getEmployeesWithBosses();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
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
        });
        report__container.innerHTML = plantilla;
    }
})
const queryAboutTable10 = document.querySelector("#queryAboutTable10");
queryAboutTable10.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable10.children
    if (!report__container.innerHTML) {
        let data = await clientsWhoReceivedTheirRequestLate();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Cliente ${val.client_code}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                    <p><b>Nombre del cliente: </b>${val.client_name}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
const queryAboutTable11 = document.querySelector("#queryAboutTable11");
queryAboutTable11.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable11.children
    if (!report__container.innerHTML) {
        let data = await lisOfProductRangesPurchasedByClient();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
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
        report__container.innerHTML = plantilla;
    }
})
