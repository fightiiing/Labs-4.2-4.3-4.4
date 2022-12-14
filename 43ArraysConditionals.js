//Easy Going
// for (let i=1; i<=20; i++){
//     console.log(i);
// }

//Get Even
// for (let i=0; i<=200; i+=2){
//     console.log(i);
// }

//Fizz Buzz
// for (let i=0; i<=100; i++){
//     if(i%3===0 && i%5===0){
//         console.log("FizzBuzz")
//     } else if (i%3===0){
//         console.log("Fizz")
//     } else if (i%5===0){
//         console.log("Buzz")
//     } else
//     console.log(i);
// }

// Wild Wild Life
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// plantee[2]++;
// console.log(plantee);
// wolfy[3]="Gotham City";
// dart.push("Hawkins");
// console.log(dart);
// wolfy.splice(0,1, "Gameboy");
// console.log(wolfy);

//Yell at the Ninja Turtles
// let turtles = ["Michelangelo", "Donatello", "Raphael", "Leonardo"]
// let cap ="";
//     for(let x of turtles){
//     cap += x.toUpperCase() + " ";
//     }
//     console.log(cap);    

//Methods, Revisited

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// console.log(favMovies[8]);
// console.log(favMovies.sort());
// console.log(favMovies.pop());
// console.log(favMovies.push("Guardians of the Galaxy"));
// console.log(favMovies);
// favMovies.reverse();

// favMovies.shift("Godfather");

// favMovies.unshift("Game Night");

// favMovies.splice(15,1, "Avatar");

// const half = Math.ceil(favMovies.length /2);
// const secondHalf=favMovies.slice(half);
// console.log(secondHalf);
// console.log(favMovies);

//Where is Waldo

// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]];

// whereIsWaldo.splice(1,1);
// console.log(whereIsWaldo);
// whereIsWaldo[1].splice(2,1, "No One");
// console.log(whereIsWaldo);
//console.log(whereIsWaldo[3][1][1]);

//Excited Kitten

// let talking = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]

// for(i=1;i<=20;i++){
//     if(i%2===0){
//     let x = Math.floor(Math.random() * talking.length);
//     console.log(talking[x]);
// } else {
//     console.log(i);
// }
// }

//Find the Median

// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
// let sorted = nums.sort();
// let split = Math.floor(sorted.length / 2);
// console.log(nums[split]);

//Return of the Closets - Alien Attire - Dress Us Up - Dirty Laundry - Inventory
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

    //Allien Attire
  //let kristynsShoe= kristynsCloset.splice(0,1);
  //thomsCloset[2].splice(3,0, kristynsShoe.toString());
  //console.log(kristynsCloset);
  //console.log(thomsCloset);


  //Dress Us Up
//outfit 1
// let Koutfit1 = kristynsCloset.splice(0,5);

// let Toutfit1 = thomsCloset[0].splice(0,1);
// let Toutfit2= thomsCloset[1].splice(0,1);
// let Toutfit3= thomsCloset[2].splice(2,1);
// let  Tcompleted =[];

// Tcompleted.push(Toutfit1,Toutfit2, Toutfit3);
// console.log(Tcompleted);
// console.log(Koutfit1);

//outfit2
// Kcompleted = [];
// Kcompleted.push(Toutfit3,Koutfit1);
// console.log(Kcompleted);

// let Toutfit4 = thomsCloset[0].splice(1,1);
// let Toutfit5 = thomsCloset[1].splice(1,1);
// let Toutfit6 = thomsCloset[2].splice(0,1);
// let  Tcompleted2 =[];

// Tcompleted2.push(Toutfit4, Toutfit5, Toutfit6);
// console.log(Tcompleted2);

//outfit 3
// Kcompleted2 = [];
// Tcompleted3 =[];
// Kcompleted2.push(Toutfit3, Koutfit1, Toutfit6);

// let Toutfit7 = thomsCloset[0].splice(0,1);
// let Toutfit8 = thomsCloset[1].splice(0,1);
// let Toutfit9= thomsCloset[2].splice(0,1);
// Tcompleted3.push(Toutfit7, Toutfit8, Toutfit9);
// console.log(Tcompleted3, Kcompleted);

 //Dirty Laundry
// for (let x of kristynsCloset){
//     console.log("WHIRR: Now washing " + x);
// }

 //Inventory
//  console.log(thomsCloset[0], thomsCloset[1], thomsCloset[2]);
