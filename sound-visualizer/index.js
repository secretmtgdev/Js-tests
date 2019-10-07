if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', e => {
        bindEvents();
    })
} else {
    bindEvents();
}

function bindEvents() {
    document.addEventListener('keydown', e => {
        e.preventDefault();
        document.querySelector('#letter-container').classList.add('pulse');
        displayKey(e);
    });
    document.addEventListener('keyup', e => {
        e.preventDefault();
        document.querySelector('#letter-container').classList.remove('pulse');
    })
}

function displayKey(event) {
    // proper language capitalization
    let char = String.fromCharCode(event.which).toLocaleUpperCase();
    let target = document.querySelector('#letter-container');
    target.innerHTML = char;
}