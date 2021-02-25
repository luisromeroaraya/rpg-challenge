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
        if (fixedHP >= 100) {
            var healPoints = fixedHP;
        }
        else {
            var healPoints = Math.floor(Math.random() * (this.maxHealing - this.min) + this.min);
        }
        var targetHP = this.currentHealth + healPoints;
        var HPbar = document.getElementById(playerID+"HP");
        var HPbarDisplay = document.getElementById(playerID+"HPDisplay");
        var time = healPoints/2;
        const loading = () => {
            this.currentHealth = this.currentHealth + 1;
            HPbar.value = this.currentHealth;
            HPbarDisplay.innerHTML = "HP: "+ HPbar.value + "/" + HPbar.max;
            if (this.currentHealth == HPbar.max) {
                clearInterval(animate);
            }
            if (this.currentHealth == targetHP) {
                 clearInterval(animate);
             }
        };
        const animate = setInterval(() => loading (), time);
    };

    this.damage = function() {
        var damagePoints = Math.floor(Math.random() * (this.maxDamage - this.min) + this.min);
        return damagePoints;
    };

    this.totalDamage = this.damage();

    this.attack = function(enemyID, enemy) {
        this.totalDamage = this.damage();
        var targetHP = enemy.currentHealth - this.totalDamage;
        var HPbar = document.getElementById(enemyID + "HP");
        var HPbarDisplay = document.getElementById(enemyID + "HPDisplay");
        var time = this.totalDamage/2;
        const loading = () => {
            enemy.currentHealth = enemy.currentHealth - 1;
            HPbar.value = enemy.currentHealth;
            HPbarDisplay.innerHTML = "HP: "+ HPbar.value + "/" + HPbar.max;
            if (enemy.currentHealth == 0) {
                clearInterval(animate);
            }
            if (enemy.currentHealth == targetHP) {
                clearInterval(animate);
            }
        };
        const animate = setInterval(() => loading (), time);

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
    hero = new Person(heroName.value, heroRace.value, heroItem.value);
    hero.displayChar();
    heroNameDisplay.innerHTML = "Hero: " + hero.name;
    heroRaceDisplay.innerHTML = "Race: " + hero.race;
    heroItemDisplay.innerHTML = "Special item: "+ hero.item;
    hero.currentHealth = 0;
    heroHP.value = hero.currentHealth;
    heroHP.max = hero.maxHealth;
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

// FIX ENEMY SELECTOR VALUES AFTER CHOOSING ENEMY //
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
    enemy.displayChar();
    enemyNameDisplay.innerHTML = "Enemy: " + enemy.name;
    enemyRaceDisplay.innerHTML = "Race: " + enemy.race;
    enemyItemDisplay.innerHTML = "Special item: " + enemy.item;
    enemy.currentHealth = 0;
    enemyHP.value = enemy.currentHealth;
    enemyHP.max = enemy.maxHealth;
}

// RANDOMIZE FIRST ENEMY //
randomEnemy = () => {
    var random = Math.floor(Math.random()*4);
    console.log(random);
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

// BUTTON HANDLERS //
heroAttack.addEventListener("click", () => {
    hero.attack("enemy", enemy);
    logtxt = logtxt + ("<br>" + hero.name + " attacks " + enemy.name + " dealing "+ hero.totalDamage + " points of damage.");
    updateLog();
});

enemyAttack.addEventListener("click", () => {
    enemy.attack("hero", hero);
    logtxt = logtxt + ("<br>" + enemy.name + " attacks " + hero.name  + " dealing "+ enemy.totalDamage + " points of damage.");
    updateLog();
});

heroHeal.addEventListener("click", () => {
    hero.heal("hero");
    logtxt = logtxt + ("<br>" + hero.name + " heals himself.");
    updateLog();
});

enemyHeal.addEventListener("click", () => {
    enemy.heal("enemy");
    logtxt = logtxt + ("<br>" + enemy.name + " heals himself.");
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