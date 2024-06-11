
// You can write more code here

/* START OF COMPILED CODE */

class TitleScreen extends Phaser.Scene {

	constructor() {
		super("TitleScreen");

		/* START-USER-CTR-CODE */
		// Write your code here. 

		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// bg1
		this.add.image(640, 359, "bg1");

		// spot
		const spot = this.add.image(-236, 63, "spot");
		spot.scaleX = 1.1054558827359195;
		spot.scaleY = 1.6519580621601309;

		// spot_1
		const spot_1 = this.add.image(-143, 214, "spot");
		spot_1.scaleX = 0.7943515215493968;
		spot_1.scaleY = 1.0468747629373003;

		// spot_2
		const spot_2 = this.add.image(-434, 390, "spot");
		spot_2.scaleX = 1.4432172836192567;
		spot_2.scaleY = 1.8674497799797307;

		// spot_3
		const spot_3 = this.add.image(-233, 581, "spot");
		spot_3.scaleX = 0.5987863180363076;
		spot_3.scaleY = 0.9341722863634923;

		// spin
		const spin = this.add.image(1283, 356, "spin");

		// fight
		const fight = this.add.image(307, 400, "fight");
		fight.setInteractive(new Phaser.Geom.Rectangle(0, 0, 525, 357), Phaser.Geom.Rectangle.Contains);
		fight.scaleX = 0.1;
		fight.scaleY = 0.1;
		fight.angle = 120;
		fight.visible = false;

		// red_thingy
		const red_thingy = this.add.image(1030, 268, "red thingy");
		red_thingy.scaleY = 1.0317551087698602;

		// blue_thingy
		const blue_thingy = this.add.image(244, 443, "blue thingy");

		// logo
		const logo = this.add.image(669, 305, "logo_1");

		// press
		const press = this.add.image(639, 679, "press");
		press.setOrigin(0.5, 1);

		// fight2
		const fight2 = this.add.image(-799, 678, "fight2");
		fight2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 525, 357), Phaser.Geom.Rectangle.Contains);

		// portal
		const portal = this.add.image(651, 357, "portal");
		portal.visible = false;

		// names
		const names = this.add.image(1117, 663, "names");

		// iade
		const iade = this.add.image(1113, 568, "iade");
		iade.scaleX = 0.15460354202881438;
		iade.scaleY = 0.14958478987293267;

		this.spot = spot;
		this.spot_1 = spot_1;
		this.spot_2 = spot_2;
		this.spot_3 = spot_3;
		this.spin = spin;
		this.fight = fight;
		this.red_thingy = red_thingy;
		this.blue_thingy = blue_thingy;
		this.logo = logo;
		this.press = press;
		this.fight2 = fight2;
		this.portal = portal;
		this.names = names;
		this.iade = iade;

		this.originalRedThingyY = red_thingy.y;
this.originalBlueThingyY = blue_thingy.y;

this.time.addEvent({
	delay: 4100,
	callback: this.resetThingiesY,
	callbackScope: this,
	loop: true
});

this.time.addEvent({
	delay: 2000,
	callback: this.spotRespawn,
	callbackScope: this,
	loop: true
});
		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	spot;
	/** @type {Phaser.GameObjects.Image} */
	spot_1;
	/** @type {Phaser.GameObjects.Image} */
	spot_2;
	/** @type {Phaser.GameObjects.Image} */
	spot_3;
	/** @type {Phaser.GameObjects.Image} */
	spin;
	/** @type {Phaser.GameObjects.Image} */
	fight;
	/** @type {Phaser.GameObjects.Image} */
	red_thingy;
	/** @type {Phaser.GameObjects.Image} */
	blue_thingy;
	/** @type {Phaser.GameObjects.Image} */
	logo;
	/** @type {Phaser.GameObjects.Image} */
	press;
	/** @type {Phaser.GameObjects.Image} */
	fight2;
	/** @type {Phaser.GameObjects.Image} */
	portal;
	/** @type {Phaser.GameObjects.Image} */
	names;
	/** @type {Phaser.GameObjects.Image} */
	iade;

	

	/* START-USER-CODE */
	preload()
	{
		this.load.image('Square','./assets/Square.png');
		this.load.image('PassButton','./assets/PassButton.png');
		this.load.image('TurnUI','./assets/TurnUI.png');
		this.load.image('ShopOpenButton','./assets/ShopOpenButton.png');
		this.load.image('Shop','./assets/Shop.png');
		this.load.image('AttackShop','./assets/AttackShop.png');
		this.load.image('TurretIcon','./assets/TurretIcon.png');
		this.load.image('TurretUnit','./assets/TurretUnit.png');
		this.load.image('TurretIcon','./assets/TurretIcon.png');
		this.load.image('BackgroundAsset','./assets/BackgroundAsset.png');
		this.load.image('UnitTileIcon2','./assets/UnitTileIcon2.png');
		this.load.image('Mineicon','./assets/Mineicon.png');
		this.load.image('Snipericon','./assets/Snipericon.png');
		this.load.image('BarbedWallIcon','./assets/BarbedWallIcon.png');
		this.load.image('DaggerGuyIcon','./assets/DaggerGuyIcon.png');
		this.load.image('LaserCanonIcon','./assets/LaserCanonIcon.png');
		this.load.image('SecuritySystemIcon','./assets/SecuritySystemIcon.png');
		this.load.image('CavemanIcon','./assets/CavemanIcon.png');
		this.load.image('ExplodingGuyIcon','./assets/ExplodingGuyIcon.png');
		this.load.image('KnightIcon','./assets/KnightIcon.png');
		this.load.image('ReadyVolcanoIcon','./assets/ReadyVolcanoIcon.png');
		this.load.image('ShieldWallIcon','./assets/ShieldWallIcon.png');
		this.load.image('SoldierIcon','./assets/SoldierIcon.png');
		this.load.image('TankIcon','./assets/TankIcon.png');
		this.load.image('TrexRiderIcon','./assets/TrexRiderIcon.png');
		this.load.image('Sign1','./assets/Sign1.png');

		this.load.image('BarbedWall','./assets/BarbedWall.png');
		this.load.image('CavemanUnit','./assets/CavemanUnit.png');
		this.load.image('DaggerGuy','./assets/DaggerGuy.png');
		this.load.image('ExplodingGuy','./assets/ExplodingGuy.png');
		this.load.image('Knight','./assets/Knight.png');
		this.load.image('LazerCanon','./assets/LazerCanon.png');
		this.load.image('MechanizedMech','./assets/MechanizedMech.png');
		this.load.image('Mine','./assets/Mine.png');
		this.load.image('ReadyVolcano','./assets/ReadyVolcano.png');
		this.load.image('SecuritySystem','./assets/SecuritySystem.png');
		this.load.image('ShieldWall','./assets/ShieldWall.png');
		this.load.image('Sniper','./assets/Sniper.png');
		this.load.image('Soldier','./assets/Soldier.png');
		this.load.image('Tank','./assets/Tank.png');
		this.load.image('TrexRider','./assets/TrexRider.png');
		this.load.image('MechIcon','./assets/MechIcon.png');

		this.load.image('red thingy', './assets/Title Screen/red thingy.png');
		this.load.image('blue thingy', './assets/Title Screen/blue thingy.png');
		this.load.image('logo_1', './assets/Title Screen/logo.png');
		this.load.image('press', './assets/Title Screen/press.png');
		this.load.image('bg1', './assets/Title Screen/bg1.png');
		this.load.image('preview', './assets/Title Screen/preview.png');
		this.load.image('fight', './assets/Title Screen/fight.png');
		this.load.image('fight2', './assets/Title Screen/fight2.png');
		this.load.image('portal', './assets/Title Screen/portal.png');
		this.load.image('names', './assets/Title Screen/names.png');
		this.load.image('iade', './assets/Title Screen/iade.png');
		this.load.image('spot', './assets/Title Screen/spot.png');
		this.load.image('spin', './assets/Title Screen/spin.png');

		this.load.image('CancelButton1', './assets/CancelButton1.png');
		this.load.image('CancelButton2', './assets/CancelButton2.png');
		this.load.image('TileSelectedTex', './assets/TileSelectedTex.png');
		this.load.image('AttackBar', './assets/AttackBar.png');
		this.load.image('DefenseBar', './assets/DefenseBar.png');
		this.load.image('ShopOpenButtonRed', './assets/ShopOpenButtonRed.png');
		
		this.load.image('RangeIcon', './assets/RangeIcon.png');
		this.load.image('ExplosiveDamage', './assets/ExplosiveDamage.png');
		this.load.image('ActionCostIcon', './assets/ActionCostIcon.png');
		this.load.image('MeleeIcon', './assets/MeleeIcon.png');
		this.load.image('HealthIcon', './assets/HealthIcon.png');
		this.load.image('ResourcesCostIcon', './assets/ResourcesCostIcon.png');

		this.load.image('bg1', './assets/bg1.png');
		this.load.image('happycaveman', './assets/happycaveman.png');
		this.load.image('sadcaveman', './assets/sadcaveman.png');
		this.load.image('sadsniper', './assets/sadsniper.png');
		this.load.image('happysniper', './assets/happysniper.png');
		this.load.image('buttonclicked', './assets/buttonclicked.png');
		this.load.image('buttonunclicked', './assets/buttonunclicked.png');
	}


	update(time,DT)
	{
		if (this.IntoMatch == false){
		this.TimePassed += DT

		if (this.TimePassed > 7000){
			this.TimeFunc()
			this.TimePassed = 0
		}

		this.spin.angle -= 0.2;

		this.spot.x += 30;
		this.spot_1.x += 30;
		this.spot_2.x += 30;
		this.spot_3.x += 30;

		//Initial State
		if (this.TitleCheck == 0){
			this.red_thingy.y += 0.7;
			this.blue_thingy.y -= 0.7;
		}

		//Changing to state to play
		if(this.TitleCheck == 1){
			this.red_thingy.x += 20.7;
			this.red_thingy.y -= 15.7;
			this.red_thingy.angle -= 2;
			this.blue_thingy.x -= 20.7;
			this.blue_thingy.y += 15.7;
			this.blue_thingy.angle -= 1;
			this.logo.y -= 20.7;
			this.fight.x += 1.5;
			this.fight.scaleX += 0.04;
			this.fight.scaleY += 0.04;
			this.fight.angle -= 5;
			this.names.x += 20.7;
			this.iade.x += 20.7;
			this.press.setActive(false).setVisible(false);
			this.fight.setActive(false).setVisible(true);

			if(this.fight.angle == 0){
				console.log(this.fight.x)
				console.log(this.fight.y)
				this.fight2.scaleX = 1.0600000000000003
				this.fight2.scaleY = 1.0600000000000003
				this.TitleCheck = 2
				this.red_thingy.destroy();
				this.blue_thingy.destroy();
				this.logo.destroy();
			}

		}

		//Button "Animation"
		if (this.TitleCheck == 2) {
			this.fight.setInteractive()
			this.fight.on("pointerover", () => {
   		 	this.fight2.x = 343
			this.fight2.y = 400
			this.fight.x = 6969
			});	
				this.fight2.on("pointerout", () => {
				this.fight2.x = -799
				this.fight2.y = 678
				this.fight.x = 343
			});	
		}
		this.fight2.setInteractive()
		this.fight2.on('pointerdown', () => {
			if (this.TitleCheck == 2){
				this.MatchMaking();
				this.TitleCheck = 3
			}
		});

		//Going to lobby
		if (this.TitleCheck == 3) {
			this.portal.visible = true
			this.portal.scaleX += 1
			this.portal.scaleY += 1
			this.portal.angle -= 1.9
		}
		}
	}

	resetThingiesY() {
		this.red_thingy.y = this.originalRedThingyY;
		this.blue_thingy.y = this.originalBlueThingyY;
	}

	MatchMaking(){
		this.portal.setScale.x += 2
	}

	FindMatch(){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = () => {
			if (xhttp.readyState == 4) {
				console.log(xhttp.status);
				var data = JSON.parse(xhttp.responseText);
				console.log(data)
				if (xhttp.status == 200)
					{					
						//this.logText.text = data.log;
						this.MatchID = data.MatchID
						this.UserID = data.userID
					}
					else
					{	
						//this.logText.text = data.log;
						this.MatchID = data.MatchID
						this.UserID = data.userID
					}
					setTimeout(() => {
						console.log(data.Joined)
						if (data.Joined == true) {
							this.IntoMatch = true
							//this.logText.text = data.log;
							//this.logText.text += " Entering match: "+this.MatchID
							setTimeout(() => {
								this.scene.start('LevelFix',{MatchID: this.MatchID,UserID: this.UserID})
							}, 2000)
							return
						}else{
							if(data.InMatch == true){
								//this.logText.text = "Joined Match "+data.MatchID;
							}
						}
					}, 2000)
					setTimeout(() => {
						this.InQueue = data.InMatch
					}, 2000)
			}
		};
		xhttp.open("Post", "/MatchingMaking/EnterMatch", true);
		xhttp.setRequestHeader("Content-Type", "application/json");
		xhttp.send();
	}
	CheckMatch(){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = () => {
			if (xhttp.readyState == 4) {
				console.log(xhttp.status);
				var data = JSON.parse(xhttp.responseText);
				console.log(data)
				if (xhttp.status == 200)
				{					
					//this.logText.text = data.log;
					//this.logText.text += " Entering match: "+this.MatchID;
					console.log(data.userID)
					this.UserID = data.userID
					this.IntoMatch = true
					setTimeout(() => {
						this.scene.start('LevelFix',{MatchID: this.MatchID,UserID: this.UserID})
					}, 2000)
				}
			}
		};
		xhttp.open("Get", "/MatchingMaking/CheckMatch"+this.MatchID, true);
		xhttp.send();
	}
	TimeFunc(){
		console.log(this.InQueue)
		if(this.InQueue == true){
			//this.logText.text = "Waiting for a Player"
			this.CheckMatch()
			//this.welcomeText.visible = false
			//this.playButton.visible = false		 
		}
	}

	create() {
		this.TitleCheck = 0
			this.input.on('pointerdown', () => {
				if (this.TitleCheck == 0){
					this.TitleCheck = 1
				}
			});
		this.editorCreate();
		this.TimePassed = 0
		this.InQueue = false
		this.MatchID = undefined
		this.UserID = undefined
		this.fight2.on('pointerdown',() => {
			this.FindMatch()
		})
		this.IntoMatch = false
	}


	spotRespawn(){
		this.spot.x = -236;
		this.spot_1.x = -143;
		this.spot_2.x = -434;
		this.spot_3.x = -233;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */
