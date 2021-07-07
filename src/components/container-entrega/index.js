
export default function ContainerEntrega(props) {
    return (
        <li className='list-group-item' value={props.dados.id_entrega}>
            <p>Nome cliente: {props.dados.nome_cl}</p>
            <p>Data de entrega: {props.dados.data_entrega}</p>
            <p>Endereço cliente: {props.dados.end_cl}</p>
            <p>Endereço mercadoria: {props.dados.end_mer}</p>
        </li>
    )
}