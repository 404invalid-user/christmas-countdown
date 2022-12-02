var timeHours = (new Date()).getHours(); //get hours of the day in 24Hr format (0-23)

//check time every minute to change theme
checkDayTime();
setInterval(() => {
    checkDayTime()
}, 60000)


function checkDayTime() {
    if (timeHours > 6 || timeHours < 18) {
        //its day in local tz so apply light theme
        setLightTheme();
    } else {
        setDarkTheme();
    }
}


function setLightTheme() {
    document.querySelector('html').classList.add('light');
    document.querySelector('body').classList.add('light');
}

function setDarkTheme() {
    document.querySelector('html').classList.remove('light');
    document.querySelector('body').classList.remove('light');
}