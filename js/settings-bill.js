//references for Bill total
var callElementBill = document.querySelector(".billItemTypeWithSettings")
var totalElementBill = document.querySelector(".TotalSettings")
var smsElementBill = document.querySelector(".billItemTypeWithSettings")

//references for Bill total button
var billTotalBtn = document.querySelector(".addBillBtn")

//references for Settings bill
var callCostElement = document.querySelector(".callCostSetting")
var callTotalDisplay = document.querySelector('.callTotalSettings')
var smsCostElement = document.querySelector(".smsCostSetting")
var smsTotalDisplay = document.querySelector(".smsTotalSettings")
var warningCostElement = document.querySelector(".warningCostSetting")
var criticalCostElement = document.querySelector(".criticalCostSetting")

// references for Setting Bill Button
var settingsBillBtn = document.querySelector(".updateSettingsBtn")

//Global variables for Bill function
var billCallTotal = 0;
var billSmsTotal = 0;
var billTotalTotal = 0;


//Global variables for Settings function
var settingsCallTotal = 0;
var costSettingSMS = 0;
var costSettingCall = 0;
var costOfWarning = 0;
var costOfCritical = 0;

//function for Settings
function settingsFunc() {

  var callCost = callCostElement.value;
  var smsCost = smsCostElement.value;
  costSettingSMS = parseFloat(smsCost);
  costSettingCall = parseFloat(callCost);
  var warningCost = warningCostElement.value;
  costOfWarning = parseFloat(warningCost);
  var criticalCost = criticalCostElement.value;
  costOfCritical = parseFloat(criticalCost);

}

//function for Bill Total
function billFunc() {
  // check if current total is greater or equal critical level and if so just return - then do nothing

   if (billTotalTotal >= costOfCritical ) {
     return;
   }
   else {
     totalElementBill.classList.remove("danger")
   }

  var checkedRadioButton = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if (checkedRadioButton) {
    var radioTotal = checkedRadioButton.value
  }
  if (radioTotal === 'call') {
    billCallTotal += costSettingCall;
  }

  if (radioTotal === 'sms') {
    billSmsTotal += costSettingSMS;
  }


  smsTotalDisplay.innerHTML = billSmsTotal.toFixed(2);
  callTotalDisplay.innerHTML = billCallTotal.toFixed(2);
  billTotalTotal = billCallTotal + billSmsTotal;
  totalElementBill.innerHTML = billTotalTotal.toFixed(2);

  if (billTotalTotal >= costOfWarning) {
    totalElementBill.classList.add("warning")
  }

  if (billTotalTotal >= costOfCritical) {
    totalElementBill.classList.add("danger")
  }




}


// eventListeners for Settings click
settingsBillBtn.addEventListener("click", settingsFunc);

//eventListeners for Bill click
billTotalBtn.addEventListener("click", billFunc);
