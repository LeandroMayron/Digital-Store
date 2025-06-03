import logoHedeader from '../assets/logo-header.svg';
import 'primeicons/primeicons.css'
import {IconField} from 'primereact/iconfield';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';





const Header = () => {


    return (
        <header className='flex justify-around items-center'>
            <img src={logoHedeader} alt="Digital Store" />


                <IconField className='pi pi-search' id="icon" name="icon">
                    <InputText className='w-100 bg-light-gray-3 rounded-md p-2' id="pesquisa" name="pesquisa" placeholder='pesquisar produtos' />
                </IconField>
             <a className='underline text-dark-gray-2' href="">Cadastre-se</a>
             <Button className='w-30 h-8 bg-primary rounded text-light-gray-3 font-bold' label='Entrar'/>
        </header>
    )
}

export default Header;