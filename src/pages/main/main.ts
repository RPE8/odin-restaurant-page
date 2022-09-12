import "./main.css";
import {render as renderList}  from "./list/list";
import {render as renderInfo}  from "./info/info";

let mainContainer: HTMLElement;

export const render = function(): HTMLElement {
	const main = document.createElement("main");
	main.classList.add("main");
	mainContainer = document.createElement("div");
	mainContainer.classList.add("main__container", "container");
	main.append(mainContainer);
	return main;
};

export const setContent = function(content: HTMLElement): void {
	mainContainer.replaceChildren(content);
}

export const displayList = function(): void  {
	setContent(renderList());
}

export const displayInfo = function(): void  {
	setContent(renderInfo());
}