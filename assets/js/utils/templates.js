const getServiceTemplate = e => {
  return `
  <li class="col-12 col-md-5 position-relative my-3 d-flex justify-content-center">
    <img class="service__logo" src="${e.img}" alt="${e.name}" />
    <div class="position-absolute top-0 left-0">
      <h3 class="service__title">${e.name}</h3>
      <p class="service__description ps-2">
        ${e.description}
      </p>
      </div>
    </li>
  `;
};
const getProjectCardTemplate = e => {
  return `
    <div class="col-12 col-xs-12 col-sm-6 col-lg-4 col-xl-3">
      <a href="${e.web}" target="_blank">
        <div class="project card my-2 position-relative" style="width: 100%">
          <img
            src="${e.img}"
            class="card-img-top"
            alt="Vista previa ${e.name}"
          />
          <div class="card-body p-2">
              <h5 class="card-title text-center m-0">${e.name}</h5>
          </div>
        </div>
      </a>
    </div>
  `;
};
const getClientsTemplate = e => {
  return `
    <div>
      <a href="${e.href}">
        <img class="client__logo" src="${e.img}" alt="${e.name}" />
      </a>
    </div>
    `;
};
const getWorkerTemplate = e => {
  return `
    <div class="col-12 col-md-6 col-lg-4 text-center my-3">
      <img class="los-pibes__img rounded-circle" src="${e.img}" alt="${e.name}">
      <span class="h4 d-block my-2">${e.name}</span>
      <a href="${e.linkedinUrl}" class="btn btn-primary w-50">LinkedIn</a>
    </div>
  `;
};
const getContactTemplate = e => {
  return `
    <li class="mb-2">
      <i class="${e.faIcon}"></i>	${e.medium}:
        <a href="${e.href}"
          >${e.value}</a
        >
  </li>
  `;
};
export default [
  getServiceTemplate,
  getProjectCardTemplate,
  getClientsTemplate,
  getWorkerTemplate,
  getContactTemplate,
];
