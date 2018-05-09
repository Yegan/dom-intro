describe("The function Text Bill", function() {

  it("The function should add a bill item type of call or sms", function() {

    var thisGotMadeByTheFactoryFunction = TextBillFactory();

    thisGotMadeByTheFactoryFunction.billCalculate('sms');
    thisGotMadeByTheFactoryFunction.billCalculate('call');

    assert.equal(thisGotMadeByTheFactoryFunction.total(), 3.50);

  });

  it("The function is checking the value of sms and giving a total", function() {

    var thisGotMadeByTheFactoryFunction = TextBillFactory();

    thisGotMadeByTheFactoryFunction.billCalculate('sms');

    assert.deepEqual(thisGotMadeByTheFactoryFunction.total(), 0.75);

  });
})
