import { getOfficesByCode } from "./offices.js";
import { getClientByEmployeeCode } from "./clients.js"

export const getEmployByCode = async (code) => {
    let res = await fetch(`http://localhost:5502/employees?employee_code=${code}`);
    let dataEmployee = await res.json();
    return dataEmployee
}
export const getEmployByCode2 = async (code) => {
    let res = await fetch(`http://localhost:5502/employees?employee_code=${code}`);
    let dataEmployee = await res.json();
    let [dir] = dataEmployee
    return dir
}
export const getEmployByBossCode = async (code) => {
    let res = await fetch(`http://localhost:5502/employees?code_boss=${code}`)
    let data = await res.json();
    return data
}
export const getNameByEmployeeCode = async (code) => {
    let res = await fetch(`http://localhost:5502/employees?employee_code=${code}`)
    let data = await res.json()
    const [dir] = data
    const { name } = dir
    return name
}
export const getEmployeeByOfficeCode = async (code) => {
    let res = await fetch(`http://localhost:5502/employees?code_office=${code}`)
    let data = await res.json()
    return data
}
// 3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7.
export const getAllNameSurnamesAndEmailInCargeOfBossSeven = async () => {
    let res = await fetch("http://localhost:5502/employees?code_boss=7")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        let [email] = val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)
        dataUpdate.push({
            nombre: val.name,
            apellidos: val.lastname1 + ' ' + val.lastname2,
            email
        })
    })
    return dataUpdate;
}
// 4. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa.
export const getBossesFullnameAndEmail = async () => {
    let res = await fetch("http://localhost:5502/employees")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        let [email] = val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)
        if (val.code_boss == null) {
            dataUpdate.push({
                puesto: val.position,
                nombre: val.name,
                apellidos: val.lastname1 + ' ' + val.lastname2,
                email
            })
        }
    })
    return dataUpdate;
}
// 5. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas.
export const getAllEmployees = async () => {
    let res = await fetch("http://localhost:5502/employees?position_ne=Representante Ventas")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            nombre: val.name,
            apellidos: `${val.lastname1} ${val.lastname2}`,
            puesto: val.position
        })
    })
    return dataUpdate
}
//Consultas Multitabla(interno)
//8.Devuelve un listado con el nombre de los empleados junto con el nombre de sus jefes.
export const getEmployeesWithBoss = async () => {
    let res = await fetch(`http://localhost:5502/employees`)
    let employees = await res.json()
    let bosses = []
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].code_boss !== null) {
            let existingBoss = bosses.find(boss => boss.boss === employees[i].code_boss);
            if (existingBoss) {
                existingBoss.employees.push(employees[i].name);
            } else {
                bosses.push({
                    boss: employees[i].code_boss,
                    nameBoss: await getNameByEmployeeCode(employees[i].code_boss),
                    employees: [employees[i].name]
                });
            }
        }
    }
    let bossesWithoutCode = bosses.map(boss => ({ nameBoss: boss.nameBoss, employees: boss.employees }));
    return bossesWithoutCode;
}
//9. Devuelve un listado que muestre el nombre de cada empleados, el nombre de su jefe y el nombre del jefe de sus jefe.
export const getEmployeesWithBosses = async () => {
    let res = await fetch(`http://localhost:5502/employees`)
    let employees = await res.json()
    let bosses = []

    for (let i = 0; i < employees.length; i++) {
        let jefeDelJefe = 'No tiene'
        let {
            extension,
            email,
            code_office,
            position,
            id,
            ...employeeData
        } = employees[i]
        if (!(employeeData.code_boss == null)) {
            let dataBoss = await getEmployByCode2(employeeData.code_boss);
            if (dataBoss.code_boss) {
                jefeDelJefe = await getNameByEmployeeCode(dataBoss.code_boss)
            }
            bosses.push({
                NombreDelTrabajador: employeeData.name,
                NombreDelJefe: await getNameByEmployeeCode(employeeData.code_boss),
                jefeDelJefe
            })
        }
    }
    return bosses
}
//Multitabla Composicion externa
// 4. Devuelve un listado que muestre solamente los empleados que no tienen una oficina asociada.
// getOfficesByCode

export const getEmployeesWithoutOffice = async () => {
    let res = await fetch("http://localhost:5502/employees")
    let employees = await res.json()
    let data = []
    for (let employee of employees) {
        const offices = await getOfficesByCode(employee.code_office)
        if (!offices.length) {
            data.push({
                code: employee.employee_code,
                name: employee.name
            })
        }
    }
    return data
}
//nota: Todos los empleados del json tienen una oficina asociada pero ya se hizo un test cambiando la asociacion de una oficina a null y funciona
// 5. Devuelve un listado que muestre solamente los empleados que no tienen un cliente asociado.
export const getEmployeesWithoutClients = async () => {
    let res = await fetch("http://localhost:5502/employees")
    let employees = await res.json()
    let data = []
    for (let employee of employees) {
        const clients = await getClientByEmployeeCode(employee.employee_code)
        if (!clients.length) {
            data.push({
                code: employee.employee_code,
                name: employee.name
            })
        }
    }
    return data
}
// 6. Devuelve un listado que muestre solamente los empleados que no tienen un cliente asociado junto con los datos de la oficina donde trabajan.
export const getEmployeesWithoutClientsAndTheirOffices = async () => {
    const res = await fetch("http://localhost:5502/employees");
    const employees = await res.json();
    const data = [];

    for (const employee of employees) {
        const clients = await getClientByEmployeeCode(employee.employee_code);
        const offices = await getOfficesByCode(employee.code_office);

        if (clients.length === 0 && offices && offices.length > 0) {
            const matchingOffice = offices.find(office => office.code_office === employee.code_office);
            if (matchingOffice) {
                data.push({
                    code: employee.employee_code,
                    name: employee.name,
                    office: matchingOffice
                });
            }
        }
    }

    return data;
}

// 7. Devuelve un listado que muestre los empleados que no tienen una oficina asociada y los que no tienen un cliente asociado.
export const getEmployeesWithoutOfficeAndWithoutClients = async () => {
    let res = await fetch("http://localhost:5502/employees")
    let employees = await res.json()
    let data = []
    for (let employee of employees) {
        const clients = await getClientByEmployeeCode(employee.employee_code)
        const offices = await getOfficesByCode(employee.code_office)
        if (!clients.length || !offices.length) {
            data.push({
                code: employee.employee_code,
                name: employee.name
            })
        }
    }
    return data
}
// 12. Devuelve un listado con los datos de los empleados que no tienen clientes asociados y el nombre de su jefe asociado.
export const getEmployeesWithoutClientsAndTheirBosses = async () => {
    let res = await fetch("http://localhost:5502/employees")
    let employees = await res.json();
    let data = []
    for (let employee of employees) {
        const clients = await getClientByEmployeeCode(employee.employee_code)
        if (employee.code_boss) {
            var name_boss = await getNameByEmployeeCode(employee.code_boss)
        } else if (employee.cpde_boss == null) {
            name_boss = "No tiene"
        }
        if (!clients.length) {
            data.push({
                name: employee.name,
                boss_name: name_boss
            })
        }
    }
    return data
}