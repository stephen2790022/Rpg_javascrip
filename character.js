class Character {
  constructor(hp, dmg, mana, character, specialAttack) {
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.character = character;
    this.specialAttack = false;
  }
  takeDamage(dmg) {
    this.hp -= dmg;
  }

  dealDamage(victim) {
    if (victim.name === "Grace" && victim.specialAttack === true) {
      victim.hp -= 2;
    } else {
      victim.takeDamage(this.dmg);

    }
  }

};
