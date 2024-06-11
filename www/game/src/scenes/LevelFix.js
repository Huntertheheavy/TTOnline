
// You can write more code here

/* START OF COMPILED CODE */

class LevelFix extends Phaser.Scene {

	constructor() {
		super("LevelFix");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// BackgroundAsset
		const backgroundAsset = this.add.image(0, 0, "BackgroundAsset");
		backgroundAsset.setOrigin(0, 0);

		// gameTiles_0
		const gameTiles_0 = new GameTiles(this, 324, 210, "UnitTileIcon2");
		this.add.existing(gameTiles_0);
		gameTiles_0.removeInteractive();
		gameTiles_0.setInteractive(new Phaser.Geom.Rectangle(0, 0, 131, 119), Phaser.Geom.Rectangle.Contains);
		gameTiles_0.scaleX = 0.96;
		gameTiles_0.scaleY = 0.95;

		// gameTiles_1
		const gameTiles_1 = new GameTiles(this, 449, 210, "UnitTileIcon2");
		this.add.existing(gameTiles_1);
		gameTiles_1.removeInteractive();
		gameTiles_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 131, 119), Phaser.Geom.Rectangle.Contains);
		gameTiles_1.scaleX = 0.96;
		gameTiles_1.scaleY = 0.95;

		// gameTiles_2
		const gameTiles_2 = new GameTiles(this, 574, 210, "UnitTileIcon2");
		this.add.existing(gameTiles_2);
		gameTiles_2.removeInteractive();
		gameTiles_2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 131, 119), Phaser.Geom.Rectangle.Contains);
		gameTiles_2.scaleX = 0.96;
		gameTiles_2.scaleY = 0.95;

		// gameTiles_3
		const gameTiles_3 = new GameTiles(this, 699, 210, "UnitTileIcon2");
		this.add.existing(gameTiles_3);
		gameTiles_3.removeInteractive();
		gameTiles_3.setInteractive(new Phaser.Geom.Rectangle(0, 0, 131, 119), Phaser.Geom.Rectangle.Contains);
		gameTiles_3.scaleX = 0.96;
		gameTiles_3.scaleY = 0.95;

		// gameTiles_4
		const gameTiles_4 = new GameTiles(this, 824, 210, "UnitTileIcon2");
		this.add.existing(gameTiles_4);
		gameTiles_4.removeInteractive();
		gameTiles_4.setInteractive(new Phaser.Geom.Rectangle(0, 0, 131, 119), Phaser.Geom.Rectangle.Contains);
		gameTiles_4.scaleX = 0.96;
		gameTiles_4.scaleY = 0.95;

		// gameTiles_5
		const gameTiles_5 = new GameTiles(this, 949, 210, "UnitTileIcon2");
		this.add.existing(gameTiles_5);
		gameTiles_5.removeInteractive();
		gameTiles_5.setInteractive(new Phaser.Geom.Rectangle(0, 0, 131, 119), Phaser.Geom.Rectangle.Contains);
		gameTiles_5.scaleX = 0.96;
		gameTiles_5.scaleY = 0.95;

		// gameTiles_6
		const gameTiles_6 = new GameTiles(this, 324, 322, "UnitTileIcon2");
		this.add.existing(gameTiles_6);
		gameTiles_6.removeInteractive();
		gameTiles_6.setInteractive(new Phaser.Geom.Rectangle(0, 0, 131, 119), Phaser.Geom.Rectangle.Contains);
		gameTiles_6.scaleX = 0.96;
		gameTiles_6.scaleY = 0.95;

		// gameTiles_7
		const gameTiles_7 = new GameTiles(this, 449, 322, "UnitTileIcon2");
		this.add.existing(gameTiles_7);
		gameTiles_7.removeInteractive();
		gameTiles_7.setInteractive(new Phaser.Geom.Rectangle(0, 0, 131, 119), Phaser.Geom.Rectangle.Contains);
		gameTiles_7.scaleX = 0.96;
		gameTiles_7.scaleY = 0.95;

		// gameTiles_8
		const gameTiles_8 = new GameTiles(this, 574, 322, "UnitTileIcon2");
		this.add.existing(gameTiles_8);
		gameTiles_8.removeInteractive();
		gameTiles_8.setInteractive(new Phaser.Geom.Rectangle(0, 0, 131, 119), Phaser.Geom.Rectangle.Contains);
		gameTiles_8.scaleX = 0.96;
		gameTiles_8.scaleY = 0.95;

		// gameTiles_9
		const gameTiles_9 = new GameTiles(this, 699, 322, "UnitTileIcon2");
		this.add.existing(gameTiles_9);
		gameTiles_9.removeInteractive();
		gameTiles_9.setInteractive(new Phaser.Geom.Rectangle(0, 0, 131, 119), Phaser.Geom.Rectangle.Contains);
		gameTiles_9.scaleX = 0.96;
		gameTiles_9.scaleY = 0.95;

		// gameTiles_10
		const gameTiles_10 = new GameTiles(this, 824, 322, "UnitTileIcon2");
		this.add.existing(gameTiles_10);
		gameTiles_10.removeInteractive();
		gameTiles_10.setInteractive(new Phaser.Geom.Rectangle(0, 0, 131, 119), Phaser.Geom.Rectangle.Contains);
		gameTiles_10.scaleX = 0.96;
		gameTiles_10.scaleY = 0.95;

		// gameTiles_11
		const gameTiles_11 = new GameTiles(this, 949, 322, "UnitTileIcon2");
		this.add.existing(gameTiles_11);
		gameTiles_11.removeInteractive();
		gameTiles_11.setInteractive(new Phaser.Geom.Rectangle(0, 0, 131, 119), Phaser.Geom.Rectangle.Contains);
		gameTiles_11.scaleX = 0.96;
		gameTiles_11.scaleY = 0.95;

		// gameTiles_12
		const gameTiles_12 = new GameTiles(this, 324, 434, "UnitTileIcon2");
		this.add.existing(gameTiles_12);
		gameTiles_12.removeInteractive();
		gameTiles_12.setInteractive(new Phaser.Geom.Rectangle(0, 0, 131, 119), Phaser.Geom.Rectangle.Contains);
		gameTiles_12.scaleX = 0.96;
		gameTiles_12.scaleY = 0.95;

		// gameTiles_13
		const gameTiles_13 = new GameTiles(this, 449, 434, "UnitTileIcon2");
		this.add.existing(gameTiles_13);
		gameTiles_13.removeInteractive();
		gameTiles_13.setInteractive(new Phaser.Geom.Rectangle(0, 0, 131, 119), Phaser.Geom.Rectangle.Contains);
		gameTiles_13.scaleX = 0.96;
		gameTiles_13.scaleY = 0.95;

		// gameTiles_14
		const gameTiles_14 = new GameTiles(this, 574, 434, "UnitTileIcon2");
		this.add.existing(gameTiles_14);
		gameTiles_14.removeInteractive();
		gameTiles_14.setInteractive(new Phaser.Geom.Rectangle(0, 0, 131, 119), Phaser.Geom.Rectangle.Contains);
		gameTiles_14.scaleX = 0.96;
		gameTiles_14.scaleY = 0.95;

		// gameTiles_15
		const gameTiles_15 = new GameTiles(this, 699, 434, "UnitTileIcon2");
		this.add.existing(gameTiles_15);
		gameTiles_15.removeInteractive();
		gameTiles_15.setInteractive(new Phaser.Geom.Rectangle(0, 0, 131, 119), Phaser.Geom.Rectangle.Contains);
		gameTiles_15.scaleX = 0.96;
		gameTiles_15.scaleY = 0.95;

		// gameTiles_16
		const gameTiles_16 = new GameTiles(this, 824, 434, "UnitTileIcon2");
		this.add.existing(gameTiles_16);
		gameTiles_16.removeInteractive();
		gameTiles_16.setInteractive(new Phaser.Geom.Rectangle(0, 0, 131, 119), Phaser.Geom.Rectangle.Contains);
		gameTiles_16.scaleX = 0.96;
		gameTiles_16.scaleY = 0.95;

		// gameTiles_17
		const gameTiles_17 = new GameTiles(this, 949, 434, "UnitTileIcon2");
		this.add.existing(gameTiles_17);
		gameTiles_17.removeInteractive();
		gameTiles_17.setInteractive(new Phaser.Geom.Rectangle(0, 0, 131, 119), Phaser.Geom.Rectangle.Contains);
		gameTiles_17.scaleX = 0.96;
		gameTiles_17.scaleY = 0.95;

		// gameTiles_18
		const gameTiles_18 = new GameTiles(this, 324, 547, "UnitTileIcon2");
		this.add.existing(gameTiles_18);
		gameTiles_18.removeInteractive();
		gameTiles_18.setInteractive(new Phaser.Geom.Rectangle(0, 0, 131, 119), Phaser.Geom.Rectangle.Contains);
		gameTiles_18.scaleX = 0.96;
		gameTiles_18.scaleY = 0.95;

		// gameTiles_19
		const gameTiles_19 = new GameTiles(this, 449, 547, "UnitTileIcon2");
		this.add.existing(gameTiles_19);
		gameTiles_19.removeInteractive();
		gameTiles_19.setInteractive(new Phaser.Geom.Rectangle(0, 0, 131, 119), Phaser.Geom.Rectangle.Contains);
		gameTiles_19.scaleX = 0.96;
		gameTiles_19.scaleY = 0.95;

		// gameTiles_20
		const gameTiles_20 = new GameTiles(this, 574, 547, "UnitTileIcon2");
		this.add.existing(gameTiles_20);
		gameTiles_20.removeInteractive();
		gameTiles_20.setInteractive(new Phaser.Geom.Rectangle(0, 0, 131, 119), Phaser.Geom.Rectangle.Contains);
		gameTiles_20.scaleX = 0.96;
		gameTiles_20.scaleY = 0.95;

		// gameTiles_21
		const gameTiles_21 = new GameTiles(this, 699, 547, "UnitTileIcon2");
		this.add.existing(gameTiles_21);
		gameTiles_21.removeInteractive();
		gameTiles_21.setInteractive(new Phaser.Geom.Rectangle(0, 0, 131, 119), Phaser.Geom.Rectangle.Contains);
		gameTiles_21.scaleX = 0.96;
		gameTiles_21.scaleY = 0.95;

		// gameTiles_22
		const gameTiles_22 = new GameTiles(this, 824, 547, "UnitTileIcon2");
		this.add.existing(gameTiles_22);
		gameTiles_22.removeInteractive();
		gameTiles_22.setInteractive(new Phaser.Geom.Rectangle(0, 0, 131, 119), Phaser.Geom.Rectangle.Contains);
		gameTiles_22.scaleX = 0.96;
		gameTiles_22.scaleY = 0.95;

		// gameTiles_23
		const gameTiles_23 = new GameTiles(this, 949, 547, "UnitTileIcon2");
		this.add.existing(gameTiles_23);
		gameTiles_23.removeInteractive();
		gameTiles_23.setInteractive(new Phaser.Geom.Rectangle(0, 0, 131, 119), Phaser.Geom.Rectangle.Contains);
		gameTiles_23.scaleX = 0.96;
		gameTiles_23.scaleY = 0.95;

		// UI
		const uI = this.add.container(-143, 7);

		// defenseBar
		const defenseBar = this.add.image(143, -7, "DefenseBar");
		defenseBar.scaleX = 0.7;
		defenseBar.scaleY = 0.8;
		defenseBar.setOrigin(0, 0);
		uI.add(defenseBar);

		// passbutton
		const passbutton = this.add.image(778, 675, "PassButton");
		passbutton.setInteractive(new Phaser.Geom.Rectangle(0, 0, 280, 77), Phaser.Geom.Rectangle.Contains);
		uI.add(passbutton);

		// turnUI
		const turnUI = this.add.image(778, -7, "TurnUI");
		turnUI.setOrigin(0.5, 0);
		uI.add(turnUI);

		// turnmessage
		const turnmessage = this.add.text(780, 611, "", {});
		turnmessage.setOrigin(0.5, 0.5);
		turnmessage.text = "New";
		turnmessage.setStyle({ "align": "justify", "baselineX":1,"baselineY":1,"fontFamily": "Whacky_Joe_Monospaced", "fontSize": "20px", "stroke": "#000000ff", "strokeThickness":8});
		uI.add(turnmessage);

		// atkShopOpenButton
		const atkShopOpenButton = this.add.image(1354, 379, "ShopOpenButtonRed");
		atkShopOpenButton.setInteractive(new Phaser.Geom.Rectangle(0, 0, 30, 50), Phaser.Geom.Rectangle.Contains);
		atkShopOpenButton.scaleX = 3;
		atkShopOpenButton.scaleY = 3;
		uI.add(atkShopOpenButton);

		// defShopOpenButton
		const defShopOpenButton = this.add.image(202, 360, "ShopOpenButton");
		defShopOpenButton.setInteractive(new Phaser.Geom.Rectangle(0, 0, 30, 50), Phaser.Geom.Rectangle.Contains);
		defShopOpenButton.scaleX = 3;
		defShopOpenButton.scaleY = 3;
		uI.add(defShopOpenButton);

		// sign1
		const sign1 = this.add.image(1104, 105, "Sign1");
		uI.add(sign1);

		// turnnumb
		const turnnumb = this.add.text(778, 83, "", {});
		turnnumb.setOrigin(0.5, 0.5);
		turnnumb.text = "1";
		turnnumb.setStyle({ "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "40px", "stroke": "#000000ff", "strokeThickness":8});
		uI.add(turnnumb);

		// attackBar
		const attackBar = this.add.image(1427, -7, "AttackBar");
		attackBar.scaleX = 0.7;
		attackBar.scaleY = 0.8;
		attackBar.setOrigin(1, 0);
		attackBar.flipX = true;
		uI.add(attackBar);

		// AttackerName
		const attackerName = this.add.text(1421, 36, "", {});
		attackerName.setOrigin(1, 0.5);
		attackerName.text = "Attacker Name\n";
		attackerName.setStyle({ "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "30px" });
		uI.add(attackerName);

		// DefenderResource
		const defenderResource = this.add.text(491, 32, "", {});
		defenderResource.setOrigin(0.5, 0.5);
		defenderResource.text = "1";
		defenderResource.setStyle({ "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "40px", "stroke": "#000000ff", "strokeThickness":8});
		uI.add(defenderResource);

		// AttackerResource
		const attackerResource = this.add.text(1026, 32, "", {});
		attackerResource.setOrigin(0.5, 0.5);
		attackerResource.text = "1";
		attackerResource.setStyle({ "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "40px", "stroke": "#000000ff", "strokeThickness":8});
		uI.add(attackerResource);

		// DefenderName
		const defenderName = this.add.text(141, 36, "", {});
		defenderName.setOrigin(0, 0.5);
		defenderName.text = "Defender Name\n";
		defenderName.setStyle({ "align": "center", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "30px" });
		uI.add(defenderName);

		// CancelButton1
		const cancelButton1 = this.add.image(779, 129, "CancelButton1");
		cancelButton1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 645, 374), Phaser.Geom.Rectangle.Contains);
		cancelButton1.scaleX = 0.1;
		cancelButton1.scaleY = 0.1;
		uI.add(cancelButton1);

		// DefenseShopUI
		const defenseShopUI = this.add.container(-420, 367);

		// defenseShop
		const defenseShop = this.add.image(0, 0, "Shop");
		defenseShop.scaleX = 0.4;
		defenseShop.scaleY = 0.4;
		defenseShop.setOrigin(0, 0.5);
		defenseShopUI.add(defenseShop);

		// DefenseUnits
		const defenseUnits = this.add.container(73, -130);
		defenseShopUI.add(defenseUnits);

		// Turret
		const turret = new UnitIconPreFab(this, 2, 0, "TurretIcon");
		turret.removeInteractive();
		turret.setInteractive(new Phaser.Geom.Rectangle(0, 0, 105, 97), Phaser.Geom.Rectangle.Contains);
		defenseUnits.add(turret);

		// snipericon
		const snipericon = new UnitIconPreFab(this, 124, 0, "Mineicon");
		snipericon.removeInteractive();
		snipericon.setInteractive(new Phaser.Geom.Rectangle(0, 0, 105, 97), Phaser.Geom.Rectangle.Contains);
		defenseUnits.add(snipericon);

		// mineicon
		const mineicon = new UnitIconPreFab(this, 247, 0, "Snipericon");
		mineicon.removeInteractive();
		mineicon.setInteractive(new Phaser.Geom.Rectangle(0, 0, 105, 97), Phaser.Geom.Rectangle.Contains);
		defenseUnits.add(mineicon);

		// daggerGuyIcon
		const daggerGuyIcon = new UnitIconPreFab(this, 124, 114, "DaggerGuyIcon");
		daggerGuyIcon.removeInteractive();
		daggerGuyIcon.setInteractive(new Phaser.Geom.Rectangle(0, 0, 105, 97), Phaser.Geom.Rectangle.Contains);
		defenseUnits.add(daggerGuyIcon);

		// laserCanonIcon
		const laserCanonIcon = new UnitIconPreFab(this, 247, 114, "LaserCanonIcon");
		laserCanonIcon.removeInteractive();
		laserCanonIcon.setInteractive(new Phaser.Geom.Rectangle(0, 0, 105, 97), Phaser.Geom.Rectangle.Contains);
		defenseUnits.add(laserCanonIcon);

		// securitySystemIcon
		const securitySystemIcon = new UnitIconPreFab(this, 124, 219, "ReadyVolcanoIcon");
		securitySystemIcon.removeInteractive();
		securitySystemIcon.setInteractive(new Phaser.Geom.Rectangle(0, 0, 105, 97), Phaser.Geom.Rectangle.Contains);
		defenseUnits.add(securitySystemIcon);

		// readyVolcanoIcon
		const readyVolcanoIcon = new UnitIconPreFab(this, 0, 219, "SecuritySystemIcon");
		readyVolcanoIcon.removeInteractive();
		readyVolcanoIcon.setInteractive(new Phaser.Geom.Rectangle(0, 0, 105, 97), Phaser.Geom.Rectangle.Contains);
		defenseUnits.add(readyVolcanoIcon);

		// barbedWallIcon
		const barbedWallIcon = new UnitIconPreFab(this, 0, 114, "BarbedWallIcon");
		barbedWallIcon.removeInteractive();
		barbedWallIcon.setInteractive(new Phaser.Geom.Rectangle(0, 0, 105, 97), Phaser.Geom.Rectangle.Contains);
		defenseUnits.add(barbedWallIcon);

		// healthIcon
		const healthIcon = this.add.image(41, -161, "HealthIcon");
		defenseShopUI.add(healthIcon);

		// healthIcon_1
		const healthIcon_1 = this.add.image(163, -160, "HealthIcon");
		defenseShopUI.add(healthIcon_1);

		// healthIcon_2
		const healthIcon_2 = this.add.image(286, -162, "HealthIcon");
		defenseShopUI.add(healthIcon_2);

		// healthIcon_3
		const healthIcon_3 = this.add.image(285, -47, "HealthIcon");
		defenseShopUI.add(healthIcon_3);

		// healthIcon_4
		const healthIcon_4 = this.add.image(163, -47, "HealthIcon");
		defenseShopUI.add(healthIcon_4);

		// healthIcon_5
		const healthIcon_5 = this.add.image(39, -47, "HealthIcon");
		defenseShopUI.add(healthIcon_5);

		// healthIcon_6
		const healthIcon_6 = this.add.image(162, 59, "HealthIcon");
		defenseShopUI.add(healthIcon_6);

		// healthIcon_7
		const healthIcon_7 = this.add.image(38, 59, "HealthIcon");
		defenseShopUI.add(healthIcon_7);

		// healthIcon_8
		const healthIcon_8 = this.add.image(107, 60, "ResourcesCostIcon");
		defenseShopUI.add(healthIcon_8);

		// healthIcon_9
		const healthIcon_9 = this.add.image(108, -46, "ResourcesCostIcon");
		defenseShopUI.add(healthIcon_9);

		// healthIcon_10
		const healthIcon_10 = this.add.image(108, -160, "ResourcesCostIcon");
		defenseShopUI.add(healthIcon_10);

		// healthIcon_11
		const healthIcon_11 = this.add.image(232, -159, "ResourcesCostIcon");
		defenseShopUI.add(healthIcon_11);

		// healthIcon_12
		const healthIcon_12 = this.add.image(232, -46, "ResourcesCostIcon");
		defenseShopUI.add(healthIcon_12);

		// healthIcon_13
		const healthIcon_13 = this.add.image(355, -161, "ResourcesCostIcon");
		defenseShopUI.add(healthIcon_13);

		// healthIcon_14
		const healthIcon_14 = this.add.image(354, -46, "ResourcesCostIcon");
		defenseShopUI.add(healthIcon_14);

		// healthIcon_15
		const healthIcon_15 = this.add.image(231, 60, "ResourcesCostIcon");
		defenseShopUI.add(healthIcon_15);

		// healthIcon_16
		const healthIcon_16 = this.add.image(39, 122, "MeleeIcon");
		defenseShopUI.add(healthIcon_16);

		// healthIcon_17
		const healthIcon_17 = this.add.image(40, 16, "MeleeIcon");
		defenseShopUI.add(healthIcon_17);

		// healthIcon_18
		const healthIcon_18 = this.add.image(42, -98, "RangeIcon");
		defenseShopUI.add(healthIcon_18);

		// healthIcon_19
		const healthIcon_19 = this.add.image(164, -97, "ExplosiveDamage");
		defenseShopUI.add(healthIcon_19);

		// healthIcon_20
		const healthIcon_20 = this.add.image(164, 16, "MeleeIcon");
		defenseShopUI.add(healthIcon_20);

		// healthIcon_21
		const healthIcon_21 = this.add.image(287, -99, "RangeIcon");
		defenseShopUI.add(healthIcon_21);

		// healthIcon_22
		const healthIcon_22 = this.add.image(286, 16, "RangeIcon");
		defenseShopUI.add(healthIcon_22);

		// healthIcon_23
		const healthIcon_23 = this.add.image(163, 122, "ExplosiveDamage");
		defenseShopUI.add(healthIcon_23);

		// healthIcon_24
		const healthIcon_24 = this.add.text(30, -110, "", {});
		healthIcon_24.text = "1";
		healthIcon_24.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		defenseShopUI.add(healthIcon_24);

		// healthIcon_25
		const healthIcon_25 = this.add.text(99, -174, "", {});
		healthIcon_25.text = "1";
		healthIcon_25.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		defenseShopUI.add(healthIcon_25);

		// healthIcon_26
		const healthIcon_26 = this.add.text(33, -173, "", {});
		healthIcon_26.text = "1";
		healthIcon_26.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		defenseShopUI.add(healthIcon_26);

		// actionCostIcon
		const actionCostIcon = this.add.image(106, -102, "ActionCostIcon");
		defenseShopUI.add(actionCostIcon);

		// actionCostIcon_1
		const actionCostIcon_1 = this.add.image(232, -102, "ActionCostIcon");
		defenseShopUI.add(actionCostIcon_1);

		// actionCostIcon_2
		const actionCostIcon_2 = this.add.image(356, -102, "ActionCostIcon");
		defenseShopUI.add(actionCostIcon_2);

		// actionCostIcon_3
		const actionCostIcon_3 = this.add.image(355.56597900390625, 12, "ActionCostIcon");
		defenseShopUI.add(actionCostIcon_3);

		// actionCostIcon_4
		const actionCostIcon_4 = this.add.image(233, 12, "ActionCostIcon");
		defenseShopUI.add(actionCostIcon_4);

		// actionCostIcon_5
		const actionCostIcon_5 = this.add.image(106, 12, "ActionCostIcon");
		defenseShopUI.add(actionCostIcon_5);

		// actionCostIcon_6
		const actionCostIcon_6 = this.add.image(108, 118, "ActionCostIcon");
		defenseShopUI.add(actionCostIcon_6);

		// actionCostIcon_7
		const actionCostIcon_7 = this.add.image(233, 117, "ActionCostIcon");
		defenseShopUI.add(actionCostIcon_7);

		// healthIcon_27
		const healthIcon_27 = this.add.text(99, -107, "", {});
		healthIcon_27.text = "1";
		healthIcon_27.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		defenseShopUI.add(healthIcon_27);

		// healthIcon_28
		const healthIcon_28 = this.add.text(222, -173, "", {});
		healthIcon_28.text = "3";
		healthIcon_28.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		defenseShopUI.add(healthIcon_28);

		// healthIcon_29
		const healthIcon_29 = this.add.text(156, -172, "", {});
		healthIcon_29.text = "1";
		healthIcon_29.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		defenseShopUI.add(healthIcon_29);

		// healthIcon_30
		const healthIcon_30 = this.add.text(153, -109, "", {});
		healthIcon_30.text = "3";
		healthIcon_30.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		defenseShopUI.add(healthIcon_30);

		// healthIcon_31
		const healthIcon_31 = this.add.text(222, -106, "", {});
		healthIcon_31.text = "0";
		healthIcon_31.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		defenseShopUI.add(healthIcon_31);

		// healthIcon_32
		const healthIcon_32 = this.add.text(346, -173, "", {});
		healthIcon_32.text = "3";
		healthIcon_32.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		defenseShopUI.add(healthIcon_32);

		// healthIcon_33
		const healthIcon_33 = this.add.text(278, -173, "", {});
		healthIcon_33.text = "2";
		healthIcon_33.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		defenseShopUI.add(healthIcon_33);

		// healthIcon_34
		const healthIcon_34 = this.add.text(277, -109, "", {});
		healthIcon_34.text = "5";
		healthIcon_34.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		defenseShopUI.add(healthIcon_34);

		// healthIcon_35
		const healthIcon_35 = this.add.text(346, -106, "", {});
		healthIcon_35.text = "3";
		healthIcon_35.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		defenseShopUI.add(healthIcon_35);

		// healthIcon_36
		const healthIcon_36 = this.add.text(345, -58, "", {});
		healthIcon_36.text = "5";
		healthIcon_36.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		defenseShopUI.add(healthIcon_36);

		// healthIcon_37
		const healthIcon_37 = this.add.text(275, -57, "", {});
		healthIcon_37.text = "3";
		healthIcon_37.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		defenseShopUI.add(healthIcon_37);

		// healthIcon_38
		const healthIcon_38 = this.add.text(276, 6, "", {});
		healthIcon_38.text = "8";
		healthIcon_38.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		defenseShopUI.add(healthIcon_38);

		// healthIcon_39
		const healthIcon_39 = this.add.text(345, 9, "", {});
		healthIcon_39.text = "3";
		healthIcon_39.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		defenseShopUI.add(healthIcon_39);

		// healthIcon_40
		const healthIcon_40 = this.add.text(225, -58, "", {});
		healthIcon_40.text = "4";
		healthIcon_40.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		defenseShopUI.add(healthIcon_40);

		// healthIcon_41
		const healthIcon_41 = this.add.text(154, -59, "", {});
		healthIcon_41.text = "2";
		healthIcon_41.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		defenseShopUI.add(healthIcon_41);

		// healthIcon_42
		const healthIcon_42 = this.add.text(156, 6, "", {});
		healthIcon_42.text = "6";
		healthIcon_42.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		defenseShopUI.add(healthIcon_42);

		// healthIcon_43
		const healthIcon_43 = this.add.text(225, 9, "", {});
		healthIcon_43.text = "2";
		healthIcon_43.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		defenseShopUI.add(healthIcon_43);

		// healthIcon_44
		const healthIcon_44 = this.add.text(98, -57, "", {});
		healthIcon_44.text = "3";
		healthIcon_44.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		defenseShopUI.add(healthIcon_44);

		// healthIcon_45
		const healthIcon_45 = this.add.text(30, -57, "", {});
		healthIcon_45.text = "5";
		healthIcon_45.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		defenseShopUI.add(healthIcon_45);

		// healthIcon_46
		const healthIcon_46 = this.add.text(29, 7, "", {});
		healthIcon_46.text = "1";
		healthIcon_46.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		defenseShopUI.add(healthIcon_46);

		// healthIcon_47
		const healthIcon_47 = this.add.text(98, 10, "", {});
		healthIcon_47.text = "1";
		healthIcon_47.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		defenseShopUI.add(healthIcon_47);

		// healthIcon_48
		const healthIcon_48 = this.add.text(98, 50, "", {});
		healthIcon_48.text = "10";
		healthIcon_48.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		defenseShopUI.add(healthIcon_48);

		// healthIcon_49
		const healthIcon_49 = this.add.text(30, 48, "", {});
		healthIcon_49.text = "8";
		healthIcon_49.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		defenseShopUI.add(healthIcon_49);

		// healthIcon_50
		const healthIcon_50 = this.add.text(29, 114, "", {});
		healthIcon_50.text = "10";
		healthIcon_50.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		defenseShopUI.add(healthIcon_50);

		// healthIcon_51
		const healthIcon_51 = this.add.text(98, 117, "", {});
		healthIcon_51.text = "3";
		healthIcon_51.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		defenseShopUI.add(healthIcon_51);

		// healthIcon_52
		const healthIcon_52 = this.add.text(221, 48, "", {});
		healthIcon_52.text = "11";
		healthIcon_52.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		defenseShopUI.add(healthIcon_52);

		// healthIcon_53
		const healthIcon_53 = this.add.text(155, 49, "", {});
		healthIcon_53.text = "10";
		healthIcon_53.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		defenseShopUI.add(healthIcon_53);

		// healthIcon_54
		const healthIcon_54 = this.add.text(152, 112, "", {});
		healthIcon_54.text = "10";
		healthIcon_54.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		defenseShopUI.add(healthIcon_54);

		// healthIcon_55
		const healthIcon_55 = this.add.text(221, 115, "", {});
		healthIcon_55.text = "0";
		healthIcon_55.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		defenseShopUI.add(healthIcon_55);

		// healthIcon_112
		const healthIcon_112 = this.add.image(823, -322, "ResourcesCostIcon");
		healthIcon_112.scaleX = 1.5;
		healthIcon_112.scaleY = 1.5;
		defenseShopUI.add(healthIcon_112);

		// healthIcon_113
		const healthIcon_113 = this.add.image(1353, -324, "ResourcesCostIcon");
		healthIcon_113.scaleX = 1.5;
		healthIcon_113.scaleY = 1.5;
		defenseShopUI.add(healthIcon_113);

		// AttackShopUI
		const attackShopUI = this.add.container(1423, 282);

		// attackShop
		const attackShop = this.add.image(268, 85, "AttackShop");
		attackShop.scaleX = 0.4;
		attackShop.scaleY = 0.4;
		attackShop.setOrigin(1, 0.5);
		attackShopUI.add(attackShop);

		// AttackUnits
		const attackUnits = this.add.container(-43, -46);
		attackShopUI.add(attackUnits);

		// cavemanIcon
		const cavemanIcon = new UnitIconPreFab(this, 216, 1);
		cavemanIcon.removeInteractive();
		cavemanIcon.setInteractive(new Phaser.Geom.Rectangle(0, 0, 105, 97), Phaser.Geom.Rectangle.Contains);
		attackUnits.add(cavemanIcon);

		// knightIcon
		const knightIcon = new UnitIconPreFab(this, 110, 0, "KnightIcon");
		knightIcon.removeInteractive();
		knightIcon.setInteractive(new Phaser.Geom.Rectangle(0, 0, 105, 97), Phaser.Geom.Rectangle.Contains);
		attackUnits.add(knightIcon);

		// knightIcon_1
		const knightIcon_1 = new UnitIconPreFab(this, 0, 0, "SoldierIcon");
		knightIcon_1.removeInteractive();
		knightIcon_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 105, 97), Phaser.Geom.Rectangle.Contains);
		attackUnits.add(knightIcon_1);

		// TankIcon
		const tankIcon = new UnitIconPreFab(this, 2, 123, "TankIcon");
		tankIcon.removeInteractive();
		tankIcon.setInteractive(new Phaser.Geom.Rectangle(0, 0, 105, 97), Phaser.Geom.Rectangle.Contains);
		attackUnits.add(tankIcon);

		// knightIcon_3
		const knightIcon_3 = new UnitIconPreFab(this, 112, 123, "ExplodingGuyIcon");
		knightIcon_3.removeInteractive();
		knightIcon_3.setInteractive(new Phaser.Geom.Rectangle(0, 0, 105, 97), Phaser.Geom.Rectangle.Contains);
		attackUnits.add(knightIcon_3);

		// cavemanIcon_1
		const cavemanIcon_1 = new UnitIconPreFab(this, 218, 124, "ShieldWallIcon");
		cavemanIcon_1.removeInteractive();
		cavemanIcon_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 105, 97), Phaser.Geom.Rectangle.Contains);
		attackUnits.add(cavemanIcon_1);

		// Futuristic Mech
		const futuristic_Mech = new UnitIconPreFab(this, 114, 239, "MechIcon");
		futuristic_Mech.removeInteractive();
		futuristic_Mech.setInteractive(new Phaser.Geom.Rectangle(0, 0, 105, 97), Phaser.Geom.Rectangle.Contains);
		attackUnits.add(futuristic_Mech);

		// cavemanIcon_2
		const cavemanIcon_2 = new UnitIconPreFab(this, 220, 240, "TrexRiderIcon");
		cavemanIcon_2.removeInteractive();
		cavemanIcon_2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 105, 97), Phaser.Geom.Rectangle.Contains);
		attackUnits.add(cavemanIcon_2);

		// healthIcon_56
		const healthIcon_56 = this.add.image(-74, -75, "HealthIcon");
		attackShopUI.add(healthIcon_56);

		// actionCostIcon_8
		const actionCostIcon_8 = this.add.image(214, 221, "ActionCostIcon");
		attackShopUI.add(actionCostIcon_8);

		// actionCostIcon_9
		const actionCostIcon_9 = this.add.image(102, 222, "ActionCostIcon");
		attackShopUI.add(actionCostIcon_9);

		// actionCostIcon_10
		const actionCostIcon_10 = this.add.image(-6, 97, "ActionCostIcon");
		attackShopUI.add(actionCostIcon_10);

		// actionCostIcon_11
		const actionCostIcon_11 = this.add.image(104, 104, "ActionCostIcon");
		attackShopUI.add(actionCostIcon_11);

		// actionCostIcon_12
		const actionCostIcon_12 = this.add.image(210, 102, "ActionCostIcon");
		attackShopUI.add(actionCostIcon_12);

		// actionCostIcon_13
		const actionCostIcon_13 = this.add.image(209, -18, "ActionCostIcon");
		attackShopUI.add(actionCostIcon_13);

		// actionCostIcon_14
		const actionCostIcon_14 = this.add.image(102, -17, "ActionCostIcon");
		attackShopUI.add(actionCostIcon_14);

		// actionCostIcon_15
		const actionCostIcon_15 = this.add.image(-8, -20, "ActionCostIcon");
		attackShopUI.add(actionCostIcon_15);

		// healthIcon_89
		const healthIcon_89 = this.add.image(145, 226, "ExplosiveDamage");
		attackShopUI.add(healthIcon_89);

		// healthIcon_90
		const healthIcon_90 = this.add.image(144, 105, "MeleeIcon");
		attackShopUI.add(healthIcon_90);

		// healthIcon_91
		const healthIcon_91 = this.add.image(143, -13, "MeleeIcon");
		attackShopUI.add(healthIcon_91);

		// healthIcon_92
		const healthIcon_92 = this.add.image(39, 103, "ExplosiveDamage");
		attackShopUI.add(healthIcon_92);

		// healthIcon_93
		const healthIcon_93 = this.add.image(34, -12, "MeleeIcon");
		attackShopUI.add(healthIcon_93);

		// healthIcon_94
		const healthIcon_94 = this.add.image(-74, -15, "RangeIcon");
		attackShopUI.add(healthIcon_94);

		// healthIcon_95
		const healthIcon_95 = this.add.image(-76, 101, "MeleeIcon");
		attackShopUI.add(healthIcon_95);

		// healthIcon_96
		const healthIcon_96 = this.add.image(33, 226, "RangeIcon");
		attackShopUI.add(healthIcon_96);

		// healthIcon_97
		const healthIcon_97 = this.add.image(210, 166, "ResourcesCostIcon");
		attackShopUI.add(healthIcon_97);

		// healthIcon_98
		const healthIcon_98 = this.add.image(208, 44, "ResourcesCostIcon");
		attackShopUI.add(healthIcon_98);

		// healthIcon_99
		const healthIcon_99 = this.add.image(211, -75, "ResourcesCostIcon");
		attackShopUI.add(healthIcon_99);

		// healthIcon_100
		const healthIcon_100 = this.add.image(103, 44, "ResourcesCostIcon");
		attackShopUI.add(healthIcon_100);

		// healthIcon_101
		const healthIcon_101 = this.add.image(102, -74, "ResourcesCostIcon");
		attackShopUI.add(healthIcon_101);

		// healthIcon_102
		const healthIcon_102 = this.add.image(-8, -77, "ResourcesCostIcon");
		attackShopUI.add(healthIcon_102);

		// healthIcon_103
		const healthIcon_103 = this.add.image(-9, 48, "ResourcesCostIcon");
		attackShopUI.add(healthIcon_103);

		// healthIcon_104
		const healthIcon_104 = this.add.image(101, 164, "ResourcesCostIcon");
		attackShopUI.add(healthIcon_104);

		// healthIcon_105
		const healthIcon_105 = this.add.image(32, 163, "HealthIcon");
		attackShopUI.add(healthIcon_105);

		// healthIcon_106
		const healthIcon_106 = this.add.image(145, 164, "HealthIcon");
		attackShopUI.add(healthIcon_106);

		// healthIcon_107
		const healthIcon_107 = this.add.image(-77, 46, "HealthIcon");
		attackShopUI.add(healthIcon_107);

		// healthIcon_108
		const healthIcon_108 = this.add.image(36, 47, "HealthIcon");
		attackShopUI.add(healthIcon_108);

		// healthIcon_109
		const healthIcon_109 = this.add.image(144, 48, "HealthIcon");
		attackShopUI.add(healthIcon_109);

		// healthIcon_110
		const healthIcon_110 = this.add.image(142, -76, "HealthIcon");
		attackShopUI.add(healthIcon_110);

		// healthIcon_111
		const healthIcon_111 = this.add.image(33, -75, "HealthIcon");
		attackShopUI.add(healthIcon_111);

		// healthIcon_57
		const healthIcon_57 = this.add.text(206, 215, "", {});
		healthIcon_57.text = "4";
		healthIcon_57.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		attackShopUI.add(healthIcon_57);

		// healthIcon_58
		const healthIcon_58 = this.add.text(134, 216, "", {});
		healthIcon_58.text = "12";
		healthIcon_58.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		attackShopUI.add(healthIcon_58);

		// healthIcon_59
		const healthIcon_59 = this.add.text(133, 151, "", {});
		healthIcon_59.text = "15";
		healthIcon_59.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		attackShopUI.add(healthIcon_59);

		// healthIcon_60
		const healthIcon_60 = this.add.text(197, 153, "", {});
		healthIcon_60.text = "10\n";
		healthIcon_60.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		attackShopUI.add(healthIcon_60);

		// healthIcon_61
		const healthIcon_61 = this.add.text(95, 217, "", {});
		healthIcon_61.text = "2";
		healthIcon_61.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		attackShopUI.add(healthIcon_61);

		// healthIcon_62
		const healthIcon_62 = this.add.text(21, 215, "", {});
		healthIcon_62.text = "8";
		healthIcon_62.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		attackShopUI.add(healthIcon_62);

		// healthIcon_63
		const healthIcon_63 = this.add.text(24, 152, "", {});
		healthIcon_63.text = "13";
		healthIcon_63.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		attackShopUI.add(healthIcon_63);

		// healthIcon_64
		const healthIcon_64 = this.add.text(92, 154, "", {});
		healthIcon_64.text = "15";
		healthIcon_64.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		attackShopUI.add(healthIcon_64);

		// healthIcon_65
		const healthIcon_65 = this.add.text(-13, 94, "", {});
		healthIcon_65.text = "3";
		healthIcon_65.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		attackShopUI.add(healthIcon_65);

		// healthIcon_66
		const healthIcon_66 = this.add.text(-87, 92, "", {});
		healthIcon_66.text = "7";
		healthIcon_66.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		attackShopUI.add(healthIcon_66);

		// healthIcon_67
		const healthIcon_67 = this.add.text(-84, 34, "", {});
		healthIcon_67.text = "6";
		healthIcon_67.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		attackShopUI.add(healthIcon_67);

		// healthIcon_68
		const healthIcon_68 = this.add.text(-17, 34, "", {});
		healthIcon_68.text = "5";
		healthIcon_68.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		attackShopUI.add(healthIcon_68);

		// healthIcon_69
		const healthIcon_69 = this.add.text(96, 98, "", {});
		healthIcon_69.text = "1";
		healthIcon_69.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		attackShopUI.add(healthIcon_69);

		// healthIcon_70
		const healthIcon_70 = this.add.text(31, 93, "", {});
		healthIcon_70.text = "6";
		healthIcon_70.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		attackShopUI.add(healthIcon_70);

		// healthIcon_71
		const healthIcon_71 = this.add.text(27, 35, "", {});
		healthIcon_71.text = "1";
		healthIcon_71.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		attackShopUI.add(healthIcon_71);

		// healthIcon_72
		const healthIcon_72 = this.add.text(96, 31, "", {});
		healthIcon_72.text = "4";
		healthIcon_72.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		attackShopUI.add(healthIcon_72);

		// healthIcon_73
		const healthIcon_73 = this.add.text(202, 95, "", {});
		healthIcon_73.text = "2";
		healthIcon_73.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		attackShopUI.add(healthIcon_73);

		// healthIcon_74
		const healthIcon_74 = this.add.text(134, 92, "", {});
		healthIcon_74.text = "1";
		healthIcon_74.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		attackShopUI.add(healthIcon_74);

		// healthIcon_75
		const healthIcon_75 = this.add.text(136, 35, "", {});
		healthIcon_75.text = "8";
		healthIcon_75.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		attackShopUI.add(healthIcon_75);

		// healthIcon_76
		const healthIcon_76 = this.add.text(199, 32, "", {});
		healthIcon_76.text = "4";
		healthIcon_76.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		attackShopUI.add(healthIcon_76);

		// healthIcon_77
		const healthIcon_77 = this.add.text(201, -23, "", {});
		healthIcon_77.text = "1";
		healthIcon_77.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		attackShopUI.add(healthIcon_77);

		// healthIcon_78
		const healthIcon_78 = this.add.text(134, -25, "", {});
		healthIcon_78.text = "1";
		healthIcon_78.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		attackShopUI.add(healthIcon_78);

		// healthIcon_79
		const healthIcon_79 = this.add.text(134, -87, "", {});
		healthIcon_79.text = "1";
		healthIcon_79.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		attackShopUI.add(healthIcon_79);

		// healthIcon_80
		const healthIcon_80 = this.add.text(202, -87, "", {});
		healthIcon_80.text = "1";
		healthIcon_80.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		attackShopUI.add(healthIcon_80);

		// healthIcon_81
		const healthIcon_81 = this.add.text(92, -21, "", {});
		healthIcon_81.text = "1";
		healthIcon_81.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		attackShopUI.add(healthIcon_81);

		// healthIcon_82
		const healthIcon_82 = this.add.text(23, -24, "", {});
		healthIcon_82.text = "2";
		healthIcon_82.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		attackShopUI.add(healthIcon_82);

		// healthIcon_83
		const healthIcon_83 = this.add.text(26, -87, "", {});
		healthIcon_83.text = "3";
		healthIcon_83.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		attackShopUI.add(healthIcon_83);

		// healthIcon_84
		const healthIcon_84 = this.add.text(92, -88, "", {});
		healthIcon_84.text = "2";
		healthIcon_84.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		attackShopUI.add(healthIcon_84);

		// healthIcon_85
		const healthIcon_85 = this.add.text(-15, -25, "", {});
		healthIcon_85.text = "2";
		healthIcon_85.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		attackShopUI.add(healthIcon_85);

		// healthIcon_86
		const healthIcon_86 = this.add.text(-82, -87, "", {});
		healthIcon_86.text = "2";
		healthIcon_86.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		attackShopUI.add(healthIcon_86);

		// healthIcon_87
		const healthIcon_87 = this.add.text(-17, -91, "", {});
		healthIcon_87.text = "2";
		healthIcon_87.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		attackShopUI.add(healthIcon_87);

		// healthIcon_88
		const healthIcon_88 = this.add.text(-86, -27, "", {});
		healthIcon_88.text = "3";
		healthIcon_88.setStyle({ "backgroundColor": "", "fontFamily": "Whacky_Joe_Monospaced", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness":5});
		attackShopUI.add(healthIcon_88);

		// UnitsContainer
		const unitsContainer = this.add.container(-690, -151);

		// CavemanUnit
		const cavemanUnit = new TBUnit(this, 548, 101, "CavemanUnit");
		cavemanUnit.removeInteractive();
		cavemanUnit.setInteractive(new Phaser.Geom.Rectangle(0, 0, 34, 54), Phaser.Geom.Rectangle.Contains);
		cavemanUnit.scaleX = 1.5;
		cavemanUnit.scaleY = 1.5;
		unitsContainer.add(cavemanUnit);

		// DaggerGuy
		const daggerGuy = new TBUnit(this, 345, 107, "DaggerGuy");
		daggerGuy.removeInteractive();
		daggerGuy.setInteractive(new Phaser.Geom.Rectangle(0, 0, 43, 48), Phaser.Geom.Rectangle.Contains);
		daggerGuy.scaleX = 1.5;
		daggerGuy.scaleY = 1.5;
		unitsContainer.add(daggerGuy);

		// ExplodingGuy
		const explodingGuy = new TBUnit(this, 614, 99, "ExplodingGuy");
		explodingGuy.removeInteractive();
		explodingGuy.setInteractive(new Phaser.Geom.Rectangle(0, 0, 43, 55), Phaser.Geom.Rectangle.Contains);
		explodingGuy.scaleX = 1.5;
		explodingGuy.scaleY = 1.5;
		unitsContainer.add(explodingGuy);

		// Knight
		const knight = new TBUnit(this, 708, 85, "Knight");
		knight.removeInteractive();
		knight.setInteractive(new Phaser.Geom.Rectangle(0, 0, 62, 68), Phaser.Geom.Rectangle.Contains);
		knight.scaleX = 1.6;
		knight.scaleY = 1.6;
		unitsContainer.add(knight);

		// LaserCannon
		const laserCannon = new TBUnit(this, 244, 114, "LazerCanon");
		laserCannon.removeInteractive();
		laserCannon.setInteractive(new Phaser.Geom.Rectangle(0, 0, 83, 38), Phaser.Geom.Rectangle.Contains);
		laserCannon.scaleX = 1.4;
		laserCannon.scaleY = 1.4;
		unitsContainer.add(laserCannon);

		// FuturisticMech
		const futuristicMech = new TBUnit(this, 821, 88, "MechanizedMech");
		futuristicMech.removeInteractive();
		futuristicMech.setInteractive(new Phaser.Geom.Rectangle(0, 0, 111, 106), Phaser.Geom.Rectangle.Contains);
		futuristicMech.scaleX = 1;
		futuristicMech.scaleY = 1;
		unitsContainer.add(futuristicMech);

		// Tank
		const tank = new TBUnit(this, 937, 94, "Tank");
		tank.removeInteractive();
		tank.setInteractive(new Phaser.Geom.Rectangle(0, 0, 87, 67), Phaser.Geom.Rectangle.Contains);
		tank.scaleX = 1.3;
		tank.scaleY = 1.3;
		unitsContainer.add(tank);

		// ReadyVolcano
		const readyVolcano = new TBUnit(this, 118, 97, "ReadyVolcano");
		readyVolcano.removeInteractive();
		readyVolcano.setInteractive(new Phaser.Geom.Rectangle(0, 0, 112, 81), Phaser.Geom.Rectangle.Contains);
		readyVolcano.scaleX = 1.05;
		readyVolcano.scaleY = 1.05;
		unitsContainer.add(readyVolcano);

		// BarbedWall
		const barbedWall = new TBUnit(this, 0, 99, "BarbedWall");
		barbedWall.removeInteractive();
		barbedWall.setInteractive(new Phaser.Geom.Rectangle(0, 0, 58, 73), Phaser.Geom.Rectangle.Contains);
		barbedWall.scaleX = 1.5;
		barbedWall.scaleY = 1.5;
		unitsContainer.add(barbedWall);

		// TrexRider
		const trexRider = new TBUnit(this, 1044, 88, "TrexRider");
		trexRider.removeInteractive();
		trexRider.setInteractive(new Phaser.Geom.Rectangle(0, 0, 76, 79), Phaser.Geom.Rectangle.Contains);
		trexRider.scaleX = 1.3;
		trexRider.scaleY = 1.3;
		unitsContainer.add(trexRider);

		// Sniper
		const sniper = new TBUnit(this, 477, 104, "Sniper");
		sniper.removeInteractive();
		sniper.setInteractive(new Phaser.Geom.Rectangle(0, 0, 47, 52), Phaser.Geom.Rectangle.Contains);
		sniper.scaleX = 1.5;
		sniper.scaleY = 1.5;
		unitsContainer.add(sniper);

		// SecuritySystem
		const securitySystem = new TBUnit(this, 247, 0, "SecuritySystem");
		securitySystem.removeInteractive();
		securitySystem.setInteractive(new Phaser.Geom.Rectangle(0, 0, 65, 67), Phaser.Geom.Rectangle.Contains);
		securitySystem.scaleX = 1.6;
		securitySystem.scaleY = 1.6;
		unitsContainer.add(securitySystem);

		// Soldier
		const soldier = new TBUnit(this, 550, 1, "Soldier");
		soldier.removeInteractive();
		soldier.setInteractive(new Phaser.Geom.Rectangle(0, 0, 30, 52), Phaser.Geom.Rectangle.Contains);
		soldier.scaleX = 1.5;
		soldier.scaleY = 1.5;
		unitsContainer.add(soldier);

		// TurretUnit
		const turretUnit = new TBUnit(this, 404, 118, "TurretUnit");
		turretUnit.removeInteractive();
		turretUnit.setInteractive(new Phaser.Geom.Rectangle(0, 0, 344, 328), Phaser.Geom.Rectangle.Contains);
		turretUnit.scaleX = 0.25;
		turretUnit.scaleY = 0.25;
		unitsContainer.add(turretUnit);

		// ShieldWall
		const shieldWall = new TBUnit(this, 1166, 83, "ShieldWall");
		shieldWall.removeInteractive();
		shieldWall.setInteractive(new Phaser.Geom.Rectangle(0, 0, 82, 68), Phaser.Geom.Rectangle.Contains);
		shieldWall.scaleX = 1.5;
		shieldWall.scaleY = 1.5;
		unitsContainer.add(shieldWall);

		// Mine
		const mine = new TBUnit(this, 378, 44, "Mine");
		mine.removeInteractive();
		mine.setInteractive(new Phaser.Geom.Rectangle(0, 0, 43, 48), Phaser.Geom.Rectangle.Contains);
		mine.scaleX = 1.5;
		mine.scaleY = 1.5;
		unitsContainer.add(mine);

		// lists
		const tilesSquares = [gameTiles_23, gameTiles_0, gameTiles_22, gameTiles_21, gameTiles_20, gameTiles_19, gameTiles_18, gameTiles_17, gameTiles_16, gameTiles_15, gameTiles_14, gameTiles_13, gameTiles_12, gameTiles_11, gameTiles_10, gameTiles_9, gameTiles_8, gameTiles_7, gameTiles_6, gameTiles_5, gameTiles_4, gameTiles_3, gameTiles_2, gameTiles_1];
		const unitsList = [snipericon, mineicon, turret, barbedWallIcon, daggerGuyIcon, laserCanonIcon, securitySystemIcon, readyVolcanoIcon, knightIcon, cavemanIcon, knightIcon_1, tankIcon, knightIcon_3, cavemanIcon_1, cavemanIcon_2, futuristic_Mech];
		const unitsStorage = [cavemanUnit, shieldWall, mine, daggerGuy, explodingGuy, turretUnit, soldier, securitySystem, sniper, trexRider, readyVolcano, tank, futuristicMech, laserCannon, knight, barbedWall];
		const unitInTileboard = [];
		const healthIconList = [];

		// gameTiles_0 (prefab fields)
		gameTiles_0.CoordinateX = 1;
		gameTiles_0.CoordinateY = 1;

		// gameTiles_1 (prefab fields)
		gameTiles_1.CoordinateX = 2;
		gameTiles_1.CoordinateY = 1;

		// gameTiles_2 (prefab fields)
		gameTiles_2.CoordinateX = 3;
		gameTiles_2.CoordinateY = 1;

		// gameTiles_3 (prefab fields)
		gameTiles_3.CoordinateX = 4;
		gameTiles_3.CoordinateY = 1;

		// gameTiles_4 (prefab fields)
		gameTiles_4.CoordinateX = 5;
		gameTiles_4.CoordinateY = 1;

		// gameTiles_5 (prefab fields)
		gameTiles_5.CoordinateX = 6;
		gameTiles_5.CoordinateY = 1;

		// gameTiles_6 (prefab fields)
		gameTiles_6.CoordinateX = 1;
		gameTiles_6.CoordinateY = 2;

		// gameTiles_7 (prefab fields)
		gameTiles_7.CoordinateX = 2;
		gameTiles_7.CoordinateY = 2;

		// gameTiles_8 (prefab fields)
		gameTiles_8.CoordinateX = 3;
		gameTiles_8.CoordinateY = 2;

		// gameTiles_9 (prefab fields)
		gameTiles_9.CoordinateX = 4;
		gameTiles_9.CoordinateY = 2;

		// gameTiles_10 (prefab fields)
		gameTiles_10.CoordinateX = 5;
		gameTiles_10.CoordinateY = 2;

		// gameTiles_11 (prefab fields)
		gameTiles_11.CoordinateX = 6;
		gameTiles_11.CoordinateY = 2;

		// gameTiles_12 (prefab fields)
		gameTiles_12.CoordinateX = 1;
		gameTiles_12.CoordinateY = 3;

		// gameTiles_13 (prefab fields)
		gameTiles_13.CoordinateX = 2;
		gameTiles_13.CoordinateY = 3;

		// gameTiles_14 (prefab fields)
		gameTiles_14.CoordinateX = 3;
		gameTiles_14.CoordinateY = 3;

		// gameTiles_15 (prefab fields)
		gameTiles_15.CoordinateX = 4;
		gameTiles_15.CoordinateY = 3;

		// gameTiles_16 (prefab fields)
		gameTiles_16.CoordinateX = 5;
		gameTiles_16.CoordinateY = 3;

		// gameTiles_17 (prefab fields)
		gameTiles_17.CoordinateX = 6;
		gameTiles_17.CoordinateY = 3;

		// gameTiles_18 (prefab fields)
		gameTiles_18.CoordinateX = 1;
		gameTiles_18.CoordinateY = 4;

		// gameTiles_19 (prefab fields)
		gameTiles_19.CoordinateX = 2;
		gameTiles_19.CoordinateY = 4;

		// gameTiles_20 (prefab fields)
		gameTiles_20.CoordinateX = 3;
		gameTiles_20.CoordinateY = 4;

		// gameTiles_21 (prefab fields)
		gameTiles_21.CoordinateX = 4;
		gameTiles_21.CoordinateY = 4;

		// gameTiles_22 (prefab fields)
		gameTiles_22.CoordinateX = 5;
		gameTiles_22.CoordinateY = 4;

		// gameTiles_23 (prefab fields)
		gameTiles_23.CoordinateX = 6;
		gameTiles_23.CoordinateY = 4;

		// turret (prefab fields)
		turret.UnitID = 1;

		// snipericon (prefab fields)
		snipericon.UnitID = 7;

		// mineicon (prefab fields)
		mineicon.UnitID = 13;

		// daggerGuyIcon (prefab fields)
		daggerGuyIcon.UnitID = 3;

		// laserCanonIcon (prefab fields)
		laserCanonIcon.UnitID = 8;

		// securitySystemIcon (prefab fields)
		securitySystemIcon.UnitID = 10;

		// readyVolcanoIcon (prefab fields)
		readyVolcanoIcon.UnitID = 11;

		// barbedWallIcon (prefab fields)
		barbedWallIcon.UnitID = 16;

		// cavemanIcon (prefab fields)
		cavemanIcon.UnitID = 2;

		// knightIcon (prefab fields)
		knightIcon.UnitID = 6;

		// knightIcon_1 (prefab fields)
		knightIcon_1.UnitID = 14;

		// tankIcon (prefab fields)
		tankIcon.UnitID = 9;

		// knightIcon_3 (prefab fields)
		knightIcon_3.UnitID = 4;

		// cavemanIcon_1 (prefab fields)
		cavemanIcon_1.UnitID = 12;

		// futuristic_Mech (prefab fields)
		futuristic_Mech.UnitID = 5;

		// cavemanIcon_2 (prefab fields)
		cavemanIcon_2.UnitID = 15;

		// cavemanUnit (prefab fields)
		cavemanUnit.UnitID = 2;
		cavemanUnit.RoleID = 2;

		// daggerGuy (prefab fields)
		daggerGuy.UnitID = 3;
		daggerGuy.CurrentHealth = 2;

		// explodingGuy (prefab fields)
		explodingGuy.UnitID = 4;
		explodingGuy.CurrentHealth = 1;
		explodingGuy.RoleID = 2;

		// knight (prefab fields)
		knight.UnitID = 6;
		knight.CurrentHealth = 3;
		knight.ScaleUnitX = 1.6;
		knight.ScaleUnitY = 1.6;
		knight.RoleID = 2;

		// laserCannon (prefab fields)
		laserCannon.UnitID = 8;
		laserCannon.CurrentHealth = 3;
		laserCannon.ScaleUnitX = 1.4;
		laserCannon.ScaleUnitY = 1.4;

		// futuristicMech (prefab fields)
		futuristicMech.UnitID = 5;
		futuristicMech.CurrentHealth = 13;
		futuristicMech.ScaleUnitX = 1;
		futuristicMech.ScaleUnitY = 1;
		futuristicMech.RoleID = 2;

		// tank (prefab fields)
		tank.UnitID = 9;
		tank.CurrentHealth = 6;
		tank.ScaleUnitX = 1.3;
		tank.ScaleUnitY = 1.3;
		tank.RoleID = 2;

		// readyVolcano (prefab fields)
		readyVolcano.UnitID = 10;
		readyVolcano.CurrentHealth = 10;
		readyVolcano.ScaleUnitX = 1.05;
		readyVolcano.ScaleUnitY = 1.05;

		// barbedWall (prefab fields)
		barbedWall.UnitID = 16;
		barbedWall.CurrentHealth = 5;

		// trexRider (prefab fields)
		trexRider.UnitID = 15;
		trexRider.CurrentHealth = 15;
		trexRider.ScaleUnitX = 1.3;
		trexRider.ScaleUnitY = 1.3;
		trexRider.RoleID = 2;

		// sniper (prefab fields)
		sniper.UnitID = 13;
		sniper.CurrentHealth = 2;

		// securitySystem (prefab fields)
		securitySystem.UnitID = 11;
		securitySystem.CurrentHealth = 8;
		securitySystem.ScaleUnitX = 1.6;
		securitySystem.ScaleUnitY = 1.6;

		// soldier (prefab fields)
		soldier.UnitID = 14;
		soldier.CurrentHealth = 2;
		soldier.RoleID = 2;

		// turretUnit (prefab fields)
		turretUnit.UnitID = 1;
		turretUnit.ScaleUnitX = 0.25;
		turretUnit.ScaleUnitY = 0.25;

		// shieldWall (prefab fields)
		shieldWall.UnitID = 12;
		shieldWall.CurrentHealth = 8;
		shieldWall.RoleID = 2;

		// mine (prefab fields)
		mine.UnitID = 7;
		mine.CurrentHealth = 1;

		this.backgroundAsset = backgroundAsset;
		this.gameTiles_0 = gameTiles_0;
		this.gameTiles_1 = gameTiles_1;
		this.gameTiles_2 = gameTiles_2;
		this.gameTiles_3 = gameTiles_3;
		this.gameTiles_4 = gameTiles_4;
		this.gameTiles_5 = gameTiles_5;
		this.gameTiles_6 = gameTiles_6;
		this.gameTiles_7 = gameTiles_7;
		this.gameTiles_8 = gameTiles_8;
		this.gameTiles_9 = gameTiles_9;
		this.gameTiles_10 = gameTiles_10;
		this.gameTiles_11 = gameTiles_11;
		this.gameTiles_12 = gameTiles_12;
		this.gameTiles_13 = gameTiles_13;
		this.gameTiles_14 = gameTiles_14;
		this.gameTiles_15 = gameTiles_15;
		this.gameTiles_16 = gameTiles_16;
		this.gameTiles_17 = gameTiles_17;
		this.gameTiles_18 = gameTiles_18;
		this.gameTiles_19 = gameTiles_19;
		this.gameTiles_20 = gameTiles_20;
		this.gameTiles_21 = gameTiles_21;
		this.gameTiles_22 = gameTiles_22;
		this.gameTiles_23 = gameTiles_23;
		this.passbutton = passbutton;
		this.turnmessage = turnmessage;
		this.atkShopOpenButton = atkShopOpenButton;
		this.defShopOpenButton = defShopOpenButton;
		this.turnnumb = turnnumb;
		this.attackerName = attackerName;
		this.defenderResource = defenderResource;
		this.attackerResource = attackerResource;
		this.defenderName = defenderName;
		this.cancelButton1 = cancelButton1;
		this.uI = uI;
		this.defenseShop = defenseShop;
		this.turret = turret;
		this.snipericon = snipericon;
		this.mineicon = mineicon;
		this.daggerGuyIcon = daggerGuyIcon;
		this.laserCanonIcon = laserCanonIcon;
		this.securitySystemIcon = securitySystemIcon;
		this.readyVolcanoIcon = readyVolcanoIcon;
		this.barbedWallIcon = barbedWallIcon;
		this.defenseUnits = defenseUnits;
		this.defenseShopUI = defenseShopUI;
		this.attackShop = attackShop;
		this.cavemanIcon = cavemanIcon;
		this.knightIcon = knightIcon;
		this.knightIcon_1 = knightIcon_1;
		this.tankIcon = tankIcon;
		this.knightIcon_3 = knightIcon_3;
		this.cavemanIcon_1 = cavemanIcon_1;
		this.futuristic_Mech = futuristic_Mech;
		this.cavemanIcon_2 = cavemanIcon_2;
		this.attackUnits = attackUnits;
		this.attackShopUI = attackShopUI;
		this.cavemanUnit = cavemanUnit;
		this.daggerGuy = daggerGuy;
		this.explodingGuy = explodingGuy;
		this.knight = knight;
		this.laserCannon = laserCannon;
		this.futuristicMech = futuristicMech;
		this.tank = tank;
		this.readyVolcano = readyVolcano;
		this.barbedWall = barbedWall;
		this.trexRider = trexRider;
		this.sniper = sniper;
		this.securitySystem = securitySystem;
		this.soldier = soldier;
		this.turretUnit = turretUnit;
		this.shieldWall = shieldWall;
		this.mine = mine;
		this.unitsContainer = unitsContainer;
		this.tilesSquares = tilesSquares;
		this.unitsList = unitsList;
		this.unitsStorage = unitsStorage;
		this.unitInTileboard = unitInTileboard;
		this.healthIconList = healthIconList;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	backgroundAsset;
	/** @type {GameTiles} */
	gameTiles_0;
	/** @type {GameTiles} */
	gameTiles_1;
	/** @type {GameTiles} */
	gameTiles_2;
	/** @type {GameTiles} */
	gameTiles_3;
	/** @type {GameTiles} */
	gameTiles_4;
	/** @type {GameTiles} */
	gameTiles_5;
	/** @type {GameTiles} */
	gameTiles_6;
	/** @type {GameTiles} */
	gameTiles_7;
	/** @type {GameTiles} */
	gameTiles_8;
	/** @type {GameTiles} */
	gameTiles_9;
	/** @type {GameTiles} */
	gameTiles_10;
	/** @type {GameTiles} */
	gameTiles_11;
	/** @type {GameTiles} */
	gameTiles_12;
	/** @type {GameTiles} */
	gameTiles_13;
	/** @type {GameTiles} */
	gameTiles_14;
	/** @type {GameTiles} */
	gameTiles_15;
	/** @type {GameTiles} */
	gameTiles_16;
	/** @type {GameTiles} */
	gameTiles_17;
	/** @type {GameTiles} */
	gameTiles_18;
	/** @type {GameTiles} */
	gameTiles_19;
	/** @type {GameTiles} */
	gameTiles_20;
	/** @type {GameTiles} */
	gameTiles_21;
	/** @type {GameTiles} */
	gameTiles_22;
	/** @type {GameTiles} */
	gameTiles_23;
	/** @type {Phaser.GameObjects.Image} */
	passbutton;
	/** @type {Phaser.GameObjects.Text} */
	turnmessage;
	/** @type {Phaser.GameObjects.Image} */
	atkShopOpenButton;
	/** @type {Phaser.GameObjects.Image} */
	defShopOpenButton;
	/** @type {Phaser.GameObjects.Text} */
	turnnumb;
	/** @type {Phaser.GameObjects.Text} */
	attackerName;
	/** @type {Phaser.GameObjects.Text} */
	defenderResource;
	/** @type {Phaser.GameObjects.Text} */
	attackerResource;
	/** @type {Phaser.GameObjects.Text} */
	defenderName;
	/** @type {Phaser.GameObjects.Image} */
	cancelButton1;
	/** @type {Phaser.GameObjects.Container} */
	uI;
	/** @type {Phaser.GameObjects.Image} */
	defenseShop;
	/** @type {UnitIconPreFab} */
	turret;
	/** @type {UnitIconPreFab} */
	snipericon;
	/** @type {UnitIconPreFab} */
	mineicon;
	/** @type {UnitIconPreFab} */
	daggerGuyIcon;
	/** @type {UnitIconPreFab} */
	laserCanonIcon;
	/** @type {UnitIconPreFab} */
	securitySystemIcon;
	/** @type {UnitIconPreFab} */
	readyVolcanoIcon;
	/** @type {UnitIconPreFab} */
	barbedWallIcon;
	/** @type {Phaser.GameObjects.Container} */
	defenseUnits;
	/** @type {Phaser.GameObjects.Container} */
	defenseShopUI;
	/** @type {Phaser.GameObjects.Image} */
	attackShop;
	/** @type {UnitIconPreFab} */
	cavemanIcon;
	/** @type {UnitIconPreFab} */
	knightIcon;
	/** @type {UnitIconPreFab} */
	knightIcon_1;
	/** @type {UnitIconPreFab} */
	tankIcon;
	/** @type {UnitIconPreFab} */
	knightIcon_3;
	/** @type {UnitIconPreFab} */
	cavemanIcon_1;
	/** @type {UnitIconPreFab} */
	futuristic_Mech;
	/** @type {UnitIconPreFab} */
	cavemanIcon_2;
	/** @type {Phaser.GameObjects.Container} */
	attackUnits;
	/** @type {Phaser.GameObjects.Container} */
	attackShopUI;
	/** @type {TBUnit} */
	cavemanUnit;
	/** @type {TBUnit} */
	daggerGuy;
	/** @type {TBUnit} */
	explodingGuy;
	/** @type {TBUnit} */
	knight;
	/** @type {TBUnit} */
	laserCannon;
	/** @type {TBUnit} */
	futuristicMech;
	/** @type {TBUnit} */
	tank;
	/** @type {TBUnit} */
	readyVolcano;
	/** @type {TBUnit} */
	barbedWall;
	/** @type {TBUnit} */
	trexRider;
	/** @type {TBUnit} */
	sniper;
	/** @type {TBUnit} */
	securitySystem;
	/** @type {TBUnit} */
	soldier;
	/** @type {TBUnit} */
	turretUnit;
	/** @type {TBUnit} */
	shieldWall;
	/** @type {TBUnit} */
	mine;
	/** @type {Phaser.GameObjects.Container} */
	unitsContainer;
	/** @type {GameTiles[]} */
	tilesSquares;
	/** @type {UnitIconPreFab[]} */
	unitsList;
	/** @type {TBUnit[]} */
	unitsStorage;
	/** @type {Array<any>} */
	unitInTileboard;
	/** @type {Array<any>} */
	healthIconList;

	/* START-USER-CODE */

	// Write your code here
	Move(TileSelected,SecondTileSelected){
		var ThisScene = this
		var TotalMoves = TileSelected.CoordinateX-SecondTileSelected.CoordinateX
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if (this.readyState == 4){
				var response = JSON.parse(this.responseText)
				ThisScene.turnmessage.text = response.message.log
				if (xhttp.status == 200){
					ThisScene.ResourcesText.text = response.message.Resources
					ThisScene.Updatetileboard()
					ThisScene.PlayerFunc()
				}
				ThisScene.Cancel()
			}
		}
		var Data = {
			"PlayerID": ThisScene.PlayerID,
			"MatchID": ThisScene.MatchID,
			"PosX": TileSelected.CoordinateX,
			"PosY": TileSelected.CoordinateY,
			"moves": TotalMoves
		}
		xhttp.open("Put","/GameFunc/MoveCard",true);
		xhttp.setRequestHeader("Content-Type", "application/json");
		xhttp.send(JSON.stringify(Data));
	}
	Attack(TileSelected, SecondTileSelected){
		var xhttp = new XMLHttpRequest();
		var ThisScene = this
		xhttp.onreadystatechange = function(){
			if (this.readyState == 4){
				console.log(this.responseText);
				var response = JSON.parse(this.responseText)
				ThisScene.turnmessage.text = response.log
				if (xhttp.status == 200){
					ThisScene.ResourcesText.text = response.Resources
					ThisScene.Updatetileboard()
				}
				ThisScene.Cancel()
			}
		}
		var Data = {
			"PlayerID": ThisScene.PlayerID,
			"MatchID": ThisScene.MatchID,
			"PosX": TileSelected.CoordinateX,
			"PosY": TileSelected.CoordinateY,
			"TargetPosX": SecondTileSelected.CoordinateX,
			"TargetPosY": SecondTileSelected.CoordinateY,
		}
		xhttp.open("Put","/GameFunc/AttackUnit",true);
		xhttp.setRequestHeader("Content-Type", "application/json");
		xhttp.send(JSON.stringify(Data));
	}
	InsertCard(TileCoordinates){
		var PosX = TileCoordinates.CoordinateX
		var PosY = TileCoordinates.CoordinateY
		var ThisScene = this
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if (this.readyState == 4){
				var response = JSON.parse(this.responseText)
				if (xhttp.status == 200){
				ThisScene.turnmessage.text = response.log
				ThisScene.ResourcesText.text = response.Resources
				var UnitInfo = {"UnitID":response.UnitID,
				"TileBoardID" : response.TileboardID,
				"CurrentHealth":response.Health,

				}
				ThisScene.PlaceCard(TileCoordinates,UnitInfo)
				ThisScene.CancelPlacement()
				ThisScene.OpenShop()
				ThisScene.Cancel()
				}
				else{
					ThisScene.cancelButton1.visible = false
					ThisScene.CancelPlacement()
				}
			}
		}
		var Data = {
			"PlayerID": ThisScene.PlayerID,
			"MatchID": ThisScene.MatchID,
			"PosX": PosX,
			"PosY": PosY,
			"CardID": ThisScene.CurrentUnitID,
		}
		xhttp.open("Post","/GameFunc/PlaceCard",true);
		xhttp.setRequestHeader("Content-Type", "application/json");
		xhttp.send(JSON.stringify(Data));
	}

	PlaceCard(TileCoordinates,UnitInfo){
		var UnitST = this.unitsStorage
		var Unitvar = undefined
		UnitST.forEach((unit) => {
			if (unit.UnitID == UnitInfo.UnitID){
				Unitvar = unit
			}
		});
		const NewUnit = this.add.image(TileCoordinates.x, TileCoordinates.y,Unitvar.texture.key);
		NewUnit.setInteractive(new Phaser.Geom.Rectangle(0, 0, 117, 106), Phaser.Geom.Rectangle.Contains);
		NewUnit.UnitID = UnitInfo.UnitID
		NewUnit.TileBoardID = UnitInfo.TileBoardID
		NewUnit.Role = Unitvar.RoleID
		NewUnit.CoordX = TileCoordinates.CoordinateX
		NewUnit.CoordY = TileCoordinates.CoordinateY
		NewUnit.CurrentHealth = UnitInfo.CurrentHealth
		NewUnit.scaleX = Unitvar.ScaleUnitX;
		NewUnit.scaleY = Unitvar.ScaleUnitY;
		const NewHealthIcon = this.add.image(TileCoordinates.x+40, TileCoordinates.y-40,"HealthIcon");
		const NewTextIcon = this.add.text(TileCoordinates.x+35, TileCoordinates.y-50,UnitInfo.CurrentHealth);
		NewTextIcon.setStyle({fontFamily : 'Whacky_Joe_Monospaced'})
		this.healthIconList.push(NewHealthIcon);
		this.healthIconList.push(NewTextIcon);
		this.unitInTileboard.push(NewUnit);
	}

	Updatetileboard(callback){
		var ThisScene = this
		var MatchID = ThisScene.MatchID
		var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function(){
				if (this.readyState == 4){
					var response = JSON.parse(this.responseText)
					if (xhttp.status == 200){
						ThisScene.unitInTileboard.forEach((unit) => {
							unit.destroy();
						});
						ThisScene.healthIconList.forEach((icon) => {
							icon.destroy();
						});
						ThisScene.healthIconList = []
						ThisScene.unitInTileboard = []
						if (response.log.length > 0)
							{
								for (let i=0;i<response.log.length;i++){
									var TileObj
									var UnitInfo = {
									"UnitID":response.log[i].cardID,
									"TileBoardID" : response.log[i].TileBoardID,
									"CurrentHealth":response.log[i].CurrentHealth,
									}
									for (let b=0;b<ThisScene.tilesSquares.length;b++){
										if (response.log[i].PosX == ThisScene.tilesSquares[b].CoordinateX && response.log[i].PosY == ThisScene.tilesSquares[b].CoordinateY && response.log[i].CurrentHealth > 0 ){
											TileObj = ThisScene.tilesSquares[b]
											ThisScene.PlaceCard(TileObj,UnitInfo)
										}
									}				
								}
							}

						if (callback != undefined){
							callback();
						}
					}
				}
			}
		xhttp.open("GET","/GameFunc/GetTileboard/"+MatchID,true);
		xhttp.send();
	}
	Endturn(){
		var ThisScene = this
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if (this.readyState == 4){
				var response = JSON.parse(this.responseText)
				if (xhttp.status == 200){ThisScene.YourTurn = false}
			}
		}
		var EndTurnData = {
			"PlayerID": ThisScene.PlayerID,
			"MatchID": ThisScene.MatchID,
		}
		xhttp.open("PUT","/GameFunc/EndTurning",true);
		xhttp.setRequestHeader("Content-Type", "application/json");
		xhttp.send(JSON.stringify(EndTurnData));
	}

	PlayerFunc(){
		var PlayerID = this.PlayerID
		var MatchID = this.MatchID
		var thisScene = this;
		if (PlayerID != undefined && MatchID != undefined ){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if (this.readyState == 4){
				var response = JSON.parse(this.responseText)
				console.log(this.responseText)
				if (response.authenticated){
						if (response.Results == 1 && thisScene.Role == 1){
							thisScene.SwitchingScene = true
							// thisScene.scene.stop()
							thisScene.scene.start('WinNew')
						}
						else if (response.Results == 2 && thisScene.Role == 1){
							thisScene.SwitchingScene = true
							// thisScene.scene.stop()
							thisScene.scene.start('LoseNew')
						}
						else if (response.Results == 1 && thisScene.Role == 2){
							thisScene.SwitchingScene = true
							// thisScene.scene.stop()
							thisScene.scene.start('LoseNew')
						}
						else if (response.Results == 2 && thisScene.Role == 2){
							thisScene.SwitchingScene = true
							// thisScene.scene.stop()
							thisScene.scene.start('WinNew')
						}
						if (thisScene.PlayerName == undefined){
							if (response.message.Role == 1){
								thisScene.Role = 1
								thisScene.PlayerName = thisScene.defenderName
								thisScene.ResourcesText = thisScene.defenderResource
								thisScene.LeShopOpenBtn = thisScene.defShopOpenButton
								thisScene.atkShopOpenButton.setAlpha(0)
								thisScene.LeShopUI = thisScene.defenseShopUI
							}else if(response.message.Role == 2){
								thisScene.Role = 2
								thisScene.PlayerName = thisScene.attackerName
								thisScene.ResourcesText = thisScene.attackerResource
								thisScene.LeShopOpenBtn = thisScene.atkShopOpenButton
								thisScene.defShopOpenButton.setAlpha(0)
								thisScene.LeShopUI = thisScene.attackShopUI
							}
						}
					if (response.message.YourTurn == false){
						var Text1 = "Wait, it's not your turn"
						thisScene.turnmessage.text = Text1
						if (thisScene.PlayerName == thisScene.defenderName){
							thisScene.attackerName.setStroke("black",10)
						}else{
							thisScene.defenderName.setStroke("black",10)
						}
						thisScene.PlayerName.setStroke("black",0)
						thisScene.YourTurn = false
					}else if (response.message.YourTurn == true){
						var Text1 = "It's your Turn";
						thisScene.turnmessage.text = Text1;
						if (thisScene.PlayerName == thisScene.defenderName){
							thisScene.attackerName.setStroke("black",0)
						}else{
							thisScene.defenderName.setStroke("black",0)
						}
						thisScene.PlayerName.setStroke("black",10)
						thisScene.YourTurn = true
					}
					thisScene.turnnumb.text = response.message.Turn;
					thisScene.ResourcesText.text = response.message.Resources;
					var EnemyNum = 0
					if (response.UserNum == 0){
						EnemyNum = 1
					}
					if (thisScene.ResourcesText == thisScene.defenderResource){
						thisScene.attackerResource.text = response.message.log[EnemyNum].Resources;
					}else if (thisScene.ResourcesText == thisScene.attackerResource){
						thisScene.defenderResource.text = response.message.log[EnemyNum].Resources;
					}
				}
			}
		}
			xhttp.open("GET","/GameFunc/match/"+MatchID+"/player/"+PlayerID,true);
			xhttp.send();
		}
	}

	UpdateFunc(){
		this.Updatetileboard(() => {
			this.PlayerFunc()
		})
	}

	update(Time,DT){
		if(this.SwitchingScene == false) {
			this.TimePassed += DT
		if (this.TimePassed > 3000 && this.YourTurn == false){
			this.UpdateFunc()
			this.TimePassed = 0
		}
		}
	}
	Cancel(){
		this.SelectingUnit = false
		this.SelectingSecUnit = false
		this.TileSelectOne = undefined
		this.TileSelectTwo = undefined
		this.CancelPlacement()
	}
	TileSelected(TileSec){
		if (this.YourTurn == false){return}
		if (this.BuyingUnit == true){
			this.InsertCard(TileSec)
			return
		}
		if (this.SelectingUnit == false){
			for (let i=0;i<this.unitInTileboard.length;i++){
				if (TileSec.CoordinateX == this.unitInTileboard[i].CoordX && TileSec.CoordinateY == this.unitInTileboard[i].CoordY && this.unitInTileboard[i].Role == this.Role){
					console.log("Selected Unit")
					this.SelectingUnit = true
					TileSec.setTexture("TileSelectedTex")
					this.TileSelectOne = TileSec 
					break
				}
			}
		}	
		else{
			for (let i=0;i<this.unitInTileboard.length;i++){
				if (TileSec.CoordinateX == this.unitInTileboard[i].CoordX && TileSec.CoordinateY == this.unitInTileboard[i].CoordY && this.unitInTileboard[i].Role != this.Role){
					console.log("UnitedSelected")
					this.SelectingSecUnit = true
					break
				}
			}
			this.TileSelectTwo = TileSec 
			this.TileSelectOne.setTexture("UnitTileIcon2")
			if (this.SelectingSecUnit == false && this.Role == 2)
			{
				this.Move(this.TileSelectOne,this.TileSelectTwo)
			}else if (this.SelectingSecUnit == true){
				this.Attack(this.TileSelectOne,this.TileSelectTwo)
			}else{
				this.Cancel()
			}
		}
	}
	OpenShop(){
		this.SelectingUnit = false
		this.SelectingSecUnit = false
		this.TileSelectOne = undefined
		this.TileSelectTwo = undefined
		if (this.BuyingUnit == true){
			if (this.Role == 1){
				this.defShopOpenButton.x = -195
			}
			else if(this.Role == 2){
				this.attackShopUI.x = 1212
			}
			return
		}
		else{
			if (this.Role == 1){
				if (this.ShopBool){
					this.defenseShopUI.x = -420
					this.ShopBool = false
					this.defShopOpenButton.x = 202
				}else
				{
					this.defenseShopUI.x = 0
					this.ShopBool = true
					this.defShopOpenButton.x = 594
				}
			}
			else if(this.Role == 2){
				if (this.ShopBool){
					this.attackShopUI.x = 1423
					this.ShopBool = false
					this.atkShopOpenButton.x = 1354
				}else
				{
					this.attackShopUI.x = 1012
					this.ShopBool = true
					this.atkShopOpenButton.x = 945
				}
			}
			return
		}
	}
	CancelPlacement(){
		if (this.BuyingUnit == true)
		{
			this.BuyingUnit = false
			this.CurrentUnitID = undefined
			this.LeShopUI.setAlpha(1)
			this.LeShopOpenBtn.setAlpha(1) 
		}
	}
	SelectShopUnit(UnitID){
		this.CurrentUnitID = UnitID
		this.LeShopUI.setAlpha(0.2) 
		this.LeShopOpenBtn.setAlpha(0) 
		setTimeout(() => {
		this.BuyingUnit = true
		}, 500)
	}
	GetUser(){
		var ThisScene = this
		if (this.PlayerID != undefined && this.MatchID != undefined ){
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function(){
				if (this.readyState == 4){
					var response = JSON.parse(this.responseText)
					if (xhttp.status == 200){
						if (response[0].RolesID == 1)
						{
							ThisScene.defenderName.text = response[0].Username
						}else if(response[0].RolesID == 2){
							ThisScene.attackerName.text = response[0].Username
						}

						if (response[1].RolesID == 1)
						{
							ThisScene.defenderName.text = response[1].Username
						}else if (response[1].RolesID == 2){
							ThisScene.attackerName.text = response[1].Username
						}

					}
				}
			}
				xhttp.open("GET","/GameFunc/GetUsernames/"+ThisScene.MatchID,true);
				xhttp.send();
			}
	}

	create(data) {
		this.editorCreate();
		this.MatchID = data.MatchID
		this.PlayerID = data.UserID
		this.TimePassed = 0

		this.YourTurn = false
		this.BuyingUnit = false
		this.PlayerName = undefined
		this.CurrentUnitID = undefined
		this.Role = undefined
		this.LeShopUI = undefined
		this.LeShopOpenBtn = undefined
		this.input.topOnly=false;
		this.SelectingUnit = false
		this.SelectingSecUnit = false
		this.TileSelectOne = undefined
		this.TileSelectTwo = undefined
		this.SwitchingScene = false
		this.GetUser();
		this.UpdateFunc()
		this.passbutton.on('pointerdown',() => {
			this.Endturn()
		})
		this.defShopOpenButton.on('pointerdown',() => {
			if (this.Role == 1){
			this.OpenShop()
			}
		})
		this.atkShopOpenButton.on('pointerdown',() => {
			if (this.Role == 2){
			this.OpenShop()
			}
		})
		this.cancelButton1.on('pointerdown,',()=>{
			this.Cancel()
		})
		var Tiles = this.tilesSquares
		var UnitUI = this.unitsList

		Tiles.forEach((tile) => {
			tile.on('pointerdown', () => {
			  this.TileSelected(tile);
			});
		});

		UnitUI.forEach((unit) => {
			unit.on('pointerdown', () => {
			this.SelectShopUnit(unit.UnitID)
			});
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
