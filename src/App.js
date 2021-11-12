import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import { useState, useEffect } from "react";

import Nav from "./components/Nav";

function App() {
  const [cart, setCart] = useState([
    { id: 1, title: "test1", price: 5, amount: 3 },
    { id: 9, title: "test2", price: 15, amount: 1 },
  ]);

  useEffect(() => {
    console.log(cart);
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
            <HomePage />
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
