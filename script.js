// =====================
// Part 1: Variables & Conditionals
// =====================
const appName = "Basic JS Project"; 
let userName = ""; 
let darkMode = false;
const defaultGreeting = "Hello";

// Conditional based on time of day
const hour = new Date().getHours();
let timeOfDay;
if (hour < 12) {
  timeOfDay = "morning";
} else if (hour < 18) {
  timeOfDay = "afternoon";
} else {
  timeOfDay = "evening";
}

// =====================
// DOM Interaction #1: set initial greeting
// =====================
const greetingEl = document.querySelector("#greeting");
greetingEl.textContent = `${defaultGreeting}! Good ${timeOfDay}, welcome to ${appName}.`;

// Grab DOM elements
const nameInput = document.querySelector("#nameInput");
const countInput = document.querySelector("#countInput");
const listEl = document.querySelector("#list");
const outputEl = document.querySelector("#output");
const btnGreet = document.querySelector("#btnGreet");
const btnLoop = document.querySelector("#btnLoop");
const btnTheme = document.querySelector("#btnTheme");

// =====================
// Part 2: Functions
// =====================
function formatName(raw) {
  const trimmed = String(raw || "").trim();
  if (!trimmed) return null; // validation
  return trimmed[0].toUpperCase() + trimmed.slice(1).toLowerCase();
}

function makeItems(n) {
  let count = parseInt(n, 10);
  if (!count || count < 1) count = 1;
  if (count > 20) count = 20;
  const items = [];
  // =====================
  // Part 3: Loop Example #1 (for loop)
  // =====================
  for (let i = 1; i <= count; i++) {
    items.push(`Item ${i}`);
  }
  return items;
}

function toggleTheme() {
  // =====================
  // Part 4: DOM Interaction #2 (toggle body class)
  // =====================
  document.body.classList.toggle("dark");
  darkMode = document.body.classList.contains("dark");
  // =====================
  // DOM Interaction #3: update output
  // =====================
  outputEl.textContent = `Theme is now: ${darkMode ? "Dark" : "Light"}`;
}

// =====================
// Event listeners
// =====================
btnGreet.addEventListener("click", () => {
  const formatted = formatName(nameInput.value);
  if (!formatted) {
    outputEl.textContent = "Please enter your name 🙂";
    return;
  }
  userName = formatted;
  greetingEl.textContent = `${defaultGreeting}, ${userName}! Hope you're having a great ${timeOfDay}.`;
  outputEl.textContent = `Greeted ${userName}`;
});

btnLoop.addEventListener("click", () => {
  const items = makeItems(countInput.value);
  listEl.innerHTML = "";
  // =====================
  // Part 3: Loop Example #2 (for...of)
  // DOM Interaction #4: create elements dynamically
  // =====================
  for (const label of items) {
    const li = document.createElement("li");
    li.textContent = label;
    listEl.appendChild(li);
  }
  outputEl.textContent = `Generated ${items.length} item(s).`;
});

btnTheme.addEventListener("click", toggleTheme);
// Initial theme setup
toggleTheme();
