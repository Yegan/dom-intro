// get a reference to the sms or call radio buttons

//get a reference to the add button
var addBtn = document.querySelector(".radioBillAddBtn")
//create a variable that will keep track of the total bill
var totalRadioBill = document.querySelector(".totalTwo")
var callTotalTwo2 = document.querySelector(".callTotalTwo")
var smsTotalTwo2 = document.querySelector(".smsTotalTwo")
//add an event listener for when the add button is pressed
addBtn.addEventListener("click", radioTotal)
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var totalCall= 0;
var totalSms = 0;

function radioTotal(){

  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

  if (checkedRadioBtn){
      var billItemType = checkedRadioBtn.value;
      // billItemType will be 'call' or 'sms'
  }

  if(billItemType === "call"){
    totalCall += 2.75
  }
  else if (billItemType === "sms"){
    totalSms += 0.75
  }
   callTotalTwo2.innerHTML = totalCall.toFixed(2);
   smsTotalTwo2.innerHTML = totalSms.toFixed(2);
   var costTotal = totalCall + totalSms;
   totalRadioBill.innerHTML = costTotal.toFixed(2);

   if (costTotal >=50){
      totalRadioBill.classList.add("danger")
   }

   if (costTotal >=30){
      totalRadioBill.classList.add("warning")
   }
}
