
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// progressBar
		const progressBar = this.add.rectangle(640, 360, 256, 20);
		progressBar.scaleX = 2;
		progressBar.scaleY = 2;
		progressBar.isFilled = true;
		progressBar.fillColor = 14737632;

		// preloadUpdater
		new PreloadBarUpdaterScript(progressBar);

		// progressBarBg
		const progressBarBg = this.add.rectangle(640, 360, 256, 20);
		progressBarBg.scaleX = 2;
		progressBarBg.scaleY = 2;
		progressBarBg.fillColor = 14737632;
		progressBarBg.isStroked = true;

		// loadingText
		const loadingText = this.add.text(640, 270, "", {});
		loadingText.scaleX = 2;
		loadingText.scaleY = 2;
		loadingText.setOrigin(0.5, 0.5);
		loadingText.text = "Loading...";
		loadingText.setStyle({ "color": "#e0e0e0", "fontFamily": "arial", "fontSize": "20px" });

		this.loadingText = loadingText;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	loadingText;

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.editorPreload();

		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.checkLogin(this.scene));
	}
	checkLogin() {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = () => {
			if (xhttp.readyState == 4) {
				console.log(xhttp.status);
				if (xhttp.status == 200)
					{					
						this.scene.start("TitleScreen")
					}
					else
					{
						this.loadingText.text = "Log in please";
						setTimeout(() => {
							window.location.replace("../login.html");
						}, 1000)
					}
			}
		};

		xhttp.open("GET", "/Account/CheckLoged", true);
		xhttp.send();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
