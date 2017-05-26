var tube = [];
var displayWindow = document.querySelector('.displayWindow');
function genKapsz() {
    var kapsz;
    displayWindow.innerText = ' '; //ez tisztítja le a táblát, majd mindig újra kirajzolja (de  mi úgy látjuk mintha leszedné)
    for (var i=0; i< tube.length; i++){ //át kell gondolni a hosszát, hogy meddig fusson
        kapsz = document.createElement('div');
        kapsz.className = 'kapszula';
        kapsz.style.backgroundColor = tube[i]; //a tube-ban már benne vannak a színek, onnan kell kiszedni, nem onnan amin álla collor picker
        displayWindow.appendChild(kapsz);
    }
}
function unshift_kapsz() {
    var kapszColor = document.getElementById("color").value;
    var unshifted = tube.unshift(kapszColor);
    genKapsz();
}
function push_kapsz() {
    var kapszColor = document.getElementById("color").value;
    var pushed = tube.push(kapszColor);
    genKapsz();
}
function shift_kapsz() {
    tube.shift();
    genKapsz();
}
function pop_kapsz() {
    tube.pop();
    genKapsz();
}
