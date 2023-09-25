document.addEventListener('DOMContentLoaded', function () {
    var talkToUsButton = document.getElementById('talk-to-us');
    var surveyForm = document.getElementById('survey-form');
    var thankYouPage = document.getElementById('page-2'); // Updated to match the correct ID

    talkToUsButton.addEventListener('click', function () {
        var emailInput = document.getElementById('email').value;
        var countryCodeSelect = document.getElementById('country-code');
        var selectedCountry = countryCodeSelect.options[countryCodeSelect.selectedIndex].text;
        var mobileInput = document.getElementById('mobile-number').value;

        if (!validateEmail(emailInput)) {
            alert('Invalid email address');
            return;
        }

        if (!validateMobileNumber(mobileInput)) {
            alert('Invalid mobile number (10 digits required)');
            return;
        }

        surveyForm.style.display = 'none';
        thankYouPage.style.display = 'block';

        var emailDisplay = document.getElementById('thank-you-email');
        var phoneDisplay = document.getElementById('thank-you-phone');
        emailDisplay.textContent = 'Email Address: ' + emailInput;
        phoneDisplay.textContent = 'Contact Number: ' + selectedCountry + '-' + mobileInput;
    });

    function validateEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validateMobileNumber(number) {
        var mobileRegex = /^\d{10}$/;
        return mobileRegex.test(number);
    }
});


