// class Hamster {
//     constructor(owner, name, price){
    
//          this.owner = "";
//          this.name = name;
//          this.price = 15;
//          }
//          wheelRun(){
//             console.log("squeak squeak");
              
//         }
//         eatFood(){
//             console.log("nibble nibble");
//         }
//         getPrice(){
//             return this.price;
//         }
//     }
    
//     class Person {
//         constructor(name,age,height,weight,mood,hamsters,bankAccount){
//             this.name=name;
//             this.age=0;
//             this.height=0;
//             this.weight=0;
//             this.mood=0;
//             this.hamsters=[];
//             this.bankAccount=0;
//         }
    
//         getName(){
//             return this.name;
//         }
//         getAge(){
//             return this.age;
//         }
//         getWeight(){
//             return this.weight;
//         }
//         greet(){
//             console.log("Hi "+this.name);
//         }
//         eat(){
//             return this.weight ++, this.mood ++;
//         }
//         exercise(){
//             return this.weight--;
//         }
//         ageUp(){
//             return this.age++,this.height++,this.weight++,this.mood--,this.bankAccount+=10;
//         }
//         buyHamster(hamster){
//             return this.hamsters.push(hamster), this.mood+=10, this.bankAccount-=hamster.getPrice();
//         }
//     }
    
//     const tim = new Person("Timmy");
//     for(i=0;i<5;i++){
//         tim.ageUp();
//     }
//     for(i=0;i<5;i++){
//         tim.eat();
//     }
//     for(i=0;i<5;i++){
//         tim.exercise();
//     }
//     for(i=0;i<9;i++){
//         tim.ageUp();
//     }
//     //console.log(tim);

//     const ham = new Hamster();
//     ham.name="Gus";
//     ham.owner="Timmy";
//     tim.buyHamster(ham);
// console.log(ham);
// // console.log(tim);
// for(i=0;i<15;i++){
//     tim.ageUp();
// }

// for(i=0;i<2;i++){
//     tim.eat();
// }
// for(i=0;i<2;i++){
//     tim.exercise();
// }
// console.log(tim);

// class Dinner {
//     constructor(appetizer, entree, dessert){
//         this.appetizer=appetizer;
//         this.entree=entree;
//         this.dessert=dessert; 
//     }
// }

// class Chef {
//     constructor(app,ent,des){
//         this.app=app;
//         this.ent=ent;
//         this.des=des;
//         this.dinners = [];
//     }
//     cookFood() {
//         const newDish = new Dinner(this.app, this.ent, this.des);
//         this.dinners.push(newDish);
//     }
//     findFood(index){
//         return this.dinners[index];
//     }
// }

// const eat = new Chef('wings','pizza','ice cream');
// eat.cookFood();
// eat.cookFood();
// eat.cookFood();
// console.log(eat);

// let animal = "cow";

// if (animal === "cow"){
//     console.log("moooo");
// } else{
//     console.log("Hey! You're not a cow")
// }
// *****OR******
// animal = "duck";
// const areYouACow = animal === "cow" ? "moooo" : "Hey! You're not a cow";
// console.log(areYouACow);

// let age = 16;
// if (age >= 16){
//     console.log("Here are the keys!");
// }else {
//     console.log("Sorry, you're too young.");
// }
// *****OR******
// age = 14;

// const areYouOver16 = age >= 16 ? "Here are the keys!" : "Sorry, you're too young.";
// console.log(areYouOver16);

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

// 2.B.

// 1.
//  for(let i = 1; i <= 100; i++){
//          console.log(i);
//  }
// 2.
// for(let i = 1; i <= 100; i++){
//     i%2===0 ? console.log(i+"<-- is an even number") : console.log(i);
// }

//2.C.
// for(let i = 1; i <= 100; i++){
//     i%5===0 && i%3===0 ? console.log("I found a " + i + ". High five! Three is a crowd")
//     : i%3===0 ? console.log("I found a " + i + ". Three is a crowd")
//     : i%5===0 ? console.log("I found a " + i + ". High five!")
//     : console.log(i);
// }

// 2.D.

// 1-2. 
    // let bank_account=0;
    // for(let i = 1; i <=10; i++){
    //     bank_account +=i;
    // }
//     let bank_account=0;
//     for(let i = 1; i <=100; i++){
//         bank_account +=i*2;
//     }
// console.log(bank_account);

//B.

//1. let quotes = ["""] or let quotes = ["", "", ""] or let quotes = ["Always", " be ", "closing"]

//C.

// 1. array[0];
// const randomThings=[1,10,"Hello", true];
// console.log(randomThings[0]);
//2.
// console.log(randomThings[2]="World");
//3.
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
// mutating is changing the array itself instead of returning a new array with the new changes
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
//   console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
//   kristynsCloset.splice(5,0,"raybans");
//   kristynsCloset.splice(5,1,"stained knit hat");
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

function printLongestWord(word){
 let answer = 0;
 let highestSoFar = 0;
 myArr=[];

for(let x of word){
    myArr.push(x.length);
}

for(let y of myArr){
    if (y>highestSoFar){
        highestSoFar=y;
    }
}
answer=myArr.indexOf(highestSoFar);
return word[answer];
}

console.log(printLongestWord(["BoJack", "Princess","PeanutbutterandJell1", "Diane", "a", "PeanutbutterandJelly", "Max", "Peanutbutter", "big", "Todd"]));

