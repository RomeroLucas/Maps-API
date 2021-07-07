import axios from 'axios'

//url da api usada no projeto
export const url = "http://localhost:4000"

//headers para envios de post no axios
export const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege...'
}

//função para cadastro de usuario/
//os valores de registeType e dados são enviados para o componente FormG via props
export function cadastrar(registerType, payload) {
    axios.post(`${url}/${registerType}`, payload, headers)
    .then(response => console.log(response))
}

export function cadastrarEntrega(cliente, mercadoria) {
    axios.post(`${url}/entregas/${cliente}/${mercadoria}`, headers)
    .then(response => console.log(response))
}


export function loadTables(tableName) {

    axios.get(`${url}/${tableName}`, headers)
    .then(response => { 
        response.status === 200 
        ? console.log(response.data)  
        : console.log('Por favor tente novamente')
    })
    
    
}