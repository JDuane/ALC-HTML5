// Single line comment
/*

Multiline comment

*/

// document.write("<h1>I can't wait for <em>summer!</em></h1>");

// alert("warning! Will Robinson...Warning!");

// confirm("Do you like cheese?");

// prompt("What type of cheese do you like?");

// var pc = prompt("what is your name?");

// confirm("So your name is "+pc);

Game();

function Game(){
    
    document.write("IMMA SURVIVE");
    var playerName = prompt("what is your name?");
    alert("Welcom to somewhere " + playerName);
    
    Crate();
    
    function Crate(){
        var crate = prompt("You wake up... you can't move anything but your hands and you cant see a thing.  You hear a door shut near by. /n -move hands /n -go back to sleep /n -yell /n -flex muscles").toLowerCase();
        
        if(crate == "move hands" || crate == "move"){
            var crateMove = prompt("You move your hands around.  The wall and ceiling feels like wood.  You realize your in a wooded crate. You still cant see and can only move your hands. /n -move hands again /n -go back to sleep /n -yell /n -flex muscles");
        }
        
        else if(crate == "go back to sleep" || crate == "sleep"){
            alert("you fall back asleep.  You dream about your past.  In your past you were super buff.");
            var resume = confirm("Do you wish to continue?");
            
            if(resume){
                prompt();
            }
            else{
                alert("Game Over!");
            }
         
            if(crate == "flex muscles" || crate == "flex"){
                var crateFlex = prompt("You flex your muscles.")
            }
            
        }
    }
    
    
}
