'use strict'
const switcher = document.querySelector(".btn");
switcher.addEventListener("click",function(){

    var className = document.body.className;

    if(className == "light_theme"){
        document.body.classList.replace(className,'dark_theme')
        switcher.textContent = "Light";
    }else{
        switcher.textContent = "Dark";
        document.body.classList.replace(className,'light_theme')
    };

console.log('nome atual da classe: ' + className);
});