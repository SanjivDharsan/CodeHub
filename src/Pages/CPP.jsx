import React from 'react'
import './CPP.css'
import Navbar from '../Layout/Navbar';

const CPP = () => {
  const chome=`#include <iostream>
  using namespace std;
  
  int main() {
    cout << "Hello World!";
    return 0;
  }`;
 
  const ccss=`#include <iostream>
  using namespace std;
  
  int main() {
    cout << "Hello World!";
    return 0;
  }
  `;
  const ele1=`// This is a comment
  cout << "Hello World!";`;
  const ele2=`/* The code below will print the words Hello World!
  to the screen, and it is amazing */
  cout << "Hello World!";`;
  
  const back=` cout<<cars[0];  `;
  const link=`if (20 > 18) {
    System.out.println("20 is greater than 18");
  }  `;
  const link1=`if (condition) {
    // block of code to be executed if the condition is true
  }`;
  const link11=`for (statement 1; statement 2; statement 3) {
    // code block to be executed
  }`;
    const obj1=`while (condition) {
    // code block to be executed
  }`;
  return (
    <div>
    <Navbar/>
    <div className='main'>
        <div className='left'>
        <h2 className='lefth2'>C++ Tutorial</h2>
        <div className='timeline'>
        <ul>
        <li><a href='#home'  className='ancho'>C++ Home</a></li>
        <li><a href='#intro' className='ancho'>C++ Introduction</a></li>
        <li><a href='#syntax' className='ancho'>C++ Syntax</a></li>
        <li><a href='#comment' className='ancho'>C++ Comments</a></li>
        <li><a href='#variable' className='ancho'>C++ Variables</a></li>
        <li><a href='#operator' className='ancho'>C++  Operators</a></li>
        <li><a href='#data' className='ancho'>C++ Types</a></li>
        <li><a href='#if' className='ancho'>C++ If...Else</a></li>
        <li><a href='#loop' className='ancho'>C++ Loops</a></li>
        <li><a href='#array' className='ancho'>C++ Arrays</a></li>
        
        </ul>
        </div>
        </div>
        <br></br>
        <div className='right'>
        <div id='home'>
        <h1>C++ Tutorial</h1>
        <br></br>
        <h2>
        Learn C++
        </h2>
        <p>
        C++ is a popular programming language.</p><p>
        
        C++ is used to develop mobile apps, web apps, desktop apps, games and much more.
        </p>
          <br>
          </br>
          <h2>Examples in Each Chapter</h2>
      
          <p>With our "Example" , you can learn the C++ code:
          </p>
          <br>
          </br>
          <h2>Example</h2>
          <div className='code'>
          <pre>{chome}</pre>
          </div>
        </div>
        <div id='intro'>
        <h1>C++ Introduction</h1>
        <br></br>
        <p>
        This page contains some examples of what C++ can do.
        </p>
        <h2>
        What is C++?
        </h2>
        <p>C++ is a cross-platform language that can be used to create high-performance applications.

        C++ was developed by Bjarne Stroustrup, as an extension to the C language.</p><p>
        
        C++ gives programmers a high level of control over system resources and memory.</p><p>
        
        The language was updated 4 major times in 2011, 2014, 2017, and 2020 to C++11, C++14, C++17, C++20.</p>
        
        <br>
          </br>
        <h2>
        
        Why Use C++?
        </h2>
        <p>
        C++ is one of the world's most popular programming languages.</p><p>

        C++ can be found in today's operating systems, Graphical User Interfaces, and embedded systems.</p><p>
        
        C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused, lowering development costs.
        </p><p>
        C++ is portable and can be used to develop applications that can be adapted to multiple platforms.
        </p><p>
        C++ is fun and easy to learn!
        </p><p>
        As C++ is close to C, C# and Java, it makes it easy for programmers to switch to C++ or vice versa.
        </p>
        <h2>
        Difference between C and C++:
        </h2>
        <p>
C++ was developed as an extension of C, and both languages have almost the same syntax.

The main difference between C and C++ is that C++ support classes and objects, while C does not.
        </p>
        </div>
        <div id='syntax'>
        <h1>C++ Syntax</h1>
        <br></br>
        <p>
        C++ syntax is the set of rules, how C++ programs are constructed
       </p>
          <br>
          </br>
          <h2>C++ Syntax</h2>           
      <div className='code'>
      <pre>{ccss}</pre>
      </div>
      <h2>
      Example explained
      </h2>
      <p>
      Line 1: #include `iostream` is a header file library that lets us work with input and output objects, such as cout (used in line 5). Header files add functionality to C++ programs.
</p><p>
Line 2: using namespace std means that we can use names for objects and variables from the standard library.</p>
      <p>Hello World!</p>
    </div>
   <div id='comment'>
        <h1>C++ Comments
        </h1>
        <br></br>
        <p>
        Comments can be used to explain C++ code, and to make it more readable.
         It can also be used to prevent execution when testing alternative code.
       </p>
        <h2>Single-line Comments</h2>
        <p>
        Single line comments start with //.

        Any text between // and the end of the line will be ignored by C++ (will not be executed).
        
        This example uses a single-line comment before each code line:
        
         </p>
         <h2>Example</h2>           
         <div className='code'>
         <pre>{ele1}</pre>
         </div>
        <h2>Multi Line Comments</h2>
        <p>
        Multi-line comments start with /* and end with */.
        Any text between /* and */ will be ignored by C++.
        This example uses a multi-line comment (a comment block) to explain the code:
       </p>
         <h2>Example</h2>           
         <div className='code'>
         <pre>{ele2}</pre>
         </div>         
    </div>
    <div id='variable'>
    <h1>C++ Variables
    </h1>
    <br></br>
    <h2>
    C++ Variables
    </h2>
    <p>
Variables are containers for storing data values.</p><p>

In C++, there are different types of variables, for example:</p><p>

String - stores text, such as "Hello". String values are surrounded by double quotes</p><p>
int - stores integers (whole numbers), without decimals, such as 123 or -123</p><p>
float - stores floating point numbers, with decimals, such as 19.99 or -19.99</p><p>
char - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes</p><p>
boolean - stores values with two states: true or false</p><p>
    </p>
      <br>
      </br>
          
      <h2>
      Declaring (Creating) Variables
      </h2>
      <p>
      To create a variable, you must specify the type and assign it a value:
      </p>
      <h3>Syntax</h3>
      <div className='code'>
      type variableName = value;
      </div>
</div>
    <div id='operator'>
    <h1>C++ Operators</h1>
    <br></br>
    <p>
    Operators are used to perform operations on variables and values.

    In the example below, we use the + operator to add together two values:    </p>
     
      <h2>
      Examples:
      </h2>
      <p>
      int x = 100 + 50;
      </p>
      <p>Although the + operator is often used to add together two values, like in the example above, 
      it can also be used to add together a variable and a value, or a variable and another variable:</p>
      <h2>
      Examples:
      </h2>
      <p>
int sum1 = 100 + 50;        // 150 (100 + 50)</p><p>
int sum2 = sum1 + 250;      // 400 (150 + 250)</p><p>
int sum3 = sum2 + sum2;     // 800 (400 + 400)
      </p>
      <br></br>
      <h2>
      C++ divides the operators into the following groups:
      </h2>
     <p>

Arithmetic operators</p><p>
Assignment operators</p><p>
Comparison operators</p><p>
Logical operators</p><p>
Bitwise operators
</p>
      

     
</div>
    <div id='data'>
    <h1>
    Data Types 
    </h1>
    <br></br>
    <p>
    Data types refer to the different sizes and values that can be stored in the variable.
     Two types of data type are in C++ programming: (A) 
    Primitive data types: The primitive data types consist of int, float, boolean, byte, short, long, char and double.
    </p>
      <br>
      </br>
      <h2>
      Primitive Data Types
      </h2>
      <p>
A primitive data type specifies the size and type of variable values, and it has no additional methods.

There are eight primitive data types in C++:</p>
     
     <p>
1. byte</p><p>
2. short</p><p>
3. int</p><p>
4. long</p><p>
5. float</p><p>
6. double</p><p>
7. boolean</p><p>
8. char</p><p>
     </p>
     <h2>
     The Non-Primitive Datatype
     </h2>      
<p>
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
    <div id='if'>
    <h1>C++ If ... Else</h1>
    <br></br>
    <p>
    Use the if statement to specify a block of C++ code to be executed if a condition is true.
    </p>
      <br>
      </br>
      <h2>
       Syntax
      </h2>
      <div className='code'>
      <pre>{link1}</pre>
      </div>
      <h2>Example</h2>      
      <div className='code'>
      <pre>{link}</pre>
      </div>
      <h2>Output</h2>
      <p>20 is greater than 18</p>
     
      
</div>
    <div id='loop'>
    <h1>C++ loops</h1>
    <p>
    Loops can execute a block of code as long as a specified condition is reached.
    
    Loops are handy because they save time, reduce errors, and they make code more readable.</p>
    <br></br>
    <h2>
    C++ While Loop
    </h2>
    <p>The while loop loops through a block of code as long as a specified condition is true:
    </p>
    <h2>
     Syntax
    </h2>
    <div className='code'>
    <pre>{obj1}</pre>
    </div>
    <br>
    </br>
    <h2>
    C++ For Loop
    </h2>
    <p>
    When you know exactly how many times you want to loop through a block of code, use the for loop instead of a while loop:
    </p>
    <h2>
       Syntax
      </h2>
      <div className='code'>
      <pre>{link11}</pre>
      </div>
    <p>
    Statement 1 is executed (one time) before the execution of the code block.</p><p>
    </p><p>
Statement 2 defines the condition for executing the code block.
</p><p>
Statement 3 is executed (every time) after the code block has been executed.
    </p>
     
    <br></br>     
</div>
    <div id='array'>
    <h1>C++ Arrays</h1>
    <br></br>
    <p>
    Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.
To declare an array, define the variable type with square brackets:
    </p>
    <p>String[] cars;</p>
      <br>
      </br>
      <p>We have now declared a variable that holds an array of strings. 
      To insert values to it, you can place the values in a comma-separated list, inside curly braces:</p>
      <br></br>
      <p>String[] cars = `"Volvo", "BMW", "Ford", "Mazda"`;
      </p>
      <h2>
      Access the Elements of an Array
      </h2>      
          
      <p>
You can access an array element by referring to the index number.

This statement accesses the value of the first element in cars:
     </p>
     <p>Example</p>
      <p>
      <div className='code'>
      <pre>{back}</pre>
      </div>
      // Outputs Volvo

      </p>  
</div>
  </div>
  
</div></div>
  )
}

export default CPP