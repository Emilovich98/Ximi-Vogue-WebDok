let rellax = new Rellax('.rellax');


/* ----------menu------------ */


let toggleNavStatus = false;

let toggleNav = function() {
    let getMenu = document.querySelector("#menu-expand");
    let getMenuUl = document.querySelector("#menu-expand ul");
    let getMenuLinks = document.querySelectorAll("#menu-expand a");
    
    if (toggleNavStatus === false) {
        getMenuUl.style.display = "block";
        getMenu.style.height = "91vh";
        
        let arrayLength = getMenuLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getMenuLinks[i].style.opacity = "1";
        }
        
        toggleNavStatus = true;
    } 
    
    else if (toggleNavStatus === true) {
        getMenu.style.height = "0vh";
        
        let arrayLength = getMenuLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getMenuLinks[i].style.opacity = "0";
        }
        
        getMenuUl.style.display = "none";
        
        toggleNavStatus = false;
    } 
}

let toggleLink = function() {
    
    let getMenu = document.querySelector("#menu-expand");
    let getMenuUl = document.querySelector("#menu-expand ul");
    let getMenuLinks = document.querySelectorAll("#menu-expand a");
    
    if (toggleNavStatus === true) {
        getMenu.style.height = "0vh";
        
        let arrayLength = getMenuLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getMenuLinks[i].style.opacity = "0";
        }
        
        getMenuUl.style.display = "none";
        
        toggleNavStatus = false;
    } 
}

/* ----------- video mute --------------- */

let vid = document.querySelector(".muted-video");

function enableMute() { 
  vid.muted = true;
} 

function disableMute() { 
  vid.muted = false;
} 











