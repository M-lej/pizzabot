const vegetarian = "Vegetarian Pizza";
const hawaiian = " Hawaiian Pizza";
const pepperoni = " Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:

alert(
  "Hey! Happy to serve your pizza. On our menu we have " +
    vegetarian +
    hawaiian +
    " and" +
    pepperoni
);

const orderName = prompt(
  "Enter the name of the pizza you want to order today."
);

const numberOfPizzas = checkOrderName();
const cost = totalCost(numberOfPizzas, pizzaPrice);
cookingTime(numberOfPizzas, cost);

function checkOrderName() {
  if ([vegetarian, hawaiian, pepperoni].includes(orderName)) {
    return prompt(`How many of ${orderName} do you want?`);
  } else {
    alert("not valid pizza");
  }
}

function totalCost(orderQuantity, pizzaPrice) {
  return orderQuantity * pizzaPrice;
}

function cookingTime(orderQuantity, totalCost) {
  if (orderQuantity <= 2) {
    alert(
      "Great, I'll get started on your " +
        orderName +
        " right away, it will cost " +
        totalCost +
        " kr & the pizzas will take 10 minutes."
    );
  } else if (orderQuantity <= 5) {
    alert(
      "Great, I'll get started on your " +
        orderName +
        " right away, it will cost " +
        totalCost +
        " kr & the pizzas will take 15 minutes."
    );
  } else if (orderQuantity >= 6) {
    alert(
      "Great, I'll get started on your " +
        orderName +
        " right away, it will cost " +
        totalCost +
        " kr & the pizzas will take 20 minutes."
    );
  }
}
