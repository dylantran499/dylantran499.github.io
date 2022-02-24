var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        // ANIMATION VARIABLES HERE:
        var tree;
     
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'cyan');
            background.addChild(backgroundFill);
            
            // TODO: 3 - Add a moon and starfield
            for (var i = 0; i <= 100; i++) { // a for loop to draw circles/stars with a random x and y
                var circle = draw.circle(5,'white','LightGray',2); // creates a variable to determines the size of each star and color
                circle.x = canvasWidth*Math.random(); // determines the x location randomly
                circle.y = groundY*Math.random(); // determines the y loaction randomly
                background.addChild(circle); // adds circles in the background
            }
            
            var moon = draw.bitmap('img/moon.png'); //Created a variable called moon. Draw.bitmap draws the image and stores it in the variable
            moon.x = canvasWidth - 300; // changes the x-axis where the moon is located
            moon.y = groundY - 450; // changes the y-axis where the moon is located
            moon.scaleX = 0.5; // changes the moon scale on the x-axis
            moon.scaleY = 0.5; // changes the moon scale on the y-axis
            background.addChild(moon); //adds moon to background

            
            // TODO 5: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            
            
            // TODO 4: Part 1 - Add a tree
            tree = draw.bitmap('img/tree.png'); //reassigns the drawn image tree to the variable tree
            tree.x = canvasWidth - 600; // assigns an x value to the tree
            tree.y = groundY - 250; // assigns an y value to the tree
            background.addChild(tree); // draws the tree in the background
            tree.scaleX = 0.5; // changes the moon scale on the x-axis
            tree.scaleY = 0.5; // changes the moon scale on the y-axis
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            tree.x = tree.x - 1; //subtracting the xvalue by one to make it move left

            if(tree.x < -200) { // if the value of x is less than -200 then move the tree to the right side of the screen.
                tree.x = canvasWidth;
            }
            
            // TODO 5: Part 2 - Parallax
            

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
