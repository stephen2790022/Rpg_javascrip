class Game {
  constructor() {
    this.turnLeft = 11;
    this.character = [new Paladin(), new Fighter(), new Monk(), new Berzerker(), new Assassin()];
    console.log("welcome in the game")
    //prompt("appuyer sur une touche pour lancer le jeu")
    this.go = this.newTurn();
  }


  newTurn() {
    this.turnLeft--;
    if (this.turnLeft === 0 || this.character.length === 1) {
      console.log("Le jeu est terminé !");
      console.log(`${this.character.forEach(winer => winer.name)}`)
    } else {
      console.log(`Tour ${11 - this.turnLeft}`)
      new Turn(this.character, this);

    }
  }
}

