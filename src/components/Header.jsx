import logoHedeader from '../assets/logo-header.svg';

const Header = () => {
    return (
        <header>
            <img src={logoHedeader} alt="Digital Store" />
            <form>
                <input type="text" id="pesquisa" name="pesquisa" placeholder='pesquisar produtos'/>
                <img src="../assets/Search.png" alt="seach" />
            </form>
        </header>
    )
}

export default Header;