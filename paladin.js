class Paladin extends Character {
  constructor(hp = 16, dmg = 3, mana = 160, character = 'Paladin', specialAttack) {
    super(hp, dmg, mana, character, specialAttack);
    this.name = 'Ulder'
  }

  ultimate() {
    if (this.specialAttack === false) {
      this.hp += 5
      this.mana -= 40
      this.dmg = 4
      this.specialAttack = true;
    }
  }

  breakSpecialAttack() {
    this.dmg = 3;
    this.specialAttack = false;
  }
}

