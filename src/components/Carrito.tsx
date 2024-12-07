import { IoClose } from "react-icons/io5";
function Carrito({setMostrarCarrito}){
    return(
        <div className="w-[100%] flex justify-end h-screen bg-[rgba(0,0,0,0.5)]">
            <div className="bg-white flex gap-3 ">
                <h1>Tu canasta</h1>
                <IoClose onClick={()=>setMostrarCarrito(false)} className=""/>
            </div>
        </div>
    )
}

export default Carrito