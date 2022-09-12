import "./header.css";

export const render = function():HTMLElement {
	const b = [3,3,3];
	const a = [...[1,2,3], ...b];
	console.log(a);
	const header = document.createElement("header");
	const headerContainer = document.createElement("div");
	const menu = document.createElement("menu");
	const listItem = document.createElement("li");
	const infoItem = document.createElement("li");

	header.classList.add("header");
	headerContainer.classList.add("header__container", "container");

	listItem.setAttribute("id", "listItem");
	listItem.setAttribute("id", "infoItem");

	listItem.textContent = "List";
	infoItem.textContent = "Info";

	menu.append(listItem, infoItem);
	headerContainer.append(menu);
	header.append(headerContainer);

	return header;
}