import { updateDOM, add } from "./domUtils.js";

const rootRef = document.getElementById("root");

updateDOM(rootRef, "Hello world from entry.js");

add(2, 2);
