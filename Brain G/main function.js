
function bsabio(aa,bb,cc){
	if((Math.abs(eval("B_shotp"+(aa)+"").x-bb*world) <= cc ||
		Math.abs(eval("B_shotp"+(aa)+"").x-(sc.w-bb*world)) <= cc) &&
		(Math.abs(eval("B_shotp"+(aa)+"").y-bb*world) <= cc ||
			Math.abs(eval("B_shotp"+(aa)+"").y-(sc.h-bb*world)) <= cc)){  
		return false;  		
}else if(
	eval("B_shotp"+(aa)+"").x>=bb*world && 
	eval("B_shotp"+(aa)+"").x<=sc.w-bb*world && 
	eval("B_shotp"+(aa)+"").y>=bb*world && 
	eval("B_shotp"+(aa)+"").y<=sc.h-bb*world
	){
	return true;
}else{return false;}
};
//System-----------------------------------------------------------------------
//Function---------------------------------------------------------------------
function resize(screenCanvas, charactor) {
	if ((document.documentElement.clientHeight - 2) / 762.5 <= (document.documentElement.clientWidth - 2) / 1364) {
		world = sc.h / 762.5;
	} else {
		world = sc.w / 1364;
  } //1364:762.5==w:h 1364*h==762.5*w 1364:762.5==h:w 1364*w==762.5*h w==762.5*h/1364 

  world2 = ((sc.w >= sc.h) ? sc.h : sc.w) / 762.5;

  C_worldx = charactor.position.x / sc.w;
  C_worldy = charactor.position.y / sc.h;
  B_worldx = boss.position.x / sc.w;
  B_worldy = boss.position.y / sc.h;

  if (!sc_size) {
  	width = document.documentElement.clientWidth - 2;
  	height = document.documentElement.clientHeight - 2;
  } else { //w:h==1364:762  1364*h==762*w
  	if ((document.documentElement.clientHeight - 2) / 762.5 >= (document.documentElement.clientWidth - 2) / 1364) {
  		width = document.documentElement.clientWidth - 2;
      height = 762.5 * (document.documentElement.clientWidth - 2) / 1364; //1364*h==762*w 1364*h==762*E h==762*E/1364
  } else {
      width = 1364 * (document.documentElement.clientHeight - 2) / 762.5; //1364*h==762*w 1364*E==762*w 1364*E/762==w
      height = document.documentElement.clientHeight - 2;
  }
}
screenCanvas.width = width;
screenCanvas.height = height;

sc.w = screenCanvas.width;
sc.h = screenCanvas.height;
sc.center = {
	h: sc.h / 2,
	w: sc.w / 2
};

charactor.position.x = sc.w * C_worldx;
charactor.position.y = sc.h * C_worldy;
boss.position.x = sc.w * B_worldx;
boss.position.y = sc.h * B_worldy;
};

function changecolor() {
	if (CC_pass) {
		C_sabhpgagecolor = 'rgba(255,0,0,1)';
	} else {
		C_sabhpgagecolor = 'rgba(16,87,121,1)';
	};
	if (B_sabhp == 3 || B_sabhp == 4) {
		B_color = 'rgba(35, 71, 130,1)';
		BS_color = 'rgba(196, 136, 71,1)';
		B_name = "Neko";
		boss.size = 20 * world;
	} else if (B_sabhp <= 2) {
		B_color = 'hsla(31,51%,52%,1)';
		BS_color = 'rgba(35, 71, 130,1)';
		B_name = "Skyless Fox";
		boss.size = 20 * world;
	} else if (B_sabhp == 999) {
		B_color = 'hsla(31,51%,52%,1)';
		BS_color = 'rgba(35, 71, 130,1)';
		B_name = "Indigo";
		boss.size = 20 * world;
	}
}

function CC_23() {
	isLogEnable = true;
	if (L_main == 1) {
		log("main", sc.w + " : width", sc.h + " : height");
	} else if (L_main == 2) {
    // log("main2", Ooperation + " : CC_78", C_hp + " : HP", C_sabhp + " : sHP",S_point+" : S_p", C_attack + " : At", C_defence + " : Df", C_speed + " : Sp");
};
};

function C_draw(charactor, ctx /*New: 関数に、どのキャンバスへ描画するかを表すctxも渡すようにしました*/ ) {
	ctx.beginPath();
	ctx.arc(charactor.position.x, charactor.position.y, C_outsize, 0, Math.PI * 2, false)
	ctx.closePath();
	ctx.fillStyle = C_color;
	ctx.fill();
	ctx.strokeStyle = CS_color;
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(charactor.position.x, charactor.position.y, charactor.size, 0, Math.PI * 2, false)
	ctx.closePath();
	ctx.fillStyle = CS_color;
	ctx.fill();

	if (fCC_78 && !keyctrl && keyshift) {
		ctx.beginPath();
		ctx.strokeStyle = CS_color;
		ctx.moveTo(charactor.position.x, 0);
		ctx.lineTo(charactor.position.x, sc.h);
		ctx.moveTo(0, charactor.position.y);
		ctx.lineTo(sc.w, charactor.position.y);
		ctx.stroke();
		ctx.closePath();
	}
}

function CS_draw(CS_1, CS_2, CS_3, CS_4, ctx /*New: 関数に、どのキャンバスへ描画するかを表すctxも渡すようにしました*/ ) {
	ctx.beginPath();
	ctx.arc(CS_1.x, CS_1.y, CS_size, 0, Math.PI * 2, false)
	ctx.moveTo(CS_2.x, CS_2.y);
	ctx.arc(CS_2.x, CS_2.y, CS_size, 0, Math.PI * 2, false)
	ctx.moveTo(CS_3.x, CS_3.y);
	ctx.arc(CS_3.x, CS_3.y, CS_size, 0, Math.PI * 2, false)
	ctx.moveTo(CS_4.x, CS_4.y);
	ctx.arc(CS_4.x, CS_4.y, CS_size, 0, Math.PI * 2, false)
	
	ctx.closePath();
	ctx.strokeStyle = CS_color;
	ctx.stroke();
	ctx.fillStyle = CS_color;
	ctx.fill();
}

function C_sdraw(ctx /*New: 関数に、どのキャンバスへ描画するかを表すctxも渡すようにしました*/ ) {
	ctx.fillStyle = C_scolor;
	ctx.beginPath();
	for (c = 0; c < C_smaxcount; c++) {
		if (C_shot0[c].alive) {
			if (fire) {
				C_shot0[c].move();
			}
			ctx.arc(
				C_shot0[c].position.x,
				C_shot0[c].position.y,
				C_shot0[c].size,
				0, Math.PI * 2, false
				);
			ctx.closePath();
		}
	}
	ctx.fill();

	ctx.fillStyle = C_s2color;
	ctx.beginPath();
	for (g = 0; g < C_smaxcount; g++) {
		if (C_shot1[g].alive) {
			if (fire) {
				C_shot1[g].move();
			}
			ctx.arc(
				C_shot1[g].position.x,
				C_shot1[g].position.y,
				C_shot1[g].size,
				0, Math.PI * 2, false
				);
			ctx.closePath();
		}
	}
	for (h = 0; h < C_smaxcount; h++) {
		if (C_shot2[h].alive) {
			if (fire) {
				C_shot2[h].move();
			}
			ctx.arc(
				C_shot2[h].position.x,
				C_shot2[h].position.y,
				C_shot2[h].size,
				0, Math.PI * 2, false
				);
			ctx.closePath();
		}
	}
	ctx.fill();
	ctx.fillStyle = C_s2color;
	ctx.beginPath();
	for (s = 0; s < C_smaxcount; s++) {
		if (C_shot3[s].alive) {
			if (fire) {
				C_shot3[s].move();
			}
			ctx.arc(
				C_shot3[s].position.x,
				C_shot3[s].position.y,
				C_shot3[s].size,
				0, Math.PI * 2, false
				);
			ctx.closePath();
		}
	}
	for (t = 0; t < C_smaxcount; t++) {
		if (C_shot4[t].alive) {
			if (fire) {
				C_shot4[t].move();
			}
			ctx.arc(
				C_shot4[t].position.x,
				C_shot4[t].position.y,
				C_shot4[t].size,
				0, Math.PI * 2, false
				);
			ctx.closePath();
		}
	}
	ctx.fill();
}

function B_draw(ctx /*New: 関数に、どのキャンバスへ描画するかを表すctxも渡すようにしました*/ ) {
	if (B_sabhp == 999 && B_hp <= B_maxhp/4*2) {
		ctx.fillStyle = 'rgba(255,255,255,.3)';	
		if(B_hp>B_maxhp/4*1){
			ctx.beginPath();
			ctx.arc(
				sc.center.w,
				sc.center.h,
				100 * world,
				0, Math.PI * 2, false
				);
			ctx.closePath();  
			ctx.fill();
		}	

		ctx.beginPath();
		ctx.strokeStyle = BS_color;
		if (boss.alive) {
			ctx.arc(
				sc.center.w,
				sc.center.h,
				100 * world / Math.sqrt(2),
				0, Math.PI * 2, false
				);
			ctx.moveTo(sc.center.w + 100 * world, sc.center.h)
			ctx.arc(
				sc.center.w,
				sc.center.h,
				100 * world,
				0, Math.PI * 2, false
				);
			ctx.closePath();
		}
		ctx.stroke();

		ctx.save();
		ctx.translate(sc.center.w, sc.center.h);
		ctx.rotate(B_counter * Math.PI / 180)
		ctx.translate(-sc.center.w, -sc.center.h);
		ctx.strokeRect(sc.center.w - 100 * world / Math.sqrt(2), sc.center.h - 100 * world / Math.sqrt(2), 2 * 100 * world / Math.sqrt(2), 2 * 100 * world / Math.sqrt(2))
		ctx.restore();

		ctx.save();
		ctx.translate(sc.center.w, sc.center.h);
		ctx.rotate((-B_counter + 45) * Math.PI / 180)
		ctx.translate(-sc.center.w, -sc.center.h);
		ctx.strokeRect(sc.center.w - 100 * world / Math.sqrt(2), sc.center.h - 100 * world / Math.sqrt(2), 2 * 100 * world / Math.sqrt(2), 2 * 100 * world / Math.sqrt(2))
		ctx.restore();
		if (B_hp <= B_maxhp/4*1) {
			ctx.beginPath();
			ctx.fillStyle = 'rgba(255,255,255,.3)';
			ctx.strokeStyle=BS_color;
			if (boss.alive) {
				ctx.arc(
					sc.center.w,
					sc.center.h,
					100 * world*Math.sqrt(2),
					0, Math.PI * 2, false
					);
				ctx.closePath();
			}
			ctx.fill();
			ctx.stroke();

			ctx.save();
			ctx.translate(sc.center.w, sc.center.h);
			ctx.rotate((B_counter+45) * Math.PI / 180)
			ctx.translate(-sc.center.w, -sc.center.h);
			ctx.strokeRect(sc.center.w - 100 * world, sc.center.h- 100 * world, 200 * world, 200 * world)
			ctx.restore();

			ctx.save();
			ctx.translate(sc.center.w, sc.center.h);
			ctx.rotate((-B_counter + 90) * Math.PI / 180)
			ctx.translate(-sc.center.w, -sc.center.h);
			ctx.strokeRect(sc.center.w - 100 * world, sc.center.h- 100 * world, 200 * world, 200 * world)
			ctx.restore();
		}
	}
	if (B_style) {
		ctx.beginPath();
		ctx.fillStyle = B_color;
		ctx.strokeStyle = BS_color;
    //ctx.fillStyle = 'hsla(240,'+(Math.random()*100+0)+'%,50%,1)';
    //ctx.fillStyle = 'hsla(217,'+(B_counter%20===0?(Math.random()*60+27):57)+'%,32%,1)';
    if (boss.alive) {
    	boss.move();
    	ctx.arc(
    		boss.position.x,
    		boss.position.y,
    		boss.size,
    		0, Math.PI * 2, false
    		);
    	ctx.closePath();
    }
    ctx.fill();
    ctx.stroke();
} else {
	ctx.drawImage(img[1], boss.position.x - boss.size * 2, boss.position.y - boss.size * 2, boss.size * 4, boss.size * 4);
}
}

function BS_draw(ctx /*New: 関数に、どのキャンバスへ描画するかを表すctxも渡すようにしました*/ ) {
	ctx.strokeStyle = B_color;
	if (B_sabhp == 2) {
		if (B_hp <= B_maxhp/4*1) {
			ctx.strokeRect(80 * world, 80 * world, sc.w - 160 * world, sc.h - 160 * world);
		}
		if (B_hp <= B_maxhp/4*1) {
			ctx.strokeRect(30 * world, 30 * world, sc.w - 60 * world, sc.h - 60 * world);
		}
	} else if (B_sabhp == 1) {
		ctx.strokeRect(40 * world, 40 * world, sc.w - 80 * world, sc.h - 80 * world);
		if (B_hp <= B_maxhp/4*2) {
			ctx.strokeRect(100 * world, 100 * world, sc.w - 200 * world, sc.h - 200 * world);
		}
	} else if (B_sabhp == 999) {
		ctx.strokeRect(40 * world, 40 * world, sc.w - 80 * world, sc.h - 80 * world);
	}

	B_shotp1.size=((B_sabhp != 1 && B_sabhp != 999) ? (boss.size / (B_shotp1.c ? 2 : 1)) : boss.size * 1.5);
	B_shotp2.size=((B_sabhp != 1 && B_sabhp != 999) ? (boss.size / (B_shotp2.c ? 2 : 1)) : boss.size * 1.5);
	B_shotp3.size=((B_sabhp != 1 && B_sabhp != 999) ? (boss.size / (B_shotp3.c ? 2 : 1.5)) : boss.size * 1.5);
	B_shotp4.size=((B_sabhp != 1 && B_sabhp != 999) ? (boss.size / (B_shotp4.c ? 2 : 1.5)) : boss.size * 1.5);

	ctx.beginPath();
	ctx.fillStyle = BS_color;
	ctx.strokeStyle = B_color;
	if (boss.alive) {
    //boss.move();
    ctx.arc(
    	B_shotp1.x,
    	B_shotp1.y,
    	B_shotp1.size,
    	0, Math.PI * 2, false
    	);
    ctx.moveTo(B_shotp2.x, B_shotp2.y);
    ctx.arc(
    	B_shotp2.x,
    	B_shotp2.y,
    	B_shotp2.size,
    	0, Math.PI * 2, false
    	);
    if (B_sabhp == 4 && B_hp <= B_maxhp/4*1 || B_sabhp == 3 && (B_shotp3.c || B_shotp4.c) || B_sabhp == 2 || B_sabhp == 1 || B_sabhp == 999) {
    	ctx.moveTo(B_shotp3.x, B_shotp3.y)
    	ctx.arc(
    		B_shotp3.x,
    		B_shotp3.y,
    		B_shotp3.size,
    		0, Math.PI * 2, false
    		);
    	ctx.moveTo(B_shotp4.x, B_shotp4.y);
    	ctx.arc(
    		B_shotp4.x,
    		B_shotp4.y,
    		B_shotp4.size,
    		0, Math.PI * 2, false
    		);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}
}

function B_sdraw(ctx /*New: 関数に、どのキャンバスへ描画するかを表すctxも渡すようにしました*/ ) {
	ctx.fillStyle =BS_color;
	ctx.fillRect(B_swall.x-B_swall.size/2,0,B_swall.size,sc.h);
	ctx.fillRect(sc.w-B_swall.x-B_swall.size/2,0,B_swall.size,sc.h);
	ctx.fillRect(0,B_swall.y-B_swall.size/2,sc.w,B_swall.size);
	ctx.fillRect(0,sc.h-B_swall.y-B_swall.size/2,sc.w,B_swall.size);

	ctx.fillStyle = B_scolor;
	ctx.beginPath();
	for (e = 0; e < B_smaxcount; e++) {
		if (B_shot0[e].alive) {
			if (fire) {
				B_shot0[e].move();
			}
			ctx.arc(
				B_shot0[e].position.x,
				B_shot0[e].position.y,
				B_shot0[e].size,
				0, Math.PI * 2, false
				);
			ctx.closePath();
		}
	}
	ctx.fill();

	ctx.fillStyle = B_s2color;
	ctx.beginPath();
	for (f = 0; f < B_smaxcount; f++) {
		if (B_shot1[f].alive) {
			if (fire) {
				B_shot1[f].move();
			}
			ctx.arc(
				B_shot1[f].position.x,
				B_shot1[f].position.y,
				B_shot1[f].size,
				0, Math.PI * 2, false
				);
			ctx.closePath();
		}
	}
	for (l = 0; l < B_smaxcount; l++) {
		if (B_shot2[l].alive) {
			if (fire) {
				B_shot2[l].move();
			}
			ctx.arc(
				B_shot2[l].position.x,
				B_shot2[l].position.y,
				B_shot2[l].size,
				0, Math.PI * 2, false
				);
			ctx.closePath();
		}
	}
	ctx.fill();

	ctx.fillStyle = B_s3color;
	ctx.beginPath();
	for (m = 0; m < B_smaxcount; m++) {
		if (B_shot3[m].alive) {
			if (fire) {
				B_shot3[m].move();
			}
			ctx.arc(
				B_shot3[m].position.x,
				B_shot3[m].position.y,
				B_shot3[m].size,
				0, Math.PI * 2, false
				);
			ctx.closePath();
		}
	}
	for (n = 0; n < B_smaxcount; n++) {
		if (B_shot4[n].alive) {
			if (fire) {
				B_shot4[n].move();
			}
			ctx.arc(
				B_shot4[n].position.x,
				B_shot4[n].position.y,
				B_shot4[n].size,
				0, Math.PI * 2, false
				);
			ctx.closePath();
		}
	}
	ctx.fill();

	ctx.fillStyle = (B_sabhp != 2 ? B_scolor : B_s2color);
	ctx.beginPath();
	for (o = 0; o < B_smaxcount; o++) {
		if (B_shot5[o].alive) {
			if (fire) {
				B_shot5[o].move();
			}
			ctx.arc(
				B_shot5[o].position.x,
				B_shot5[o].position.y,
				B_shot5[o].size,
				0, Math.PI * 2, false
				);
			ctx.closePath();
		}
	}
	for (r = 0; r < B_smaxcount; r++) {
		if (B_shot6[r].alive) {
			if (fire) {
				B_shot6[r].move();
			}
			ctx.arc(
				B_shot6[r].position.x,
				B_shot6[r].position.y,
				B_shot6[r].size,
				0, Math.PI * 2, false
				);
			ctx.closePath();
		}
	}
	ctx.fill();

	if ((B_sabhp == 1||B_sabhp==999) && B_hp <= B_maxhp/4*3 && (T_counter / 1000 % 30) >= 28) {
		ctx.beginPath();
		ctx.lineWidth = boss.size * 1.5;
		ctx.strokeStyle = 'hsla(0,100%,50%,.4)';
		ctx.moveTo(B_shotp1.x, B_shotp1.y);
		ctx.lineTo(B_shotp2.x, B_shotp2.y);
		ctx.moveTo(B_shotp3.x, B_shotp3.y);
		ctx.lineTo(B_shotp4.x, B_shotp4.y);
		ctx.closePath();
		ctx.stroke();
		ctx.lineWidth = 1;
	}
}

function B_hpdraw(ctx /*New: 関数に、どのキャンバスへ描画するかを表すctxも渡すようにしました*/ ) {
	ctx.globalAlpha = (keyq ? 1 : .2);

	ctx.fillStyle = B_color;
	ctx.beginPath();
	ctx.fillRect(sc.w - 50 * world2 - C_hpgage * world2 * 3.9 * (B_hp > B_maxhp/4*3 ? B_hp - B_maxhp/4*3 : 0) / (B_maxhp/4*1), 10 * world2, C_hpgage * world2 * 3.9 * (B_hp > B_maxhp/4*3 ? B_hp - B_maxhp/4*3 : 0) / (B_maxhp/4*1), 30 * world2);
	ctx.fillRect(sc.w - 50 * world2 - C_hpgage * world2 * 3.6 * (B_hp >= B_maxhp/4*3 ? B_maxhp/4*1 : (B_hp > B_maxhp/4*2 ? B_hp - B_maxhp/4*2 : 0)) / (B_maxhp/4*1), 50 * world2, C_hpgage * world2 * 3.6 * (B_hp >= B_maxhp/4*3 ? B_maxhp/4*1 : (B_hp > B_maxhp/4*2 ? B_hp - B_maxhp/4*2 : 0)) / (B_maxhp/4*1), 30 * world2);
	ctx.fillRect(sc.w - 50 * world2 - C_hpgage * world2 * 3.3 * (B_hp >= B_maxhp/4*2 ? B_maxhp/4*1 : (B_hp > B_maxhp/4*1 ? B_hp - B_maxhp/4*1 : 0)) / (B_maxhp/4*1), 90 * world2, C_hpgage * world2 * 3.3 * (B_hp >= B_maxhp/4*2 ? B_maxhp/4*1 : (B_hp > B_maxhp/4*1 ? B_hp - B_maxhp/4*1 : 0)) / (B_maxhp/4*1), 30 * world2);
	ctx.fillRect(sc.w - 50 * world2 - C_hpgage * world2 * 3.0 * (B_hp >= B_maxhp/4*1 ? B_maxhp/4*1 : B_hp) / (B_maxhp/4*1), 130 * world2, (C_hpgage * world2 * 3.0) * (B_hp >= B_maxhp/4*1 ? B_maxhp/4*1: B_hp) / (B_maxhp/4*1), 30 * world2);

	ctx.strokeStyle = 'rgba(255,255,255,1)';
	ctx.strokeRect(sc.w - C_hpgage * world2 * 3.9 - 50 * world2, 10 * world2, C_hpgage * world2 * 3.9, 30 * world2)
	ctx.strokeRect(sc.w - C_hpgage * world2 * 3.6 - 50 * world2, 50 * world2, C_hpgage * world2 * 3.6, 30 * world2)
	ctx.strokeRect(sc.w - C_hpgage * world2 * 3.3 - 50 * world2, 90 * world2, C_hpgage * world2 * 3.3, 30 * world2)
	ctx.strokeRect(sc.w - C_hpgage * world2 * 3.0 - 50 * world2, 130 * world2, C_hpgage * world2 * 3.0, 30 * world2)
	ctx.closePath();

	ctx.fillStyle = 'rgba(255,255,255,.5)';
	ctx.fillRect(sc.w - C_hpgage * world2 * 2.7 - 50 * world2, 170 * world2, C_hpgage * world2 * 2.7, 30 * world2)
	ctx.fillRect(sc.w - 40 * world2, 10 * world2, 30 * world2, 150 * world2)

	ctx.strokeStyle = 'rgba(0,0,0,1)';
	ctx.strokeRect(sc.w - C_hpgage * world2 * 2.7 - 50 * world2, 170 * world2, C_hpgage * world2 * 2.7, 30 * world2)
	ctx.strokeRect(sc.w - 40 * world2, 10 * world2, 30 * world2, 150 * world2)

	if (CC_pass) {
		ctx.fillStyle = 'hsla(' + (B_counter % 360) + ',50%,50%,.5)'
	} else {
		ctx.fillStyle = 'rgba(0,0,0,.5)';
	}
	ctx.fillRect(sc.w - 40 * world2, 170 * world2, 30 * world2, 30 * world2)
	ctx.strokeStyle = 'rgba(255,255,255,1)';
	ctx.strokeRect(sc.w - 40 * world2, 170 * world2, 30 * world2, 30 * world2)

	ctx.fillStyle = 'rgba(0,0,0,1)';
	ctx.strokeStyle = B_color;
	fontsize = 30;
	ctx.textAlign = "right";
	ctx.font = fontsize * world2 + "px 'Rounded Mplus 1c', 'Open Sans', 'Noto Sans Japanese', 'Yu Gothic', 'Meiryo UI', sans-serif";
	ctx.fillText(B_name, sc.w - 55 * world2, 195 * world2);
	ctx.strokeText(B_name, sc.w - 55 * world2, 195 * world2);

	ctx.globalAlpha = 1;
}

function S_builddraw(ctx /*New: 関数に、どのキャンバスへ描画するかを表すctxも渡すようにしました*/ ) {
	ctx.beginPath();
	ctx.fillStyle = S_bcolor;
	for (k = 0; k < S_bmaxcount; k++) {
		if (S_build[k].alive) {
      //S_build[k].move();
      // translate, rotateなどの操作は、最後に指定したものから順番に実行されていくらしい。
      ctx.save();
      ctx.translate(S_build[k].position.x, S_build[k].position.y); // 3. 1で原点に移動された時期位置を本来の時期位置へ平行移動
      ctx.rotate(0 + (S_build[k].place == 1 ? 0 : 0) + (S_build[k].place == 2 ? 180 * Math.PI / 180 : 0) + (S_build[k].place == 4 ? 270 * Math.PI / 180 : 0) + (S_build[k].place == 8 ? 90 * Math.PI / 180 : 0) +
        (S_build[k].place == 5 ? 315 * Math.PI / 180 : 0) + (S_build[k].place == 6 ? 225 * Math.PI / 180 : 0) + (S_build[k].place == 9 ? 45 * Math.PI / 180 : 0) + (S_build[k].place == 10 ? 135 * Math.PI / 180 : 0)); // 2. 原点を中心として回転
      ctx.translate(-S_build[k].position.x, -S_build[k].position.y); // 1. 自機位置が原点になるように平行移動
      ctx.fillRect(
      	S_build[k].position.x - S_build[k].size / 2,
      	S_build[k].position.y - charactor.size,
      	S_build[k].size,
      	charactor.size * 2
      	);
      ctx.rotate(0 + (S_build[k].place == 1 ? -0 : 0) + (S_build[k].place == 2 ? -180 * Math.PI / 180 : 0) + (S_build[k].place == 4 ? -270 * Math.PI / 180 : 0) + (S_build[k].place == 8 ? -90 * Math.PI / 180 : 0) +
        (S_build[k].place == 5 ? -315 * Math.PI / 180 : 0) + (S_build[k].place == 6 ? -225 * Math.PI / 180 : 0) + (S_build[k].place == 9 ? -45 * Math.PI / 180 : 0) + (S_build[k].place == 10 ? -135 * Math.PI / 180 : 0)); // 
      /*
      ctx.arc(
        S_build[k].position.x,
        S_build[k].position.y,
        S_build[k].size,
        0, Math.PI * 2, false
      );
      ctx.fill();*/
      ctx.closePath();
      ctx.restore();
  }
}
}

function C_hpdraw(C_sabhp, ctx /*New: 関数に、どのキャンバスへ描画するかを表すctxも渡すようにしました*/ ) {
	if (keyq) {
		ctx.globalAlpha = 1;
	} else {
		ctx.globalAlpha = .2;
	}
	fontsize = 40;

	if (keyf1) {
		ctx.beginPath();
		ctx.arc(sc.w - (C_hpgage * 1.5) * world2, sc.h - (C_hpgage + fontsize * 1.5) * world2, (C_hpgage + 2) * world2, 0, 360 * (Math.PI / 180), false);
		ctx.closePath();
		ctx.fillStyle = 'rgba(0,0,0,0.5)';
		ctx.fill();
		ctx.lineWidth = 4 * world2;
		ctx.strokeStyle = 'rgba(255,255,255,1)';
		ctx.stroke();


		ctx.beginPath();
		ctx.arc(sc.w - (C_hpgage * 1.5) * world2, sc.h - (C_hpgage + fontsize * 1.5) * world2, (C_hpgage - 5) * world2, -90 * (Math.PI / 180), ((360 * C_hp / 5) - 90) * (Math.PI / 180), false);
		ctx.lineWidth = 10 * world2;
		ctx.strokeStyle = CS_color;
		ctx.stroke();

		ctx.beginPath();
		ctx.arc(sc.w - (C_hpgage * 1.5) * world2, sc.h - (C_hpgage + fontsize * 1.5) * world2, (C_hpgage - 15) * world2, -90 * (Math.PI / 180), ((360 * C_sabhp / 5) - 90) * (Math.PI / 180), false);
		ctx.strokeStyle = C_sabhpgagecolor;
		ctx.stroke();

		ctx.beginPath();
		ctx.arc(sc.w - (C_hpgage * 1.5) * world2, sc.h - (C_hpgage + fontsize * 1.5) * world2, (C_hpgage - 25) * world2, -90 * (Math.PI / 180), (360 * (S_point > 100 ? 100 : S_point) / 100 - 90) * (Math.PI / 180), false);
		ctx.strokeStyle = 'rgba(196, 136, 71,1)';
		ctx.stroke();

		ctx.beginPath();
		ctx.arc(sc.w - (C_hpgage * 1.5) * world2, sc.h - (C_hpgage + fontsize * 1.5) * world2, (C_hpgage - 35) * world2, -90 * (Math.PI / 180), (360 * (S_point > 100 ? (S_point - 100) : 0) / 100 - 90) * (Math.PI / 180), false);
		ctx.stroke();
		ctx.lineWidth = 1 * world2;

		ctx.beginPath();
		ctx.arc(sc.w - (C_hpgage * 1.5) * world2, sc.h - (C_hpgage + fontsize * 1.5) * world2, (C_hpgage - 00) * world2, -90 * (Math.PI / 180), 270 * (Math.PI / 180), false);
		ctx.arc(sc.w - (C_hpgage * 1.5) * world2, sc.h - (C_hpgage + fontsize * 1.5) * world2, (C_hpgage - 50 * world2) * world2, -90 * (Math.PI / 180), 270 * (Math.PI / 180), false);
		ctx.arc(sc.w - (C_hpgage * 1.5) * world2, sc.h - (C_hpgage + fontsize * 1.5) * world2, (C_hpgage - 20) * world2, -90 * (Math.PI / 180), 270 * (Math.PI / 180), false);
		ctx.arc(sc.w - (C_hpgage * 1.5) * world2, sc.h - (C_hpgage + fontsize * 1.5) * world2, (C_hpgage - 30) * world2, -90 * (Math.PI / 180), 270 * (Math.PI / 180), false);
		ctx.arc(sc.w - (C_hpgage * 1.5) * world2, sc.h - (C_hpgage + fontsize * 1.5) * world2, (C_hpgage - 40) * world2, -90 * (Math.PI / 180), 270 * (Math.PI / 180), false);
		ctx.closePath();
		ctx.strokeStyle = 'rgba(255,255,255,1)';
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(sc.w - (C_hpgage * 1.5) * world2, sc.h - (C_hpgage + fontsize * 1.5) * world2);
		ctx.arc(sc.w - (C_hpgage * 1.5) * world2, sc.h - (C_hpgage + fontsize * 1.5) * world2, (C_hpgage - 40) * world2, -90 * (Math.PI / 180), ((360 * C_hp / 5) - 90) * (Math.PI / 180), false);
		ctx.moveTo(sc.w - (C_hpgage * 1.5) * world2, sc.h - (C_hpgage + fontsize * 1.5) * world2);
		ctx.closePath();
		ctx.fillStyle = C_color;
		ctx.fill();

	} else {
		ctx.beginPath();
		ctx.fillStyle = (C_hp >= 3 ? 'hsla(90,70%,50%,1)' : 'hsla(0,100%,' + (C_hp == 2 ? 50 : 30) + '%,1)');
		ctx.fillRect(sc.w - 50 * world2 - C_hpgage * world2 * 3.9 * (C_hp / 5), sc.h - (70 + 10) * world2, C_hpgage * world2 * 3.9 * (C_hp / 5), 30 * world2);
		ctx.fillStyle = 'hsla(32,100%,50%,1)';
		ctx.fillRect(sc.w - 50 * world2 - C_hpgage * world2 * 3.6 * (S_point > 100 ? 100 : S_point) / 100, sc.h - (70 + 50) * world2, C_hpgage * world2 * 3.6 * (S_point > 100 ? 100 : S_point) / 100, 30 * world2);
		ctx.fillRect(sc.w - 50 * world2 - C_hpgage * world2 * 3.3 * (S_point > 100 ? (S_point - 100) : 0) / 100, sc.h - (70 + 90) * world2, C_hpgage * world2 * 3.3 * (S_point > 100 ? (S_point - 100) : 0) / 100, 30 * world2);
		ctx.fillStyle = 'hsla(192,100%,50%,1)';
		ctx.fillRect(sc.w - 50 * world2 - C_hpgage * world2 * 3.0 * (C_sabhp / 5), sc.h - (70 + 130) * world2, C_hpgage * world2 * 3.0 * (C_sabhp / 5), 30 * world2);

		ctx.strokeStyle = 'rgba(255,255,255,1)';
		ctx.strokeRect(sc.w - C_hpgage * world2 * 3.9 - 50 * world2, sc.h - (70 + 10) * world2, C_hpgage * world2 * 3.9, 30 * world2)
		ctx.strokeRect(sc.w - C_hpgage * world2 * 3.6 - 50 * world2, sc.h - (70 + 50) * world2, C_hpgage * world2 * 3.6, 30 * world2)
		ctx.strokeRect(sc.w - C_hpgage * world2 * 3.3 - 50 * world2, sc.h - (70 + 90) * world2, C_hpgage * world2 * 3.3, 30 * world2)
		ctx.strokeRect(sc.w - C_hpgage * world2 * 3.0 - 50 * world2, sc.h - (70 + 130) * world2, C_hpgage * world2 * 3.0, 30 * world2)
		ctx.closePath();

		ctx.fillStyle = 'rgba(255,255,255,.5)';
		ctx.fillRect(sc.w - C_hpgage * world2 * 2.7 - 50 * world2, sc.h - (70 + 170) * world2, C_hpgage * world2 * 2.7, 30 * world2)
		ctx.fillRect(sc.w - 40 * world2, sc.h - (70 + 130) * world2, 30 * world2, 190 * world2)

		ctx.strokeStyle = 'rgba(0,0,0,1)';
		ctx.strokeRect(sc.w - C_hpgage * world2 * 2.7 - 50 * world2, sc.h - (70 + 170) * world2, C_hpgage * world2 * 2.7, 30 * world2)
		ctx.strokeRect(sc.w - 40 * world2, sc.h - (70 + 130) * world2, 30 * world2, 190 * world2)

		if (CC_pass) {
			ctx.fillStyle = 'hsla(' + (B_counter % 360 + 30) + ',50%,50%,.5)'
		} else {
			ctx.fillStyle = 'rgba(0,0,0,.5)';
		}
		ctx.fillRect(sc.w - 40 * world2, sc.h - (70 + 170) * world2, 30 * world2, 30 * world2)
		ctx.strokeStyle = 'rgba(255,255,255,1)';
		ctx.strokeRect(sc.w - 40 * world2, sc.h - (70 + 170) * world2, 30 * world2, 30 * world2)

		ctx.fillStyle = 'rgba(0,0,0,1)';
		ctx.strokeStyle = B_color;
		fontsize = 25;
		ctx.textAlign = "right";
		ctx.font = fontsize * world2 + "px 'Rounded Mplus 1c', 'Open Sans', 'Noto Sans Japanese', 'Yu Gothic', 'Meiryo UI', sans-serif";
		ctx.fillText(C_name, sc.w - 55 * world2, sc.h - (70 + 170 - 25) * world2);
		ctx.strokeText(C_name, sc.w - 55 * world2, sc.h - (70 + 170 - 25) * world2);
		if (!keyf1) {
			ctx.fillText("S", sc.w - 15 * world2, sc.h - (70 + 10 - 35 - 25) * world2)
		}
		ctx.fillText("HP", sc.w - 55 * world2, sc.h - (70 + 10 - 25) * world2)
		ctx.fillText("Skill 1", sc.w - 55 * world2, sc.h - (70 + 50 - 25) * world2)
		ctx.fillText("Skill 2", sc.w - 55 * world2, sc.h - (70 + 90 - 25) * world2)
		ctx.fillText("Life", sc.w - 55 * world2, sc.h - (70 + 130 - 25) * world2)
	}
	ctx.globalAlpha = 1;
}

function status(score, ctx /*New: 関数に、どのキャンバスへ描画するかを表すctxも渡すようにしました*/ ) {
	ctx.globalAlpha = (keyq ? 1 : .2);
	fontsize = 50;
	ctx.fillStyle = 'rgba(0,0,0,1)';
	ctx.beginPath();
	ctx.textAlign = "right";
	ctx.font = fontsize * world2 + "px 'Rounded Mplus 1c', 'Open Sans', 'Noto Sans Japanese', 'Yu Gothic', 'Meiryo UI', sans-serif";
	if (keyf1) {
		ctx.fillText("Score : " + score, sc.w - 10 * world2, sc.h - 10 * world2);
	} else {
		ctx.fillText(score.toLocaleString(), sc.w - 50 * world2, sc.h - 10 * world2);
	}
	ctx.closePath();
	ctx.globalAlpha = 1;
}

function mouseMove(event) {
	mouse.x = event.clientX - screenCanvas.offsetLeft;
	mouse.y = event.clientY - screenCanvas.offsetTop;
}
//---------------------------------------------------------------------------------------
function keyDown(event, i, S_bfar) {
	var ck = event.keyCode;
	if (L_main == 3) {
		log("main3", "C K = " + ck);
	}
  //console.log(ck);

  if (ck === 16) {
  	keyshift = true;
  };
  if (ck === 17) {
  	keyctrl = true;
  }
  if (ck === 32) {
  	keyspace = true;
  };
  if (ck === 27) {
  	keyesc = true;
  }
  if (ck === 13) {
  	keyenter = true;
  }

  if (ck === 37) {
  	if (operation == 1) {
  		left = true;
  	};
  };
  if (ck === 38) {
  	if (operation == 1) {
  		up = true;
  	};
  };
  if (ck === 39) {
  	if (operation == 1) {
  		right = true;
  	};
  };
  if (ck === 40) {
  	if (operation == 1) {
  		down = true;
  	};
  };
  if (ck === 29 && !event.repeat) {
  	not = !not
  }
  if (event.repeat == false && ck === 110 && CC_pass) {
  	keydot = !keydot
  	fire = !fire
  	fCC_23.TF = false;
  }

  if (ck === 18) {
  	keyalt = true;
  	CC_passc = 0;
  	setTimeout(function () {
  		CC_passc = undefined;
  	}, 1000);
  	CC_pass = false;
  };
  if (ck === 96) {
  	key0 = true;
  };
  if (ck === 97) {
  	key1 = true;
  };
  if (ck === 98) {
  	key2 = true;
  	if (fCC_23.TF) {
  		isLogEnable = false;
  		fCC_23.c = 1;
  	}
  };
  if (ck === 99) {
  	key3 = true;
  	if (fCC_23.TF) {
  		fCC_23.c = 2;
  	}
  };
  if (ck === 100) {
  	key4 = true;
  };
  if (ck === 101) {
  	key5 = true;
  };
  if (ck === 102) {
  	key6 = true;
  };
  if (ck === 103) {
  	key7 = true;
  };
  if (ck === 104) {
  	key8 = true;
  };
  if (ck === 105) {
  	key9 = true;
  };
  if (event.repeat == false) {
  	if (ck === (operation != 2 ? 81 : 80)) {
  		keyq = !keyq
  	};
  }
  if (ck === 87) {
  	if (operation == 2) {
  		up = true;
  	} else {
  		keyw = true;
  	};
  };
  if (ck === 83) {
  	if (operation == 2) {
  		down = true;
  	} else {
  		keys = true;
  	};
  };
  if (ck === 65) {
  	if (operation == 2) {
  		left = true;
  	} else {
  		keya = true;
  	};
  };
  if (ck === 68) {
  	if (operation == 2) {
  		right = true;
  	} else {
  		keyd = true;
  	};
  };
  if (ck === 79) {
  	if (operation == 3) {
  		up = true;
  	} else if (operation == 2) {
  		keyw = true;
  	};
  };
  if (ck === 75) {
  	if (operation == 3) {
  		left = true;
  	} else if (operation == 2) {
  		keya = true;
  	};
  };
  if (ck === 76) {
  	if (operation == 3) {
  		down = true;
  	} else if (operation == 2) {
  		keys = true;
  	};
  };
  if (ck === 59) {
  	if (operation == 3) {
  		right = true;
  	} else if (operation == 2) {
  		keyd = true;
  	};
  };

  if (ck === (operation != 2 ? 70 : 74)) {
  	keyf = true;
  };

  if (ck == 107) {
  	L_main = (L_main == 3 ? 1 : L_main + 1);
  };
  if (ck === 109) {
  	L_main = (L_main == 1 ? L_main = 3 : L_main -= 1);
  };
  if (!CC_pass) {
  	fCC_23.TF = false;
  	isLogEnable = false;
  };
  //Skillbuild---------------------------------------------
  /*if (event.repeat == false) {
  	if (ck === 70 && operation != 2 || ck == 74 && operation) {
  		if (C_sabhp > 0) {
  			for (k = 0; k < S_bmaxcount; k++) {
  				if (!S_build[k].alive) {
            let Vectors = [{
            	x: 0,
            	y: 0,
            	size: 80,
            	speed: 0
            }];
            let vectorCounter = 0;
            if (up || down || right || left) {
            	S_bfar = 50 * world;
            	S_build[k].set({
            		x: charactor.position.x + (right ? S_bfar : 0) + (left ? -S_bfar : 0),
            		y: charactor.position.y + (up ? -S_bfar : 0) + (down ? S_bfar : 0)
            	}, Vectors[vectorCounter], Vectors[vectorCounter].size || 5, Vectors[vectorCounter].speed || 3,
            	0 + (up ? 1 : 0) + (down ? 2 : 0) + (left ? 4 : 0) + (right ? 8 : 0));
            }
            vectorCounter++;
            // console.log(vectorCounter,bossShot[l]);
            //console.log(k, S_build[k].place, S_build[k].position.x, charactor.position.x);
            break;
        };
    }
}
}
}*/
  //cheat------------------------------------------------------------------------------------------
  if (!event.repeat && keyalt&&CC_key) {
  	if (CC_passc == 0) {
  		if (key0) {
  			CC_passc = 3;
  		};
  	};
  	if (CC_passc == 3) {
  		if (key3) {
  			CC_passc = 1;
  		};
  	};
  	if (CC_passc == 1) {
  		if (key1) {
  			CC_passc = 8;
  		};
  	};
  	if (CC_passc == 8) {
  		if (key8) {
  			CC_pass = true;
  		};
  	};
  	if (keyenter) {
  		CC_pass = true;
  	}
  };
  if (CC_pass) {
  	if (key1 && key2) {
  		if (!fCC_12) {
  			fCC_12 = true;
  			C_attack = 2000;
  		} else {
  			fCC_12 = false;
  			C_attack = 5;
  		};
  	};
  	if (key2 && key3) {
  		if (!keydot) {
  			if (!fCC_23.TF) {
  				fCC_23.TF = true;
  			} else {
  				fCC_23.TF = false;
  				isLogEnable = false;
  			};
  		}
  	};
  	if (key4 && key5) {
  		if (!fCC_45) {
  			fCC_45 = true;
  			C_defence = 100;
  		} else {
  			fCC_45 = false;
  			C_defence = 3;
  		};
  	};
  	if (key5 && key6) {
  		if (ck === 48) {
  			if (B_sabhp == 999) {
  				B_hp = 0;
  				hideKIDOU();
  			} else {
  				B_sabhp = 0;
  				B_hp = 0;
  				hideKIDOU();
  			}
  		} else if (ck === 49) {
  			B_sabhp = 1;
  			B_hp = B_maxhp;
  			hideKIDOU();
  		} else if (ck === 50) {
  			B_sabhp = 2;
  			B_hp = B_maxhp;
  			hideKIDOU();
  		} else if (ck === 51) {
  			B_sabhp = 3;
  			B_hp = B_maxhp;
  			hideKIDOU();
  		} else if (ck === 52) {
  			B_sabhp = 4;
  			B_hp = B_maxhp;
  			hideKIDOU();
  		} else if (ck === 57) {
  			B_sabhp = 999;
  			B_hp = B_maxhp;
  			hideKIDOU();
  		};
  		if (ck === 13) {
  			var AA = window.prompt("B_hp", "");
  			if (AA != (NaN || null || undefined || "")) {
  				B_hp = eval(AA);
  			};
  		};
  		if(ck===38){
  			if(B_hp<=B_maxhp/4*3){ 				
  				B_hp+=(B_maxhp/4*1);
  			}else{
  				B_hp=B_maxhp;
  			}
  		}
  		if(ck===40){
  			if(B_hp>=B_maxhp/4*1){
  				B_hp-=(B_maxhp/4*1);
  			}else{
  				B_hp=0;  				
  			}
  		}
  	};
  	if (key7 && key8) {
  		fCC_78 = !fCC_78
  	};
  	if (key8 && key9) {
      /*up = false;
      down = false;
      right = false;
      left = false;
      keya = false;
      keyw = false;
      keys = false;
      keyd = false;
      keyshift = false;
      keyf = false;*/
  };  
  if(ck===67&&CC_pass){
  	if(!S_0){
  		keyspace=true;
  		S_0=true;
  		C_stime=5;  		
  	}else{
  		keyspace=false;
  		S_0=false;
  		C_stime=15;
  	}
  }
};
}
//---------------------------------------------------------------------------------------
function keyUp(event) {
	var ck = event.keyCode;
	if (ck === 16) {
		keyshift = false;
	};
	if (ck === 17) {
		keyctrl = false;
	}
	if (ck === 32) {
		keyspace = false;
	};
	if (ck === 13) {
		keyenter = false;
	}
	if (ck === 27) {
		keyesc = false;
	}

	if (ck === 37) {
		if (operation == 1) {
			left = false;
		};
	};
	if (ck === 38) {
		if (operation == 1) {
			up = false;
		};
	};
	if (ck === 39) {
		if (operation == 1) {
			right = false;
		};
	};
	if (ck === 40) {
		if (operation == 1) {
			down = false;
		};
	};
	if (ck === 18) {
		keyalt = false;
		CC_passc = undefined;
	};
	if (ck === (operation != 2 ? 70 : 74)) {
		keyf = true;
	};
	if (ck === 96) {
		key0 = false;
	};
	if (ck === 97) {
		key1 = false;
	};
	if (ck === 98) {
		key2 = false;
	};
	if (ck === 99) {
		key3 = false;
	};
	if (ck === 100) {
		key4 = false;
	};
	if (ck === 101) {
		key5 = false;
	};
	if (ck === 102) {
		key6 = false;
	};
	if (ck === 103) {
		key7 = false;
	};
	if (ck === 104) {
		key8 = false;
	};
	if (ck === 105) {
		key9 = false;
	};

	if (ck === 87) {
		if (operation == 2) {
			up = false;
		} else {
			keyw = false;
		};
	};
	if (ck === 83) {
		if (operation == 2) {
			down = false;
		} else {
			keys = false;
		};
	};
	if (ck === 65) {
		if (operation == 2) {
			left = false;
		} else {
			keya = false;
		};
	};
	if (ck === 68) {
		if (operation == 2) {
			right = false;
		} else {
			keyd = false;
		};
	};
	if (ck === 79) {
		if (operation == 3) {
			up = false;
		} else if (operation == 2) {
			keyw = false;
		};
	};
	if (ck === 75) {
		if (operation == 3) {
			left = false;
		} else if (operation == 2) {
			keya = false;
		};
	};
	if (ck === 76) {
		if (operation == 3) {
			down = false;
		} else if (operation == 2) {
			keys = false;
		};
	};
	if (ck === 59) {
		if (operation == 3) {
			right = false;
		} else if (operation == 2) {
			keyd = false;
		};
	};
}

function ShowGameover(text) {
	document.getElementById("gameover-wrap").classList.remove("hide");
	document.getElementById("gameover-wrap").classList.add("shown");
	document.getElementById("gameover-text").innerText = text;
}

function ShowClear(text) {
	document.getElementById("Clear-wrap").classList.remove("hide");
	document.getElementById("Clear-wrap").classList.add("shown2");
	document.getElementById("Clear-text").innerText = text;
};