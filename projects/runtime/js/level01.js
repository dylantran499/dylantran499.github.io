var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY - 120}, //creates sawblades at x and y
                { "type": "sawblade", "x": 2000, "y": groundY - 20},
                { "type": "sawblade", "x": 900, "y": groundY - 120},

                { "type": "enemy", "x": 400, "y": groundY - 140},//creates zombies at x and y
                { "type": "enemy", "x": 1000, "y": groundY - 140},
                { "type": "enemy", "x": 1500, "y": groundY - 140},

                { "type": "enemy2", "x": 2000, "y": groundY - 140},//creates skeletons at x and y
                { "type": "enemy2", "x": 2900, "y": groundY - 140},
                { "type": "enemy2", "x": 2500, "y": groundY - 140},

                { "type": "reward", "x": 700, "y": groundY - 50},//creates diamonds at x and y
                { "type": "reward", "x": 2000, "y": groundY - 50},
                { "type": "reward", "x": 1800, "y": groundY - 50},
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        function createSawBlade(x, y) {
            var hitZoneSize = 25; //creates size of hitzone
        var damageFromObstacle = 10; // sets the damage of the obstacle
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); // creates the hitzone and stores it in this variable
        sawBladeHitZone.x = x; //x pos of hit zone
        sawBladeHitZone.y = y; //y pos of hit zone
        game.addGameItem(sawBladeHitZone); //add the hitzone to the game
        var obstacleImage = draw.bitmap('img/sawblade.png');//drawing image and storing in variable
        sawBladeHitZone.addChild(obstacleImage);//add the image to the hitzone so we can see it
        obstacleImage.x = -25; // moves the image 25 pixels left
        obstacleImage.y = -25; //moves the image 25 pixels up
        }

        
    function createEnemy(x, y) {
            var enemy = game.createGameItem('enemy',25); //creating the game item and stowing it in the variable enemy
        var zombie = draw.bitmap('img/zombie.png'); //creates zombie image
        
        enemy.x = 25; 
        enemy.y = 25; 

        enemy.x = x;
        enemy.y = y;
        enemy.addChild(zombie); //add the zombie to the enemy game item

        
        enemy.scaleX = 0.2; // changes the zombie scale on the x-axis
        enemy.scaleY = 0.2; // changes the zombie scale on the y-axis

        game.addGameItem(enemy); //adds enemy to game    
                   

        enemy.velocityX = -1; //causes the enemy to move 1 pixel to the left

        enemy.onPlayerCollision = function() { // determines how much damage or health it does
            console.log('The enemy has hit Halle');
            game.changeIntegrity(-10);
            zombie.fadeOut();
         };

         enemy.onProjectileCollision = function() {// determines how much damage or health it does
            console.log('The projectile has hit Halle');
            game.changeIntegrity(-10);
            game.increaseScore(100);
            enemy.fadeOut();
        };
     }
     function createSkeleton(x, y) {
        var enemy2 = game.createGameItem('enemy2',25); //creating the game item and stowing it in the variable enemy
    var skeleton = draw.bitmap('img/skeleton.png'); //creates rectangle and stores as redSquare
    

    enemy2.x = x;
    enemy2.y = y;

    enemy2.addChild(skeleton); //add the red square tp the enemy game item

    
    enemy2.scaleX = 0.6; // changes the skeleton scale on the x-axis
    enemy2.scaleY = 0.6; // changes the skeleton scale on the y-axis

    game.addGameItem(enemy2); //adds enemy to game    
               

    enemy2.velocityX = -1; //causes the enemy to move 1 pixel to the left

    enemy2.onPlayerCollision = function() { // determines how much damage or health it does
        console.log('The enemy has hit Halle');
        game.changeIntegrity(-10);
        skeleton.fadeOut();
     };

     enemy2.onProjectileCollision = function() {// determines how much damage or health it does
        console.log('The projectile has hit Halle');
        game.changeIntegrity(-10);
        game.increaseScore(100);
        enemy2.fadeOut();
         };
     }


    for (var i = 0; i < levelData.gameItems.length; i++) { // for loop to iterate over the array
        var gameItem = levelData.gameItems[i];

        if(gameItem.type === "sawblade"){
                createSawBlade(gameItem.x, gameItem.y);
        }

        if(gameItem.type === "enemy2"){
                createSkeleton(gameItem.x, gameItem.y);
        }


    }


function createReward(x, y) {
        var reward = game.createGameItem('reward',25); //creating the game item and stowing it in the variable reward
        var diamond = draw.bitmap('img/diamond2.png'); //creates diamond image
        diamond.x = -25; 
        diamond.y = -25; 
        reward.addChild(diamond); //add the diamond the reward game item

        reward.x = x;
        reward.y = y;

        game.addGameItem(reward); //adds reward to game             
        
        reward.scaleX = 0.3;
        reward.scaleY = 0.3;
        reward.velocityX = -1; //causes the reward to move 1 pixel to the left
        reward.onPlayerCollision = function() {
            console.log('The reward has hit Halle');
            game.changeIntegrity(10);
            game.increaseScore(10);
            reward.                                                
            fadeOut();
         };

     }


    for (var i = 0; i < levelData.gameItems.length; i++) {
        var gameItem = levelData.gameItems[i];

        if(gameItem.type === "sawblade"){
                createSawBlade(gameItem.x, gameItem.y);
        }

        if(gameItem.type === "enemy"){
                createEnemy(gameItem.x, gameItem.y);
        }
        
        if(gameItem.type === "enemy"){
            createSkeleton(gameItem.x, gameItem.y);
        }

        if(gameItem.type === "reward"){
                createReward(gameItem.x, gameItem.y);
        }

    }



        // DO NOT EDIT CODE BELOW HERE
    
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
