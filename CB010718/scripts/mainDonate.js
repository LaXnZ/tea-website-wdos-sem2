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
    else if (document.getElementById('nameOnCard').value === '') {
        alert('Card holder name is required');
    }
    else if (document.getElementById('eDate').value === '') {
        alert('Expiry date is required');
    }
    else if (document.getElementById('cvv').value === '') {
        alert('CVV is required');
    }
    else {
        alert('Thank you for your donation!');
    }
});

