document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");
  const dropdownButton = dropdown.querySelector(".dropdown-button");
  const dropdownItems = dropdown.querySelectorAll(".dropdown-item");

  dropdownButton.addEventListener("click", function () {
    dropdown.classList.toggle("open");
  });

  dropdownItems.forEach(function (item) {
    item.addEventListener("click", function () {
      dropdownItems.forEach(function (i) {
        i.classList.remove("selected");
      });
      item.classList.add("selected");
      dropdownButton.textContent = item.textContent;
      dropdown.classList.remove("open");
    });
  });
  document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("open");
    }
  });
});
