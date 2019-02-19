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


//Javascript Object for an inventory do 4

var inventoryCheck = function(){
    alert("\n coins: "+inventory.coins+"\n ammo: "+inventory.ammo+"\n gun: "+inventory.gun+"\n matches: "+inventory.matches);
}

var inventory = {
    coins:10,
    ammo:0,
    gun:0,
    matches:0,
}

Game();

inventoryCheck();

function Game(){
    
    document.write("IMMA SURVIVE");
    var playerName = prompt("what is your name?");
    alert("Welcom to somewhere... " + playerName);
    
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
        
        if(crate == "flex muscles" || crate == "flex"){
            var crateFlex = prompt("You flex as hard as you can. The wooden crate around you explodes.  Your free. \n -look ").toLowerCase();
            
            if(crateFlex == "look"){
                WhareHouse();
            }
        }
        
        if(crate == "yell"){
            var crateYell = prompt("You yell as loud as you can.  Its silent when you hear the door open.  Your silent. \n -yell again \n -stay silent").toLowerCase();
        }
        
        if(crateYell == "yell again"){
            var crateYellAgain = prompt("You yell again. Someone shot you while your in the crate. Your dead. Game Over!");
        }
        
        if(crateYell == "stay silent"){
            var crateStaySilent = prompt("You hear someone for a min then the door closes.  You have no clue on whats going on when the face of the crate gets torn off. \n -look").toLowerCase();
        }
        
        if(crateStaySilent == "look"){
            alert("Some guy opened the crate.");
            var yes = confirm("Do you want to live?");
            
            if(yes){
                WhareHouseWithGuy();
            }
            else{
                alert("The guy re closes the crate and you can't get out and never leave, so you die!");  
            }   
        }
        
        
        if(crate == "move hands" || crate == "move"){
            var crateMove = prompt("You move your hands around.  The wall and ceiling feels like wood.  You realize your in a wooded crate. You still can't see and can only move your hands. \n -move hands again \n -go back to sleep \n-yell").toLowerCase();
            
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
        
            if(crateMove == "move hands again" || crateMove == "move again"){
                var crateMoveAgain = prompt("You move your hands again.  This time you feel a button on the ceiling. \n -press button").toLowerCase();
            }
            
            if(crateMove == "yell"){
                var crateYell = prompt("You yell as loud as you can.  Its silent when you hear the door open.  Your silent. \n -yell again \n -stay silent").toLowerCase();
            }
    
                if(crateMoveAgain == "press button" || crateMoveAgain == "press"){
                    var pressButton = prompt("You press the button.  The crate explodes around you. \n -look").toLowerCase();
                    
                    if(pressButton == "look"){
                        WhareHouse();
                    }
                }
            }
        }
        
    
    
        function WhareHouse(){
            var wharehouse = prompt("Your in a wharehouse.  A Huge open building.  Your on top of a bunch of other crates and cages.  You hop off the crates and cages. You see a door to your left and the right. \n -left \n -right").toLowerCase();
            
            if(wharehouse == "left"){
                var wharehouseleft = prompt("You open the left door.  You see a bunch of soldier like people.  What do you want to say? \n -hey \n -hi").toLowerCase();
                
                if(wharehouseleft == "hey"){
                    var wharehouselefthey = prompt("You say hey.  The soldier like people all say hey back.  They ask who and why you are here.  You tell them idk I can't remember anything.  They put you on a buss going to a hospital.  You win!!")
                }
                
                if(wharehouseleft == "hi"){
                    var wharehouselefthi = prompt("You say hi.  They didin't like how you said hi.  Someone with a red hat shoots you.  Your dead.  Game over.")
                }
            }
            
            if(wharehouse == "right"){
                var wharehouseright = prompt("You open the right door.  Your in a small room. On the left is a desk that has a gun and ammo on top.  Also there are two more doors, one on the front wall and one on the right. \n -pick up gun and ammo ").toLowerCase();
                
                if(wharehouseright == "pick up gun and ammo" || wharehouseright == "pick up" ){
                    inventory.gun ++;
                    inventory.ammo +=10;
                    alert("You have " +inventory.gun+ " gun and " +inventory.ammo+ " ammo");
                    Wharehouserightwithgun();
                
                }
            }
            
        }
                          
        function Wharehouserightwithgun(){
            var wharehouseRightWithGun = prompt("Your in a small room.  There are two more doors, one on the front wall and one on the right. \n -doorfront \n -doorRight").toLowerCase();   
            
            if (wharehouseRightWithGun == "doorfront"){
                var wDoorFront = prompt("You walk through the door on the frontwall.  There is no other door in that room.  There is only a table in the room.  There on a table is a pouch.  Inside the pouch there are 30 coins. \n -pick up coins").toLowerCase();
                
                if(wDoorFront == "pick up coins" || wDoorFront == "pick up"){
                    inventory.coins +=30;
                    alert("you have " +inventory.coins+ " coins");
                    WharehouseRightTwo();
                }
            } 
            
            
        }
    
    
        function WhareHouseWithGuy(){
            var whareHouseWithGuy = prompt("The guy helps you out of the crate.  Your standing in a wharhouse on top of crates and cages.  The guys says he is in the same situation as you. -a:How did you get out of your crate? -b:What is your name? -c:What should we do? \n -a \n -b \n-c").toLowerCase();
            
    }
        
        function WharehouseRightTwo(){
            var rightTwo = prompt("You pick up the coins then walk back to the room whare you picked up the gun and ammo.  There is one door you havent opened on the right.  \n -inventoryCheck  \n-doorRight").toLowerCase();
        }
}