import "../styles/Card.scss"

const Card = ({ title, type, price, img, isAvailable, onSale }) => {
    return (
        <div className="card-container">
            <div className="card">
                <img src={img}></img>
                <h1>{title}</h1>
                <p>{type}</p>
                <p>{price}</p>


                {isAvailable === false ?? <h1 className='subrayado'>{title}</h1> : <h1>{title}.textContent="On Sale"</h1>}

            </div>
        </div>
    )
}

export default Card;