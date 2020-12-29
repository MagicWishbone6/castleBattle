class Player {
  constructor(who, points = 10) {
    this.who = who;
    this.points = points;
    // BARRACKS KEEPS LIST OF GENERATED PEONS
    this.barracks = [];
  }

  // METHOD
  addPoints(newPoints) {
    this.points += newPoints;
  }

  addPeon(newPeon) {
    this.barracks.push(newPeon);
  }
}

class Peon {
  constructor(peonName, job = "none") {
    this.peonName = peonName;
    // JOB DEFAULTS TO NONE IF REPAIR OR ATTACK NOT SPECIFIED
    this.job = job;
  }
}

// EACH PLAYER STARTS WITH 10 HIT POINTS AND AN EMPTY BARRACKS ARRAY
let compPlayer = new Player("computer");
let player1 = new Player("player 1");

// GAME OBJECT
var game = {
    screen: "start screen",
    whoseTurnIsIt: "player 1",
    message: null 
}

var messages = {
    instructions: [
        "The game has two players: you, and the computer.",
        "You will start each turn by choosing if you would like to select an existing peon or create a new peon.",
        "This turn, you do not yet have any peons to select, so you must create one.",
    ],
    prompts: [
        "What would you like to name this peon?",
    ]
}


let submitButton = document.querySelector("#submitTextInput")
let textBox = document.querySelector(".inputTextBox")
let messageBox = document.querySelector("#messageBox")
let buttonBox = document.querySelector("#buttonContainer")

function createAndPushPeon() {
    player1.addPeon(
        () => {
            if (submitButton.style.visibility != "hidden") {
                let peonNameInput = document.querySelector(".inputTextBox").value
                console.log(peonNameInput)
                return new Peon(peonNameInput)
            }
        }
    )
}

submitButton.addEventListener("click", createAndPushPeon)


submitButton.style.visibility = "visible"
textBox.style.visibility = "visible"
