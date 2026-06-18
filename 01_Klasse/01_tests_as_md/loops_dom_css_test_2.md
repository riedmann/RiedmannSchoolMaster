# 🟦 JavaScript, DOM & CSS Test – Loops, Flexbox, Position, DOM Manipulation

---

## **Section 1: Loops & Logic**

### **1. What will be printed by the following code?**

```js
let sum = 0;

for (let i = 1; i <= 4; i++) {
  sum += i;
}

console.log(sum);
```

---

### **2. What will be printed by the following code?**

```js
let text = "";

for (let i = 5; i >= 2; i--) {
  text += i + " ";
}

console.log(text);
```

---

## **Section 2: DOM Manipulation & Event Listeners**

### **3. What does this code do? Explain in your own words.**

```js
let input = document.getElementById("userInput");

input.addEventListener("input", function() {
  console.log(input.value);
});
```

**Explanation:**

---

### **4. Fill in the missing code**

Complete the code so that when the button is clicked, the text in the div with the id box changes to "Well done" 

```html
<button id="changeBtn">Change Color</button>
<div id="box" style="width: 200px; height: 200px; background-color: blue;">OK?</div>

<script>
  let button = document.getElementById("changeBtn");
  
  // your code here
</script>
```

---

## **Section 3: CSS Flexbox & Position – Draw the Layout**

### **5. Draw how the boxes will be arranged**

Given the following HTML and CSS, **draw** how the three boxes will appear on the page. Include their positions and spacing.

```html
<div class="container">
  <div class="box">A</div>
  <div class="box">B</div>
  <div class="box">C</div>
</div>
```

```css
.container {
  display: flex;
  justify-content: space-around;
  align-items: bottom;
  
}

.box {
  width: 80px;
  height: 80px;
  background-color: green;
}
```

**Draw your answer here:**

---

### **6. Draw how the boxes will be arranged**

Given the following HTML and CSS, **draw** how the four boxes will appear on the page.

```html
<div class="wrapper">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>
<div class="main"></div>
```

```css
.wrapper {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  height: 200px;
}

.item {
  height:60px;
  width: 60px;
  background-color: orange;
}

.main{
    position:absolute;
    top: 0;
    right: 0;
}


```

**Draw your answer here:**

---

### **7. Draw the final positions of the boxes**

Given the following HTML and CSS, **draw** where each box will appear on the page. Pay attention to the position properties.

```html
<div class="parent">
  <div class="box1">Box 1</div>
  <div class="box2">Box 2</div>
  <div class="box3">Box 3</div>
</div>
```

```css
.parent {
  position: relative;
  width: 400px;
  height: 300px;
  background-color: lightgray;
}

.box1 {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 100px;
  height: 100px;
  background-color: red;
}

.box2 {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 80px;
  height: 80px;
  background-color: blue;
}

.box3 {
  position: relative;
  top: 50px;
  left: 50px;
  width: 60px;
  height: 60px;
  background-color: yellow;
}
```

**Draw your answer here:**

---
