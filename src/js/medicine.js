import { v4 as uuidv4 } from "uuid";

class Medicine {
  constructor(name, manufacturer, date, quantity) {
    this.id = uuidv4();
    this.name = name;
    this.manufacturer = manufacturer;
    this.date = date;
    this.quantity = quantity;
  }
}

export default Medicine;
