import { useState } from "react";
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';
import DaisyLink from "../DaisyLink/DaisyLink";
const Navbar = () => {
    const [open,setOpen] = useState(false);
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About Us' },
        { id: 3, path: '/products', name: 'Products' },
        { id: 4, path: '/contact', name: 'Contact Us' },
        { id: 5, path: '*', name: 'Not Found' }
      ];
      
    return (
        <nav className="p-10 text-black">
            <div className="text-2xl md:hidden hover:bg-gray-300 p-2 w-12 rounded" onClick={() => setOpen(!open)}>
                {
                    open === true? <AiOutlineClose></AiOutlineClose>:<AiOutlineMenu></AiOutlineMenu>
                }
            </div>


            {/* <AiOutlineMenu className="text-3xl md:hidden"></AiOutlineMenu> */}
            <ul className={`md:flex shadow-lg md:shadow-none absolute md:static px-6  rounded ${open? "top-24":"-top-60"} pb-3`}>
                {
                    routes.map(route => <DaisyLink key={routes.id} route={route}></DaisyLink>)
                }
            </ul> 
        </nav>
    );
};

export default Navbar;