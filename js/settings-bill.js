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

var settingBillFac = SettingsBillFactory();

function settings() {

  settingBillFac.costOfCall(callCostElement.value)
  settingBillFac.costOfSMS(smsCostElement.value)
  settingBillFac.costWarning(warningCostElement.value)
  settingBillFac.costCritical(criticalCostElement.value)

  }

function billFunc(){

  var final = settingBillFac.totalCS();
  var checkedRadioButton = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if (checkedRadioButton) {
    var billItem = checkedRadioButton.value
  }

  if (final >= settingBillFac.criticalCost()) {
    totalElementBill.classList.add("danger");
    return;
  }

  totalElementBill.classList.remove("danger")
  totalElementBill.classList.remove("warning")

  settingBillFac.calculateBill(billItem);


  if (final >= settingBillFac.warningCost()) {
    totalElementBill.classList.add("warning")
  }


  if (final >= settingBillFac.criticalCost()) {
    totalElementBill.classList.add("danger")
  }

  callTotalDisplay.innerHTML = settingBillFac.costCall().toFixed(2);
  smsTotalDisplay.innerHTML = settingBillFac.costSMS().toFixed(2);
  totalElementBill.innerHTML = settingBillFac.totalCS().toFixed(2);
 }

// eventListeners for Settings click
settingsBillBtn.addEventListener("click", settings);

//eventListeners for Bill click
billTotalBtn.addEventListener("click", billFunc);
