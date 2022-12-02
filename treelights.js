var max = 8;
var min = 2;
var themes = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var treeLights = document.querySelectorAll('.tree-light');
var topLights = document.querySelectorAll('.light-bulb');
let usedPositions = [];
let positions = [{ "id": "107", "top": "16", "left": "28" }, { "id": "109", "top": "16", "left": "36" },
    { "id": "111", "top": "16", "left": "44" }, { "id": "113", "top": "16", "left": "52" }, { "id": "115", "top": "16", "left": "60" }, { "id": "117", "top": "16", "left": "68" }, { "id": "131", "top": "20", "left": "24" }, { "id": "133", "top": "20", "left": "32" }, { "id": "135", "top": "20", "left": "40" }, { "id": "137", "top": "20", "left": "48" }, { "id": "139", "top": "20", "left": "56" }, { "id": "141", "top": "20", "left": "64" }, { "id": "143", "top": "20", "left": "72" },
    { "id": "155", "top": "24", "left": "20" }, { "id": "157", "top": "24", "left": "28" }, { "id": "159", "top": "24", "left": "36" }, { "id": "161", "top": "24", "left": "44" }, { "id": "163", "top": "24", "left": "52" }, { "id": "165", "top": "24", "left": "60" }, { "id": "167", "top": "24", "left": "68" }, { "id": "169", "top": "24", "left": "76" }, { "id": "179", "top": "28", "left": "16" }, { "id": "181", "top": "28", "left": "24" }, { "id": "183", "top": "28", "left": "32" }, { "id": "185", "top": "28", "left": "40" }, { "id": "187", "top": "28", "left": "48" }, { "id": "189", "top": "28", "left": "56" }, { "id": "191", "top": "28", "left": "64" }, { "id": "193", "top": "28", "left": "72" }, { "id": "195", "top": "28", "left": "80" }, { "id": "204", "top": "32", "left": "16" }, { "id": "206", "top": "32", "left": "24" }, { "id": "208", "top": "32", "left": "32" },
    { "id": "210", "top": "32", "left": "40" }, { "id": "212", "top": "32", "left": "48" }, { "id": "214", "top": "32", "left": "56" }, { "id": "216", "top": "32", "left": "64" }, { "id": "218", "top": "32", "left": "72" }, { "id": "220", "top": "32", "left": "80" }, { "id": "222", "top": "32", "left": "88" }, { "id": "228", "top": "36", "left": "3" }, { "id": "229", "top": "36", "left": "16" }, { "id": "231", "top": "36", "left": "24" }, { "id": "233", "top": "36", "left": "32" }, { "id": "235", "top": "36", "left": "40" }, { "id": "237", "top": "36", "left": "48" }, { "id": "239", "top": "36", "left": "56" }, { "id": "241", "top": "36", "left": "64" }, { "id": "243", "top": "36", "left": "72" }, { "id": "245", "top": "36", "left": "80" }, { "id": "247", "top": "36", "left": "88" }, { "id": "256", "top": "40", "left": "24" }, { "id": "258", "top": "40", "left": "32" }, { "id": "260", "top": "40", "left": "40" }, { "id": "262", "top": "40", "left": "48" }, { "id": "264", "top": "40", "left": "56" }, { "id": "266", "top": "40", "left": "64" }, { "id": "280", "top": "44", "left": "20" }, { "id": "282", "top": "44", "left": "28" }, { "id": "284", "top": "44", "left": "36" }, { "id": "286", "top": "44", "left": "44" }, { "id": "288", "top": "44", "left": "52" }, { "id": "290", "top": "44", "left": "60" }, { "id": "292", "top": "44", "left": "68" }, { "id": "294", "top": "44", "left": "76" }, { "id": "305", "top": "48", "left": "20" }, { "id": "307", "top": "48", "left": "28" }, { "id": "309", "top": "48", "left": "36" }, { "id": "311", "top": "48", "left": "44" }, { "id": "313", "top": "48", "left": "52" }, { "id": "315", "top": "48", "left": "60" },
    { "id": "317", "top": "48", "left": "68" }, { "id": "319", "top": "48", "left": "76" },
    { "id": "329", "top": "52", "left": "16" }, { "id": "331", "top": "52", "left": "24" },
    { "id": "333", "top": "52", "left": "32" }, { "id": "335", "top": "52", "left": "40" },
    { "id": "337", "top": "52", "left": "48" }, { "id": "339", "top": "52", "left": "56" }, { "id": "341", "top": "52", "left": "64" }, { "id": "343", "top": "52", "left": "72" }, { "id": "345", "top": "52", "left": "80" }, { "id": "354", "top": "56", "left": "16" }, { "id": "356", "top": "56", "left": "24" }, { "id": "358", "top": "56", "left": "32" }, { "id": "360", "top": "56", "left": "40" }, { "id": "362", "top": "56", "left": "48" }, { "id": "364", "top": "56", "left": "56" }, { "id": "366", "top": "56", "left": "64" }, { "id": "368", "top": "56", "left": "72" }, { "id": "370", "top": "56", "left": "80" }, { "id": "372", "top": "56", "left": "88" }, { "id": "381", "top": "60", "left": "24" },
    { "id": "383", "top": "60", "left": "32" }, { "id": "385", "top": "60", "left": "40" }, { "id": "387", "top": "60", "left": "48" }, { "id": "389", "top": "60", "left": "56" }, { "id": "391", "top": "60", "left": "64" }, { "id": "393", "top": "60", "left": "72" }, { "id": "405", "top": "64", "left": "20" }, { "id": "407", "top": "64", "left": "28" }, { "id": "409", "top": "64", "left": "36" }, { "id": "411", "top": "64", "left": "44" }, { "id": "414", "top": "64", "left": "56" }, { "id": "416", "top": "64", "left": "64" }, { "id": "418", "top": "64", "left": "72" }, { "id": "430", "top": "68", "left": "20" }, { "id": "432", "top": "68", "left": "28" }, { "id": "434", "top": "68", "left": "36" }, { "id": "436", "top": "68", "left": "44" }, { "id": "438", "top": "68", "left": "52" }, { "id": "440", "top": "68", "left": "60" }, { "id": "442", "top": "68", "left": "68" }, { "id": "444", "top": "68", "left": "76" }, { "id": "454", "top": "72", "left": "16" }, { "id": "456", "top": "72", "left": "24" }, { "id": "458", "top": "72", "left": "32" }, { "id": "460", "top": "72", "left": "40" }, { "id": "462", "top": "72", "left": "48" }, { "id": "464", "top": "72", "left": "56" }, { "id": "466", "top": "72", "left": "64" }, { "id": "468", "top": "72", "left": "72" }, { "id": "470", "top": "72", "left": "80" }, { "id": "478", "top": "76", "left": "3" }, { "id": "481", "top": "76", "left": "24" }, { "id": "483", "top": "76", "left": "32" }, { "id": "485", "top": "76", "left": "40" }, { "id": "487", "top": "76", "left": "48" }, { "id": "489", "top": "76", "left": "56" }, { "id": "491", "top": "76", "left": "64" }, { "id": "493", "top": "76", "left": "72" }, { "id": "495", "top": "76", "left": "80" }, { "id": "497", "top": "76", "left": "88" }, { "id": "503", "top": "80", "left": "3" },
    { "id": "505", "top": "80", "left": "20" }, { "id": "507", "top": "80", "left": "28" }, { "id": "509", "top": "80", "left": "36" }, { "id": "511", "top": "80", "left": "44" }, { "id": "513", "top": "80", "left": "52" }, { "id": "515", "top": "80", "left": "60" }, { "id": "517", "top": "80", "left": "68" },
    { "id": "519", "top": "80", "left": "76" }, { "id": "521", "top": "80", "left": "84" }, { "id": "523", "top": "80", "left": "92" }
]


//get random position for every tree light
function getNewLightPosition() {
    let getPos = positions[Math.floor(Math.random() * positions.length)];
    if (!usedPositions.includes(getPos.id)) {
        usedPositions.push(getPos.id);
        return getPos
    }

    return getNewLightPosition();
}

//setup all tree lights
for (let i = 0; i < treeLights.length; i++) {
    let lightColour = `tree-theme-${themes[Math.floor(Math.random() * themes.length)]}`;

    let getPos = getNewLightPosition();

    treeLights[i].style.top = getPos.top + "%";
    treeLights[i].style.left = getPos.left + "%";
    Math.floor(Math.random() * (max - min + 1)) + min;
    let randSpeed = Math.floor(Math.random() * (max - min + 1)) + min;;
    treeLights[i].style.animationDuration = randSpeed + 's';
    treeLights[i].classList.add(lightColour);
}

for (let i = 0; i < topLights.length; i++) {
    let lightColour = `theme-${themes[Math.floor(Math.random() * themes.length)]}`;
    //might have a few set speeds soon
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
            return {
                ...res,
                [data[0]]: data[1]
            };
        }, { id: "0", });

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