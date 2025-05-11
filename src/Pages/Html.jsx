import React from 'react'
import './Html.css'
import Navbar from '../Layout/Navbar';

const Html = () => {
  const intro=`<!DOCTYPE html>
  <html>
  <head>
  <title>Page Title</title>
  </head>
  <body>
  
  <h1>My First Heading</h1>
  <p>My first paragraph.</p>
  
  </body>
  </html>
  `;
  const ele1=`<tagname>Content goes here...</tagname>`;
  const ele2=`Examples of some HTML elements:

  <h1>My First Heading</h1>
  <p>My first paragraph.</p>`;
  const head=`<!DOCTYPE html>
  <html>
  <body>
  
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>
  
  </body>
  </html>`;
  const para=`<!DOCTYPE html>
  <html>
  <body>
  
  <p>This is a paragraph.</p>
  <p>This is a paragraph.</p>
  <p>This is a paragraph.</p>
  
  </body>
  </html>
  `;
  const link=`<!DOCTYPE html>
  <html>
  <body>
  
  <h1>HTML Links</h1>
  
  <p><a href="https://www.w3schools.com/">Visit W3Schools.com!</a></p>
  
  </body>
  </html>`;
  return (
    <div>
      <Navbar/>
    <div className='main'>
        <div className='left'>
        <h2 className='lefth2'>HTML Tutorial</h2>
        <div className='timeline'>
        <ul>
        <li><a href='#home' className='ancho'>HTML Home</a></li>
        <li><a href='#intro' className='ancho'>HTML Introduction</a></li>
        <li><a href='#basics' className='ancho'>HTML Basics</a></li>
        <li><a href='#elements' className='ancho'>HTML Elements</a></li>
        <li><a href='#attributes' className='ancho'>HTML Attributes</a></li>
        <li><a href='#headings' className='ancho'>HTML Headings</a></li>
        <li><a href='#para' className='ancho'>HTML Paragraphs</a></li>
        <li><a href='#links' className='ancho'>HTML Links</a></li>
        <li><a href='#image' className='ancho'>HTML Images</a></li>
        <li><a href='#list' className='ancho'>HTML Lists</a></li>
        <li><a href='#table' className='ancho'>HTML Tables</a></li>
        <li><a href='#form' className='ancho'>HTML Forms</a></li>
        <li><a href='#class' className='ancho'>HTML Class</a></li>
        <li><a href='#style' className='ancho'>HTML Styles</a></li>
        </ul>
        </div>
        </div>
        <br></br>
        <div className='right'>
        <div id='home'>
        <h1>HTML Tutorial</h1>
        <br></br>
        <p>Welcome to the exciting world of HTML! Whether you're a beginner or looking to brush up on your skills,
         diving into HTML opens the door to creating stunning web pages and applications.
          HTML, or HyperText Markup Language, is the backbone of the web, 
          allowing you to structure and present content in a meaningful way.</p>
          <br>
          </br>
          <h2>Easy Learning with HTML "Example"</h2>
      
          <p>With our "Example" , you can learn the HTML code:
          </p>
          <br>
          </br>
          <div className='img'>
          <img src='https://henryegloff.com/media/How-to-Code-a-Basic-Webpage-Using-HTML-Tutorial-2.jpg' alt='OOPs !!'></img>
          </div>
        </div>
        <div id='intro'>
        <h1>HTML Introduction</h1>
        <br></br>
        <p>
        "HTML, which stands for HyperText Markup Language, is the foundation of web development.
         It's used to create the structure and layout of web pages by using a system of tags and elements. 
         Each tag serves a specific purpose, such as defining headings, paragraphs, links, images, and more.          
        </p>
          <br>
          </br>
          <h2>A Simple HTML Document</h2>
      
          <p>Example
          </p>
          <br>
          </br>
          <div className='code'>
          <pre>{intro}</pre>
          </div>
          <p>Example Explained</p>
          <ul>
              <li>The ` !DOCTYPE  ` html declaration defines that this document is an HTML5 document</li>
              <li>The ` html ` element is the root element of an HTML page</li>
              <li>The ` head ` element contains meta information about the HTML page</li>
              <li>The ` title ` element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)</li>
              <li>The ` body ` element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.</li>
              <li>The ` h1 ` element defines a large heading</li>
              <li>The ` p ` element defines a paragraph</li>
              <li>Remember that every opening tags requires a matching closing tag</li>
          </ul>
        </div>
        <div id='basics'>
        <h1>HTML Basics</h1>
        <br></br>
        <p>
        In this chapter we will show some basic HTML examples.
        Don't worry if we use tags you have not learned about yet. </p> <p>
        All HTML documents must start with a document type declaration: `!DOCTYPE html`.
       The HTML document itself begins with ` html ` and ends with ` /html `.
        The visible part of the HTML document is between ` body ` and ` /body `.  
        </p>
          <br>
          </br>
          <h2>HTML Document</h2>      
          <p>An HTML document is a text file that contains structured content and instructions, 
          written in HTML (HyperText Markup Language),
           which is used to create web pages. Here's a breakdown of the key components and elements of an HTML document:
          </p>
          <h2>
          The ` !DOCTYPE ` Declaration
          </h2>
          <p>
          The ` !DOCTYPE ` declaration represents the document type, and helps browsers to display web pages correctly.
          It must only appear once, at the top of the page (before any HTML tags). 
          The ` !DOCTYPE ` declaration is not case sensitive.
          </p>
    </div>
        <div id='elements'>
        <h1>HTML Elements
        </h1>
        <br></br>
        <p>
        An HTML element is defined by a start tag, some content, and an end tag. 
        </p>
        <br></br>
        <p><pre>{ele1}</pre></p>
          <br>
          </br>
         
          <p className='pp1'>
          <pre>{ele2}</pre>
          </p>
          <h2>
          Nested HTML Elements
          </h2>
          <p>
HTML elements can be nested (this means that elements can contain other elements).
All HTML documents consist of nested HTML elements.
The following example contains four HTML elements
          </p>
          <div className='code'>
          <pre>{intro}</pre>
          </div>
          <p>Here you don't need to understand the ,just see the Nesting of different elements.. </p>
    </div>
    <div id='attributes'>
    <h1>HTML Attributes</h1>
    <br></br>
    <p>
    HTML attributes provide additional information about HTML elements. </p> <p>
    All HTML elements can have attributes
    Attributes provide additional information about elements
    Attributes are always specified in the start tag
    Attributes usually come in name/value pairs like: name="value"
    
    </p>
      <br>
      </br>
      <h2>HTML Attributes</h2>      
      <p>An HTML document is a text file that contains structured content and instructions, 
      written in HTML (HyperText Markup Language),
       which is used to create web pages. Here's a breakdown of the key components and elements of an HTML document:
      </p>
      <h2>
      The href Attribute
      </h2>
      <p>
      The ` !DOCTYPE ` declaration represents the document type, and helps browsers to display web pages correctly.
      It must only appear once, at the top of the page (before any HTML tags). 
      The ` !DOCTYPE ` declaration is not case sensitive.
      </p>
</div>
    <div id='headings'>
    <h1>HTML Headings</h1>
    <br></br>
    <p>
    HTML headings are titles or subtitles that you want to display on a webpage.
    
    </p>
      <br>
      </br>
      <h2>Example</h2>      
      <div className='code'>
      <pre>{head}</pre>
      </div>
      <h3>Output</h3>
      <p>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6></p>
      <br></br>
      <h2>
    
      HTML Headings
      </h2>
      <p>
HTML headings are defined with the ` h1 ` to `h6 ` tags.
`h1` defines the most important heading. `h6` defines the least important heading.
      </p>
      <p>Search engines use the headings to index the structure and content of your web pages.

      Users often skim a page by its headings. It is important to use headings to show the document structure.</p>
</div>
    <div id='para'>
    <h1>HTML Paragraphs</h1>
    <br></br>
    <p>
    A paragraph always starts on a new line, and is usually a block of text.   
    </p>
      <br>
      </br>
      <h2>Example</h2>      
      <div className='code'>
      <pre>{para}</pre>
      </div>
      <h3>Output</h3>
      <p>
      <p>This is a paragraph.</p>
<p>This is another paragraph.</p>
      </p>
      <br></br>
      <h2>
    
      HTML Paragraphs
      </h2>
      <p>
      A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.
      </p>
      <p>
      You cannot be sure how HTML will be displayed.

Large or small screens, and resized windows will create different results.

With HTML, you cannot change the display by adding extra spaces or extra lines in your HTML code.

The browser will automatically remove any extra spaces and lines when the page is displayed:
      </p>
</div>
    <div id='links'>
    <h1>HTML Links</h1>
    <br></br>
    <p>
    Links are found in nearly all web pages. Links allow users to click their way from page to page.  
    </p>
    <p>The most important attribute of the `a` element is the href attribute, which indicates the link's destination.

    The link text is the part that will be visible to the reader.
    
    Clicking on the link text, will send the reader to the specified URL address.</p>
      <br>
      </br>
      <h2>Example</h2>      
      <div className='code'>
      <pre>{link}</pre>
      </div>
            <br></br>
      <h2>
    
      HTML Links - Hyperlinks
      </h2>
      <p>
      HTML links are hyperlinks.

      You can click on a link and jump to another document.
      
      When you move the mouse over a link, the mouse arrow will turn into a little hand.
      </p>
      <p>
      By default, links will appear as follows in all browsers:
      </p>
      <p>

An unvisited link is underlined and blue<br></br>
A visited link is underlined and purple<br></br>
An active link is underlined and red<br></br>
      </p>
</div>
    <div id='image'>
    <h1>HTML Images</h1>
    <br></br>
    <p>
    Images can improve the design and the appearance of a web page.   
    </p>
      <br>
      </br>
      <h2>Example</h2>      
      <div className='code'>
      <pre>{para}</pre>
      </div>
      <h3>Output</h3>
      <p>
      <p>This is a paragraph.</p>
<p>This is another paragraph.</p>
      </p>
      <br></br>
      <h2>
    
      HTML Paragraphs
      </h2>
      <p>
      A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.
      </p>
      <p>
      You cannot be sure how HTML will be displayed.

Large or small screens, and resized windows will create different results.

With HTML, you cannot change the display by adding extra spaces or extra lines in your HTML code.

The browser will automatically remove any extra spaces and lines when the page is displayed:
      </p>
</div>
  </div>
  
</div>
</div>
  )
}

export default Html