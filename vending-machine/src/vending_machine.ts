type DrinkType = "Milk" | "Cola" | "Beer";

type LogOptions = {
  status: "OK" | "NG";
  message: string;
};

const log = (options: LogOptions): void => {
  console.log(`${options.status} | ${options.message}`);
};

type Drinks = {
  drink: DrinkType;
  price: number;
  stock: number;
};

const drinks: Drinks[] = [
  {drink: "Milk", price: 120, stock: 0},
  {drink: "Cola", price: 150, stock: 0},
  {drink: "Beer", price: 220, stock: 0},
];

const display = () => {
  console.log("# Display drinks #");
  for (const d of drinks) {
    const soldOutMessage = d.stock === 0 ? "Sold out" : "";
    console.log(`${d.drink} | ${d.price} | ${soldOutMessage}`);
  }
};

const buy = (buyDrink: DrinkType, money: number) => {
  for (const d of drinks) {
    if (d.drink === buyDrink) {
      if (d.stock > 0) {
        if (money >= d.price) {
          d.stock -= 1;
          log({status: "OK", message: `${buyDrink} purchased`});
          return;
        } else {
          log({
            status: "NG",
            message: `Not enough paymentAmount for ${buyDrink}`,
          });
          return;
        }
      } else {
        log({status: "NG", message: `${buyDrink} is sold out`});
        return;
      }
    }
  }
  log({status: "NG", message: `${buyDrink} is not registerd`});
};

type refillType = {
  type: DrinkType;
  quantity: number;
};

const refill = (refillItems: refillType[]) => {
  for (const item of refillItems) {
    const target = drinks.find(d => d.drink === item.type);

    if (target) {
      target.stock += item.quantity;
      log({
        status: "OK",
        message: `${item.quantity} ${item.type} have been refilled`,
      });
    } else {
      log({status: "NG", message: `${item.type} is not registered`});
    }
  }
};

// Scenario
refill([
  {type: "Milk", quantity: 2},
  {type: "Beer", quantity: 3},
]);
display();
buy("Milk", 100);
buy("Milk", 200);
display();
buy("Cola", 200);
refill([
  {type: "Milk", quantity: 1},
  {type: "Cola", quantity: 2},
]);
display();
buy("Cola", 200);
display();
