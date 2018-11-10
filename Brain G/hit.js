function hit(){
	if(!invisible){
 	//Charactor--------------------------------------------------------------------
 	if(B_sabhp>0){
 		for (e = 0; e < B_shot0.length; e++){
 			if(B_shot0[e].alive){
 				if(Math.abs(charactor.position.x-B_shot0[e].position.x)<=charactor.size+B_shot0[e].size){
 					if(Math.abs(charactor.position.y-B_shot0[e].position.y)<=charactor.size+B_shot0[e].size){
 						if(C_defence<B_attack){
 							C_hp+=C_defence-B_attack
 							hits();
 							score-=10;
 						}
 					}
 				}else if(Math.abs(charactor.position.x-B_shot0[e].position.x)<=C_outsize+B_shot0[e].size){
 					if(Math.abs(charactor.position.y-B_shot0[e].position.y)<=C_outsize+B_shot0[e].size){
 						score+=scorep;
 						
 					}
 				}
 			}
 		}
 		for (f = 0; f < B_shot1.length; f++){
 			if(B_shot1[f].alive){ 			
 				if(Math.abs(charactor.position.x-B_shot1[f].position.x)<=charactor.size+B_shot1[f].size){
 					if(Math.abs(charactor.position.y-B_shot1[f].position.y)<=charactor.size+B_shot1[f].size){
 						if(C_defence<B_attack){
 							C_hp+=C_defence-B_attack
 							hits();
 							score-=10;
 						}
 					}
 				}else if(Math.abs(charactor.position.x-B_shot1[f].position.x)<=C_outsize+B_shot1[f].size){
 					if(Math.abs(charactor.position.y-B_shot1[f].position.y)<=C_outsize+B_shot1[f].size){
 						score+=scorep;
 						
 					}
 				}
 			}
 		}
 		for (l = 0; l < B_shot2.length; l++){
 			if(B_shot2[l].alive){
 				if(Math.abs(charactor.position.x-B_shot2[l].position.x)<=charactor.size+B_shot2[l].size){
 					if(Math.abs(charactor.position.y-B_shot2[l].position.y)<=charactor.size+B_shot2[l].size){
 						if(C_defence<B_attack){
 							C_hp+=C_defence-B_attack
 							hits();
 							score-=10;
 						}
 					}
 				}else if(Math.abs(charactor.position.x-B_shot2[l].position.x)<=C_outsize+B_shot2[l].size){
 					if(Math.abs(charactor.position.y-B_shot2[l].position.y)<=C_outsize+B_shot2[l].size){
 						score+=scorep;
 						
 					}
 				}
 			}
 		}
 		for (m = 0; m < B_shot3.length; m++){
 			if(B_shot3[m].alive){
 				if(Math.abs(charactor.position.x-B_shot3[m].position.x)<=charactor.size+B_shot3[m].size){
 					if(Math.abs(charactor.position.y-B_shot3[m].position.y)<=charactor.size+B_shot3[m].size){
 						if(C_defence<B_attack){
 							C_hp+=C_defence-B_attack
 							hits();
 							score-=10;
 						}
 					}
 				}else if(Math.abs(charactor.position.x-B_shot3[m].position.x)<=C_outsize+B_shot3[m].size){
 					if(Math.abs(charactor.position.y-B_shot3[m].position.y)<=C_outsize+B_shot3[m].size){
 						score+=scorep;

 					}
 				}
 			}
 		}
 		for (n = 0; n < B_shot4.length; n++){
 			if(B_shot4[n].alive){
 				if(Math.abs(charactor.position.x-B_shot4[n].position.x)<=charactor.size+B_shot4[n].size){
 					if(Math.abs(charactor.position.y-B_shot4[n].position.y)<=charactor.size+B_shot4[n].size){
 						if(C_defence<B_attack){
 							C_hp+=C_defence-B_attack
 							hits();
 							score-=10;
 						}
 					}
 				}else if(Math.abs(charactor.position.x-B_shot4[n].position.x)<=C_outsize+B_shot4[n].size){
 					if(Math.abs(charactor.position.y-B_shot4[n].position.y)<=C_outsize+B_shot4[n].size){
 						score+=scorep;
 						
 					}
 				}
 			}
 		}
 		for (o = 0; o < B_shot5.length; o++){
 			if(B_shot5[o].alive){
 				if(Math.abs(charactor.position.x-B_shot5[o].position.x)<=charactor.size+B_shot5[o].size){
 					if(Math.abs(charactor.position.y-B_shot5[o].position.y)<=charactor.size+B_shot5[o].size){
 						if(C_defence<B_attack){
 							C_hp+=C_defence-B_attack
 							hits();
 							score-=10;
 						}
 					}
 				}else if(Math.abs(charactor.position.x-B_shot5[o].position.x)<=C_outsize+B_shot5[o].size){
 					if(Math.abs(charactor.position.y-B_shot5[o].position.y)<=C_outsize+B_shot5[o].size){
 						score+=scorep;
 						
 					}
 				}
 			}
 		}
 		for (r = 0; r < B_shot6.length; r++){
 			if(B_shot6[r].alive){
 				if(Math.abs(charactor.position.x-B_shot6[r].position.x)<=charactor.size+B_shot6[r].size){
 					if(Math.abs(charactor.position.y-B_shot6[r].position.y)<=charactor.size+B_shot6[r].size){
 						if(C_defence<B_attack){
 							C_hp+=C_defence-B_attack
 							hits();
 							score-=100;
 						}
 					}
 				}else if(Math.abs(charactor.position.x-B_shot6[r].position.x)<=C_outsize+B_shot6[r].size){
 					if(Math.abs(charactor.position.y-B_shot6[r].position.y)<=C_outsize+B_shot6[r].size){
 						score+=scorep;
 						
 					}
 				}
 			}
 		}
//B_shotp------------------------------------------------------------
if(Math.abs(charactor.position.x-B_shotp1.x)<=charactor.size+B_shotp1.size){
	if(Math.abs(charactor.position.y-B_shotp1.y)<=charactor.size+B_shotp1.size){
		if(C_defence<B_attack){
			C_hp+=C_defence-B_attack
			hits();
			score-=10;
		}
	}
}
if(Math.abs(charactor.position.x-B_shotp2.x)<=charactor.size+B_shotp2.size){
	if(Math.abs(charactor.position.y-B_shotp2.y)<=charactor.size+B_shotp2.size){
		if(C_defence<B_attack){
			C_hp+=C_defence-B_attack
			hits();
			score-=10;
		}
	}
}
if(Math.abs(charactor.position.x-B_shotp3.x)<=charactor.size+B_shotp3.size){
	if(Math.abs(charactor.position.y-B_shotp3.y)<=charactor.size+B_shotp3.size){
		if(C_defence<B_attack){
			C_hp+=C_defence-B_attack
			hits();
			score-=10;
		}
	}
}
if(Math.abs(charactor.position.x-B_shotp4.x)<=charactor.size+B_shotp4.size){
	if(Math.abs(charactor.position.y-B_shotp4.y)<=charactor.size+B_shotp4.size){
		if(C_defence<B_attack){
			C_hp+=C_defence-B_attack
			hits();
			score-=10;
		}
	}
}
 		//Boss------------------------------------------------------------- 		
 		if(Math.abs(charactor.position.x-boss.position.x)<=charactor.size+boss.size){
 			if(Math.abs(charactor.position.y-boss.position.y)<=charactor.size+boss.size){
 				if(C_defence<B_attack){
 					C_hp+=C_defence-B_attack
 					hits();
 					score-=10;
 				}
 			}
 		}
 		//B_swall--------------------------------------------------------------------
 		if(Math.abs(charactor.position.x-B_swall.x)<=B_swall.size){
 			if(C_defence<B_attack){
 				C_hp+=C_defence-B_attack
 				hits();
 			}
 		}
 		if(Math.abs(charactor.position.x-sc.w-B_swall.x)<=B_swall.size){
 			if(C_defence<B_attack){
 				C_hp+=C_defence-B_attack
 				hits();
 			}
 		}
 		if(Math.abs(charactor.position.y-B_swall.y)<=B_swall.size){
 			if(C_defence<B_attack){
 				C_hp+=C_defence-B_attack
 				hits();
 			}
 		}
 		if(Math.abs(charactor.position.y-sc.h-B_swall.y)<=B_swall.size){
 			if(C_defence<B_attack){
 				C_hp+=C_defence-B_attack
 				hits();
 			}
 		}
 	}
//Boss---------------------------------------------------------------------
if(!B_invisible){
	if(boss.alive){
		for (c = 0; c < C_shot0.length; c++){
			if(C_shot0[c].alive){
				if(Math.abs(boss.position.x-C_shot0[c].position.x)<=boss.size+C_shot0[c].size){
					if(Math.abs(boss.position.y-C_shot0[c].position.y)<=boss.size+B_shot0[c].size){
						if(B_defence<C_attack){
							B_hp+=B_defence-C_attack
							score+=scorep;
						}
						C_shot0[c].alive=false;
					}
				}
			}
		}
		for ( g = 0; g < C_shot1.length; g++){
			if(C_shot1[g].alive){
				if(Math.abs(boss.position.x-C_shot1[g].position.x)<=boss.size+C_shot1[g].size){
					if(Math.abs(boss.position.y-C_shot1[g].position.y)<=boss.size+B_shot1[g].size){
						if(B_defence<C_attack){
							B_hp+=B_defence-C_attack
							score+=scorep;
						}
						C_shot1[g].alive=false;
					}
				}
			}
		}
		for (h = 0; h < C_shot2.length; h++){
			if(C_shot2[h].alive){
				if(Math.abs(boss.position.x-C_shot2[h].position.x)<=boss.size+C_shot2[h].size){
					if(Math.abs(boss.position.y-C_shot2[h].position.y)<=boss.size+B_shot2[h].size){
						if(B_defence<C_attack){
							B_hp+=B_defence-C_attack
							score+=scorep;
						}
						C_shot2[h].alive=false;
					}
				}
			}
		}
		for (s = 0; s < C_shot3.length; s++){
			if(C_shot3[s].alive){
				if(Math.abs(boss.position.x-C_shot3[s].position.x)<=boss.size+C_shot3[s].size){
					if(Math.abs(boss.position.y-C_shot3[s].position.y)<=boss.size+B_shot3[s].size){
						if(B_defence<C_attack){
							B_hp+=B_defence-C_attack
							score+=scorep;
						}
						C_shot3[s].alive=false;
					}
				}
			}
		}
		for (t = 0; t < C_shot4.length; t++){
			if(C_shot4[t].alive){
				if(Math.abs(boss.position.x-C_shot4[t].position.x)<=boss.size+C_shot4[t].size){
					if(Math.abs(boss.position.y-C_shot4[t].position.y)<=boss.size+B_shot4[t].size){
						if(B_defence<C_attack){
							B_hp+=B_defence-C_attack
							score+=scorep;
						}
						C_shot4[t].alive=false;
					}
				}
			}
		}
	}
	//B_shot 999-----------------------------------------------------
	if(B_sabhp==999||B_sabhp==1){
		for (o = 0; o < B_shot5.length; o++){
			if(B_shot5[o].alive){
				if(Math.abs(B_shotp2.x-B_shot5[o].position.x)<=B_shot5[o].size){
					if(Math.abs(B_shotp2.y-B_shot5[o].position.y)<=B_shot5[o].size){
						B_shot5[o].alive=false;
					}
				}
			}
		}
		for (r = 0; r < B_shot6.length; r++){
			if(B_shot6[r].alive){
				if(Math.abs(B_shotp3.x-B_shot6[r].position.x)<=B_shot6[r].size){
					if(Math.abs(B_shotp3.y-B_shot6[r].position.y)<=B_shot6[r].size){
						B_shot6[r].alive=false;
					}
				}
			}
		}
	}
}
}
if(C_hp<=0){
	C_hp=5;
	C_sabhp-=1;
	score-=100;
}
}
function hits(){
	invisible=true;
	setTimeout(function(){invisible=false;},3000);	
}