// question no 01
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var personName1 = "ERIC";
console.log("Hello ".concat(personName1, ", would you like to learn some python today?"));
// question no 02
var personName2 = "Haider";
console.log("lowercase;", personName2.toLowerCase());
// upper case
console.log("uppercase:", personName2.toLocaleUpperCase());
// tittle case 
console.log("titlecase:", personName2.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
// Question no 03
var quote1 = "A person who never made a mistake never tried anything new";
var author1 = "Albert Einstein";
console.log("".concat(author1, " once said,\"").concat(quote1));
// Question no 04
var quote = "a person who never made a mistake never tried anything new.";
var famous_person = "Albert Einstein";
var message = "".concat(famous_person, " once said, ").concat(quote);
console.log(message);
// Question no 05
var personName3 = "\n\t Governor Sindh Kamran Khan Tessori\t\n";
console.log(personName3);
var stripped = personName3.trim();
console.log(stripped);
// Question No 06
console.log(5 + 3);
console.log(11 - 3);
console.log(4 * 2);
console.log(16 / 2);
// Question No 07
console.log(5 + 3);
console.log(11 - 3);
console.log(4 * 2);
console.log(16 / 2);
// Question No 08
var favoriteNumber = 7;
console.log("my favorate number is ".concat(favoriteNumber));
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
var members1 = ['Kanwal', "Sana", "Affan", "Hammad", "Hamza"];
for (var i = 0; i < members1.length; i++) {
    console.log(members1[i]);
}
// Question no 11
var members = ["Hammad", "Affan", "Kanwal", "Sana", "Hamza"];
var message1 = 'Where Are You Going? ;';
for (var i = 0; i < members.length; i++) {
    console.log(message1 + members[i]);
}
// Question no 12
var transportation = ["Honda Civic", "Toyota lc300", "toyota Fortunner", "Mitsubishi Lancer"];
for (var i = 0; i < transportation.length; i++) {
    console.log("I Would Like To Own A " + transportation[i]);
}
// Question No 13
var guest_list1 = ["Hammad", "Affan", "Kanwal", "Sana", "Hamza"];
for (var i = 0; i < guest_list1.length; i++) {
    console.log("Respected Sir/Miss " + guest_list1[i] + ',\nWe Invited You For Dinner With Us Tomorrow.\n\nThank You\n');
}
// Question no 14
var guest_list2 = ["Hammmad", "Affan", "Kanwal", "Sana", "Hamza"];
for (var i = 0; i < guest_list2.length; i++) {
    console.log("Respected Sir/Miss " + guest_list2[i] + '\nWe Invited You For Dinner With Us Tomorrow.\n\nThank You\n');
}
var not_present = 'Affan';
var new_guest = 'Mark Zukerberg';
guest_list2[1] = new_guest;
for (var i = 0; i < guest_list2.length; i++) {
    console.log("Respected Sir/Miss " + guest_list2[i] + ',\n We Invited You For Dinner With Us Tomorrow.\n\nThank You\n');
}
console.log("Mr, ".concat(not_present, " Will Not Comming Tomorrow On Dinner"));
// Question no 15
var guest_list4 = ["Hammad", "Affan", "Kanwal", "Sana", "Hamza"];
// for(let i=0; i<guest_list2.length; i++){
// console.log("Respected Sir/Miss " + guest_list2[i] + '\nWe Invited You For Dinner With Us Tomorrow.\n\nThank You\n');
var not_present2 = 'Affan';
var new_guest2 = 'Mark Zukerberg';
guest_list4[1] = new_guest;
for (var i = 0; i < guest_list4.length; i++) {
    console.log("Respected Sir/Miss " + guest_list4[i] + ',\n We Invited You For Dinner With Us Tomorrow.\n\nThank You\n');
}
guest_list4.unshift('Daniyal', 'Imran', 'Sameer');
for (var i = 0; i < guest_list4.length; i++) {
    console.log('Respected Sor/Miss ' + guest_list4[i] + '\nWe Just Found A Bigger Table.So We Decided To Invite Three More Guests.\n\nThank You\n');
}
// Question No 16
var guest_list5 = ["Hammad", "Affan", "Kanwal", "Sana", "Hamza"];
// for(let i=0; i<guest_list2.length; i++){
// console.log("Respected Sir/Miss " + guest_list2[i] + '\nWe Invited You For Dinner With Us Tomorrow.\n\nThank You\n');
var not_present3 = 'Affan';
var new_guest3 = 'Mark Zukerberg';
guest_list5[1] = new_guest3;
// for(let i=0; i<guest_list4.length; i++){
//     console.log("Respected Sir/Miss " + guest_list4[i] + ',\n We Invited You For Dinner With Us Tomorrow.\n\nThank You\n');
// }
guest_list5.unshift('Daniyal', 'Imran', 'Sameer');
// for(let i=0; i<guest_list4.length; i++){
//     console.log('Respected Sor/Miss ' + guest_list4[i] + '\nWe Just Found A Bigger Table.So We Decided To Invite Three More Guests.\n\nThank You\n');
// }
console.log("\nUnfortunately We Can Not Arrange Big Table Only Two Peoples ALlows");
while (guest_list5.length > 2) {
    var remove_guest = guest_list5.pop();
    console.log("Sorry Sir/Miss, ".concat(remove_guest, " You Are Not Invited For Dinner Tomorrow."));
}
for (var i = 0; i < guest_list5.length; i++) {
    console.log("Respected Sir/Miss " + guest_list5[i] + ',\nYes You Are Still Invited Tomorrow For Dinner With Us\n\nThank You\n');
}
guest_list5.splice(0, 2);
console.group(guest_list5);
// Question no 17
var myPlaces = ["Karachi", "Gilgit", "Islamabad", "Quetta", "Lahore", "Peshawar"];
// console.log(myPlaces);
// making copy of an array
var copyOfArray = myPlaces.slice();
var SortedArray = copyOfArray.sort();
// console.log(SortedArray);
// printing original array
// console.log(myPlaces);
// reversing original array
//first we have to make a copy of original array
var copyOfArray2 = myPlaces.slice();
var reverseOrigArray = copyOfArray2.reverse();
// console.log(reverseOrigArray);
//  reverse the order of original array
var reverseOrigArray2 = myPlaces.reverse();
// console.log(reverseOrigArray2);
var againreverse = reverseOrigArray2.reverse();
// console.log(againreverse);   // same as original array
// sorting original array
var sortOrigArray = myPlaces.sort();
console.log(sortOrigArray);
var reverseSortedArray = sortOrigArray.reverse();
console.log(reverseSortedArray);
//  Question no 19
var invitations = ["daniyal", "Imran"];
var count_invitations = invitations.length;
console.log("".concat(count_invitations, "Peoples Will Come To The Dinner"));
// Question No 20
var country = ["Pakistan", "India", "Amsterdam", "Turkey", "China"];
console.log("list of countries:");
console.log(country);
// Question no 21
var person = { name: "Hammad", fname: "male", age: 22 };
console.log(person);
// Question no 22
var days = ["sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// console.log(days[7]);
console.log(days[6]);
// Question no 23
var car = "subaru";
console.log("is car == 'subaru' ? predict true");
console.log(car == 'subaru');
console.log("is car != 'honda civic' ? predict true");
console.log(car != 'honda civic');
console.log("is car == 'Dawlance' ? predict false");
console.log(car == 'dawlance');
console.log("is car == 'SUBARU' ? predict false");
console.log(car == 'SUBARU');
console.log("is car.length == 6? predict true");
console.log(car.length == 6);
console.log("is car.length == 9? predict true");
console.log(car.length != 9);
console.log("is 10 > 45 ? predict false");
console.log(10 > 45);
console.log("is 3 <= 2 ? predict false");
console.log(3 <= 2);
console.log("is 63 <= 45 ? predict false");
console.log(63 <= 45);
console.log("is car == 'honda' ? predict true");
console.log(car == 'honda');
// Question no 24
var name_1 = "Haider";
var name_2 = "Haider Ali";
var name_3 = "Haider Ali Sheikh";
// if (name_1 == name_3){
//     console.log("names are equal")
// } else {
//     console.log("names are not equal")
if (name_1 != name_2) {
    console.log("names are equal");
}
// if (name_1 != name_3){
//     console.log("names are equal")
var age_1 = 18;
var age_2 = 23;
if (age_1 == 18) {
    console.log("eligible for vote");
}
if (age_1 != 22) {
    console.log("eligible for vote in older category");
}
if (age_1 <= age_2) { //less
    console.log("Younger");
}
if (age_2 >= age_1) { // greater
    console.log("older");
}
if (age_1 == 18 && age_2 == 23) {
    console.log(" person is eligible for vote");
}
if (age_1 == 18 || age_2 != 23) {
    console.log(" person is not eligible for vote");
}
var countries = ["pakistan", "china", "india", "amsterdam"];
if (countries.includes("pakistan")) {
    console.log("pakistan is in country list");
}
if (!country.includes("America")) {
    console.log("America is not include in an array");
}
// Question no 25
var Alien_Colour = "green";
if (Alien_Colour == "green")
    console.log("You Earn 5 Points");
var alien_Colour = "red";
if (alien_Colour == "green")
    console.log("No output");
// Question no 26
var Alien_Colour1 = "green";
if (Alien_Colour1 == "green") {
    console.log("Player just earned 5 points for shooting the alien");
}
else {
    console.log("player just earned 10 Points");
}
var Alien_Colour2 = "red";
if (Alien_Colour2 == "green") {
    console.log("Player just earned 5 points for shooting the alien");
}
else {
    console.log("player just earned 10 Points");
}
// Question no 27
var Alien_Colour3 = "red";
if (Alien_Colour3 == "green") {
    console.log("Player just earned 5 points for shooting the alien");
}
else if (Alien_Colour3 == "yellow") {
    console.log("player just earned 10 Points");
}
else {
    console.log("You Got 15 Points");
}
// Question no 28
var age = 14;
if (age < 2) {
    console.log("You Are A Baby");
}
else if (age < 4) {
    console.log("You Are A Toddler");
}
else if (age < 13) {
    console.log("You Are A Kid");
}
else if (age < 20) {
    console.log("You Are A Teenager");
}
else if (age < 65) {
    console.log("You Are A Adult");
}
else {
    console.log("You Are Older");
}
// Question no 29
var favorate_fruits = ["grapes", "apple", "orange", "berry", "peach"];
if (favorate_fruits.includes("apple")) {
    console.log("apple");
}
if (favorate_fruits.includes("peach")) {
    console.log("You Really Like Bananas");
}
if (favorate_fruits.includes("orange")) {
    console.log("orange");
}
if (favorate_fruits.includes("berry")) {
    console.log("You Really Like Bananas");
}
if (favorate_fruits.includes("grapes")) {
    console.log("grapes");
}
// Question no 30
var users = ["admin", "erik", "fatima", "kanwal"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "admin") {
        console.log("Hello Admin Would You Like To See A Status Report");
    }
    else
        (console.log(" Hello ".concat(user, ",Thank You For Logging In Again")));
}
// Question No 31
var users1 = ["admin", "erik", "fatima", "kanwal"];
if (users1.length === 0) {
    console.log("we Need To Find Some Users");
}
else {
    for (var _a = 0, users1_1 = users1; _a < users1_1.length; _a++) {
        var user = users1_1[_a];
        if (user === "admin") {
            console.log("Hello Admin Would You Like To See The Report");
        }
        else {
            console.log("Hello ".concat(user, ", Thank You For Logging In Again"));
        }
    }
}
users1 = [];
if (users1.length === 0) {
    console.log("We Need To Find Some Users");
}
// Question no 32
var current_users = ["admin", "eric", "Fatima", "Hammad", "Kanwal"];
var new_users = ["admin", "eric", "Aliza", "Noor", "Haider"];
var current_users_lower = current_users.map(function (user3) { return user3.toLowerCase(); });
for (var _b = 0, new_users_1 = new_users; _b < new_users_1.length; _b++) {
    var new_user = new_users_1[_b];
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log("Sorry ".concat(new_user, ",That Name Is Taken"));
    }
    else {
        console.log("Yes ".concat(new_user, ", Is Still Available In List"));
    }
}
// Question no 33
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _c = 0, numbers_1 = numbers; _c < numbers_1.length; _c++) {
    var number = numbers_1[_c];
    if (number === 1) {
        console.log("".concat(number, "st")); //1st
    }
    else if (number === 2) {
        console.log("".concat(number, "nd")); //2nd
    }
    else if (number === 3) {
        console.log("".concat(number, "rd")); //3rd
    }
    else {
        console.log("".concat(number, "th")); //4th , 5th , 6th , 7th , 8th , 9th
    }
}
//Question no 34
var favorate_pizza = ["pepproni", "chiken", "fajita"];
for (var _d = 0, favorate_pizza_1 = favorate_pizza; _d < favorate_pizza_1.length; _d++) {
    var pizza = favorate_pizza_1[_d];
    console.log(pizza);
}
console.log("\n");
for (var _e = 0, favorate_pizza_2 = favorate_pizza; _e < favorate_pizza_2.length; _e++) {
    var pizza = favorate_pizza_2[_e];
    console.log("I Really Like ".concat(pizza, " pizza"));
}
console.log("\n I Really Love To Eat Pizza!");
// Question no 35
var animals = ["lion", "Cat", "Dog"];
for (var _f = 0, animals_1 = animals; _f < animals_1.length; _f++) {
    var animal = animals_1[_f];
    console.log(animal);
}
console.log("\n");
for (var _g = 0, animals_2 = animals; _g < animals_2.length; _g++) {
    var animal = animals_2[_g];
    console.log("A ".concat(animal, " Has A Tail"));
}
console.log("\n All Of These Are Great Pets But I Love Lion More");
// Question No 36
function makeShirt(size, text) {
    console.log("\n You Order A ".concat(size, " Shirt That Says ").concat(text));
}
makeShirt('large', '"I Love Typescript"');
makeShirt('medium', '"I Need A Big Shirt"');
// Question No 37
function makeShirt1(size, text) {
    if (size === void 0) { size = 'large'; }
    if (text === void 0) { text = 'I Love Typescript'; }
    console.log("\n You Have Order A ".concat(size, ", Shirt That Says ").concat(text));
}
makeShirt1();
makeShirt1('medium');
/// different messages
makeShirt1('small', 'I Need A Big Shirt To Wear');
// Question No 38
function describe_city(city, country) {
    if (country === void 0) { country = 'pakistan'; }
    console.log("".concat(city, " Is In ").concat(country));
}
describe_city('Karachi'); // default sentence
describe_city('mumbai', 'india');
describe_city('lahore', 'punjab');
// Question no 39
function cityCountry(city1, country1) {
    return "".concat(city1, " , ").concat(country1);
}
var c1 = cityCountry('Lahore', 'Pakistan');
var c2 = cityCountry('tokyo', 'Japan');
var c3 = cityCountry('paris', 'France');
console.log(c1);
console.log(c2);
console.log(c3);
// Question No 40
function makeAlbum(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
var album1 = makeAlbum("atif", "Doori");
console.log(album1);
var album2 = makeAlbum("Kaifi Khalil", "kahani suno");
console.log(album2);
var album3 = makeAlbum("Haider", "typescript");
console.log(album3);
var album4 = makeAlbum("Hammad", "Blue");
console.log(album4);
// Question No 41
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log(magician_1.charAt(0).toUpperCase() + magician_1.slice(1));
    }
}
var magician = ["Nadir", "Harry", "Mike", "Henry"];
show_magicians(magician);
// Question no 42
function make_great(magicians1) {
    for (var I = 0; I < magicians1.length; I++) {
        magicians1[I] = magicians1[I] + '   the great';
    }
}
var magicians2 = ["Nadir", "Harry", "Mike", "Henry"];
make_great(magicians2);
show_magicians(magicians2);
//Question no 43
function make_great2(magicians3) {
    var greatMagicians = [];
    for (var I = 0; I < magicians3.length; I++) {
        greatMagicians.push(magicians3[I] + '  The Great');
    }
    return greatMagicians;
}
var magicians4 = ["Nadir", "Harry", "Mike", "Henry"];
var greatMagician2 = make_great2(magicians4);
show_magicians(magicians4);
show_magicians(greatMagician2);
//Question no 44
function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sanwich Orders:");
    for (var I = 0; I < items.length; I++) {
        console.log("- ".concat(items[I]));
    }
}
console.log("Enjoy Your Sandwich Sir Zia Khan");
sandwich('capsicum', 'tomato', 'chicken');
sandwich('Beef', 'cheese');
sandwich('garlic chicken', 'mayo sauce');
function createcar(manufacture, model, optional) {
    return __assign({ manufacture: manufacture, model: model }, optional);
}
var mycar = createcar("Honda", "Civic", { color: "black", year: "1995" });
console.log(mycar);
