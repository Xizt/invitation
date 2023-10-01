(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
})(jQuery);


$(document).on('click', function(){
    document.getElementById("my_audio").play();
    console.log('Shaadi me zaroor aana');
});

// Set the date we're counting down to
var countDownDate = new Date("Dec 25, 2023 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".countdown").innerHTML = "Bless the married couple for a happy life!";
    } else {
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Output the result in the respective elements
        document.getElementById("days").innerHTML = days + "D";
        document.getElementById("hours").innerHTML = hours + "H";
        document.getElementById("minutes").innerHTML = minutes + "M";
        document.getElementById("seconds").innerHTML = seconds + "S";
    }
}, 1000);


// being a bit cool :p  
var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 4px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

// Function to get query parameters
function getQueryParam(param) {
    let searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(param);
}

// Function to decode Base64 string
function decodeBase64(data) {
    try {
        let decodedString = atob(data);
        return decodedString;
    } catch (e) {
        console.error("Error decoding Base64:", e);
        return null;
    }
}

let encodedName = getQueryParam('name');
if (encodedName) {
    let decodedName = decodeBase64(encodedName);
    if (decodedName) {
        let customMessage = `<strong>Dear ${decodedName} </strong>, we're eagerly looking forward to sharing one of our family's most cherished moments with you!`;
        document.getElementById('customMessage').innerHTML = customMessage;
    }
}
