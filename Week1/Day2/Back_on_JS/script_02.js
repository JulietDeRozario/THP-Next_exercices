const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// ======= Sors-moi la liste des titres des livres du CDI =======================
let titles = books.map(book => book.title);
console.log("Voici la liste de tous les livres du CDI:");
console.log(titles);

// ========= Est-ce que tous les livres ont été au moins empruntés une fois ? ============
let ordered_books = books.filter(book => book.rented > 0);
if (ordered_books.size == books.size) {
  console.log("Tous les livres ont été empreintés au moins une fois.")
} else {
  console.log("Certains livres n'ont pas encore été empreintés.")
};
// ========= Quel est livre le plus emprunté ? ====================
let rentes = books.map(book => book.rented);
let max = Math.max(...rentes);
let most_rented_book = books.find(book => book.rented == max);
console.log("Le livre le plus empreinté est : " + most_rented_book.title);

// ========= Quel est le livre le moins emprunté ? ===============
let min = Math.min(...rentes);
let less_rented_book = books.find(book => book.rented == min);
console.log("Le livre le moins empreinté est : " + less_rented_book.title);

// ========= Supprime le livre avec l'ID: 133712 ; ======================
console.log("Le livre avec l'ID 133712 est : "+ books.find(book => book.id == 133712).title);
let delete_book = books.filter(book => book.id !== 133712);
console.log("Le livre a bien été supprimé :");
console.log(delete_book);
