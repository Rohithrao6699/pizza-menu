import "./App.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <>
      <header>
        <h1>Fast React Pizza Co.</h1>
      </header>
    </>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numpizza = pizzaData.length;
  return (
    <div className="menu">
      <h2>MENU</h2>
      {numpizza > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaobj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :</p>
      )}
    </div>
  );
}

function Pizza({ pizzaobj }) {
  return (
    <>
      <li className={`pizza ${pizzaobj.soldOut ? "SoldOut" : ""}`}>
        <img src={pizzaobj.photoName} alt={pizzaobj.name} />
        <div>
          <h3>{pizzaobj.name}</h3>
          <p>{pizzaobj.ingredients}</p>
          <span>{pizzaobj.soldOut ? "SOLD OUT" : `${pizzaobj.price} Rs`}</span>
        </div>
      </li>
    </>
  );
}

function Footer() {
  const date = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = date >= openHour && date <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          We are cirrently available between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ openHour, closeHour }) {
  return (
    <>
      <div className="order">
        <p>
          We are currently open between {openHour}:00 to {closeHour}:00. Come
          visit us or Order online.
        </p>
        <button className="btn">Order</button>
      </div>
    </>
  );
}

export default App;
