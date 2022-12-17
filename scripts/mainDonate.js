// Donate page
const submitDonate = document.getElementById('donateSubmit');

submitDonate.addEventListener('click', () => { 

    if (document.getElementById('amount').value === '') {
        alert('Please enter a valid amount');
    }
    else if (document.getElementById('fName').value === '') {
        alert('Name is required');
    }
    else if (document.getElementById('address').value === '') {
        alert('Address is required');
    }
    else if (document.getElementById('cNumber').value === '') {
        alert('Card number is required');
    }
    else if (document.getElementById('cNumber').value === '') {
      alert('Invalid card number');
  }
    else if (document.getElementById('nameOnCard').value === '') {
        alert('Card holder name is required');
    }
    else if (document.getElementById('month').value === '') {
        alert('Expiry date (month) is required');
    }
    else if (document.getElementById('year').value === '') {
        alert('Expiry date (year) is required');
    }
    else if (document.getElementById('cvv').value === '') {
        alert('CVV is required');
    }
    popupDiv.classList.add("open-popup");
    
});

/*Popup message*/
closePopupBtn = document.getElementById('closePopup'),
popupDiv = document.getElementById('popup');

closePopupBtn.addEventListener('click',closePopup);
function closePopup(){
    popupDiv.classList.remove("open-popup");
}