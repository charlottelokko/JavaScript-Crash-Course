// console.log("Hello World"[10])
// console.log('12345'.length)

// let str = "Charlotte"
// console.log(str.length)
// console.log(str[str.length-1])

/** Forgot that this is
 * for
 * multiline comments
 */

//LET
/** 
let name = 'Charlotte'
let fullName = "Charlotte Lokko"
let isRaining = false
let temperature = 14
let planet = 'Earth'

temperature = temperature - 2

console.log(temperature) //returns 12
*/

//CONST
// const isRaining = false
// const temperature = 20
//temperature = temperature + 2  <<< this line breaks and causes an error

/**
 * Q: Convert celesius to fahrenheit
 *
 * F = C x 1.8 + 32
 */

// let celesius = 10;
// let fahrenheit = celesius * 1.8 + 32;
// console.log(fahrenheit);

//EQUALITY

// let bool = "1" == 1
// console.log(bool) // returns false

// let bool2 = "1" === 1
// console.log(bool2) //returns true

//Not equals

// let bool = "1" != 1
// console.log(bool) // returns false

// let bool2 = "1" !== 1
// console.log(bool2) //returns true

//CONDITIONALS

// let subscribed = false;
// let loggedIn = true

// if (subscribed === true) {
//     console.log("show vid")
// }
// else if (loggedIn === true){
//     console.log("Upgade subscription")
// }
// else {
//     console.log("Please log in")
// }

// let cash = 40
// let price = 50

// if (cash > price){
//     console.log(`you paid extra - here's your €${cash-price} change`)
// }
// else if (cash == price){
//     console.log("perfect, have a nice day")
// }
// else {
//     console.log(`sorry, you still owe €${price-cash}`)
// }

//Ternary

// let hot = true
// hot ? console.log("weather is hot hot") : ("whether is bitter cold")

// let subscribed = false
// let loggedIn = true

// let str = subscribed || loggedIn ? 'show video' : 'hide video'
// console.log(str)

//Q: print reciept if enough cash to buy and store open, don't otherwise
// let cash = 50
// let price = 40
// let isStoreOpen = true

// console.log(cash>=price && isStoreOpen ? 'print receipt' : "don't print receipt")

/**
 *  LOOPS
 */

// let count = 1;

// while (count <= 100) {
//     console.log(count)
//     count = count + 1;
// }

// for (let i = 0; i <= 100; i++) {
//     console.log(i);
// }

/** Write a for-loop that loops through 1-20
 * If the number is divisible by 3, print "Frontend"
 * If the number is divisble by 5, print "Simplified"
 * If the number is divisible by 3 and 5 print "Frontend Simplified"
 * If the number is not divisible by either 3 or 5 print the number
 *
 * eg
 * 1 > 1
 * 2 > 2
 * 3 > "Frontend" .....
 */

// for(let i = 1; i<=20; i++){
//     if(i % 3 == 0 && i%5 == 0) {
//         console.log("Frontend Simplified")
//     }
//     else if(i%3 == 0){
//         console.log("Frontend")
//     }
//     else if(i % 5 == 0){
//         console.log("Simplified")
//     }
//     else{
//         console.log(i)
//     }
// }

// const string = "Frontend Simplified"
// for(let i = 0; i < string.length; i++){
//     console.log(string[i])
// }

/**
 * FUNCTIONS
 */

//Function definition
function welcomePersonToFes(firstName, lastName) {
  //name = parameter
  //console.log("Welcome to FES, " + name)
  console.log(`Welcome to FES, ${firstName} ${lastName}`);
}

// Call the function
// welcomePersonToFes("Charlotte", "Lokko");
// welcomePersonToFes("Sean", "Doe");

// function fn(){
//     return "my return";
//     console.log("woop");
// }

// console.log(fn());

function sumOfTwoNumbers(num1, num2) {
  return num1 + num2;
}

//console.log(sumOfTwoNumbers(10, 10));

/**
 * Q: Create a function to convert celesius to fahrenheit
 *
 * F = C x 1.8 + 32
 *
 * example:
 * convertCelsiusToFahrenheit(0) -> 32
 */

// function convertCelsiusToFahrenheit(celesius){
//     return celesius * 1.8 + 32;
// }

const convertCelsiusToFahrenheit = (celesius) => {
  return celesius * 1.8 + 32;
};

// console.log(convertCelsiusToFahrenheit(0));

//let arr = [20, 30, 40, 50, 100];

//console.log(arr[0]); //first element
//console.log(arr[arr.length-1]); //last method

//add element to array
//arr.push(200);

// let newArr = arr.filter((element) => {
//   console.log(element);
//   if (element < 50) {
//     return true;
//   }
// });

// console.log(newArr);

//let newArr = arr.filter(element => element < 50);
// console.log(newArr);

/**
 * Q: Filter out all the 'FAIL' elements in an array
 *
 * example:
 * ['A+', 'A', 'FAIL'] +> ['A+','A']
 *
 */

// let grades = ['A+', 'A', 'FAIL'];
// let pass = grades.filter(e => e !== 'FAIL');
// console.log(pass);

//Loop over elements
// let grades = ['A+', 'A', 'FAIL'];
// for(let i=0;i<grades.length; i++){
//     console.log(grades[i]);
// }

/**
 * Q: Filter out all the 'FAIL' elements in an array without useing the Array.filter method
 *
 * example:
 * ['A+', 'A', 'FAIL'] +> ['A+','A']
 *
 */

//  let grades = ['A+', 'A', 'FAIL'];
//  let pass = [];
//  for(let i=0; i<grades.length;i++){
//     if(grades[i] !== 'FAIL'){
//         pass.push(grades[i]);
//     }
//  }
//  console.log(pass);

/** ARRAY.MAP */

// let arr = [1,4,9,16]

// let newArray = arr.map((e) => {
//   console.log(e);
//   return undefined;
// })

// let newArray = arr.map(e =>  undefined)

// console.log(newArray);

/**
 * Turn each element in an array of dollars into cents
 *
 * @examples
 * [1,5,10,3] => [100,500,100,300]
 * [0, 10, 20] => [0, 1000,2000]
 */

// let dollars = [1,5,10,3];

// let cents = dollars.map(e => e*100)

// console.log(cents);

// /**
//  * Turn each element in an array of dollars into cents
//  * without using array.map
//  *
//  * @examples
//  * [1,5,10,3] => [100,500,100,300]
//  * [0, 10, 20] => [0, 1000,2000]
//  */

// let newCents = []
// for(let i=0; i<dollars.length; i++){
//   newCents.push(dollars[i]*100);
// }
// console.log(newCents);

/**
 * OBJECTS
 */

// let userFirstName = "David";
// let userLastName = "Bragg";
// let userDiscordId = "David Brag#001";

// let userSubscriptionStatus = "VIP";
// let user = {
//   username: 'David',
//   email: 'david@frontendsimplified.com',
//   subscriptionStatus: 'VIP',
//   discordId: 'DavidBrag#001',
// 	lessonsCompleted: [0,1]
// }

// // console.log(user.username[0]);
// // console.log(user.subscriptionStatus);
// // console.log(user.lessonsCompleted.map((elem) => elem * 2));


// let users = [
//   {
//     username: "David",
//     email: "david@frontendsimplified.com",
//     password: 'test123',
//     subscriptionStatus: "VIP",
//     discordId: "DavidBrag#001",
//     lessonsCompleted: [0, 1],
//   },
//   {
//     username: "Mitri",
//     email: "mitri@frontendsimplified.com",
//     password: 'mitri123',
//     subscriptionStatus: "VIP",
//     discordId: "MitriMan#001",
//     lessonsCompleted: [0, 1, 2, 3],
//   },
//   {
//     username: "Sen",
//     email: "sen@frontendsimplified.com",
//     password: 'sen123',
//     subscriptionStatus: "VIP",
//     discordId: "MitriMan#001",
//     lessonsCompleted: [0, 1, 2, 3],
//   },
// ];

// // console.log(users[0].lessonsCompleted.map(elem=>elem*2))

// function login(email,password){
//   for(let i=0; i<users.length; i++){
//     console.log('ran')
//     if(users[i].email === email){
//       console.log(users[i]);
//       if(users[i].password === password){
//         console.log("Log user in, details are correct");
//       }
//       else{
//         console.log("Password is incorrect - try again")
//       }
//       return;
//     }
//   }
//   console.log('Could not find an email')
// }

// login('david@what.com', 'test123');

// /**
//  * Create a register function that accepts: 
//  * -username
//  * -email
//  * -password
//  * -subscriptionStatus
//  * -discordId
//  * -lessonsCompletes
//  * 
//  * Insdie your register function : 
//  * 1. Create a user object
//  * 2. Push this user object onto the 'users' array
//  */

// function register(newUser){
//    users.push(newUser);
//    console.log(users)
// }

// register({
//   username: 'Charlie', 
//   email: 'charlie@gmail.com', 
//   password: 'boop23', 
//   subscriptionStatus: 'VIP',
//   discordId: 'Charlie23',
//   lessonsCompleted: [0,1,2,3,4]
// });


/**
 * DOM
 */

//First way of accessing an element
document.querySelector('#title');

//Second way of accessing an element
document.getElementById('title');

//Change HTML
document.getElementById('title').innerHTML += "... Hiiii";

//Change CSS
document.getElementById('title').style.fontSize='36px';

function changeTitleToRed(){
  document.getElementById('title').style.color="red";
}

function toggleDarkTheme(){
  document.querySelector('body').classList.toggle("dark-theme");
}