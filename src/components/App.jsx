import React, { useState } from "react";
import Navbar from './Navbar'; 
import './App.css';

const App = () => {
  const [user, setUser] = useState({
    name: "Madame President ",
    email: "madamepresident@gmail.com",
    isLoggedIn: false,
  });

  const [menu, setMenu] = useState("Breakfast");

  const handleUserChange = () => {
    console.log(`User [BEFORE]: ${JSON.stringify(user)}`);
    setUser((prevUser) => ({
      ...prevUser,
      isLoggedIn: true,
    }));
    console.log(`User [AFTER]: ${JSON.stringify(user)}`);
  };

  const breakfastMenu = {
    food: [
      { name: "Turkey-sausage", image: "https://divascancook.com/wp-content/uploads/2012/08/IMG_7731.jpg" },
      { name: "Eggs", image: "https://photos.bigoven.com/recipe/hero/scrambled-eggs-13.jpg?h=300&w=300" },
      { name: "Oatmeal", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9g47ZCigFb-AIXq-Vt6J-BjGIEHoFzexm8g&s" },
    ],
    drinks: [
      { name: "Orange Juice", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7A--8s6hcS6TFD-CYHIrtufpB998DRKNEYQ&s" },
      { name: "Apple Juice", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbEAQ8rZCh_yspROsSUrh-yp8hotalBILaXQ&s" },
      { name: "Grape Juice", image: "https://as1.ftcdn.net/v2/jpg/02/45/69/94/1000_F_245699448_RKQRxCSEzxnmOAINCRosfLYHxkiO3bRL.jpg" },
    ]
  };

  const lunchMenu = {
    food: [
      { name: "Veggie-Stirfry", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTmilliQTiKd9yTYBWwZtAhpLTcsMxgDzYmA&s" },
      { name: "Egg Foo Young", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKmw059UYVLJCS0Tya5eiMlGjZ5htDtOMX4Q&s" },
      { name: "Pasta", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fads02mGVQ7LrLadFr3vJwsEBLEoRNzEJg&s" },
    ],
    drinks: [
      { name: "Canada Dry", image: "https://i5.walmartimages.com/seo/Canada-Dry-Ginger-Ale-Soda-12oz-Cans-Quantity-of-36_74e3f5cd-f5d7-4153-8b4a-96a07b75297e.b8f1a08a710b2f27be55a6cc48440e5e.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF" },
      { name: "Vernors", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_hIqtsrUrXO0Ony5t_4bknBGv_68nWDyqRQ&s" },
      { name: "Schweppes", image: "https://ip.prod.freshop.retail.ncrcloud.com/resize?url=https://images.freshop.ncrcloud.com/00078000019889/476abeef6906b0dea23cc90a295d9098_large.png&width=256&type=webp&quality=80" },
    ]
  };

  const dinnerMenu = {
    food: [
      { name: "Lasagna", image: "https://bigoven-res.cloudinary.com/image/upload/f_auto,q_auto/t_recipe-256/jeanettes-lasagna-f15855.jpg" },
      { name: "Chicken Parmesan", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_NJbi6do9_LN_VxlN_iIN4Ldb5DdDDOfNgg&s" },
      { name: "Rack of Lamb", image: "https://photos.bigoven.com/recipe/hero/rack-of-lamb-with-mint-sauce-75b64d.jpg?h=300&w=300" },
    ],
    drinks: [
      { name: "Wine", image: "https://images.stockcake.com/public/1/7/b/17b98a28-8414-4f22-bae3-ee2b82306e0f_medium/pouring-red-wine-stockcake.jpg" },
      { name: "Champagne", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5TAt_m5LpgBrveX93IY_q_fXAvDQQUzVqEA&s" },
      { name: "Tequila", image: "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00674545000827/ec0bdaef0e7d37eb395630a18015568d_large.png&width=256&type=webp&quality=80" },
    ]
  };

  const handleMenuChange = (selectedMenu) => {
    setMenu(selectedMenu);
  };

  const renderMenu = () => {
    let currentMenu;
    switch (menu) {
      case "Breakfast":
        currentMenu = breakfastMenu;
        break;
      case "Lunch":
        currentMenu = lunchMenu;
        break;
      case "Dinner":
        currentMenu = dinnerMenu;
        break;
      default:
        currentMenu = breakfastMenu;
    }

    return (
      <div>
        <h3>{menu} Menu</h3>
        <ul>
          {currentMenu.food.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
        <ul>
          {currentMenu.drinks.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="App">
      <Navbar currentUser={user} />

      <div className="menu-container">
        <button onClick={() => handleMenuChange('Breakfast')}>Breakfast</button>
        <button onClick={() => handleMenuChange('Lunch')}>Lunch</button>
        <button onClick={() => handleMenuChange('Dinner')}>Dinner</button>
      </div>

      {renderMenu()}

      <div className="user-info">
        <p>Currently Logged In: {user.name}</p>
        <button onClick={() => setUser({ ...user, isLoggedIn: false })}>Log Out</button>
      </div>
    </div>
  );
};

export default App;
