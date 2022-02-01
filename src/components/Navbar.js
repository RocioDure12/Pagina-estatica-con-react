import "../styles/Navbar.scss"
import Button from "./Button"

const Navbar=()=>{
    return (
        <nav className="nav-bar">
            <li><a>Home</a></li>
            <li><a>Shop</a></li>
            <li><a>Magazine</a></li>
            <Button/>
        </nav>
    )
}
export default Navbar;