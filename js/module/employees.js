// 3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7.
export const getAllNameSurnamesAndEmailInCargeOfBossSeven = async () => {
    let res = await fetch("http://localhost:5502/employees?code_boss=7")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val=>{
        let[email]=val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)
        dataUpdate.push({
            nombre:val.name,
            apellidos:val.lastname1+' '+val.lastname2,
            email
        })
    })
    return dataUpdate;
}
// 4. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa.
export const getBossesFullnameAndEmail= async () => {
    let res = await fetch("http://localhost:5502/employees")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val=>{
        let[email]=val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)
        if (val.code_boss==null){
            dataUpdate.push({
                puesto: val.position,
                nombre:val.name,
                apellidos:val.lastname1+' '+val.lastname2,
                email
            })
        }
    })
    return dataUpdate;
}
// 5. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas.
export const getAll=async()=>{
    let res=await fetch("http://localhost:5502/employees?position_ne=Representante Ventas")
    let data=await res.json();
    let dataUpdate=[];
    data.forEach(val=>{
        dataUpdate.push({
            nombre:val.name,
            apellidos:`${val.lastname1} ${val.lastname2}`,
            puesto:val.position
        })
    })
    return dataUpdate
}