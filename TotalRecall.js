/* 
A
1. With the assignment operator
2. By having a method/function use the variable, or just reassigning a new value to it, assuming it's a 'let' or 'var'. 
3. With the assignment operator
4. Declare is choosing the type of variable and giving it a name. Assigning is giving that variable a value. Define is declare+assign. 
5. Pseudocoding is an informal way of laying out a general plan on what the code needs to do. 
6. More time should be spent thinking on the solution versus the actual typing. 
*/

// B
// 6. let firstVariable = 2;
// let firstVariable = "Hello World";
// firstVariable = 2;
// secondVariable = firstVariable;
// secondVariable = "taco";
// console.log(firstVariable);
// let yourName="Mike";
// console.log("Hello, my name is " + yourName);

// C
//const a = 4;
//const b = 53;
//const c = 57;
//const d = 16;
//const e = 'Kevin';

// console.log(a+49===b);
// console.log(c-d===41);
// console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false && false && false && false && false || true);
// console.log(false === false)
// console.log(e === 'Kevin');
// console.log(a+b===c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a*a===d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 !== '48');

// D

// let animal = "duck";
// if (animal === "cow"){
//     console.log("moooo");
// } else{
//     console.log("Hey! You're not a cow")
// }

// const areYouACow = animal === "cow" ? "moooo" : "Hey! You're not a cow!";
// console.log(areYouACow);

// // E

// let age = 16;
// if (age >= 16){
//     console.log("Here are the keys!");
// }else {
//     console.log("Sorry, you're too young.");
// }

// // E.A.

// 1.
// for(let i = 0; i <= 10; i++){
//     console.log(i);
// }

// 2.
// for(let i = 10; i <= 400; i++){
//          console.log(i);
// }

// 3.
// for(let i = 12; i <= 4000; i+=3){
//         console.log(i);
//     }

// E.B.

// 1.
//  for(let i = 1; i <= 100; i++){
//          console.log(i);
//  }

// 2.
// for(let i = 1; i <= 100; i++){
//     if(i%2===0){
//         console.log(i+"<-- is an even number")
//     } else {
//         console.log(i);
//     }
// }

// for(let i = 1; i <= 100; i++){
//     i%2===0 ? console.log(i+"<-- is an even number") : console.log(i);
// }

// E.C.

// 1-3. 
//  for(let i = 1; i <= 100; i++){
//      if(i%5===0 && i%3===0){
//          console.log("I found a " + i + ". High five! Three is a crowd");
//      } else if (i%3===0){
//          console.log("I found a " + i + ". Three is a crowd");
//      } else if(i%5===0){
//         console.log("I found a " + i + ". High five!");
//      } else{
//         console.log(i);
//      }
// }

// for(let i = 1; i <= 100; i++){
//     return i%5===0 && i%3===0 ? console.log("I found a " + i + ". High five! Three is a crowd")
//     : i%3===0 ? console.log("I found a " + i + ". Three is a crowd")
//     : i%5===0 ? console.log("I found a " + i + ". High five!")
//     : console.log(i);
// }

// E.D.

// 1-2. 
//     let bank_account=0;
//     for(let i = 1; i <=100; i++){
//         bank_account +=i*2;
//     }
// console.log(bank_account);

// Arrays & Control flow
//A.

//1. index/indices is the place within the array, element is the property-the data
//2. once in the array, yes.
//3. seating in an auditorium

//B.

//1. let quotes = ["""] or let quotes = ["", "", ""] or let quotes = ["Always", " be ", "closing"]

//C.

//1-3.
// const randomThings=[1,10,"Hello", true];
// console.log(randomThings[0]);
// console.log(randomThings[2]="World");
// console.log(randomThings);

//D.

//1-3.
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// console.log(ourClass[2]);
// ourClass[4] = "Octocat";
// ourClass.push("Cloud City");
// console.log(ourClass);

//E.

//1-5.
// const myArray=[5, 10, 500, 20];
// myArray.push("Aegon");
// myArray.push("Arsenal");
// myArray.shift();
// myArray.unshift("Bob Marley");
// myArray.pop();
// myArray.reverse(); flipped the order of the indices and their values of the array
// console.log(myArray);

//F.

//1-2.
// let x = 105;
// if(x<100){
//     console.log("little number");
// } else if(x>=100){
//     console.log("big number");
// }

//G.

//1-3.
// let x = 6;
// if(x<5){
//    console.log("little number");
//  } else if(x>10){
//      console.log("big number");
//  } else{
//     console.log("monkey");
//  }

//H.

//1-8.
// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "Per Scholas hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
  
//   // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];
//   console.log("Kristyn is rocking that " + kristynsCloset[3] + " today!");
//   kristynsCloset.splice(6,0,"raybans");
//   kristynsCloset.splice(5,1,"stained yellow hat");
//   console.log(kristynsCloset);
// console.log(thomsCloset[0][0]);
// console.log(thomsCloset[1][2]);
// console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + ", and "
// + thomsCloset[2][1] + "!");
// thomsCloset.splice(1,1, ["grey jeans","jeans","Footie Pajamas"]);
// console.log(thomsCloset);

//IV. Functions
//B.

// function printCool(name){
//     return name `${name} is cool`
// }
// console.log(printCool("mario"));

//C.

// function calculateCube(n){
//     return n*n*n;
// }
// console.log(calculateCube(5));

//D.

// function isVowel(x){
//     if (x.toLowerCase() === "a" || x.toLowerCase() === "e" || x.toLowerCase() === "i" || x.toLowerCase() === "o" || x.toLowerCase() === "u"){
//         return true;
//     } else{
//         return false;
//     }
// }
// console.log(isVowel("O"));

//E.

// function getTwoLengths(a,b){
//     let arr=[];
//     let y = a.length;
//     arr.push(y);
//     let x = b.length;
//     arr.push(x);   
//     return arr;
// }

// let getTwoLengths = (a,b) => [a.length, b.length];

// console.log(getTwoLengths("the", "plane"));

//F.

// function getMultipleLengths(x){
//     let arr=[];
//     for (const q of x){
//         arr.push(q.length);
//     }
//     return arr;
// }
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

//G.

// function maxOfThree(a,b,c){
//  if (a>=b && a>=c){
//     return a;
//  } else if(b>=a && b>=c){
//     return b;
//  } else if (c>=a && c>=b){
//     return c;
//  } else if (a===b && b==c && a===c){
//     return a;
//  } 
// }
// console.log(maxOfThree(9,10,11));

//H.

// function printLongestWord(word){
//  let answer = 0;
//  let highestSoFar = 0;
//  myArr=[];

// for(let x of word){
//     myArr.push(x.length);
// }

// for(let y of myArr){
//     if (y>highestSoFar){
//         highestSoFar=y;
//     }
// }
// answer=myArr.indexOf(highestSoFar);
// return word[answer];
// }

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "PeanutbutterandJelly", "Max", "Peanutbutter", "big", "Todd"]));

// Objects

// A-G.
// let user = {
//   name: "Joe", email: "email@email.com", age: 20, purchased: []};
// user.email = "email2@email.com";
// user.age++;
// user.location = "Arizona";
// user.purchased.push("carbohydrates");
// user.purchased.push("peace of mind");
// user.purchased.push("merino jodhpurs");
// user.friend = {
//   name: "Grace Hopper",
//   age: 85,
//   location: "Tahiti",
//   purchased: []
// }
//console.log(user.purchased[2]);
// console.log(user.friend.name);
// console.log(user.friend.location);
// user.friend.age=55;
// user.friend.purchased.push("The One Ring");
// user.friend.purchased.push("A latte");
//console.log(user.friend.purchased[1]);
// for (let x of user.purchased){
//   console.log(x);
// }
// for (let x of user.friend.purchased){
//   console.log(x);
// }
// function updateUser(){
//   let newName=user.name.toUpperCase();
//   user.name=newName;
//   user.age++;
//   let newName2=user.friend.name.toUpperCase();
//   user.friend.name=newName2;
//   user.friend.age++;
// }
// updateUser();
// console.log(user);

// function oldAndLoud (person) {
//   let newName=person.name.toUpperCase();
//   person.name=newName;
//   person.age++;
//   let newName2=person.friend.name.toUpperCase();
//   person.friend.name=newName2;
//   user.friend.age++;
// }
// console.log(user);
// oldAndLoud(user);
// console.log(user);

// Extra

// let cat1 = {
//   name: "Thundercat",
//   breed: "orange",
//   age: 5
// }
// // console.log(cat1.age, cat1.breed);

// let cat2 = {
//   name: "Meow",
//   breed: "gray",
//   age: 6
// }
// let babyCat= {
//   name:"",
//   breed: "",
//   age: 0
// }

// function combineCats(mama,papa){
// let catName = mama.name+papa.name;
// let newAge = 1;
// let newBreed=mama.breed+"-"+papa.breed;
// babyCat.name=catName;
// babyCat.breed=newBreed;
// babyCat.age=newAge;
// return babyCat;
// }
// // console.log(cat1);
// // console.log(cat2);
// //console.log(combineCats(cat1,cat2));
// // console.log(babyCat);

// console.log(combineCats(combineCats((combineCats(cat1, cat2), combineCats(cat1, cat2)), (combineCats(cat1, cat2), combineCats(cat1, cat2))), combineCats((combineCats(cat1, cat2), combineCats(cat1, cat2)), (combineCats(cat1, cat2), combineCats(cat1, cat2)))));
