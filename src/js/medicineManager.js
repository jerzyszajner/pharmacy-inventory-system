import Medicine from "./medicine.js";

class MedicineManager {
  static medicinesInventory =
    JSON.parse(localStorage.getItem("medicines-inventory")) || [];

  static addMedicine(name, id, manufacturer, date, quantity) {
    let medicine = new Medicine(name, id, manufacturer, date, quantity);
    console.log(medicine);
    MedicineManager.medicinesInventory.push(medicine);
    console.log(MedicineManager.medicinesInventory);
  }
}

export default MedicineManager;
