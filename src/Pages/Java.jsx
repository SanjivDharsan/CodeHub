import React from 'react'
import './Java.css'
import Navbar from '../Layout/Navbar';

const Java = () => {
  const chome=`public class Main {
    public static void main(String[] args) {
      System.out.println("Hello World");
    }
  }`;
  const intro=`  <button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>
  Click Me!
  </button>
  `;
  const ccss=`Main.java

  public class Main {
    public static void main(String[] args) {
      System.out.println("Hello World");
    }
  }`;
  const ele1=`// This is a comment
  System.out.println("Hello World");`;
  const ele2=`/* The code below will print the words Hello World
  to the screen, and it is amazing */
  System.out.println("Hello World");`;
  const color=`let x = 10;
  // Assign the value 5 to x
  let x = 5;
  // Assign the value 2 to y
  let y = 2;
  // Assign the value x + y to z:
  let z = x + y;`;
  const back=` public class Main {
    public static void main(String[] args) {
      int myNum = 5;               // integer (whole number)
      float myFloatNum = 5.99f;    // floating point number
      char myLetter = 'D';         // character
      boolean myBool = true;       // boolean
      String myText = "Hello";     // String    
      System.out.println(myNum);
      System.out.println(myFloatNum);
      System.out.println(myLetter);
      System.out.println(myBool);
      System.out.println(myText);
    }
  }
  `;
  const link=`if (20 > 18) {
    System.out.println("20 is greater than 18");
  }  `;
  const link1=`if (condition) {
    // block of code to be executed if the condition is true
  }`;
  const link11=`for (statement 1; statement 2; statement 3) {
    // code block to be executed
  }`;
  const obj=`const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};`;
  const obj22=`<element event='some JavaScript'>  `;
  const obj1=`while (condition) {
    // code block to be executed
  }`;
  return (
    <div>
    <Navbar/>
    <div className='main'>
        <div className='left'>
        <h2 className='lefth2'>Java Tutorial</h2>
        <div className='timeline'>
        <ul>
        <li><a href='#home'  className='ancho'>Java Home</a></li>
        <li><a href='#intro' className='ancho'>Java Introduction</a></li>
        <li><a href='#syntax' className='ancho'>Java Syntax</a></li>
        <li><a href='#comment' className='ancho'>Java Comments</a></li>
        <li><a href='#variable' className='ancho'>Java Variables</a></li>
        <li><a href='#operator' className='ancho'>Java  Operators</a></li>
        <li><a href='#data' className='ancho'>Java Data Types</a></li>
        <li><a href='#if' className='ancho'>Java If...Else</a></li>
        <li><a href='#loop' className='ancho'>Java Loops</a></li>
        <li><a href='#array' className='ancho'>Java Arrays</a></li>
        
        </ul>
        </div>
        </div>
        <br></br>
        <div className='right'>
        <div id='home'>
        <h1>Java Tutorial</h1>
        <br></br>
        <h2>
        Learn Java
        </h2>
        <p>
        Java is a popular programming language.</p><p>
        
        Java is used to develop mobile apps, web apps, desktop apps, games and much more.
        </p>
          <br>
          </br>
          <h2>Examples in Each Chapter</h2>
      
          <p>With our "Example" , you can learn the Java code:
          </p>
          <br>
          </br>
          <h2>Example</h2>
          <div className='code'>
          <pre>{chome}</pre>
          </div>
        </div>
        <div id='intro'>
        <h1>Java Introduction</h1>
        <br></br>
        <p>
        This page contains some examples of what Java can do.
        </p>
        <h2>
        What is Java?
        </h2>
        <p>
        Java is a popular programming language, created in 1995.</p><p>
        
        It is owned by Oracle, and more than 3 billion devices run Java.
        
        It is used for:</p><p>
        
        Mobile applications (specially Android apps)</p><p>
        Desktop applications</p><p>
        Web applications</p><p>
        Web servers and application servers</p><p>
        Games</p><p>
        Database connection</p><p>
        And much, much more!  </p><p>
        </p>
        <br>
          </br>
        <h2>
        
        Why Use Java?
        </h2>
        <p>
Java works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.)</p><p>
It is one of the most popular programming languages in the world</p><p>
It has a large demand in the current job market</p><p>
It is easy to learn and simple to use</p><p>
It is open-source and free</p><p>
It is secure, fast and powerful</p><p>
It has huge community support (tens of millions of developers)</p><p>
Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs</p><p>
As Java is close to C++ and C#, it makes it easy for programmers to switch to Java or vice versa.
        </p>
        </div>
        <div id='syntax'>
        <h1>Java Syntax</h1>
        <br></br>
        <p>
        Java syntax is the set of rules, how Java programs are constructed
       </p>
          <br>
          </br>
          <h2>Java Syntax</h2>           
      <div className='code'>
      <pre>{ccss}</pre>
      </div>
      <h2>
      Example explained
      </h2>
      <p>
Every line of code that runs in Java must be inside a class. In our example, we named the class Main. A class should always start with an uppercase first letter.

</p><p>Note: Java is case-sensitive: "MyClass" and "myclass" has different meaning.</p><p>

The name of the java file must match the class name. When saving the file, save it using the class name and add ".java" to the end of the filename. To run the example above on your computer,
make sure that Java is properly installed: Go to the Get Started Chapter for how to install Java. The output should be:
      </p>
      <p>Hello World</p>
    </div>
   <div id='comment'>
        <h1>Java Comments
        </h1>
        <br></br>
        <p>
        Comments can be used to explain Java code, and to make it more readable.
         It can also be used to prevent execution when testing alternative code.
       </p>
        <h2>Single-line Comments</h2>
        <p>
        Single line comments start with //.

        Any text between // and the end of the line will be ignored by Java (will not be executed).
        
        This example uses a single-line comment before each code line:
        
         </p>
         <h2>Example</h2>           
         <div className='code'>
         <pre>{ele1}</pre>
         </div>
        <h2>Multi Line Comments</h2>
        <p>
        Multi-line comments start with /* and end with */.
        Any text between /* and */ will be ignored by Java.
        This example uses a multi-line comment (a comment block) to explain the code:
       </p>
         <h2>Example</h2>           
         <div className='code'>
         <pre>{ele2}</pre>
         </div>         
    </div>
    <div id='variable'>
    <h1>Java Variables
    </h1>
    <br></br>
    <h2>
    Java Variables
    </h2>
    <p>
Variables are containers for storing data values.</p><p>

In Java, there are different types of variables, for example:</p><p>

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
    <h1>Java Operators</h1>
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
      Java divides the operators into the following groups:
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
     Two types of data type are in Java programming: (A) 
    Primitive data types: The primitive data types consist of int, float, boolean, byte, short, long, char and double.
    </p>
      <br>
      </br>
      <h2>
      Primitive Data Types
      </h2>
      <p>
A primitive data type specifies the size and type of variable values, and it has no additional methods.

There are eight primitive data types in Java:</p>
     
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
    <h1>Java If ... Else</h1>
    <br></br>
    <p>
    Use the if statement to specify a block of Java code to be executed if a condition is true.
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
    <h1>Java loops</h1>
    <p>
    Loops can execute a block of code as long as a specified condition is reached.
    
    Loops are handy because they save time, reduce errors, and they make code more readable.</p>
    <br></br>
    <h2>
    Java While Loop
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
    Java For Loop
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
    <h1>Java Arrays</h1>
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
      <p>System.out.println(cars[0]);
      // Outputs Volvo

      </p>  
</div>
  </div>
  
</div>
</div>
  )
}

export default Java