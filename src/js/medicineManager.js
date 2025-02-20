import Medicine from "./medicine.js";

class MedicineManager {
  static medicinesInventory =
    JSON.parse(localStorage.getItem("medicines-inventory")) || [];

  static addMedicine(name, id, manufacturer, date, quantity) {
    let medicine = new Medicine(name, id, manufacturer, date, quantity);
    console.log(medicine);

    this.medicinesInventory.push(medicine);
    this.storeMedicines(this.medicinesInventory);
    console.log(this.medicinesInventory);
  }

  static storeMedicines(inventory) {
    localStorage.setItem("medicines-inventory", JSON.stringify(inventory));
  }
}

export default MedicineManager;
