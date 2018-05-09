describe("The function Radio Bill", function() {
  it("The function should calculate and taly the cost once the button is selected", function() {
    var factoryRadio = RadioBillFactory();

    factoryRadio.billCalculate('call');
    factoryRadio.billCalculate('sms');
    factoryRadio.billCalculate('call');
    assert.equal(factoryRadio.total(), 6.25);

  });

  it("The function should calculate and taly the cost once the button is selected", function() {
    var factoryRadio = RadioBillFactory();

    factoryRadio.billCalculate('call');
    factoryRadio.billCalculate('call');

    assert.equal(factoryRadio.total(), 5.50);

  });

});
