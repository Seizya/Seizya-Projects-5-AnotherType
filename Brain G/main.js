/*window.addEventListener("load", () => {
  var f = false;
  setInterval(()=>f?[hideKIDOU(),showKIDOU()]:0,5000);
  document.addEventListener("keyup", e => {
    if (e.key == "@") {
      if (f = !f) showKIDOU();
      else hideKIDOU();
    }
  })
});*/
// - global -------------------------------------------------------------------
var screenCanvas;
var offScreenCanvas_ShotOnly; // New: ctx_ShotOnlyを作るための仮のキャンバス。
var offScreenCanvas_ZanZo; // New: ctx_ShotOnlyを作るための仮のキャンバス。
var run = true;
var fps = 100 / 100;
var mouse = new Point();
/**@type{CanvasRenderingContext2D} */
var ctx;
var ctx_ShotOnly; // New: showKIDOU == true のとき、玉はここへ描画します。
var ctx_ZanZo; // New: showKIDOU == true のとき、玉はここへ描画します。
var fire = true;
var counter = 0;
var B_counter = 0;
var T_counter = 0;
var BS_counter = 0;
//var chara;
var slow = false;
var Key = 0;
var score = 0;
var scorep = 1;
var world, world2;
var Music = false;
var invisible = false;
var _invincible = true;
Object.defineProperty(window, "invincible", {
  set: (v) => {
    console.warn("invincible", v);
    _invincible = v;
    if (v == true) {
      C_attack = 2000;
      C_defence = 100;
      fCC_78 = true;
    } else {
      C_attack = 5;
      C_defence = 3;
      fCC_78 = false;
    }
  },
  get: () => _invincible
});
var hitalive = true;
// - const --------------------------------------------------------------------
//Charactor
var C_color = 'rgba(255,255,255,1)';
var C_scolor = 'rgba(0,0,0,1)';
var C_s2color = 'rgba(255,255,255,1)';
var C_smaxcount = 10000;
var C_name = "";
var C_hp = 5;
var C_sabhp = 5;
var C_attack = 5;
var C_defence = 3;
var C_speed = 5;
var C_accelate = 20;
var C_outsize = 0;
var C_hpgage = 80;
var C_sabhpgagecolor = 'rgba(52,87,119,1)';
var C_worldx, C_worldy;
var keyspace = undefined;
var C_level;
var C_shot0v = {
  x: undefined,
  y: undefined
};
var C_shot1v = {
  x: undefined,
  y: undefined
};
var C_shot2v = {
  x: undefined,
  y: undefined
};
//Charactor sab
var CS_color = 'rgba(0,0,0,1)';
var CS_1 = {
  x: undefined,
  y: undefined
};
var CS_2 = {
  x: undefined,
  y: undefined
};
var CS_3 = {
  x: undefined,
  y: undefined
};
var CS_4 = {
  x: undefined,
  y: undefined
};
var CS_late = {
  x: undefined,
  y: undefined
};
var CS_size;
var CS_far = 20;
var C_stime = 15;
//Enemy
var E_color = 'rgba(10, 100, 230, 0.6)';
var E_scolor = 'rgba(0, 50, 255, 1)';
var E_maxcount = 100;
var E_smaxcount = 1000;
var E_attack = 3;
var E_defence = 1;
//boss
const B_maxhp = 1000
var B_hp = B_maxhp;
var _B_sabhp = 4;
Object.defineProperty(window, "B_sabhp", {
  set: (v) => {
    console.warn("B_sabhp", v);
    _B_sabhp = v;
  },
  get: () => _B_sabhp
});
var B_style = true;
var B_color = 'rgba(35, 71, 130,1)'; //'hsla(217,57,32)';
var B_scolor = 'rgba(217,66,54,0.9)';
var B_s2color = 'rgba(255,255,0,1)';
var B_s3color = 'rgba(255,255,255,1)';
var B_smaxcount = 10000;
var B_attack = 5;
var B_defence = 3;
var B_invisible = false;
var B_4sfar = 0;
var B_shotc = 0;
var B_pop = true;
var B_name = undefined; //Neko(天狐),Skyless Fox(空狐)
var B_worldx, B_worldy;
var BS_color = 'rgba(196, 136, 71,1)';
var B_rtime = undefined;
var B_rspeed = undefined;
var B_rsize = undefined;
var B_shotp1 = {
  x: undefined,
  y: undefined,
  size: 0,
  c: true
};
var B_shotp2 = {
  x: undefined,
  y: undefined,
  size: 0,
  c: true
};
var B_shotp3 = {
  x: undefined,
  y: undefined,
  size: 0,
  c: true
};
var B_shotp4 = {
  x: undefined,
  y: undefined,
  size: 0,
  c: true
};
var B_swall = {
  x: -20,
  y: -20
};
//Size---------------------
var width, height;
//Key---------------------
var up, down, right, left, not;
var key0, key1, key2, key3, key4, key5, key6, key7, key8, key9, keyplus, keyminus;
var keyq = true;
var keya, keyd, keyw, keys, keyf, keyshift, keyctrl, keyesc, keyalt, keyenter, keydot, keyf1
//Cheat----------------------
var CC_key = true;
var CC_pass = false;
var CC_passc = undefined;
var fCC_12 = false;
var fCC_23 = {
  TF: false,
  c: 1
};
var fCC_45 = false;
var fCC_78 = false;
var fCC_89 = undefined;
var L_main = 1;
var operation = 1;
//Skill----------------------
var S_point = 0;
var S_bmaxcount = 120;
var S_bfar = 60 * world;
var S_bcolor = 'rgba(139,69,19,1)';
var S_0 = false;
//Sytem-*--------------------
var charactor, enemy, boss, bossCount, C_shot, E_shot, B_shot0, B_shot1, B_shot2_shot3, B_shot4, B_shot5, B_shot6;
var log = () => 0;
var isLogEnable = true;
var fontsize = 50;
var Game_count = 2;
var sc = {
  center: undefined,
  w: undefined,
  h: undefined
};
var menus = {
  x: 0,
  y: 0
};
var menuz = [];
var sc_size = true;
var shouldshowKIDOU = false;
var img_max = 10;
var img = [];
// New: 下の2つの **関数** を定義しました
function showKIDOU() {
  shouldshowKIDOU = true;
}

function hideKIDOU() {
  shouldshowKIDOU = false;
  ctx_ShotOnly.clearRect(0, 0, offScreenCanvas_ShotOnly.width, offScreenCanvas_ShotOnly.height);
  ctx_ZanZo.clearRect(0, 0, offScreenCanvas_ZanZo.width, offScreenCanvas_ZanZo.height);
}
// - main ---------------------------------------------------------------------
window.onload = function () {
  if (isLogEnable)
    log = setLogger(document.getElementById("log"), 100, false);
  else document.getElementById("log").remove();
  C_level = Math.floor(Math.random() * 9 + 1);
  var a, b, c, d, e, f, g, h, /*i,j*/ k, l, m, n, o, /*p,q,*/ r, s, t, u;
  var p = new Point();

  width = document.documentElement.clientWidth - 2;
  height = document.documentElement.clientHeight - 2;
  screenCanvas = document.getElementById('screen');
  screenCanvas.width = width;
  screenCanvas.height = height;
  sc.w = screenCanvas.width;
  sc.h = screenCanvas.height;
  sc.center = {
    h: sc.h / 2,
    w: sc.w / 2
  };
  ctx = screenCanvas.getContext('2d');
  screenCanvas.addEventListener('mousemove', mouseMove, true);
  document.addEventListener('keydown', keyDown, true);
  document.addEventListener('keyup', keyUp, true);

  //#region New: offScreenCanvas関係。  (こんな感じで、regionで囲むとその部分をエディターで折りたためるようになる)
  offScreenCanvas_ShotOnly = document.createElement("canvas");
  offScreenCanvas_ShotOnly.width = screenCanvas.width;
  offScreenCanvas_ShotOnly.height = screenCanvas.height;
  ctx_ShotOnly = offScreenCanvas_ShotOnly.getContext("2d");
  offScreenCanvas_ZanZo = document.createElement("canvas");
  offScreenCanvas_ZanZo.width = screenCanvas.width;
  offScreenCanvas_ZanZo.height = screenCanvas.height;
  ctx_ZanZo = offScreenCanvas_ZanZo.getContext("2d");
  //#endregion

  //画像読み込み----------------------------------------\
  for (u = 0; u <= img_max; u++) {
    img.push(u);
    img[u] = new Image();
  };

  img[0].src = "img/back9.bmp";;
  img[1].src = "img/Boss1.png";

  // - キャラクター用インスタンス--------------------------
  charactor = new Character();
  charactor.init(10);

  boss = new Boss();

  enemy = new Array(E_maxcount);
  for (a = 0; a < E_maxcount; a++)
    enemy[a] = new Enemy();
  // - ショット用インスタンス-------------------------------  
  bossCount = 0;

  C_shot0 = new Array(C_smaxcount);
  for (c = 0; c < C_shot0.length; c++)
    C_shot0[c] = new CharaShot0();

  C_shot1 = new Array(C_smaxcount);
  for (g = 0; g < C_shot1.length; g++)
    C_shot1[g] = new CharaShot1();

  C_shot2 = new Array(C_smaxcount);
  for (h = 0; h < C_shot2.length; h++)
    C_shot2[h] = new CharaShot2();

  C_shot3 = new Array(C_smaxcount);
  for (s = 0; s < C_shot3.length; s++)
    C_shot3[s] = new CharaShot3();

  C_shot4 = new Array(C_smaxcount);
  for (t = 0; t < C_shot4.length; t++)
    C_shot4[t] = new CharaShot4();

  E_shot = new Array(E_smaxcount);
  for (d = 0; d < E_shot.length; d++)
    E_shot[d] = new EnemyShot();

  B_shot0 = new Array(B_smaxcount);
  for (e = 0; e < B_shot0.length; e++)
    B_shot0[e] = new BossShot0();

  B_shot1 = new Array(B_smaxcount);
  for (f = 0; f < B_shot1.length; f++)
    B_shot1[f] = new BossShot1();

  B_shot2 = new Array(B_smaxcount);
  for (l = 0; l < B_shot2.length; l++)
    B_shot2[l] = new BossShot2();

  B_shot3 = new Array(B_smaxcount);
  for (m = 0; m < B_shot3.length; m++)
    B_shot3[m] = new BossShot3();

  B_shot4 = new Array(B_smaxcount);
  for (n = 0; n < B_shot4.length; n++)
    B_shot4[n] = new BossShot4();

  B_shot5 = new Array(B_smaxcount);
  for (o = 0; o < B_shot5.length; o++)
    B_shot5[o] = new BossShot5();

  B_shot6 = new Array(B_smaxcount);
  for (r = 0; r < B_shot6.length; r++)
    B_shot6[r] = new BossShot6();
  //S_build----------------------------------------------    
  S_build = new Array(S_bmaxcount);
  for (k = 0; k < S_build.length; k++)
    S_build[k] = new Skillbuild();
  //Main------------------------------------------------------------------------------------------------------------------------
  var slowCount = 0;
  charactor.position.x = sc.center.w;
  charactor.position.y = sc.h / 5 * 4;
  //sytem main-----------------------------------------------------------------  
  var onResize = function () {
    resize(screenCanvas, charactor);
    // New: OffscreenCanvasのサイズも一緒に変える
    offScreenCanvas_ShotOnly.width = screenCanvas.width;
    offScreenCanvas_ShotOnly.height = screenCanvas.height;
    offScreenCanvas_ZanZo.width = screenCanvas.width;
    offScreenCanvas_ZanZo.height = screenCanvas.height;
    ctx_ZanZo.fillStyle = "black";
    ctx_ZanZo.fillRect(0, 0, offScreenCanvas_ZanZo.width, offScreenCanvas_ZanZo.height);
  }; // New: リサイズ時に動いてほしいやつ
  window.onresize = onResize();
  onResize();
  if (sc.h >= sc.w * 1336 / 944) {
    ctx.drawImage(img[0], 0, 0, sc.h * 944 / 1336, sc.h); //944:1336=x:sch  1336*x=944*sch  x=944*sch/1336
  } else {
    ctx.drawImage(img[0], 0, 0, sc.w, sc.w * 1336 / 944); //944:1336=scw:y  944*y=1336*scw  y=scw*1336/944
  }
  C_name = window.prompt("USER_NAME ?", "");

  isLogEnable = false;
  CC_pass = true;
  invincible = false;
  C_defence = 100;

  C_name = "Seizya";
  //operation = 2;
  S_point = 200;
  Game_count = 2;
  //sc_size = false;
  //B_style=1;
  //function---------------------------------------------------------------------------------------
  (function () {
    if (isLogEnable) document.getElementById("log").classList.remove("hide");
    else document.getElementById("log").classList.add("hide");
    //slowCount++;
    if (C_name == "Seizya") {
      CC_key = true;
    } else {
      CC_key = false;
    };
    if (!CC_key) {
      CC_pass = false;
    }
    //sytem main---------------------------------------------------------------
    ctx.clearRect(0, 0, sc.w, sc.h);
    ctx.globalCompositeOoperation = "source-over";
    ctx.globalAlpha = .75; //944,1336
    if (sc.h >= sc.w * 1336 / 944) {
      ctx.drawImage(img[0], 0, 0, sc.h * 944 / 1336, sc.h); //944:1336=x:sch  1336*x=944*sch  x=944*sch/1336
    } else {
      ctx.drawImage(img[0], 0, 0, sc.w, sc.w * 1336 / 944); //944:1336=scw:y  944*y=1336*scw  y=scw*1336/944
    }
    ctx.globalAlpha = 1;
    counter++;
    T_counter = (new Date).getTime();
    changecolor();
    // New: 下のところが色々変わりました。
    C_hpdraw(C_sabhp, ctx);
    B_hpdraw(ctx);
    C_sdraw(ctx);
    CS_draw(CS_1, CS_2, CS_3, CS_4, ctx);
    C_draw(charactor, ctx);
    if (shouldshowKIDOU) {
      ctx_ShotOnly.clearRect(0, 0, offScreenCanvas_ShotOnly.width, offScreenCanvas_ShotOnly.height);
      ctx_ZanZo.fillStyle = "rgba(0,0,0,0.008)";
      ctx_ZanZo.fillRect(0, 0, offScreenCanvas_ZanZo.width, offScreenCanvas_ZanZo.height);
      B_sdraw(ctx_ShotOnly);
      ctx_ZanZo.drawImage(offScreenCanvas_ShotOnly, 0, 0);
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.globalAlpha = 0.6;
      ctx.drawImage(offScreenCanvas_ZanZo, 0, 0);
      ctx.restore();
      ctx.drawImage(offScreenCanvas_ShotOnly, 0, 0);
    } else {
      B_sdraw(ctx);
    }
    BS_draw(ctx);
    B_draw(ctx);
    S_builddraw(ctx);
    status(score, ctx);
    menu();
    if (hitalive) {
      hit();
    };
    //Cheat----------------------------------------------------------
    if (CC_pass) {
      if (fCC_23.TF && fCC_23.c == 2) {
        if (L_main == 1) {
          log.setGroup("main")
        } else if (L_main == 2) {
          log.setGroup("main2")
        } else if (L_main == 3) {
          log.setGroup("main3")
        };
        CC_23();
      }
    }
    if (fCC_23.TF && fCC_23.c == 1 && !keydot) {
      ctx.fillStyle = 'rgba(255,255,255,0.2)';
      ctx.fillRect(0, 0, sc.w / 4, sc.h);
      ctx.fillStyle = 'rgba(0,0,0,1)';
      fontsize = 40;
      ctx.beginPath();
      ctx.textAlign = "left";
      ctx.font = fontsize * world2 + "px 'Rounded Mplus 1c', 'Open Sans', 'Noto Sans Japanese', 'Yu Gothic', 'Meiryo UI', sans-serif";
      ctx.fillText("Ope : " + operation, 0, (fontsize * 1 + 0) * world2, sc.w / 4);
      ctx.fillText("Hpm : " + C_hp.toLocaleString(), 0, (fontsize * 2 + 2) * world2, sc.w / 4);
      ctx.fillText("Hps : " + C_sabhp.toLocaleString(), 0, (fontsize * 3 + 4) * world2, sc.w / 4);
      ctx.fillText("Skp : " + S_point.toLocaleString(), 0, (fontsize * 4 + 6) * world2, sc.w / 4);
      ctx.fillText("Atk : " + C_attack.toLocaleString(), 0, (fontsize * 5 + 8) * world2, sc.w / 4);
      ctx.fillText("Def : " + C_defence.toLocaleString(), 0, (fontsize * 6 + 10) * world2, sc.w / 4);
      ctx.fillText("Spd : " + (fCC_78 ? "Accelate" : C_speed.toLocaleString()), 0, (fontsize * 7 + 12) * world2, sc.w / 4);
      ctx.fillText("Spc : " + not, 0, (fontsize * 8 + 14) * world2, sc.w / 4);
      ctx.closePath();
    }
    if (fire) {
      //if (!slow || slowCount % 5 == 0) {
      //Game main----------------------------------------------------------------
      //charactor------------------------------------------------------
      C_outsize = 10 * world; //1477:c=1364:10    c*1364=1477*10  C=1477*10/1364
      charactor.size = C_outsize / 10 * 4;
      CS_size = C_outsize / 2;
      if (!keyctrl && keyshift) {
        if (fCC_78) {
          C_speed = C_accelate;
          C_color = 'rgba(255,255,255,0)';
          hitalive = false;
        } else {
          C_speed = 2;
          C_color = 'rgba(76,76,76,1)'
          hitalive = true;
        }
      } else {
        hitalive = true;
        C_speed = 5;
        if (invisible) {
          C_color = 'rgba(50, 255, 50, 0.3)';
          CS_color = 'rgba(0,0,0,.8)';
        } else if (invincible) {
          C_color = 'rgba(35, 71, 130,1)';
          CS_color = 'rgba(255,255,255,1)';
        } else {
          C_color = 'rgba(255,255,255,1)';
          CS_color = 'rgba(0,0,0,1)';
        }
      };
      if (charactor.position.y >= 0 && up) {
        charactor.position.y -= C_speed * world;
      };
      if (charactor.position.y <= sc.h && down) {
        charactor.position.y += C_speed * world;
      };
      if (charactor.position.x <= sc.w && right) {
        charactor.position.x += C_speed * world;
      };
      if (charactor.position.x >= 0 && left) {
        charactor.position.x -= C_speed * world;
      };
      if (CS_late.x == undefined) {
        CS_late.x = charactor.position.x;
        CS_late.y = charactor.position.y;
      } else {
        if (B_sabhp >= 3 && B_sabhp != 999) {
          CS_late.x = (charactor.position.x * 0.3 + CS_late.x * 0.7);
          CS_late.y = (charactor.position.y * 0.3 + CS_late.y * 0.7);
        } else {
          CS_late.x = (charactor.position.x * 0.5 + CS_late.x * 0.5);
          CS_late.y = (charactor.position.y * 0.5 + CS_late.y * 0.5);
        }
      }
      if (B_sabhp >= 3 && B_sabhp != 999) {
        CS_1.x = CS_late.x + 30 * world;
        CS_1.y = CS_late.y + 10 * world;
        CS_2.x = CS_late.x - 30 * world;
        CS_2.y = CS_late.y + 10 * world;
        if (S_0) {
          CS_3.x = CS_late.x + 60 * world;
          CS_3.y = CS_late.y + 10 * world;
          CS_4.x = CS_late.x - 60 * world;
          CS_4.y = CS_late.y + 10 * world;
        } else {
          CS_3.x = undefined;
          CS_3.y = undefined;
          CS_4.x = undefined;
          CS_4.y = undefined;
        }
      } else {
        let [_w, _s, _a, _d] = [keyw, keys, keya, keyd];
        if ((_w ? 1 : 0) + (_s ? 1 : 0) + (_a ? 1 : 0) + (_d ? 1 : 0) > 1) {
          [_w, _s, _a, _d] = [false, false, false, false];
        }
        CS_1.x = CS_late.x + CS_far * ((_s || _d) ? +1 : (_w ? +2 : (_a ? -1 : +1)));
        CS_1.y = CS_late.y + CS_far * ((_s || _d) ? +1 : (_a ? +2 : (_w ? -1 : +1)));
        CS_2.x = CS_late.x + CS_far * ((_a || _s) ? -1 : (_w ? -2 : (_d ? +1 : -1)));
        CS_2.y = CS_late.y + CS_far * ((_a || _s) ? +1 : (_d ? +2 : (_w ? -1 : +1)));
        CS_3.x = CS_late.x + CS_far * ((_w || _a) ? -1 : (_s ? -2 : (_d ? +1 : -1)));
        CS_3.y = CS_late.y + CS_far * ((_w || _a) ? -1 : (_d ? -2 : (_s ? +1 : -1)));
        CS_4.x = CS_late.x + CS_far * ((_w || _d) ? +1 : (_s ? +2 : (_a ? -1 : +1)));
        CS_4.y = CS_late.y + CS_far * ((_w || _w) ? -1 : (_a ? -2 : (_s ? +1 : -1)));
      };
      if (keyspace) {
        CS_far = 25 * world;
      } else {
        CS_far = 20 * world;
      };
      if (B_sabhp > 2 && B_sabhp != 999) {
        if (S_0) {
          a = charactor.position.distance(boss.position);
          a.normalize();
          C_shot0v = {
            x: a.x,
            y: a.y
          };
          a = distancez(boss.position, CS_1);
          a.normalize();
          C_shot1v = {
            x: a.x,
            y: a.y
          };
          a = distancez(boss.position, CS_2);
          a.normalize();
          C_shot2v = {
            x: a.x,
            y: a.y
          };
          a = distancez(boss.position, CS_3);
          a.normalize();
          C_shot3v = {
            x: a.x,
            y: a.y
          };
          a = distancez(boss.position, CS_4);
          a.normalize();
          C_shot4v = {
            x: a.x,
            y: a.y
          };
        } else {
          C_shot0v = {
            x: 0,
            y: -1
          };
          C_shot1v = {
            x: (keyw ? -0.05 : (keys ? 0.1 : 0)),
            y: ((keyw || keys) ? -0.7 : -1)
          };
          C_shot2v = {
            x: (keyw ? 0.05 : (keys ? -0.1 : 0)),
            y: ((keyw || keys) ? -0.7 : -1)
          };
          C_shot3v = {
            x: undefined,
            y: undefined
          };
          C_shot4v = {
            x: undefined,
            y: undefined
          };
        }

      } else {
        if (S_0) {
          a = charactor.position.distance(boss.position);
          a.normalize();
          C_shot0v = {
            x: a.x,
            y: a.y
          };
          a = distancez(boss.position, CS_1);
          a.normalize();
          C_shot1v = {
            x: a.x,
            y: a.y
          };
          a = distancez(boss.position, CS_2);
          a.normalize();
          C_shot2v = {
            x: a.x,
            y: a.y
          };
          a = distancez(boss.position, CS_3);
          a.normalize();
          C_shot3v = {
            x: a.x,
            y: a.y
          };
          a = distancez(boss.position, CS_4);
          a.normalize();
          C_shot4v = {
            x: a.x,
            y: a.y
          };
        } else {
          let [_w, _s, _a, _d] = [keyw, keys, keya, keyd];
          if ((_w ? 1 : 0) + (_s ? 1 : 0) + (_a ? 1 : 0) + (_d ? 1 : 0) > 1) {
            [_w, _s, _a, _d] = [false, false, false, false];
          }
          C_shot0v = {
            x: ((_w || _s) ? 0 : (_a ? -1 : (_d ? 1 : NaN))),
            y: ((_a || _d) ? 0 : (_w ? -1 : (_s ? 1 : NaN)))
          };
          C_shot1v = {
            x: ((_w || _s) ? 0 : (_a ? -1 : (_d ? 1 : 0.5))),
            y: ((_a || _d) ? 0 : (_w ? -1 : (_s ? 1 : 0.5)))
          };
          C_shot2v = {
            x: ((_w || _s) ? 0 : (_a ? -1 : (_d ? 1 : -0.5))),
            y: ((_a || _d) ? 0 : (_w ? -1 : (_s ? 1 : 0.5)))
          };
          C_shot3v = {
            x: ((_w || _s) ? 0 : (_a ? -1 : (_d ? 1 : -0.5))),
            y: ((_a || _d) ? 0 : (_w ? -1 : (_s ? 1 : -0.5)))
          };
          C_shot4v = {
            x: ((_w || _s) ? 0 : (_a ? -1 : (_d ? 1 : 0.5))),
            y: ((_a || _d) ? 0 : (_w ? -1 : (_s ? 1 : -0.5)))
          };
        }
      };
      if (keyspace || (not && CC_pass)) {
        if (counter % C_stime == 0) {
          let Vectors = [{
            x: C_shot0v.x,
            y: C_shot0v.y,
            size: 4,
            speed: 8
          }];
          let vectorCounter = 0;
          for (c = 0; c < C_smaxcount; c++) {
            if (!C_shot0[c].alive) {
              C_shot0[c].set(charactor.position, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || 3 * world);
              vectorCounter++;
              if (vectorCounter >= Vectors.length) break;
            }
          }
          //console.log("a");            
        }
        if (counter % C_stime == 0) {
          let Vectors = [{
            x: C_shot1v.x,
            y: C_shot1v.y,
            size: (B_sabhp == 3 || B_sabhp == 4 ? 2.5 : 4),
            speed: 8
          }];
          let vectorCounter = 0;
          for (g = 0; g < C_smaxcount; g++) {
            if (!C_shot1[g].alive) {
              C_shot1[g].set(CS_1, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || 3 * world);
              vectorCounter++;
              if (vectorCounter >= Vectors.length) break;
            }
          }
          //console.log("a");            
        }
        if (counter % C_stime == 0) {
          let Vectors = [{
            x: C_shot2v.x,
            y: C_shot2v.y,
            size: (B_sabhp == 3 || B_sabhp == 4 ? 2.5 : 4),
            speed: 8
          }];
          let vectorCounter = 0;
          for (h = 0; h < C_smaxcount; h++) {
            if (!C_shot2[h].alive) {
              C_shot2[h].set(CS_2, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || 3 * world);
              vectorCounter++;
              if (vectorCounter >= Vectors.length) break;
            }
          }
          //console.log("a");            
        }
        if (counter % C_stime == 0) {
          let Vectors = [{
            x: C_shot3v.x,
            y: C_shot3v.y,
            size: 4,
            speed: 8
          }];
          let vectorCounter = 0;
          for (s = 0; s < C_smaxcount; s++) {
            if (!C_shot3[s].alive) {
              C_shot3[s].set(CS_3, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || 3 * world);
              vectorCounter++;
              if (vectorCounter >= Vectors.length) break;
            }
          }
          //console.log("a");            
        }
        if (counter % C_stime == 0) {
          let Vectors = [{
            x: C_shot4v.x,
            y: C_shot4v.y,
            size: 4,
            speed: 8
          }];
          let vectorCounter = 0;
          for (t = 0; t < C_smaxcount; t++) {
            if (!C_shot4[t].alive) {
              C_shot4[t].set(CS_4, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || 3 * world);
              vectorCounter++;
              if (vectorCounter >= Vectors.length) break;
            }
          }
          //console.log("a");            
        }
      };
      //enemy--------------------------------------------------------------------
      if (Game_count == 1) {}
      //Boss---------------------------------------------------------------------
      else if (Game_count == 2) {
        if (B_pop) {
          p.x = sc.center.w;
          p.y = sc.h / 5;
          boss.set(p, 0);
          boss.size = 20 * world;
          B_pop = false;
        }
        if (B_sabhp == 4) {
          B_counter++;
          if (boss.alive) {
            //console.log(B_rtime);
            if (B_counter % 30 == 0 && B_counter % 120 != 0) {
              a = boss.position.distance(charactor.position);
              a.normalize();
              let Vectors = [{
                x: a.x,
                y: a.y,
                size: 7
                //,                speed: 2
              }];
              let vectorCounter = 0;
              for (e = 0; e < B_smaxcount; e++) {
                if (!B_shot0[e].alive) {
                  B_shot0[e].set(boss.position, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || B_rspeed * world);
                  vectorCounter++;
                  if (vectorCounter >= Vectors.length) break;
                  // console.log(vectorCounter,bossShot[k]);
                }
              }
              //console.log("a");
            }
            //座標計算-----------------------------------
            B_4sfar = (B_hp > B_maxhp / 4 * 3) ? 3 : ((B_hp > B_maxhp / 4 * 2) ? 4 : 5);
            B_shotc += 1 * Math.PI / ((B_hp > B_maxhp / 4 * 3) ? 180 : (B_hp > B_maxhp / 4 * 2) ? 90 : 45);
            B_shotp1.x = boss.size * B_4sfar * Math.cos(B_shotc) + boss.position.x;
            B_shotp1.y = boss.size * B_4sfar * Math.sin(B_shotc) + boss.position.y;
            B_shotp2.x = ((B_shotp1.x - boss.position.x) * -1) + boss.position.x;
            B_shotp2.y = ((B_shotp1.y - boss.position.y) * -1) + boss.position.y;
            if (B_hp <= B_maxhp / 4 * 1) {
              B_shotp3.x = boss.size * B_4sfar / 2 * Math.cos(-B_shotc) + boss.position.x;
              B_shotp3.y = boss.size * B_4sfar / 2 * Math.sin(-B_shotc) + boss.position.y;
              B_shotp4.x = ((B_shotp3.x - boss.position.x) * -1) + boss.position.x;
              B_shotp4.y = ((B_shotp3.y - boss.position.y) * -1) + boss.position.y;
            } else {
              B_shotp3.x = B_shotp1.x
              B_shotp3.y = B_shotp1.y
              B_shotp4.x = B_shotp2.x
              B_shotp4.y = B_shotp2.y
            }
            //乱数計算----------------------------------
            B_rtime = ((B_hp > B_maxhp / 4 * 3) ? 30 : (B_hp > B_maxhp / 4 * 2) ? Math.round(Math.random() * 10 + 20) : Math.round(Math.random() * 10 + 10));
            B_rspeed = ((B_hp > B_maxhp / 4 * 3) ? 3 : (B_hp > B_maxhp / 4 * 2) ? Math.round(Math.random() * 2 + 2) : Math.round(Math.random() * 4 + 1));
            B_rsize = ((B_hp > B_maxhp / 4 * 3) ? 5 : (B_hp > B_maxhp / 4 * 2) ? Math.round(Math.random() * 4 + 3) : Math.round(Math.random() * 8 + 1));
            //Boss Vectol-------------------------------
            boss.position.x += Math.abs(sc.center.w - boss.position.x) >= 1 ? (boss.position.x < sc.center.w ? 1 : -1) : sc.center.w - boss.position.x;
            boss.position.y += Math.abs(sc.h / 5 - boss.position.y) >= 1 ? (boss.position.y < sc.h / 5 ? 1 : -1) : sc.h / 5 - boss.position.y;
            //方向-------------------------------------
            a = boss.position.distance(charactor.position);
            a.normalize();
            let Vectors = [{
              x: Math.cos(0 * (Math.PI / 180)),
              y: Math.sin(0 * (Math.PI / 180))
              //,size: 5,              speed: 2.5
            }, {
              x: Math.cos(33.75 * (Math.PI / 180)),
              y: Math.sin(33.75 * (Math.PI / 180))
            }, {
              x: Math.cos(67.5 * (Math.PI / 180)),
              y: Math.sin(67.5 * (Math.PI / 180))
            }, {
              x: Math.cos(112.5 * (Math.PI / 180)),
              y: Math.sin(112.5 * (Math.PI / 180))
            }, {
              x: Math.cos(146.25 * (Math.PI / 180)),
              y: Math.sin(146.25 * (Math.PI / 180))
            }, {
              x: Math.cos(180 * (Math.PI / 180)),
              y: Math.sin(180 * (Math.PI / 180))
            }, {
              x: Math.cos(225 * (Math.PI / 180)),
              y: Math.sin(225 * (Math.PI / 180))
            }, {
              x: Math.cos(270 * (Math.PI / 180)),
              y: Math.sin(270 * (Math.PI / 180))
            }, {
              x: Math.cos(315 * (Math.PI / 180)),
              y: Math.sin(315 * (Math.PI / 180))
            }];
            let vectorCounter = 0;
            if (B_counter % B_rtime == 0) {
              for (f = 0; f < B_smaxcount; f++) {
                if (!B_shot1[f].alive) {
                  B_shot1[f].set({
                    x: B_shotp1.x,
                    y: B_shotp1.y
                  }, Vectors[vectorCounter], Vectors[vectorCounter].size * world || B_rsize * world, Vectors[vectorCounter].speed * world || B_rspeed * world);
                  vectorCounter++;
                  if (vectorCounter >= Vectors.length) break;
                }
              }
              vectorCounter = 0;
              for (l = 0; l < B_smaxcount; l++) {
                if (!B_shot2[l].alive) {
                  B_shot2[l].set({
                    x: B_shotp2.x,
                    y: B_shotp2.y
                  }, Vectors[vectorCounter], Vectors[vectorCounter].size * world || B_rsize * world, Vectors[vectorCounter].speed * world || B_rspeed * world);
                  vectorCounter++;
                  if (vectorCounter >= Vectors.length) break;
                }
              }
            }
            if (B_hp <= B_maxhp / 4 * 1) {
              if (B_counter % 30 == 0) {
                vectorCounter = 0;
                for (m = 0; m < B_smaxcount; m++) {
                  if (!B_shot3[m].alive) {
                    B_shot3[m].set({
                      x: B_shotp3.x,
                      y: B_shotp3.y
                    }, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || 3 * world);
                    vectorCounter++;
                    if (vectorCounter >= Vectors.length) break;
                  }
                }
                vectorCounter = 0;
                for (n = 0; n < B_smaxcount; n++) {
                  if (!B_shot4[n].alive) {
                    B_shot4[n].set({
                      x: B_shotp4.x,
                      y: B_shotp4.y
                    }, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || 3 * world);
                    vectorCounter++;
                    if (vectorCounter >= Vectors.length) break;
                  }
                }
                //console.log(bossShot);
                //console.log("a")            
              };
            }
          }
        } else if (B_sabhp == 3) {
          if (boss.alive) {
            //座標計算-----------------------------------
            if (Math.abs(sc.w / 6 * 5 - B_shotp1.x) > 2 || Math.abs(sc.h / 8 - B_shotp1.y) > 2) {
              B_shotp1.x = B_shotp1.x + ((sc.w / 6 * 5 - B_shotp1.x) / Math.abs(sc.w / 6 * 5 - B_shotp1.x));
              B_shotp1.y = B_shotp1.y + ((sc.h / 8 - B_shotp1.y) / Math.abs(sc.h / 8 - B_shotp1.y));
              B_shotp1.c = true;
              B_shotp2.x = ((B_shotp1.x - (B_hp > B_maxhp / 4 * 3 ? boss.position.x : sc.center.w)) * -1) + (B_hp > B_maxhp / 4 * 3 ? boss.position.x : sc.center.w)
              B_shotp2.y = B_shotp2.y + ((sc.h / 8 - B_shotp2.y) / Math.abs(sc.h / 8 - B_shotp2.y));
              B_shotp2.c = true;
            } else {
              B_shotp1.c = false;
              B_shotp2.c = false;
            }
            if (B_hp > B_maxhp / 4 * 1 && (Math.abs(sc.w / 6 * 5 - B_shotp3.x) > 2 || Math.abs(sc.h / 8 - B_shotp3.y) > 2)) {
              B_shotp3.x += ((sc.w / 6 * 5 - B_shotp3.x) / Math.abs(sc.w / 6 * 5 - B_shotp3.x));
              B_shotp3.y += ((sc.h / 8 - B_shotp3.y) / Math.abs(sc.h / 8 - B_shotp3.y));
              B_shotp3.c = true;
              B_shotp4.x += ((sc.w / 6 - B_shotp4.x) / Math.abs(sc.w / 6 - B_shotp4.x));
              B_shotp4.y += ((sc.h / 8 - B_shotp4.y) / Math.abs(sc.h / 8 - B_shotp4.y));
              B_shotp4.c = true;
            } else if (B_hp <= B_maxhp / 4 * 1) {
              B_4sfar = 5;
              B_shotc += 1 * Math.PI / 90;
              B_shotp3.x = boss.size / 1.5 * B_4sfar * Math.cos(-B_shotc) + B_shotp1.x;
              B_shotp3.y = boss.size / 1.5 * B_4sfar * Math.sin(-B_shotc) + B_shotp1.y;
              B_shotp3.c = true;
              B_shotp4.x = boss.size / 1.5 * B_4sfar * Math.cos(B_shotc) + B_shotp2.x;
              B_shotp4.y = boss.size / 1.5 * B_4sfar * Math.sin(B_shotc) + B_shotp2.y;
              B_shotp4.c = true;
              //console.log(B_shotp3.x,B_shotp3.y)
            } else {
              B_shotp3.c = false;
              B_shotp4.c = false;
            }
            //乱数計算----------------------------------
            B_rtime = ((B_hp > B_maxhp / 4 * 3) ? 30 : ((B_hp > B_maxhp / 4 * 2) ? Math.round(Math.random() * 20 + 20) : Math.round(Math.random() * 40 + 10)));
            B_rspeed = ((B_hp > B_maxhp / 4 * 3) ? 3 : ((B_hp > B_maxhp / 4 * 2) ? Math.round(Math.random() * 2 + 2) : Math.round(Math.random() * 4 + 1)));
            B_rsize = ((B_hp > B_maxhp / 4 * 3) ? 5 : ((B_hp > B_maxhp / 4 * 2) ? Math.round(Math.random() * 4 + 3) : Math.round(Math.random() * 8 + 1)));
            B_counter++;
            //Boss Vectol-------------------------------
            if (B_hp <= B_maxhp / 4 * 3) {
              B_4sfar = 5;
              B_shotc += 1 * Math.PI / 90;
              boss.position.x = boss.size * B_4sfar * 1.5 * Math.cos(B_shotc / 2) + sc.center.w;
            } else {
              boss.position.x += Math.abs(sc.center.w - boss.position.x) >= 1 ? (boss.position.x < sc.center.w ? 1 : -1) : sc.center.w - boss.position.x;
              boss.position.y += Math.abs(sc.h / 5 - boss.position.y) >= 1 ? (boss.position.y < sc.h / 5 ? 1 : -1) : sc.h / 5 - boss.position.y;
            }
            ///方向-------------------------------------
            if (boss.alive) {
              //console.log(B_rtime);
              if (B_hp > B_maxhp / 4 * 3 && (B_counter % 30 == 0 && B_counter % 120 != 0)) {
                a = boss.position.distance(charactor.position);
                a.normalize();
                let Vectors = [{
                  x: a.x,
                  y: a.y,
                  size: 7
                  //,speed: 2
                }];
                let vectorCounter = 0;
                for (e = 0; e < B_smaxcount; e++) {
                  if (!B_shot0[e].alive) {
                    B_shot0[e].set(boss.position, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || 3 * world);
                    vectorCounter++;
                    if (vectorCounter >= Vectors.length) break;
                    // console.log(vectorCounter,bossShot[k]);
                  }
                }
                //console.log("a");
              }
              if (B_counter % 50 == 0) {
                a = boss.position.distance(charactor.position);
                a.normalize();
                let Vectors = [{
                  x: 1.5,
                  y: 0,
                  //size: 7,
                  speed: 1
                }, {
                  x: -1.5,
                  y: 0
                }];
                //console.log("B_shot1 created.");
                let vectorCounter = 0;
                for (o = 0; o < B_smaxcount; o++) {
                  if (!B_shot5[o].alive) continue;
                  vectorCounter = 0;
                  for (f = 0; f < B_smaxcount; f++) {
                    if (B_shot1[f].alive) continue;
                    B_shot1[f].set(B_shot5[o].position, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || 3 * world);
                    vectorCounter++;
                    if (vectorCounter >= Vectors.length) break;
                  }
                }
                for (r = 0; r < B_smaxcount; r++) {
                  if (!B_shot6[r].alive) continue;
                  vectorCounter = 0;
                  for (l = 0; l < B_smaxcount; l++) {
                    if (B_shot2[l].alive) continue;
                    B_shot2[l].set(B_shot6[r].position, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || 3 * world);
                    vectorCounter++;
                    if (vectorCounter >= Vectors.length) break;
                  }
                  //console.log("a");
                }
              }
              if (B_hp <= B_maxhp / 4 * 1) {
                a = boss.position.distance(charactor.position);
                a.normalize();
                let Vectors = [{
                  x: Math.cos(0 * (Math.PI / 180)),
                  y: Math.sin(0 * (Math.PI / 180))
                  //,size: 5,                  speed: 2.5
                }, {
                  x: Math.cos(33.75 * (Math.PI / 180)),
                  y: Math.sin(33.75 * (Math.PI / 180))
                }, {
                  x: Math.cos(67.5 * (Math.PI / 180)),
                  y: Math.sin(67.5 * (Math.PI / 180))
                }, {
                  x: Math.cos(112.5 * (Math.PI / 180)),
                  y: Math.sin(112.5 * (Math.PI / 180))
                }, {
                  x: Math.cos(146.25 * (Math.PI / 180)),
                  y: Math.sin(146.25 * (Math.PI / 180))
                }, {
                  x: Math.cos(180 * (Math.PI / 180)),
                  y: Math.sin(180 * (Math.PI / 180))
                }, {
                  x: Math.cos(225 * (Math.PI / 180)),
                  y: Math.sin(225 * (Math.PI / 180))
                }, {
                  x: Math.cos(270 * (Math.PI / 180)),
                  y: Math.sin(270 * (Math.PI / 180))
                }, {
                  x: Math.cos(315 * (Math.PI / 180)),
                  y: Math.sin(315 * (Math.PI / 180))
                }];
                let vectorCounter = 0;
                if (B_counter % 30 == 0) {
                  for (m = 0; m < B_smaxcount; m++) {
                    if (!B_shot3[m].alive) {
                      B_shot3[m].set({
                        x: B_shotp3.x,
                        y: B_shotp3.y
                      }, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || 3 * world);
                      vectorCounter++;
                      if (vectorCounter >= Vectors.length) break;
                    }
                  }
                  vectorCounter = 0;
                  for (n = 0; n < B_smaxcount; n++) {
                    if (!B_shot4[n].alive) {
                      B_shot4[n].set({
                        x: B_shotp4.x,
                        y: B_shotp4.y
                      }, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || 3 * world);
                      vectorCounter++;
                      if (vectorCounter >= Vectors.length) break;
                    }
                  }
                  //console.log(bossShot);
                  //console.log("a")            
                };
              }
              if (B_counter % B_rtime == 0) {
                a = boss.position.distance(charactor.position);
                a.normalize();
                let Vectors = [{
                  x: 0,
                  y: 1.5,
                  size: boss.size / 2
                  //,                  speed: 2
                }];
                let vectorCounter = 0;
                for (o = 0; o < B_smaxcount; o++) {
                  if (!B_shot5[o].alive) {
                    B_shot5[o].set({
                      x: B_shotp1.x,
                      y: B_shotp1.y
                    }, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || B_rspeed * world);
                    vectorCounter++;
                    if (vectorCounter >= Vectors.length) break;
                  }
                }
                vectorCounter = 0;
                for (r = 0; r < B_smaxcount; r++) {
                  if (!B_shot6[r].alive) {
                    B_shot6[r].set({
                      x: B_shotp2.x,
                      y: B_shotp2.y
                    }, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || B_rspeed * world);
                    vectorCounter++;
                    if (vectorCounter >= Vectors.length) break;
                  }
                }
                //console.log("a");
              }
            }
          }
        } else if (B_sabhp == 2) {
          if (boss.alive) {
            //座標計算-----------------------------------
            if (B_hp > B_maxhp / 4 * 3 && (Math.abs(sc.center.w - B_shotp1.x) > 1 || Math.abs(sc.center.h - B_shotp1.y) > 1)) {
              B_shotp1.x = B_shotp1.x + (sc.center.w - B_shotp1.x) / Math.abs(sc.center.w - B_shotp1.x);
              B_shotp1.y = B_shotp1.y + (sc.center.h - B_shotp1.y) / Math.abs(sc.center.h - B_shotp1.y);
              B_shotp1.c = true;
              B_shotp2.x = sc.center.w + (sc.center.w - B_shotp1.x);
              B_shotp2.y = B_shotp1.y;
              B_shotp2.c = true;
              //console.log("AA");
            } else if (B_hp <= B_maxhp / 4 * 3) {
              if (B_shotp1.x <= sc.w - 30 * world && B_shotp1.x >= 30 * world && B_shotp1.y <= sc.h - 30 * world && B_shotp1.y >= 30 * world) {
                B_shotp1.x += (30 * world - B_shotp1.x) / Math.abs(30 * world - B_shotp1.x);
                B_shotp1.y += (30 * world - B_shotp1.y) / Math.abs(30 * world - B_shotp1.y);
                B_shotp1.c = true;
                B_shotp2.x = sc.center.w + (sc.center.w - B_shotp1.x);
                B_shotp2.y = sc.center.h + (sc.center.h - B_shotp1.y);
                B_shotp2.c = true;
                //console.log("BB");
              } else {
                B_shotp1.x += (B_shotp1.y < 30 * world ? -1.5 : (B_shotp1.y > sc.h - 30 * world ? 1.5 : 0));
                B_shotp1.y += (B_shotp1.x < 30 * world ? 1.5 : (B_shotp1.x > sc.w - 30 * world ? -1.5 : 0));
                B_shotp1.c = false;
                B_shotp2.x = sc.center.w + (sc.center.w - B_shotp1.x);
                B_shotp2.y = sc.center.h + (sc.center.h - B_shotp1.y);
                B_shotp2.c = false;
              }
            }
            if (B_hp > B_maxhp / 4 * 1) {
              if (Math.abs(sc.center.w - B_shotp3.x) > 1 || Math.abs(sc.center.h - B_shotp3.y) > 1) {
                B_shotp3.x += (sc.center.w - B_shotp3.x) / Math.abs(sc.center.w - B_shotp3.x);
                B_shotp3.y += (sc.center.h - B_shotp3.y) / Math.abs(sc.center.h - B_shotp3.y);
                B_shotp3.c = true;
              }
              if (Math.abs(sc.center.w - B_shotp4.x) > 1 || Math.abs(sc.center.h - B_shotp4.y) > 1) {
                B_shotp4.x = B_shotp4.x + (sc.center.w - B_shotp4.x) / Math.abs(sc.center.w - B_shotp4.x);
                B_shotp4.y = B_shotp4.y + (sc.center.h - B_shotp4.y) / Math.abs(sc.center.h - B_shotp4.y);
                B_shotp4.c = true;
              }
            } else if (B_hp <= B_maxhp / 4 * 1) {
              if (B_shotp3.x <= sc.w - 80 * world && B_shotp3.x >= 80 * world && B_shotp3.y <= sc.h - 80 * world && B_shotp3.y >= 80 * world) {
                B_shotp3.x -= (80 * world - B_shotp3.x) / Math.abs(80 * world - B_shotp3.x);
                B_shotp3.y += (80 * world - B_shotp3.y) / Math.abs(80 * world - B_shotp3.y);
                B_shotp3.c = true;
                B_shotp4.x = sc.center.w + (sc.center.w - B_shotp3.x);
                B_shotp4.y = sc.center.h + (sc.center.h - B_shotp3.y);
                B_shotp4.c = true;
                //console.log("BB");
              } else {
                B_shotp3.x += (B_shotp3.y < 80 * world ? 1.5 : (B_shotp3.y > sc.h - 80 * world ? -1.5 : 0));
                B_shotp3.y += (B_shotp3.x < 80 * world ? -1.5 : (B_shotp3.x > sc.w - 80 * world ? 1.5 : 0));
                B_shotp3.c = false;
                B_shotp4.x = sc.center.w + (sc.center.w - B_shotp3.x);
                B_shotp4.y = sc.center.h + (sc.center.h - B_shotp3.y);
                B_shotp4.c = false;
              }
            }
            //乱数計算----------------------------------
            B_rtime = ((B_hp >= B_maxhp / 4 * 2) ? 30 : (B_hp >= B_maxhp / 4 * 1) ? Math.round(Math.random() * 20 + 20) : Math.round(Math.random() * 40 + 10));
            B_rspeed = ((B_hp >= B_maxhp / 4 * 2) ? 3 : (B_hp >= B_maxhp / 4 * 1) ? Math.round(Math.random() * 2 + 2) : Math.round(Math.random() * 4 + 1));
            B_rsize = ((B_hp >= B_maxhp / 4 * 2) ? 5 : (B_hp >= B_maxhp / 4 * 1) ? Math.round(Math.random() * 4 + 3) : Math.round(Math.random() * 8 + 1));
            B_counter++;
            //Boss Vectol-------------------------------
            boss.position.x += Math.abs(sc.center.w - boss.position.x) >= 1 ? (boss.position.x < sc.center.w ? 1 : -1) : sc.center.w - boss.position.x;
            boss.position.y += Math.abs(sc.center.h - boss.position.y) >= 1 ? (boss.position.y < sc.center.h ? 1 : -1) : sc.center.h - boss.position.y;
            ///方向-------------------------------------
            if (boss.alive) {
              //console.log(B_rtime);
              if (B_hp > B_maxhp / 4 * 3 && (B_counter % 30 == 0 && B_counter % 120 != 0)) {
                a = boss.position.distance(charactor.position);
                a.normalize();
                let Vectors = [{
                  x: a.x,
                  y: a.y,
                  size: 7
                  //,speed: 2
                }];
                let vectorCounter = 0;
                for (e = 0; e < B_smaxcount; e++) {
                  if (!B_shot0[e].alive) {
                    B_shot0[e].set(boss.position, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || 3 * world);
                    vectorCounter++;
                    if (vectorCounter >= Vectors.length) break;
                    // console.log(vectorCounter,bossShot[k]);
                  }
                }
                //console.log("a");
              }
              if (B_hp <= B_maxhp / 4 * 2 && (B_counter % 10 == 0 && B_counter % 50 != 0)) {
                a = boss.position.distance(charactor.position);
                a.normalize();
                let Vectors = [{
                  x: Math.cos(B_counter * (Math.PI / 180)),
                  y: Math.sin(B_counter * (Math.PI / 180))
                  //,size: 5,                  speed: 2.5
                }, {
                  x: Math.cos((B_counter + 90) * (Math.PI / 180)),
                  y: Math.sin((B_counter + 90) * (Math.PI / 180))
                }, {
                  x: Math.cos((B_counter + 180) * (Math.PI / 180)),
                  y: Math.sin((B_counter + 180) * (Math.PI / 180))
                }, {
                  x: Math.cos((B_counter + 270) * (Math.PI / 180)),
                  y: Math.sin((B_counter + 270) * (Math.PI / 180))
                }];
                let vectorCounter = 0;
                for (e = 0; e < B_smaxcount; e++) {
                  if (!B_shot0[e].alive) {
                    B_shot0[e].set(boss.position, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || 3 * world);
                    vectorCounter++;
                    if (vectorCounter >= Vectors.length) break;
                    // console.log(vectorCounter,bossShot[k]);
                  }
                }
                //console.log("a");
              }
              if (boss.alive) {
                a = boss.position.distance(charactor.position);
                a.normalize();
                let Vectors = [{
                  x: Math.cos(9 * (Math.PI / 180)),
                  y: Math.sin(9 * (Math.PI / 180))
                }, {
                  x: Math.cos(27 * (Math.PI / 180)),
                  y: Math.sin(27 * (Math.PI / 180))
                }, {
                  x: Math.cos(45 * (Math.PI / 180)),
                  y: Math.sin(45 * (Math.PI / 180)),
                  size: 8
                }, {
                  x: Math.cos(63 * (Math.PI / 180)),
                  y: Math.sin(63 * (Math.PI / 180))
                }, {
                  x: Math.cos(81 * (Math.PI / 180)),
                  y: Math.sin(81 * (Math.PI / 180))
                }, {
                  x: Math.cos(99 * (Math.PI / 180)),
                  y: Math.sin(99 * (Math.PI / 180))
                }, {
                  x: Math.cos(117 * (Math.PI / 180)),
                  y: Math.sin(117 * (Math.PI / 180))
                }, {
                  x: Math.cos(135 * (Math.PI / 180)),
                  y: Math.sin(135 * (Math.PI / 180)),
                  size: 8
                }, {
                  x: Math.cos(153 * (Math.PI / 180)),
                  y: Math.sin(153 * (Math.PI / 180))
                }, {
                  x: Math.cos(171 * (Math.PI / 180)),
                  y: Math.sin(171 * (Math.PI / 180))
                }, {
                  x: Math.cos(189 * (Math.PI / 180)),
                  y: Math.sin(189 * (Math.PI / 180))
                }, {
                  x: Math.cos(207 * (Math.PI / 180)),
                  y: Math.sin(207 * (Math.PI / 180))
                }, {
                  x: Math.cos(225 * (Math.PI / 180)),
                  y: Math.sin(225 * (Math.PI / 180)),
                  size: 8
                }, {
                  x: Math.cos(243 * (Math.PI / 180)),
                  y: Math.sin(243 * (Math.PI / 180))
                }, {
                  x: Math.cos(261 * (Math.PI / 180)),
                  y: Math.sin(261 * (Math.PI / 180))
                }, {
                  x: Math.cos(279 * (Math.PI / 180)),
                  y: Math.sin(279 * (Math.PI / 180))
                }, {
                  x: Math.cos(297 * (Math.PI / 180)),
                  y: Math.sin(297 * (Math.PI / 180))
                }, {
                  x: Math.cos(315 * (Math.PI / 180)),
                  y: Math.sin(315 * (Math.PI / 180)),
                  size: 8
                }, {
                  x: Math.cos(333 * (Math.PI / 180)),
                  y: Math.sin(333 * (Math.PI / 180))
                }, {
                  x: Math.cos(351 * (Math.PI / 180)),
                  y: Math.sin(351 * (Math.PI / 180))
                }];
                //console.log("B_shot1 created.");
                let vectorCounter = 0;
                if (B_counter % (B_hp > B_maxhp / 4 * 3 ? 50 : (B_hp > B_maxhp / 4 * 2 ? 100 : 150)) == 0) {
                  for (f = 0; f < B_smaxcount; f++) {
                    if (B_shot1[f].alive) continue;
                    B_shot1[f].set(boss.position, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || 3 * world);
                    vectorCounter++;
                    if (vectorCounter >= Vectors.length) break;
                  }
                  vectorCounter = 0;
                  for (l = 0; l < B_smaxcount; l++) {
                    if (B_shot2[l].alive) continue;
                    B_shot2[l].set(boss.position, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || 3 * world);
                    vectorCounter++;
                    if (vectorCounter >= Vectors.length) break;
                  }
                  //console.log("a");
                }
                if (B_hp <= B_maxhp / 4 * 2 && B_counter % 100 == 0) {
                  vectorCounter = 0;
                  for (o = 0; o < B_smaxcount; o++) {
                    if (!B_shot5[o].alive) {
                      B_shot5[o].set({
                        x: B_shotp3.x,
                        y: B_shotp3.y
                      }, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || 3 * world);
                      vectorCounter++;
                      if (vectorCounter >= Vectors.length) break;
                    }
                  }
                  vectorCounter = 0;
                  for (r = 0; r < B_smaxcount; r++) {
                    if (!B_shot6[r].alive) {
                      B_shot6[r].set({
                        x: B_shotp4.x,
                        y: B_shotp4.y
                      }, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || 3 * world);
                      vectorCounter++;
                      if (vectorCounter >= Vectors.length) break;
                    }
                  }
                  //console.log("a");
                }
              }
              if (B_hp <= B_maxhp / 4 * 3) {
                a = boss.position.distance(charactor.position);
                a.normalize();
                let Vectors = [{
                  x: Math.cos(B_counter * (Math.PI / 180)),
                  y: Math.sin(B_counter * (Math.PI / 180))
                  /*,size: 5,
                  speed: 2.5*/
                }, {
                  x: Math.cos((B_counter + 90) * (Math.PI / 180)),
                  y: Math.sin((B_counter + 90) * (Math.PI / 180))
                }, {
                  x: Math.cos((B_counter + 180) * (Math.PI / 180)),
                  y: Math.sin((B_counter + 180) * (Math.PI / 180))
                }, {
                  x: Math.cos((B_counter + 270) * (Math.PI / 180)),
                  y: Math.sin((B_counter + 270) * (Math.PI / 180))
                }];
                let vectorCounter = 0;
                if (B_counter % 15 == 0) {
                  for (m = 0; m < B_smaxcount; m++) {
                    if (!B_shot3[m].alive) {
                      B_shot3[m].set({
                        x: B_shotp1.x,
                        y: B_shotp1.y
                      }, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || 3 * world);
                      vectorCounter++;
                      if (vectorCounter >= Vectors.length) break;
                    }
                  }
                  vectorCounter = 0;
                  for (n = 0; n < B_smaxcount; n++) {
                    if (!B_shot4[n].alive) {
                      B_shot4[n].set({
                        x: B_shotp2.x,
                        y: B_shotp2.y
                      }, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || 3 * world);
                      vectorCounter++;
                      if (vectorCounter >= Vectors.length) break;
                    }
                  }
                  //console.log(bossShot);
                  //console.log("a")            
                };
              }

            }
          }
        } else if (B_sabhp == 1) {
          if (boss.alive) {
            //座標計算-----------------------------------
            if (B_hp > B_maxhp / 4 * 1) {
              B_shotp1.x += Math.abs(0 + 40 * world - B_shotp1.x) >= 1 ? (0 + 40 * world < B_shotp1.x ? -1 : 1) : 0 + 40 * world - B_shotp1.x;
              B_shotp1.y += Math.abs(0 + 40 * world - B_shotp1.y) >= 1 ? (0 + 40 * world < B_shotp1.y ? -1 : 1) : 0 + 40 * world - B_shotp1.y;
              B_shotp1.c = true;
              B_shotp3.x += Math.abs(0 + 40 * world - B_shotp3.x) >= 1 ? (0 + 40 * world < B_shotp3.x ? -1 : 1) : 0 + 40 * world - B_shotp3.x;
              B_shotp3.y += Math.abs(sc.h - 40 * world - B_shotp3.y) >= 1 ? (sc.h - 40 * world < B_shotp3.y ? -1 : 1) : sc.h - 40 * world - B_shotp3.y;
              B_shotp3.c = true;
              //console.log("AA");
            } else if (B_hp <= B_maxhp / 4 * 1) {
              B_shotp1.x += Math.abs(0 + 40 * world - B_shotp1.x) >= 1 ? (0 + 40 * world < B_shotp1.x ? -1 : 1) : 0 + 40 * world - B_shotp1.x;
              B_shotp1.y += Math.abs(sc.center.h - B_shotp1.y) >= 1 ? (sc.center.h < B_shotp1.y ? -1 : 1) : sc.center.h - B_shotp1.y;
              B_shotp1.c = true;
              B_shotp3.x += Math.abs(sc.center.w - B_shotp3.x) >= 1 ? (sc.center.w < B_shotp3.x ? -1 : 1) : sc.center.w - B_shotp3.x;
              B_shotp3.y += Math.abs(sc.h - 40 * world - B_shotp3.y) >= 1 ? (sc.h - 40 * world < B_shotp3.y ? -1 : 1) : sc.h - 40 * world - B_shotp3.y;
              B_shotp3.c = true;
            }
            B_shotp2.x = sc.center.w + (sc.center.w - B_shotp1.x);
            B_shotp2.y = sc.center.h + (sc.center.h - B_shotp1.y);
            B_shotp2.c = true;
            B_shotp4.x = sc.center.w + (sc.center.w - B_shotp3.x);
            B_shotp4.y = sc.center.h + (sc.center.h - B_shotp3.y);
            B_shotp4.c = true;
            //乱数計算----------------------------------
            B_rtime = ((B_hp >= B_maxhp / 4 * 2) ? 30 : (B_hp >= B_maxhp / 4 * 1) ? Math.round(Math.random() * 20 + 20) : Math.round(Math.random() * 40 + 10));
            B_rspeed = ((B_hp >= B_maxhp / 4 * 2) ? 3 : (B_hp >= B_maxhp / 4 * 1) ? Math.round(Math.random() * 2 + 2) : Math.round(Math.random() * 4 + 1));
            B_rsize = ((B_hp >= B_maxhp / 4 * 2) ? 5 : (B_hp >= B_maxhp / 4 * 1) ? Math.round(Math.random() * 4 + 3) : Math.round(Math.random() * 8 + 1));
            B_counter++;
            //Boss Vectol-------------------------------
            if (B_hp > B_maxhp / 4 * 2) {
              boss.position.x += Math.abs(sc.center.w - boss.position.x) >= 1 ? (boss.position.x < sc.center.w ? 1 : -1) : sc.center.w - boss.position.x;
              boss.position.y += Math.abs(sc.center.h - boss.position.y) >= 1 ? (boss.position.y < sc.center.h ? 1 : -1) : sc.center.h - boss.position.y;
            } else if (B_hp <= B_maxhp / 4 * 2) {
              if (boss.position.x >= 100 * world && boss.position.x <= sc.w - 100 * world && boss.position.y >= 100 * world && boss.position.y <= sc.h - 100 * world) {
                boss.position.x += 1;
              } else {
                if (boss.position.y < 100 * world) {
                  boss.position.x += 2
                }
                if (boss.position.y > sc.h - 100 * world) {
                  boss.position.x -= 2
                }
                if (boss.position.x < 100 * world) {
                  boss.position.y -= 2
                }
                if (boss.position.x > sc.w - 100 * world) {
                  boss.position.y += 2
                };
              };
            }
            ///方向-------------------------------------
            if (boss.alive) {
              if (B_counter % (B_hp > B_maxhp / 4 * 2 ? 100 : 150) == 0) {
                a = boss.position.distance(charactor.position);
                a.normalize();
                let Vectors = [{
                  x: Math.cos(9 * (Math.PI / 180)),
                  y: Math.sin(9 * (Math.PI / 180))
                }, {
                  x: Math.cos(27 * (Math.PI / 180)),
                  y: Math.sin(27 * (Math.PI / 180))
                }, {
                  x: Math.cos(45 * (Math.PI / 180)),
                  y: Math.sin(45 * (Math.PI / 180)),
                  size: 8
                }, {
                  x: Math.cos(63 * (Math.PI / 180)),
                  y: Math.sin(63 * (Math.PI / 180))
                }, {
                  x: Math.cos(81 * (Math.PI / 180)),
                  y: Math.sin(81 * (Math.PI / 180))
                }, {
                  x: Math.cos(99 * (Math.PI / 180)),
                  y: Math.sin(99 * (Math.PI / 180))
                }, {
                  x: Math.cos(117 * (Math.PI / 180)),
                  y: Math.sin(117 * (Math.PI / 180))
                }, {
                  x: Math.cos(135 * (Math.PI / 180)),
                  y: Math.sin(135 * (Math.PI / 180)),
                  size: 8
                }, {
                  x: Math.cos(153 * (Math.PI / 180)),
                  y: Math.sin(153 * (Math.PI / 180))
                }, {
                  x: Math.cos(171 * (Math.PI / 180)),
                  y: Math.sin(171 * (Math.PI / 180))
                }, {
                  x: Math.cos(189 * (Math.PI / 180)),
                  y: Math.sin(189 * (Math.PI / 180))
                }, {
                  x: Math.cos(207 * (Math.PI / 180)),
                  y: Math.sin(207 * (Math.PI / 180))
                }, {
                  x: Math.cos(225 * (Math.PI / 180)),
                  y: Math.sin(225 * (Math.PI / 180)),
                  size: 8
                }, {
                  x: Math.cos(243 * (Math.PI / 180)),
                  y: Math.sin(243 * (Math.PI / 180))
                }, {
                  x: Math.cos(261 * (Math.PI / 180)),
                  y: Math.sin(261 * (Math.PI / 180))
                }, {
                  x: Math.cos(279 * (Math.PI / 180)),
                  y: Math.sin(279 * (Math.PI / 180))
                }, {
                  x: Math.cos(297 * (Math.PI / 180)),
                  y: Math.sin(297 * (Math.PI / 180))
                }, {
                  x: Math.cos(315 * (Math.PI / 180)),
                  y: Math.sin(315 * (Math.PI / 180)),
                  size: 8
                }, {
                  x: Math.cos(333 * (Math.PI / 180)),
                  y: Math.sin(333 * (Math.PI / 180))
                }, {
                  x: Math.cos(351 * (Math.PI / 180)),
                  y: Math.sin(351 * (Math.PI / 180))
                }];
                //console.log("B_shot1 created.");
                let vectorCounter = 0;
                for (e = 0; e < B_smaxcount; e++) {
                  if (!B_shot0[e].alive) {
                    B_shot0[e].set(boss.position, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || 3 * world);
                    vectorCounter++;
                    if (vectorCounter >= Vectors.length) break;
                    // console.log(vectorCounter,bossShot[k]);
                  }
                }
              }
              if (B_counter % 10 == 0) {
                a = boss.position.distance(charactor.position);
                a.normalize();
                let Vectors = [{
                  x: Math.cos(B_counter * (Math.PI / 180)),
                  y: Math.sin(B_counter * (Math.PI / 180))
                  /*,size: 5,
                  speed: 2.5*/
                }, {
                  x: Math.cos((B_counter + 90) * (Math.PI / 180)),
                  y: Math.sin((B_counter + 90) * (Math.PI / 180))
                }, {
                  x: Math.cos((B_counter + 180) * (Math.PI / 180)),
                  y: Math.sin((B_counter + 180) * (Math.PI / 180))
                }, {
                  x: Math.cos((B_counter + 270) * (Math.PI / 180)),
                  y: Math.sin((B_counter + 270) * (Math.PI / 180))
                }];
                let vectorCounter = 0;
                for (f = 0; f < B_smaxcount; f++) {
                  if (B_shot1[f].alive) continue;
                  B_shot1[f].set({
                    x: B_shotp1.x,
                    y: B_shotp1.y
                  }, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || 3 * world);
                  vectorCounter++;
                  if (vectorCounter >= Vectors.length) break;
                }
                vectorCounter = 0;
                for (l = 0; l < B_smaxcount; l++) {
                  if (B_shot2[l].alive) continue;
                  B_shot2[l].set({
                    x: B_shotp2.x,
                    y: B_shotp2.y
                  }, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || 3 * world);
                  vectorCounter++;
                  if (vectorCounter >= Vectors.length) break;
                }
                //console.log("a");
              }
              if (B_counter % 50 == 0) {
                a = boss.position.distance(charactor.position);
                a.normalize();
                let Vectors = [{
                  x: Math.cos(0 * (Math.PI / 180)),
                  y: Math.sin(0 * (Math.PI / 180)),
                  size: 8
                }, {
                  x: Math.cos(18 * (Math.PI / 180)),
                  y: Math.sin(18 * (Math.PI / 180))
                }, {
                  x: Math.cos(36 * (Math.PI / 180)),
                  y: Math.sin(36 * (Math.PI / 180))
                }, {
                  x: Math.cos(54 * (Math.PI / 180)),
                  y: Math.sin(54 * (Math.PI / 180))
                }, {
                  x: Math.cos(72 * (Math.PI / 180)),
                  y: Math.sin(72 * (Math.PI / 180))
                }, {
                  x: Math.cos(90 * (Math.PI / 180)),
                  y: Math.sin(90 * (Math.PI / 180)),
                  size: 8
                }, {
                  x: Math.cos(108 * (Math.PI / 180)),
                  y: Math.sin(108 * (Math.PI / 180))
                }, {
                  x: Math.cos(126 * (Math.PI / 180)),
                  y: Math.sin(126 * (Math.PI / 180))
                }, {
                  x: Math.cos(144 * (Math.PI / 180)),
                  y: Math.sin(144 * (Math.PI / 180))
                }, {
                  x: Math.cos(162 * (Math.PI / 180)),
                  y: Math.sin(162 * (Math.PI / 180))
                }, {
                  x: Math.cos(180 * (Math.PI / 180)),
                  y: Math.sin(180 * (Math.PI / 180)),
                  size: 8
                }, {
                  x: Math.cos(198 * (Math.PI / 180)),
                  y: Math.sin(198 * (Math.PI / 180))
                }, {
                  x: Math.cos(216 * (Math.PI / 180)),
                  y: Math.sin(216 * (Math.PI / 180))
                }, {
                  x: Math.cos(234 * (Math.PI / 180)),
                  y: Math.sin(234 * (Math.PI / 180))
                }, {
                  x: Math.cos(252 * (Math.PI / 180)),
                  y: Math.sin(252 * (Math.PI / 180))
                }, {
                  x: Math.cos(270 * (Math.PI / 180)),
                  y: Math.sin(270 * (Math.PI / 180)),
                  size: 8
                }, {
                  x: Math.cos(288 * (Math.PI / 180)),
                  y: Math.sin(288 * (Math.PI / 180))
                }, {
                  x: Math.cos(306 * (Math.PI / 180)),
                  y: Math.sin(306 * (Math.PI / 180))
                }, {
                  x: Math.cos(324 * (Math.PI / 180)),
                  y: Math.sin(324 * (Math.PI / 180))
                }, {
                  x: Math.cos(342 * (Math.PI / 180)),
                  y: Math.sin(342 * (Math.PI / 180))
                }];
                //console.log("B_shot1 created.");
                let vectorCounter = 0;
                for (m = 0; m < B_smaxcount; m++) {
                  if (!B_shot3[m].alive) {
                    B_shot3[m].set({
                      x: B_shotp3.x,
                      y: B_shotp3.y
                    }, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || 3 * world);
                    vectorCounter++;
                    if (vectorCounter >= Vectors.length) break;
                  }
                }
                vectorCounter = 0;
                for (n = 0; n < B_smaxcount; n++) {
                  if (!B_shot4[n].alive) {
                    B_shot4[n].set({
                      x: B_shotp4.x,
                      y: B_shotp4.y
                    }, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || 3 * world);
                    vectorCounter++;
                    if (vectorCounter >= Vectors.length) break;
                  }
                }
                //console.log(bossShot);
                //console.log("a")            
              };
              if (B_hp <= B_maxhp / 4 * 3 && (T_counter / 1000 % 30) < 14 && B_counter % 5 == 0) {
                {
                  a = distanse(sc.center.w, sc.center.h, B_shotp1.x, B_shotp1.y);
                  a.normalize();
                  let Vectors = [{
                    x: a.x,
                    y: a.y,
                    size: boss.size * 1.5,
                    speed: 10
                  }];
                  let vectorCounter = 0;
                  for (o = 0; o < B_smaxcount; o++) {
                    if (!B_shot5[o].alive) {
                      B_shot5[o].set({
                        x: B_shotp1.x,
                        y: B_shotp1.y
                      }, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || 3 * world);
                      vectorCounter++;
                      if (vectorCounter >= Vectors.length) break;
                    }
                  }
                  //console.log("a");
                } {
                  a = distanse(sc.center.w, sc.center.h, B_shotp4.x, B_shotp4.y);
                  a.normalize();
                  let Vectors = [{
                    x: a.x,
                    y: a.y,
                    size: boss.size * 1.5,
                    speed: 10
                  }];
                  let vectorCounter = 0;
                  for (r = 0; r < B_smaxcount; r++) {
                    if (!B_shot6[r].alive) {
                      B_shot6[r].set({
                        x: B_shotp4.x,
                        y: B_shotp4.y
                      }, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || 3 * world);
                      vectorCounter++;
                      if (vectorCounter >= Vectors.length) break;
                    }
                  }
                  //console.log("a");                
                }
              }
            }
          }
        } else if (B_sabhp == 999) {
          if (boss.alive) {
            //wall---------------------------------------
            if (B_hp <= B_maxhp / 4 * 2) {
              B_swall.x += (B_swall.x <= sc.center.w ? .02 : 0);
              B_swall.y += (B_swall.y <= sc.center.h ? .02 : 0);
              B_swall.size = 30 * world;
            } else {
              B_swall.x += (B_swall.x >= -20 * world ? -0.02 : 0);
              B_swall.y += (B_swall.y >= -20 * world ? -0.02 : 0);
            }
            //座標計算-----------------------------------
            if (B_hp > B_maxhp / 4 * 3) {
              //const rotationSpeed = 50;
              B_shotp1.c = true;
              if (bsabio(1, 40, 0)) {
                if ((B_shotp1.x || B_shotp1.y) == 40 * world) {
                  B_shotp1.x -= 1;
                } else {
                  B_shotp1.x += Math.abs(0 + 40 * world - B_shotp1.x) >= 1 ? (0 + 40 * world < B_shotp1.x ? -1 : 1) : 0 + 40 * world - B_shotp1.x;
                  B_shotp1.y += Math.abs(0 + 40 * world - B_shotp1.y) >= 1 ? (0 + 40 * world < B_shotp1.y ? -1 : 1) : 0 + 40 * world - B_shotp1.y;
                }
              } else {
                if (B_shotp1.x == 40 * world && B_shotp1.y == 40 * world) {
                  B_shotp1.x -= 1;
                }
                B_shotp1.x += (B_shotp1.y < 40 * world ? -1.5 : (B_shotp1.y > sc.h - 40 * world ? 1.5 : 0));
                B_shotp1.y += (B_shotp1.x < 40 * world ? 1.5 : (B_shotp1.x > sc.w - 40 * world ? -1.5 : 0));
              }
              if (bsabio(3, 40, .01)) {
                B_shotp3.x += Math.abs(0 + 40 * world - B_shotp3.x) >= 1 ? (0 + 40 * world < B_shotp3.x ? -1 : 1) : 0 + 40 * world - B_shotp3.x;
                B_shotp3.y += Math.abs(sc.h - 40 * world - B_shotp3.y) >= 1 ? (sc.h - 40 * world < B_shotp3.y ? -1 : 1) : (sc.h - 40 * world) - B_shotp3.y;
              }
            } else if (B_hp <= B_maxhp / 4 * 3 && (T_counter / 1000 % 30) >= 14 && B_counter % 5 != 0) {
              if (B_shotp1.c) {
                if (bsabio(1, 40, 0)) {
                  if ((B_shotp1.x || B_shotp1.y) == 40 * world) {
                    B_shotp1.x -= 1;
                  } else {
                    B_shotp1.x += Math.abs(0 + 40 * world - B_shotp1.x) >= 1 ? (0 + 40 * world < B_shotp1.x ? -2 : 2) : 0 + 40 * world - B_shotp1.x;
                    B_shotp1.y += Math.abs(0 + 40 * world - B_shotp1.y) >= 1 ? (0 + 40 * world < B_shotp1.y ? -2 : 2) : 0 + 40 * world - B_shotp1.y;
                  }
                } else {
                  B_shotp1.x += (B_shotp1.y < 40 * world ? -2 : (B_shotp1.y > sc.h - 40 * world ? 2 : 0));
                  B_shotp1.y += (B_shotp1.x < 40 * world ? 2 : (B_shotp1.x > sc.w - 40 * world ? -2 : 0));
                }
                if (!bsabio(1, 40, 1)) {
                  B_shotp1.c = false;
                }
              } else {
                if (B_counter % 1 == 0) {
                  BS_counter += .4
                };
                B_shotp1.x = Math.abs((sc.center.w - 40 * world) * Math.cos((BS_counter - 90) * Math.PI / 180)) + 40 * world;
                B_shotp1.y = (sc.center.h - 40 * world) * Math.sin((BS_counter - 90) * Math.PI / 180) + sc.center.h;
              }
              if (B_shotp3.c) {
                if (bsabio(3, 40, 0)) {
                  if ((B_shotp3.x || B_shotp3.y) == 40 * world) {
                    B_shotp3.x -= 3;
                  } else {
                    B_shotp3.x += Math.abs(0 + 40 * world - B_shotp3.x) >= 1 ? (0 + 40 * world < B_shotp3.x ? -2 : 2) : 0 + 40 * world - B_shotp3.x;
                    B_shotp3.y += Math.abs(sc.h - 40 * world - B_shotp3.y) >= 1 ? (sc.h - 40 * world < B_shotp3.y ? 2 : 2) : sc.h - 40 * world - B_shotp3.y;
                  }
                }
                B_shotp4.c = false;
                if (!bsabio(3, 40, 1)) {
                  B_shotp3.c = false;
                };
              } else {
                if (Math.abs(B_shotp1.y - 40 * world) < 1 && Math.abs(B_shotp1.x <= 40 * world) < 1) {
                  B_shotp4.c = true;
                }
                if (B_shotp4.c) {
                  B_shotp3.x = (sc.center.w - 40 * world) * Math.cos((BS_counter - 180) * Math.PI / 180) + sc.center.w;
                  B_shotp3.y = -1 * Math.abs((sc.center.h - 40 * world) * Math.sin((BS_counter - 180) * Math.PI / 180)) + sc.h - 40 * world;
                }
              }
            }
            B_shotp2.x = sc.center.w + (sc.center.w - B_shotp1.x);
            B_shotp2.y = sc.center.h + (sc.center.h - B_shotp1.y);
            B_shotp4.x = sc.center.w + (sc.center.w - B_shotp3.x);
            B_shotp4.y = sc.center.h + (sc.center.h - B_shotp3.y);
            //乱数計算----------------------------------
            B_rtime = ((B_hp >= B_maxhp / 4 * 2) ? 30 : (B_hp >= B_maxhp / 4 * 1) ? Math.round(Math.random() * 20 + 20) : Math.round(Math.random() * 40 + 10));
            B_rspeed = ((B_hp >= B_maxhp / 4 * 2) ? 3 : (B_hp >= B_maxhp / 4 * 1) ? Math.round(Math.random() * 2 + 2) : Math.round(Math.random() * 4 + 1));
            B_rsize = ((B_hp >= B_maxhp / 4 * 2) ? 5 : (B_hp >= B_maxhp / 4 * 1) ? Math.round(Math.random() * 4 + 3) : Math.round(Math.random() * 8 + 1));
            B_counter++;
            //Boss Vectol-------------------------------            
            boss.position.x += Math.abs(sc.center.w - boss.position.x) >= 1 ? (boss.position.x < sc.center.w ? 1 : -1) : sc.center.w - boss.position.x;
            boss.position.y += Math.abs(sc.center.h - boss.position.y) >= 1 ? (boss.position.y < sc.center.h ? 1 : -1) : sc.center.h - boss.position.y;
            //方向-------------------------------------
            if (boss.alive) {
              if (B_counter % (B_hp > B_maxhp / 4 * 2 ? 100 : 150) == 0) {
                a = boss.position.distance(charactor.position);
                a.normalize();
                let Vectors = [{
                  x: Math.cos(9 * (Math.PI / 180)),
                  y: Math.sin(9 * (Math.PI / 180))
                }, {
                  x: Math.cos(27 * (Math.PI / 180)),
                  y: Math.sin(27 * (Math.PI / 180))
                }, {
                  x: Math.cos(45 * (Math.PI / 180)),
                  y: Math.sin(45 * (Math.PI / 180)),
                  size: 8
                }, {
                  x: Math.cos(63 * (Math.PI / 180)),
                  y: Math.sin(63 * (Math.PI / 180))
                }, {
                  x: Math.cos(81 * (Math.PI / 180)),
                  y: Math.sin(81 * (Math.PI / 180))
                }, {
                  x: Math.cos(99 * (Math.PI / 180)),
                  y: Math.sin(99 * (Math.PI / 180))
                }, {
                  x: Math.cos(117 * (Math.PI / 180)),
                  y: Math.sin(117 * (Math.PI / 180))
                }, {
                  x: Math.cos(135 * (Math.PI / 180)),
                  y: Math.sin(135 * (Math.PI / 180)),
                  size: 8
                }, {
                  x: Math.cos(153 * (Math.PI / 180)),
                  y: Math.sin(153 * (Math.PI / 180))
                }, {
                  x: Math.cos(171 * (Math.PI / 180)),
                  y: Math.sin(171 * (Math.PI / 180))
                }, {
                  x: Math.cos(189 * (Math.PI / 180)),
                  y: Math.sin(189 * (Math.PI / 180))
                }, {
                  x: Math.cos(207 * (Math.PI / 180)),
                  y: Math.sin(207 * (Math.PI / 180))
                }, {
                  x: Math.cos(225 * (Math.PI / 180)),
                  y: Math.sin(225 * (Math.PI / 180)),
                  size: 8
                }, {
                  x: Math.cos(243 * (Math.PI / 180)),
                  y: Math.sin(243 * (Math.PI / 180))
                }, {
                  x: Math.cos(261 * (Math.PI / 180)),
                  y: Math.sin(261 * (Math.PI / 180))
                }, {
                  x: Math.cos(279 * (Math.PI / 180)),
                  y: Math.sin(279 * (Math.PI / 180))
                }, {
                  x: Math.cos(297 * (Math.PI / 180)),
                  y: Math.sin(297 * (Math.PI / 180))
                }, {
                  x: Math.cos(315 * (Math.PI / 180)),
                  y: Math.sin(315 * (Math.PI / 180)),
                  size: 8
                }, {
                  x: Math.cos(333 * (Math.PI / 180)),
                  y: Math.sin(333 * (Math.PI / 180))
                }, {
                  x: Math.cos(351 * (Math.PI / 180)),
                  y: Math.sin(351 * (Math.PI / 180))
                }];
                //console.log("B_shot1 created.");
                let vectorCounter = 0;
                for (e = 0; e < B_smaxcount; e++) {
                  if (!B_shot0[e].alive) {
                    B_shot0[e].set(boss.position, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || 3 * world);
                    vectorCounter++;
                    if (vectorCounter >= Vectors.length) break;
                    // console.log(vectorCounter,bossShot[k]);
                  }
                }
              }
              if (B_counter % 10 == 0 && B_hp > B_maxhp / 4 * 3) {
                a = boss.position.distance(charactor.position);
                a.normalize();
                let Vectors = [{
                  x: Math.cos(B_counter * (Math.PI / 180)),
                  y: Math.sin(B_counter * (Math.PI / 180))
                }, {
                  x: Math.cos((B_counter + 60) * (Math.PI / 180)),
                  y: Math.sin((B_counter + 60) * (Math.PI / 180))
                }, {
                  x: Math.cos((B_counter + 120) * (Math.PI / 180)),
                  y: Math.sin((B_counter + 120) * (Math.PI / 180))
                }, {
                  x: Math.cos((B_counter + 180) * (Math.PI / 180)),
                  y: Math.sin((B_counter + 180) * (Math.PI / 180))
                }, {
                  x: Math.cos((B_counter + 240) * (Math.PI / 180)),
                  y: Math.sin((B_counter + 240) * (Math.PI / 180))
                }, {
                  x: Math.cos((B_counter + 300) * (Math.PI / 180)),
                  y: Math.sin((B_counter + 300) * (Math.PI / 180))
                }];
                let vectorCounter = 0;
                for (f = 0; f < B_smaxcount; f++) {
                  if (B_shot1[f].alive) continue;
                  B_shot1[f].set({
                    x: B_shotp1.x,
                    y: B_shotp1.y
                  }, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || 3 * world);
                  vectorCounter++;
                  if (vectorCounter >= Vectors.length) break;
                }
                vectorCounter = 0;
                for (l = 0; l < B_smaxcount; l++) {
                  if (B_shot2[l].alive) continue;
                  B_shot2[l].set({
                    x: B_shotp2.x,
                    y: B_shotp2.y
                  }, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || 3 * world);
                  vectorCounter++;
                  if (vectorCounter >= Vectors.length) break;
                }
                //console.log("a");
              }
              if (B_counter % 50 == 0) {
                a = boss.position.distance(charactor.position);
                a.normalize();
                let Vectors = [{
                  x: Math.cos(B_counter + 0 * (Math.PI / 180)),
                  y: Math.sin(B_counter + 0 * (Math.PI / 180)),
                  size: 8
                }, {
                  x: Math.cos(B_counter + 18 * (Math.PI / 180)),
                  y: Math.sin(B_counter + 18 * (Math.PI / 180))
                }, {
                  x: Math.cos(B_counter + 36 * (Math.PI / 180)),
                  y: Math.sin(B_counter + 36 * (Math.PI / 180))
                }, {
                  x: Math.cos(B_counter + 54 * (Math.PI / 180)),
                  y: Math.sin(B_counter + 54 * (Math.PI / 180))
                }, {
                  x: Math.cos(B_counter + 72 * (Math.PI / 180)),
                  y: Math.sin(B_counter + 72 * (Math.PI / 180))
                }, {
                  x: Math.cos(B_counter + 90 * (Math.PI / 180)),
                  y: Math.sin(B_counter + 90 * (Math.PI / 180)),
                  size: 8
                }, {
                  x: Math.cos(B_counter + 108 * (Math.PI / 180)),
                  y: Math.sin(B_counter + 108 * (Math.PI / 180))
                }, {
                  x: Math.cos(B_counter + 126 * (Math.PI / 180)),
                  y: Math.sin(B_counter + 126 * (Math.PI / 180))
                }, {
                  x: Math.cos(B_counter + 144 * (Math.PI / 180)),
                  y: Math.sin(B_counter + 144 * (Math.PI / 180))
                }, {
                  x: Math.cos(B_counter + 162 * (Math.PI / 180)),
                  y: Math.sin(B_counter + 162 * (Math.PI / 180))
                }, {
                  x: Math.cos(B_counter + 180 * (Math.PI / 180)),
                  y: Math.sin(B_counter + 180 * (Math.PI / 180)),
                  size: 8
                }, {
                  x: Math.cos(B_counter + 198 * (Math.PI / 180)),
                  y: Math.sin(B_counter + 198 * (Math.PI / 180))
                }, {
                  x: Math.cos(B_counter + 216 * (Math.PI / 180)),
                  y: Math.sin(B_counter + 216 * (Math.PI / 180))
                }, {
                  x: Math.cos(B_counter + 234 * (Math.PI / 180)),
                  y: Math.sin(B_counter + 234 * (Math.PI / 180))
                }, {
                  x: Math.cos(B_counter + 252 * (Math.PI / 180)),
                  y: Math.sin(B_counter + 252 * (Math.PI / 180))
                }, {
                  x: Math.cos(B_counter + 270 * (Math.PI / 180)),
                  y: Math.sin(B_counter + 270 * (Math.PI / 180)),
                  size: 8
                }, {
                  x: Math.cos(B_counter + 288 * (Math.PI / 180)),
                  y: Math.sin(B_counter + 288 * (Math.PI / 180))
                }, {
                  x: Math.cos(B_counter + 306 * (Math.PI / 180)),
                  y: Math.sin(B_counter + 306 * (Math.PI / 180))
                }, {
                  x: Math.cos(B_counter + 324 * (Math.PI / 180)),
                  y: Math.sin(B_counter + 324 * (Math.PI / 180))
                }, {
                  x: Math.cos(B_counter + 342 * (Math.PI / 180)),
                  y: Math.sin(B_counter + 342 * (Math.PI / 180))
                }];
                if (B_hp <= B_maxhp / 4 * 3) {
                  let vectorCounter = 0;
                  for (f = 0; f < B_smaxcount; f++) {
                    if (B_shot1[f].alive) continue;
                    B_shot1[f].set({
                      x: B_shotp1.x,
                      y: B_shotp1.y
                    }, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || 3 * world);
                    vectorCounter++;
                    if (vectorCounter >= Vectors.length) break;
                  }
                  vectorCounter = 0;
                  for (l = 0; l < B_smaxcount; l++) {
                    if (B_shot2[l].alive) continue;
                    B_shot2[l].set({
                      x: B_shotp2.x,
                      y: B_shotp2.y
                    }, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || 3 * world);
                    vectorCounter++;
                    if (vectorCounter >= Vectors.length) break;
                  }
                }
                vectorCounter = 0;
                for (m = 0; m < B_smaxcount; m++) {
                  if (!B_shot3[m].alive) {
                    B_shot3[m].set({
                      x: B_shotp3.x,
                      y: B_shotp3.y
                    }, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || 3 * world);
                    vectorCounter++;
                    if (vectorCounter >= Vectors.length) break;
                  }
                }
                vectorCounter = 0;
                for (n = 0; n < B_smaxcount; n++) {
                  if (!B_shot4[n].alive) {
                    B_shot4[n].set({
                      x: B_shotp4.x,
                      y: B_shotp4.y
                    }, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || 3 * world);
                    vectorCounter++;
                    if (vectorCounter >= Vectors.length) break;
                  }
                }
              };
              if (B_hp <= B_maxhp / 4 * 3 && (T_counter / 1000 % 30) < 14 && B_counter % 5 == 0) {
                {
                  a = distanse(sc.center.w, sc.center.h, B_shotp1.x, B_shotp1.y);
                  a.normalize();
                  let Vectors = [{
                    x: a.x,
                    y: a.y,
                    size: boss.size * 1.5,
                    speed: 10
                  }];
                  let vectorCounter = 0;
                  for (o = 0; o < B_smaxcount; o++) {
                    if (!B_shot5[o].alive) {
                      B_shot5[o].set({
                        x: B_shotp1.x,
                        y: B_shotp1.y
                      }, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || 3 * world);
                      vectorCounter++;
                      if (vectorCounter >= Vectors.length) break;
                    }
                  }
                  //console.log("a");
                } {
                  a = distanse(sc.center.w, sc.center.h, B_shotp4.x, B_shotp4.y);
                  a.normalize();
                  let Vectors = [{
                    x: a.x,
                    y: a.y,
                    size: boss.size * 1.5,
                    speed: 10
                  }];
                  let vectorCounter = 0;
                  for (r = 0; r < B_smaxcount; r++) {
                    if (!B_shot6[r].alive) {
                      B_shot6[r].set({
                        x: B_shotp4.x,
                        y: B_shotp4.y
                      }, Vectors[vectorCounter], Vectors[vectorCounter].size * world || 5 * world, Vectors[vectorCounter].speed * world || 3 * world);
                      vectorCounter++;
                      if (vectorCounter >= Vectors.length) break;
                    }
                  }
                  //console.log("a");                
                }
              }
            }
          }
        };
        //B_Level--------------------------------------      
        if (B_hp <= 0 && B_sabhp != 999) {
          score += 1000;
          B_hp = (B_sabhp != 1) ? B_maxhp : 0;
          B_sabhp -= 1;
          ctx.fillStyle = B_color;
          if (!shouldshowKIDOU)
            ctx.fillRect(0, 0, sc.w, sc.h);
        }
      };
    }
    //End main-----------------------------------------------------------------
    if (C_sabhp <= 0) {
      ShowGameover("GAME Failled\nscore || " + score);
      hitalive = false;
    } else requestAnimationFrame(arguments.callee);
    if (B_sabhp <= 0) {
      if (score >= -10000) {
        if (window.confirm('Extra に挑みますか？')) {
          window.alert("Extra ステージ \n 一定以上のScore 獲得者のみの Level です。 \n Score : 加算減産 \n 操作 : 維持");
          B_sabhp = 999;
          B_hp = B_maxhp;
        } else {
          ShowClear("GAME CLEAR\nscore || " + score);
          hitalive = false;
        }
      } else {
        ShowClear("GAME CLEAR\nscore || " + score);
        hitalive = false;
      }
    } else if (B_sabhp == 999 && B_hp <= 0) {
      ShowClear("Extra CLEAR\nscore || " + score);
      hitalive = false;
    }
    // };
    // console.log(CC_passc);
  })();
};