export const getServiceTemplate = e => {
	return `
    <li class="col-12 col-md-6">
      <h3 class="service__title">${e.name}</h3>
      <p class="service__description ps-2">
        ${e.description}
      </p>
    </li>
  `;
};
export const getProjectCardTemplate = e => {
	return `
    <div class="col-12 col-xs-12 col-sm-6 col-lg-3">
      <div class="card my-2" style="width: 100%">
        <img
          src="${e.img}"
          class="card-img-top"
          alt="Vista previa ${e.name} "
        />
        <div class="card-body">
          <h5 class="card-title text-center">${e.name}</h5>
        </div>
      </div>
    </div>
  `;
};
export const getWorkerTemplate = e => {
  return `
    <div class="col-12 col-md-4 text-center">
      <img class="los-pibes__img rounded-circle" src="${e.img}" alt="${e.name}">
      <span class="h4 d-block my-2">${e.name}</span>
      <a href="${e.linkedinUrl}" class="btn btn-primary w-50">LinkedIn</a>
    </div>
  `
}