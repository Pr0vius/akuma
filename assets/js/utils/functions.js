/**
 *
 * @param {string[]} data
 * @param {HTMLElement} element
 * @param {Function} template
 */
export const renderDynamicContent = (data, element, template) => {
  data.forEach(e => (element.innerHTML += template(e)));
};
/**
 *
 * @param {string[]} elementsArray
 * @returns
 */
export const getElements = (selectors = []) =>
  selectors.map(e => document.querySelector(e));

export const sendMail = async form => {
  try {
    let data = new FormData(form);
    const fetchOptions = {
      method: "POST",
      body: data,
    };
    return await fetch("/sendMail.php", fetchOptions);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const renderSuccessMessage = () => {
  const alert = document.querySelector("#messageStatus");
  alert.innerHTML = `
  <div class="alert alert-success position-relative" role="alert">
    Mensaje enviado correctamente, en breves no contactaremos con usted.
  </div>
  `;
  alert.onclick = () => alert.innerHTML = ""
};
export const disableFormSuccess = () => {
  const captcha = document.getElementById("g-recaptcha");
  const submit = document.querySelector("#submit");
  const nameInput = document.querySelector("#nameInput");
  const emailInput = document.querySelector("#emailInput");
  const phoneInput = document.querySelector("#phoneInput");
  const messageInput = document.querySelector("#messageInput");
  submit.innerText = "Enviado!";
  submit.className = "btn btn-success h-50 mt-3";
  captcha.hidden = true;
  submit.disabled = true;
  nameInput.disabled = true;
  emailInput.disabled = true;
  phoneInput.disabled = true;
  messageInput.disabled = true;
};
export const renderFailedMessage = () => {
  const alert = document.querySelector("#messageStatus");
  alert.innerHTML = `
  <div class="alert alert-danger" role="alert">
  Algo salió mal, por favor inténtelo nuevamente.
  </div>
  `;
  alert.onclick = () => alert.innerHTML = ""
};
