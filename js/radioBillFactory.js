function RadioBillFactory() {

  var totalCall = 0;
  var totalSms = 0;

  function radioTotal(value) {

      if (value === "call") {
      totalCall += 2.75
    } else if (value === "sms") {
      totalSms += 0.75
    }

  }

  function callReturn() {
    return totalCall;
  }

  function smsReturn() {
    return totalSms;
  }

  function totalReturn() {
    var total = totalCall + totalSms;
    return total;
  }

  return {
    calculate: radioTotal,
    call: callReturn,
    sms: smsReturn,
    total: totalReturn,
  }

}
