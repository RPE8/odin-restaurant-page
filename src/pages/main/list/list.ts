import "./list.css";

export const render = function() {
	const el = document.createElement("div");

	el.classList.add("list");
	el.innerHTML = `
		<div>TEST</div>
		<div>TEST2</div>
		<div>TEST3</div>
	`

	return el;
}