import {render as headerRender} from "./pages/header/header";
import {render as mainRender, displayList} from "./pages/main/main";

const CONTENT = document.querySelector("#content");
if (!CONTENT) {
	throw new Error("There is no content");
}

CONTENT.append(headerRender(), mainRender());
displayList();
