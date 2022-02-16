import "../styles/Button.scss"

const Button=({children, onClick})=>{
    return(
        <button onClick={onClick}>{children}</button>
    
    )
}

export default Button;

