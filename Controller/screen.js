function colDetcUser(users){

	for(var i=0;i<users.length-1;i++){
		for(var j=i+1;j<user.length;j++){
			var dx=user[i].x-user[j].x;
			var dy=user[i].y-user[j].y;
			var dist=user[i].radius+user[j].radius;
			if(Math.sqrt(dx)+Math.sqrt(dy)<Math.sqrt(dist)){
				user[i].reverse();
				user[j].reverse();
				console.log("yes");
			}else{
				console.log("no");
			}
		}
	}
}

