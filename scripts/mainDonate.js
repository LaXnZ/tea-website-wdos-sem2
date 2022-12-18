// Donate page
const submitDonate = document.getElementById('donateSubmit'),
    amount = document.getElementById('amount'),
    fName = document.getElementById('fName'),
    address = document.getElementById('address'),
    cNumber = document.getElementById('cNumber'),
    nameOnCard = document.getElementById('nameOnCard'),
    month = document.getElementById('month'),
    year = document.getElementById('year'),
    cvv = document.getElementById('cvv')
    formDonation = document.getElementById('donoUI');

submitDonate.addEventListener('click', () => { 

    if(amount.value == "" || fName.value == "" || address.value == "" || cNumber.value == "" || nameOnCard.value == "" || month.value == "" || year.value == "" || cvv.value == ""){
        alert("Please fill all the fields");
    }else{
        popupDiv.classList.add("open-popup");
        fName.value = "";
        address.value = "";
        cNumber.value = "";
        nameOnCard.value = "";
        month.value = "01";
        year.value = "22";
        cvv.value = "";
    }
    
});

/*Popup message*/
closePopupBtn = document.getElementById('closePopup'),
popupDiv = document.getElementById('popup');

closePopupBtn.addEventListener('click',closePopup);
function closePopup(){
    popupDiv.classList.remove("open-popup");
}