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

// function Swamp(){
   // var swampEnv = prompt("this is a dank swamp. \n -fallow path \n -swim");
    
   // if(swampEnv == "fallow" || swampEnv == "fallow path"){
        //var swampPath = prompt("skdgasjdbljahwdj");
        //if(swampPath = "enter"){
            
     //   }
  //  }
//}

Game();

function Game(){
    
    document.write("IMMA SURVIVE");
    var playerName = prompt("what is your name?");
    alert("Welcom to somewhere " + playerName);
    
    Crate();
    
    function Crate(){
        var crate = prompt("You wake up... you can't move anything but your hands and you cant see a thing.  You hear a door shut near by. \n -move hands \n -go back to sleep \n -yell \n -flex muscles").toLowerCase();
        
        if(crate == "go back to sleep" || crate == "sleep"){
            alert("you fall back asleep.  You dream about your past.  In your past you were super buff.");
            var resume = confirm("Do you wish to continue?");
            
            if(resume){
                Crate();
            }
            else{
                alert("Game Over!");
            } 
        }
    }
        
        if(crate == "flex muscles" || crate == "flex"){
            var crateFlex = prompt("You flex as hard as you can. The wooden crate around you explodes.  Your free. \n -look ").toLowerCase();
            
            if(crateFlex == "look"){
                WhareHouse();
            }
        }
        
        if(crate == "yell"){
            var crateYell = prompt("You yell as loud as you can.  Its silent when you hear the door open.  Your silent. \n -yell again \n -stay silent").toLowerCase();
        }
        
        if(crate == "move hands" || crate == "move"){
            var crateMove = prompt("You move your hands around.  The wall and ceiling feels like wood.  You realize your in a wooded crate. You still can't see and can only move your hands. \n -move hands again \n -go back to sleep \n -yell \n -flex muscles").toLowerCase();
            
            if(crateMove == "go back to sleep" || crateMove == "sleep"){
                alert("you fall back asleep.  You dream about your past.  In your past you were super buff.");
                var resume = confirm("Do you wish to continue?");
            
                if(resume){
                    Crate();
                }
                else{
                    alert("Game Over!");
                }
            }
        
            if(crateMove == "move hands again"){
                var crateMoveAgain = prompt("You move your hands again.  This time you feel a button on the ceiling. \n -press button").toLowerCase();
            
             
        }
                if(crateMoveAgain == "press button" || crateMoveAgain == "press"){
                    var pressButton = prompt("You press the button.  The crate explodes around you. \n -look").toLowerCase();
                    
                    if(pressButton == "look"){
                        WhareHouse();
                    }
                }
            } 
    
    function WhareHouse(){
        var wharehouse = prompt("Your in a wharehouse.  A Huge open building.  Your on top of a bunch of other crates and cages.")
    }
}
