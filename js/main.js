//SCRIPT TO REMOVE INLINE STYLING AND PLACE WITHIN CSS

var targetDiv = document.querySelectorAll('.demoBox');
var targetAttr = targetDiv[0].getAttribute('style');
var color = targetAttr.split(":")[1];

targetDiv[0].classList.add('jorge');

var sheet = (function () {
    "use strict";
    //Create the <style> tag
    var style = document.createElement("style");
    
    //Webkit hack
    style.appendChild(document.createTextNode(""));
    
    //Add the style element to the page
    document.head.appendChild(style);
    
    return style.sheet;
}());

sheet.insertRule(".jorge { background-color: blue; }", 0);
targetDiv[0].style.backgroundColor = '';