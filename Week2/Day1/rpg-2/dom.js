const my_character = document.querySelector('article');
const edit = document.querySelector('#edit');
const submit = document.querySelector('#submit');
const alert = document.querySelector('#alert');
let currentPlayer;
let stats = [];

edit.addEventListener('click', editPlayer);
	
function editPlayer() {
  document.querySelector('#form').style.visibility = "visible";
  submit.onclick = (e) => {
    e.preventDefault()
    // I put all the form values in a hash table
    stats = Array.from(document.querySelectorAll('form input')).reduce((acc, input) => ({...acc, [input.id]: input.value}), {});
    let values = Object.values(stats);
    isThereErrors(values);
  }
}

function isThereErrors(values) {
  let empty_values = [];
  const {hp, dmg, mana, name} = stats;
  // Check if there is no empty value
  for(let value of values){
    if(value == "" ) {
      empty_values.push(value);
    }
  }
  // If there is an empty value, or if a stat is invalid, it will return an error message
  if(empty_values.length > 0 || Math.round(hp) <= 0 || Math.round(hp) > 20 || Math.round(dmg) <= 0 || Math.round(dmg) > 15 || Math.round(mana) < 0 || Math.round(mana) > 200){
    creationErrors(stats);
  }else{
    // If the form entrees are valid, a new character is created
    game.editPlayer(stats);
    console.log("%c *******   Votre personnage a été modifié avec succès!   *******", "color:green;");
    form.style.visibility = "hidden"; // the form disappears
  }
}

function creationErrors({name, hp, dmg, mana}){
  let message = ""
  if(name == "") {
    message = "Vous devez remplir le nom de votre héros"
  }else if(Math.round(hp) <= 0 || Math.round(hp) > 20){
    message = "Les pv de votre héros doivent être compris entre 1 et 20"
  }else if(Math.round(dmg) <= 0 || Math.round(dmg) > 15){
    message = "Les pa de votre héros doivent être compris entre 1 et 15"
  }else if(Math.round(mana) <= 0 || Math.round(mana) > 200) {
    message = "Le mana de votre héros doit être compris entre 0 et 200"
  };
  alert.className = "alert alert-danger alert-dismissible fade show";
  alert.innerHTML = message + "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>";

  let close = document.querySelector('.close');
  close.onclick = () => {
      alert.className="";
      alert.innerHTML=""
  }
}