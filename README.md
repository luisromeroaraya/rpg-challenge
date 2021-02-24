# Challenge: [RPG Challenge](https://github.com/becodeorg/BXL-Swartz-4-27/tree/master/2.The-Hill/1.Javascript/rpg-project)

## Link to [my game](https://luisromeroaraya.github.io/rpg-challenge/)

 **Challenge Parameters**	| **Challenge Details**
--------------------------|-----------------------
 Repository	| `js-rpg`
 Challenge type |	`Consolidation`
 Duration	| `5 days`
 Deadline	| `15/03/2020 09h00`
 Deployment method	| `GitHub pages`
 Group composition	| solo or duo
 Submission's form |	coming soon 

## Rules
1. If something is vague in the README, ask a colleague for help. If you are still doubtful, then you can always request a coach to clarify.
1. Publish the game on Github.
1. Prepare to present the game to the group. (No powerpoints.)

<p><a href="https://www.youtube.com/watch?v=Y4-I0FuG4LM&amp;feature=youtu.be
" rel="nofollow"><img src="https://github.com/becodeorg/BXL-Swartz-4-27/raw/master/2.The-Hill/1.Javascript/rpg-project/resources/becodiante.jpg" alt="Becodiante the great" width="40%" style="max-width:100%;"></a></p>

## Welcome adventurer, monster or whatever you are.
We are reaching the end of the JavaScript course, but no worries: it does not end here. There are so many things to discover, so many things to touch. Don't let it scare you because it is so much fun in the end!

This "last" challenge will test your knowledge about JavaScript. If you're struggling, that's fine. Just don't forget to ask your colleagues for help!

## Who am I?
I am Becodiante The Great, a powerful wizard in search of the strongest JavaScript gurus alive.

## Let...
me take a proper look at you... Aha, I see. You might be the right fit for this challenge! Although you will have to team up with someone.

## Before we begin...
I have given you a magical script that must be used to create your avatar!
OH right... Your instructions. * Coughs *.
You and your colleague have to program a game where you can battle each other. The players can use buttons to define which move he/she will make next. The game shall only end when a player reaches 0 health.

Don't worry I shall guide you and help you on your way.

<details>
<a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/9d4b48f9b5cf54d57f485a8d1eaa1810da3db826af2841a5105737c1bf43c1c8/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6c6f5269744e50794362654b6e74544670322f67697068792e676966"><img src="https://camo.githubusercontent.com/9d4b48f9b5cf54d57f485a8d1eaa1810da3db826af2841a5105737c1bf43c1c8/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6c6f5269744e50794362654b6e74544670322f67697068792e676966" alt="" data-canonical-src="https://media.giphy.com/media/loRitNPyCbeKntTFp2/giphy.gif" style="max-width:100%;"></a>
</details>

## The stats
<details>
<summary>Game example (It does not have to look like this!).</summary>
<p><a target="_blank" rel="noopener noreferrer" href="https://github.com/becodeorg/BXL-Swartz-4-27/raw/master/2.The-Hill/1.Javascript/rpg-project/resources/Image1.jpg"><img src="https://github.com/becodeorg/BXL-Swartz-4-27/raw/master/2.The-Hill/1.Javascript/rpg-project/resources/Image1.jpg" alt="" style="max-width:100%;"></a></p>
</details>
Each calculation should run for one attack. For instance, if I have a bow and decide to attack. I might get lucky and strike twice. If the opponent wears boots, he could dodge the attack twice, once or never.

ITEMS	| Boots	| Staff	| Sword	| Bow
------|-------|-------|-------|-----
------| 30% chance to dodge an attack | 20% increase in healing | 30% more damage | 30% chance to attack twice

RACE | Humans | Orcs | Elves | Vampires
-----|--------|------|-------|---------
-----| 20% less damage taken | 40% more max health | 30% chance to deflect the attack back to the opponent. The attacker takes damage equal to 50% of the original hit. The elf takes no damage. | 10% lifesteal from opponents current health at start of the vampire's turn.
 
**ATTENTION**
In the `character.js` file, you can define what effects will take place on certain events. If the player is an orc and if he/she has boots, the stats will take effect straight on creation.

I also expect you to randomize the healing and attack function. Feel free to edit the script to your likings.

Journey 1 will have more visual related challenges, journey 2 will have more gamelogic related challenges.

## Journey 1 - Player 1
<details>
<summary>Starts here!</summary>
 
### Challenge 1:

Create an HTML page with the following elements included:
- [x] A title.
- [x] An element to display both characters stats (visual, name, item, health...). [Something like a VS screen.](https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/2050964/910/607/m1/fpnw/wm0/sample8-.jpg?1482262310&s=b524ce6f06ee59486cfa7ffa7a78ad99)
- [x] A panel with 6 buttons, 3 for each player (hit, heal & yield. Those are the moves.)
- [x]  A creation panel with inputs & dropdowns to create your character. (For now only name, items and race )
- [x]  A log that will tell you which move the player made.
 
### Challenge 2:

- [x] Use the character.js file and save the inputs inside variables/an object, and use them to initiate new characters for both players.

### Challenge 3:

- [x] Make sure that only the title, VS screen and the input field are visible when creating the characters.

### Challenge 4

- [x] When the characters are created, the creation panel should disappear. After this, the moves & log panel should appear.

### Challenge 5

- [ ] Display the health bar of both players this should work real-time. Make sure it has a decrease/increase animation Make use of max-health and currentHealth.

<details>
<summary>Finished?</summary>
Great! Now proceed.
<p><a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/5e82b81c57cb33f325c970cfff08cacd3244c2ea473804795bc2924083952ac9/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f327753434738586631734c6c7779417755562f67697068792e676966"><img src="https://camo.githubusercontent.com/5e82b81c57cb33f325c970cfff08cacd3244c2ea473804795bc2924083952ac9/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f327753434738586631734c6c7779417755562f67697068792e676966" alt="" data-canonical-src="https://media.giphy.com/media/2wSCG8Xf1sLlwyAwUV/giphy.gif" style="max-width:100%;"></a></p>
</details>
</details>

## Journey 2 - Player 2
<details>
<summary>Starts here!</summary>

### Challenge 1:

- [ ] Create a js file named `gamelogic.js`. You are in charge of writing the game itself. Take a look at the `character.js` file you will have to use it.

**Note:** You will have to work with this file as well. Its up to you to find out what belongs where.

### Challenge 2:

- [ ] Initiate a temporary character. We will use this to test our game logic.

### Challenge 3:

- [ ] Write a function that will handle the races. This will only run once.

### Challenge 4:

- [ ] Write a function that will handle the items. This will be called everytime we make a move.

#### Challenge 5:

- [ ] Make the functions work with the character. See if the stats change on creation.

#### Challenge 6:

- [ ] Lower the health of your object and create a healing function that will use the `heal` function. (character.js) Make it so the function uses a random number between the minHealing and maxHealing.

**Note:** The `currentHealth` should NEVER go above the `maxHealth`

<details>
<summary>Finished?</summary>
Great! Now proceed.
<p><a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/5e82b81c57cb33f325c970cfff08cacd3244c2ea473804795bc2924083952ac9/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f327753434738586631734c6c7779417755562f67697068792e676966"><img src="https://camo.githubusercontent.com/5e82b81c57cb33f325c970cfff08cacd3244c2ea473804795bc2924083952ac9/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f327753434738586631734c6c7779417755562f67697068792e676966" alt="" data-canonical-src="https://media.giphy.com/media/2wSCG8Xf1sLlwyAwUV/giphy.gif" style="max-width:100%;"></a></p>
</details>
</details>

## The Boss
We are almost finished. There are still some things to tackle.

Here is a list of what you should work out:
- [ ] Combine the code + html for some 'working result'.
- [ ] Inputs should generate the characters stats.
- [ ] Work out the attack function (Almost the same as heal but it has to hit the enemy).
- [ ] When a player loses, display a victory message & a loose message for each player.
- [ ] At the end of the game, you should be able to restart the game to create a new character.
 
## The final encounter
- [ ] Style this arena to your taste.
- [ ] Add extra functions. (Keep it appropriate.)
- [ ] Prepare to present your work.

<details>
<summary>Well done! Now challenge people!</summary>
<p><a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/ca78cd41b68bfdf2fc2d47140e0d0604ef148488c9618e2d59d76d430f774541/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f726a735a6649725830424734452f67697068792e676966"><img src="https://camo.githubusercontent.com/ca78cd41b68bfdf2fc2d47140e0d0604ef148488c9618e2d59d76d430f774541/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f726a735a6649725830424734452f67697068792e676966" alt="" data-canonical-src="https://media.giphy.com/media/rjsZfIrX0BG4E/giphy.gif" style="max-width:100%;"></a></p>
</details>

## Goals
- [ ] Understand DOM manipulation.
- [ ] Understand forms input.
- [ ] Understand JSON.
- [ ] Understand basic javascript.
 Have extra fun!
