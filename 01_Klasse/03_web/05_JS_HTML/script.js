
console.log("hello you");
const element = document.getElementById("name");
console.log(element);

element.addEventListener("keydown", function (event) {
    console.log(event.key);
    document.getElementById("output").innerHTML = event.key
})
