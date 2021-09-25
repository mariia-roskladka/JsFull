   const baseUrl = "https://61422caa4d16670017ba2c4f.mockapi.io/toDoApi/users";
   const emailField = document.querySelector("#email");
   const userNameField = document.querySelector("#name");
   const passwordField = document.querySelector("#password");

   const submitButton = document.querySelector(".submit-button");
   const formElement = document.querySelector(".login-form");
   const errorElement = document.querySelector(".error-text");

   const isValidForm = () => {
       // eslint-disable-next-line no-unused-expressions
       if (
           emailField.reportValidity() &&
           passwordField.reportValidity() &&
           userNameField.reportValidity()
       ) {
           submitButton.disabled = false;
       }
       errorElement.textContent = "";
   };

   const sendData = (formData) =>
       fetch(baseUrl, {
           method: "POST",
           headers: {
               "Content-Type": "application/json;charset=utf-8",
           },
           body: JSON.stringify(formData),
       });

   const submitData = (event) => {
       event.preventDefault();
       const formData = Object.fromEntries(new FormData(formElement));
       console.log(formData);
       sendData(formData)
           .then((response) => response.json())
           .then((userData) => {
               alert(JSON.stringify(userData));
               formElement.reset();
               submitButton.disabled = true;
           })
           .catch(() => {
               errorElement.textContent = "Failed to create user";
           });
   };

   formElement.addEventListener("submit", submitData);
   formElement.addEventListener("input", isValidForm);