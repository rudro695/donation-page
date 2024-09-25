// // Initial amount in the navbar
// let navbarAmount = 1000;
// let cardAmount = 0;

// // Get the elements
// const donationButton = document.getElementById('donationButton');
// const historyButton = document.getElementById('historyButton');
// const donationCard = document.getElementById('donationCard');
// const donateButton = document.getElementById('donateButton');
// const donationInput = document.getElementById('donationInput');
// const navbarAmountSpan = document.getElementById('navbarAmount');
// const cardAmountSpan = document.getElementById('cardAmount');


let navbarAmount = 1000;
let cardAmount = 0;
// get the elements

const donationButton = document.getElementById('donation-btn');
const historyButton = document.getElementById('history-btn');
const donationCard = document.getElementById('donation-card');
const donateButton = document.getElementById('donation-button');
const donationInput = document/getElementById('donation-atz');
const navbarAmountSpan = document.getElementById('nav-btn');
const cardAmountSpan = document.getElementById('card-amount');

  
//   show the donation button is clicked
donateButton.addEventListener('click',function(){
    donationCard.classList.toggle('hidden');
})
// handle the donation process
donateButton.addEventListener('click',function(){
    const donationValue = parseFloat(donationInput.value);
    if (donationValue > 0 && donationValue <= navbarAmount) {
        // add to card total amount
        cardAmount += donationValue;
        cardAmountSpan.textContent = `$${navbarAmount}`;
        //  clear the input filed 
        donationInput.value = '';
    }
    else{
        alert('invalid donation amount');

    }
});
