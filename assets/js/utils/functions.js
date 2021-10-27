/**
 * 
 * @param {string[]} data 
 * @param {HTMLElement} element 
 * @param {Function} template 
 */
export const renderDynamicContent = (data, element, template) => {
	data.forEach((e) => (element.innerHTML += template(e)));
};
/**
 * 
 * @param {string[]} elementsArray 
 * @returns 
 */
export const getElements = (selectors = []) =>
	selectors.map(e => document.querySelector(e));
