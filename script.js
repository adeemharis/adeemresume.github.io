var targetDiv = document.getElementById("form");
var btn = document.getElementById("form-butt");
var sbtn = document.getElementById("sub-butt");
function onc() {
    targetDiv.style.display = "block";
    btn.style.display="none" ;
}
function sonc() {
    targetDiv.style.display = "none";
    btn.style.display="block" ;
}
btn.addEventListener('click' , onc) ;
sbtn.addEventListener('click' , sonc) ;

var ac = 0 ; 

var home = document.getElementById("home") ;
var exp = document.getElementById("exp") ;
var ed = document.getElementById("ed") ;
var ab = document.getElementById("ab") ;
var c = document.getElementById("c") ;

var active = document.querySelectorAll("#menu-items") ;
console.log(active) ;


function gohome(){
    ac=0 ; 
    active[ac].style.fontWeight = "bold" ;
    active[ac].style.color="red" ;
    active[ac].style.fontSize = "1.1rem" ;
    active[ac].style.textDecoration = "underline" ;
    active[ac].style.backgroundColor = "white" ;
    for(var i=0 ; i<=4 ; i++){
        if(i!=ac){
            active[i].style.fontWeight = "normal" ;
            active[i].style.color="black" ;
            active[i].style.fontSize = "1rem" ;
            active[i].style.textDecoration = "none" ;
            active[i].style.backgroundColor = "gainsboro" ;
        }
    }
    home.style.display = "block" ;
    exp.style.display = "none" ;
    ed.style.display = "none" ;
    ab.style.display = "none" ;
    c.style.display = "none" ;
}

gohome() ;

function goexp(){
    ac=1 ;
    active[ac].style.fontWeight = "bold" ;
    active[ac].style.color="red" ;
    active[ac].style.fontSize = "1.1rem" ;
    active[ac].style.textDecoration = "underline" ;
    active[ac].style.backgroundColor = "white" ;
    for(var i=0 ; i<=4 ; i++){
        if(i!=ac){
            active[i].style.fontWeight = "normal" ;
            active[i].style.color="black" ;
            active[i].style.fontSize = "1rem" ;
            active[i].style.textDecoration = "none" ;
            active[i].style.backgroundColor = "gainsboro" ;
        }
    }
    home.style.display = "none" ;
    exp.style.display = "block" ;
    ed.style.display = "none" ;
    ab.style.display = "none" ;
    c.style.display = "none" ;
}
function goed(){
    ac=2 ;
    active[ac].style.fontWeight = "bold" ;
    active[ac].style.color="red" ;
    active[ac].style.fontSize = "1.1rem" ;
    active[ac].style.textDecoration = "underline" ;
    active[ac].style.backgroundColor = "white" ;
    for(var i=0 ; i<=4 ; i++){
        if(i!=ac){
            active[i].style.fontWeight = "normal" ;
            active[i].style.color="black" ;
            active[i].style.fontSize = "1rem" ;
            active[i].style.textDecoration = "none" ;
            active[i].style.backgroundColor = "gainsboro" ;
        }
    }
    home.style.display = "none" ;
    exp.style.display = "none" ;
    ed.style.display = "block" ;
    ab.style.display = "none" ;
    c.style.display = "none" ;
}
function goab(){
    ac=3 ;
    active[ac].style.fontWeight = "bold" ;
    active[ac].style.color="red" ;
    active[ac].style.fontSize = "1.1rem" ;
    active[ac].style.textDecoration = "underline" ;
    active[ac].style.backgroundColor = "white" ;
    for(var i=0 ; i<=4 ; i++){
        if(i!=ac){
            active[i].style.fontWeight = "normal" ;
            active[i].style.color="black" ;
            active[i].style.fontSize = "1rem" ;
            active[i].style.textDecoration = "none" ;
            active[i].style.backgroundColor = "gainsboro" ;
        }
    }
    home.style.display = "none" ;
    exp.style.display = "none" ;
    ed.style.display = "none" ;
    ab.style.display = "block" ;
    c.style.display = "none" ;
}

function goc(){
    ac=4 ;
    active[ac].style.fontWeight = "bold" ;
    active[ac].style.color="red" ;
    active[ac].style.fontSize = "1.1rem" ;
    active[ac].style.textDecoration = "underline" ;
    active[ac].style.backgroundColor = "white" ;
    for(var i=0 ; i<=4 ; i++){
        if(i!=ac){
            active[i].style.fontWeight = "normal" ;
            active[i].style.color="black" ;
            active[i].style.fontSize = "1rem" ;
            active[i].style.textDecoration = "none" ;
            active[i].style.backgroundColor = "gainsboro" ;
        }
    }
    home.style.display = "none" ;
    exp.style.display = "none" ;
    ed.style.display = "none" ;
    ab.style.display = "none" ;
    c.style.display = "block" ;
}

