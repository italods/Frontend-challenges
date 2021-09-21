let outputColor = document.querySelector("#output-color span");
let output = document.getElementById("output");
let genBtn = document.getElementById("gen-btn");
let copyBtn = document.getElementById("copy-btn");
let customAlert = document.querySelector(".custom-alert");
let hexString = "0123456789abcdef";


let genHexCode = () => {
  let hexCode = "#";
  for( i = 0; i < 6; i++){
      hexCode += hexString[Math.floor(Math.random() * hexString.length)];
  }
  console.log(hexCode);
}
genBtn.addEventListener("click", genHexCode);