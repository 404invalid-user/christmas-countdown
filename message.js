const info = getSearchParams();

if (info.to && info.from) {
    document.getElementById('card').style.display = 'block';
    document.getElementById('to').innerHTML = info.to.replace('%20', ' ');
    document.getElementById('from').innerHTML = info.from.replace('%20', ' ');
}
if (info.message) {
    document.getElementById('message').innerHTML = info.message.replace('%20', ' ');
}