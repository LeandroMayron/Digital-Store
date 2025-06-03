import logoHedeader from '../assets/logo-header.svg';
import 'primeicons/primeicons.css'
import {IconField} from 'primereact/iconfield';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';





const Header = () => {


    return (
        <>
            <header className='m-10 flex justify-evenly items-center '>
                <img src={logoHedeader} alt="Digital Store" />
                    <IconField>
                        <InputText className='w-100 h-12 bg-light-gray-3 rounded-l-md p-2' id="pesquisa" name="pesquisa" placeholder='pesquisar produtos' />
                        <button className='w-12 h-12 mt-2 mb-2 bg-light-gray-3  rounded-r-md'>
                            <i className='pi pi-search text-dark-gray-2 '></i>
                        </button>
                    </IconField>
                <a className='underline text-dark-gray-2' href="">Cadastre-se</a>
                <Button className='w-30 h-10 bg-primary rounded text-light-gray-3 font-bold' label='Entrar'/>
                <i className='pi pi-shopping-cart text-xl text-primary cursor-pointer size' label='Carrinho'></i>
            </header>
            
        </>
    )
}

export default Header;