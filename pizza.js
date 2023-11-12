const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const orderedPizza = {};

function checkOrderName(orderName) {
  if ([vegetarian, hawaiian, pepperoni].includes(orderName)) {
    document.getElementById("element1").removeAttribute("hidden");
    document.getElementById("element2").removeAttribute("hidden");

    return `How many ${orderName}s do you want?`;
  } else {
    return "not valid pizza";
  }
}

function buy() {
  orderedPizza.pizza = document.getElementById("pizzaOrder").value;

  document.getElementById("validPizza").innerHTML = checkOrderName(
    orderedPizza.pizza
  );
}

function completedOrder() {
  const pizzaPrice = 80;
  const orderQuantity = document.getElementById("element1").value;

  const price = totalCost(orderQuantity, pizzaPrice);
  const output = cookingTime(orderQuantity, price);

  document.getElementById("finalOrder").innerHTML = output;
}

function totalCost(orderQuantity, pizzaPrice) {
  return orderQuantity * pizzaPrice;
}

function cookingTime(orderQuantity, price) {
  if (orderQuantity <= 2) {
    return (
      "Great, I'll get started on your " +
      orderedPizza.pizza +
      " right away, it will cost " +
      price +
      " kr & the pizzas will take 10 minutes."
    );
  } else if (orderQuantity <= 5) {
    return (
      "Great, I'll get started on your " +
      orderedPizza.pizza +
      " right away, it will cost " +
      price +
      " kr & the pizzas will take 15 minutes."
    );
  } else if (orderQuantity >= 6) {
    return (
      "Great, I'll get started on your " +
      orderedPizza.pizza +
      " right away, it will cost " +
      price +
      " kr & the pizzas will take 20 minutes."
    );
  }
}
