//SCRIPT TO REMOVE INLINE STYLING AND PLACE WITHIN CSS

var targetDiv = document.querySelectorAll('.demoBox');
var colors = [];

var sheet = (function () {
    'use strict';
    //Create the <style> tag
    var style = document.createElement('style');
    
    //Webkit hack
    style.appendChild(document.createTextNode(''));
    
    //Add the style element to the page
    document.head.appendChild(style);
    
    return style.sheet;
}());

function getDivColors(divs) {
    'use strict';
    var colors = [];
    var color;
    
    for (var i = 0, max = divs.length; i < max; i++) {
        color = divs[i].getAttribute('style');
        colors.push(color.split(':')[1]);
    }
    
    return colors;
}

function applyNewClass(divs) {
    for (var i = 0, max = divs.length; i < max; i++) {
        divs[i].classList.add('jorge' + i);
    }
}

function setColorStyles(divs, colors, sheet) {
    if (divs.length === colors.length) {
        for (var i = 0, max = colors.length; i < max; i++) {
            sheet.insertRule('.jorge' + i + ' { background-color: ' + colors[i] + '; }', i);
            //divs[i].style.backgroundColor = '';
            
            if (divs[i].style.removeProperty) {
                divs[i].style.removeProperty('background-color');
            } else {
                divs[i].style.removeAttribute('backgroundColor');
            }
        }
    }
}

colors = getDivColors(targetDiv);
applyNewClass(targetDiv);

console.log('Run setColorStyles(divs, colors, sheet) to apply the color style switch!');
