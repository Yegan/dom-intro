describe('The function Settings Bill', function(){
  it("'The function should take in a call or sms value and tally this total accordingly", function(){


    var factorySettings = SettingsBillFactory();
    factorySettings.costOfCall(5)
    factorySettings.costWarning(10)
    factorySettings.costCritical(15)
    factorySettings.calculateBill('call');
    assert.equal(factorySettings.totalCS(),5);
  });

  it("'The function should take in a call or sms value and tally this total accordingly", function(){


    var factorySettings = SettingsBillFactory();
    factorySettings.costOfCall(10)
    factorySettings.costWarning(20)
    factorySettings.costCritical(30)
    factorySettings.calculateBill('call');
    assert.equal(factorySettings.totalCS(),10);
  });
});
