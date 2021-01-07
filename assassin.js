class Assassin extends Character {
  constructor(hp = 6, dmg = 6, mana = 20, character = 'Assassin', specialAttack ) {
    super(hp, dmg, mana, character, specialAttack);
    this.name = 'Carl'
  }
  
  ultimate() {
    this.mana -= 20
    this.dmg = 7
    this.specialAttack = 'firstStep'
  }

  breakSpecialAttack() {
    this.dmg = 6;
    this.specialAttack = false;
  }

}