import logoHedeader from '../assets/logo-header.svg';
import 'primeicons/primeicons.css'


const Header = () => {
    return (
        <header className='flex justify-around items-center'>
            <img src={logoHedeader} alt="Digital Store" />
            <form>
                <input type="text" id="pesquisa" name="pesquisa" placeholder='pesquisar produtos' className=' pi pi-search p-1 flex align-center border-1 rounded'/>
                
            </form>
        </header>
    )
}

export default Header;