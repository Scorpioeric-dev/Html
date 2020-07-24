//5 differnet things to do
const todo = [
  "racecar ",
  "shop for tuna ",
  "play xbox ",
  "go dancing ",
  "workout",
];



// console.log(todo[0].split(''))
// todo.pop()
// todo.reverse()

// todo.push('sing',
// 12,'get my freak on','money')

console.log(todo)
//delete 3rd item
// todo.splice(2,1)
//add item on end
todo.push('new workout')
//remove first item
todo.shift()
console.log(`You have ${todo.length} to do!`)
todo.forEach(function (todo,index){
  const num = index + 1
console.log(`${num}. ${todo}`)
})

//first item
//second item
// console.log(`I have ${todo.length} items today `)
// console.log(`Todo: ${todo[0]}`)
// console.log(`Todo: ${todo[todo.length-2]}`)
