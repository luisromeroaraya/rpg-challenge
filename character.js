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
            this.currentHealth = fixedHP;
        }
        else {
            this.healPoints = Math.floor(Math.random() * (this.maxHealing - this.min) + this.min);
            this.currentHealth = this.currentHealth + this.healPoints;
        }
        if (this.currentHealth > 100) {
            this.healPoints = this.maxHealth - this.currentHealth + this.healPoints;
            this.currentHealth = 100;
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

    this.attack = function(enemyID, enemy) {
        this.totalDamage = this.damage();
        if (enemy.race == "Human") {
            this.totalDamage = Math.floor(this.totalDamage * 0.8);
        }
        if (enemy.item == "Boots" && success()) {
            this.totalDamage = 0;
        }
        enemy.currentHealth = enemy.currentHealth - this.totalDamage;
        if (enemy.currentHealth < 0) {
            enemy.currentHealth = 0;
        }
        var HPbar = document.getElementById(enemyID + "HP");
        var HPbarDisplay = document.getElementById(enemyID + "HPDisplay")
        HPbar.value = enemy.currentHealth;
        HPbarDisplay.innerHTML = "HP: "+ HPbar.value + "/" + HPbar.max;
    }

    this.displayChar = function() {
        return console.log(`I am ${this.name} the ${this.race}! I wield a ${this.item} and my total health points are ${this.maxHealth}`);
    };
}

// MODAL SELECTORS //

// SHOW HERO MODAL SELECTOR ON LOAD PAGE AND SETS RANDOM ENEMY //
window.onload = function() { 
    randomEnemy();
    changeEnemy();
    modalHero.style.display = "block";
}

// SHOW HERO MODAL SELECTOR ON BUTTON CLICK //
heroChoose.addEventListener("click", () => {
    modalHero.style.display = "block";
});

// SET VALUES AFTER CHOOSING HERO //
fightHero.onclick = function() {
    changeHero();
    hero.heal("hero", hero.maxHealth);
    enemy.heal("enemy", enemy.maxHealth);
    logtxt = "Just another day at Wacken Open Air.";
    updateLog();
    logtxt = logtxt + ("<br>" + hero.name + " the " + hero.race + " will fight " + enemy.name + " the " + enemy.race + "!");
    updateLog();
    modalHero.style.display = "none";
 }

 // SHOW ENEMY MODAL SELECTOR ON BUTTON CLICK //
 enemyChoose.addEventListener("click", () => {
    modalEnemy.style.display = "block";
});

// SET VALUES AFTER CHOOSING ENEMY //
fightEnemy.onclick = function() {
    hero.currentHealth = 0;
    heroHP.value = hero.currentHealth;
    heroHP.max = hero.maxHealth;
    hero.heal("hero", hero.maxHealth);
    enemy.heal("enemy", enemy.maxHealth);
    logtxt = "Just another day at Wacken Open Air.";
    updateLog();
    logtxt = logtxt + ("<br>" + hero.name + " the " + hero.race + " will fight " + enemy.name + " the " + enemy.race + "!");
    updateLog();
    modalEnemy.style.display = "none";
 }

// UPDATE HERO VALUES AFTER CHOOSING HERO //
changeHero = () => {
    hero = new Person(heroName.value, heroRace.value, heroItem.value);
    heroNameDisplay.innerHTML = "Hero: " + hero.name;
    heroRaceDisplay.innerHTML = "Race: " + hero.race;
    heroItemDisplay.innerHTML = "Special item: "+ hero.item;
    hero.currentHealth = 0;
    raceBonus(hero);
    itemBonus(hero);
    heroHP.value = hero.currentHealth;
    heroHP.max = hero.maxHealth;
    hero.displayChar();
}

// FIX ENEMY SELECTOR AND UPDATE ENEMY VALUES AFTER CHOOSING ENEMY //
changeEnemy = () => {
    if (enemyName.value == "Varg Vikernes") {
        enemyRace.value = "Human";
        enemyItem.value = "Staff";
        enemyPhoto.src = "assets/enemy-varg-human-rest.jpg";
    }
    else if (enemyName.value == "Abbath") {
        enemyRace.value = "Orc";
        enemyItem.value = "Sword";
        enemyPhoto.src = "assets/enemy-abbath-orc-rest.jpg";
    } 
    else if (enemyName.value == "Aerendir") {
        enemyRace.value = "Elf";
        enemyItem.value = "Bow";
        enemyPhoto.src = "assets/enemy-aerendir-elf-rest.jpg";
    } 
    else if (enemyName.value == "Frost") {
        enemyRace.value = "Vampire";
        enemyItem.value = "Boots";
        enemyPhoto.src = "assets/enemy-frost-vampire-rest.jpg";
    }
    enemy = new Person(enemyName.value, enemyRace.value, enemyItem.value);
    enemyNameDisplay.innerHTML = "Enemy: " + enemy.name;
    enemyRaceDisplay.innerHTML = "Race: " + enemy.race;
    enemyItemDisplay.innerHTML = "Special item: " + enemy.item;
    raceBonus(enemy);
    itemBonus(enemy);
    enemy.currentHealth = 0;
    enemyHP.value = enemy.currentHealth;
    enemyHP.max = enemy.maxHealth;
    enemy.displayChar();
}

randomEnemy = () => {
    var random = Math.floor(Math.random()*4);
    switch(random) {
        case 0:
            enemyName.value = "Varg Vikernes";
            break;
        case 1:
            enemyName.value = "Abbath";
            break;
        case 2:
            enemyName.value = "Aerendir";
            break;
        case 3:
            enemyName.value = "Frost";
            break;
      }
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

// RANDOM FUNCTION OF 30% CHANCE //
success = () => {
    const chance = [true, false, false, false, true, false, false, false, false, true];
    var random = Math.floor(Math.random()*10);
    return chance[random];
}

// RANDOMIZE FIRST ENEMY //
randomEnemy = () => {
    var random = Math.floor(Math.random()*4);
    switch(random) {
        case 0:
            enemyName.value = "Varg Vikernes";
            break;
        case 1:
            enemyName.value = "Abbath";
            break;
        case 2:
            enemyName.value = "Aerendir";
            break;
        case 3:
            enemyName.value = "Frost";
            break;
      }
}

// UPDATE BATTLE LOG //
updateLog = () => {
    log.innerHTML = logtxt;
    logContainer.scrollTop = 9999999;
}

// BATTLE BUTTONS LISTENERS //
heroAttack.addEventListener("click", () => {
    hero.attack("enemy", enemy);
    if (hero.totalDamage == 0) {
        logtxt = logtxt + ("<br>" + hero.name + " attacks " + enemy.name + " but he dodges the attack.");    
    }
    else {
        logtxt = logtxt + ("<br>" + hero.name + " attacks " + enemy.name + " dealing " + hero.totalDamage + " points of damage.");
    }
    updateLog();
    if (hero.item == "Bow" && success()) {
        hero.attack("enemy", enemy);
        if (hero.totalDamage == 0) {
            logtxt = logtxt + ("<br>" + hero.name + " attacks " + enemy.name + " again, but he dodges the attack.");    
        }
        else {
            logtxt = logtxt + ("<br>" + hero.name + " attacks " + enemy.name + " again, dealing "+ hero.totalDamage + " points of damage.");
        }
        updateLog();
    }
});

enemyAttack.addEventListener("click", () => {
    enemy.attack("hero", hero);
    if (enemy.totalDamage == 0) {
        logtxt = logtxt + ("<br>" + enemy.name + " attacks " + hero.name  + " but he dodges the attack.");
    }
    else {
        logtxt = logtxt + ("<br>" + enemy.name + " attacks " + hero.name  + " dealing "+ enemy.totalDamage + " points of damage.");
    }
    updateLog();
    if (enemy.item == "Bow" && success()) {
        enemy.attack("hero", hero);
        if (enemy.totalDamage == 0) {
            logtxt = logtxt + ("<br>" + enemy.name + " attacks " + hero.name  + " again, but he dodges the attack.");
        }
        else {
            logtxt = logtxt + ("<br>" + enemy.name + " attacks " + hero.name  + " again, dealing "+ enemy.totalDamage + " points of damage.");
        }
        updateLog();
    }
});

heroHeal.addEventListener("click", () => {
    hero.heal("hero");
    logtxt = logtxt + ("<br>" + hero.name + " heals himself " + hero.healPoints + " points.");
    updateLog();
});

enemyHeal.addEventListener("click", () => {
    enemy.heal("enemy");
    logtxt = logtxt + ("<br>" + enemy.name + " heals himself " + enemy.healPoints + " points.");
    updateLog();
});

heroYield.addEventListener("click", () => {
    logtxt = logtxt + ("<br>" + hero.name + " surrenders.");
    updateLog();
});

enemyYield.addEventListener("click", () => {
    logtxt = logtxt + ("<br>" + enemy.name + " surrenders.");
    updateLog();
});