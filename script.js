const tabButtons = document.querySelectorAll(".tab");
const tabPanels = document.querySelectorAll(".tab-panel");
const jumpButtons = document.querySelectorAll("[data-tab-jump]");

function openTab(tabName) {
  tabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tabName);
  });

  tabPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.id === tabName);
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openTab(button.dataset.tab);
  });
});

jumpButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openTab(button.dataset.tabJump);
  });
});