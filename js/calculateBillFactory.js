function calculateBtnClicked(billStringElements){

  var billItems = billStringElements.split(",");

  var billTotal = 0;

  for (var i = 0; i < billItems.length; i++) {
  var billItem = billItems[i];

      if (billItem === "call") {
      billTotal += 2.75;
    } else if (billItem === "sms") {
      billTotal += 0.75;
    }
  }
  var roundedBillTotal = billTotal.toFixed(2);
  return roundedBillTotal
}
