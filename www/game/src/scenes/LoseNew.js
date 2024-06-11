
// You can write more code here

/* START OF COMPILED CODE */

class LoseNew extends Phaser.Scene {

	constructor() {
		super("LoseNew");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// bg1
		this.add.image(640, 358, "bg1");

		// sadsniper
		this.add.image(263, 591, "sadsniper");

		// sadcaveman
		this.add.image(1021, 591, "sadcaveman");

		// buttonunclicked
		const buttonunclicked = this.add.image(640, 471, "buttonunclicked");
		buttonunclicked.setInteractive(new Phaser.Geom.Rectangle(0, 0, 340, 180), Phaser.Geom.Rectangle.Contains);

		// buttonclicked
		const buttonclicked = this.add.image(-252, 489, "buttonclicked");
		buttonclicked.setInteractive(new Phaser.Geom.Rectangle(0, 0, 340, 180), Phaser.Geom.Rectangle.Contains);

		// welcome
		const welcome = this.add.text(642, 163, "", {});
		welcome.setOrigin(0.5, 0.5);
		welcome.text = "You Lose!\n\n\n";
		welcome.setStyle({ "fontFamily": "Arial", "fontSize": "60px" });

		// onAwakeScript_1
		const onAwakeScript_1 = new OnAwakeScript(welcome);

		// fadeActionScript
		const fadeActionScript = new FadeActionScript(onAwakeScript_1);

		// fadeActionScript (prefab fields)
		fadeActionScript.fadeDirection = "FadeIn";

		// fadeActionScript (components)
		const fadeActionScriptDurationConfigComp = new DurationConfigComp(fadeActionScript);
		fadeActionScriptDurationConfigComp.duration = 1500;

		this.buttonunclicked = buttonunclicked;
		this.buttonclicked = buttonclicked;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	buttonunclicked;
	/** @type {Phaser.GameObjects.Image} */
	buttonclicked;

	/* START-USER-CODE */

	// Write your code here
	create() {

	this.editorCreate();

	this.buttonunclicked.on("pointerover", () => {
		console.log("Hello")
		this.buttonclicked.x = this.buttonunclicked.x
		this.buttonclicked.y = this.buttonunclicked.y
	})

	this.buttonclicked.on("pointerout", () => {~
		console.log("Hello")
		this.buttonclicked.x = -4269

	})

	this.buttonclicked.on('pointerdown',() =>{
		console.log("Hello")
		this.scene.start("TitleScreen")
	})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
