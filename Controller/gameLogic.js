function colDetcUser(users){

	for(var i=0;i<users.length-1;i++){
		for(var j=i+1;j<users.length;j++){
			var dx=users[i].x-users[j].x;
			var dy=users[i].y-users[j].y;
			var dist=users[i].radius+users[j].radius;
			if(dx*dx+dy*dy<dist*dist){
				users[i].reverseMove();
				users[j].reverseMove();

			}else{

			}
		}
	}
}

function colDetcBulletOnUsers(bullets,users,onHitCallBack){
	//onHitCallBack=function(user,bullet)
	for(i=bullets.length-1;i>=0;i--){
		var b=bullets[i];
		var hit=false;
		if(b.x>1000||b.x<0||b.y>1000||b.y<0){
			hit=true;
		}
		users.forEach(function(u){
			var dx=u.x-b.x;
			var dy=u.y-b.y;
			var dist=u.radius+b.radius-1;
			if(dx*dx+dy*dy<dist*dist){
				hit=true;
				onHitCallBack(u,b);

			}
		});
		if(hit){
			b.removeFromStage();
			bullets.splice(i,1);
		}
	}
}
