import "./info.css";

export const render = function(): HTMLElement {
	const el = document.createElement("div");

	el.classList.add("info");
	el.innerHTML = `
		<div>TEST-Info</div>
		<div>TEST2-Info</div>
		<div>TEST3-Info</div>
	`

	return el;
}