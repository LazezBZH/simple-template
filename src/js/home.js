const selectElem = document.getElementById("select");

selectElem.addEventListener("change", () => {
  const index = selectElem.selectedIndex;
  if ({ index }.index != 0) location = "model.html?id=" + { index }.index;
  console.log(index);
});
