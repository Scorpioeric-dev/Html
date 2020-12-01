const notes = [
  { title: "javascript", body: "arrays" },
  { title: "react", body: "hooks" },
  { title: "node", body: "server" },
];

// console.log(notes);
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

// the find () method allows me to target a specific query or search not based on index the lower case method gives me dynamic input useability by my user
// const findNote = function (notes, noteTitle) {
//   return notes.find(function (note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
// };
// console.log(notes)

const sortNotes = (notes) => {
  notes.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};

//



//How to make a search query to find a " " that has a portion of the string in an array
// const findNotes = (notes, query) => {
//   return notes.filter((note, index) => {
//     const titleMatch = note.title.toLowerCase().includes(query.toLowerCase());
//     const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
//     return titleMatch || isBodyMatch;
//   });
// };
// console.log(findNotes(notes, "javascript"));

// const note = findNote(notes, "ME");
// console.log(note);
// console.log(notes.length);

//FindIndex does the same
//findIndex stops when the value is found in the array
// const index = notes.findIndex(function (note, index) {
// console.log(note);
//   return note.faveFood === "Enchilidas";
// });
// console.log(index);


sortNotes(notes)
console.log(notes)