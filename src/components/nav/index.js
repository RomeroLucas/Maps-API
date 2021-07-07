import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav className='navbar navbar-light bg-light' style={{width: '100%', height: '10vh', position: 'fixed', top: "0", left: "0", zIndex: '999'}}>
            <Link className='navbar-brand' to='/'>HOME</Link>
            <Link className='navbar-brand' to='/entregas'>ENTREGAS</Link>
        </nav>
    )
}