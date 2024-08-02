function scroll() {
  const section = document.getElementById("section");
  section.scrollIntoView({ behavior: "smooth" });
}
function toggleDisabled() {
  const button = document.getElementById("targetButton");
  button.disabled = !button.disabled;
}
function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}
function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}
function setDataInUI(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}
// Add event listeners to all buttons
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn")) {
    event.target.style.backgroundColor = "red"; // Change the background color to red
    event.target.classList.add("booked"); // Add a class to mark the button as booked
    console.log(`Button clicked: ${event.target.id} is now booked.`);
  }
});
