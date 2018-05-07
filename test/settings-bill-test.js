describe('The function should take in a call or sms value and tally this total accordingly', function(){
  it("The one function is going to store values and the second will tally these amounts stored together", function(){


    var factorySettings = SettingsBillFactory();
    factorySettings.costOfCall(5)
    factorySettings.costWarning(10)
    factorySettings.costCritical(15)
    factorySettings.calculateBill('call');
    assert.equal(factorySettings.totalCS(),5);
  });

  it("The one function is going to store values and the second will tally these amounts stored together", function(){


    var factorySettings = SettingsBillFactory();
    factorySettings.costOfCall(10)
    factorySettings.costWarning(10)
    factorySettings.costCritical(15)
    factorySettings.calculateBill('call');
    assert.equal(factorySettings.totalCS(),10);
  });
});
