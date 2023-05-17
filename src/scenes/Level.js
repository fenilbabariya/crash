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

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

  // Write more your code here

  create() {
    this.editorCreate();
	
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
