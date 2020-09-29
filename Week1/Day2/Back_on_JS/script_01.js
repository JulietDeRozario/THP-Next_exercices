const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// ============ Sors une array qui ne contient que le prénom et le nom des entrepreneurs =================
const names= entrepreneurs.map(entrepreneur => entrepreneur.first + " " + entrepreneur.last);
console.log("Voici le tableau contenant les noms des entrepreneurs :")
console.log(names);


// === Pour chaque entrepreneur, remplace la date de naissance par l'âge de l'entrepreneur qu'il aurait aujourd'hui =======
const new_array = entrepreneurs.map(entrepreneur => {
  entrepreneur["age"] = 2020 - entrepreneur.year;
  delete entrepreneur.year;
  return entrepreneur
});
console.log("Voici le tableau où l'année de naissance a été remlacée par l'âge des entrepreneurs :")
console.log(new_array);


// ======= Les clés first et last manquent de lisibilité, remplace-les par firstName et lastName ==========
const new_keys = entrepreneurs.map(entrepreneur => {
  let obj = {}
  obj["firstName"] = entrepreneur.first;
  obj["lastName"] = entrepreneur.last;
  obj["age"] = entrepreneur.age;
  return obj
});
console.log("Voici le tableau avec les clés first et last remplacées: ")
console.log(new_keys);

// ======= Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 =================
const born_in_seventies = entrepreneurs.filter(entrepreneur => 39 < entrepreneur.age && entrepreneur.age < 51 );
console.log("Voici la liste des entrepreneurs nés dans les années 70: ");
console.log(born_in_seventies);