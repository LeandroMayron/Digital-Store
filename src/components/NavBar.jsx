

const NavBar = () => {
    return (
        <nav className="w-7xl m-auto">
            <ul className="flex w-md p-4 mx-10 justify-around items-center text-dark-gray-2">
                <li><a className="hover:underline decoration-primary decoration-2" href="">Home</a></li>
                <li><a className="hover:underline decoration-primary decoration-2" href="">Categorias</a></li>
                <li><a className="hover:underline decoration-primary decoration-2" href="">Meus Pedidos</a></li>
                <li><a className="hover:underline decoration-primary decoration-2" href="">Produtos</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;