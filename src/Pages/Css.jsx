import React from 'react'
import './Css.css'
import Navbar from '../Layout/Navbar';

const Css = () => {
  const chome=`body {
    background-color: lightblue;
  }
  
  h1 {
    color: white;
    text-align: center;
  }
  
  p {
    font-family: verdana;
    font-size: 20px;
  }`;
  // const intro=``;
  const ccss=`p {
    color: red;
    text-align: center;
  }`;
  const ele1=`
  CSS selectors help define the elements to which styles should be applied. There are several types of CSS selectors:
  
  Element Selector: Selects HTML elements based on their tag names. For example, p selects all <p> elements.
  Class Selector: Selects elements with a specific class attribute. It uses a period (.) followed by the class name. For example, .example selects all elements with class="example".
  ID Selector: Selects elements with a specific ID attribute. It uses a hash (#) followed by the ID name. For example, #navbar selects the element with id="navbar".
  Universal Selector: Selects all elements on the page. It uses an asterisk (*). For example, * selects all elements.
  Attribute Selector: Selects elements based on their attributes. It can target specific attributes or attribute values. For example:
  [type="text"] selects all elements with type="text".
  [href^="https://"] selects all elements with href starting with https://.`;
  const ele2=`* {
    text-align: center;
    color: blue;
  }`;
  const color=`
  <h1 style="background-color:Tomato;">Tomato</h1>
  <h1 style="background-color:Orange;">Orange</h1>
  <h1 style="background-color:DodgerBlue;">DodgerBlue</h1>
  <h1 style="background-color:MediumSeaGreen;">MediumSeaGreen</h1>
  <h1 style="background-color:Gray;">Gray</h1>
  <h1 style="background-color:SlateBlue;">SlateBlue</h1>
  <h1 style="background-color:Violet;">Violet</h1>
  <h1 style="background-color:LightGray;">LightGray</h1>`;
  const back=`<!DOCTYPE html>
  <html>
  <head>
  <style>
  body {
    background-color: lightblue;
  }
  </style>
  </head>
  <body>
  
  <h1>Hello World!</h1>
  
  <p>This page has a light blue background color!</p>
  
  </body>
  </html>
  
  `;
  // const link=``;
  return (
    <div>
    <Navbar/>
    <div className='main'>
        <div className='left'>
        <h2 className='lefth2'>CSS Tutorial</h2>
        <div className='timeline'>
        <ul>
        <li><a href='#home'  className='ancho'>CSS Home</a></li>
        <li><a href='#intro' className='ancho'>CSS Introduction</a></li>
        <li><a href='#syntax' className='ancho'>CSS Syntax</a></li>
        <li><a href='#selectors' className='ancho'>CSS Selectors</a></li>
        <li><a href='#how' className='ancho'>CSS How to</a></li>
        <li><a href='#colors' className='ancho'>CSS Colors</a></li>
        <li><a href='#back' className='ancho'>CSS Background</a></li>
        <li><a href='#basics' className='ancho'>CSS Borders</a></li>
        <li><a href='#basics' className='ancho'>CSS Padding</a></li>
        <li><a href='#basics' className='ancho'>CSS Fonts</a></li>
        
        </ul>
        </div>
        </div>
        <br></br>
        <div className='right'>
        <div id='home'>
        <h1>CSS Tutorial</h1>
        <br></br>
        <p>Welcome to the exciting world of CSS! Whether you're a beginner or looking to brush up on your skills,
         diving into CSS opens the door to creating stunning Styled web pages and applications.
          CSS, or Cascading Style Sheet, is the style sheet of the web page 
          allowing you to design the structure display the content in a styled way.</p>
          <br>
          </br>
          <h2>Easy Learning with CSS "Example"</h2>
      
          <p>With our "Example" , you can learn the CSS code:
          </p>
          <br>
          </br>
          <div className='code'>
          <pre>{chome}</pre>
          </div>
        </div>
        <div id='intro'>
        <h1>CSS Introduction</h1>
        <br></br>
        <p>
        CSS is the language we use to style a Web page.
        </p>
        <p>CSS stands for Cascading Style Sheets
        CSS describes how HTML elements are to be displayed on screen, paper, or in other media
        CSS saves a lot of work. It can control the layout of multiple web pages all at once
        External stylesheets are stored in CSS files

         
        </p>
          <br>
          </br>
          <h2>CSS Solved a Big Problem</h2>
      
          <p>
          HTML was NEVER intended to contain tags for formatting a web page!</p><p>

HTML was created to describe the content of a web page, like:</p><p>

`h1`This is a heading`/h1`</p><p>

`p`This is a paragraph.`/p`</p><p>

When tags like `font`, and color attributes were added to the HTML 3.2 specification, it started a nightmare for web developers. Development of large websites, where fonts and color information were added to every single page, became a long and expensive process.</p><p>

To solve this problem, the World Wide Web Consortium (W3C) created CSS.</p><p>

CSS removed the style formatting from the HTML page!
          </p>
         
         
         
        </div>
        <div id='syntax'>
        <h1>CSS Syntax</h1>
        <br></br>
        <p>
        A CSS rule consists of a selector and a declaration block. 
        </p>
          <br>
          </br>
          <h2>CSS Syntax</h2>      
          <img src='https://www.w3schools.com/css/img_selector.gif' alt='OOPs'></img>
          <p>The selector points to the HTML element you want to style.</p><p>

          The declaration block contains one or more declarations separated by semicolons.</p><p>
          
          Each declaration includes a CSS property name and a value, separated by a colon.</p><p>
          
          Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.</p>
          
          <h2>Example</h2>      
      <div className='code'>
      <pre>{ccss}</pre>
      </div>
    </div>
        <div id='selectors'>
        <h1>CSS Selectors
        </h1>
        <br></br>
        <p>
        A CSS selector selects the HTML element(s) you want to style. 
        </p>
        <h2>CSS Selectors</h2>
        <p>
        CSS selectors are used to "find" (or select) the HTML elements you want to style.</p><p>

We can divide CSS selectors into five categories:</p><p>

Simple selectors (select elements based on name, id, class)
Combinator selectors (select elements based on a specific relationship between them)
Pseudo-class selectors (select elements based on a certain state)
Pseudo-elements selectors (select and style a part of an element)
Attribute selectors (select elements based on an attribute or attribute value)</p><p>
This page will explain the most basic CSS selectors.
         </p>
         <p className='pp1'><pre>{ele1}</pre></p>
       
        
         <h2>
         The CSS Universal Selector
         </h2>
              <p>The CSS rule below will affect every HTML element on the page: </p>    
          <div className='code'>
          {ele2}
          </div>
          
    </div>
    <div id='how'>
    <h1>How To Add CSS</h1>
    <br></br>
    <p>
    When a browser reads a style sheet, it will format the HTML document according to the information in the style sheet.
    
    </p>
      <br>
      </br>
      <h2>Three Ways to Insert CSS</h2>      
      <p>There are three ways of inserting a style sheet:</p><p>

      External CSS,
      Internal CSS,
      Inline CSS.
      </p>
      <h2>
     
      External CSS
      </h2>
      <p>
      With an external style sheet, you can change the look of an entire website by changing just one file!
      
      Each HTML page must include a reference to the external style sheet file inside the `link` element, inside the head section.
      </p>
      <p>An external style sheet can be written in any text editor, and must be saved with a .css extension.

      The external .css file should not contain any HTML tags.</p>
      <h2>
     
      Internal CSS      </h2>
      <p>
      An internal style sheet may be used if one single HTML page has a unique style.

      The internal style is defined inside the `style` element, inside the head section.
      </p>
      <h2>Inline CSS</h2>
      <p>An inline style may be used to apply a unique style for a single element.

      To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property.</p>

</div>
    <div id='colors'>
    <h1>CSS Colors</h1>
    <br></br>
    <p>
    Colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.
    </p>
     
      <h2>
    
      CSS Color Names
      </h2>
      <p>
      In CSS, a color can be specified by using a predefined color name:
      </p>
      <h3>Example</h3>
      <div className='code'>
      <pre>{color}</pre></div>
      

     
</div>
    <div id='back'>
    <h1>CSS Background</h1>
    <br></br>
    <p>
    The CSS background properties are used to add background effects for elements.
    </p>
      <br>
      </br>
      <h2>Example</h2>      
      <div className='code'>
      <pre>{back}</pre>
      </div>
      <h3>Output</h3>
      <body>
      
      <h1>Hello World!</h1>
      
      <p>This page has a light blue background color!</p>
      
      </body>
  
      
      
      <br></br>
      <h2>

      Opacity / Transparency
      </h2>
      <p>
The opacity property specifies the opacity/transparency of an element. It can take a value from 0.0 - 1.0. The lower value, the more transparent:
      </p>
      
</div>
  </div>
  
</div>
</div>
  )
}

export default Css