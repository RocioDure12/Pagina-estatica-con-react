import "../styles/Navbar.scss"
import Button from "./Button"
import { useState } from "react";

const Navbar=({modoInicial, onChangeModo})=>{
     
    const [modo, setModo] = useState(modoInicial);

    const changeModo = ()=>{
        const changedModo = modo == 'modo-oscuro' ? 'modo-claro' : 'modo-oscuro';
        setModo(changedModo);
        onChangeModo(changedModo);
    };

    return (
        <nav className="nav-bar">
            <li><a>Home</a></li>
            <li><a>Shop</a></li>
            <li><a>Magazine</a></li>
            <Button onClick={changeModo}  >{modo == 'modo-oscuro' ? `Modo claro` : `Modo oscuro`}</Button>
        </nav>
    )
}
export default Navbar;