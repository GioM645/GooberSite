function myFunction() {
    document.getElementById("demo").innerHTML = "Project MKUltra was a human experimentation program designed and undertaken by the U.S. Central Intelligence Agency (CIA) to develop procedures and identify drugs that could be used during interrogations to weaken individuals and force confessions through brainwashing and psychological torture.";
    console.log("Holy shit it actually worked!");
}

function goobSave() {
    document.getElementById('myImage').src='savedGoob.png'
    console.log("Saved!")
}

function goobBoom() {
    document.getElementById('myImage').src='explodeDog.gif'
    console.log("Boomed!")
}

function goobStill() {
    document.getElementById('myImage').src='UnspinnedGoop.webp'
    console.log("Stopped!")
}

function goobSpin() {
    document.getElementById('myImage').src='SpinDog.gif'
    console.log("Spun!")
}


function gooberFreakout() {
    window.alert("The goob will suffer to be absolved of its sins.")
    var count = 0;
    while (count <= 10000) {
        setTimeout(goobSpin, 450)
        setTimeout(goobBoom, 450);
        setTimeout(goobStill, 450);
        setTimeout(goobSave, 450);
        count++;
    }



}
