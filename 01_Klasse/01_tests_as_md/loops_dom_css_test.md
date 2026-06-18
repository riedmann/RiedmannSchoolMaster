# 🟦 JavaScript, DOM & CSS Test – Loops, Flexbox, Position, DOM Manipulation

---

## **Section 1: Loops & Logic**

### **1. What will be printed by the following code?**

```js
let result = "";

for (let i = 0; i < 3; i++) {
  result += i * 2;
}

console.log(result);
```

---

### **2. What will be printed by the following code?**

```js
let count = 0;

for (let i = 10; i > 5; i--) {
  count++;
}

console.log(count);
```

---

## **Section 2: DOM Manipulation & Event Listeners**

### **4. What does this code do? Explain in your own words.**

```js
let button = document.getElementById("myButton");

button.addEventListener("click", function() {
  console.log("Button clicked!");
});
```

**Explanation:**

---

### **5. Fill in the missing code**

Complete the code so that when the button is clicked, the text "Hello World" is displayed in the `<div>` with id "output".

```html
<button id="btn">Click me</button>
<div id="output"></div>

<script>
  let button = document.getElementById("btn");
  
  button.addEventListener("click", function() {
    // your code here
    
  });
</script>
```

---

### **6. Reading input from a field**

Complete the code to read the value from the input field and display it in the paragraph when the button is clicked.

```html
<input type="text" id="nameInput" placeholder="Enter your name">
<button id="submitBtn">Submit</button>
<p id="display"></p>

<script>
  let button = document.getElementById("submitBtn");
  
  button.addEventListener("click", function() {
    // your code here: read the input value
    
    
    // your code here: display it in the paragraph
    
  });
</script>
```

---



## **Section 3: CSS Flexbox**

### **8. What will the layout look like?**

Given the following HTML and CSS, describe how the three boxes will be arranged on the page.

```html
<div class="container">
  <div class="box">Box 1</div>
  <div class="box">Box 2</div>
  <div class="box">Box 3</div>
</div>
```

```css
.container {
  display: flex;
  justify-content: space-between;
}

.box {
  width: 100px;
  height: 100px;
  background-color: blue;
}
```

**Answer:**

