var tube = []; //ebbe a tömbbe a kiolvasott színek kerülnek
var displayWindow = document.querySelector('.displayWindow');

//kirajzolja a kapszulákat
function genKapsz() {
    var kapsz;
    displayWindow.innerText = ' '; //ez tisztítja le a táblát, majd mindig újra kirajzolja (de  mi úgy látjuk mintha leszedné)
    for (var i=0; i< tube.length; i++){
        kapsz = document.createElement('div');
        kapsz.className = 'kapszula';
        kapsz.style.backgroundColor = tube[i]; //a tube-ban már benne vannak a színek, onnan kell kiszedni, nem onnan amin áll a color picker
        displayWindow.appendChild(kapsz);
    }
}

//elejére rak a tömbben
function unshift_kapsz() {
    var kapszColor = document.getElementById("color").value;
    var unshifted = tube.unshift(kapszColor);
    genKapsz();
}

//végére rak a tömbben
function push_kapsz() {
    var kapszColor = document.getElementById("color").value;
    var pushed = tube.push(kapszColor);
    genKapsz();
}

//levesz az elejéről
function shift_kapsz() {
    tube.shift();
    genKapsz();
}

//levesz a végéről
function pop_kapsz() {
    tube.pop();
    genKapsz();
}
