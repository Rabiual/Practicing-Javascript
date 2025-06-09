
/*age = 27;
console.log(age);

price = 99.50;
console.log(price);

fullName = "Rabiul Islam"
console.log(fullName);*/


// Arithmatic Operator Practicing
// let a = 5;
// let b = 2;

// console.log("a = ", a, " & b  =  ", b );
// console.log("a + b =" , a + b);
// console.log("a - b =" , a - b);
// console.log("a * b =" , a * b);
// console.log("a / b =" , a / b);
// console.log("a % b =" , a % b); // reminder 1 MOdulas
// console.log("a ** b =" , a ** b); //5^2 = 25 Exponentiation

// Unary operator 
// Incriment operator ++ = a++ = a+1
// Decrement operator -- = a-- = a-1
 
// post increment a++; after value change in 2nd line value changed
// pre increment ++a; before value change in 1st line changed

// post deccrement a--;  after value change in 2nd line value changed
// pre deccrement --a; before value change in 1st line changed

// a = a + 1;
// b = b - 1; 
// a++;
// a-- 

// b-- 
// b++
// console.log(a);
// console.log(b);

// console.log(a+1);
// console.log(a ++);
// console.log(b-1);
// console.log(b --);


// Assignment operators
// let a = 5;
// let b = 2;

// a += 4 ; // a = a + 4;
// console.log("a = ", a); //9

// a -= 4 ; // a = a - 4;
// console.log("a = ", a); //1

// a *= 4 ; // a = a * 4;
// console.log("a = ", a); //20

//  a /= 4 ; // a = a / 4;
//  console.log("a = ", a); //1

//  a /= 4 ; // a = a / 4;
//  console.log("a = ", a); //1


//  a **= 4 ; // a = a ** 4;
//  console.log("a = ", a); //625

// Comperison operator 

// Two equal operator only value check 
// let a = 5;
// let b = 5;

// console.log(" a == b", a == b ); //true

// two equal operator can only value check not data type check 
// let a = 5;
// let b = "5";

// console.log(" a == b", a == b ); //true



// Three equal operator value and data type check
// let a = 5;
// let b = "3";

// console.log(" a === b", a === b ); //false

// Not equal  operator

// let a = 5;
// let b = 2;

// console.log(" a != b", a != b ); //true

// let a = 5;
// let b = 5;

// console.log(" a != b", a != b ); //false

// Not double equal that  working like thriple equal to. value and data type check 

// let a = 5;
// let b = "5";

// console.log(" a !== b", a !== b ); //true

    //  Greater then or greater then equal to 

// let a = 5;
// let b = 3;

// console.log(" a > b", a > b ); //true
// console.log(" 5 > 3", a > b ); //true
// console.log(" 5 >= 3", a >= b ); //true

// console.log(" a < b", a < b ); //false
// console.log(" 5 <= 3", a <= b ); //false

// Logical operator

    // double and && symbol with logical operator. make sure two side value need to true then and will return ture
// let a = 6;
// let b = 5;

// let cond1 =  a > b; //true
// let cond1 = a < b; //false 
// let cond2 = a === 6; //true
// let cond2 = a === 5; //false
// console.log("cond1 && cond2", cond1 && cond2);
// console.log("cond1 && cond2", a > b && a === 6);

// Logical or || if one condition are true then return true. If two condition are false or || operator return false. 

// let a = 6;
// let b = 5;


// console.log("cond1 && cond2", a > b && a === 6);

// Logical not operator need one expression. logical not operator was working in just one conditon.
// Logical not operator can make true result false or false result true.
// Logical not ! operator always print oposite value 

// let a = 5;
// let b = 6;

// console.log("!(6<5)", !(b < a )); //true it's one expression
// console.log("!(6>5)", !(b > a )); //false
// console.log( !(b === 6 )); //false

// Conditional Statement 
    // if statement 

    // let age = 18;
    // let age = 16;

    // if(age >= 18){
    //     console.log("Yes you can vote");
    // }


    // if(age < 18){
    //     console.log("Sorry you can not vote");
    // }

//  Ex-02 

// let mode = "dark";
// let mode = "light";
// let color;

// if(mode === "dark"){
//     color = "white";
// }
// if(mode === "light"){
//     color = "black";
// }
// console.log(color);

// if else conditional statement 
// if condition true then run if part. if condition false then run else part 

// let mode = "dark";
// let mode = "dark";
// let color;

// if(mode === "dark"){
//     color = "white1";
// }else{
//     color = "black2"
// }

// console.log(color);

// Ex-02 
// let age = 18;
// if(age >= 18){
//     console.log("Yes you can do the vote");
// }else{
//     console.log("sorry you can't ");
// }

// Even and Odd number example 
// let num = 15 ;

// if(num%2 === 0){
//     console.log(num," Is even");
// }else{
//     console.log(num, "Is Odd");
// }

// else if statement 

// let mode = "green"
// let color;

// if(mode === "dark"){
// color = "white"
// }else if(mode === "white") {
// color = "red"
// }else if(mode === "green"){
// color = "yellow"
// }else{
//     color = "orange"
// }
// console.log(color);


// Ternary Operators 


// let age = 28;

// result = age >= 18 ? "Adult" : "Not Adult"
// console.log(result);
// age >= 18 ? console.log("Adult") : console.log("Not Adult");

// Switch statement 
// const expr = "Papayas";
// switch (expr) {
//   case "Oranges":
//     console.log("Oranges are $0.59 a pound.");
//     break;
//   case "Mangoes":
//   case "Papayas":
//     console.log("Mangoes and papayas are $2.79 a pound.");
 // Expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }

// Prompt method are using to collect user input value

// let numbeR = prompt(" Enter a number");
// if(numbeR % 5 == 0){
//     console.log(numbeR, "Is multiple of 5");
// }else{
//     console.log(numbeR, "sorry is not a multiple of 5");
// }

// Check your result example with if else statement 
// let score = prompt("Please enter your number");
// if(score >= 90 &&  score <= 100 ){
//     console.log(score, "Wow Amazing. You achievd golden A+");
// }else if (score >= 80 && score <= 89) {
// console.log(score, " Good. You achieved A+");
// }else if(score >= 70 && score <= 79 ){
//     console.log(score, "You achievd A grade");
// }else if(score >= 60 && score <= 69){
//     console.log(score, "you achieved grade B");
// }else if(score >= 50 && score <= 59){
//     console.log(score, "You acive C grade");
// }else if (score >= 40 && score <= 49){
//     console.log(score, "You received D grade");
// }else if (score >= 30 && score <= 39){
//     console.log(score, "sorry you are fail this exam");
// }else{
//     console.log("Please enter a valid number");
// }


// Lectture 03 Loops statement

// for loops statement if condition has true loop will run or if condition has false the loop not wil be run. Loops working like repedly print somthing if condition was true. Loop have three statement. 1st statement Intialization. How much time that loop will be run 2nd statement  stopping conditon  and 3rd statement has ubdation.
// Ex-01 
// print 1 to 5 
// for(let i = 1; i <= 5; i++){
// console.log("Rabiul Islam");
// }
// console.log("Loop has ended");

// Ex- 02 
// for(let i = 1; i <= 5; i++){
// console.log("i = ", i);
// }
// console.log("Loop has ended");

// EX-03 
// let sum  = 0 ;
// for(i = 1; i <= 5; i++){
//     sum = sum + i;
// }
// console.log("sum = ", sum);

// Ex-04 
// let sum  = 0 ;
// let n = 10
// for(i = 1; i <= n; i++){
//     sum = sum + i;
// }
// console.log("sum = ", sum);

// while loop : 1st step হচ্ছে Initialize করা। 2nd step হচ্ছে parenthesis এর ভিতরে stoping condition হবে এবং third step হচ্ছে increment/ decrement 

// // while loop  example:
// let i = 1;
// while (i <= 10){
//     console.log("i = ", i);
//     i ++;
// }

// console.log("Loop has ended");


// let n = 0;

// while (n < 3) {
//   n++;
// }

// console.log(n);

// for of loop example 

// let str = "Rabiul Islam";
// let length = 0;
// for(let i of str){
//     console.log("i =", i);
//     length++;
// }
// console.log("String length = ", length);

// for in loop use only objects or arrys 
// for in loop example 

// let student = {
//     namE : "Rabiul Islam",
//     age : 27,
//     year: 2025,
//     cgpa : 7.5,
//     ispass : true
// };

// for(let key in student){
// console.log(" key  = ", key, "key value = ", student[key]  );

// }

// find even or odd number

// Odd number example 
// for(let num = 0; num <=100; num++){
//     if(num%2 !== 0){
//         console.log("Even num = ", num);
//     };
    
// }
// even number example 
// for(let num = 0; num <=100; num++){
//     if(num%2 === 0){
//         console.log("Even num = ", num);
//     };
    
// }

//Create a game where you start any random game number. Ask the user to keep guessing the game number until the user entires correct value. 
// let gameNumber = 25;

// let userInput = prompt("please enter your number");

// while(userInput != gameNumber){
// userInput = prompt("You enter wrong number. Guess again")
// }
// console.log("Congratualtion, you are enter rigt number");

// let gameNumber = 25;

// let userInput = prompt("please enter your number");
// console.log(userInput);

// String 
// let str = "Rabiul Islam";
// console.log(str[0]);
// console.log(str.length);

// Question: prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the full name length.?

// let userName = prompt("Enter your full name without space");

// userName = "@" + userName + userName.length;
// console.log(userName);


// Arrays Practice : multiple same value 


// For a given array with prices of 5 items. All items have an offer of 10% off on them. change the array to store  final price oafter appliying offer. 


// let items = [250, 645, 300, 900, 50];
// for (let i = 0; i <items.length; i++){
//     let offer = items[i] / 10;
//     items[i] -= offer
// }
// console.log(items);


// for(let i = 0; i <items.length; i++){
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }

// console.log(items);

// let items = [250, 645, 300, 900, 50];
// let i = 0;
// for(let val of items){
//     console.log( `Value of i ${i} =  ${val} `);
// let offer = val / 10;
// items[i] = items[i] - offer;
// console.log(`value afer offer = ${items[i]}`);
//     i++
// }

// let numbers = [85, 97, 44, 37, 76, 60];
// let sum = 0;

// for(let n of numbers){
//     sum += n;

// }
// let avg = sum / numbers.length

// console.log(`Average marks of the class ${avg} `);



// let Heros = ["Flash", "Iron man", "Spider man", " Hulk", "Ant man", "Wolverine"];

// Heros[3] = "Super man";

// for of loop 
// let cities = ["Dhaka", "Narayunganj", "chittagangroad", "sonargaon", "Kanchpur", "Modonpur "]
// for(let cti of cities){
//     console.log(cti.toUpperCase());
// }


// for(let itm of Heros){
//     console.log(itm);
// }

// for loop 
// for(let i = 0; i<Heros.length; i++ ){
// console.log(Heros[i]);
// }

// for(let indx = 0; indx<Heros.length; indx++ ){
// console.log(Heros[indx]);
// }

// let items = [250, 645, 300, 900, 50];
// let i = 0;
// for(let val of items){
// console.log(`value of index ${i} = ${val}`);
//     i++;
// }

// let Heros = ["Flash", "Iron man", "Spider man", " Hulk", "Ant man", "Wolverine"];
// console.log(Heros);
// console.log(Heros.length);

// Push method on arrays 
// let fruits  = [ "Apple", "Orange","Banana", "Guava", "pienaple"];
// console.log(fruits);
// fruits.push("Wetemelon");
// console.log(fruits);

// Pop method on arrays 
// let fruits  = [ "Apple", "Orange","Banana", "Guava", "pienaple"];
// console.log(fruits);
// fruits.pop("pienaple");
// console.log(fruits);
// console.log("Deleted item was pienaple");

// to string method in array 
// let fruits  = [ "Apple", "Orange","Banana", "Guava", "pienaple"];
// console.log(fruits);
// let mkestrings = fruits.toString();
// console.log(mkestrings);
// console.log(fruits.toString());

// concat method in arrays 
// let class1 = ["Rabi", "Rohima", "Kalek", "Jakir", "Najir"];
// let class2 = ["kader", "Rasel", "Abbas", "Kabir", "Rakib"];
// console.log(class1);
// console.log(class2);
// let class3 = class1.concat(class2);
// console.log(class3);

// unshift method in array 
// let class1 = ["Rabi", "Rohima", "Kalek", "Jakir", "Najir"];
// let newItem = class1.unshift("Mofijul");
// console.log(newItem);

// slice method on arrays 
// let spHeros = ["Spider man", "Batman", "Superman", "Wolverine", "Ant man"];
// let sliceM = spHeros.slice(1, 2);
// console.log(sliceM);

// splice 3 in 1way method on arrays 
// add and replace 
// let Numbers = [1, 2, 3, 4, 5, 6, 7];
//  Numbers.splice(2, 1, 101, 202);
// console.log(Numbers);

// add element example 
// let Numbers = [1, 2, 3, 4, 5, 6, 7];
// Numbers.splice(2, 0, 401, 502);
// console.log(Numbers);

// delete element example 
// let Numbers = [1, 2, 3, 4, 5, 6, 7];
// Numbers.splice(2, 1 );
// console.log(Numbers);

// start and ending with 1 value with array 
// let Numbers = [1, 2, 3, 4, 5, 6, 7];
// Numbers.splice(3);//delete in 1 2 3 value
// console.log(Numbers);

// Practice question 
// Create an array to store companies-> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
// a. Remove the first company from the array 
// b. Remove Uber & Add Ola in its place 
// c. Add Amazon at the end 

// let companies = ["Blomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix" ];

// a: answer 
// companies.shift();
// console.log(companies);

// b:answer 
// companies.splice(2, 1, "Ola" );
// console.log(companies);

// c:answer 
// companies.push("Amazon");
// console.log(companies);

// Function 

//  Create a function using the "function" keywor that takes a String as an argument & returns the number of vowels in the string 

// function countVowel (str){
//     let count = 0;
// for(const char of str){
//     if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
// count++;
//     }
// }
// console.log(count);
// }
// countVowel("Rabiulislam");

// create an arrow function performs to same task 

// const countvowels = (str)=>{
//     let count = 0;
//     for(const char of str){
//         if(
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u"
//         ){
//             count++
//         }
//     }
//     return count;
// }
// this time call this function on console page 

// const mulitiple = (x, y)=>{
//  console.log(x*y);
// }
// mulitiple(10,3)

// forEach function and paramiter

// function pass in forEach method 

// let numbers = [2, 4, 6, 8];
// let numbers = [67, 52, 39, 76, 43, 22,];
// let multFunction = (value)=>{
//     console.log(value * value);
// }
// numbers.forEach(multFunction);



// let arr = [  2, 3, 4, 5, 5, 6, 7];
// arr.forEach((num) => {
// console.log(num * num); 
// });
// same Work 2 way 
// let arr = [  2, 3, 4, 5, 5, 6, 7];
// arr.forEach((num) => {
// console.log(num ** 2); 
// });


// Value, index number and arrays 
// let str = ["sonapur", "kanchpur", "sonargaon", "narayungonj"];
// str.forEach((val, idx)=>{
// console.log(val.toUpperCase(), idx, str);
// }) 

// let str = ["sonapur", "kanchpur", "sonargaon", "narayungonj"];
// str.forEach((val, idx)=>{
// console.log(val.toUpperCase());
// }) 


// let numBers = [1, 2, 3, 4, 5];
// numBers.forEach( function printValue(val){
// console.log(val);
// })

// map method 
// let numbers = [ 2, 4, 6, 7];
// let newarr =  numbers.map( (value)=>{
// return value * 2;    
// })
// console.log(newarr);

// let numbers = [ 2, 4, 6, 7];
// let newarr =  numbers.map( (value)=>{
// return value * value;    
// })
// console.log(newarr);

// let numbers = [ 2, 4, 6, 7];
// let newarr =  numbers.map( (value)=>{
// return value;    
// })
// console.log(newarr);


// let numbers = [ 2, 4, 6, 7];
// numbers.map( (value)=>{
//     console.log(value);
// })

// Filter method 
// find the number bigger 3 
// let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArr =  numbers.filter((val)=>{
//     return val > 3;
// })
// console.log(newArr);

// find the even number on filter method with array items 
// let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenArr =  numbers.filter((val)=>{
//     return val % 2 === 0;
// })
// console.log(evenArr);

// find the odd number on filter method with array items 
// let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenArr = numbers.filter((val)=>{
//     return val % 2 !== 0;
// })
// console.log(evenArr);

// reduce method 
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, ];

// const sumfnc = numbers.reduce((prm1, prm2)=>{
//     return prm1 + prm2;
// })
// console.log(sumfnc);

// let array = [ 1, 2, 3, 4];
// const sum = array.reduce((rest, curr)=>{
// return rest + curr;
// })
// console.log(sum);

// find the largest number on reduce methods 
// let  arr = [ 1, 5, 7, 3, 105,  2, 4];
// const output = arr.reduce((prev, curr)=>{
// return prev > curr ? prev : curr;
// });
// console.log(output);

// find the smallest number on reduce methods 
// let  arr = [ 1, 5, 7, 3, 105,  2, 4];
// const output = arr.reduce((prev, curr)=>{
// return prev < curr ? prev : curr;
// });
// console.log(output);

// use the reduce methods to calculate sum of all number in array. 
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = arr.reduce((prev, curr)=>{
// return prev + curr;
// })
// console.log(result);

// Practice: Question:  we are given array of marks of students. Filter our of the marks of students that scored 90+.

// let result = [ 80, 75, 92, 65, 99, 32, 89, 98];
// const lgvalue =  result.filter((val)=>{
// return val > 90  
// })

// console.log(lgvalue);


// Qs. Taka a number n as input from user. Create an an array of numbers from that 1 to n. 
// let n = prompt("Enter your numbr");
// let arr = [];
// for(let i = 1; i<=n; i++){
//     arr[i-1] = i ;
// }
// console.log(arr);
// use the reduce methods to calculate sum of all number in array. 
// const result = arr.reduce((prev, curr)=>{
// return prev + curr;
// })
// console.log ("sum = ", result);

// use the reduce method to calculate product of all numbers in the array
// const factorial = arr.reduce((prev, curr)=>{
// return prev * curr;
// })
// console.log("Factorial = ", factorial );

// find the tag and add some value at the end
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + " Javascript"

// let divs = document.querySelectorAll(".box");
// divs[0].innerText = " Box one";
// divs[1].innerText = " Box two";
// divs[2].innerText = " Box three";

// getAttriibute method and find the attribute value then print the value
// let div = document.querySelector("div");
// console.log(div);

// let cls = div.getAttribute("class");
// console.log(cls);

// let id = div.getAttribute("id");
// console.log(id);

// setAttribute method find the current attribute and change the  attribute name 
// let div = document.querySelector("div");
// console.log(div); 

// console.log(div.setAttribute("class", "newclass"));
// let cls = div.setAttribute("class", "firstdiv");
// console.log(cls);

// node dot style 
// let div = document.querySelector("#div1");
// let style = div.style.background = "black";
// console.log(style);

// Append 
// let heading = document.createElement("h1");
// console.log(heading);
//  heading.innerText = "Hello world1";
// let div = document.querySelector("#div1");
//  div.append(heading)

// appendChild method example 
// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me";
// console.log(newBtn);

// let div = document.querySelector("#div1");
// div.appendChild(newBtn);

// prepand method example 
// let heading = document.createElement("h2");
// console.log(heading);
// heading.innerText = "Alone life is best life";

// div.prepend(heading);

// before method example 
// let p = document.createElement("p");
// p.innerText = "before method example para text here";
// let div1 = document.querySelector(".box");
// div1.before(p);

// after method exampl 
// let h2 = document.createElement("h2");
// let para = document.createElement("p");
// para.innerText = "Lorem ipsum paragraph text"
// h2.innerText = "I love javascript";
// let findDiv = document.querySelector(".box");
// findDiv.after(h2);
// findDiv.after(para)

// innerHTML with prepand method 
// let h2 = document.createElement("h2");
// h2.innerHTML = "<i> This is heding two text </i>";
// document.querySelector("body").prepend(h2);

// remove method 
// let p = document.querySelector(".last-para");
// p.remove()

// appendChild method 
// let h2 = document.querySelector("h2");
// let newText =  h2.innerText = " Hi rabi how are you";
// h2.appendChild(newText);

// insertBefore method 
// let  h2 =  document.createElement("h2");
// let h2Text = document.createTextNode("Rabiul Islam"); 
//  h2.appendChild(h2Text);
// let div = document.querySelector("#test-div");
// div.insertBefore(h2, div.childNodes[0]);


// replaceChild method 
// let liTag = document.createElement("li");

//  let liText = document.createTextNode("Wow Mango. It's my favourite fruit") 
//  liTag.appendChild(liText);
// let div = document.querySelector("#list-frt");

// let oldElement = div.children[1];
// div.replaceChild(liTag, oldElement);

// remove child method 

// const parent = document.getElementById("parent");
// const child = document.getElementById("child");
// const throwawayNode = parent.removeChild(child);

// let parent = document.getElementById("parent");
// let child = document.getElementById("child");
// let removElement = parent.removeChild(child);

// Practice Question 
// Create a new button element. Give it a text "click me". background color of red & text color of white.
 
// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me";
// newBtn.style.backgroundColor = "red";
// newBtn.style.color = "white";
// console.log(newBtn);

// Insert the button as the first element inside the body tag.
// let body = document.querySelector("body");
// body.before(newBtn);


// Create a <p></p> tag in html, give it aclass & some styling.

// Now create a new class in CSS and try to append this class to the <p></p> element.
// did you notice, how you overwrite the class name when you add a new class solve this problem using classList.
// let pTag = document.querySelector("p");
// pTag.classList.add("newpara");

// Dom event practice 
// Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again. 


// Practicing dark mode and light mode 

// practice 09 
let button = document.querySelector("button");
let body = document.querySelector("body");
let currMode = "light";

button.addEventListener("click",()=>{
    if(currMode === "light"){
        currMode = "dark"
        body.classList.add("dark");
        body.classList.remove("light")
    }else{
         currMode = "light";
         body.classList.add("light");
         body.classList.remove("dark");
    }
    console.log(currMode);
});


// practice 10
// let button = document.querySelector("button");
// let body = document.querySelector("body");
// let currMode = "light";
// button.addEventListener("click", ()=>{
//     if(currMode === "light"){
//         currMode = "dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }else{
//         currMode = "light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(currMode);
// });



// let modeBtn = document.querySelector("#mode");
// let body = document.querySelector("body")
// let curMode = "light";
// modeBtn.addEventListener("click", ()=>{
// if(curMode === "light"){
//     curMode = "dark";
//     body.classList.add("dark");
//     body.classList.remove("light");
// }else{
//     curMode = "light"
//     body.classList.add("light");
//     body.classList.remove("dark")
// }
// console.log(curMode);
// })


// modeBtn.addEventListener("click", ()=>{
// if(curMode === "light"){
//     curMode = "dark";
//     document.querySelector("body").style.backgroundColor = "black";
// }else{
//     curMode = "light"
//     document.querySelector("body").style.backgroundColor = "white";
// }
// console.log(curMode);
// })



// DOM Event practice

// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", (evt)=>{
//     console.log("Button one was clicked -handler 1 ");

// })

// btn1.addEventListener("click", ()=>{
//     console.log("Button one was clicked. It's handler 2");
// })

// removing event listener 

// const btn3 = ()=>{
//     console.log("Button one was clicked. It's handler 3");
// }

// btn1.addEventListener("click", btn3)

// btn1.addEventListener("click", ()=>{
//     console.log("Button one was clicked. It's handler 4");
// })
// removing event listener 
// btn1.removeEventListener("click",  btn3);



// btn1.addEventListener("click", (evt)=>{
//     console.log("Button one was clicked");
//     console.log(evt);
//     console.log(evt.type);
// })


// btn1.onclick = (evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }


// let div = document.querySelector("div");
// div.onmouseover = (evt)=>{
//     console.log("you are inside this div");
//       console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }

// btn1.onclick = ()=>{
//     console.log('You click this button');
//     let a = 20;
//     a++;
//     console.log(a);
// }
// btn1.onclick = ()=>{
//     console.log("You click this button 2nd time");
// }

