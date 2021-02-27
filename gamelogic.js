// MODAL SELECTORS //
// SHOW HERO MODAL SELECTOR ON LOAD PAGE AND SETS RANDOM ENEMY //
window.onload = function() { 
    randomEnemy();
    modalHero.style.display = "block";
}

// SHOW HERO MODAL SELECTOR ON BUTTON CLICK //
heroChoose.addEventListener("click", () => {
    modalHero.style.display = "block";
});

// SET VALUES AFTER CHOOSING HERO //
fightHero.onclick = function() {
    changeHero();
    changeEnemy();
    hero.heal("hero", hero.maxHealth);
    enemy.heal("enemy", enemy.maxHealth);
    logtxt = "Just another day at Wacken Open Air.";
    updateLog();
    logtxt = logtxt + ("<br>" + hero.name + " the " + hero.race + " will fight " + enemy.name + " the " + enemy.race + "!");
    updateLog();
    musicVargWins.pause();
    musicAbbathWins.pause();
    musicAerendirWins.pause();
    musicFrostWins.pause();
    musicHero.volume= 0.2;
    musicHero.play();
    turn = true;
    resetTurn();
    hideClass("enemyWins");
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
    musicHeroWins.pause();
    musicHero.play();
    turn = true;
    resetTurn();
    hideClass("heroWins");
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
        document.body.style.background = "url(assets/background-day.jpg) no-repeat center fixed";
        document.body.style.backgroundSize = "cover";
    }
    else if (enemyName.value == "Abbath") {
        enemyRace.value = "Orc";
        enemyItem.value = "Sword";
        enemyPhoto.src = "assets/enemy-abbath-orc-rest.jpg";
        document.body.style.background = "url(assets/background-day.jpg) no-repeat center fixed";
        document.body.style.backgroundSize = "cover";
    } 
    else if (enemyName.value == "Aerendir") {
        enemyRace.value = "Elf";
        enemyItem.value = "Bow";
        enemyPhoto.src = "assets/enemy-aerendir-elf-rest.jpg";
        document.body.style.background = "url(assets/background-day.jpg) no-repeat center fixed";
        document.body.style.backgroundSize = "cover";
    } 
    else if (enemyName.value == "Frost") {
        enemyRace.value = "Vampire";
        enemyItem.value = "Boots";
        enemyPhoto.src = "assets/enemy-frost-vampire-rest.jpg";
        document.body.style.background = "url(assets/background-night.jpg) no-repeat center fixed";
        document.body.style.backgroundSize = "cover";
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

// CHANGE ENEMY PHOTO WHILE ATTACKING //
enemyPhotoAttack = (enemy) => {
    switch(enemy.name) {
        case "Varg Vikernes":
            enemyPhoto.src = "assets/enemy-varg-human-attack.jpg";
            setTimeout(function(){ enemyPhoto.src = "assets/enemy-varg-human-rest.jpg"; }, 500);
            break;
        case "Abbath":
            enemyPhoto.src = "assets/enemy-abbath-orc-attack.jpg";
            setTimeout(function(){ enemyPhoto.src = "assets/enemy-abbath-orc-rest.jpg"; }, 500);
            break;
        case "Aerendir":
            enemyPhoto.src = "assets/enemy-aerendir-elf-attack.jpg";
            setTimeout(function(){ enemyPhoto.src = "assets/enemy-aerendir-elf-rest.jpg"; }, 500);
            break;
        case "Frost":
            enemyPhoto.src = "assets/enemy-frost-vampire-attack.jpg";
            setTimeout(function(){ enemyPhoto.src = "assets/enemy-frost-vampire-rest.jpg"; }, 500);
            break;
    }
}

// SELECT SOUND FX WHEN ATTACK //
attackSoundPlay = (player) => {
    if (player.item == "Staff") {
        soundStaff.currentTime = 0;
        soundStaff.play();
    }
    else if (player.item == "Bow") {
        soundArrow.currentTime = 0;
        soundArrow.play();
    }
    else if (player.name == "Abbath") {
        soundAxe.currentTime = 0;
        soundAxe.play();
    }
    else if (player.name == "Frost") {
        soundKnife.currentTime = 0;
        soundKnife.play();
    }
    else {
        soundSword.currentTime = 0;
        soundSword.play();
    }
}

// RANDOM FUNCTION OF 30% CHANCE //
success = () => {
    const chance = [true, false, false, false, true, false, false, false, false, true];
    var random = Math.floor(Math.random()*10);
    return chance[random];
}

// CHANGE TURN //
changeTurn = () => {
    turn = !turn;
    resetTurn();
}

// RESET TURN //
resetTurn = () => {
    if (turn) {
        heroAttack.disabled = false;
        heroHeal.disabled = false;
        heroYield.disabled = false;
        heroAttack.style.opacity = 1;
        heroHeal.style.opacity = 1;
        heroYield.style.opacity = 1;
        enemyAttack.disabled = true;
        enemyHeal.disabled = true;
        enemyYield.disabled = true;
        enemyAttack.style.opacity = 0;
        enemyHeal.style.opacity = 0;
        enemyYield.style.opacity = 0;
    }
    else {
        heroAttack.disabled = true;
        heroHeal.disabled = true;
        heroYield.disabled = true;
        heroAttack.style.opacity = 0;
        heroHeal.style.opacity = 0;
        heroYield.style.opacity = 0;
        enemyAttack.disabled = false;
        enemyHeal.disabled = false;
        enemyYield.disabled = false;
        enemyAttack.style.opacity = 1;
        enemyHeal.style.opacity = 1;
        enemyYield.style.opacity = 1;
    }
}

// CHECK ELF BONUS //
checkElf = (player) => {
    if (player.race == "Elf") {
        switch(player) {
            case hero:
                player.totalDamage = Math.floor(player.totalDamage / 2);
                enemy.currentHealth = enemy.currentHealth - player.totalDamage;
                if (enemy.currentHealth < 0) {
                    player.totalDamage = enemy.currentHealth + player.totalDamage;
                    enemy.currentHealth = 0;
                }
                enemyHP.value = enemy.currentHealth;
                enemyHPDisplay.innerHTML = "HP: "+ enemyHP.value + "/" + enemyHP.max;
                logtxt = logtxt + ("<br>" + player.name + " deflects the attack back dealing " + player.totalDamage + " points of damage to " + enemy.name + ".");
                break;
            case enemy:
                player.totalDamage = Math.floor(player.totalDamage / 2);
                hero.currentHealth = hero.currentHealth - hero.totalDamage;
                if (enemy.currentHealth < 0) {
                    hero.totalDamage = hero.currentHealth + player.totalDamage;
                    hero.currentHealth = 0;
                }
                heroHP.value = hero.currentHealth;
                heroHPDisplay.innerHTML = "HP: "+ heroHP.value + "/" + heroHP.max;
                logtxt = logtxt + ("<br>" + player.name + " deflects the attack back dealing " + player.totalDamage + " points of damage to " + hero.name + ".");
                break;
        }
        setTimeout(function() { 
            soundArrow.currentTime = 0;
            soundArrow.play();
        }, 500);
    }
}

// CHECK VAMPIRE BONUS //
checkVampire = (player) => {
    if (player.race == "Vampire") {
        switch(player) {
            case hero:
                player.heal("hero", 10);
                enemy.currentHealth = enemy.currentHealth - player.healPoints;
                if (enemy.currentHealth < 0) {
                    player.HealPoints = enemy.currentHealth + player.healPoints;
                enemy.currentHealth = 0;
                }
                enemyHP.value = enemy.currentHealth;
                enemyHPDisplay.innerHTML = "HP: "+ enemyHP.value + "/" + enemyHP.max;
                logtxt = logtxt + ("<br>" + player.name + " sucks " + player.healPoints + " points of health from " + enemy.name + ".");
            break;
            case enemy:
                player.heal("enemy", 10);
                hero.currentHealth = hero.currentHealth - player.healPoints;
                if (hero.currentHealth < 0) {
                    player.HealPoints = enemy.currentHealth + player.healPoints;
                hero.currentHealth = 0;
                }
                heroHP.value = hero.currentHealth;
                heroHPDisplay.innerHTML = "HP: "+ heroHP.value + "/" + heroHP.max;
                logtxt = logtxt + ("<br>" + player.name + " sucks " + player.healPoints + " points of health from " + hero.name + ".");
            break;
        }
        updateLog();
        soundVampire.currentTime = 0;
        soundVampire.play();
    }
}

// CHECK ENDGAME //
checkEndgame = () => {
    if (hero.currentHealth == 0) {
        switch (enemy.name) {
            case "Varg Vikernes":
                enemyWinsPhoto.src = "assets/enemy-varg-human-wins.gif";
                musicHero.pause();
                musicHero.currentTime = 0;
                musicVargWins.currentTime = 0;
                musicVargWins.play();
            break;
            case "Abbath":
                enemyWinsPhoto.src = "assets/enemy-abbath-orc-wins.gif";
                musicHero.pause();
                musicHero.currentTime = 0;
                musicAbbathWins.currentTime = 0;
                musicAbbathWins.play();
            break;
            case "Aerendir":
                enemyWinsPhoto.src = "assets/enemy-aerendir-elf-wins.gif";
                musicHero.pause();
                musicHero.currentTime = 0;
                musicAerendirWins.currentTime = 0;
                musicAerendirWins.play();
            break;
            case "Frost":
                enemyWinsPhoto.src = "assets/enemy-frost-vampire-wins.gif";
                musicHero.pause();
                musicHero.currentTime = 0;
                musicFrostWins.currentTime = 0;
                musicFrostWins.play();
            break;
        }
        showClass("enemyWins");
        modalHero.style.display = "block";
    }
    else if (enemy.currentHealth == 0) {
        musicHero.pause();
        musicHero.currentTime = 0;
        musicHeroWins.currentTime = 0;
        musicHeroWins.play();
        showClass("heroWins");
        modalEnemy.style.display = "block";
    }
}

// HIDE ALL CLASS ELEMENTS //
hideClass = (classname) => {
    var array = document.getElementsByClassName(classname);
        for (var i=0; i<array.length; i++) {
            array[i].style.display = "none";
        }
}

// SHOW ALL CLASS ELEMENTS //
showClass = (classname) => {
    var array = document.getElementsByClassName(classname);
        for (var i=0; i<array.length; i++) {
            array[i].style.display = "block";
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
        soundDodge.currentTime = 0;
        soundDodge.play();
        checkElf(enemy);
    }
    else {
        logtxt = logtxt + ("<br>" + hero.name + " attacks " + enemy.name + " dealing " + hero.totalDamage + " points of damage.");
        attackSoundPlay(hero);
    }
    updateLog();
    if (hero.item == "Bow" && success()) {
        hero.attack("enemy", enemy);
        if (hero.totalDamage == 0) {
            logtxt = logtxt + ("<br>" + hero.name + " attacks " + enemy.name + " again, but he dodges the attack.");
            soundDodge.currentTime = 0;
            soundDodge.play();
            checkElf(enemy);
        }
        else {
            logtxt = logtxt + ("<br>" + hero.name + " attacks " + enemy.name + " again, dealing "+ hero.totalDamage + " points of damage.");
            attackSoundPlay(hero);
        }
        updateLog();
    }
    changeTurn();
    setTimeout(function(){checkVampire(enemy);},1000);
    checkEndgame();
});

enemyAttack.addEventListener("click", () => {
    enemy.attack("hero", hero);
    enemyPhotoAttack(enemy);
        if (enemy.totalDamage == 0) {
        logtxt = logtxt + ("<br>" + enemy.name + " attacks " + hero.name  + " but he dodges the attack.");
        soundDodge.currentTime = 0;
        soundDodge.play();
        checkElf(hero);
    }
    else {
        logtxt = logtxt + ("<br>" + enemy.name + " attacks " + hero.name  + " dealing "+ enemy.totalDamage + " points of damage.");
        attackSoundPlay(enemy);
    }
    updateLog();
    if (enemy.item == "Bow" && success()) {
        enemy.attack("hero", hero);
        enemyPhotoAttack(enemy);
        if (enemy.totalDamage == 0) {
            logtxt = logtxt + ("<br>" + enemy.name + " attacks " + hero.name  + " again, but he dodges the attack.");
            soundDodge.currentTime = 0;
            soundDodge.play();
            checkElf(hero);
        }
        else {
            logtxt = logtxt + ("<br>" + enemy.name + " attacks " + hero.name  + " again, dealing "+ enemy.totalDamage + " points of damage.");
            attackSoundPlay(enemy);
        }
        updateLog();
    }
    changeTurn();
    setTimeout(function(){checkVampire(hero);},1000);
    checkEndgame();
});

heroHeal.addEventListener("click", () => {
    hero.heal("hero");
    soundHeal.currentTime = 0;
    soundHeal.play();
    logtxt = logtxt + ("<br>" + hero.name + " heals himself " + hero.healPoints + " points.");
    updateLog();
    changeTurn();
    setTimeout(function(){checkVampire(enemy);},1000);
    checkEndgame();
});

enemyHeal.addEventListener("click", () => {
    enemy.heal("enemy");
    soundHeal.currentTime = 0;
    soundHeal.play();
    logtxt = logtxt + ("<br>" + enemy.name + " heals himself " + enemy.healPoints + " points.");
    updateLog();
    changeTurn();
    setTimeout(function(){checkVampire(hero);},1000);
    checkEndgame();
});

heroYield.addEventListener("click", () => {
    logtxt = logtxt + ("<br>" + hero.name + " surrenders.");
    updateLog();
    changeTurn();
    hero.currentHealth = 0;
    checkEndgame();
});

enemyYield.addEventListener("click", () => {
    logtxt = logtxt + ("<br>" + enemy.name + " surrenders.");
    updateLog();
    changeTurn();
    enemy.currentHealth = 0;
    checkEndgame();
});