const typeFilterSelect = document.getElementById("type-filter");
const nameFilterInput = document.getElementById("name-filter");

typeFilterSelect.addEventListener("input", (event) => {
  const desiredType = event.target.value.toLowerCase();
  const articles = document.querySelectorAll("article");
  articles.forEach((node) => {
    // Show the element. If it was previously hidden and the user selects a
    // different type, we want to re-show anything previously hidden.
    node.hidden = false;
    if (desiredType != "all") {
      // If the requested name doesn't match a data attribute, hide the element.
      const plantType = node.dataset.plantType.toLowerCase();
      if (!plantType.match(desiredType)) {
        node.hidden = true;
      }
    }
  });
});

nameFilterInput.addEventListener("input", (event) => {
  const desiredName = event.target.value.toLowerCase();
  const articles = document.querySelectorAll("article");
  articles.forEach((node) => {
    // Show the element. If it was previously hidden and the user backspaces to
    // broaden their filter, we want to re-show anything previously hidden.
    node.hidden = false;
    // If the requested name doesn't match a data attribute, hide the element.
    const commonName = node.dataset.commonName.toLowerCase();
    const latinName = node.dataset.latinName.toLowerCase();
    if (!commonName.match(desiredName) && !latinName.match(desiredName)) {
      node.hidden = true;
    }
  });
});
