function writeStuff() {
    const div = document.createElement('div');
    div.innerText = 'testing';
    document.querySelector('body').appendChild(div);
}

window.onload = function() {
    writeStuff();
}