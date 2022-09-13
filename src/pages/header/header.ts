import "./header.css";

let listItem: HTMLElement, infoItem: HTMLElement;

export const render = function():HTMLElement {
	const b = [3,3,3];
	const a = [...[1,2,3], ...b];
	console.log(a);
	const header = document.createElement("header");
	const headerContainer = document.createElement("div");
	const menu = document.createElement("menu");
	listItem = document.createElement("li");
	infoItem = document.createElement("li");

	header.classList.add("header");
	headerContainer.classList.add("header__container", "container");
	
	listItem.classList.add("header__menu-button");
	infoItem.classList.add("header__menu-button");
	listItem.setAttribute("id", "listItem");
	infoItem.setAttribute("id", "infoItem");

	listItem.textContent = "List";
	infoItem.textContent = "Info";

	menu.classList.add("header__menu")

	menu.append(listItem, infoItem);
	headerContainer.append(menu);
	header.append(headerContainer);

	return header;
}

export const getListItem = function(): HTMLElement {
	return listItem;
}

export const getInfoItem = function(): HTMLElement {
	return infoItem;
}


