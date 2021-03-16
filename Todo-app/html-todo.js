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
  checkBoxTodo: false,
};

const renderTodo = (todo, filters) => {
  let filteredTodo = todo.filter((todo) => {
    const searchText = todo.text.toLowerCase().includes(filters.searchTodo.toLowerCase());
    const checkBoxTodo = !filters.checkBoxTodo || !todo.complete
    return searchText && checkBoxTodo 
  });

  // filteredTodo = filteredTodo.filter((todo) => {
  //   return !filters.checkBoxTodo || !todo.complete
    // if (filters.checkBoxTodo) {
    //   return !todo.complete;
      
    // } else {
    //   return true;
    // }
  // });


  const incompleteTodos = filteredTodo.filter((todo) => {
    return !todo.complete;
  });

  //Clears
  document.querySelector("#checkbox-todo").innerHTML = "";
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

document.querySelector("#search-text").addEventListener("input", (e) => {
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

//Acccess the checkbox

document.querySelector("#checkbox-todo").addEventListener("change", (e) => {
  filters.checkBoxTodo = e.target.checked;
  renderTodo(todo, filters);
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

//1. Create a checkbox and set up event listener -> " Hide Completed"

//2.Create a new hideCompleted filter (default false )

//3. Update hideCompleted an rerender list on checkBox change
//4.Setup renderTodos to remove completed items
