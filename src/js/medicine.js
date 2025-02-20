import { v4 as uuidv4 } from "uuid";

class Medicine {
  constructor(name, id, manufacturer, date, quantity) {
    this.id = id || uuidv4();
    this.name = name;
    this.manufacturer = manufacturer;
    this.date = date;
    this.quantity = quantity;
  }
}

export default Medicine;
