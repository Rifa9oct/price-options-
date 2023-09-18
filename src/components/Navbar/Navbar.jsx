import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';
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
        <nav className="p-10 text-black bg-yellow-200 ">
            <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true? <AiOutlineClose></AiOutlineClose>:<AiOutlineMenu></AiOutlineMenu>
                }
            </div>


            {/* <AiOutlineMenu className="text-3xl md:hidden"></AiOutlineMenu> */}
            <ul className={`md:flex absolute md:static bg-yellow-200 duration-1000 px-6  rounded ${open? "top-20":"-top-60"} pb-3`}>
                {
                    routes.map(route => <Link key={routes.id} route={route}></Link>)
                }
            </ul> 
        </nav>
    );
};

export default Navbar;