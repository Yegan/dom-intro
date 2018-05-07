describe("The function Radio Bill", function() {
  it("The function should calculate and taly the cost once the button is selected", function() {
    var factoryRadio = RadioBillFactory();

    factoryRadio.calculate('call');
    factoryRadio.calculate('sms');

    assert.equal(factoryRadio.total(), 3.50);

  });

  it("The function should calculate and taly the cost once the button is selected", function() {
    var factoryRadio = RadioBillFactory();

    factoryRadio.calculate('call');
    factoryRadio.calculate('call');

    assert.equal(factoryRadio.total(), 5.50);

  });

});
