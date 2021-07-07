import { useState, useEffect } from 'react'
import axios from 'axios'
import { url } from '../../scripts'
//import Estilo dor formulário
import './style.css'

//import de funções
import { cadastrarEntrega } from '../../scripts'

export default function CadastroEntrega() {
    const [clientes, setClientes] = useState([])
    const [mercadorias, setMercadorias] = useState([])
    const [dados, setDados] = useState(false)

    //carrega tabelas de clientes e mercadorias
    useEffect(() => {
        //######## TROCAR PELA FUNÇÃO loadTables ########
        axios.get(`${url}/cliente`)
        .then(response => setClientes(response.data))

        axios.get(`${url}/mercadoria`)
        .then(response => setMercadorias(response.data))
    }, [])

    //função para coletar dados
    const handleChange = ({ target }) => {
        let {id, value} = target
        setDados({...dados, [id]: value})
    } 

    //função que registra no BD a entrega
    const handleClick = () => {
        if(dados.id_cl && dados.id_mer) {
            cadastrarEntrega(dados.id_cl, dados.id_mer)
        } else {
            alert('Por favor escolha um cliente e uma mercadoria antes de cadastrar a entrega')
        }
    }

    //exibe options na tela 
    const render = (renderType) => {
        if(renderType === 'clientes')
            return clientes.map(item => <option  value={item.id_cl} key={item.id_cl}>{item.nome_cl}</option>)
        else {
            return mercadorias.map(item => <option value={item.id_mer} key={item.id_mer}>{item.nome_mer}</option>)
        }
    }


    return (
        <form className='formulario-geral'>
            <div className='mb-3'>
                <h3>Cadastro de Entrega</h3>
            </div>

            <div className='mb-3'>
                <label className='form-label'>Escolha um cliente</label>
                <select id='id_cl' className='form-control' onChange={handleChange}>
                    <option>selecione</option>
                    {render('clientes')}
                </select>
            </div>

            <div className='mb-3'>
                <label className='form-label'>Escolha uma mercadoria</label>
                <select id='id_mer' className='form-control' onChange={handleChange}>
                    <option>selecione</option>
                    {render('mercadorias')}
                </select>
            </div>

            <div className='mb-3'>
                <button  className='btn btn-success' onClick={handleClick}>CADASTRAR ENTREGA</button>
            </div>

        </form>
    )
}