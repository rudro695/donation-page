
let navbarAmount = 1000;
let cardAmount = 0;
let donationHistory = [];

// get the elements

const donationButton = document.getElementById('donation-btn');
const historyButton = document.getElementById('history-btn');
const donationCard = document.getElementById('donation-card');
const donateButton = document.getElementById('donation-button');
const donationInput = document/getElementById('donation-atz');
const navbarAmountSpan = document.getElementById('nav-btn');
const cardAmountSpan = document.getElementById('card-amount');
const historySection = document.getElementById('history-section');
const historyList = document.getElementById('history-List');


donateButton.addEventListener('click',function(){
    donationCard.classList.toggle('hidden');
    historySection.classList.add('hidden');

});
historyButton.addEventListener('click',function () {
    historySection.classList.toggle('hidden');
    donationCard.classList.add('hidden');
});
donateButton.addEventListener('click',function() {
    const donationValue = parseFloat(donationInput.value);
    if (donationValue > 0 && donationValue <= navbarAmount) {
        // add to card total amount
        cardAmount += donationValue;
        cardAmountSpan.textContent = `$${navbarAmount}`;

        donationHistory.push(donationValue);

        donationInput.value = '';
    }
    else{
        alert('invalid donation amount');

    }
});

function updateHistiry() {
    historyList.innerHTML = '';


    
}


