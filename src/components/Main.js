import "../styles/Main.scss"
import Card from "./Card"
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState, useEffect } from "react";



const Main=()=>{
    const [modo, setModo]=useState("modo-claro");

    const onChangeModo = (modo) => {
      setModo(modo);
    };

    const [producto, setProductos]=useState([]);
    const [valorInput, setValorInput]=useState("");
    const [busqueda, setBusqueda]=useState("");
    const [loading, setLoading]=useState(false)
useEffect(()=>{
  setLoading(true);
  fetch (`https://api.mercadolibre.com/sites/MLA/search?q=${busqueda}`)
  .then((res) => res.json())
  .then((data) => {
    setProductos(data.results);
    setLoading(false);
  });
}, [busqueda]);

const handleChange = (e) => {
  setValorInput(e.target.value);
};

const handleClick = () => {
  setBusqueda(valorInput);
};

    return(
    <div className={modo}>
        <Navbar modoInicial={modo} onChangeModo={onChangeModo}/>
        <div>
      {loading && <h1>CARGANDO</h1>}
      <h2>Buscar: {valorInput}</h2>
      <input type="text" onChange={handleChange}></input>
      <button onClick={handleClick}>Buscar</button>
    </div>
        <div className={`container-tarjetas ${modo}`} >
        {producto.map((producto)=><Card
        title={producto.title}
        img={producto.thumbnail}
        /> 
        )}
       
        </div>
        <Footer/>
        </div>
    )
}

export default Main;
