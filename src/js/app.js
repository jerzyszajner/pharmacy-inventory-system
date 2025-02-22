import Ui from "./ui";
import MedicineManager from "./medicineManager";
import Validation from "./validation";

// Selecting DOM elements
const openModalButton = document.querySelector(".header__tools-button");
const closeModalButton = document.querySelector(".form__button--close");
const formModal = document.querySelector(".form-modal");
const form = document.querySelector(".form");

// Selecting form inputs
const name = document.querySelector(".form__input--name");
const id = document.querySelector(".form__input--id");
const manufacturer = document.querySelector(".form__input--manufacturer");
const date = document.querySelector(".form__input--expiry-date");
const quantity = document.querySelector(".form__input--quantity");

// Selecting form error messages
const validationMessage = document.querySelector(".form__validation-message");

// Selecting form buttons
const submitButton = document.querySelector(".form__button--add");
const closeButton = document.querySelector(".form__button--close");

// Adding event listeners
document.addEventListener("DOMContentLoaded", () => {
  Ui.displayAddModal(openModalButton, formModal);
  Ui.closeAddModal(closeModalButton, formModal, form, validationMessage);
  Ui.closeDeleteModal();
  Ui.renderMedicines();
});

// Form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!Validation.validateForm(validationMessage)) {
    return;
  }
  if (!Ui.currentEditId) {
    MedicineManager.addMedicine(
      name.value.trim(),
      manufacturer.value.trim(),
      date.value,
      quantity.value.trim()
    );
  } else {
    MedicineManager.editMedicine(
      Ui.currentEditId,
      name.value.trim(),
      manufacturer.value.trim(),
      date.value,
      quantity.value.trim()
    );
    Ui.currentEditId = null;
    submitButton.textContent = "Add";
    formModal.classList.remove("display-form");
  }
  Ui.renderMedicines();
  form.reset();
});
