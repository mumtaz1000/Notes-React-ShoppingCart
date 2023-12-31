import React from "react";

function Header(props) {
  const { countCartItems } = props;
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>Small Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart{" "}
          {countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ) : (
            <></>
          )}
        </a>{" "}
        <a href="#/signin"> SignIn</a>
      </div>
    </header>
  );
}

export default Header;
