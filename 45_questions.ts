// question no 01

let personName1: string="ERIC";
console.log(`Hello ${personName1}, would you like to learn some python today?`);

// question no 02

let personName2: string="Haider"
console.log("lowercase;", personName2.toLowerCase());

// upper case

console.log("uppercase:", personName2.toLocaleUpperCase());

// tittle case 

console.log("titlecase:", personName2.replace(/\bw/g,c => c.toUpperCase()));

// Question no 03

let quote1: string= "A person who never made a mistake never tried anything new";
let author1: string= "Albert Einstein"
console.log(`${author1} once said,"${quote1}`);

// Question no 04

let quote: string= "a person who never made a mistake never tried anything new.";
let famous_person: string= "Albert Einstein";
let message=`${famous_person} once said, ${quote}`;
console.log(message);

// Question no 05



let personName3: string=`\n\t Governor Sindh Kamran Khan Tessori\t\n`;
console.log(personName3)
let stripped: string= personName3.trim();
console.log(stripped);

// Question No 06

console.log(5+ 3);
console.log(11 -3);
console.log(4 *2);
console.log(16 /2);

// Question No 07

console.log(5+ 3);
console.log(11 -3);
console.log(4 *2);
console.log(16 /2);

// Question No 08

let favoriteNumber: number = 7
console.log(`my favorate number is ${favoriteNumber}`);

// Question no 09

//My Name Is Haider Ali
// dated 21.02.2024
// This program will wellcome you to git hub
console.log('wellcome to git hub simple program');

// My Name is Haider Ali
// dated 21.02.2024
// this program will have addition
console.log(5 + 5);

// Question no 10 

let members1: string[] =['Kanwal',"Sana","Affan","Hammad","Hamza"];
for(let i=0; i<members1.length; i++){
    console.log(members1[i]);
}

// Question no 11


let members: string[] =["Hammad","Affan","Kanwal","Sana","Hamza"];
let message1: string='Where Are You Going? ;';
for(let i=0; i<members.length; i++){
    console.log(message1 + members[i]);
}

// Question no 12

let transportation: string[] =["Honda Civic","Toyota lc300","toyota Fortunner","Mitsubishi Lancer"];
for(let i=0; i<transportation.length; i++){
    console.log("I Would Like To Own A " + transportation[i]);
}

// Question No 13

let guest_list1: string [] = ["Hammad","Affan","Kanwal","Sana","Hamza"];
for(let i=0; i<guest_list1.length; i++){
    console.log("Respected Sir/Miss " + guest_list1[i] + ',\nWe Invited You For Dinner With Us Tomorrow.\n\nThank You\n');
}

// Question no 14

let guest_list2: string [] = ["Hammmad","Affan","Kanwal","Sana","Hamza"];
for(let i=0; i<guest_list2.length; i++){
    console.log("Respected Sir/Miss " + guest_list2[i] + '\nWe Invited You For Dinner With Us Tomorrow.\n\nThank You\n');
}
let not_present: string = 'Affan';
let new_guest : string = 'Mark Zukerberg';
guest_list2[1] = new_guest;
for(let i=0; i<guest_list2.length; i++){
    console.log("Respected Sir/Miss " + guest_list2[i] + ',\n We Invited You For Dinner With Us Tomorrow.\n\nThank You\n');
}

console.log(`Mr, ${not_present} Will Not Comming Tomorrow On Dinner`);

// Question no 15

let guest_list4: string [] =["Hammad","Affan","Kanwal","Sana","Hamza"];
// for(let i=0; i<guest_list2.length; i++){
    // console.log("Respected Sir/Miss " + guest_list2[i] + '\nWe Invited You For Dinner With Us Tomorrow.\n\nThank You\n');

let not_present2: string = 'Affan';
let new_guest2 : string = 'Mark Zukerberg';
guest_list4[1] = new_guest;
for(let i=0; i<guest_list4.length; i++){
    console.log("Respected Sir/Miss " + guest_list4[i] + ',\n We Invited You For Dinner With Us Tomorrow.\n\nThank You\n');
}
guest_list4.unshift('Daniyal','Imran','Sameer');
for(let i=0; i<guest_list4.length; i++){
    console.log('Respected Sor/Miss ' + guest_list4[i] + '\nWe Just Found A Bigger Table.So We Decided To Invite Three More Guests.\n\nThank You\n');
}

// Question No 16

let guest_list5: string [] =["Hammad","Affan","Kanwal","Sana","Hamza"];
// for(let i=0; i<guest_list2.length; i++){
    // console.log("Respected Sir/Miss " + guest_list2[i] + '\nWe Invited You For Dinner With Us Tomorrow.\n\nThank You\n');

let not_present3: string = 'Affan';
let new_guest3 : string = 'Mark Zukerberg';
guest_list5[1] = new_guest3;
// for(let i=0; i<guest_list4.length; i++){
//     console.log("Respected Sir/Miss " + guest_list4[i] + ',\n We Invited You For Dinner With Us Tomorrow.\n\nThank You\n');
// }
guest_list5.unshift('Daniyal','Imran','Sameer');
// for(let i=0; i<guest_list4.length; i++){
//     console.log('Respected Sor/Miss ' + guest_list4[i] + '\nWe Just Found A Bigger Table.So We Decided To Invite Three More Guests.\n\nThank You\n');
// }
console.log("\nUnfortunately We Can Not Arrange Big Table Only Two Peoples ALlows");
while(guest_list5.length>2){
    let remove_guest = guest_list5.pop();
    console.log(`Sorry Sir/Miss, ${remove_guest} You Are Not Invited For Dinner Tomorrow.`);
}
for(let i=0; i<guest_list5.length; i++){
    console.log("Respected Sir/Miss " + guest_list5[i] + ',\nYes You Are Still Invited Tomorrow For Dinner With Us\n\nThank You\n');
}
guest_list5.splice(0,2);
console.group(guest_list5);

// Question no 17

let myPlaces: string [] = ["Karachi","Gilgit","Islamabad","Quetta","Lahore","Peshawar"];
// console.log(myPlaces);

// making copy of an array
let copyOfArray = myPlaces.slice();
let SortedArray = copyOfArray.sort();
// console.log(SortedArray);
// printing original array
// console.log(myPlaces);

// reversing original array
//first we have to make a copy of original array
let copyOfArray2 = myPlaces.slice();
let reverseOrigArray = copyOfArray2.reverse();
// console.log(reverseOrigArray);


//  reverse the order of original array

let reverseOrigArray2 = myPlaces.reverse();
// console.log(reverseOrigArray2);

let againreverse = reverseOrigArray2.reverse();
// console.log(againreverse);   // same as original array

// sorting original array
 let sortOrigArray = myPlaces.sort();
 console.log(sortOrigArray);

 let reverseSortedArray = sortOrigArray.reverse();
 console.log(reverseSortedArray);



//  Question no 19

let invitations : string [] = ["daniyal","Imran"];
let count_invitations : number = invitations.length

console.log(`${count_invitations}Peoples Will Come To The Dinner`);

// Question No 20

let country: string [] = ["Pakistan","India","Amsterdam","Turkey","China"];
console.log("list of countries:");
console.log(country);

// Question no 21

let person: {name: string, fname: string , age: number} ={name:"Hammad", fname: "male" , age: 22};
console.log(person);

// Question no 22

const days : string [] = ["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// console.log(days[7]);
console.log(days[6]);

// Question no 23

let car = "subaru";
console.log("is car == 'subaru' ? predict true");
console.log(car == 'subaru');

console.log("is car != 'honda civic' ? predict true");
console.log(car != 'honda civic');

console.log("is car == 'Dawlance' ? predict false");
console.log(car == 'dawlance');

console.log("is car == 'SUBARU' ? predict false");
console.log(car  == 'SUBARU')

console.log("is car.length == 6? predict true");
console.log(car.length ==6)

console.log("is car.length == 9? predict true");
console.log(car.length !=9)

console.log("is 10 > 45 ? predict false")
console.log(10 > 45)

console.log("is 3 <= 2 ? predict false")
console.log(3 <= 2)

console.log("is 63 <= 45 ? predict false")
console.log(63 <= 45)

console.log("is car == 'honda' ? predict true")
console.log(car =='honda')

// Question no 24

let name_1: string = "Haider"
let name_2: string = "Haider Ali"
let name_3: string = "Haider Ali Sheikh"

// if (name_1 == name_3){
//     console.log("names are equal")
// } else {
//     console.log("names are not equal")


if (name_1 != name_2){
        console.log("names are equal")
}


// if (name_1 != name_3){
//     console.log("names are equal")


let age_1 : number = 18
let age_2 : number = 23

if (age_1 == 18){
    console.log("eligible for vote")
}

if (age_1 != 22){
    console.log("eligible for vote in older category")
}

if (age_1 <= age_2){  //less
    console.log("Younger")
}

if (age_2 >= age_1){ // greater
    console.log("older")
}

if (age_1 == 18 && age_2 == 23) {
    console.log(" person is eligible for vote")
}

if (age_1 == 18 || age_2 != 23) {
    console.log(" person is not eligible for vote")
}

let countries : string [] = ["pakistan","china","india","amsterdam"]
if (countries.includes("pakistan")){
    console.log("pakistan is in country list")
}

if (!country.includes("America")){
    console.log("America is not include in an array")
}

// Question no 25

let Alien_Colour = "green"
if (Alien_Colour == "green")
console.log("You Earn 5 Points")

let alien_Colour : string = "red"
if(alien_Colour == "green")
console.log("No output")

// Question no 26

let Alien_Colour1 = "green"
if (Alien_Colour1 == "green") {
console.log("Player just earned 5 points for shooting the alien")
} else{
    console.log("player just earned 10 Points")
}

let Alien_Colour2 = "red"
if (Alien_Colour2 == "green") {
console.log("Player just earned 5 points for shooting the alien")
} else{
    console.log("player just earned 10 Points")
}

// Question no 27

let Alien_Colour3: string = "red"
if (Alien_Colour3 == "green") {
console.log("Player just earned 5 points for shooting the alien")
} else if (Alien_Colour3 == "yellow"){
    console.log("player just earned 10 Points")
}
else {
    console.log("You Got 15 Points")
}

// Question no 28

let age : number = 14
if(age< 2) {
    console.log("You Are A Baby")
} else if (age < 4) {
    console.log("You Are A Toddler")
} else if (age < 13) {
    console.log("You Are A Kid")
}else if (age < 20) {
    console.log("You Are A Teenager")
} else if(age < 65) {
    console.log("You Are A Adult")
}
else {
    console.log("You Are Older")
}

// Question no 29

let favorate_fruits : string [] = ["grapes","apple","orange","berry","peach"]

if (favorate_fruits.includes("apple")) {
    console.log("apple")
}
if (favorate_fruits.includes("peach")) {
    console.log("You Really Like Bananas")
}
if (favorate_fruits.includes("orange")) {
    console.log("orange")
}
if (favorate_fruits.includes("berry")) {
    console.log("You Really Like Bananas")
}
if (favorate_fruits.includes("grapes")) {
    console.log("grapes")
}

// Question no 30

let users : string [] = ["admin","erik","fatima","kanwal"]

for (let user of users) {
    if(user ==="admin"){
        console.log("Hello Admin Would You Like To See A Status Report")
    } else(
        console.log(` Hello ${user},Thank You For Logging In Again`)
    )
}

// Question No 31

let users1 : string [] = ["admin","erik","fatima","kanwal"]

if (users1.length === 0) {
    console.log("we Need To Find Some Users")
} else{ 
    for(let user of users1) {
        if(user === "admin"){
            console.log("Hello Admin Would You Like To See The Report")
        } else{
            console.log(`Hello ${user}, Thank You For Logging In Again`)
        }
    }
}

 users1 = []
if (users1.length ===0){
    console.log("We Need To Find Some Users")
}


// Question no 32


let current_users : string[] = ["admin","eric","Fatima","Hammad","Kanwal"];
let new_users : string [] = ["admin","eric","Aliza","Noor","Haider"];

let current_users_lower : String [] =current_users.map(user3 => user3.toLowerCase())

for(let new_user of new_users) {
    if (current_users_lower.includes (new_user.toLowerCase())) {
        console.log(`Sorry ${new_user},That Name Is Taken`)
    } else {
        console.log(`Yes ${new_user}, Is Still Available In List`)
    }
}

// Question no 33

let numbers : number [] =[1,2,3,4,5,6,7,8,9]

for (let number of numbers)

if (number === 1){
    console.log(`${number}st`) //1st
} else if (number === 2){
    console.log(`${number}nd`) //2nd

}else if (number === 3){
    console.log(`${number}rd`) //3rd

} else {
    console.log(`${number}th`) //4th , 5th , 6th , 7th , 8th , 9th
}

//Question no 34

let favorate_pizza : string [] = ["pepproni","chiken","fajita"]

for (let pizza of favorate_pizza){
    console.log(pizza)
}

console.log("\n")

for (let pizza of favorate_pizza){
    console.log(`I Really Like ${pizza} pizza`)
}

console.log("\n I Really Love To Eat Pizza!")

// Question no 35

let animals : string [] = ["lion","Cat","Dog"]

for (let animal of animals){
    console.log(animal)
}
console.log ("\n")

for (let animal of animals){
    console.log(`A ${animal} Has A Tail`)
}

console.log("\n All Of These Are Great Pets But I Love Lion More")

// Question No 36

function makeShirt(size:string, text:string): void {
    console.log(`\n You Order A ${size} Shirt That Says ${text}`)
}

makeShirt('large','"I Love Typescript"')
makeShirt('medium','"I Need A Big Shirt"')

// Question No 37


function makeShirt1(size:string = 'large', text:string ='I Love Typescript'): void {
    console.log(`\n You Have Order A ${size}, Shirt That Says ${text}`)
}

makeShirt1();
makeShirt1('medium')

/// different messages

makeShirt1('small', 'I Need A Big Shirt To Wear')


// Question No 38

function describe_city(city: string,country: string = 'pakistan'): void {
    console.log(`${city} Is In ${country}`)
}

describe_city('Karachi') // default sentence
describe_city('mumbai' , 'india')
describe_city('lahore', 'punjab')

// Question no 39

function cityCountry(city1: string, country1: string ): string {
    return `${city1} , ${country1}`
}

let c1 = cityCountry('Lahore' , 'Pakistan')
let c2= cityCountry('tokyo' , 'Japan')
let c3= cityCountry('paris' , 'France')

console.log(c1)
console.log(c2)
console.log(c3)

// Question No 40

function makeAlbum (artist: string, title: string): { artist: string , title: string} {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
let album1 = makeAlbum("atif","Doori")
console.log(album1)

let album2 = makeAlbum("Kaifi Khalil","kahani suno")
console.log(album2)

let album3 = makeAlbum("Haider","typescript")
console.log(album3)

let album4 = makeAlbum("Hammad","Blue")
console.log(album4)

// Question No 41

function show_magicians(magicians: string[]): void{
    for(const magician of magicians){
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}

const magician: string[] = ["Nadir","Harry","Mike","Henry"];
show_magicians(magician)

// Question no 42


function make_great(magicians1: string[]): void{
    for(let I = 0; I < magicians1.length; I++){
        magicians1[I] = magicians1[I]  +   '   the great'
    }
}

const magicians2: string[] = ["Nadir","Harry","Mike","Henry"];
make_great(magicians2)
show_magicians(magicians2)

//Question no 43

function make_great2(magicians3: string[]): string[] {
    const greatMagicians: string[] = [];
    for(let I = 0; I <magicians3.length; I++) {
        greatMagicians.push(magicians3[I] + '  The Great');
    
    }
    return greatMagicians;
}

const magicians4: string[] = ["Nadir","Harry","Mike","Henry"];
const greatMagician2: string[] = make_great2(magicians4);
show_magicians(magicians4);
show_magicians(greatMagician2)

//Question no 44

function sandwich(...items: string[]): void{
    console.log("Sanwich Orders:")

    for(let I = 0; I <items.length; I++) {
        console.log(`- ${items[I]}`)
    }
}
console.log("Enjoy Your Sandwich Sir Zia Khan");
 
sandwich('capsicum', 'tomato' , 'chicken');
sandwich('Beef', 'cheese');
sandwich('garlic chicken' , 'mayo sauce')

// Question no 45

// intallation complete

type car = {
    manufacture: string
    model: string
    [key: string]: any;
}

function createcar(manufacture:string,model: string, optional: Record<string, any>): car {
    return{
        manufacture,
        model,
        ...optional
    }
}
const mycar: car = createcar("Honda" , "Civic" , {color: "black" , year: "1995"})
console.log(mycar)