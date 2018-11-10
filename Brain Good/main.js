// - global -------------------------------------------------------------------
var screenCanvas, info;
var run = true;
var fps = 1000 / 100;
var mouse = new Point();
var ctx;
var fire = false;
var counter = 0;
var SHOT_counter = 0;
var chara;
var IsCheating = false;
var Arecheating = false;
var Wascheating = false;
var Key = 0;
var IsSlow = false;
var ENEMY_SHOT_COLOR = 'rgba(80,150,50 , 1)';
var ENEMY_SHOT_MAX_COUNT = 10000;
var point = 0;
var life = 5;
var invincible = false;
// - const --------------------------------------------------------------------
var CHARA_COLOR　 //下に
var CHARA_SHOT_COLOR = 'rgba(200, 50, 0, 1)';
var CHARA_SHOT_MAX_COUNT = 1000;
var ENEMY_COLOR = 'rgba(50,200,50 , 0.8)';
var ENEMY_MAX_COUNT = 100;

// - main ---------------------------------------------------------------------
window.onload = function () {
    var img = new Image();
    img.src = "../Brain G/back4.bmp";
    var i, j;
    var p = new Point();

    screenCanvas = document.getElementById('screen');
    screenCanvas.width = 1364;
    screenCanvas.height = 650;
    ctx = screenCanvas.getContext('2d');
    screenCanvas.addEventListener('mousemove', mouseMove, true);
    screenCanvas.addEventListener('mousedown', mouseDown, true);
    screenCanvas.addEventListener('mouseup', mouseUp, true);
    document.addEventListener('keydown', keyDown, true);
    document.addEventListener('keyup', keyUp, true);
    info = document.getElementById('info');

    chara = new Character();
    chara.init(10);

    var charaShot = new Array(CHARA_SHOT_MAX_COUNT);
    for (i = 0; i < charaShot.length; i++)
        charaShot[i] = new CharacterShot();
    var enemyShot = new Array(ENEMY_SHOT_MAX_COUNT);
    for (i = 0; i < enemyShot.length; i++)
        enemyShot[i] = new EnemyShot();

    // - 敵キャラクター用インスタンスの初期化-------------------------------
    var enemy = new Array(ENEMY_MAX_COUNT);
    for (i = 0; i < ENEMY_MAX_COUNT; i++)
        enemy[i] = new Enemy();
    chara.position.x = 675;
    chara.position.y = 400;
    var slowCount = 0;
    (function () {
        slowCount++;
        if (!IsSlow || slowCount % 5 == 0) {
            ctx.clearRect(0, 0, screenCanvas.width, screenCanvas.height);
            ctx.globalCompositeOperation = "source-over";
            ctx.globalAlpha = .5;
            ctx.drawImage(img, 0, 0, screenCanvas.width, screenCanvas.width);
            ctx.globalAlpha = 1;
            // - 自機 ---------------------------------------------------------------
            ctx.beginPath();
            if (IsCheating) {
                chara.position.x = mouse.x;
                chara.position.y = mouse.y;
            } else {
                var speed = 10;
                if (IsSlow) speed = 5;
                if (Key === 39) {
                    chara.position.x += speed;
                }
                if (Key === 37) {
                    chara.position.x -= speed;
                }
                if (Key === 38) {
                    chara.position.y -= speed;
                }
                if (Key === 40) {
                    chara.position.y += speed;
                }
                /* if (Key === 38 && 39) {
                     chara.position.x += speed;
                     chara.position.y -= speed;
                 }
                 if (Key === 37 && 38) {
                     chara.position.x -= speed;
                     chara.position.y -= speed;
                 }
                 if (Key === 39 && 40) {
                     chara.position.x += speed;
                     chara.position.y += speed;
                 }
                 if (Key === 37 && 40) {
                     chara.position.x -= speed;
                     chara.position.y += speed;
                 }*/
            }

            ctx.arc(chara.position.x, chara.position.y, chara.size, 0, Math.PI * 2, false);
            ctx.fillStyle = CHARA_COLOR;
            ctx.fill();

            // fireフラグの値により分岐
            if (fire) {
                if (SHOT_counter % 10 === 0) {
                    // すべての自機ショットを調査する
                    var Count = 0;
                    for (i = 0; i < charaShot.length; i++) {
                        if (!charaShot[i].alive) {
                            switch (Count) {
                                case 0:
                                    charaShot[i].set(chara.position, 3, 0, 3);
                                    break;
                                case 1:
                                    if (Arecheating) charaShot[i].set(chara.position, 3, 1, 3);
                                    break;
                                case 2:
                                    if (Arecheating) charaShot[i].set(chara.position, 3, -1, 3);
                                    break;
                                case 3:
                                    if (Arecheating) charaShot[i].set(chara.position, 3, 3, 3);
                                    break;
                                case 4:
                                    if (Arecheating) charaShot[i].set(chara.position, 3, -3, 3);
                                    break;
                                case 5:
                                    if (Arecheating) charaShot[i].set(chara.position, 3, 5, 3);
                                    break;
                                case 6:
                                    if (Arecheating) charaShot[i].set(chara.position, 3, -5, 3);
                                    break;
                                case 7:
                                    if (Arecheating) charaShot[i].set(chara.position, 3, 7, 3);
                                    break;
                                case 8:
                                    if (Arecheating) charaShot[i].set(chara.position, 3, -7, 3);
                                    break;
                                case 9:
                                    if (Arecheating) charaShot[i].set(chara.position, 3, 9, 2);
                                    break;
                                case 10:
                                    if (Arecheating) charaShot[i].set(chara.position, 3, -9, 2);
                                    break;
                                case 11:
                                    if (Arecheating) charaShot[i].set(chara.position, 3, 9, 0);
                                    break;
                                case 12:
                                    if (Arecheating) charaShot[i].set(chara.position, 3, -9, 0);
                                    break;
                                case 13:
                                    if (Arecheating) charaShot[i].set(chara.position, 3, 0, -3);
                                    break;
                                case 14:
                                    if (Arecheating) charaShot[i].set(chara.position, 3, 1, -3);
                                    break;
                                case 15:
                                    if (Arecheating) charaShot[i].set(chara.position, 3, -1, -3);
                                    break;
                                case 16:
                                    if (Arecheating) charaShot[i].set(chara.position, 3, 3, -3);
                                    break;
                                case 17:
                                    if (Arecheating) charaShot[i].set(chara.position, 3, -3, -3);
                                    break;
                                case 18:
                                    if (Arecheating) charaShot[i].set(chara.position, 3, 5, -3);
                                    break;
                                case 19:
                                    if (Arecheating) charaShot[i].set(chara.position, 3, -5, -3);
                                    break;
                                case 20:
                                    if (Arecheating) charaShot[i].set(chara.position, 3, 7, -3);
                                    break;
                                case 21:
                                    if (Arecheating) charaShot[i].set(chara.position, 3, -7, -3);
                                    break;
                                case 22:
                                    if (Arecheating) charaShot[i].set(chara.position, 3, 9, -2);
                                    break;
                                case 23:
                                    if (Arecheating) charaShot[i].set(chara.position, 3, -9, -2);
                                    break;

                                default:
                                    break;
                            }
                            Count++;
                            if (Count > 23) break;
                        }
                    }

                }
                SHOT_counter++;
                // fire = false;
            }
            // - shot --------------------------------------------------------
            ctx.fillStyle = CHARA_SHOT_COLOR;
            ctx.beginPath();
            for (i = 0; i < charaShot.length; i++) {
                if (charaShot[i].alive) {
                    charaShot[i].move();
                    ctx.arc(
                        charaShot[i].position.x,
                        charaShot[i].position.y,
                        charaShot[i].size,
                        0, Math.PI * 2, false
                    );
                    ctx.closePath();
                }
            }
            ctx.fill();

            if (!Wascheating) {
                if (!invincible) {
                    for (j = 0; j < ENEMY_SHOT_MAX_COUNT; j++) {
                        if (!enemyShot[j].alive) continue;
                        if (Math.pow(chara.position.x - enemyShot[j].position.x, 2) +
                            Math.pow(chara.position.y - enemyShot[j].position.y, 2) <=
                            Math.pow(enemyShot[j].size + chara.size, 2)) {
                            life -= 1;
                            invincible = true;
                            chara.position.x = 675;
                            chara.position.y = 400;
                            setTimeout(function () {
                                invincible = false;
                            }, 3000);
                            enemyShot[j].alive = false;
                            point -= 1000;
                        }
                    }
                    for (j = 0; j < ENEMY_MAX_COUNT; j++) {
                        if (!enemy[j].alive) continue;
                        if (Math.pow(chara.position.x - enemy[j].position.x, 2) +
                            Math.pow(chara.position.y - enemy[j].position.y, 2) <=
                            Math.pow(enemy[j].size + chara.size, 2)) {
                            life -= 1;
                            invincible = true;
                            chara.position.x = 675;
                            chara.position.y = 400;
                            setTimeout(function () {
                                invincible = false;
                            }, 3000);
                            enemy[j].alive = false;
                            point -= 1000;
                        }
                    }
                }
            }
            ChangeColor();





            // エネミーの出現管理 -------------------------------------------------
            // 100 フレームに一度出現させる
            if (counter % 20 === 0) {
                // すべてのエネミーを調査する
                for (i = 0; i < ENEMY_MAX_COUNT; i++) {
                    // エネミーの生存フラグをチェック
                    if (!enemy[i].alive) {
                        // タイプを決定するパラメータを算出
                        j = (counter % 60) / 20;

                        // タイプに応じて初期位置を決める
                        var enemySize = 15;
                        p.x = -enemySize + (screenCanvas.width + enemySize * 4) * j
                        p.y = screenCanvas.height / 4;
                        if (j == 1) {
                            p.y = 100;
                        }
                        // エネミーを新規にセット
                        enemy[i].set(p, enemySize, j);

                        // 1体出現させたのでループを抜ける
                        break;
                    }
                }
            }
            counter++;

            // - エネミー制御 ----------------------------------------------------
            ctx.fillStyle = ENEMY_COLOR;
            ctx.beginPath();
            // すべてのエネミーを調査する
            for (i = 0; i < ENEMY_MAX_COUNT; i++) {
                // エネミーの生存フラグをチェック
                if (enemy[i].alive) {
                    // エネミーを動かす
                    enemy[i].move();

                    // エネミーを描くパスを設定
                    ctx.arc(
                        enemy[i].position.x,
                        enemy[i].position.y,
                        enemy[i].size,
                        0, Math.PI * 2, false
                    );
                    enemy[i].param++;
                    // ショットを打つかどうかパラメータの値からチェック
                    if (enemy[i].param % 80 === 0) {
                        // エネミーショットを調査する

                        for (j = 0; j < ENEMY_SHOT_MAX_COUNT; j++) {
                            if (!enemyShot[j].alive) {
                                if (enemy[i].type == 0) {
                                    // エネミーショットを新規にセットする
                                    p = enemy[i].position.distance(chara.position);
                                    p.normalize();
                                    enemyShot[j].set(enemy[i].position, p, 8, 5);
                                } else {
                                    enemyShot[j].set(enemy[i].position, {
                                        x: 0,
                                        y: 1.5
                                    }, 8, 5);
                                }
                                // 1個出現させたのでループを抜ける
                                break;
                            }
                        }
                    }
                    // パスをいったん閉じる
                    ctx.closePath();
                }
            }
            ctx.fill();
            // - エネミー制御 ----------------------------------------------------
            ctx.fillStyle = ENEMY_SHOT_COLOR;
            ctx.beginPath();
            // すべてのエネミーShotを調査する
            for (i = 0; i < ENEMY_MAX_COUNT; i++) {
                if (!enemyShot[i].alive) continue;
                enemyShot[i].move();
                ctx.arc(
                    enemyShot[i].position.x,
                    enemyShot[i].position.y,
                    enemyShot[i].size,
                    0, Math.PI * 2, false
                );
                ctx.closePath();
            }
            ctx.fill();
            // あたり判定
            // すべてのエネミーを調査する
            for (i = 0; i < ENEMY_MAX_COUNT; i++) {
                if (!enemy[i].alive) continue;
                for (j = 0; j < CHARA_SHOT_MAX_COUNT; j++) {
                    if (!charaShot[i].alive) continue;
                    if (Math.pow(enemy[i].position.x - charaShot[j].position.x, 2) +
                        Math.pow(enemy[i].position.y - charaShot[j].position.y, 2) <=
                        Math.pow(charaShot[j].size + enemy[i].size, 2)) {
                        enemy[i].alive = false;
                        charaShot[j].alive = false;
                        point += 100;
                    }
                }
            }
        }
        info.innerHTML = "Score" + point + "||" + "Life" + life;
        if (life < 0) {
            // 死んでる
            ShowGameover("Score || " + point);
        } else {
            requestAnimationFrame(arguments.callee);
        }
    })();
};

// - event --------------------------------------------------------------------
function mouseMove(event) {
    mouse.x = event.clientX - screenCanvas.offsetLeft;
    mouse.y = event.clientY - screenCanvas.offsetTop;
}

function mouseDown(event) {
    fire = true;
    SHOT_counter = 0;
}

function mouseUp(event) {
    fire = false;
}

function keyDown(event) {
    var ck = event.keyCode;
    // 通常
    if (ck === 27) {
        run = false;
        return;
    }
    if (ck === 32) {
        if (!fire)
            mouseDown();
        return;
    }
    if (ck === 101) {
        if (!fire)
            mouseDown();
        return;
    }
    console.log(ck);
    Key = ck;
    // チート
    if (event.altKey && event.ctrlKey) {
        IsCheating = true;
    }
    if (event.shiftKey)
        IsSlow = true;
    else
        IsSlow = false;
    if (event.shiftKey && event.ctrlKey) {
        Arecheating = true;
    }
    if (event.ctrlKey && ck === 90) {
        Wascheating = true;
    }

}

function keyUp(event) {
    var ck = event.keyCode;
    if (ck === 32) {
        mouseUp();
        return;
    }
    if (ck === 101) {
        mouseUp();
        return;
    }
    if (ck === 12) {
        IsSlow = false;
        return;
    }
    Key = 0;
    // チート
    if ((ck === 17) && (18)) {
        IsCheating = false;
    }
    if (ck === 16 && 17) {
        Arecheating = false;
    }
    if (event.ctrlKey && ck === 90) {
        Wascheating = false;
    }
}

function ChangeColor() {
    if (invincible) {
        CHARA_COLOR = 'rgba(240, 150, 170, 0.8)';
    } else if (Wascheating) {
        CHARA_COLOR = 'rgba(50, 50, 255, 1)';
    } else CHARA_COLOR = 'rgba(255, 100, 120, 0.8)';
}

function ShowGameover(text) {
    document.getElementById("gameover-wrap").classList.remove("hide");
    document.getElementById("gameover-wrap").classList.add("shown");
    document.getElementById("gameover-text").innerText = text;
}