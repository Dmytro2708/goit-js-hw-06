const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

fontSizeControl.addEventListener("input", onInput)

function onInput(evn) {
 const fontSize = fontSizeControl.value + "px";

  textSpan.style.fontSize = fontSize;
};



