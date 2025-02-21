import Medicine from "./medicine.js";
import Ui from "./ui.js";

class MedicineManager {
  static medicinesInventory =
    JSON.parse(localStorage.getItem("medicines-inventory")) || [];

  static addMedicine(name, manufacturer, date, quantity) {
    let medicine = new Medicine(name, manufacturer, date, quantity);

    MedicineManager.medicinesInventory.push(medicine);
    MedicineManager.storeMedicines(MedicineManager.medicinesInventory);
  }

  static storeMedicines(inventory) {
    localStorage.setItem("medicines-inventory", JSON.stringify(inventory));
  }

  static deleteMedicine(id) {
    MedicineManager.medicinesInventory =
      MedicineManager.medicinesInventory.filter(
        (medicine) => medicine.id !== id
      );
    MedicineManager.storeMedicines(MedicineManager.medicinesInventory);
    Ui.renderMedicines();
  }

  static editMedicine(id, name, manufacturer, date, quantity) {
    const medicineIndex = MedicineManager.medicinesInventory.findIndex(
      (medicine) => medicine.id === id
    );
    if (medicineIndex !== -1) {
      MedicineManager.medicinesInventory[medicineIndex] = {
        id,
        name,
        manufacturer,
        date,
        quantity,
      };
    }
    MedicineManager.storeMedicines(MedicineManager.medicinesInventory);
    Ui.renderMedicines();
  }
}

export default MedicineManager;
