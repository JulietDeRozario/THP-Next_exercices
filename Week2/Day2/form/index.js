const submit = document.getElementById("submit");
document.querySelectorAll('form input').forEach((input) => {
  input.onclick = () => {
    input.style.border = "none";
    document.getElementsByClassName(`invalid-${input.id}`)[0].remove();
  }
})
let is_there_errors;

submit.onclick = (e) => {
  e.preventDefault();
  const inputs = Array.from(document.querySelectorAll('form input')).reduce((acc, input) => ({...acc, [input.id]: input.value}), {});
  console.log(inputs);
  checkInputs(inputs);
}

const checkInputs = (inputs) => {
  is_there_errors = false;
  const {firstName, lastName, age, email, emailConfirmation, password, passwordConfirmation} = inputs;
  const emailFormat = /^([a-z\d\.-_]+)@([a-z\d-_]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
  Object.keys(inputs).map(key => {
    if(!inputs[key]){
      getErrors(key, "Ce champs ne peut pas être vide.");
    }
  })
  if(firstName.length > 0 && firstName.length < 3){
    getErrors("firstName", "Ce champs doit contenir au moins 3 caractères.");
  }
  if(email.length > 0 && !email.match(emailFormat)){
    getErrors("email", "Le format de l'email est invalide.");
  }
  if(age.length > 0 && Math.round(age) < 18){
    getErrors("age", "Lol t'es mineur, casse-toi !");
  }
  if(passwordConfirmation !== password){
    getErrors("passwordConfirmation", "Vos mots de passe ne concordent pas.");
  }
  if(emailConfirmation !== email ){
    getErrors("emailConfirmation", "Vos emails ne concordent pas.");
  }
  if(password.length > 0 && password.length < 6){
    getErrors("password", "Votre mot de passe doit faire au moins 6 caractères.");
  }
  if(!document.querySelector('#checkBox').checked){
    getErrors("checkBox", "Vous devez accepter les conditions d'utilisation.");
  }
  if(!is_there_errors){
    window.location.replace("success.html");
  }
} 

const getErrors = (key, message) => {
  document.getElementById(key).style.border = "1px solid red";
  document.getElementById(key).insertAdjacentHTML('afterEnd', `
  <div class='invalid invalid-${key}'>
  ${message}
  </div>
  `);
  is_there_errors = true;
}