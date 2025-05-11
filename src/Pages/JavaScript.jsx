import React from 'react'
import './JavaScript.css'
import Navbar from '../Layout/Navbar';

const JavaScript = () => {
  const chome=`<!DOCTYPE html>
  <html>
  <body>
  
  <h2>What Can JavaScript Do?</h2>
  
  <p id="demo">JavaScript can change HTML content.</p>
  
  <button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>
  
  </body>
  </html>`;
  const intro=`  <button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>
  Click Me!
  </button>
  `;
  const ccss=`// How to create variables:
  var x;
  let y;
  
  // How to use variables:
  x = 5;
  y = 6;
  let z = x + y;`;
  const ele1=`// Change heading:
  document.getElementById("myH").innerHTML = "My First Page";
  
  // Change paragraph:
  document.getElementById("myP").innerHTML = "My first paragraph.";
  `;
  const ele2=`/*
  The code below will change
  the heading with id = "myH"
  and the paragraph with id = "myP"
  in my web page:
  */
  document.getElementById("myH").innerHTML = "My First Page";
  document.getElementById("myP").innerHTML = "My first paragraph.";`;
  const color=`let x = 10;
  // Assign the value 5 to x
  let x = 5;
  // Assign the value 2 to y
  let y = 2;
  // Assign the value x + y to z:
  let z = x + y;`;
  const back=` // Numbers:
  let length = 16;
  let weight = 7.5;
  
  // Strings:
  let color = "Yellow";
  let lastName = "Johnson";
  
  // Booleans
  let x = true;
  let y = false;
  
  // Object:
  const person = {firstName:"John", lastName:"Doe"};
  
  // Array object:
  const cars = ["Saab", "Volvo", "BMW"];
  
  // Date object:
  const date = new Date("2022-03-25");`;
  const link=`// Function to compute the product of p1 and p2
  function myFunction(p1, p2) {
    return p1 * p2;
  }
  `;
  const link1=`function name(parameter1, parameter2, parameter3) {
    // code to be executed
  }`;
  const obj=`const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};`;
  const obj22=`<element event='some JavaScript'>  `;
  const obj1=`const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };`;
  return (
    <div>
    <Navbar/>
    <div className='main'>
        <div className='left'>
        <center><h2 className='lefth2'>JavaScript Tutorial</h2></center>
        <div className='timeline'>
        <ul>
        <li><a href='#home'  className='ancho'>JavaScript Home</a></li>
        <li><a href='#intro' className='ancho'>JavaScript Introduction</a></li>
        <li><a href='#syntax' className='ancho'>JavaScript Syntax</a></li>
        <li><a href='#comment' className='ancho'>JavaScript Comments</a></li>
        <li><a href='#variable' className='ancho'>JavaScript Variables</a></li>
        <li><a href='#operator' className='ancho'>JavaScript  Operators</a></li>
        <li><a href='#data' className='ancho'>JavaScript Data Types</a></li>
        <li><a href='#function' className='ancho'>JavaScript Functions</a></li>
        <li><a href='#object' className='ancho'>JavaScript Objects</a></li>
        <li><a href='#event' className='ancho'>JavaScript Events</a></li>
        
        </ul>
        </div>
        </div>
        <br></br>
        <div className='right'>
        <div id='home'>
        <h1>JavaScript Tutorial</h1>
        <br></br>
        <p>JavaScript is the world's most popular programming language.

        JavaScript is the programming language of the Web.
        
        JavaScript is easy to learn.
        
        This tutorial will teach you JavaScript from basic to advanced..</p>
          <br>
          </br>
          <h2>Easy Learning with JavaScript"Example"</h2>
      
          <p>With our "Example" , you can learn the JavaScript code:
          </p>
          <br>
          </br>
          <div className='code'>
          <pre>{chome}</pre>
          </div>
        </div>
        <div id='intro'>
        <h1>JavaScript Introduction</h1>
        <br></br>
        <p>
        This page contains some examples of what JavaScript can do.
        </p>
        <p>
        JavaScript is one of the 3 languages all web developers must learn:</p><p>

   1. HTML to define the content of web pages</p><p>

   2. CSS to specify the layout of web pages</p><p>

   3. JavaScript to program the behavior of web pages         
        </p>
          <br>
          </br>
          <h2>JavaScript Can Change HTML Content</h2>
          <div className='code'>
          <pre>{intro}</pre>
          </div>      
          <p>
           
          </p>
         
         
         
        </div>
        <div id='syntax'>
        <h1>JavaScript Syntax</h1>
        <br></br>
        <p>
        JavaScript syntax is the set of rules, how JavaScript programs are constructed
       </p>
          <br>
          </br>
          <h2>JavaScript Syntax</h2>           
      <div className='code'>
      <pre>{ccss}</pre>
      </div>
      <h2>
      JavaScript Values
      </h2>
      <p>
      The JavaScript syntax defines two types of values:
      
      Fixed values
      Variable values
      Fixed values are called Literals.
      
      Variable values are called Variables.</p>
    </div>
   <div id='comment'>
        <h1>JavaScript Comments
        </h1>
        <br></br>
        <p>
        JavaScript comments can be used to explain JavaScript code, and to make it more readable.

        JavaScript comments can also be used to prevent execution, when testing alternative code.
        </p>
        <h2>Single Line Comments</h2>
        <p>
        Single line comments start with //.

        Any text between // and the end of the line will be ignored by JavaScript (will not be executed).
        
        This example uses a single-line comment before each code line:
        
         </p>
         <h2>Example</h2>           
         <div className='code'>
         <pre>{ele1}</pre>
         </div>
        <h2>Multi Line Comments</h2>
        <p>
        Multi-line comments start with /* and end with */.
        Any text between /* and */ will be ignored by JavaScript.
        This example uses a multi-line comment (a comment block) to explain the code:
       </p>
         <h2>Example</h2>           
         <div className='code'>
         <pre>{ele2}</pre>
         </div>         
    </div>
    <div id='variable'>
    <h1>JavaScript Variables
    </h1>
    <br></br>
    <p>
    Variables are Containers for Storing Data
    JavaScript Variables can be declared in 4 ways:</p><p>
    
    Automatically</p><p>
    Using var</p><p>
    Using let</p><p>
    Using const   
    </p>
      <br>
      </br>
          
      <p>In this first example, x, y, and z are undeclared variables.

      They are automatically declared when first used:</p>
      <h2>
       Example
      </h2>
      <div className='code'>
      <p>x = 5;</p><p>
      y = 6;</p><p>
      z = x + y;</p></div>
</div>
    <div id='operator'>
    <h1>JavaScript Operators</h1>
    <br></br>
    <p>
    Javascript operators are used to perform different types of mathematical and logical computations.
    </p>
     
      <h2>
      Examples:
      </h2>
      <p>
      The Assignment Operator = assigns values</p><p>

The Addition Operator + adds values</p><p>

The Multiplication Operator * multiplies values</p><p>

The Comparison Operator & compares values</p><p>
      </p>
      <h3>JavaScript Assignment
      </h3>
      <p>
      The Assignment Operator (=) assigns a value to a variable:
      </p>
      <div className='code'>
      <pre>{color}</pre></div>
      

     
</div>
    <div id='data'>
    <h1>
    The Concept of Data Types 
    </h1>
    <br></br>
    <p>
    In programming, data types is an important concept.
    
    To be able to operate on variables, it is important to know something about the type.
    
    Without data types, a computer cannot safely solve this:
    </p>
      <br>
      </br>
      <h2>
      JavaScript has 8 Datatypes
      </h2>      
     <p>
1. String</p><p>
2. Number</p><p>
3. Bigint</p><p>
4. Boolean</p><p>
5. Undefined</p><p>
6. Null</p><p>
7. Symbol</p><p>
8. Object</p><p>
     </p>
     <h2>
     The Object Datatype
     </h2>      
    <p>
The object data type can contain:</p><p>

1. An object</p><p>
2. An array</p><p>
3. A date
    </p>
      
      <br></br>
      <h2>
       Example
      </h2>
     <div className='code'>
     <pre>{back}</pre></div>
      
</div>
    <div id='function'>
    <h1>JavaScript Functions</h1>
    <br></br>
    <p>
    A JavaScript function is a block of code designed to perform a particular task.</p><p>

A JavaScript function is executed when "something" invokes it (calls it).
    </p>
      <br>
      </br>
      <h2>

      JavaScript Function Syntax
      </h2>
      <p>
      A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
      
      Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
      
      The parentheses may include parameter names separated by commas:
      (parameter1, parameter2, ...)
      
      The code to be executed, by the function, is placed inside curly brackets: `{}`
      </p>
      <div className='code'>
      <pre>{link1}</pre>
      </div>
      <h2>Example</h2>      
      <div className='code'>
      <pre>{link}</pre>
      </div>
     
      
</div>
    <div id='object'>
    <h1>JavaScript Objects</h1>
    <br></br>
    <h2>
    Real Life Objects, Properties, and Methods
    </h2>
    <p>
In real life, a car is an object.</p><p>
A car has properties like weight and color, and methods like start and stop:
    </p><p>
    All cars have the same properties, but the property values differ from car to car.

    </p>
    <p>
    
    All cars have the same methods, but the methods are performed at different times.
    </p>
      <br>
      </br>
      <h2>
      Object Definition
      </h2>
      <p>
You define (and create) a JavaScript object with an object literal:
      </p>   
      <h2>Example</h2>   
      <div className='code'>
      <pre>{obj}</pre>
      </div>
      <p>Spaces and line breaks are not important. An object definition can span multiple lines:</p>
      <div className='code'>
      <pre>{obj1}</pre>
      </div>
    <br></br>     
</div>
    <div id='event'>
    <h1>JavaScript Events</h1>
    <br></br>
    <p>
    HTML events are "things" that happen to HTML elements.</p><p>

    When JavaScript is used in HTML pages, JavaScript can "react" on these events.
    </p>
      <br>
      </br>
      <h2>HTML Events</h2>      
          
      <p>
      An HTML event can be something the browser does, or something a user does.</p><p>

      Here are some examples of HTML events:</p><p>
      
      An HTML web page has finished loading</p><p>
      An HTML input field was changed</p><p>
      An HTML button was clicked</p><p>
      Often, when events happen, you may want to do something.</p><p>
      
      JavaScript lets you execute code when events are detected.</p><p>
      
      HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.</p><p>
      </p>
      <p>With single quotes:

      </p>
      <div className='code'>
      <pre>{obj22}</pre>
      </div>
      
  
      
      
     
</div>
  </div>
  
</div>
</div>
  )
}

export default JavaScript