// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// container_background
		const container_background = this.add.container(540, 960);

		// crashBg
		const crashBg = this.add.image(0, 0, "crashBg");
		crashBg.scaleX = 1.7;
		crashBg.scaleY = 1.7;
		container_background.add(crashBg);

		// graph_x
		const graph_x = this.add.rectangle(470, 293, 950, 5);
		graph_x.setOrigin(1, 0.5);
		graph_x.isFilled = true;
		graph_x.fillColor = 5000268;
		container_background.add(graph_x);

		// graph_y
		const graph_y = this.add.rectangle(470, 293, 5, 610);
		graph_y.setOrigin(1, 1);
		graph_y.isFilled = true;
		graph_y.fillColor = 5000268;
		container_background.add(graph_y);

		// rocket
		const rocket = this.add.sprite(250, 1098, "rocket_h", 0);

		// container_timer
		const container_timer = this.add.container(729, 1080);

		// text_1
		const text_1 = this.add.text(0, 0, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "Next round in";
		text_1.setStyle({ "align": "center", "color": "#000", "fontFamily": "Verdana", "fontSize": "40px", "fontStyle": "bold" });
		container_timer.add(text_1);

		// txt_game_timer
		const txt_game_timer = this.add.text(0, 50, "", {});
		txt_game_timer.setOrigin(0.5, 0.5);
		txt_game_timer.text = "0";
		txt_game_timer.setStyle({ "align": "center", "color": "#000", "fontFamily": "Verdana", "fontSize": "40px", "fontStyle": "bold" });
		container_timer.add(txt_game_timer);

		// txt_amount_x
		const txt_amount_x = this.add.text(540, 740, "", {});
		txt_amount_x.setOrigin(0.5, 0.5);
		txt_amount_x.text = "5X";
		txt_amount_x.setStyle({ "align": "center", "color": "#00f", "fontFamily": "Verdana", "fontSize": "40px", "fontStyle": "bold" });

		this.rocket = rocket;
		this.txt_game_timer = txt_game_timer;
		this.txt_amount_x = txt_amount_x;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Sprite} */
	rocket;
	/** @type {Phaser.GameObjects.Text} */
	txt_game_timer;
	/** @type {Phaser.GameObjects.Text} */
	txt_amount_x;

	/* START-USER-CODE */

  // Write more your code here

  create() {
    this.editorCreate();
    this.oGameManager = new GameManager();
    this.rocket.anims.play("rocket-h");
    this.setNextGameTimer(this.oGameManager.nNextRoundTime);
  }

  // set the next round game timer
  setNextGameTimer(nNextGameTime) {
    let countdown = setInterval(() => {
      let minutes = Math.floor(nNextGameTime / 60000);
      let seconds = Math.floor((nNextGameTime % 60000) / 1000);
      this.txt_game_timer.setText(
        `${minutes}.${seconds < 10 ? "0" : ""}${seconds}`
      );
      if (nNextGameTime <= 0) {
        clearInterval(countdown);
      } else {
        nNextGameTime -= 1000;
      }
    }, 500);
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
