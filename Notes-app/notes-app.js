//DOM - Document Object Model
let notes =[];

const filters = {
  searchText: "",
};

//Check for existing saved data empty array so should be none 
const notesJSON = localStorage.getItem('notes')

if(notesJSON !== null) {
notes = JSON.parse(notesJSON)
}




// localStorage.setItem('location','Las Vegas')  Creating /Updating
// console.log(localStorage.getItem('location'))  Read
// localStorage.removeItem('location')  Delete
// localStorage.clear() Delete

// const user = {
//   name: 'eric',
//   age: 45
// }
//JSON Stringify is to stringify an object
// const userJSON = JSON.stringify(user)
// console.log(userJSON)
// localStorage.setItem("user", userJSON)

// const userJSON = localStorage.getItem('user')

// const user = JSON.parse(userJSON)
// console.log(`${user.name} is ${user.age} today !`)




const renderNotes = function(notes, filters){
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });
  document.querySelector("#notes").innerHTML = "";
//changing the filter to check length of title then if not display unnamed Notes
  filteredNotes.forEach((note) => {
    const noteElement = document.createElement("p");
    if(note.title.length > 0){
      noteElement.textContent = note.title;

    } else {
      noteElement.textContent = "Unnamed Notes"
    }
    document.querySelector("#notes").appendChild(noteElement);
  });
};

renderNotes(notes, filters);


//pushing the new data into the array
document.querySelector("#post_note").addEventListener("click", (e) => {
 notes.push({
   title:'',
   body:''
 })
 localStorage.setItem('notes',JSON.stringify(notes) )
 renderNotes(notes,filters)
});



document.querySelector("#search-text").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});


document.querySelector("#for-fun").addEventListener("change", (e) => {
  console.log(e.target.checked)
});

document.querySelector("#filter-by").addEventListener("change", (e) => {
  console.log(e.target.value)
});



//Query and remove

// const p = document.querySelector('p')
// p.remove()

//Query all and remove
// const ps = document.querySelectorAll('p')
// ps.forEach((par)=>{
//     par.textContent = "*****"
// // par.remove()
// })

//Add a new element
// const newP = document.createElement('p')

// newP.textContent = "This is a new element from JS"

// document.querySelector('body').appendChild(newP)

//Update context