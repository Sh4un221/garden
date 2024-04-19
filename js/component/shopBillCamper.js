// export const example = ()=>{
//     // let calculo =new Promise((resolve,reject)=>{
//     //     let suma = 0;
//     //     for(let i=0; i<5; i++){
//     //         suma+=i
//     //     }
//     //     reject(suma);
//     // }); //Estructura de promesa en el pasado
//     // calculo.then(res=>{
//     //     console.log(res);
//     // }).catch(res=>{
//     //     console.log(res);
//     // })

// }
export const getAllProductBill = async()=>{//forma moderna de la promesa
    let conexion=await fetch("http://localhost:5600/camper")
    let data= await conexion.json();
    return data
}