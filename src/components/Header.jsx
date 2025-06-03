import logoHedeader from '../assets/logo-header.svg';
import 'primeicons/primeicons.css'
import {IconField} from 'primereact/iconfield';
import {InputText} from 'primereact/inputtext';
import {Menubar} from 'primereact/menubar';



const Header = () => {
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            command: () => { window.location.href = '/' }
        },
        {
            label: 'Produtos',
            icon: 'pi pi-fw pi-box',
            command: () => { window.location.href = '/produtos' }
        },
        {
            label: 'Sobre',
            icon: 'pi pi-fw pi-info-circle',
            command: () => { window.location.href = '/sobre' }
        },
        {
            label: 'Contato',
            icon: 'pi pi-fw pi-envelope',
            command: () => { window.location.href = '/contato' }
        }
    ];

    return (
        <header className='flex justify-around items-center'>
            <img src={logoHedeader} alt="Digital Store" />


                <IconField className='pi pi-search  text-gray-500' id="icon" name="icon">
                    <InputText className='border-2 border-gray-300 rounded-md p-2' id="pesquisa" name="pesquisa" placeholder='pesquisar produtos' />
                </IconField>
                
                <Menubar model={items}/>
            
        </header>
    )
}

export default Header;