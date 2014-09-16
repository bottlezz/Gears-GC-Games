function colDetcUser(users){

	for(var i=0;i<users.length-1;i++){
		for(var j=i+1;j<users.length;j++){
			var dx=users[i].x-users[j].x;
			var dy=users[i].y-users[j].y;
			var dist=users[i].radius+users[j].radius;
			if(Math.sqrt(dx)+Math.sqrt(dy)<Math.sqrt(dist)){
				users[i].reverseMove();
				users[j].reverseMove();

			}else{

			}
		}
	}
}
function colDetcBulletOnUsers(bullets,users,onHitCallBack){
	//onHitCallBack=function(user,bullet)
	bullets.forEach(function(b){
		users.forEach(function(u){
			var dx=u.x-b.x;
			var dy=u.y-b.y;
			var dist=u.radius+b.radius;
			if(Math.sqrt(dx)+Math.sqrt(dy)<Math.sqrt(dist)){
				onHitCallBack(u,b);
			}
		})
	});
}
