
import {
    getClientsEmploy,
    getClientsAndEmployeesNames,
    getClientsWhoMadePayment,
    getClientsWhoNotMadePayment,
    getClientsWhoMadePaymentsAndTheyCity,
    getOfficeAddressOfClientsFromFuenlabrada,
    getClientsWhoDidntMadePaymentsAndTheyCity
} from "./module/clients.js";
import{
    getEmployeesWithBoss,
    getEmployeesWithBosses
} from "./module/employees.js"
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
