class Validation {
  static validateForm(validationMessage) {
    validationMessage.style.opacity = "0";
    const fieldsToValidate = [
      { name: "name", message: "Please enter the medicine name" },
      { name: "manufacturer", message: "Please enter the manufacturer name" },
      { name: "expiry-date", message: "Please enter the expiry date" },
      { name: "quantity", message: "Please enter the quantity" },
    ];

    for (let field of fieldsToValidate) {
      const inputField = document.querySelector(`[id=${field.name}]`);
      inputField.classList.remove("form__invalid-input");
      inputField.addEventListener("input", () => {
        inputField.classList.remove("form__invalid-input");
        validationMessage.textContent = "";
      });

      if (!inputField.value.trim()) {
        validationMessage.style.opacity = "1";
        validationMessage.textContent = field.message;
        inputField.classList.add("form__invalid-input");
        return false;
      } else {
        inputField.classList.remove("form__invalid-input");
      }
    }
    return true;
  }
}

export default Validation;
