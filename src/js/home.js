const selectElem = document.getElementById("select");

selectElem.addEventListener("change", () => {
  const index = selectElem.selectedIndex;
  if ({ index }.index != 0)
    location = "/model/model.html?id=" + { index }.index;
  console.log(index);
});
