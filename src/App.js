import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import Nav from "./components/Nav";

// Test IF LocalStorage is accessible
function isTest() {
  let test = "test";
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (isTest) {
      const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
      setCart(cartData);
    }
  }, []);

  useEffect(() => {
    if (isTest) {
      localStorage.setItem("cartData", JSON.stringify(cart));
    }
  });

  const upsert = (arr, element) => {
    const newArr = [...arr];
    const i = newArr.findIndex((_element) => _element.id === element.id);
    if (i > -1) newArr[i] = element;
    else newArr.push(element);
    return newArr;
  };

  const changeCart = (item) => {
    setCart((curr) => upsert(curr, item));
  };

  return (
    <>
      <BrowserRouter>
        <Nav cart={cart} setCart={setCart} />
        <Switch>
          <Route exact path="/">
            <HomePage cart={cart} changeCart={changeCart} />
          </Route>
          <Route path="/article/:id">
            <ArticlePage cart={cart} changeCart={changeCart} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
