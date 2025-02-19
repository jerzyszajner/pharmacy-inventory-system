class Ui {
  static displayAddModal(openModalButton, formModal) {
    openModalButton.addEventListener("click", () => {
      formModal.classList.add("display-form");
    });
  }

  static closeAddmodal(closeModalButton, formModal, form) {
    closeModalButton.addEventListener("click", () => {
      formModal.classList.remove("display-form");
      form.reset();
    });
  }
}

export default Ui;
