import { AxiosAdapterImpl } from "./http/axios-adapter-impl.js";
import { Clients } from "./services/get-client-apadter-impl.js";
// const consultFunctionalProccess = async () => {
//     const client = new AxiosAdapterImpl();
//     let respone = await client.get('https://jsonplaceholder.typicode.com/todos/1');
//     console.log(respone);
// }
const consultClients = async () => {
    const axiosAdapter = new AxiosAdapterImpl();
    const client = new Clients(axiosAdapter);
    let respone = await client.getClient('https://jsonplaceholder.typicode.com/todos/1');
    console.log(respone);
};
// consultFunctionalProccess();
consultClients();
