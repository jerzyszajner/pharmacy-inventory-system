class Ui {
  static displayAddModal(openModalButton, formModal) {
    openModalButton.addEventListener("click", () => {
      formModal.classList.add("display-form");
      this.renderMedicines();
    });
  }

  static closeAddmodal(closeModalButton, formModal, form) {
    closeModalButton.addEventListener("click", () => {
      formModal.classList.remove("display-form");
      form.reset();
    });
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
      const titleContainer = createListItem("Product Name:", medicine.name);
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
        titleContainer,
        idContainer,
        manufacturerContainer,
        dateContainer,
        quantityContainer
      );

      // Adding event listeners
      editButton.addEventListener("click", () => {});

      deleteButton.addEventListener("click", () => {});
    });
  }
}

export default Ui;
