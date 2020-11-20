//5 different things to do
const todo = [
  { text: "racecar", complete: false },
  { text: "shop for tuna", complete: true },
  { text: "play xbox", complete: false },
  { text: "go dancing", complete: true },
  { text: "workout", complete: false },
];

// console.log(todo)
// console.log(todo)
//Challenge

//1.Convert array to aray of objects -> text,complete

//2.Create function to remove a todo by text value
const deleteTodo = (todo, todoType) => {
  const index = todo.findIndex((todos) => {
    return todos.text.toLowerCase() === todoType.toLowerCase();
  });
  if (index > -1) {
    todo.splice(index, 1);
  }
};

// deleteTodo(todo, "go dancing");
// console.log(todo);

const getThingsToDo = (todo) => {
 return todo.filter((todo) => {
   return !todo.complete 
 })
}
    
console.log(getThingsToDo(todo));

// console.log(todo[0].split(''))
// todo.pop()
// todo.reverse()

// todo.push('sing',
// 12,'get my freak on','money')

// console.log(todo)
//delete 3rd item
// todo.splice(2,1)
//add item on end
// todo.push('new workout')
//remove first item
// todo.shift()
// console.log(`You have ${todo.length} to do!`)
// todo.forEach(function (todo,index){
//   const num = index + 1
// console.log(`${num}. ${todo}`)
// })

//first item
//second item
// console.log(`I have ${todo.length} items today `)
// console.log(`Todo: ${todo[0]}`)
// console.log(`Todo: ${todo[todo.length-2]}`)

for (let count = 0; count <= 4; count++) {
  // console.log(todo[count])
}

for (let count = todo.length - 1; count >= 0; count--) {
  // console.log(todo[count]);
}
