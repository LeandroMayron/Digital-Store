

const NavBar = () => {
  
  return (
    <nav className="w-7xl m-auto md:invisible lg:visible xl:visible 2xl:visible">
      <ul className="flex w-md p-4 mx-10 justify-around items-center">
        <li>
          <a
            className="relative text-dark-gray-2 font-medium after:content-[''] after:absolute after:-bottom-1 after:right-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:after:right-auto hover:after:left-0 hover:text-primary"
            href=""
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="relative text-dark-gray-2 font-medium after:content-[''] after:absolute after:-bottom-1 after:right-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:after:right-auto hover:after:left-0 hover:text-primary"
            href=""
          >
            Categorias
          </a>
        </li>
        <li>
          <a
            className="relative text-dark-gray-2 font-medium after:content-[''] after:absolute after:-bottom-1 after:right-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:after:right-auto hover:after:left-0 hover:text-primary"
            href=""
          >
            Meus Pedidos
          </a>
        </li>
        <li>
          <a
            className="relative text-dark-gray-2 font-medium after:content-[''] after:absolute after:-bottom-1 after:right-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:after:right-auto hover:after:left-0 hover:text-primary"
            href=""
          >
            Produtos
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
