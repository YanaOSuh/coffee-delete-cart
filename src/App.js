import { useState } from 'react';
import { data } from './data';
import './App.css';
import cartBG from './menu-bg.jpg';

function App() {
  
  const [coffee, setCoffee] = useState(data);
  const removeCoffee = (id) => {
    let newCoffeeCart = coffee.filter(element => element.id !==id);
    setCoffee(newCoffeeCart);
  }

  return (
    <section className='cartSection'>
    <div className='coffeeCartImage'>
      <img src={cartBG} alt='cup of coffee layout'/>
    </div>

    <div className='coffeeCartHeader'>
      <div className='coffeeCartHeader__container'>
        <h2>Order drinks to go</h2>
        <p>Skip the line</p>
      </div>
    </div>

    <div className='coffeeCart'>
      <div className='coffeeCart__сontainer'>
        <div className='coffeeCart__list'>
          {coffee.map((item => {
          const {type, image, description, price, id} = item;

          return (
            <div className='container' key={id}>
            <div className='container_cart'>
              <div className='coffeePic'>
                <img src={image} alt='coffee cup' width='200px'/>
              </div>
              <div className='coffeeInfo'>
                <h3>{type}</h3>
                <p className='coffeeDescription'>{description}</p>
                <p className='coffeePrice'>{price}</p>
                <div className='deleteCoffeeBtn'>
                  <button onClick={() => removeCoffee(id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="trashIcon" viewBox="0 0 16 16">
                      <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            </div>)
        }))}
        </div>
        <div className='coffeeCart__deleteAllBtn'>
          <button className='deleteAllBtn' onClick={() => setCoffee([])}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart-x" viewBox="0 0 16 16">
            <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793z"/>
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
          </svg>
            Clear cart
          </button>
        </div>
      </div>
    </div>

    </section>
  );
}

export default App;
