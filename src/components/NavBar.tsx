
import { IoCartOutline } from "react-icons/io5";
function NavBar({setMostrarCarrito}){
    return(
        <nav className="px-5 py-3 flex items-center justify-between border-b-2">
            <h2 className="text-orange-500 font-bold">Rappi</h2>

            <IoCartOutline onClick={()=>setMostrarCarrito(true)} size={30} className="cursor-pointer" color="orange" />

        </nav>
    )
}

export default NavBar;