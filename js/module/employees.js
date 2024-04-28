export const getEmployByCode = async (code) => {
    let res = await fetch(`http://localhost:5502/employees?employee_code=${code}`);
    let dataEmployee = await res.json();
    let [data] = dataEmployee
    return data
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
            let dataBoss = await getEmployByCode(employeeData.code_boss);
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



