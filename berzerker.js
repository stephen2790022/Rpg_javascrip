class Berzerker extends Character {
  constructor(hp = 8, dmg = 4, mana = 0, character = 'Berzerker', specialAttack ) {
    super(hp, dmg, mana, character, specialAttack);
    this.name = 'Draven'
  }
  
  ultimate() {
    this.dmg += 1
    this.hp -= 1;
  }
}

  