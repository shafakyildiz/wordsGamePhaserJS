var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,

  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

var game = new Phaser.Game(config); 

var text;
var counter = 0;
var arr = [];
var guess = "";
var arr2 = ["KUŞ", "KOŞU", "ŞOK"];

function preload() {
  this.load.image("background", "./images/back.jpg");
}

function create() {
  a = 60; // Dimensions of our rectangle
  frx = 350; // First Rectangle x-coordinate
  fry = 200; // First Rectangle y-coordinate
  stp = 65; // Step size

  this.add.image(game.config.width / 2, game.config.height / 2, "background"); // Adding the background image
  // text = this.add.text(100, 100, "", { fill: "#000000" });

  var circle = this.add.circle(415, 415, 135, 0x75bbca, 0.8); // Adding the circle which contains our letters

  var rect1 = this.add.rectangle(frx, fry, a, a, 0xa6cfe8, 0.5); // K
  var rect2 = this.add.rectangle(frx + stp, fry, a, a, 0xa6cfe8, 0.5); // O
  var rect3 = this.add.rectangle(frx + stp * 2, fry, a, a, 0xa6cfe8, 0.5); // Ş
  var rect4 = this.add.rectangle(frx + stp * 3, fry, a, a, 0xa6cfe8, 0.5); // U

  var rect5 = this.add.rectangle(frx, fry - stp * 2, a, a, 0xa6cfe8, 0.5); // Ş
  var rect6 = this.add.rectangle(frx, fry - stp, a, a, 0xa6cfe8, 0.5); // O

  var rect7 = this.add.rectangle(frx + 2 * stp, fry - stp * 2, a, a, 0xa6cfe8, 0.5); // K
  var rect8 = this.add.rectangle(frx + 2 * stp, fry - stp, a, a, 0xa6cfe8, 0.5); // U

  var pointer = this.input.activePointer;

  // Just rectangle styling
  rect1.setStrokeStyle(4, 0x5c8172);
  rect2.setStrokeStyle(4, 0x5c8172);
  rect3.setStrokeStyle(4, 0x5c8172);
  rect4.setStrokeStyle(4, 0x5c8172);
  rect5.setStrokeStyle(4, 0x5c8172);
  rect6.setStrokeStyle(4, 0x5c8172);
  rect7.setStrokeStyle(4, 0x5c8172);
  rect8.setStrokeStyle(4, 0x5c8172);

  var letter1 = this.add
    .text(400, 300, "K", {
      color: "#fff",
      align: "center",
      fontSize: "36px",
      strokeThickness: 2,
    })
    .setInteractive();
  var letter2 = this.add
    .text(400, 500, "Ş", {
      color: "#fff",
      align: "center",
      fontSize: "36px",
      strokeThickness: 2,
    })
    .setInteractive();
  var letter3 = this.add
    .text(500, 400, "O", {
      color: "#fff",
      align: "center",
      fontSize: "36px",
      strokeThickness: 2,
    })
    .setInteractive();
  var letter4 = this.add
    .text(300, 400, "U", {
      color: "#fff",
      align: "center",
      fontSize: "36px",
      strokeThickness: 2,
    })
    .setInteractive();

  
  // LETTER 1


  letter1.on("pointerover", function (pointer) {
    this.setTint(0xff0000);
    guess = guess.concat("K");
    console.log(guess);
  });

  letter1.on("pointerout", function (pointer) {
    this.clearTint();
  });

  letter1.on("pointerup", function (pointer) {
    this.clearTint();
  });

  // LETTER 2

  letter2.on("pointerover", function (pointer) {
    this.setTint(0xff0000);
    guess = guess.concat("Ş");
    console.log(guess);
  });

  letter2.on("pointerout", function (pointer) {
    this.clearTint();
  });

  letter2.on("pointerup", function (pointer) {
    this.clearTint();
  });

  // LETTER 3

  letter3.on("pointerover", function (pointer) {
    this.setTint(0xff0000);
    guess = guess.concat("O");
    console.log(guess);
  });

  letter3.on("pointerout", function (pointer) {
    this.clearTint();
  });

  letter3.on("pointerup", function (pointer) {
    this.clearTint();
  });

  // LETTER 4

  letter4.on("pointerover", function (pointer) {
    this.setTint(0xff0000);
    guess = guess.concat("U");
    console.log(guess);
  });

  letter4.on("pointerout", function (pointer) {
    this.clearTint();
  });

  letter4.on("pointerup", function (pointer) {
    this.clearTint();
  });
}

function update() {

  if (arr.includes("KOŞU") && arr.includes("ŞOK") && arr.includes("KUŞ")) {
    var rect9 = this.add.rectangle(
      game.config.width / 2,
      game.config.height / 2,
      8 * a,
      5 * a,
      0x3e82f7,
      0.5
    ); // LEVEL COMPLETED RECTANGLE
    rect9.setStrokeStyle(4, 0x5c8172);

    var text11 = this.add.text(
      -150 + game.config.width / 2,
      -100 + game.config.height / 2,
      "LEVEL\n\nCOMPLETED!",
      {
        color: "#184a45ff",
        align: "center",
        fontSize: "50px",
        strokeThickness: 3,
      }
    ); // LEVEL COMPLETED TEXT
  }

  if (arr2.includes(guess)) {
    console.log("SUCCESS");

    // Just text adjustment variables for alignment

    let x = 10;
    let y = 10;

    if (guess == "KOŞU") {
      var text1 = this.add.text(-x + frx, fry - y, "K", {
        color: "#fff",
        align: "center",
        fontSize: "36px",
        strokeThickness: 2,
      });
      var text2 = this.add.text(-x + frx + stp, fry - y, "O", {
        color: "#fff",
        align: "center",
        fontSize: "36px",
        strokeThickness: 2,
      });
      var text3 = this.add.text(-x + frx + stp * 2, fry - y, "Ş", {
        color: "#fff",
        align: "center",
        fontSize: "36px",
        strokeThickness: 2,
      });
      var text4 = this.add.text(-x + frx + stp * 3, fry - y, "U", {
        color: "#fff",
        align: "center",
        fontSize: "36px",
        strokeThickness: 2,
      });
      arr.push("KOŞU");
    } else if (guess == "ŞOK") {
      var text5 = this.add.text(-x + frx, fry - y - stp * 2, "Ş", {
        color: "#fff",
        align: "center",
        fontSize: "36px",
        strokeThickness: 2,
      });
      var text6 = this.add.text(-x + frx, fry - y - stp, "O", {
        color: "#fff",
        align: "center",
        fontSize: "36px",
        strokeThickness: 2,
      });
      var text7 = this.add.text(-x + frx, fry - y, "K", {
        color: "#fff",
        align: "center",
        fontSize: "36px",
        strokeThickness: 2,
      });

      arr.push("ŞOK");
    } else {
      var text8 = this.add.text(-x + frx + stp * 2, fry - y - stp * 2, "K", {
        color: "#fff",
        align: "center",
        fontSize: "36px",
        strokeThickness: 2,
      });
      var text9 = this.add.text(-x + frx + stp * 2, fry - y - stp, "U", {
        color: "#fff",
        align: "center",
        fontSize: "36px",
        strokeThickness: 2,
      });
      var text10 = this.add.text(-x + frx + stp * 2, fry - y, "Ş", {
        color: "#fff",
        align: "center",
        fontSize: "36px",
        strokeThickness: 2,
      });
      arr.push("KUŞ");
    }

    guess = "";
  }
  if (guess.length == 4) {
    console.log("WRONG GUESS, PLEASE TRY AGAIN");
    guess = "";
  }
}
