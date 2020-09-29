const victory_numbers = [Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1)];
let checkLoto = [];
let submit = document.getElementById("submit");
let alert = document.getElementById("alert");
let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

submit.onclick = function() {
  checkLoto = Array.from(document.querySelectorAll('form input')).reduce((acc, input) => ({...acc, [input.id]: input.value}), {});
  console.log(checkLoto);
  let values = Object.values(checkLoto);
  let empty_values = [];
  values.map(function is_there_errors(value) {
      if(value == "" || !checkLoto["email"].match(mailformat)) {
        empty_values.push(value);
        error();
      };
  });
  if(empty_values.length == 0 && checkLoto["email"].match(mailformat)) {
    is_there_a_winner();
  };
};

function error() {
  let message = ""
  if(checkLoto["first_name"] == "") {
    message = "Vous devez remplir votre prénom"
  }else if(checkLoto["last_name"]== ""){
    message = "Vous devez remplir votre nom de famille"
  }else if(checkLoto["email"] == ""){
    message = "Vous devez inscrire votre email"
  }else if(!checkLoto["email"].match(mailformat)) {
    message = "Veuillez entrer un email valide"
  };
  alert.className = "alert alert-danger alert-dismissible fade show";
  alert.innerHTML = message + "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>";
  
  let close = document.querySelector('.close');
  close.onclick = function() {
    alert.className="";
    alert.innerHTML=""
  };
  return true;
};

function is_there_a_winner() {
  let message = ""
  let player_numbers = []
  player_numbers.push(checkLoto["first_number"]);
  player_numbers.push(checkLoto["second_number"]);
  player_numbers.push(checkLoto["third_number"]);
  player_numbers.push(checkLoto["forth_number"]);
  player_numbers.push(checkLoto["fifth_number"]);
  player_numbers.push(checkLoto["sixth_number"]);
  if(player_numbers.toString() == victory_numbers.toString()){
    alert.className = "alert alert-success alert-dismissible fade show";
    message = "Félicitations, vous avez gagné 1 million !";
  }else {
    alert.className = "alert alert-danger alert-dismissible fade show";
    message = `Dommage, vous n'avez pas gagné! Les nombres gagnants sont: ${victory_numbers}`;
  }

  alert.innerHTML = message + "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>";
  
  let close = document.querySelector('.close');
  close.onclick = function() {
    alert.className="";
    alert.innerHTML=""
  };
}

