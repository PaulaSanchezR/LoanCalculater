//*********************************************** */
// We bring all the inputs form the calc-loan-form
// Using the eventlistener to get all the inputs
//*********************************************** */


document.getElementById("calc-loan-form").addEventListener("submit", loanRepaymentCalculator)

function loanRepaymentCalculator(e){
    
  

    const starDate= document.getElementById("starDate").value;
    const loadAmount = parseInt(document.getElementById("loadAmount").value);
    const installAmount= parseInt(document.getElementById("installAmount").value);
    const interesRate= parseFloat(document.getElementById("interesRate").value);
    const installmentInterval= document.getElementById("installmentInterval").value;
  
        
   
     //  Calc the total amount to pay plus the interes
  //  let amountPlusInteres = loadAmount +( loadAmount * (interesRate/100));
    // Cals the installAmount plus the interes
   // let installAmountPlusInteres= installAmount + (installAmount * (interesRate/100));
    // divided the amountPlusInteres in the installAmount provide by the customer
  //  let calcAmountOfQuotes= (amountPlusInteres/installAmountPlusInteres)+1;
      
//** Creating the Payment Object */


        let amountPlusInteres = loadAmount +( loadAmount * (interesRate/100));
        let installAmountPlusInteres = installAmount + (installAmount * (interesRate/100));
        let calcAmountOfQuotes= (amountPlusInteres/installAmountPlusInteres)+1;
        const arraypayment = [{
                            date: '',
                            amount: '',
                            payment : ''
                        }];
        for(i=1; i<=calcAmountOfQuotes-1; i++){
        
            console.log("**",amountPlusInteres);
            if (amountPlusInteres > installAmountPlusInteres){
                amountPlusInteres = amountPlusInteres - Math.round(installAmountPlusInteres);
                installAmountPlusInteres = installAmountPlusInteres;
                }
            else {
                installAmountPlusInteres = amountPlusInteres
                i = 10
            }
            arraypayment.push({ date: "02/12/2018", amount : installAmountPlusInteres, payment : installAmountPlusInteres});

        }
     console.log(arraypayment);

    console.log("quota a pagar", installAmountPlusInteres)
    console.log("total", amountPlusInteres);
    console.log("Calculo del la cantidad de quotas ", calcAmountOfQuotes)

   printLoanInformation(calcAmountOfQuotes,amountPlusInteres,starDate,installAmountPlusInteres,installmentInterval);

e.preventDefault();
}

// ********************************************
// Function that will print the Loan Information
// *********************************************
function printLoanInformation(calcAmountOfQuotes,amountPlusInteres,starDate,installAmountPlusInteres,installmentInterval){
 // Create a loop to print the information on the index.html


 console.log("quota a pagar", installAmountPlusInteres)
 console.log("total", amountPlusInteres);
 console.log("Calculo del la cantidad de quotas ", calcAmountOfQuotes)
 const theadInfo= ["QUOTA","DATE","LOAN AMOUNT","PAYMENT","INTEREST"]
 generateTableHead(theadInfo);
 generateTable(theadInfo,calcAmountOfQuotes,amountPlusInteres,starDate,installAmountPlusInteres,installmentInterval)

   return;
}



//*** FUNCTION TO CREATE THE TABLE HEAD */
// we pass the theadarray
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


function generateTable(theadInfo,calcAmountOfQuotes,amountPlusInteres,starDate,installAmountPlusInteres,installmentInterval){
    for (i=0; i < calcAmountOfQuotes; i++) {
        let row = table.insertRow();
        for(j=0; j < theadInfo.length; j++)  {
            let cell = row.insertCell();
            let text = document.createTextNode(starDate);
            cell.appendChild(text)
        }  
    }

}



// let totalAmount = 229.28;
// let intervalPaymnet = 22.928;
// const arraypayment = [{
// date: '',
// amount: '',
// payment : ''}];
//  for(i=1; i<=11-1; i++){
  
// console.log("**",totalAmount);
// if (totalAmount > 22.928){
// totalAmount = totalAmount - Math.round(intervalPaymnet);
// intervalPaymnet = intervalPaymnet;
//     }
// else {
//    intervalPaymnet = totalAmount
//    i = 10
// }
// arraypayment.push({ date: "02/12/2018", amount : intervalPaymnet, payment : totalAmount});

//  }



// let totalAmount = amountPlusInteres;
// let intervalPaymnet = installAmountPlusInteres;
// const arraypayment = [{
//                     date: '',
//                     amount: '',
//                     payment : ''
//                 }];
// for(i=1; i<=calcAmountOfQuotes-1; i++){

//     console.log("**",totalAmount);
//     if (totalAmount > intervalPaymnet){
//         totalAmount = totalAmount - Math.round(intervalPaymnet);
//         intervalPaymnet = intervalPaymnet;
//         }
//     else {
//         intervalPaymnet = totalAmount
//         i = 10
//     }
//     arraypayment.push({ date: "02/12/2018", amount : intervalPaymnet, payment : totalAmount});

// }
// console.log(arraypayment);