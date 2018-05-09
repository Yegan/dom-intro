describe("The function Radio Bill", function() {
  it("The function is testing the value of call and sms and checking the total", function() {
    var factoryRadio = RadioBillFactory();

    factoryRadio.billCalculate('call');
    factoryRadio.billCalculate('sms');
    factoryRadio.billCalculate('call');
    assert.equal(factoryRadio.total(), 6.25);

  });

  it("The function is testing the value of call and giving the total", function() {
    var factoryRadio = RadioBillFactory();

    factoryRadio.billCalculate('call');
    factoryRadio.billCalculate('call');

    assert.equal(factoryRadio.total(), 5.50);

  });

  it("The function is adding call and sms and totalling this", function() {
    var factoryRadio = RadioBillFactory();

    factoryRadio.billCalculate('call');
    factoryRadio.billCalculate('call');
    factoryRadio.billCalculate('sms');
    factoryRadio.billCalculate('sms');
    assert.equal(factoryRadio.total(), 7);

  });

  it("The function is adding up call and sms and giving a total", function() {
    var factoryRadio = RadioBillFactory();

    factoryRadio.billCalculate('call');
    factoryRadio.billCalculate('call');
    factoryRadio.billCalculate('sms');
    factoryRadio.billCalculate('sms');
    factoryRadio.billCalculate('sms');
    factoryRadio.billCalculate('sms');
    factoryRadio.billCalculate('sms');
    assert.equal(factoryRadio.total(), 9.25);

  });

});
