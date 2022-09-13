import "./index.css";
import {render as headerRender, getListItem, getInfoItem} from "./pages/header/header";
import {render as mainRender, displayList, displayInfo} from "./pages/main/main";

const CONTENT = document.querySelector("#content");
if (!CONTENT) {
	throw new Error("There is no content");
}

CONTENT.append(headerRender(), mainRender());
displayList();

getListItem().addEventListener("click", (): void => {
	displayList();
});
getInfoItem().addEventListener("click", (): void => {
	displayInfo();
});
