import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

const [pizzas, setPizzas] = useState([])
const [editPizza, setEditPizza] = useState([])

useEffect(() => {
  fetch("http://localhost:3001/pizzas")
  .then((res) => res.json())
  .then((pizzaData) => setPizzas(pizzaData))
}, [])

  const clickEditButton = (editedPizza) => {
    const newPizza = pizzas.find((pizza) => pizza.id === editedPizza)
    setEditPizza(newPizza)
  } 

  const updateOurPizzaList = (newPizza) => {
    const newPizzaList = pizzas.map((p) => {
      if (p.id === newPizza.id) {
        return newPizza;
      } else {
        return p;
      }
    })
    setPizzas(newPizzaList)
  }

  return (
    <>
      <Header />
      <PizzaForm 
      {...editPizza} 
      setEditPizza={setEditPizza}
      updateOurPizzaList={updateOurPizzaList}
      />
      <PizzaList 
      pizzas={pizzas} 
      handleClick={clickEditButton} />
    </>
  );
}

export default App;
