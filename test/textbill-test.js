describe("The function should add a bill item type of call or sms", function() {

  it("The function should return the total tally for sms and call", function() {

    var thisGotMadeByTheFactoryFunction = TextBillFactory();

    thisGotMadeByTheFactoryFunction.billCalculate('sms');
    thisGotMadeByTheFactoryFunction.billCalculate('call');

    assert.equal(thisGotMadeByTheFactoryFunction.total(), 3.50);

  });

  it("The function should return the total tally for sms and call", function() {

    var thisGotMadeByTheFactoryFunction = TextBillFactory();

    thisGotMadeByTheFactoryFunction.billCalculate('sms');

    assert.deepEqual(thisGotMadeByTheFactoryFunction.total(), 0.75);

  });
})
