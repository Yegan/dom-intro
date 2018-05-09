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

function billFunc() {

  if (settingBillFac.totalCS() < settingBillFac.criticalCost()) {
    var checkedRadioButton = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioButton) {
      var billItem = checkedRadioButton.value
      settingBillFac.calculateBill(billItem);
      callTotalDisplay.innerHTML = settingBillFac.costCall().toFixed(2);
      smsTotalDisplay.innerHTML = settingBillFac.costSMS().toFixed(2);
      totalElementBill.innerHTML = settingBillFac.totalCS().toFixed(2);

      if (settingBillFac.totalCS() < settingBillFac.warningCost()) {
        totalElementBill.classList.remove("warning")
        totalElementBill.classList.remove("danger")
      } else if (settingBillFac.totalCS() >= settingBillFac.warningCost() && settingBillFac.totalCS() < settingBillFac.criticalCost()) {
        totalElementBill.classList.add("warning")
        totalElementBill.classList.remove("danger")
      } else if (settingBillFac.totalCS() >= settingBillFac.criticalCost()) {
        totalElementBill.classList.add("danger")
        totalElementBill.classList.remove("warning")
      }
    }
  }
}

// eventListeners for Settings click
settingsBillBtn.addEventListener("click", settings);

//eventListeners for Bill click
billTotalBtn.addEventListener("click", billFunc);
