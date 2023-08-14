 // DOM = DOCUMENT OBJECT MODEL

// The DOM (or Document Object Model) is a tree-like representation of the contents of a webpage. 
// A tree of “nodes” with different relationships depending on how they’re arranged in the HTML document.

// Targetting Nodes with Selectors

// div.display
//.display
// #container > .display
// div#container > div.display

// DOM Methods 

// When your HTML code is parsed by a web browser, it is converted to the DOM as was mentioned above.
// One of the primary differences is that these nodes are objects that have many properties and methods attached to them.
// These properties and methods are the primary tools we are going to use to manipulate our webpage with JavaScript. 
// We’ll start with the query selectors - those that help you target nodes.

// SYNTAX

// element.querySelector(selector) returns a reference to the first match of selector

// element.querySelectorAll(selectors) returns a “nodelist” containing references to all of the matches of the selectors 

// NOTE : It’s important to note that when using querySelectorAll, the return value is not an array. 
// It looks like an array, and it somewhat acts like an array, but it’s really a “nodelist”. 
// The big distinction is that several array methods are missing from nodelists. 
// One solution, if problems arise, is to convert the nodelist into an array. You can do this with Array.from() or the spread operator.

// Element Creation

// SYNTAX

// document.createElement(tagName, [options]) : creates a new element of tag type tagName.
//[options] in this case means you can add some optional parameters to the function. Don’t worry about these at this point.

const div = document.createElement('div');

// Isse element DOM me nhi jatta, balki memory me jaata hai(html file me).
// This is so that you can manipulate the element (by adding styles, classes, ids, text, etc.) before placing it on the page.

// Ways to place element in DOM:

// (1)By Appending elements

// parentNode.appendChild(childNode) appends childNode as the last child of parentNode

// parentNode.insertBefore(newNode, referenceNode) inserts newNode into parentNode before referenceNod

// (2)By removing elements

// parentNode.removeChild(child) removes child from parentNode on the DOM and returns a reference to child

// Altering Elements

// ek element ki reference dene si uski properties ko alter kar sakte ho
// ex: adding/removing and altering attributes, changing classes, adding inline style information and more.

div.style.color = 'blue';     
div.style.cssText = 'color: blue; background: white;';          
div.setAttribute('style', 'color: blue; background: white;');   //does the same this as the one before

// NOTE: if you’re accessing a kebab-cased CSS rule from JS, you’ll either need to use camelCase or you’ll need to use bracket notation instead of dash notation.

// div.style.background-color : doesn't work - attempts to subtract color from div.style.background
// div.style.backgroundColor : accesses the div's background-color style
// div.style['background-color'] : also works
// div.style.cssText = "background-color: white;" : sets the div's background-color by assigning a CSS string

// Editing Attributes

div.setAttribute("id", "theDiv");
// if id exists, update it to 'theDiv', else create an id
// with value "theDiv"

div.getAttribute("id");
// returns value of specified attribute, in this case
// "theDiv"
console.log(div.getAttribute("id"));

div.removeAttribute("id");
// removes specified attribute

// Working with classes

div.classList.add("new");
// adds class "new" to your new div

div.classList.remove("new");
// removes "new" class from div

div.classList.toggle("active");
// if div doesn't have class "active" then add it, or if
// it does, then remove it

// Why Toggle? : It is often standard (and cleaner) to toggle a CSS style rather than adding and removing inline CSS.

// Adding Text Content

div.textContent = "Hello World!";
// creates a text node containing "Hello World!" and
// inserts it in div

// Adding HTML Content

div.innerHTML = "<span>Hello World!</span>";
// renders the HTML inside div

// *Note that textContent is preferable for adding text, 
// and innerHTML should be used sparingly as it can create security risks if misused.

// IMPORTANT INFORMATION


// Your JavaScript, for the most part, is run whenever the JS file is run, or when the script tag is encountered in the HTML. 
// If you are including your JavaScript at the top of your file,
// many of these DOM manipulation methods will not work because the JS code is being run before the nodes are created in the DOM. 
// The simplest way to fix this is to include your JavaScript at the bottom of your HTML file so that it gets run after the DOM nodes are parsed and created.

// Alternatively, you can link the JavaScript file in the <head> of your HTML document. 
// Use the <script> tag with the src attribute containing the path to the JS file, and include the defer keyword to load the file after the HTML is parsed, 

{/* <head>
  <script src="js-file.js" defer></script>
</head> */}