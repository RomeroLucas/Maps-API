import { useState } from 'react'

//import Estilo dor formulário
import './style.css'

//import de funções
import { cadastrar } from '../../scripts'

export default function FormG(props) {
    //props que define como a tabela sera criada
    let owner = props.owner
    
    
    //captura dados dos inputs e joga no objeto dados
    const [dados, setDados] = useState({})

    const handleChange = ({target}) => {
        let {id, value} = target
        setDados({...dados, [id]: value})
    }
    
    //envia os dados cadastrados para o reducer
    const handleClick = (e) => {
        e.preventDefault()
        cadastrar(owner, dados)
    }

    return (
        <form className='formulario-geral'>
            <div className='mb-3'>
                <h3>Cadastro de {owner}</h3>
            </div>

            <div className='mb-3'>
                <label htmlFor={props.columnNome} className='form-label'>Nome </label>
                <input onChange={handleChange} id={props.columnNome} className='form-control' placeholder={`Insira o nome ${owner}`} />
            </div>

            <div className='mb-3'>
                <label htmlFor={props.columnEnd} className='form-label'>End</label>
                <input onChange={handleChange} id={props.columnEnd} className='form-control' placeholder={`Insira o endereço ${owner}`} />
            </div>

            <div className='mb-3'>
                <button onClick={handleClick} className='btn btn-success'>CADASTRAR</button>
            </div>
        </form>
    )
}