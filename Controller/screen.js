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

