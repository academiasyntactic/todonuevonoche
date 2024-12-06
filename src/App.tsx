import { useEffect, useState } from "react"
import Card from "./components/Card";

function App() {
  const [productos, setProductos] = useState();
  const [carrito, setCarrito] = useState([]);

  // funcion para obtener los productos de la api
  const conseguirProductos = async () => {
    const respuesta = await fetch('https://fakestoreapi.com/products');
    const datos = await respuesta.json();
    console.log(datos)
    setProductos(datos)
  }

  // useEffect para poder conseguir que cada vez que cargue la pagina se ejecute la funcion de obtener productos
  useEffect(
    () => {
      conseguirProductos()
    }, []
  )

  return (
    <>
      <div style={{display:'flex', flexWrap:'wrap', gap:10}}>
        {
          // Primero, verificamos si hay productos y la longitud es mayor a 0
          productos && productos.length > 0 ?
            (
              // Luego, si hay, se imprimen con .map, props
              productos.map(
                (producto) => (
                  <Card producto={producto} carrito={carrito} setCarrito={setCarrito} />
                )
              )
            )
            :
            (
              <h1>No hay productos</h1>
            )
        }
      </div>
      <div className="carrito">
        {
          carrito.length > 0 ?
            (
              carrito.map(
                elemento => <h1>{elemento.title}</h1>
              )
            )
            :
            (
              <h1>No hay productos en el carrito</h1>
            )
        }
      </div>
    </>
  )
}

export default App