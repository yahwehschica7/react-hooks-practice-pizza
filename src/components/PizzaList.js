import React from "react";
import Pizza from "./Pizza";

function PizzaList({pizzas, handleClick}) {

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          pizzas.map((p) => {
            return <Pizza key={p.id} {...p} handleClick={handleClick} />
          })
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
