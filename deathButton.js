function set1(){
    document.write("Fuck you ")
}

function set2(){
    document.write("Be nice to him ")
}


function finishHim(){
    window.print();
}

function bigBoom(){
    console.log("This is what you get for being a prick!");
    var count = 0;
    window.alert("Rude");
    while (count <= 2099) {
        setTimeout(set1, 900);
        setTimeout(set2, 900);
        count++;
    }
    if (count > 2099){
        setTimeout(finishHim, 2000);
    }
}