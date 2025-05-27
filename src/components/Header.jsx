import logoHedeader from '../assets/logo-header.svg';
import 'primeicons/primeicons.css'

const Header = () => {
    return (
        <header>
            <img src={logoHedeader} alt="Digital Store" />
            <form>
                <input type="text" id="pesquisa" name="pesquisa" placeholder='pesquisar produtos' className='pi pi-search'/>
            </form>
        </header>
    )
}

export default Header;