window.addEventListener('load', function () {
	document.addEventListener('keydown', KeyDown, true);
})

function memo() {
	Point  = {
		x: 1088.7803278688475,
		y: 195.08852459016424
	};
}

function KeyDown(event) {
	//配列-----------------------------------------------
	//.length; .pop(); .push(); .indexOf();.splice(i,1);		
	//var result = keys.some( function( value ) {return value === true;});
	//if(result){menuz.push(keys.indexOf(true));console.log(menuz);}
	var ck = event.keyCode;
	if (ck === 96) {
		menuz.push(0)
	};
	if (ck === 97) {
		menuz.push(1)
	};
	if (ck === 98) {
		menuz.push(2)
	};
	if (ck === 99) {
		menuz.push(3)
	};
	if (ck === 100) {
		menuz.push(4)
	};
	if (ck === 101) {
		menuz.push(5)
	};
	if (ck === 102) {
		menuz.push(6)
	};
	if (ck === 103) {
		menuz.push(7)
	};
	if (ck === 104) {
		menuz.push(8)
	};
	if (ck === 105) {
		menuz.push(9)
	};
	if (ck === 46) {
		menuz.pop()
	};
	if (ck === 36) {
		menuz = [];
	};
};

function menu() {
	var scs = screenCanvas;
	var back_color = 'rgba(0,0,0,.9)';
	var line_color = 'rgba(150,5,10,.8)';
	var mark_color = 'rgba(255,0,0,.8)';
	var string_color = 'rgba(255,255,255,1)';
	var font_size = 40 * world2;
	if (keydot) {
		//描写-----------------------------------------------
		menus.x = (menus.x > 5 ? menus.x : 5);
		menus.y = 6;
		ctx.fillStyle = back_color;
		ctx.fillRect(0, 0 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
		ctx.fillRect(0, 1 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
		ctx.fillRect(0, 2 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
		ctx.fillRect(0, 3 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
		ctx.fillRect(0, 4 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
		ctx.fillRect(0, 5 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
		ctx.strokeStyle = line_color;
		ctx.strokeRect(0, 0 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
		ctx.strokeRect(0, 1 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
		ctx.strokeRect(0, 2 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
		ctx.strokeRect(0, 3 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
		ctx.strokeRect(0, 4 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
		ctx.strokeRect(0, 5 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);

		ctx.fillStyle = string_color;
		ctx.strokeStyle = B_color;
		fontsize = font_size;
		ctx.textAlign = "left";
		ctx.font = fontsize + "px 'Rounded Mplus 1c', 'Open Sans', 'Noto Sans Japanese', 'Yu Gothic', 'Meiryo UI', sans-serif";
		ctx.fillText(C_name + " / Lv." + (C_name == "Seizya" ? "Max" : C_level), 10 * world2, fontsize, scs.width / menus.x - 20 * world2);
		ctx.strokeText(C_name + " / Lv." + (C_name == "Seizya" ? "Max" : C_level), 10 * world2, fontsize, scs.width / menus.x - 20 * world2);
		ctx.fillText("0 : Command", 10 * world2, 1 * scs.height / menus.y + (scs.height / menus.y + fontsize) / 2, scs.width / menus.x - 30 * world2);
		ctx.fillText("1 : Buff", 10 * world2, 2 * scs.height / menus.y + (scs.height / menus.y + fontsize) / 2, scs.width / menus.x - 30 * world2);
		ctx.fillText("2 : Debuff", 10 * world2, 3 * scs.height / menus.y + (scs.height / menus.y + fontsize) / 2, scs.width / menus.x - 30 * world2);
		ctx.fillText("3 : Game controll", 10 * world2, 4 * scs.height / menus.y + (scs.height / menus.y + fontsize) / 2, scs.width / menus.x - 30 * world2);
		ctx.fillText("4 : System", 10 * world2, 5 * scs.height / menus.y + (scs.height / menus.y + fontsize) / 2, scs.width / menus.x - 30 * world2);

		ctx.font = fontsize / 2 + "px 'Rounded Mplus 1c', 'Open Sans', 'Noto Sans Japanese', 'Yu Gothic', 'Meiryo UI', sans-serif";
		ctx.fillText("HPm : " + C_hp + " / " + "Life : " + C_sabhp, 10 * world2, scs.height / menus.y - fontsize / 2 - 10 * world2, scs.width / menus.x - 20 * world2);
		ctx.fillText("Skp : " + S_point + " / " + "Score : " + score, 10 * world2, scs.height / menus.y - 10 * world2, scs.width / menus.x - 20 * world2);

		//menu s-------------------------------------------
		if (menuz[0] == 0) {
			menus.y = 6;
			ctx.fillStyle = mark_color;
			ctx.fillRect(scs.width / menus.x - 10 * world2, 1 * scs.height / menus.y, 10 * world2, scs.height / menus.y);
			ctx.strokeStyle == back_color;
			ctx.strokeRect(scs.width / menus.x - 10 * world2, 1 * scs.height / menus.y, 10 * world2, scs.height / menus.y);

			var AA, BB;
			AA = window.prompt("Tittle : Console\nCancel == 無効", "");
			if (AA != undefined) {
				eval(AA);
				menuz = [];
				AA = undefined;
				not_menu();
			} else {
				menuz.pop();
			};
		} else if (menuz[0] == 1) {
			if (window.confirm('Nothing Here')) {
				menuz.pop();
			} else {
				menuz.pop();
			};
		} else if (menuz[0] == 2) {
			if (window.confirm('Nothing Here')) {
				menuz.pop();
			} else {
				menuz.pop();
			};
		} else if (menuz[0] == 3) {
			menus.y = 6;
			ctx.fillStyle = mark_color;
			ctx.fillRect(scs.width / menus.x - 10 * world2, 4 * scs.height / menus.y, 10 * world2, scs.height / menus.y);
			ctx.strokeStyle == back_color;
			ctx.strokeRect(scs.width / menus.x - 10 * world2, 4 * scs.height / menus.y, 10 * world2, scs.height / menus.y);

			menus.x = (menus.x > 5 ? menus.x : 5);
			menus.y = 6;
			ctx.fillStyle = back_color;
			ctx.fillRect(scs.width / menus.x, 0 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
			ctx.fillRect(scs.width / menus.x, 1 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
			ctx.fillRect(scs.width / menus.x, 2 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
			ctx.fillRect(scs.width / menus.x, 3 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
			ctx.fillRect(scs.width / menus.x, 4 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
			ctx.fillRect(scs.width / menus.x, 5 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
			ctx.strokeStyle = line_color;
			ctx.strokeRect(scs.width / menus.x, 0 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
			ctx.strokeRect(scs.width / menus.x, 1 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
			ctx.strokeRect(scs.width / menus.x, 2 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
			ctx.strokeRect(scs.width / menus.x, 3 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
			ctx.strokeRect(scs.width / menus.x, 4 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
			ctx.strokeRect(scs.width / menus.x, 5 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);

			ctx.fillStyle = string_color;
			ctx.strokeStyle = B_color;
			fontsize = font_size;
			ctx.textAlign = "left";
			ctx.font = fontsize + "px 'Rounded Mplus 1c', 'Open Sans', 'Noto Sans Japanese', 'Yu Gothic', 'Meiryo UI', sans-serif";
			ctx.fillText("0 : Charactor", 1 * scs.width / menus.x + 10 * world2, 0 * scs.height / menus.y + (scs.height / menus.y + fontsize) / 2, scs.width / menus.x - 30 * world2);
			ctx.fillText("1 : C_Sab", 1 * scs.width / menus.x + 10 * world2, 1 * scs.height / menus.y + (scs.height / menus.y + fontsize) / 2, scs.width / menus.x - 30 * world2);
			ctx.fillText("2 : C_Shot", 1 * scs.width / menus.x + 10 * world2, 2 * scs.height / menus.y + (scs.height / menus.y + fontsize) / 2, scs.width / menus.x - 30 * world2);
			ctx.fillText("3 : Boss", 1 * scs.width / menus.x + 10 * world2, 3 * scs.height / menus.y + (scs.height / menus.y + fontsize) / 2, scs.width / menus.x - 30 * world2);
			ctx.fillText("4 : B_Sab", 1 * scs.width / menus.x + 10 * world2, 4 * scs.height / menus.y + (scs.height / menus.y + fontsize) / 2, scs.width / menus.x - 30 * world2);
			ctx.fillText("5 : B_Shot", 1 * scs.width / menus.x + 10 * world2, 5 * scs.height / menus.y + (scs.height / menus.y + fontsize) / 2, scs.width / menus.x - 30 * world2);

			if (menuz[1] == 0) {
				menus.y = 6;
				ctx.fillStyle = mark_color;
				ctx.fillRect(2 * scs.width / menus.x - 10 * world2, 0 * scs.height / menus.y, 10 * world2, scs.height / menus.y);
				ctx.strokeStyle = back_color;
				ctx.strokeRect(2 * scs.width / menus.x - 10 * world2, 0 * scs.height / menus.y, 10 * world2, scs.height / menus.y);

				menus.x = (menus.x > 5 ? menus.x : 5);
				menus.y = 7;
				ctx.fillStyle = back_color;
				ctx.fillRect(2 * scs.width / menus.x, 0 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
				ctx.fillRect(2 * scs.width / menus.x, 1 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
				ctx.fillRect(2 * scs.width / menus.x, 2 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
				ctx.fillRect(2 * scs.width / menus.x, 3 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
				ctx.fillRect(2 * scs.width / menus.x, 4 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
				ctx.fillRect(2 * scs.width / menus.x, 5 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
				ctx.fillRect(2 * scs.width / menus.x, 6 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
				ctx.strokeStyle = line_color;
				ctx.strokeRect(2 * scs.width / menus.x, 0 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
				ctx.strokeRect(2 * scs.width / menus.x, 1 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
				ctx.strokeRect(2 * scs.width / menus.x, 2 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
				ctx.strokeRect(2 * scs.width / menus.x, 3 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
				ctx.strokeRect(2 * scs.width / menus.x, 4 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
				ctx.strokeRect(2 * scs.width / menus.x, 5 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
				ctx.strokeRect(2 * scs.width / menus.x, 6 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);

				ctx.fillStyle = string_color;
				ctx.strokeStyle = B_color;
				fontsize = font_size;
				ctx.textAlign = "left";
				ctx.font = fontsize + "px 'Rounded Mplus 1c', 'Open Sans', 'Noto Sans Japanese', 'Yu Gothic', 'Meiryo UI', sans-serif";
				ctx.fillText("0 : HPm", 2 * scs.width / menus.x + 10 * world2, 0 * scs.height / menus.y + (scs.height / menus.y + fontsize) / 2, scs.width / menus.x - 30 * world2);
				ctx.fillText("1 : HPs", 2 * scs.width / menus.x + 10 * world2, 1 * scs.height / menus.y + (scs.height / menus.y + fontsize) / 2, scs.width / menus.x - 30 * world2);
				ctx.fillText("2 : Atk", 2 * scs.width / menus.x + 10 * world2, 2 * scs.height / menus.y + (scs.height / menus.y + fontsize) / 2, scs.width / menus.x - 30 * world2);
				ctx.fillText("3 : Def", 2 * scs.width / menus.x + 10 * world2, 3 * scs.height / menus.y + (scs.height / menus.y + fontsize) / 2, scs.width / menus.x - 30 * world2);
				ctx.fillText("4 : Agi", 2 * scs.width / menus.x + 10 * world2, 4 * scs.height / menus.y + (scs.height / menus.y + fontsize) / 2, scs.width / menus.x - 30 * world2);
				ctx.fillText("5 : Skp", 2 * scs.width / menus.x + 10 * world2, 5 * scs.height / menus.y + (scs.height / menus.y + fontsize) / 2, scs.width / menus.x - 30 * world2);
				ctx.fillText("6 : Name", 2 * scs.width / menus.x + 10 * world2, 6 * scs.height / menus.y + (scs.height / menus.y + fontsize) / 2, scs.width / menus.x - 30 * world2);

				if (menuz[2] == 0) {
					AA = window.prompt("C_hp", "");
					if (AA != undefined) {
						C_hp = AA;
						not_menu();
					} else {
						menuz.pop();
					}
				} else if (menuz[2] == 1) {
					AA = window.prompt("C_sabhp", "");
					if (AA != undefined) {
						C_sabhp = AA;
						not_menu();
					} else {
						menuz.pop();
					}
				} else if (menuz[2] == 2) {
					AA = window.prompt("C_attack", "");
					if (AA != undefined) {
						C_attack = AA;
						not_menu();
					} else {
						menuz.pop();
					}
				} else if (menuz[2] == 3) {
					AA = window.prompt("C_defence", "");
					if (AA != undefined) {
						C_defence = AA;
						not_menu();
					} else {
						menuz.pop();
					}
				} else if (menuz[2] == 4) {
					AA = window.prompt("C_speed", "");
					if (AA != undefined) {
						C_accelate = AA;
						not_menu();
					} else {
						menuz.pop();
					}
				} else if (menuz[2] == 5) {
					AA = window.prompt("S_point", "");
					if (AA != undefined) {
						S_point = AA;
						not_menu();
					} else {
						menuz.pop();
					}
				} else if (menuz[2] == 6) {
					AA = window.prompt("C_name", "");
					if (AA != undefined) {
						C_name = AA;
						not_menu();
					} else {
						menuz.pop();
					}
				} else if (menuz[2] > 6) {
					menuz.pop();
				}
			} else if (menuz[1] == 1) {
				menus.y = 6;
				ctx.fillStyle = mark_color;
				ctx.fillRect(2 * scs.width / menus.x - 10 * world2, 1 * scs.height / menus.y, 10 * world2, scs.height / menus.y);
				ctx.strokeStyle = back_color;
				ctx.strokeRect(2 * scs.width / menus.x - 10 * world2, 1 * scs.height / menus.y, 10 * world2, scs.height / menus.y);

				menus.x = (menus.x > 5 ? menus.x : 5);
				menus.y = 1;
				ctx.fillStyle = back_color;
				ctx.fillRect(2 * scs.width / menus.x, 0 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
				ctx.strokeStyle = line_color;
				ctx.strokeRect(2 * scs.width / menus.x, 0 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);

				ctx.fillStyle = string_color;
				ctx.strokeStyle = B_color;
				fontsize = font_size;
				ctx.textAlign = "left";
				ctx.font = fontsize + "px 'Rounded Mplus 1c', 'Open Sans', 'Noto Sans Japanese', 'Yu Gothic', 'Meiryo UI', sans-serif";
				ctx.fillText("0 : Color", 2 * scs.width / menus.x + 10 * world2, 0 * scs.height / menus.y + (scs.height / menus.y + fontsize) / 2, scs.width / menus.x - 30 * world2);

				if (menuz[2] == 0) {
					AA = window.prompt("Color", "");
					if (AA != undefined) {
						CS_color = AA;
						not_menu();
					} else {
						menuz.pop();
					}
				} else if (menuz[2] > 0) {
					menuz.pop();
				}
			} else if (menuz[1] == 2) {
				menus.y = 6;
				ctx.fillStyle = mark_color;
				ctx.fillRect(2 * scs.width / menus.x - 10 * world2, 2 * scs.height / menus.y, 10 * world2, scs.height / menus.y);
				ctx.strokeStyle = back_color;
				ctx.strokeRect(2 * scs.width / menus.x - 10 * world2, 2 * scs.height / menus.y, 10 * world2, scs.height / menus.y);

				menus.x = (menus.x > 5 ? menus.x : 5);
				menus.y = 3;
				ctx.fillStyle = back_color;
				ctx.fillRect(2 * scs.width / menus.x, 0 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
				ctx.fillRect(2 * scs.width / menus.x, 1 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
				ctx.fillRect(2 * scs.width / menus.x, 2 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
				ctx.strokeStyle = line_color;
				ctx.strokeRect(2 * scs.width / menus.x, 0 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
				ctx.strokeRect(2 * scs.width / menus.x, 1 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
				ctx.strokeRect(2 * scs.width / menus.x, 2 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);

				ctx.fillStyle = string_color;
				ctx.strokeStyle = B_color;
				fontsize = font_size;
				ctx.textAlign = "left";
				ctx.font = fontsize + "px 'Rounded Mplus 1c', 'Open Sans', 'Noto Sans Japanese', 'Yu Gothic', 'Meiryo UI', sans-serif";
				ctx.fillText("0 : Color 1", 2 * scs.width / menus.x + 10 * world2, 0 * scs.height / menus.y + (scs.height / menus.y + fontsize) / 2, scs.width / menus.x - 30 * world2);
				ctx.fillText("1 : Color 2", 2 * scs.width / menus.x + 10 * world2, 1 * scs.height / menus.y + (scs.height / menus.y + fontsize) / 2, scs.width / menus.x - 30 * world2);
				ctx.fillText("2 : Time", 2 * scs.width / menus.x + 10 * world2, 2 * scs.height / menus.y + (scs.height / menus.y + fontsize) / 2, scs.width / menus.x - 30 * world2);

				if (menuz[2] == 0) {
					AA = window.prompt("C_scolor", "");
					if (AA != undefined) {
						C_scolor;
						not_menu();
					} else {
						menuz.pop();
					}
				} else if (menuz[2] == 1) {
					AA = window.prompt("C_s2color", "");
					if (AA != undefined) {
						C_s2color = AA;
						not_menu();
					} else {
						menuz.pop();
					}
				} else if (menuz[2] == 2) {
					AA = window.prompt("C_stime", "");
					if (AA != undefined) {
						C_stime = AA;
						not_menu();
					} else {
						menuz.pop();
					}
				} else if (menuz[2] > 2) {
					menuz.pop();
				}
			} else if (menuz[1] == 3) {
				menus.y = 6;
				ctx.fillStyle = mark_color;
				ctx.fillRect(2 * scs.width / menus.x - 10 * world2, 3 * scs.height / menus.y, 10 * world2, scs.height / menus.y);
				ctx.strokeStyle = back_color;
				ctx.strokeRect(2 * scs.width / menus.x - 10 * world2, 3 * scs.height / menus.y, 10 * world2, scs.height / menus.y);

				menus.x = (menus.x > 5 ? menus.x : 5);
				menus.y = 5;
				ctx.fillStyle = back_color;
				ctx.fillRect(2 * scs.width / menus.x, 0 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
				ctx.fillRect(2 * scs.width / menus.x, 1 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
				ctx.fillRect(2 * scs.width / menus.x, 2 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
				ctx.fillRect(2 * scs.width / menus.x, 3 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
				ctx.fillRect(2 * scs.width / menus.x, 4 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
				ctx.strokeStyle = line_color;
				ctx.strokeRect(2 * scs.width / menus.x, 0 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
				ctx.strokeRect(2 * scs.width / menus.x, 1 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
				ctx.strokeRect(2 * scs.width / menus.x, 2 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
				ctx.strokeRect(2 * scs.width / menus.x, 3 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
				ctx.strokeRect(2 * scs.width / menus.x, 5 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);

				ctx.fillStyle = string_color;
				ctx.strokeStyle = B_color;
				fontsize = font_size;
				ctx.textAlign = "left";
				ctx.font = fontsize + "px 'Rounded Mplus 1c', 'Open Sans', 'Noto Sans Japanese', 'Yu Gothic', 'Meiryo UI', sans-serif";
				ctx.fillText("0 : HPm", 2 * scs.width / menus.x + 10 * world2, 0 * scs.height / menus.y + (scs.height / menus.y + fontsize) / 2, scs.width / menus.x - 30 * world2);
				ctx.fillText("1 : HPs", 2 * scs.width / menus.x + 10 * world2, 1 * scs.height / menus.y + (scs.height / menus.y + fontsize) / 2, scs.width / menus.x - 30 * world2);
				ctx.fillText("2 : Atk", 2 * scs.width / menus.x + 10 * world2, 2 * scs.height / menus.y + (scs.height / menus.y + fontsize) / 2, scs.width / menus.x - 30 * world2);
				ctx.fillText("3 : Def", 2 * scs.width / menus.x + 10 * world2, 3 * scs.height / menus.y + (scs.height / menus.y + fontsize) / 2, scs.width / menus.x - 30 * world2);
				ctx.fillText("4 : Sty", 2 * scs.width / menus.x + 10 * world2, 4 * scs.height / menus.y + (scs.height / menus.y + fontsize) / 2, scs.width / menus.x - 30 * world2);
				
				if (menuz[2] == 0) {
					AA = window.prompt("B_hp", "");
					if (AA != undefined) {
						B_hp = AA;
						not_menu();
					} else {
						menuz.pop();
					}
				} else if (menuz[2] == 1) {
					AA = window.prompt("B_sabhp", "");
					if (AA != undefined) {
						B_sabhp = AA;
						not_menu();
					} else {
						menuz.pop();
					}
				} else if (menuz[2] == 2) {
					AA = window.prompt("B_attack", "");
					if (AA != undefined) {
						B_attack = AA;
						not_menu();
					} else {
						menuz.pop();
					}
				} else if (menuz[2] == 3) {
					AA = window.prompt("B_defence", "");
					if (AA != undefined) {
						B_defence = AA;
						not_menu();
					} else {
						menuz.pop();
					}
				} else if (menuz[2] == 4) {
					if (window.confirm('B_style を変更します')) {
						B_style=!B_style
						not_menu();
					} else {
						menuz.pop();
					};
				}else if (menuz[2] > 4) {
					menuz.pop();
				}

			} else if (menuz[1] == 4) {
				if (window.confirm('Nothing Here')) {
					menuz.pop();
				} else {
					menuz.pop();
				};
			} else if (menuz[1] == 5) {
				if (window.confirm('Nothing Here')) {
					menuz.pop();
				} else {
					menuz.pop();
				};
			} else if (menuz[1] > 5) {
				menuz.pop();
			}
		} else if (menuz[0] == 4) {
			menus.y = 6;
			ctx.fillStyle = mark_color;
			ctx.fillRect(scs.width / menus.x - 10 * world2, 5 * scs.height / menus.y, 10 * world2, scs.height / menus.y);
			ctx.strokeStyle == back_color;
			ctx.strokeRect(scs.width / menus.x - 10 * world2, 5 * scs.height / menus.y, 10 * world2, scs.height / menus.y);

			menus.x = (menus.x > 5 ? menus.x : 5);
			menus.y = 7;
			ctx.fillStyle = back_color;
			ctx.fillRect(scs.width / menus.x, 0 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
			ctx.fillRect(scs.width / menus.x, 1 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
			ctx.fillRect(scs.width / menus.x, 2 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
			ctx.fillRect(scs.width / menus.x, 3 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
			ctx.fillRect(scs.width / menus.x, 4 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
			ctx.fillRect(scs.width / menus.x, 5 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
			ctx.fillRect(scs.width / menus.x, 6 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
			ctx.strokeStyle = line_color;
			ctx.strokeRect(scs.width / menus.x, 0 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
			ctx.strokeRect(scs.width / menus.x, 1 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
			ctx.strokeRect(scs.width / menus.x, 2 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
			ctx.strokeRect(scs.width / menus.x, 3 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
			ctx.strokeRect(scs.width / menus.x, 4 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
			ctx.strokeRect(scs.width / menus.x, 5 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
			ctx.strokeRect(scs.width / menus.x, 6 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);

			ctx.fillStyle = string_color;
			ctx.strokeStyle = B_color;
			fontsize = font_size;
			ctx.textAlign = "left";
			ctx.font = fontsize + "px 'Rounded Mplus 1c', 'Open Sans', 'Noto Sans Japanese', 'Yu Gothic', 'Meiryo UI', sans-serif";
			ctx.fillText("0 : HPゲージ"　, 1 * scs.width / menus.x + 10 * world2, 0 * scs.height / menus.y + (scs.height / menus.y + fontsize) / 2, scs.width / menus.x - 30 * world2);
			ctx.fillText("1 : Screen Size", 1 * scs.width / menus.x + 10 * world2, 1 * scs.height / menus.y + (scs.height / menus.y + fontsize) / 2, scs.width / menus.x - 30 * world2);
			ctx.fillText("2 : Auto Shots", 1 * scs.width / menus.x + 10 * world2, 2 * scs.height / menus.y + (scs.height / menus.y + fontsize) / 2, scs.width / menus.x - 30 * world2);
			ctx.fillText("3 : Operation", 1 * scs.width / menus.x + 10 * world2, 3 * scs.height / menus.y + (scs.height / menus.y + fontsize) / 2, scs.width / menus.x - 30 * world2);
			ctx.fillText("4 : Shot_view", 1 * scs.width / menus.x + 10 * world2, 4 * scs.height / menus.y + (scs.height / menus.y + fontsize) / 2, scs.width / menus.x - 30 * world2);
			ctx.fillText("5 : Invincible", 1 * scs.width / menus.x + 10 * world2, 5 * scs.height / menus.y + (scs.height / menus.y + fontsize) / 2, scs.width / menus.x - 30 * world2);
			ctx.fillText("6 : Console", 1 * scs.width / menus.x + 10 * world2, 6 * scs.height / menus.y + (scs.height / menus.y + fontsize) / 2, scs.width / menus.x - 30 * world2);

			if (menuz[1] == 0) {
				if (window.confirm('HPゲージ を変更します')) {
					keyf1 = !keyf1;
					not_menu();
				} else {
					menuz.pop();
				};
			} else if (menuz[1] == 1) {
				if (window.confirm('Screen Size を変更します')) {
					sc_size = !sc_size;
					not_menu();
				} else {
					menuz.pop();
				};
			} else if (menuz[1] == 2) {
				if (window.confirm('Auto Shot を有効にします')) {
					not = !not;
					not_menu();
				} else {
					menuz.pop();
				};
			} else if (menuz[1] == 3) {
				menus.y = 4;
				ctx.fillStyle = mark_color;
				ctx.fillRect(2 * scs.width / menus.x - 10 * world2, 3 * scs.height / menus.y, 10 * world2, scs.height / menus.y);
				ctx.strokeStyle = back_color;
				ctx.strokeRect(2 * scs.width / menus.x - 10 * world2, 3 * scs.height / menus.y, 10 * world2, scs.height / menus.y);

				menus.x = (menus.x > 5 ? menus.x : 5);
				menus.y = 3;
				ctx.fillStyle = back_color;
				ctx.fillRect(2 * scs.width / menus.x, 0 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
				ctx.fillRect(2 * scs.width / menus.x, 1 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
				ctx.fillRect(2 * scs.width / menus.x, 2 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
				ctx.strokeStyle = line_color;
				ctx.strokeRect(2 * scs.width / menus.x, 0 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
				ctx.strokeRect(2 * scs.width / menus.x, 1 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);
				ctx.strokeRect(2 * scs.width / menus.x, 2 * scs.height / menus.y, scs.width / menus.x - 10 * world2, scs.height / menus.y);

				ctx.fillStyle = string_color;
				ctx.strokeStyle = B_color;
				fontsize = font_size;
				ctx.textAlign = "left";
				ctx.font = fontsize + "px 'Rounded Mplus 1c', 'Open Sans', 'Noto Sans Japanese', 'Yu Gothic', 'Meiryo UI', sans-serif";
				ctx.fillText("0 : No.1", 2 * scs.width / menus.x + 10 * world2, 0 * scs.height / menus.y + (scs.height / menus.y + fontsize) / 2, scs.width / menus.x - 30 * world2);
				ctx.fillText("1 : No.2", 2 * scs.width / menus.x + 10 * world2, 1 * scs.height / menus.y + (scs.height / menus.y + fontsize) / 2, scs.width / menus.x - 30 * world2);
				ctx.fillText("2 : No.3", 2 * scs.width / menus.x + 10 * world2, 2 * scs.height / menus.y + (scs.height / menus.y + fontsize) / 2, scs.width / menus.x - 30 * world2);

				if (menuz[2] == 0) {
					if (window.confirm('操作を No.1 に変更します')) {
						operation = 1;
						not_menu();
					} else {
						menuz.pop();
					};
				} else if (menuz[2] == 1) {
					if (window.confirm('操作を No.2 に変更します')) {
						operation = 2;
						not_menu();
					} else {
						menuz.pop();
					};
				} else if (menuz[2] == 2) {
					if (window.confirm('操作を No.3 に変更します')) {
						operation = 3;
						not_menu();
					} else {
						menuz.pop();
					};
				} else if (menuz[2] > 2) {
					menuz.pop();
				}
			} else if (menuz[1] == 4) {
				if (window.confirm('Shot_view を変更します')) {
					if(shouldshowKIDOU){hideKIDOU();}else{showKIDOU();};
					not_menu();
				} else {
					menuz.pop();
				};
			} else if (menuz[1] == 5) {
				if (window.confirm('Invincible を変更します')) {
					invincible=!invincible;
					not_menu();
				} else {
					menuz.pop();
				};
			}else if (menuz[1] == 6) {
				if (window.confirm('Console を実行します')) {
					window.alert("Nothing Here");
					not_menu();
				} else {
					menuz.pop();
				};
			}else if (menuz[1] > 6) {
				menuz.pop();
			}
		} else if (menuz[0] > 4) {
			menuz.pop();
		};
	} else {
		menuz = [];
	}
};

function not_menu() {
	keydot = false;
	fire = true;
	menuz = [];
};