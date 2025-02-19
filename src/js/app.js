import Ui from "./ui";

// Selecting DOM elements
const openModalButton = document.querySelector(".header__tools-button");
const closeModalButton = document.querySelector(".form__button--close");
const formModal = document.querySelector(".form-modal");
const form = document.querySelector(".form");

// Selecting form inputs
const nameInput = document.querySelector(".form__input--name");
const idInput = document.querySelector(".form__input--id");
const manufacturerInput = document.querySelector(".form__input--manufacturer");
const dateInput = document.querySelector(".form__input--expiry-date");
const quantityInput = document.querySelector(".form__input--quantity");

// Selecting form error messages
const validationMessage = document.querySelector(".form__validation-message");

// Selecting form buttons
const submitButton = document.querySelector(".form__button--add");
const closeButton = document.querySelector(".form__button--close");

// Adding event listeners
document.addEventListener("DOMContentLoaded", () => {
  Ui.displayAddModal(openModalButton, formModal);
  Ui.closeAddmodal(closeModalButton, formModal, form);
});
