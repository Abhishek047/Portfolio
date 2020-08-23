const skillCard = document.querySelector("#skill-card");
const recentProjectCard = document.querySelector("#recent-project-card");
const contactCard = document.querySelector("#contact-card");
const skill = document.querySelector("#skill");
const home = document.querySelector("#home");
const menu= document.querySelector(".menu");
const recentProject = document.querySelector("#recentProject");
const listItems = menu.querySelectorAll("a");
let aTagNumber=0;
  const matchWidth = window.matchMedia("(min-width: 600px)");
  mediaChange(matchWidth);                        // Call listener function at run time
  matchWidth.addListener(mediaChange);             // Attach listener function on state change
  
  function mediaChange(x){
    if (x.matches) {                    // If media query matches
            menu.classList.remove("menu-open");
            menu.classList.remove("menu-close");
            menu.classList.add("menu-desktop");
            /*listItems.forEach(function(item) {
             if(aTagNumber==0){
                 item.classList.add("active");
             }
             else{
                 aTagNumber--;
             }
        });*/
    } else {
        listItems.forEach(function(item) {
                if((item.classList.contains("active"))){
                    item.classList.remove("active");
                }
                else{
                    aTagNumber++;
                }
                console.log(aTagNumber);
        });
        menu.classList.remove("menu-desktop");
        menu.classList.add("menu-close");
    }
  }

let changeSkill = function () {

        skill.classList.remove("hidden");
        skill.classList.add("view");
    
        home.classList.remove("view");
        home.classList.add("hidden");

        recentProject.classList.remove("view");
        recentProject.classList.add("hidden");
}

let changeProject = function () {
    skill.classList.remove("view");
    skill.classList.add("hidden");

    home.classList.remove("view");
    home.classList.add("hidden");

    recentProject.classList.remove("hidden");
    recentProject.classList.add("view");
}


let toggleNav = function (){
        if(menu.classList.contains("menu-open")){
            menu.classList.remove("menu-open");
            menu.classList.add("menu-close");
        }
        else{
            menu.classList.remove("menu-close");
            menu.classList.add("menu-open");
        }
}