const par = document.querySelectorAll("p");
// console.log(par);

//This allows me to remove an element tag based on the context of it
//The forEach combined with includes goes through the tags looking for the string I passed into it 

par.forEach((p) => {
  if (p.textContent.includes("One")) {
    p.remove();
  }
});


