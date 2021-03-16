//DOM - Document Object Model
const notes = [
  { title: "javascript", body: "arrays" },

  { title: "react", body: "hooks" },

  { title: "node", body: "server" },
];

const filters = {
  searchText: "",
};

const renderNotes = (notes, filters) => {
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });
  document.querySelector("#notes").innerHTML = "";

  filteredNotes.forEach((note) => {
    const noteElement = document.createElement("p");
    noteElement.textContent = note.title;
    document.querySelector("#notes").appendChild(noteElement);
  });
};

renderNotes(notes, filters);

document.querySelector("#post_note").addEventListener("click", (e) => {
  e.target.textContent = "The button was clicked";
});



document.querySelector("#search-text").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});


document.querySelector("#for-fun").addEventListener("change", (e) => {
  console.log(e.target.checked)
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