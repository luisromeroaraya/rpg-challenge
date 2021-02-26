// Use this script to generate your character //
function Person(name, race, item) {
    this.name = name;
    this.race = race;
    this.item = item;
    this.currentHealth = 100;
    this.maxHealth = 100;
    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;

    this.heal = function(playerID, fixedHP) {
        if (fixedHP > 0) {
            this.healPoints = fixedHP;
        }
        else {
            this.healPoints = Math.floor(Math.random() * (this.maxHealing - this.min) + this.min);
        }
        this.currentHealth = this.currentHealth + this.healPoints;
        if (this.currentHealth > this.maxHealth) {
            this.healPoints = this.maxHealth - this.currentHealth + this.healPoints;
            this.currentHealth = this.maxHealth;
        }
        var HPbar = document.getElementById(playerID+"HP");
        var HPbarDisplay = document.getElementById(playerID+"HPDisplay");
        HPbar.value = this.currentHealth;
        HPbarDisplay.innerHTML = "HP: "+ HPbar.value + "/" + HPbar.max;
    };

    this.damage = function() {
        var damagePoints = Math.floor(Math.random() * (this.maxDamage - this.min) + this.min);
        return damagePoints;
    };

    this.totalDamage = this.damage();

    this.attack = function(playerID, player) {
        this.totalDamage = this.damage();
        if (player.race == "Human") {
            this.totalDamage = Math.floor(this.totalDamage * 0.8);
        }
        if (player.race == "Elf" && success()) {
            if (player == hero) { hero.totalDamage = this.totalDamage; }
            else if (player == enemy) { enemy.totalDamage = this.totalDamage; }
            this.totalDamage = 0;
        }
        if (player.item == "Boots" && success()) {
            this.totalDamage = 0;
        }
        player.currentHealth = player.currentHealth - this.totalDamage;
        if (player.currentHealth < 0) {
            this.totalDamage = player.currentHealth + this.totalDamage ;
            player.currentHealth = 0;
        }
        var HPbar = document.getElementById(playerID + "HP");
        var HPbarDisplay = document.getElementById(playerID + "HPDisplay")
        HPbar.value = player.currentHealth;
        HPbarDisplay.innerHTML = "HP: "+ HPbar.value + "/" + HPbar.max;
    }

    this.displayChar = function() {
        return console.log(`I am ${this.name} the ${this.race}! I wield a ${this.item} and my total health points are ${this.maxHealth}`);
    };
}

// HANDLE RACE BONUS //
raceBonus = (person) => {
    switch(person.race) {
        case "Orc":
            person.maxHealth = person.maxHealth * 1.4;
            break;
    }
}

// HANDLE IETM BONUS //
itemBonus = (person) => {
    switch(person.item) {
        case "Staff":
            person.maxHealing = person.maxHealing * 1.2;
            break;
        case "Sword":
            person.maxDamage = person.maxDamage * 1.3;
            break;
      }
}