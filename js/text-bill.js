var billTypeTextElem = document.querySelector(".billTypeText")
var addToBillBtnElem = document.querySelector(".addToBillBtn")
var totalOneElem = document.querySelector(".totalOne")
// var callsTotalElem = document.querySelector(".callTotalOne")
// var smsTotalElem = document.querySelector(".smsTotalOne")
var userTemplate = document.querySelector(".userTotals").innerHTML;
var dataOutput = document.querySelector(".handleBarsDisplayInputBill")
var templateSource = Handlebars.compile(userTemplate)

var myFactoryFunction = TextBillFactory()

function textDisplay() {

  var billTypeEntered = billTypeTextElem.value.trim();

  myFactoryFunction.billCalculate(billTypeEntered)

  var htmlTemplate = templateSource(billTypeEntered);

  dataOutput.innerHTML = htmlTemplate;
  // callsTotalElem.innerHTML = myFactoryFunction.call().toFixed(2);
  // smsTotalElem.innerHTML = myFactoryFunction.sms().toFixed(2);
  // totalOneElem.innerHTML = myFactoryFunction.total().toFixed(2);



  var test = myFactoryFunction.total()

  //color the total based on the criteria
  if (test >= 50) {
    // adding the danger class will make the text red
    totalOneElem.classList.add("danger");
  } else if (test >= 30) {
    totalOneElem.classList.add("warning");
  }

}
addToBillBtnElem.addEventListener('click', textDisplay);
