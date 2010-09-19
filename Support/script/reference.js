/**
 * PHP Breeze.tmbundle - Breeze reference behaviors
 *
 * This file contains the behaviors for the Breeze reference web view.
 *
 * @author  Jeff Welch <whatthejeff@gmail.com>
 */

// Hide blockquotes by default
var blockquotes = document.getElementsByTagName('blockquote');
for (var i = 0; i < blockquotes.length; i++) {
    blockquotes[i].style.display = 'none';
}

// All h3's can be clicked to show the following blockquote
var h3s = document.getElementsByTagName('h3');
for (var i = 0; i < h3s.length; i++) {
    h3s[i].style.cursor = 'pointer';
    h3s[i].addEventListener('click', function(){
        toggle(next(this));
    }, false);
}

// Add instructions
var h1 = document.getElementsByTagName('h1')[0];
h1.textContent = "Click on the method signatures for more information.";
h1.style.paddingBottom = '20px';
h1.style.borderBottom = '1px solid';

/**
 * Attempts to grab the next DOM node.
 *
 * @param  Node element  The context
 * @return Node
 */
function next(element) {
    do {
        element = element.nextSibling;
    } while (element && element.nodeType != 1);
    return element;
}

/**
 * Taoggles the display of a element between 'none' and 'block'.
 *
 * @param  Node element  The element to toggle
 * @return void
 */
function toggle(element) {
    if (element && element.style) {
        element.style.display = element.style.display == 'none' ? 'block' : 'none';
    }
}