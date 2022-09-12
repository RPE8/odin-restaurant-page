import {render} from "./pages/header/header";

const CONTENT = document.querySelector("#content");
// const a = ;
const header = render(); 
console.log(header, CONTENT);
if (header) CONTENT?.append(render());