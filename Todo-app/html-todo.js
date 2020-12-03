const todo = [
  { text: "racecar", complete: false },
  { text: "shop for tuna", complete: true },
  { text: "play xbox", complete: false },
  { text: "go dancing", complete: true },
  { text: "workout", complete: false },
];


//This filters out the todo with completed false ---
const incompleteTodos = todo.filter((todo) => {
  return !todo.complete;
});


//this variable creates a html element
const summary = document.createElement("h2");

//this put's content within the element 
summary.textContent = `You have ${incompleteTodos.length} todos  left on your list`;

//This inserts the content into the body of the html
document.querySelector("body").appendChild(summary);


//Takes each object within the array of objects and put it in a <p></p> tag grabbing the text key

todo.forEach((todo)=>{
  const p = document.createElement("p");
  p.textContent = todo.text
  document.querySelector("body").appendChild(p);

})

// const par = document.querySelectorAll("p");
// console.log(par);

//This allows me to remove an element tag based on the context of it
//The forEach combined with includes goes through the tags looking for the string I passed into it

// par.forEach((p) => {
//   if (p.textContent.includes("One")) {
//     p.remove();
//   }
// });

//you have 2 todo left (p)
//Add a p for each todo above (use text value)






