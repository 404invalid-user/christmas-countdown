function share() {
    let formedUrl = 'http://invaliduser.uk.to/christmas-countdown';

    var to = document.getElementById('input-to').value;
    var from = document.getElementById('input-from').value;
    var message = document.getElementById('input-message').value;

    if (to == '' || to == ' ' || from == '' || from == ' ') {
        return document.getElementById('info').innerHTML = 'please supply a to and from name';

    }
    formedUrl = formedUrl + '?to=' + to + '&from=' + from;
    if (message != '' && message != ' ') {
        formedUrl = formedUrl + '&message=' + message;
    }




    const title = 'Merry Christmas';
    const text = from + ' is wishing you a merry christmas see how many days are left ' + formedUrl;


    if (navigator.share !== undefined) {
        navigator
            .share({
                title,
                text,
                formedUrl
            })
            .then(() => console.log("Shared!"))
            .catch(err => console.error(err));
    } else {
        window.location = `mailto:?subject=${title}&body=${text}%0A${url}`;
    }

    return document.getElementById('info').innerHTML = `
    <div class="shared" onclick="share(${from}, ${formedUrl})">
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><path d="M16,5l-1.42,1.42l-1.59-1.59V16h-1.98V4.83L9.42,6.42L8,5l4-4L16,5z M20,10v11c0,1.1-0.9,2-2,2H6c-1.11,0-2-0.9-2-2V10 c0-1.11,0.89-2,2-2h3v2H6v11h12V10h-3V8h3C19.1,8,20,8.89,20,10z"/></g></svg>
    </div>
    `;
}

document.title = "Demo";