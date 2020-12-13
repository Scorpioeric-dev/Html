const todo = [
  { text: "racecar", complete: false },
  { text: "shop for tuna", complete: true },
  { text: "play xbox", complete: false },
  { text: "go dancing", complete: true },
  { text: "workout", complete: false },
];

//Set up a Div contain for todos
//Setup a filter (searchtext) and wire up a new filter input to change it
//create a render todo function to render and rerender the latest filtered data


const filters = {
  searchTodo: "",
};

const renderTodo = (todo, filters) => {
  const filteredTodo = todo.filter((todo) => {
    return todo.text.toLowerCase().includes(filters.searchTodo.toLowerCase());
  });
  const incompleteTodos = filteredTodo.filter((todo) => {
    return !todo.complete;
  });
  //Clears
  document.querySelector("#todo").innerHTML = "";
  //this variable creates a html element
  const summary = document.createElement("h2");
  //this put's content within the element
  summary.textContent = `You have ${incompleteTodos.length} todos  left on your list`;
  //This inserts the content into the body of the html
  document.querySelector("#todo").appendChild(summary);
  //Takes each object within the array of objects and put it in a <p></p> tag grabbing the text key
  filteredTodo.forEach((todo) => {
    const p = document.createElement("p");
    p.textContent = todo.text;
    document.querySelector("#todo").appendChild(p);
  });
};

renderTodo(todo, filters);

document.querySelector("#search-text").addEventListener('input',(e) => {
  filters.searchTodo = e.target.value;
  renderTodo(todo, filters);
});



//Access the button and makes the code run on console
document.querySelector("button").addEventListener("click", () => {
  console.log("Adding a todo item... ");
});

//Challenge target the button by id
document.querySelector("#post_todo").addEventListener("click", (e) => {
  console.log("The button to post a todo");
});

// const par = document.querySelectorAll("p");
// console.log(par);

//This allows me to remove an element tag based on the context of it
//The forEach combined with includes goes through the tags looking for the string I passed into it

// par.forEach((p) => {
//   if (p.textContent.includes("One")) {
//     p.remove();
//   }
// });
