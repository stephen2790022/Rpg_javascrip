class Fighter extends Character {
  constructor(hp = 12, dmg = 4, mana = 40, character = 'Fighter', specialAttack) {
    super(hp, dmg, mana, character, specialAttack);
    this.name = 'Grace'
  }

  ultimate() {
    if (this.specialAttack === false) {
      this.mana -= 20
      this.dmg = 5
      this.specialAttack = true;
    }
  }

  breakSpecialAttack() {
    this.dmg = 4;
    this.specialAttack = false;
  }
}
