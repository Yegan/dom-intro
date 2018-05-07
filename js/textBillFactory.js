function TextBillFactory() {
  var callsTotal = 0;
  var smsTotal = 0;

  function textBillTotal(billType) {

    var billTypeEntered = billType;
    if (billTypeEntered === "call") {
      callsTotal += 2.75
    } else if (billTypeEntered === "sms") {
      smsTotal += 0.75;
    }


  }

  function callTotalReturn() {
    return callsTotal;
  }

  function smsTotalReturn() {
    return smsTotal;
  }

  function totalTotal() {
    var total = callsTotal + smsTotal;
    return total
  }
  return {
    billCalculate: textBillTotal,
    call: callTotalReturn,
    sms: smsTotalReturn,
    total: totalTotal,
  }

}
