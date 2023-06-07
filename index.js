const formEl = document
  .querySelector("#mainForm")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submit btn clicked");
    const bodyEl = document.querySelector("body");
    const formContentEl = document.querySelector(".formContent");
    const emailLabelEl = document.querySelector("emailLabel");
    const emailEl = document.querySelector("#email");
    const userEmailEl = document.querySelector(".userEmail");
    const errorText = document.querySelector(".errorText");
    const successMsgContainerEl = document.querySelector(
      "#successMsgContainer"
    );
    const messageBtnEl = document.querySelector("#messageBtn");
    if (emailEl.value === "") {
      emailEl.classList.add("errorMsg");
      errorText.style.display = "block";
      setTimeout(() => {
        errorText.style.display = "none";
        emailEl.classList.remove("errorMsg");
      }, 2000);
      console.log("please enter your email address to process your request");
    } else {
      console.log("subscription successful!");
      successMsgContainerEl.style.visibility = "visible";
      formContentEl.style.visibility = "hidden";
      userEmailEl.innerHTML = emailEl.value;
      bodyEl.style.overflow = "hidden";
      emailEl.value = "";
    }
    messageBtnEl.addEventListener("click", () => {
      successMsgContainerEl.style.visibility = "hidden";
      formContentEl.style.visibility = "visible";
    });
  });
