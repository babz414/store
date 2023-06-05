const menCheckBox = document.getElementsByClassName("menCheckbox");
const womenCheckBox = document.getElementsByClassName("womenCheckbox");
const kidsCheckBox = document.getElementsByClassName("kidsCheckbox");
const jewelryCheckBox = document.getElementsByClassName("jewelryCheckbox");
// const checkBox = document.querySelectorAll("input");
let numberOfItemsForMen = document.getElementById("menItemNumber");
let numberOfItemsForWomen = document.getElementById("womenItemNumber");
let numberOfItemsForKids = document.getElementById("kidsItemNumber");
let numberOfItemsForJewelry = document.getElementById("jewelryItemNumber");
let numberOfItems = document.querySelectorAll(".input");
let dropdown = document.querySelectorAll(".dropdown-content");

numberOfItems.addEvent;
let a = 1;
let b = 1;
let c = 1;
let d = 1;

for (let i = 0; i < 4; i++) {
  // console.log(numberOfItems[i]);
  let dropdownContent = dropdown[i].querySelector("ul");

  let dropdownContentListMen = numberOfItemsForMen.getElementsByTagName("li");
  let dropdownContentListWomen =
    numberOfItemsForWomen.getElementsByTagName("li");
  let dropdownContentListKids = numberOfItemsForKids.getElementsByTagName("li");
  let dropdownContentListJewelry =
    numberOfItemsForJewelry.getElementsByTagName("li");
  // let listClassName = dropdownContentList[i].className;
  numberOfItems[i].addEventListener("click", function () {
    dropdownContent.classList.add("active");
  });

  dropdownContentListMen[i].addEventListener("click", function () {
    console.log(dropdownContentListMen[i].className);
    let menClassName = dropdownContentListMen[i].className;

    menClassName = menClassName.classList.add("active");
    return menClassName;
  });
  // .addEventListener()

  // .addEventListener("click", function () {
  //   console.log(dropdownContent);
  // });
}
