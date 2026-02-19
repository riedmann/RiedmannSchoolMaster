let calulation = "";

let validSymbols = ["1", "2", "+", "-"];

for (let i = 0; i < validSymbols.length; i++) {
  console.log(validSymbols[i]);
  const btn = document.createElement("button");
  btn.innerText = validSymbols[i];
  btn.className = "test";
  btn.value = validSymbols[i];
  document.getElementById("div1").appendChild(btn);
  btn.addEventListener("click", function () {
    calulation += btn.innerText;
    document.getElementById("calculation").innerText = calulation;
  });
}
