let names =  [
"Bryan", "Celina", "lance", "Andrea", "Jonathan",
"Tyler", "Chas", "Dustin", "Pete", "Tom",
"Will", "Daemon", "Jada", "Parker"

];
const addName = () => {
   let nameCtrl = document.getElementById("newName");
   let name = nameCtrl.value;
   names.push(name);
   loadDiv();
}

const loadDiv = () => {
     let divCtrl = document.getElementById("ps");
     // the line below is being used to reset the text to nothing. 
     // right now it's set to "here is some text"
     //  that will be replaced with the collection of names 
    divCtrl.innerHTML = "";
     for(let name of names) {
         let p = `<p>${name}</p>`;
         divCtrl.innerHTML += p;
     }
}