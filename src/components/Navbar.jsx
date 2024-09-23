import React from "react";

function Navbar({ currentUser, handleMenuChange }) {
  return (
    <>
      <div className="navbar">
        <div className="navtab" onClick={() => handleMenuChange('Breakfast')}>
          Breakfast
        </div>
        <div className="navtab" onClick={() => handleMenuChange('Lunch')}>
          Lunch
        </div>
        <div className="navtab" onClick={() => handleMenuChange('Dinner')}>
          Dinner
        </div>
      </div>
      <div className="profileNav">
        <p>Logged In: <br />
          <span style={{ color: 'peru' }}>{currentUser.email}</span>
        </p>
        {currentUser.isLoggedIn ? <button>Log Out</button> : <button>Sign In</button>}
      </div>
    </>
  );
}

export default Navbar;

