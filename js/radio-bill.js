// get a reference to the sms or call radio buttons

//get a reference to the add button
var addBtn = document.querySelector(".radioBillAddBtn")
//create a variable that will keep track of the total bill
var totalRadioBill = document.querySelector(".totalTwo")
var callTotalTwo2 = document.querySelector(".callTotalTwo")
var smsTotalTwo2 = document.querySelector(".smsTotalTwo")
//add an event listener for when the add button is pressed

var radioFactory =  RadioBillFactory();

function radioTotal(){

  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

  if (checkedRadioBtn){
      var billItemType = checkedRadioBtn.value;
    }

    radioFactory.billCalculate(billItemType);


   callTotalTwo2.innerHTML = radioFactory.call().toFixed(2);
   smsTotalTwo2.innerHTML = radioFactory.sms().toFixed(2);

   totalRadioBill.innerHTML = radioFactory.total().toFixed(2);

var color = radioFactory.total();

   if (color >=50){
      totalRadioBill.classList.add("danger")
   }

   if (color >=30){
      totalRadioBill.classList.add("warning")
   }
}

addBtn.addEventListener("click", radioTotal)
