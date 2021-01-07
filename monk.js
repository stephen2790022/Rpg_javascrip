class Monk extends Character {
  constructor(hp = 8, dmg = 2, mana = 200, character = 'Moine', specialAttack) {
    super(hp, dmg, mana, character, specialAttack);
    this.name = 'Moana'
  }

  ultimate() {
    this.hp += 8
    this.mana -= 25
  }
}
