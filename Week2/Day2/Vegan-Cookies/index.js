function Recipe (title, steps) {
  let recipe = Object.create(Recipe.prototype);
  recipe.title = title;
  recipe.steps = steps;

  return recipe;
}

Recipe.prototype.cook = function() {
  let instructions = new String;
  document.getElementById("title").innerHTML = this.title;
  this.steps.map(step => {
    if(step[step.length - 1] === "dry"){
      instructions += `<br>-Add ${step[0]} ${step[1]} of ${step[2]} to the bowl;`;
    }else if(step[step.length - 1] === "wet"){
      instructions += `<br>-For ${step[0]} ${step[1]} of ${step[2]} to the bowl;`;
    }
    if(step === this.steps[this.steps.length - 2]){
      instructions += "<br>" + step ;

    }
    if(step === this.steps[this.steps.length - 1]){
      instructions += `<br>Then, heat ${step[0]} minutes in the oven at ${step[1]} degrees.`;
    }
  })
  document.getElementById("instructions").innerHTML = instructions
}


const steps = [
  [1, "cup", "white flour", "dry"],
  [0.5, "tsp", "baking soda", "wet"],
  [0.25, "tsp", "salt", "dry"],
  [0.25, "cup", "sugar", "dry"],
  [0.25, "cup", "brow sugar", "dry"],
  [0.25, "tbsp", "soy milk", "wet"],
  [0.25, "tbsp", "oil", "wet"],
  [0.25, "tsp", "pure vanilla extract", "dry"],
  ["Form into one big ball, then either refrigerate at least 2 hours or freeze until the dough is cold. Once dough is chilled, preheat oven to 325 F. Form dough balls, and place on a greased baking tray, leaving enough room between cookies for them to spread."],
  [325, 10]
]
// tsp = cuillère à café, tbsp = cuillère à soupe

/*Si l'ingrédient est dry, on ajoutera "Add X (number of unity) Y (unity) of Z (ingredient) to the bowl" dans notre string.
S'il est wet, on ajoutera "For X (number of unity) Y (unity) of Z (ingredient) to the bowl" dans notre string.
Une fois qu'on détecte que nous ne sommes plus en train de traiter un ingrédient, c'est l'étape de la description, alors on l'ajoute à notre string.
La dernière étape est toujours le passage au four, on renverra alors dans la string : "Then, heat X minutes in the oven at Y degrees." */

const veganCookies = Recipe('Cookies vegan', steps);