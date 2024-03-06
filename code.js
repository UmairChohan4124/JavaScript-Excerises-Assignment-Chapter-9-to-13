// <!---------- Chapter 9 to 11 ---------->

//Q1
var city = prompt("What is the name of your city?");
    if(city == "Karachi")
    {alert("Welcome to city of lights")}
    else{alert("you have enter unvalid city name");}


//Q2
var gender = prompt("Kindly enter your gender male/female!!")

     if(gender == "male")
     {alert ("Good Morning Sir");}
     else if(gender== "female")
     {alert("Good Morning Ma'am");}
     else{alert("Enter correct gender detail");}


//Q3
var signalLight = prompt("Kindly enter trafic signal color");

     if (signalLight == "Red")
     {document.write("<table><tr><th>Signal Color</th><th>Message</th></tr>" + "<tr><td>Red</td><td>Must Stop</td></tr></table>");}
     else if (signalLight == "Yellow")
     {document.write("<table><tr><th>Signal Color</th><th>Messege</th></tr>" + "<tr><td>Yellow</td><td>Ready to move</td></tr></table>");}
     else if (signalLight == "Green")
     {document.write("<table><tr><th>Signal Color</th><th>Messege</th></tr>" + "<tr><td>Green</td><td>Move now</td></tr></table>");}
     else{document.write("Enter valid signal color");}


//Q4
var fuel = prompt("Enter your remaning fuel \n Example = 0.25Ltr");

     if(fuel <= 0.25)
     {alert("Please refill the fuel in your car!!");}
     else
     {alert("Your remaning fuel doesn't exceed the limit yet!!");}



//Q5
//a, (Alert msg is displaying)
var a = 4;
     if (++a === 5)
     {alert("given condition for variable a is true");}
    
//b, (Alert msg is not displaying)
var b = 82;
     if (b++ === 83)
     {alert("given condition for variable b is true");}

//c, (Alert msg is displaying that "condition 2 & condition 4 is true")
var c = 12;
     if (c++ === 13)
     {alert("condition 1 is true");}
     if (c === 13)
     {alert("condition 2 is true");}
     if (++c < 14)
     {alert("condition 3 is true");}
     if(c === 14)
     {alert("condition 4 is true");}

//d, (Alert msg is displaying)
var materialCost = 20000;
     laborCost = 2000;
     totalCost = materialCost + laborCost;
        
     if(totalCost === laborCost + materialCost)
     {alert ("The total cost equals");}

//e, (Alert msg is displaying)
     if(true)
     {alert("True");}

//   (Alert msg is not displaying because if method doesn't support "false" value or condition)
     if(false)
     {alert("False");}

//f, (Alert msg is displaying because of lexicographical order)
     if ("car" < "cat")
     {alert ("car is smaller then cat");}


//Q6
var english = 100;
    urdu = 100;
    maths = 100;
    totalMarks= english + urdu + maths;
    mathMarks = +prompt("Enter your Maths Marks");
    urduMarks = +prompt("Enter your Urdu Marks");
    englishMarks = +prompt("ENter your English Marks");
    obtainMarks = mathMarks + urduMarks + englishMarks;
    percentage = ((obtainMarks / totalMarks) * 100);
     if(percentage >= 80)
     {document.write("<h1>Marks Sheet</h1>"  + "Total marks :" + "  " + totalMarks + "</br>" + "Marks obtain :"+ "  " +obtainMarks + "</br>" + "Percentage :"+ "  " + percentage +"%" +"</br>"+ "Grade :"+ "  " +"A-one"+"</br>"+"Remarks :  You need to improve");}
     else if(percentage >= 70)
     {document.write("<h1>Marks Sheet</h1>"  + "Total marks :" + "  " + totalMarks + "</br>" + "Marks obtain :"+ "  " +obtainMarks + "</br>" + "Percentage :"+ "  " + percentage +"%" +"</br>"+ "Grade :"+ "  " +"A"+"</br>"+"Remarks :  Good");}
     else if(percentage >= 60)
     {document.write("<h1>Marks Sheet</h1>"  + "Total marks :" + "  " + totalMarks + "</br>" + "Marks obtain :"+ "  " +obtainMarks + "</br>" + "Percentage :"+ "  " + percentage +"%" +"</br>"+ "Grade :"+ "  " +"B"+"</br>"+"Remarks :  You need to improve");}
     else{document.write("<h1>Marks Sheet</h1>"  + "Total marks :" + "  " + totalMarks + "</br>" + "Marks obtain :"+ "  " +obtainMarks + "</br>" + "Percentage :"+ "  " + percentage +"%" +"</br>"+ "Grade :"+ "  " +"Fail"+"</br>"+"Remarks :  Sorry");}


//Q7
var secratNumer = 7;
     userNumber = +prompt("Guess Game \nGuess the number  from 1 to 10 & get rewarded");

     if(userNumber == secratNumer)
     {document.write("<h1>Bingo! Correct answer </h1> <h2>Hamdard ki motor bike apki hoi</h2></p>");}
     else if(userNumber == secratNumer +1 || userNumber == secratNumer -1)
     {document.write("<h1>Close enough to the correct answer</h1>");}
     else { document.write("<h1>Ohoo!!</h1> \n <h2>Better luck next time</h2>");}

     
//Q8

var divNumber = 3;
     userNumber = +prompt("Check your number is divisible by 3 or not!!")
     modulus = userNumber % divNumber;
     if(modulus === 0)
     {document.write("<h1>Division is posible</h1>");}
     else{ document.write("<h1> Division not posible </h1>");}


//Q9
var userNumber = +prompt("Check your number is even or odd!!");

     if (userNumber % 2 === 0)
     {document.write("<h1>Your given number" + " " + userNumber + " " + "is even </h1>");}
     else {document.write("<h1> Your given number" + " " + userNumber + " " + "is odd</h1>");}

     
//Q10
var userInput = +prompt("Enter your current city temperature");
       
     if (userInput >= 40)
     {document.write("<h1>It is too hot outside.</h1>");}
     else if(userInput >= 30)
     {document.write("<h1>The Weather today is Normal.</h1>");}
     else if(userInput >= 20)
     {document.write("<h1>Today’s Weather is cool.</h1>");}
     else if (userInput >= 10)
     {document.write("<h1>OMG! Today’s weather is so Cool.</h1>");}
     else{document.write("<h1>It's freezing outside.</h1>");}


//Q11
var firstNumber = +prompt("Enter first value");
      operation = prompt("Enter operation symbol example : +  - /  *  %");
      secondNumber = +prompt("Enter Second value");  

     if(operation === "/" )
     {document.write("<h1>The calculation result is"+" "+firstNumber+" "+ "/" +" " +secondNumber +" " +"=" + " " +(firstNumber / secondNumber) + "</h1>");}
     else if (operation === "+" )
     {document.write("<h1>The calculation result is"+" "+firstNumber+" "+ "+" +" " +secondNumber +" " +"=" + " " +(firstNumber + secondNumber) + "</h1>");}
     else if (operation === "-" )
     {document.write("<h1>The calculation result is"+" "+firstNumber+" "+ "-" +" " +secondNumber +" " +"=" + " " + (firstNumber - secondNumber) + "</h1>");}
     else if (operation === "*" )
     {document.write("<h1>The calculation result is"+" "+firstNumber+" "+ "*" +" " +secondNumber +" " +"=" + " "+(firstNumber * secondNumber) + "</h1>");}
     else if (operation === "%" )
     {document.write("<h1>The calculation Persentage </br> 1st number"+" "+firstNumber+" "+ "from"+" "+"2nd number"+" "+secondNumber +"</br>" +"=" + " "+(firstNumber / secondNumber * 100) + "%" + "</h1>");}
     else{document.write("<h1>Kindly enter a valid operation</h1>");}

// <!---------- Chapter 9 to 11 ---------->

// <!---------- Chapter 12 to 13 ---------->

//Q1
//Sir you havn't thought us that method.


//Q2
var int_one = +prompt("Enter your 1st integer");
     int_two = +prompt("Enter your 2nd integer");

     if(int_one == int_two)
     {document.write("<h1>Both integers are equal</h1>");}
     else if (int_one > int_two)
     { document.write("<h1>The larger value is"+" "+ int_one +"</h1>");}
     else if (int_two > int_one)
     { document.write("<h1>The larger value is"+" "+ int_two+"</h1>");}
     else{"Error"}


//Q3
var userInput = +prompt("Enter a number");

     if(userInput >=1)
     {document.write("<h1>Number is positive</h1>");}
     else if (userInput === 0)
     {document.write("<h1>Number is Zero</h1>");}
     else{ document.write("<h1>Number is Neative</h1>");}


//Q4
var character = prompt("Write a alphbet \n to find it is vowel or not");

     if(character === "a")
     {document.write("<h1> True" +" " + character + " " + "is a vowel</h1>");}
     if(character === "e")
     {document.write("<h1> True" +" " + character + " " + "is a vowel</h1>");}
     if(character === "i")
     {document.write("<h1> True" +" " + character + " " + "is a vowel</h1>");}
     if(character === "o")
     {document.write("<h1> True" +" " + character + " " + "is a vowel</h1>");}
     if(character === "u")
     {document.write("<h1> True" +" " + character + " " + "is a vowel</h1>");}
     else{document.write("<h1> False" +" " + character + " " + "is not a vowel</h1>");}


//Q5
var correct_password = 54321;
     user_password = +prompt("Enter Your Pasword");
          
     if(user_password === correct_password)
     {alert("Your password is accepted");  document.write("<h1> Welcome to Saylani Smit</h1>");}
     else{alert("You have enter an in-valid password");}


//Q6
var greeting;
     var hour = 13;
    
     if(hour < 18)
     {alert(greeting = "Good day");}
     else { alert(greeting = "Good evening");}


//Q7
var time = +prompt("Enter Time (like = 19:00)");

     if (time === "13:00") 
     {alert("it's 1pm");}
     else if (time === "14:00") 
     {alert("it's 2pm");}
     else if (time === "15:00")
     {alert("it's 3pm");}
     else if (time === "16:00")
     {alert("it's 4pm");}
     else if (time === "17:00")
     {alert("it's 5pm");}
     else if (time === "18:00")
     {alert("it's 6pm");}
     else if (time === "19:00")
     {alert("it's 7pm");}
     else if (time === "20:00")
     {alert("it's 8pm");}
     else if (time === "21:00")
     {alert("it's 9pm");}
     else if (time === "22:00")
     {alert("it's 10pm");}
     else if (time === "23:00")
     {alert("it's 11pm");}
     else if (time === "24:00")
     {alert("it's 12pm");}
     else{alert("Enter a valid time")}

// <!---------- Chapter 12 to 13 ---------->     