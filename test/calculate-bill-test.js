describe("the function Calculate Bill", function() {
  it("the function should calculate the phone bill based on the elements in the string whether it is a call or sms", function() {
    assert.equal(calculateBtnClicked("call,sms,call,sms"), 7);
  });

  it("the function takes in string of call and sms and gives a total for these values", function() {
    assert.equal(calculateBtnClicked("call,sms,call,sms,call"), 9.75);
  });

});
