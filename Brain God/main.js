/*
行数が多いのは、コメントが多いからです。
 */


// ここに、設定をまとめて入れるようにしました。理由: 設定を変えやすくする
var _ = {
	Screen: {
		height: 600,
		width: 1350
	},
	C: { // Character クラス についての設定
		life: 5, // 何回死ねますか?
		size: 10,
		color: 'rgb(255, 80, 90)',
		invincibleColor: 'rgb(255, 160, 180)', //無敵状態での色
		startX: 675, // 自機の開始位置
		startY: 400, // 自機の開始位置
		speed: 5, //1フレームで自機が進むピクセル数
		speedSlow: 3, //1フレームで自機がAltを押しているときに進むピクセル数
		shotSpeed: 4, //1フレームで玉が進むピクセル数
		shotSpan: 10, //キー押しっぱなしのときに、何フレームごとに玉を発射するか
		shotRadians: [-60, -20, 0, 20, 60], // 玉を発射する角度(上方向を0をし、反時計回りに増えていく)
		shotColor: 'rgb(200, 50, 0)',
		shotSize: 3,
		invincibleTime: 100 // start時から何フレーム間、無敵ですか
	},
	S: { // スコア関係
		start: 0, // ゲーム開始時のスコア
		charHit2enemy: -500, // 敵に当たったとき
		charHit2shot: -200,
		enemyHit2shot: 10,
		len2Score: function (len) {
			return len > 30 ? 0 : len < 20 ? 10 : (30 - len) << 0;
		} // 独自機能: 自分が、敵の弾に近いときにも点数を追加する
	}
}

window.onload = function () {
	var info = document.getElementById('info');

	var screenCanvas = document.getElementById('screen');
	var ctx = screenCanvas.getContext('2d');
	screenCanvas.width = _.Screen.width;
	screenCanvas.height = _.Screen.height;

	var mouseX = 0;
	var mouseY = 0;
	var isMousePressing = false;
	var isCheat = false;
	var keys = [0]; // 押されているキーが、押された順で先頭からはいっていく
	var isSlow = false;

	screenCanvas.addEventListener('mousemove', function (e) {
		mouseX = e.clientX - screenCanvas.offsetLeft;
		mouseY = e.clientY - screenCanvas.offsetTop;
	}, true); // mouseX,Yをセット

	screenCanvas.addEventListener('mousedown', function (e) {
		isMousePressing = true;
	}, true); // isMousePressingをセット

	screenCanvas.addEventListener('mouseup', function (e) {
		isMousePressing = false;
	}, true); // isMousePressingをセット

	document.addEventListener('keydown', function (e) {
		isSlow = e.ctrlKey;
		isCheat = e.altKey && e.ctrlKey;
		if (!keys.some((key) => key == e.keyCode)) { // keys にはいっていないキーが押されたか?
			keys.push(e.keyCode);
			console.log(keys);
		}
		if (e.keyCode != 116 && e.keyCode != 122) // 116は、F5
			e.preventDefault();
	}, true); // isSlow,isCheat,keysをセット

	document.addEventListener('keyup', function (e) {
		isSlow = e.ctrlKey;
		isCheat = e.altKey && e.ctrlKey;
		keys = keys.filter((key) => key != e.keyCode); // keysから、離されたキーを除外
		console.log(keys, e.keyCode);
		if (e.keyCode != 116 && e.keyCode != 122) // 116は、F5
			e.preventDefault();
	}, true); // isSlow,isCheat,keysをセット

	var invincibleTime = _.C.invincibleTime; // あと何フレームの間、無敵か。
	var time = 0; //開始からのフレーム数
	var life = _.C.life;
	var score = _.S.start;
	var char = new Character();
	var charShots = new Shots(_.C.shotColor, _.C.shotSize);
	var enemys = new Enemys();
	var enemyShots = new Shots('rgb(10, 100, 230)', 5);
	var infoUpdater = (function () {
		var prevText = "";
		return function (text) {
			if (text != prevText) info.innerHTML = text;
			prevText = text;
		}
	})(); // textに、前と違うのがはいったときだけ更新する関数が代入されている。
    var img = new Image();
    img.src = "../Brain G/back2.jpg";
	(function loop() {
		if (life < 0) {
			// GAME OVER 時
			document.getElementById("gameover").innerText = "GAME OVER\nSCORE: " + score;
			document.getElementById("gameover-wrap").classList.remove("hidden");
			document.getElementById("gameover-wrap").classList.add("shown");
			info.innerHTML = `Life: ${Math.max(0, life)}`;
			return;
		} else {
			time++;
			if (!isSlow || time % 2 == 0) { // スローの時は、本当にコマ送りが遅くなるべきだと思うんです。楽しいし。
				var moveKey = keys.filter((key) => ([102, 100, 104, 98, 105, 103, 99, 97]).indexOf(key) >= 0); // [102, 100, 104, 98, 105, 103, 99, 97]のキーのうちで最後に押されたもの
				char.tick(
					isCheat,
					mouseX,
					mouseY,
					moveKey[moveKey.length - 1],
					isSlow,
					isMousePressing || keys.some((key) => (key == 32 || key == 101)), // 発射キーが押されているか?
					charShots);
				charShots.tick();
				enemys.tick(char.x, char.y, enemyShots);
				enemyShots.tick();
				invincibleTime = Math.max(-1, invincibleTime - 1);
				// 以下、当たり判定
				{
					var removeEnemy = []; // 自機のたまに当たったりして消える敵のIndexのリスト
					var removeEnemyShot = []; //消える敵の玉のIndexのリスト
					var shouldReduceLife = false; // 自機のLifeを減らすか?
					enemys.enemys.forEach((enemy, enemyIndex) => {
						var shouldRemove = false;
						if (Math.pow(enemy.x - char.x, 2) + Math.pow(enemy.y - char.y, 2) < Math.pow(_.C.size + enemy.size, 2)) {
							// 敵と自機が当たった
							//shouldRemove = true; // もし、自機での特攻でも相手が死ぬなら(=特攻隊を正当なものと思うなら)、この行をコメントアウトする

							if (invincibleTime < 0) {
								shouldReduceLife = true;
								score += _.S.charHit2enemy;
							}
						}
						if (!shouldRemove) {
							charShots.shots.forEach((shot) => {
								if (Math.pow(enemy.x - shot.x, 2) + Math.pow(enemy.y - shot.y, 2) < Math.pow(charShots.size + enemy.size, 2)) {
									// 敵と自機の玉が当たった
									shouldRemove = true;
									score += _.S.enemyHit2shot;
								}
							});
						}
						if (shouldRemove) removeEnemy.push(enemyIndex);
					});

					// 敵の弾と自機の当たり判定
					if (invincibleTime < 0) {
						enemyShots.shots.forEach((shot, i) => {
							var len = Math.pow(char.x - shot.x, 2) + Math.pow(char.y - shot.y, 2);
							if (len < Math.pow(_.C.size + enemyShots.size, 2)) {
								// 敵の玉と自機が当たった
								shouldReduceLife = true;
								score += _.S.charHit2shot;
								if (removeEnemyShot.indexOf(i) < 0) removeEnemyShot.push(i);
							} else score += _.S.len2Score(Math.sqrt(len - _.C.size - enemyShots.size));
						});
					}
					// 実際に取り除く
					for (var i = removeEnemy.length - 1; i >= 0; i--) enemys.enemys.splice(removeEnemy[i], 1);
					for (var i = removeEnemyShot.length - 1; i >= 0; i--) enemyShots.shots.splice(removeEnemyShot[i], 1);
					// 実際にreduce life.
					if (shouldReduceLife) {

						life--;
						if (life >= 0) {
							char.x = _.C.startX;
							char.y = _.C.startY;
							invincibleTime = _.C.invincibleTime;
						}
					}
				}

				// 以下、描画処理

				infoUpdater(`Score: ${score} | Life: ${Math.max(0, life)}`);
				//ctx.clearRect(0, 0, _.Screen.width, _.Screen.height);

				ctx.globalCompositeOperation = "source-over";
				ctx.globalAlpha = .5;
				ctx.fillStyle="#EEE";
				ctx.fillRect(0, 0, _.Screen.width, _.Screen.height);
				ctx.globalAlpha = .2;
				ctx.drawImage(img, 0, 0, _.Screen.width, _.Screen.height);
				ctx.globalAlpha = 1;
				ctx.globalCompositeOperation = "overlay";
				enemys.draw(ctx);
				enemyShots.draw(ctx);
				charShots.draw(ctx);
				char.draw(ctx, invincibleTime >= 0);
				enemys.draw(ctx);
				enemyShots.draw(ctx);
				charShots.draw(ctx);
				char.draw(ctx, invincibleTime >= 0);
				enemys.draw(ctx);
				enemyShots.draw(ctx);
				charShots.draw(ctx);
				char.draw(ctx, invincibleTime >= 0);
			}
		}
		requestAnimationFrame(loop); // 繰り返す
	})();
};

/** 全てのキャラクター・玉のベースとなります*/
class CharacterBase {
	/** extendしたクラスに実際の処理(例: 自機の初期化)を書く
	 * @param {number} x @param {number} y 
	 */
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	/** extendしたクラスに実際の処理(例: 自機の移動・玉の発射)を書く
	 * 一フレームごとに呼ばれる
	 * @param {any} args 
	 */
	tick(...args) { /*ここでは何もしない。*/ }
	/** extendしたクラスに実際の処理(例: 自機の描画)を書く
	 * @param {CanvasRenderingContext2D} ctx どの ctx に描画するのかを指定する
	 */
	draw(ctx) { /*ここでは何もしない。*/ }
}

class Character extends CharacterBase {
	constructor() {
		super(_.C.startX, _.C.startY);
		this.shotCount = 0; // 玉を10フレームごとに打つために使う
	}
	/**@param {boolean} isCheat チートモード(マウス座標へのワープ)であるか
	 * @param {number} mouseX マウスX座標
	 * @param {number} mouseY マウスY座標
	 * @param {number} Key 押しているキーコード
	 * @param {boolean} isSlow ゆっくり動くか
	 * @param {boolean} isFire 玉発射モードか?
	 * @param {Shots} Shots どのShotsにタマを追加するのか
	 */
	tick(isCheat, mouseX, mouseY, Key, isSlow, isFire, Shots) {
		// 自機の移動
		if (isCheat) {
			this.x = mouseX;
			this.y = mouseY;
			return; //この関数(= tick)内での処理をここでやめることを意味する
		} else {
			var speed = isSlow ? _.C.speedSlow : _.C.speed; // isAltがtrueなら_.C.speed、それ以外は_.C.speedSlowを代入
			if (Key === 102) this.x += speed;
			if (Key === 100) this.x -= speed;
			if (Key === 104) this.y -= speed;
			if (Key === 98) this.y += speed;
			speed /= Math.SQRT2; //斜めに動く時だけ普通の √2倍速 になることを回避
			if (Key === 105) {
				this.x += speed;
				this.y -= speed;
			}
			if (Key === 103) {
				this.x -= speed;
				this.y -= speed;
			}
			if (Key === 99) {
				this.x += speed;
				this.y += speed;
			}
			if (Key === 97) {
				this.x -= speed;
				this.y += speed;
			}
		}
		this.x = Math.min(_.Screen.width, Math.max(0, this.x)); //画面外に移動させないため
		this.y = Math.min(_.Screen.height, Math.max(0, this.y)); //画面外に移動させないため
		// たまの発射
		if (isFire) {
			if (this.shotCount == 0) {
				_.C.shotRadians.forEach(function (value) {
					Shots.shots.push({
						x: this.x,
						y: this.y,
						dx: Math.cos((value - 90) * Math.PI * 2 / 360) * _.C.shotSpeed, // cos は、数学系の関数の一つですので、教科書でも読んで下さい
						dy: Math.sin((value - 90) * Math.PI * 2 / 360) * _.C.shotSpeed // sin は、(以下同文)
					})
				}, this);
			}
			this.shotCount++; // 1足して
			this.shotCount %= _.C.shotSpan; // _.C.ShotSpanで割ったあまりにする。
		} else {
			this.shotCount = 0; // キーを始めに押したときに、すぐ発射されるようにするため
		}
	}
	/**@param {CanvasRenderingContext2D} ctx
	 * @param {boolean} isInvincible 無敵状態か?
	 */
	draw(ctx, isInvincible) {
		ctx.beginPath();
		ctx.arc(this.x, this.y, _.C.size, 0, Math.PI * 2, false);
		ctx.fillStyle = isInvincible ? _.C.invincibleColor : _.C.color;
		ctx.fill();
	}
}

class Shots {
	/**
	 * @param {string} color 
	 * @param {number} size
	 */
	constructor(color, size) {
		/**@type {{x:number,y:number,dx:number,dy:number}[]} */
		this.shots = [];
		this.color = color;
		this.size = size;
	}
	tick() {
		for (var i = this.shots.length - 1; i >= 0; i--) {
			this.shots[i].x += this.shots[i].dx;
			this.shots[i].y += this.shots[i].dy;
			if (this.shots[i].x < -this.size || this.shots[i].y < -this.size || this.shots[i].x > _.Screen.width + this.size || this.shots[i].y > _.Screen.height + this.size) { //画面外判定
				this.shots.splice(i, 1); // shotsから取り除く
			}
		}
	}
	/** 
	 * @param {CanvasRenderingContext2D} ctx どの ctx に描画するのかを指定する
	 */
	draw(ctx) {
		ctx.fillStyle = this.color;
		ctx.beginPath();
		for (var i = 0; i < this.shots.length; i++) {
			ctx.arc(
				this.shots[i].x,
				this.shots[i].y,
				this.size,
				0, Math.PI * 2, false
			);
			ctx.closePath();
		}
		ctx.fill();
	}
}

class Enemys {
	constructor() {
		/** _は、各Typeに固有のものがはいる(速度など)
		 *  shotCounting は、たまの発射に使われる
		 * @type {{x:number,y:number,size:number,type:number,shotCounting:0,_:any[]}[] */
		this.enemys = [];
		this.tickCount = 0; // テキの出現のために使う
	}
	/**
	 * @param {number} charX 自機のX座標
	 * @param {number} charY 自機のY座標
	 * @param {Shots} Shots どのShotsにタマを追加するのか
	 */
	tick(charX, charY, Shots) {
		{ // 出現
			// Type==0 の敵について。60フレームごとに。
			if (this.tickCount % 60 == 0) {
				var size = 15; //敵のサイズ
				this.enemys.push({
					x: -size,
					y: _.Screen.height / 3,
					size: size,
					shotCounting: 0,
					type: 0
				})
			}
			// Type==1
			if (this.tickCount % 60 == 20) {
				var size = 15; //敵のサイズ
				this.enemys.push({
					x: _.Screen.width + size,
					y: _.Screen.height / 3,
					size: size,
					shotCounting: 0,
					type: 1
				})
			}
			// Type==2
			if (this.tickCount % 60 == 40) {
				var size = 15; //敵のサイズ
				this.enemys.push({
					x: -size,
					y: 100,
					size: size,
					shotCounting: 0,
					type: 2
				})
			}
			this.tickCount++;
		}
		for (var i = this.enemys.length - 1; i >= 0; i--) { // 各Enemyに注目する
			var it = this.enemys[i]; // 今、注目しているEnemy
			// 移動
			switch (it.type) {
				case 0:
					it.x += 3;
					break;
				case 1:
					it.x -= 3;
					it.y -= 1;
					break;
				case 2:
					it.x -= 3;
					break;
			}
			// 玉を打つ
			if (it.shotCounting % 60 == 0) {
				var speed = 5; // 弾の速さ
				// 以下、charaに向けて発射する作業
				var vec = [charX - it.x, charY - it.y];
				var length = Math.sqrt(Math.pow(it.x - charX, 2) + Math.pow(it.y - charY, 2)) / speed;
				Shots.shots.push({
					x: it.x,
					y: it.y,
					dx: vec[0] / length,
					dy: vec[1] / length
				});
			}
			it.shotCounting++;
			if (it.x < -it.size || it.y < -it.size || it.x > _.Screen.width + it.size || it.y > _.Screen.height + it.size) { //画面外判定
				this.enemys.splice(i, 1); // enemysから取り除く
			}
		}
	}
	/** 
	 * @param {CanvasRenderingContext2D} ctx どの ctx に描画するのかを指定する
	 */
	draw(ctx) {
		ctx.fillStyle = "rgb(10, 100, 230)";
		ctx.beginPath();
		for (var i = 0; i < this.enemys.length; i++) {
			ctx.arc(
				this.enemys[i].x,
				this.enemys[i].y,
				this.enemys[i].size,
				0, Math.PI * 2, false
			);
			ctx.closePath();
		}
		ctx.fill();
	}
}