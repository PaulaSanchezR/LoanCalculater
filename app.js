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
        let calcAmountOfQuotes= (amountPlusInteres/installAmountPlusInteres)+1;
         // **** CREATE  ARRAYPAYMENT OBJECT ******
        const arraypayment = createPaymentObject(amountPlusInteres ,installAmountPlusInteres,calcAmountOfQuotes,starDate,installmentInterval);  
       
     console.log(arraypayment);

    console.log("quota a pagar", installAmountPlusInteres)
    console.log("total", amountPlusInteres);
    console.log("Calculo del la cantidad de quotas ", calcAmountOfQuotes)
   //*** CALLING THE PRINTER FUNCTION */
    printLoanInformation(arraypayment);

e.preventDefault();
}

// ********************************************
// Function that create the payment Object
// *********************************************
function createPaymentObject(amountPlusInteres ,installAmountPlusInteres,calcAmountOfQuotes,starDate,installmentInterval){
    const arraypayment = [{
        date: '',
        payment : '',
        amount: ''
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
            arraypayment.push({ date: starDate,  payment : amountPlusInteres, amount : installAmountPlusInteres});
      }
    return arraypayment;
}

// get the months 
// var dts = new Date( "2019-10-15" );
// console.log("getMonth() : " + dts.getMonth() ); 




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


