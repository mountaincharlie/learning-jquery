/**
 * You can search for an element by id within dev tools:
 * > var article = document.getElementById('home-page');
 * > article;
 * < // returns the html of the element
 * 
 * For multiple elements (tag/class etc...) this can be used to find their length and other properties:
 * > var sections = document.getElementsByTagName('section');
 * > sections;
 * < HTMLCollection(//no. of sections) etc...
 * 
 * For viewing/accessing an element's children:
 * > var article = document.getElementById('home-page');
 * > article.children;
 * < // returns list of children
 * 
 * For viewing/accessing an element's parent:
 * > var article = document.getElementById('home-page');
 * > article.parentElement;
 * < // returns the parent element's html
 * 
 * Creating a new element:
 * > var li = document.createElement('li');
 * > li.classList.add('last');
 * > li.style.backgroundColor = 'pink';
 * > var a = document.createElement('a');
 * > a.textContent = "Four";
 * > a.style.color = "white";
 * > li.appendChild(a);
 * > li
 * < will return the html you have created (not yet inserted into the DOM)
 * 
 * Adding the created li into the DOM:
 * > var uls = document.getElementsByTagName('ul'); // getting the ul elements
 * > ul = uls[0];  // taking the first item
 * > ul.appendChild(li);
 * < // the element will be added into the DOM 
 */


// this will be visible in the Chrome dev tools console
console.log("Hello World")