
// You can write more code here

/* START OF COMPILED CODE */

class TBUnit extends Phaser.GameObjects.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 645, y ?? 367, texture || "CavemanUnit", frame);

		this.setInteractive(new Phaser.Geom.Rectangle(0, 0, 34, 54), Phaser.Geom.Rectangle.Contains);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */

		// custom definition props
		this.Tileboard_ID = 0;
	}

	/** @type {number} */
	UnitID = 0;
	/** @type {number} */
	CurrentHealth = 1;
	/** @type {number} */
	ScaleUnitX = 1.5;
	/** @type {number} */
	ScaleUnitY = 1.5;
	/** @type {number} */
	RoleID = 1;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
