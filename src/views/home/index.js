
//import de componentes
import FormG from '../../components/forms/cadastroGeral'
import CadastroEntrega from '../../components/forms/cadastroEntrega'

import './style.css'

export default function Home() {
    return (
        <>
        <main className='homepage'>
            
            {/* Formulario de clientes */}
            <FormG owner='cliente' columnNome='nome_cl' columnEnd='end_cl' />

            {/* Formulario de mercadorias */}
            <FormG owner='mercadoria' columnNome='nome_mer' columnEnd='end_mer' />

            {/* Formulario de entregas */}
            <CadastroEntrega />
        </main>
        </>
    )
}