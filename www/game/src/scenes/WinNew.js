
// You can write more code here

/* START OF COMPILED CODE */

class WinNew extends Phaser.Scene {

	constructor() {
		super("WinNew");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// bg1
		this.add.image(642, 361, "bg1");

		// welcome
		const welcome = this.add.text(644, 132, "", {});
		welcome.setOrigin(0.5, 0.5);
		welcome.text = "You Win!\n";
		welcome.setStyle({ "fontFamily": "Arial", "fontSize": "60px" });

		// onAwakeScript_1
		const onAwakeScript_1 = new OnAwakeScript(welcome);

		// fadeActionScript
		const fadeActionScript = new FadeActionScript(onAwakeScript_1);

		// happycaveman
		this.add.image(1029, 623, "happycaveman");

		// buttonunclicked
		const buttonunclicked = this.add.image(642, 474, "buttonunclicked");
		buttonunclicked.setInteractive(new Phaser.Geom.Rectangle(0, 0, 340, 180), Phaser.Geom.Rectangle.Contains);

		// happysniper
		this.add.image(291, 630, "happysniper");

		// buttonclicked
		const buttonclicked = this.add.image(-250, 492, "buttonclicked");
		buttonclicked.setInteractive(new Phaser.Geom.Rectangle(0, 0, 340, 180), Phaser.Geom.Rectangle.Contains);

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
			this.buttonclicked.x = this.buttonunclicked.x
			this.buttonclicked.y = this.buttonunclicked.y
	})

	this.buttonclicked.on("pointerout", () => {~
		console.log("SquidGames")
		this.buttonclicked.x = -4269

	})

	this.buttonclicked.on('pointerdown',() =>{
		console.log("SquidGames")
		this.scene.start("TitleScreen")
	})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
