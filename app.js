//*********************************************** */
// We bring all the inputs form the calc-loan-form
// Using the eventlistener to get all the inputs
//*********************************************** */


document.getElementById("calc-loan-form").addEventListener("submit", loanRepaymentCalculator)

//************************** */
//*****MAIN FUNCTION ********/
// Function that get all the inputs and process all the calculations 
// 

function loanRepaymentCalculator(e){
  
    const starDate= document.getElementById("starDate").value;
    const loadAmount = parseInt(document.getElementById("loadAmount").value);
    const installAmount= parseInt(document.getElementById("installAmount").value);
    const interesRate= parseFloat(document.getElementById("interesRate").value);
    const installmentInterval= document.getElementById("installmentInterval").value;
  
   
        let amountPlusInteres = loadAmount +( loadAmount * (interesRate/100));
        let installAmountPlusInteres = installAmount + (installAmount * (interesRate/100));
        let calcAmountOfQuotes = (amountPlusInteres/installAmount)
        //let calcAmountOfQuotes= (amountPlusInteres/installAmountPlusInteres)+1;
         // **** CREATE  ARRAYPAYMENT OBJECT ******
        //const arraypayment = createPaymentObject(amountPlusInteres ,installAmountPlusInteres,calcAmountOfQuotes,starDate,installmentInterval);  
        const arraypayment = createPaymentObject(amountPlusInteres ,installAmount,calcAmountOfQuotes,starDate,installmentInterval); 
     console.log(arraypayment);
     // Changing the date format to avoid one day off in my date
     

     
    // console.log("quota a pagar", installAmountPlusInteres)
    // console.log("total", amountPlusInteres);
    // console.log("Calculo del la cantidad de quotas ", calcAmountOfQuotes)
   //*** CALLING THE PRINTER FUNCTION */
    printLoanInformation(arraypayment);

e.preventDefault();
}

// ********************************************
// Function that create the payment Object
// *********************************************
//function createPaymentObject(amountPlusInteres ,installAmountPlusInteres,calcAmountOfQuotes,starDate,installmentInterval){
    function createPaymentObject(amountPlusInteres ,installAmount,calcAmountOfQuotes,starDate,installmentInterval){  
    const arraypayment = [{
        date: '',
        payment : '',
        amount: ''
      
    }];
     for(i=1; i<=calcAmountOfQuotes; i++){

       // console.log("**",amountPlusInteres);
        if (amountPlusInteres >= installAmount){
            amountPlusInteres = amountPlusInteres - Math.round(installAmount);
            installAmount = installAmount;
           // let realDate = dateInterval(starDate,installmentInterval);
           // console.log("Object realdate",realDate)
        }
        else {
            installAmount = amountPlusInteres
           
        }
        

            arraypayment.push({ date: dateInterval(starDate,installmentInterval,i),  payment : amountPlusInteres, amount : installAmount});
      }
    return arraypayment;
}



// ********************************************
// Function that will print the correct date
// *********************************************
function dateInterval(starDate,installmentInterval,i){  
    // i =  increment the days or months
    const myDate = new Date(starDate.replace(/-/g, '\/'));
    let dayDate= myDate.getDate(i);
    console.log("day with i",dayDate)
    console.log("i==", i)
    switch(installmentInterval){
         case "daily":
             myDate.setDate(myDate.getDate()+i)
         break;

         case "year":
            myDate.setMonth(myDate.getMonth()+i)
         break; 
     }

     return myDate;
    }


//*** DATE FORMAT FUNCTIONS*/
//Pad function to add a 0 on front of the single month digit */
function pad(n) {
    return n<10 ? '0'+n : n;
}
// Print the correct day
function daysOfWeek(day){
    const daysArray=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return daysArray[day];
}

function weekenDays(myDate){
   console.log("****inside fucntion weekday", myDate)
    if(myDate.getDay() === 6 ){
        myDate.setDate(myDate.getDate() + 2) ;
        console.log("inside 5", myDate)
    } 
    else if(myDate.getDay() === 0 ) {
         myDate.setDate(myDate.getDate() + 1) ;
         console.log("inside 6", myDate)
    }
    else {
        myDate.setDate(myDate.getDate())
        console.log("else", myDate);
        
    }
        
        
    return myDate;
}

// ********************************************
// Function that will print the Loan Information
// *********************************************
function printLoanInformation(arraypayment){
 const theadInfo= ["DATE","LOAN AMOUNT","PAYMENT"]
 generateTableHead(theadInfo);
 generateTable(theadInfo,arraypayment)
   return;
}


//**************************************** */
//*** FUNCTIONS TO CREATE THE TABLE HEAD AND THE ROWS */
// we pass the theadarray
//**************************************** */
function generateTableHead(theadInfo){
 
    let thead = table.createTHead();
    thead.setAttribute('class', 'col-lg-12')
    let row = thead.insertRow();
    for (i=0; i < theadInfo.length; i++) 
          {
              let th = document.createElement("th");
              let text = document.createTextNode(theadInfo[i]);
              th.appendChild(text);
              row.appendChild(th);
          }
    document.getElementById("loanTable").appendChild(table)      
     return;
}



function generateTable(theadInfo,arraypayment){
    console.log(arraypayment)
     for (let element of arraypayment) {
         let row = table.insertRow();
       for(key in element)  {
    let cell = row.insertCell();
           let text = document.createTextNode(element[key]);
           cell.appendChild(text)
      }  
     }
}

