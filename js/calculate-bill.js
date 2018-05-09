//get a reference to the calculate button
var calculate = document.querySelector(".calculateBtn")
//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal")
//get a reference to the billString
var billStringElement = document.querySelector(".billString");

function displayElements() {

  var roundedBillTotal = calculateBtnClicked(billStringElement.value)
  billTotalElement.innerHTML = roundedBillTotal;
  billTotalElement.classList.remove("warning");
  billTotalElement.classList.remove("danger");

  if (roundedBillTotal > 30) {
    // adding the danger class will make the text red
    billTotalElement.classList.add("danger");
  } else if (roundedBillTotal > 20) {
    billTotalElement.classList.add("warning");
  }
}

//link the function to a click event on the calculate button
calculate.addEventListener('click', function() {
  // get value entered from the document
  displayElements()
  // display result into the DOM
});
