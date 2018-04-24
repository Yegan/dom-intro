function textBillFactory(){
  var callsTotal = 0;
  var smsTotal = 0;

function textBillTotal(billType){


    // get the value entered in the billType textfield
    var billTypeEntered = billType.value;
    // update the correct total
    if (billTypeEntered === "call"){
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }


  }

  function callTotalReturn(){
    return callsTotal;
  }

  function smsTotalReturn(){
    return smsTotal;
  }
  return {
    billTotal: textBillTotal,
    call: callTotalReturn,
    sms: smsTotalReturn,
  }
}
