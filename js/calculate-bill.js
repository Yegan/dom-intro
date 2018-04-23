//get a reference to the calculate button
var calculate = document.querySelector(".calculateBtn")
//get a reference to the billTotal element
var billTotalElement =document.querySelector(".billTotal")
//get a reference to the billString
var billStringElement =document.querySelector(".billString");
//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element
function calculateBtnClicked(){
      // get the string entered in the textArea
    var billString = billStringElement.value
    console.log(billString)
    var billItems = billString.split(",");
    console.log(billItems)
    // a variable for the total phone bill.
    var billTotal = 0;
    //loop over all the bill items
    for (var i=0;i<billItems.length;i++){
      console.log(billItems)
        var billItem = billItems[i].trim();
        console.log(billItem)
        //billItem is a string
        if (billItem === "call"){
          //billTotal is a number
            billTotal += 2.75;
        }

    //    console.log(billTotal)

       else if (billItem === "sms"){
            billTotal += 0.75;
        }
    }

    if (billTotal > 30){
        // adding the danger class will make the text red
        billTotalElement.classList.add("danger");
    }
    else if (billTotal > 20){
        billTotalElement.classList.add("warning");
    }


    //round to two decimals
    var roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;
 }
//link the function to a click event on the calculate button
calculate.addEventListener('click', calculateBtnClicked);
