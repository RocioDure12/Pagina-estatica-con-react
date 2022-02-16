import "../styles/Card.scss"


const Card = ({ title, type, price, img, isAvailable, onSale}) => {
    return (
        <div className="card-container">
            <div className="card">
                <img src={img}></img>
                {isAvailable === false ? 
                (<h1 className="subrayado">{title}</h1>) : 
                (<h1>{title} <span>"On Sale!"</span></h1>)}
                <p>{type}</p>
                <p>${price}</p>
               

            </div>
        </div>
    )
}

export default Card;