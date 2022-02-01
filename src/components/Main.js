import "../styles/Main.scss"
import Card from "./Card"
import Navbar from "./Navbar";

const products = [
    {
      title: 'Coombes',
      type: "Lounge",
      price: 2600,
      rating: 4,
      img: 'https://i.imgur.com/ZAxMGG5.png',
      isAvailable: true,
      onSale: false,
    },
    {
      title: 'Keeve Set',
      type: "Table & Chairs",
      price: 590,
      rating: 4,
      img: 'https://i.imgur.com/tT8sFIs.jpeg',
      isAvailable: false,
      onSale: false,
    },
    {
      title: 'Nillè', 
      type: "Armchair",
      price: 950,
      rating: 5,
      img: 'https://i.imgur.com/Vx1cZY0.png', 
      isAvailable: false,
      onSale: true,
    },
    {
      title: 'Blanko', 
      type: "Side table",
      price: 90,
      rating: 4,
      img: 'https://i.imgur.com/N1Bf4ox.jpg',
      isAvailable: true,
      onSale: false,
    },
    {
      title: 'Momo', 
      type: "Shelves",
      price: 890,
      rating: 4,
      img: 'https://i.imgur.com/AlKxDE4.jpeg', 
      isAvailable: true,
      onSale: false,
    },
    {
      title: 'Penemillè', 
      type: "Chair",
      price: 120,
      rating: 4,
      img: 'https://i.imgur.com/pmANPjN.jpeg',
      isAvailable: true,
      onSale: false,
    },
    {
      title: 'Kappu', 
      type: "Shelves",
      price: 420,
      rating: 4,
      img: 'https://i.imgur.com/s2rsPa1.jpg',
      isAvailable: true,
      onSale: false,
    },
  ];

const Main=()=>{
    return(<div>
        <Navbar/>
        {products.map((products)=><Card
        title={products.title}
        img={products.img}
        price={products.price}
        type={products.type}
        isAvailable={products.isAvailable}
        onSale={products.onSale}
        /> 
        )}
       
        </div>
    )
}

export default Main;

/*<div>
{gatos.map((gato)=><Card
    title={gato.name}
    img={gato.img}
    descripcion={gato.shortDesc}
    contentButton={gato.name}/*/