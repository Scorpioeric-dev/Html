const notes = [
  { title: "hello", body: "bye" },
  { title: "me", body: 34 },
  { title: "coding", body: "Enchilidas" },
];

console.log(notes);
// notes.splice(1,1, 'hello')

// notes[0] = "New Hello !";

// notes.forEach(function (item,index) {
// console.log(index)
// console.log(item)
// })
// console.log(notes[notes.length- 2])

//Counting ..1
// for(let count = 2 ; count >= 0 ; count--){
// console.log(count)
// }

// for (let count = notes.length - 1; count >= 0; count--) {
//   console.log(notes[count]);
// }

// console.log(notes.indexOf(false));

// the find () methos allows me to target a specific query or search not based on index the lower case method gives me dynamic input useability by my user
const findNote = function (notes, noteTitle) {
  return notes.find(function (note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
};


const note = findNote(notes, "ME");
console.log(note);
// console.log(notes.length);

//FindIndex does the same
//findIndex stops when the value is found in the array
// const index = notes.findIndex(function (note, index) {
// console.log(note);
//   return note.faveFood === "Enchilidas";
// });
// console.log(index);
