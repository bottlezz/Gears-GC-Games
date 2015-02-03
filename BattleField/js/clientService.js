function ClientService(){
	this.connect=null;
	this.guid=getGuid();
	this.init=function(){
		this.connect=new GameCenter();

	}
	this.joinGame=function(){

	}
	this.respawn=function(){

	}
	this.onDeath=function(){

	}
	this.sendMoveStart=function(r){
		if(this.connect==null) return;
		this.connect.broadcast({action:"keyDown",guid:this.guid,rot:r});
	}
	this.sendMoveStop=function(r){
		if(this.connect==null) return;
		this.connect.broadcast({action:"keyUp",guid:this.guid,rot:r});
	}
	this.sendBulletFire=function(r){
		if(this.connect==null) return;
		this.connect.broadcast({action:"fireUp",guid:this.guid,rot:r});
	}
}

function getGuid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
               .toString(16)
               .substring(1);
  }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +s4() + '-' + s4() + s4() + s4();

}
