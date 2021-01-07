class Turn {
  constructor(character, go) {
    this.character = character;
    this.go = go;
    this.newTurn = this.startTurn();
  }

  startTurn() {
    this.character = this.character.filter(x => x.hp > 0)
    this.character.forEach(element => {
      console.log(`Au tour de ${element.name}`);

      let p = this.character.filter(player => player !== element);
      p.map(player => console.log(`${p.indexOf(player) + 1} ${player.name}`))
      const whoAttack = p[parseInt(prompt("")) - 1].name

      switch (whoAttack) {
        case 'Ulder':
          let ulder = this.character.find(x => x.name === 'Ulder')
          const attack = prompt('1- attaque basique 2 - attaque special')
          if (attack == 2) {
            if (element.mana <= 0) {
              console.log("Vous n'avez pas assé de mana Lancement de l'attaque basique")
              element.dealDamage(ulder);
              console.log(element)
              console.log(ulder)
              break;
            }
            element.ultimate();
            if (element.specialAttack === "firstStep") {
              console.log('Carl disparait à la boulangerie')
              break;
            } else if (element.specialAttack === "secondStep") {
              element.dealDamage(ulder);
              console.log(element)
              console.log(ulder)
              break;
            } else {
              element.dealDamage(ulder);
              console.log(element)
              console.log(ulder)
            }
            break;
          } else if (attack == 1) {
            element.dealDamage(ulder);
            console.log(element)
            console.log(ulder)
            break;
          }
        case 'Grace':
          let grace = this.character.find(x => x.name === 'Grace')
          const attack2 = prompt('1- attaque basique 2 - attaque special')
          if (attack2 == 2) {
            if (element.mana <= 0) {
              console.log("Vous n'avez pas assé de mana Lancement de l'attaque basique")
              element.dealDamage(grace);
              console.log(element)
              console.log(grace)
              break;
            }
            element.ultimate();
            if (element.specialAttack === "firstStep") {
              console.log('Carl disparait à la boulangerie')
              break;
            } else if (element.specialAttack === "secondStep") {
              element.dealDamage(grace);
              console.log(element)
              console.log(grace)
              break;
            } else {
              element.dealDamage(grace);
              console.log(element)
              console.log(grace)
            }
            break;
          } else if (attack2 == 1) {
            element.dealDamage(grace);
            console.log(element)
            console.log(grace)
            break;
          }
        case 'Moana':
          let moana = this.character.find(x => x.name === 'Moana')
          const attack3 = prompt('1- attaque basique 2 - attaque special')
          if (attack3 == 2) {
            if (element.mana <= 0) {
              console.log("Vous n'avez pas assé de mana Lancement de l'attaque basique")
              element.dealDamage(moana);
              console.log(element)
              console.log(moana)
              break;
            }
            element.ultimate();
            if (element.specialAttack === "firstStep") {
              console.log('Carl disparait à la boulangerie')
              break;
            } else if (element.specialAttack === "secondStep") {
              element.dealDamage(moana);
              console.log(element)
              console.log(moana)
              break;
            } else {
              element.dealDamage(moana);
              console.log(element)
              console.log(moana)
            }
          } else if (attack3 == 1) {
            element.dealDamage(moana);
            console.log(element)
            console.log(moana)
            break;
          }
        case 'Draven':
          let draven = this.character.find(x => x.name === 'Draven')
          const attack4 = prompt('1- attaque basique 2 - attaque special')
          if (attack4 == 2) {
            if (element.mana <= 0) {
              console.log("Vous n'avez pas assé de mana Lancement de l'attaque basique")
              element.dealDamage(draven);
              break;
            }
            element.ultimate();
            if (element.specialAttack === "firstStep") {
              console.log('Carl disparait à la boulangerie')
              break;
            } else if (element.specialAttack === "secondStep") {
              element.dealDamage(draven);
              console.log(element)
              console.log(draven)
              break;
            }
            element.dealDamage(draven);
            console.log(element)
            console.log(draven)
            break;
          } else if (attack4 == 1) {
            element.dealDamage(draven);
            console.log(element)
            console.log(draven)
            break;
          }
        case 'Carl':
          let carl = this.character.find(x => x.name === 'Carl')
          const attack5 = prompt('1- attaque basique 2 - attaque special')
          if (attack5 == 2) {
            if (element.mana <= 0) {
              console.log("Vous n'avez pas assé de mana Lancement de l'attaque basique")
              element.dealDamage(carl);
              break;
            }
            element.ultimate();

            element.dealDamage(carl);
            console.log(element)
            console.log(carl)
            break;
          } else if (attack5 == 1) {
            element.dealDamage(carl);
            console.log(element)
            console.log(carl)
            break;
          }
      }
      console.log('**************************')


    })
    this.character.forEach(element => {
      if (element.specialAttack === true) element.breakSpecialAttack();
      if (element.specialAttack === "secondStep") element.breakSpecialAttack();
      if (element.specialAttack === "firstStep") element.specialAttack = "secondStep";
    })
    this.go.newTurn();
  }
}