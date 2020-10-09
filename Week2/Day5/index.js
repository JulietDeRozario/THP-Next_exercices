let all_questions = new Array;
let incorrect_answers = new Array;
let responses = new Array;
let correct_answers = new Array;
let themes = new Array;
let user_answers = new Array;
let current_question = 0;
let current_player = new String;

const setQuestions = (event) => {
  event.preventDefault();
  anime({
    targets: '.play-form',
    translateX: [0, 500],
    easing: 'easeOutExpo',
    duration: 1500,
    opacity: [1, 0],
  })
  current_player = document.querySelector('#pseudo').value;
  let nb_questions = document.querySelector('.custom-select').value;
  fetch(`https://opentdb.com/api.php?amount=${nb_questions}`)
  .then((response) => response.json())
  .then((data) => collectQuestions(data.results))
  .catch((error) => console.error(`error: ${error}`))
}

const collectQuestions = (data) => {
  data.forEach(element => {
    all_questions.push(element.question);
    correct_answers.push(element.correct_answer);
    incorrect_answers.push(element.incorrect_answers);
    themes.push(element.category);
  });
  showQuestions();
}

const showQuestions = () => {
  let card = document.querySelector('.question-card .card-body');
  card.innerHTML = `
  <h3>Question n°${current_question + 1}</h3>
  <h4>Thème: ${themes[current_question]}</h4>
  <h6>${all_questions[current_question]}</h6>
  <select class="custom-select mr-sm-2" id="question-select"></select>
  `;
  console.log(incorrect_answers);
  let answers = incorrect_answers[current_question];
  answers.push(correct_answers[current_question]);
  answers = answers.sort(function(a, b){return 0.5 - Math.random()});
  answers.forEach((answer) => {
    console.log(document.getElementById('#question-select'))
    document.querySelector('#question-select').innerHTML += `
    <option value="${answer}">${answer}</option>
    `;
  });
  card.innerHTML += `
  <div class="col-auto my-1 mt-3">
    <button type="submit" onclick="nextQuestion(event)" class="btn btn-primary btn-block">Suivant</button>
  </div>
  `;
  anime({
    targets: '.question-card',
    opacity: [0, 1],
    translateX: [-500, 0],
    easing: 'easeOutExpo',
    duration: 1500,
  })
}

const nextQuestion = (event) => {
  if(current_question  === all_questions.length - 1){
    anime({
      targets: '.question-card',
      translateX: [0, 500],
      easing: 'easeOutExpo',
      duration: 1500,
      opacity: [1, 0],
    })
    showResults();
  }else {
    event.preventDefault();
    user_answers.push(document.querySelector('#question-select').value);
    current_question += 1;
    showQuestions();
  }
}

const showResults = () => {
  console.log("fini !");
  let card = document.querySelector('.question-card .card-body');
  let result = 0;
  correct_answers.forEach((answer) => {
    if(answer === user_answers[correct_answers.indexOf(answer)]){
      result += 1;
    }
  })
  card.innerHTML = `
  <h3>Résultat:</h3>
  <h4>${result}/${all_questions.length}</h4>
  `;
  all_questions.forEach((question) => {
    if(correct_answers[all_questions.indexOf(question)] === user_answers[all_questions.indexOf(question)]){
      card.innerHTML += `
        <h6>Question n°${all_questions.indexOf(question) + 1}: bonne réponse</h6>
      `;
    }else {
      card.innerHTML += `
      <h6>Question n°${all_questions.indexOf(question) + 1}: mauvaise réponse, la bonne réponse était "${correct_answers[all_questions.indexOf(question)]}"</h6>
    `;
    }
  })
  card.innerHTML += `
  <div class="col-auto my-1 mt-3">
    <button type="submit" onclick="location.reload()" class="btn btn-primary btn-block">Rejouer</button>
  </div>
  <div class="col-auto my-1 mt-3">
    <button type="submit" onclick="getClassment()" class="btn btn-secondary btn-block">Classement</button>
  </div>
  `;
  anime({
    targets: '.question-card',
    opacity: [0, 1],
    translateX: [-500, 0],
    easing: 'easeOutExpo',
    duration: 1500,
  })
  localStorage.setItem(current_player, [result, all_questions.length]);
}

const getClassment = () => {
  let card = document.querySelector('.question-card .card-body');
  card.innerHTML = `
  <h3>Tous les résultats non classés paske flemme (ntm)</h3>
  `;
  for (let i = 0; i < localStorage.length; i++){
    let score = localStorage.getItem(localStorage.key(i));
    card.innerHTML += `
      <p>-${localStorage.key(i)}: ${score[0]}/${score[2]};</p>
    `;
  }
  card.innerHTML += `
  <div class="col-auto my-1 mt-3">
    <button type="submit" onclick="location.reload()" class="btn btn-primary btn-block">Rejouer</button>
  </div>
  `;
}

