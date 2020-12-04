//DOM - Document Object Model
const notes = [
  { title: "javascript", body: "arrays" },
  { title: "react", body: "hooks" },
  { title: "node", body: "server" },
];

document.querySelector("#post_note").addEventListener("click", (e) => {
  console.log('The button was clicked')
});

document.querySelector('#remove_notes').addEventListener('click',()=>{
  document.querySelectorAll('.note').forEach((note) => {
    note.remove()
  })
})



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
