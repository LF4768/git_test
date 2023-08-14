const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add('content');
content.textContent = "This is the glorius text-content!"
container.appendChild(content);

// In the JavaScript file, first we get a reference to the container div that already exists in our HTML. 
// Then we create a new div and store it in the variable content. We add a class and some text to the content div and finally append that div to container. 
// All in all it’s a simple process.

//DOM AFTER DOING ABOVE PROCESS
{/* <body>
  <h1>
    THE TITLE OF YOUR WEBPAGE
  </h1>
  <div id="container">
  	<div class="content">
      This is the glorious text-content!
    </div>
  </div>
</body>  */}

// Keep in mind that the JavaScript does not alter your HTML, but the DOM - your HTML file will look the same, 
// but the JavaScript changes what the browser renders.

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

const para = document.createElement("p");
para.classList.add("red");
para.textContent = "Hey I'm red!"
container.appendChild(para);
para.style.cssText = "color : red";

const heading3 = document.createElement("h3");
heading3.textContent = "Hey I'm a blue h3";
container.appendChild(heading3)
heading3.setAttribute("style", "color : blue");


const blackDiv = document.createElement("div");
container.appendChild(blackDiv);
blackDiv.setAttribute("id", "black");
blackDiv.setAttribute("style", "background-color: pink; border : 5px solid black; padding : 1em ");

const heading1 = document.createElement("h1");

heading1.textContent = "I'm in a div";
black.appendChild(heading1);

const divPara = document.createElement("p");
divPara.textContent = "ME TOO!";
black.appendChild(divPara);