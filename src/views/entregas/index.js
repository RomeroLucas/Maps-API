import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import axios from 'axios'

//import de components
import ContainerEntrega from "../../components/container-entrega"

import { url } from "../../scripts"
import { headers } from "../../scripts"
import './style.css'

export default function Entregas() {
    const [list, setList] = useState(false)

    useEffect(() => {
        axios.get(`${url}/entregas`)
        .then(response => setList(response.data) )
    }, [])

    let history = useHistory()
    let dispatch = useDispatch()
    const handleClick =  (e) => {
        axios.get(`${url}/entregas?id=${e.target.value}`, headers)
            .then(response => response.status === 200 
                ? dispatch({type: 'LOAD_ENTREGA', payload: response.data[0]})
                : alert('Por favor tente novamente'))
            .then(history.push('/rota-entrega'))  
    }

    return (
        <main className='entregas'>
            <div className='mb-3'>
                <h3>Lista de entregas</h3>
            </div>

            <ul>
                {list ? list.map(item => 
                <span onClick={handleClick} key={item.id_entrega} value={item.id_entrega}>
                <ContainerEntrega dados={item} className='list-group-item' /> 
                </span>)
                : <p>Nenhuma entrega cadastrada</p>}
            </ul>
        </main>
    )
}