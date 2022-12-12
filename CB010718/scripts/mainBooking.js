// Booking Page
// Selected date
const txtSelectedDate = document.getElementById('selectedDate');

document.addEventListener('change', () => {
    let date = txtSelectedDate.value;
    // where should we display the date?
});

// Getting guest details
const txtFullName = document.getElementById('fname'),
txtEmail = document.getElementById('email'),
txtEmailCheck = document.getElementById('checkEmail'),
txtPhone = document.getElementById('mNumber'),
txtGender = document.getElementById('gender')
txtNameValidation = document.getElementById('nameValidation');
txtPhoneValidation = document.getElementById('numValidation');
txtEmailValidation = document.getElementById('emailValidation');
btnSubmit = document.getElementById('guestSubmit');

btnSubmit.addEventListener('click', () => {
    let name = txtFullName.value;
    if (name === ''){
        txtNameValidation.innerText = 'Please enter full name';
    }
    else{
        txtNameValidation.innerText = '';
    }
    let phone = txtPhone.value; 
    if (phone.length !== 10){
        txtPhoneValidation.innerText = 'Please enter a valid phone number';
    }
    else{
        txtPhoneValidation.innerText = '';
    }
    let email = txtEmail.value;
    let emailCheck = txtEmailCheck.value;
    if(email === ''){
        txtEmailValidation.innerText = 'Please enter email';
    }
    if(email !== emailCheck){
        txtEmailValidation.innerText = 'Emails do not match';
    }
    else{
        txtEmailValidation.innerText = '';
    }
    let gender = txtGender.value;
    //Where should we display the guest details?
});

// Ticket Count Increase and Decrease

const plus = document.querySelector('.plus1'),
minus = document.querySelector('.minus1'),
num = document.querySelector('.num1');

const plus2 = document.querySelector('.plus2'),
minus2 = document.querySelector('.minus2'),
num2 = document.querySelector('.num2');

const plus3 = document.querySelector('.plus3'),
minus3 = document.querySelector('.minus3'),
num3 = document.querySelector('.num3');

const plus4 = document.querySelector('.plus4'),
minus4 = document.querySelector('.minus4'),
num4 = document.querySelector('.num4');

const plus5 = document.querySelector('.plus5'),
minus5 = document.querySelector('.minus5'),
num5 = document.querySelector('.num5');

let slChildCount ;
let slAdultCount ;
let foreignerAdultCount ;
let foreignerChildCount ;
let infantCount ;
let SLAdultPaas ;
let SLChildPass ;
let foreignerAdultPass ;
let foreignerChildPass ;
let infantPass ;
let headCount ;
let total ;
let overallTotal;

window.addEventListener('load', () => {
    slChildCount = 0;
    slAdultCount = 0;
    foreignerAdultCount = 0;
    foreignerChildCount = 0;
    infantCount = 0;
    overallTotal = 0;
    SLAdultPaas = 1200.00;
    SLChildPass = 700.00;
    foreignerAdultPass = 5500.00;
    foreignerChildPass = 2700.00;
    headCount = slAdultCount + slChildCount + foreignerAdultCount + foreignerChildCount + infantCount;
    total = slAdultCount*SLAdultPaas + slChildCount*SLChildPass + 
    foreignerAdultCount*foreignerAdultPass + foreignerChildCount*foreignerChildPass;
});

//SL Parent Count
plus.addEventListener('click', () => {
    slAdultCount++;
    num.innerHTML = slAdultCount;
});

minus.addEventListener('click', () => {
    if (slAdultCount > 0){
        slAdultCount--;
        num.innerHTML = slAdultCount;
    }
});

//SL Child Count
plus2.addEventListener('click', () => {
    slChildCount++;
    num2.innerHTML = slChildCount;
});

minus2.addEventListener('click', () => {
    if (slChildCount > 0){
        slChildCount--;
        num2.innerHTML = slChildCount;
    }
});

//Foreigner Adult Count
plus3.addEventListener('click', () => {
    foreignerAdultCount++;
    num3.innerHTML = foreignerAdultCount;
});

minus3.addEventListener('click', () => {
    if (foreignerAdultCount > 0){
        foreignerAdultCount--;
        num3.innerHTML = foreignerAdultCount;
    }
});

//Foreigner Child Count
plus4.addEventListener('click', () => {
    foreignerChildCount++;
    num4.innerHTML = foreignerChildCount;
});

minus4.addEventListener('click', () => {
    if (foreignerChildCount > 0){
        foreignerChildCount--;
        num4.innerHTML = foreignerChildCount;
    }
});

//Foreigner Child Count
plus5.addEventListener('click', () => {
    infantCount++;
    num5.innerHTML = infantCount;
});

minus5.addEventListener('click', () => {
    if (infantCount > 0){
        infantCount--;
        num5.innerHTML = infantCount;
    }
});

//Overall Price
const txtOverall = document.getElementById('overall'),
duration = document.getElementById('duration'),
manipulateHTMLwithJS = document.getElementById('manipulateHTML'),
removeBtn = document.getElementById('remove'),
manipulateHTMLwithJS2 = document.getElementById('manipulateHTMLTotal'),
btnAddtoOrder = document.getElementById('addToOrder');

btnAddtoOrder.addEventListener('click',() =>{
    if(duration.value==='threeHours'){
        SLAdultPaas = 1200.00;
        SLChildPass = 700.00;
        foreignerAdultPass = 5500.00;
        foreignerChildPass = 2700.00;

        overallTotal = slAdultCount*SLAdultPaas + slChildCount*SLChildPass + 
        foreignerAdultCount*foreignerAdultPass + foreignerChildCount*foreignerChildPass;
    }
    
    if(duration.value==='halfDay'){
        SLAdultPaas = 1200.00 + 350.00;
        SLChildPass = 700.00 + 350.00;
        foreignerAdultPass = 5500.00 + 450.00;
        foreignerChildPass = 2700.00 + 450.00;

        overallTotal = slAdultCount*SLAdultPaas + slChildCount*SLChildPass + 
        foreignerAdultCount*foreignerAdultPass + foreignerChildCount*foreignerChildPass;

    }

    if(duration.value==='fullDay'){
        SLAdultPaas = 1200.00 + 600.00;
        SLChildPass = 700.00 + 600.00;
        foreignerAdultPass = 5500.00 + 800.00;
        foreignerChildPass = 2700.00 + 800.00;
    
        overallTotal = slAdultCount*SLAdultPaas + slChildCount*SLChildPass + 
        foreignerAdultCount*foreignerAdultPass + foreignerChildCount*foreignerChildPass;

    }

    manipulateHTMLwithJS.innerHTML += `
    <div id="overallCostTickets">
    <h3>Overall cost for tickets
    <p id="overall">
    SL Adult : ${slAdultCount} <br>
    SL Child : ${slChildCount} <br>
    Foreigner Adult : ${foreignerAdultCount} <br>
    Foreigner Child : ${foreignerChildCount} <br>
    Infant : ${infantCount} <br>
    <br>
    Overall Total : ${overallTotal.toFixed(2)} LKR <br>
    For ${duration.value}
    </p></h3>
    </div>`;
   
    total += overallTotal ;
    
    console.log(total); 
    manipulateHTMLwithJS2.innerHTML = `<div id="totalCostTickets">
    <h3>Total cost for tickets
    <p id="overall">
    Total : ${total.toFixed(2)} LKR <br>
    </p></h3>
    </div>`;
    
    slAdultCount = 0, slChildCount = 0, foreignerAdultCount = 0, foreignerChildCount = 0, infantCount = 0;
    num.innerHTML = 0, num2.innerHTML = 0, num3.innerHTML = 0, num4.innerHTML = 0, num5.innerHTML = 0;
   
});

removeBtn.addEventListener('click',() =>{
    manipulateHTMLwithJS.innerHTML = " ";
    
});

// //Total Price
// const txtTotal = document.getElementById('total'),
// btnPlaceOrder = document.getElementById('placeOrder');

// btnPlaceOrder.addEventListener('click',() =>{
//     if(duration.value==='threeHours'){
//         SLAdultPaas = 1200.00;
//         SLChildPass = 700.00;
//         foreignerAdultPass = 5500.00;
//         foreignerChildPass = 2700.00;

//         total = slAdultCount*SLAdultPaas + slChildCount*SLChildPass + 
//         foreignerAdultCount*foreignerAdultPass + foreignerChildCount*foreignerChildPass;

//         txtTotal.innerText = `Duration : Three Hours
//         Total : ${total.toFixed(2)} LKR`;
//     }
    
//     if(duration.value==='halfDay'){
//         SLAdultPaas = 1200.00 + 350.00;
//         SLChildPass = 700.00 + 350.00;
//         foreignerAdultPass = 5500.00 + 450.00;
//         foreignerChildPass = 2700.00 + 450.00;

//         total = slAdultCount*SLAdultPaas + slChildCount*SLChildPass + 
//         foreignerAdultCount*foreignerAdultPass + foreignerChildCount*foreignerChildPass;

//         txtTotal.innerText = `Duration : Half Day
//         Total : ${total.toFixed(2)} LKR`;
//     }

//     if(duration.value==='fullDay'){
//         SLAdultPaas = 1200.00 + 600.00;
//         SLChildPass = 700.00 + 600.00;
//         foreignerAdultPass = 5500.00 + 800.00;
//         foreignerChildPass = 2700.00 + 800.00;
    
//         total = slAdultCount*SLAdultPaas + slChildCount*SLChildPass + 
//         foreignerAdultCount*foreignerAdultPass + foreignerChildCount*foreignerChildPass;

//         txtTotal.innerText = `Duration : Full Day
//         Total : ${total.toFixed(2)} LKR`;
//     }

    
// });