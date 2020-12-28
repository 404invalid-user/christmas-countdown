function calculateChristmasCountdown() {

    var now = new Date();
    var days = 0;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;

    var theMonth = (now.getMonth() + 1);
    var currentDate = now.getDate();
    var nextYearChristmas = now.getFullYear();

    if (theMonth == 12 && currentDate > 25) {
        nextYearChristmas = nextYearChristmas + 1;
    }

    var nextChristmasDate = nextYearChristmas + '-12-25T00:00:00.000Z';
    var christmasDay = new Date(nextChristmasDate);
    var diffSeconds = Math.floor((christmasDay.getTime() - now.getTime()) / 1000);

    if (theMonth != 12 || (theMonth == 12 && currentDate != 25)) {
        days = Math.floor(diffSeconds / (3600 * 24));
        diffSeconds -= days * 3600 * 24;
        hours = Math.floor(diffSeconds / 3600);
        diffSeconds -= hours * 3600;
        minutes = Math.floor(diffSeconds / 60);
        diffSeconds -= minutes * 60;
        seconds = diffSeconds;
    }

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    setTimeout(calculateChristmasCountdown, 1000);
}

calculateChristmasCountdown();