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
txtGender = document.getElementById('gender'),
txtDate = document.getElementById('selectedDate'),
txtNameValidation = document.getElementById('nameValidation');
txtPhoneValidation = document.getElementById('numValidation');
txtEmailValidation = document.getElementById('emailValidation');
txtForm = document.getElementById('guestForm');


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
let total ;
let overallTotal;
let loyaltyPoints ;

window.addEventListener('load', () => {
    slChildCount = 0;
    slAdultCount = 0;
    foreignerAdultCount = 0;
    foreignerChildCount = 0;
    infantCount = 0;
    overallTotal = 0;
    loyaltyPoints = 0;
    SLAdultPaas = 1200.00;
    SLChildPass = 700.00;
    foreignerAdultPass = 5500.00;
    foreignerChildPass = 2700.00;
    date = new Date().toLocaleDateString();
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
let bookingData = [];
let totalOrders = [];
let headCountArray = [];
let favourites = [];

btnAddtoOrder.addEventListener('click',() =>{
    if(duration.value==='3 Hours'){
        SLAdultPaas = 1200.00;
        SLChildPass = 700.00;
        foreignerAdultPass = 5500.00;
        foreignerChildPass = 2700.00;

        overallTotal = slAdultCount*SLAdultPaas + slChildCount*SLChildPass + 
        foreignerAdultCount*foreignerAdultPass + foreignerChildCount*foreignerChildPass;
    }
    
    if(duration.value==='12 Hours'){
        SLAdultPaas = 1200.00 + 350.00;
        SLChildPass = 700.00 + 350.00;
        foreignerAdultPass = 5500.00 + 450.00;
        foreignerChildPass = 2700.00 + 450.00;

        overallTotal = slAdultCount*SLAdultPaas + slChildCount*SLChildPass + 
        foreignerAdultCount*foreignerAdultPass + foreignerChildCount*foreignerChildPass;
    }

    if(duration.value==='24 Hours'){
        SLAdultPaas = 1200.00 + 600.00;
        SLChildPass = 700.00 + 600.00;
        foreignerAdultPass = 5500.00 + 800.00;
        foreignerChildPass = 2700.00 + 800.00;
    
        overallTotal = slAdultCount*SLAdultPaas + slChildCount*SLChildPass + 
        foreignerAdultCount*foreignerAdultPass + foreignerChildCount*foreignerChildPass;

    }

    manipulateHTMLwithJS.innerHTML = `
    <div id="overallCostTickets">
    <h3>Your Last Order Details
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
    headCount = slAdultCount + slChildCount + foreignerAdultCount + foreignerChildCount + infantCount;
    headCountArray.push(headCount);
    console.log(headCountArray);

    totalOrders.push(overallTotal);
    console.log(totalOrders);
    
    bookingData.push({LocalAdults : slAdultCount,LocalChilds:slChildCount,ForeignAdults:foreignerAdultCount,
        ForeignChilds:foreignerChildCount,Infants:infantCount,Duration:duration.value,Total:overallTotal });
        
    displayTableData();

    slAdultCount = 0, slChildCount = 0, foreignerAdultCount = 0, foreignerChildCount = 0, infantCount = 0;
    num.innerHTML = 0, num2.innerHTML = 0, num3.innerHTML = 0, num4.innerHTML = 0, num5.innerHTML = 0;
   
    
});

removeBtn.addEventListener('click',() =>{  //clear all the data
    slAdultCount = 0, slChildCount = 0, foreignerAdultCount = 0, foreignerChildCount = 0, infantCount = 0;
    num.innerHTML = 0, num2.innerHTML = 0, num3.innerHTML = 0, num4.innerHTML = 0, num5.innerHTML = 0;
    total = 0;

    manipulateHTMLwithJS.innerHTML =`<br>`;
    manipulateHTMLwithJS2.innerHTML =`<br>`;
    bookingData.splice(0,bookingData.length);
    displayTableData();
    // totalOrders=[];
});

//Popup message

const closePopupBtn = document.getElementById('closePopup'),
popupDiv = document.getElementById('popup');

closePopupBtn.addEventListener('click',closePopup);
function closePopup(){
    popupDiv.classList.remove("open-popup");
}

// Add to Favouites
const addToFavBtn = document.getElementById('addToFav');
addToFavBtn.addEventListener('click',() =>{
    if(duration.value==='3 Hours'){
        SLAdultPaas = 1200.00;
        SLChildPass = 700.00;
        foreignerAdultPass = 5500.00;
        foreignerChildPass = 2700.00;

        overallTotal = slAdultCount*SLAdultPaas + slChildCount*SLChildPass + 
        foreignerAdultCount*foreignerAdultPass + foreignerChildCount*foreignerChildPass;
    }
    
    if(duration.value==='12 Hours'){
        SLAdultPaas = 1200.00 + 350.00;
        SLChildPass = 700.00 + 350.00;
        foreignerAdultPass = 5500.00 + 450.00;
        foreignerChildPass = 2700.00 + 450.00;

        overallTotal = slAdultCount*SLAdultPaas + slChildCount*SLChildPass + 
        foreignerAdultCount*foreignerAdultPass + foreignerChildCount*foreignerChildPass;
    }

    if(duration.value==='24 Hours'){
        SLAdultPaas = 1200.00 + 600.00;
        SLChildPass = 700.00 + 600.00;
        foreignerAdultPass = 5500.00 + 800.00;
        foreignerChildPass = 2700.00 + 800.00;
    
        overallTotal = slAdultCount*SLAdultPaas + slChildCount*SLChildPass + 
        foreignerAdultCount*foreignerAdultPass + foreignerChildCount*foreignerChildPass;

    }

    favourites.push({LocalAdults : slAdultCount,LocalChilds:slChildCount,ForeignAdults:foreignerAdultCount,
    ForeignChilds:foreignerChildCount,Infants:infantCount,Duration:duration.value,Total:overallTotal });

    let favJSON = JSON.stringify(favourites[favourites.length-1]);
    console.log(favJSON + ": Added to Favourites");
   
    localStorage.setItem('favourite',favJSON);
    slAdultCount = 0, slChildCount = 0, foreignerAdultCount = 0, foreignerChildCount = 0, infantCount = 0;
    num.innerHTML = 0, num2.innerHTML = 0, num3.innerHTML = 0, num4.innerHTML = 0, num5.innerHTML = 0;
    total = 0;

});
// Order Favouites
const orderFavBtn = document.getElementById('orderFav');
orderFavBtn.addEventListener('click',() =>{
    let JSONFav = localStorage.getItem('favourite');
    let JSFav = JSON.parse(JSONFav);
    console.log(JSFav);
    bookingData.push(JSFav);
    displayTableData(JSFav);

});

//Total Price with Place order button
const txtTotal = document.getElementById('total'),
btnPlaceOrder = document.getElementById('placeOrder');


// place order button with message + form validation
btnPlaceOrder.addEventListener('click',() =>{
    let JSONFav = localStorage.getItem('favourite');
    let JSFav = JSON.parse(JSONFav);

    console.log(totalOrders);

    let realTotal = 0 ;
    for (let i = 0; i < totalOrders.length; i++) {
        realTotal += totalOrders[i];
    }
    
    realTotal += JSFav.Total;

    let realHeadCount = 0 ;
    for (let i = 0; i < headCountArray.length; i++) {
        realHeadCount += headCountArray[i];
    }
    realHeadCount += JSFav.LocalAdults + JSFav.LocalChilds + JSFav.ForeignAdults + JSFav.ForeignChilds + JSFav.Infants;

    // console.log(total);

        let name = txtFullName.value;
        if (name === ''){
            txtNameValidation.innerHTML = 'Please enter full name';
        }
        else{
            txtNameValidation.innerHTML = '';
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
        if(email === '' || emailCheck === ''){
            txtEmailValidation.innerText = 'Please enter email';
        }
        else if(email !== emailCheck){
            txtEmailValidation.innerText = 'Emails do not match';
        }
        else{
            txtEmailValidation.innerText = '';
        }
        if (name!=='' && phone.length === 10 && email !== '' && emailCheck !== '' && email === emailCheck) {
            bookingData.splice(0,bookingData.length);
            displayTableData();

            manipulateHTMLwithJS2.innerHTML = `<div id="totalCostTickets">
            <h3>Your e-bill for tickets
            <p id="overall">
            Name : ${name} <br>
            Gender : ${txtGender.value} <br>
            Phone : ${phone} <br>
            Email : ${email} <br>
            Booked Date : ${txtDate.value} <br>
            ----------------------------------------<br>
            Total : ${realTotal.toFixed(2)} LKR <br>
            For ${realHeadCount} people
            </p></h3>
            <h5 id="emailValidation">Copy of this e-bill 
            sended to your e-mail.</h5>
            </div>`;


            manipulateHTMLwithJS.innerHTML =`<br>`;
            popupDiv.classList.add("open-popup");
            txtForm.reset();
    }
        let gender = txtGender.value;
    //Where should we display the guest details?
});




function displayTableData(){
    let html = "<table border='1|1' class='table'>";
    setTimeout(() => {
        html += "<thead>";
        html += "<tr>";
        html += "<th>No.</th>";
        html += "<th>Local Adults</th>";
        html += "<th>Local Childs</th>";
        html += "<th>Foreign Adults</th>";
        html += "<th>Foreign Childs</th>";
        html += "<th>Infants</th>";
        html += "<th>Duration</th>";
        html += "<th>Total</th>";
        html += "<th>Action</th>";
        html += "</tr>";
        html += "</thead>";

        for (let i = 0; i < bookingData.length; i++) {
            let no = i+1;
            html += "<tr>";
            html += "<td>" + no + "</td>";
            html += "<td>" + bookingData[i].LocalAdults + "</td>";
            html += "<td>" + bookingData[i].LocalChilds + "</td>";
            html += "<td>" + bookingData[i].ForeignAdults + "</td>";
            html += "<td>" + bookingData[i].ForeignChilds + "</td>";
            html += "<td>" + bookingData[i].Infants + "</td>";
            html += "<td>" + bookingData[i].Duration + "</td>";
            html += "<td>" + bookingData[i].Total + "</td>";
            html += "<td>" + `<button class='bookingDelButton' onclick='removeItem(${i})'>Delete</button>` + "</td>";
            html += "</tr>";
        }
        console.log(bookingData);
        html += "</table>";
        document.getElementById("table").innerHTML = html;
    }, 10);
};
displayTableData();

// function removeItem(rec){
//     console.log(rec);
//     let filt = bookingData.filter((a,i) => {
//         if(rec == a.no){
//         bookingData.splice(i,1);
//         }
//     })
//     displayTableData();
// }

function removeItem(i){
    bookingData.splice(i,1);
    headCountArray.splice(i,1);
    totalOrders.splice(i,1);
    displayTableData();
    // console.log(totalOrders);
}

// function addToFav(i){
//     let fav = JSON.stringify(bookingData[i]);
//     localStorage.setItem('favourite',fav);
// }


// Loyalty points

const loyaltyButton = document.getElementById('checkLoyalty'),
txtLoyaltyPoint = document.getElementById('loyaltyPointOut');

loyaltyButton.addEventListener('click',() =>{
    let JSONFav = localStorage.getItem('favourite');
    let JSFav = JSON.parse(JSONFav);
    
    let realHeadCount = 0 ;
    for (let i = 0; i < headCountArray.length; i++) {
        realHeadCount += headCountArray[i];
    }
    realHeadCount += JSFav.LocalAdults + JSFav.LocalChilds + JSFav.ForeignAdults + JSFav.ForeignChilds + JSFav.Infants;

    if (realHeadCount > 3){
        loyaltyPoints = realHeadCount * 15;
    }

    localStorage.setItem('loyaltyPoints',loyaltyPoints);

    txtLoyaltyPoint.innerHTML = `<div id="loyaltyPoints">
    <h3>-Loyalty Points-
    <p id="overall">
    You have ${loyaltyPoints} loyalty points
    </p></h3>
    <h5 id="emailValidation">You can redeem loyalty points
    from the finance.</h5>
    </div>`;
});