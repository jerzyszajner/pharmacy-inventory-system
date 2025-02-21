import MedicineManager from "./medicineManager";

class Ui {
  static currentEditId = null;
  static displayAddModal(openModalButton, formModal) {
    openModalButton.addEventListener("click", () => {
      const formSubmitButton = document.querySelector(".form__button--add");
      formModal.classList.add("display-form");
      Ui.renderMedicines();
      formSubmitButton.textContent = "Add";
    });
  }

  static closeAddModal(closeModalButton, formModal, form) {
    closeModalButton.addEventListener("click", () => {
      formModal.classList.remove("display-form");
      form.reset();
    });
  }

  static displayDeleteModal(medicineId, medicineName) {
    const deleteModal = document.querySelector(".delete-modal");
    const deleteModalMessage = document.querySelector(".delete-modal__message");
    const confirmDeleteButton = document.querySelector(
      ".delete-modal__button--confirm"
    );

    deleteModalMessage.textContent = `Are you sure you want to delete "${medicineName}" ?`;

    deleteModal.classList.add("display-modal");

    confirmDeleteButton.addEventListener("click", () => {
      MedicineManager.deleteMedicine(medicineId);
      deleteModal.classList.remove("display-modal");
    });
  }

  static closeDeleteModal() {
    const deleteModal = document.querySelector(".delete-modal");
    const cancelDeleteButton = document.querySelector(
      ".delete-modal__button--cancel"
    );

    cancelDeleteButton.addEventListener("click", () => {
      deleteModal.classList.remove("display-modal");
    });
  }

  static displayEditModal() {
    const formModal = document.querySelector(".form-modal");
    const formSubmitButton = document.querySelector(".form__button--add");
    formModal.classList.add("display-form");
    formSubmitButton.textContent = "Confirm Edit";
  }

  static populateEditForm(id) {
    const name = document.querySelector(".form__input--name");
    const manufacturer = document.querySelector(".form__input--manufacturer");
    const date = document.querySelector(".form__input--expiry-date");
    const quantity = document.querySelector(".form__input--quantity");

    const medicineToEdit = MedicineManager.medicinesInventory.find(
      (medicine) => medicine.id === id
    );

    name.value = medicineToEdit.name;
    manufacturer.value = medicineToEdit.manufacturer;
    date.value = medicineToEdit.date;
    quantity.value = medicineToEdit.quantity;

    Ui.currentEditId = id;
  }

  static renderMedicines() {
    const medinesList = document.querySelector(".medicines__list");
    medinesList.innerHTML = "";
    const medicinesInventory = JSON.parse(
      localStorage.getItem("medicines-inventory")
    );

    // Create list item
    const createListItem = (label, value) => {
      const item = document.createElement("div");
      const itemLabel = document.createElement("h3");
      const itemValue = document.createElement("span");

      item.append(itemLabel, itemValue);

      itemLabel.textContent = label;
      itemValue.textContent = value;

      item.classList.add("medicine__field");
      itemLabel.classList.add("medicine__label");
      itemValue.classList.add("medicine__value");

      return item;
    };

    medicinesInventory.forEach((medicine, index, arr) => {
      const medicineCard = document.createElement("li");
      const medicineDetailsContainer = document.createElement("div");
      const medicineControlsContainer = document.createElement("div");

      const editButton = document.createElement("button");
      const deleteButton = document.createElement("button");

      // Appending elements
      medinesList.append(medicineCard);
      medicineCard.append(medicineDetailsContainer, medicineControlsContainer);

      medicineControlsContainer.append(editButton, deleteButton);

      editButton.textContent = "Edit";
      deleteButton.textContent = "Delete";

      // Adding classes
      medicineCard.classList.add("medicine__item");
      medicineDetailsContainer.classList.add("medicine__details-container");
      medicineControlsContainer.classList.add("medicine__controls-container");

      // Creating list items
      const nameContainer = createListItem("Product Name:", medicine.name);
      const idContainer = createListItem("Product ID:", medicine.id);
      const manufacturerContainer = createListItem(
        "Manufacturer:",
        medicine.manufacturer
      );
      const dateContainer = createListItem("Expiry Date:", medicine.date);
      const quantityContainer = createListItem("Quantity:", medicine.quantity);

      editButton.classList.add("medicine__button--edit");
      deleteButton.classList.add("medicine__button--delete");

      // Appending list items
      medicineDetailsContainer.append(
        nameContainer,
        idContainer,
        manufacturerContainer,
        dateContainer,
        quantityContainer
      );

      // Adding event listeners to buttons
      editButton.addEventListener("click", () => {
        Ui.displayEditModal();
        Ui.populateEditForm(medicine.id);
      });

      deleteButton.addEventListener("click", () => {
        Ui.displayDeleteModal(medicine.id, medicine.name);
      });
    });
  }
}

export default Ui;
