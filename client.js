var max = 8;
var min = 2;
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var treeLights = document.querySelectorAll('.tree-light');
var topLights = document.querySelectorAll('.light-bulb');
let positions = [{
    top: '51%',
    left: '31%'
}, {
    top: '68%',
    left: '25%'
}, {
    top: '24%',
    left: '42%'
}, {
    top: '56%',
    left: '83%'
}, {
    top: '67%',
    left: '36%'
}, {
    top: '32%',
    left: '46%'
}, {
    top: '41%',
    left: '72%'
}, {
    top: '66%',
    left: '70%'
}, {
    top: '16%',
    left: '60%'
}, {
    top: '12%',
    left: '46%'
}, {
    top: '36%',
    left: '26%'
}, {
    top: '20%',
    left: '25%'
}, {
    top: '37%',
    left: '3%'
}, {
    top: '58%',
    left: '3%'
}, {
    top: '78%',
    left: '3%'
}, {
    top: '37%',
    left: '89%'
}, {
    top: '58%',
    left: '89%'
}, {
    top: '78%',
    left: '89%'
}, {
    top: '43%',
    left: '49%'
}, {
    top: '49%',
    left: '38%'
}, {
    top: '63%',
    left: '65%'
}, {
    top: '65%',
    left: '24%'
}, {
    top: '77%',
    left: '60%'
}, {
    top: '76%',
    left: '69%'
}, {
    top: '69%',
    left: '69%'
}, {
    top: '69%',
    left: '44%'
}, {
    top: '69%',
    left: '32%'
}, {
    top: '30%',
    left: '79%'
}, {
    top: '30%',
    left: '57%'
}, {
    top: '22%',
    left: '56%'
}, ];

for (let i = 0; i < treeLights.length; i++) {
    let getPos = positions[Math.floor(Math.random() * positions.length)];
    let lightColour = `tree-theme-${letters[Math.floor(Math.random() * letters.length)]}`;
    treeLights[i].style.top = getPos.top;
    treeLights[i].style.left = getPos.left;
    Math.floor(Math.random() * (max - min + 1)) + min;
    let randSpeed = Math.floor(Math.random() * (max - min + 1)) + min;;
    treeLights[i].style.animationDuration = randSpeed + 's';
    treeLights[i].classList.add(lightColour);
}
for (let i = 0; i < topLights.length; i++) {
    let lightColour = `theme-${letters[Math.floor(Math.random() * letters.length)]}`;
    let randSpeed = Math.floor(Math.random() * (max - min + 1)) + min;
    topLights[i].style.animationDuration = randSpeed + 's';
    topLights[i].classList.add(lightColour);
}


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


function getSearchParams() {
    if (location.search) {
        const values = location.search.replace('?', '').split('&').reduce((res, item) => {
            const data = item.trim().split('=');
            return {...res,
                [data[0]]: data[1]
            };
        }, {});

        return values;
    } else {
        return {};
    };
};


try {
    var audio = document.getElementById("tune");
    audio.volume = 0.3;

} catch (err) {
    console.log(err)
}

window.addEventListener('load', (event) => {
    audio.play()
    audio.loop = true;
})
window.addEventListener('scroll', (event) => {
    audio.play()
    audio.loop = true;
})

window.addEventListener('hover', (event) => {
    audio.play()
    audio.loop = true;
})

window.addEventListener('click', (event) => {
    audio.play()
    audio.loop = true;
})