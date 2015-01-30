
function animate() {
  requestAnimFrame(animate);

    //sprite.rotation += 0.1;
    players.forEach(function(entry){
      entry.update();
    });
    bullets.forEach(function(entry){
      if(entry.inStage==true){
        entry.update();
      }
    });
    colDetcUser(players);
    colDetcBulletOnUsers(bullets,players,onHitCallback);

    renderer.render(stage);
  }
function onHitCallback(user,bullet){
  user.onHit(bullet);
}
function UserConnection(guid){
  this.guid=guid;
  this.user=null;
}


///Remove user from the screen
function removeUser(guid){
  players.forEach(function(entry){
    if(entry.guid==guid){
      stage.removeChild(entry.sprite);
      players.splice(players.indexOf(entry),1);
    }

  });
 
  //stage.removeChild(sprite);
}

function addUser(guid){
  user=new User(guid,null);
  var iscol=true;
  while(iscol){
    iscol = false;
    var startx=Math.random()*850;
    var starty=Math.random()*550;
    user.x=startx;
    user.y=starty;
    user.lastX=startx;
    user.lastY=starty;

    players.forEach(function(u){
      var dx=u.x-user.x;
      var dy=u.y-user.y;
      var dist=u.radius+user.radius;
      if(dx*dx+dy*dy<dist*dist){
        iscol=true;

      }
    });
  }
  user.sprite.position.set(user.x, user.y);


  players.push(user);

  //user.resetPivot();

  stage.addChild(user.sprite);
    user.updateHealthBar();
  return user;
}
function addBackGround(){
  var backgroundSprite= PIXI.Sprite.fromImage('gregmap.png');
  stage.addChild(backgroundSprite);
}
function onBroadCast(obj){
  var connection=null;
  for(var i=0;i<connections.length;i++){
    if(connections[i].guid==obj.guid){
      connection=connections[i];
      break;
    }
  }
  if(connection==null){
    connection = new UserConnection(obj.guid);
    user=addUser(obj.guid);
    connection.user=user;
    connections.push(connection);
  }
  var user=connection.user;
  if(user==null)return;
  
  if(obj.action=="keyDown"){
    //user.stop();
    user.keyDown=true;
    var r=obj.rot+30;
    if(r==60)r=0;
    if (user.targetRot==r) {
      return;
    }else{

      user.targetRot=r;


    }
    //user.move();


    switch(r){
      case 0:
      user.dx=0;
      user.dy=1;
      break;
      case 1:
      user.dx=0.1;
      user.dy=0.99;
      break;
      case 2:
      user.dx=0.21;
      user.dy=0.98;
      break;
      case 3:
      user.dx=0.31;
      user.dy=0.95;
      break;
      case 4:
      user.dx=0.41;
      user.dy=0.91;
      break;
      case 5:
      user.dx=0.5;
      user.dy=0.87;
      break;
      case 6:
      user.dx=0.59;
      user.dy=0.81;
      break;
      case 7:
      user.dx=0.67;
      user.dy=0.74;
      break;
      case 8:
      user.dx=0.74;
      user.dy=0.67;
      break;
      case 9:
      user.dx=0.81;
      user.dy=0.59;
      break;
      case 10:
      user.dx=0.87;
      user.dy=0.5;
      break;
      case 11:
      user.dx=0.91;
      user.dy=0.41;
      break;
      case 12:
      user.dx=0.95;
      user.dy=0.31;
      break;
      case 13:
      user.dx=0.98;
      user.dy=0.21;
      break;
      case 14:
      user.dx=0.99;
      user.dy=0.1;
      break;
      case 15:
      user.dx=1;
      user.dy=0;
      break;
      case 16:
      user.dx=0.99;
      user.dy=-0.1;
      break;
      case 17:
      user.dx=0.98;
      user.dy=-0.21;
      break;
      case 18:
      user.dx=0.95;
      user.dy=-0.31;
      break;
      case 19:
      user.dx=0.91;
      user.dy=-0.41;
      break;
      case 20:
      user.dx=0.87;
      user.dy=-0.5;
      break;
      case 21:
      user.dx=0.81;
      user.dy=-0.59;
      break;
      case 22:
      user.dx=0.74;
      user.dy=-0.67;
      break;
      case 23:
      user.dx=0.67;
      user.dy=-0.74;
      break;
      case 24:
      user.dx=0.59;
      user.dy=-0.81;
      break;
      case 25:
      user.dx=0.5;
      user.dy=-0.87;
      break;
      case 26:
      user.dx=0.41;
      user.dy=-0.91;
      break;
      case 27:
      user.dx=0.31;
      user.dy=-0.95;
      break;
      case 28:
      user.dx=0.21;
      user.dy=-0.98;
      break;
      case 29:
      user.dx=0.1;
      user.dy=-0.99;
      break;
      case 30:
      user.dx=0;
      user.dy=-1;
      break;
      case 31:
      user.dx=-0.1;
      user.dy=-0.99;
      break;
      case 32:
      user.dx=-0.21;
      user.dy=-0.98;
      break;
      case 33:
      user.dx=-0.31;
      user.dy=-0.95;
      break;
      case 34:
      user.dx=-0.41;
      user.dy=-0.91;
      break;
      case 35:
      user.dx=-0.5;
      user.dy=-0.87;
      break;
      case 36:
      user.dx=-0.59;
      user.dy=-0.81;
      break;
      case 37:
      user.dx=-0.67;
      user.dy=-0.74;
      break;
      case 38:
      user.dx=-0.74;
      user.dy=-0.67;
      break;
      case 39:
      user.dx=-0.81;
      user.dy=-0.59;
      break;
      case 40:
      user.dx=-0.87;
      user.dy=-0.5;
      break;
      case 41:
      user.dx=-0.91;
      user.dy=-0.41;
      break;
      case 42:
      user.dx=-0.95;
      user.dy=-0.31;
      break;
      case 43:
      user.dx=-0.98;
      user.dy=-0.21;
      break;
      case 44:
      user.dx=-0.99;
      user.dy=-0.1;
      break;
      case 45:
      user.dx=-1;
      user.dy=0;
      break;
      case 46:
      user.dx=-0.99;
      user.dy=0.1;
      break;
      case 47:
      user.dx=-0.98;
      user.dy=0.21;
      break;
      case 48:
      user.dx=-0.95;
      user.dy=0.31;
      break;
      case 49:
      user.dx=-0.91;
      user.dy=0.41;
      break;
      case 50:
      user.dx=-0.87;
      user.dy=0.5;
      break;
      case 51:
      user.dx=-0.81;
      user.dy=0.59;
      break;
      case 52:
      user.dx=-0.74;
      user.dy=0.67;
      break;
      case 53:
      user.dx=-0.67;
      user.dy=0.74;
      break;
      case 54:
      user.dx=-0.59;
      user.dy=0.81;
      break;
      case 55:
      user.dx=-0.5;
      user.dy=0.87;
      break;
      case 56:
      user.dx=-0.41;
      user.dy=0.91;
      break;
      case 57:
      user.dx=-0.31;
      user.dy=0.95;
      break;
      case 58:
      user.dx=-0.21;
      user.dy=0.98;
      break;
      case 59:
      user.dx=-0.1;
      user.dy=0.99;
      break;
      case 60:
      user.dx=0;
      user.dy=1;
      break;
    }
    user.getDirection();
  }
  if(obj.action=="keyUp"){
    user.stop();

  }
  if(obj.action=="connect"){

  }
  if(obj.action=="fireUp"){

    for(var i=0;i<players.length;i++){
      if(players[i].guid==obj.guid){
        players[i].fire();
      }
    }
  }
};

var keepAliveCheck = setInterval(function(){
  players.forEach(function(entry){
    //connect.
  });
},30000);
///Class for bullet
function Bullet(){
  this.radius=5;
  this.imgUrl='Dot0.png';
  this.sprite = PIXI.Sprite.fromImage(this.imgUrl);
  this.lastX=100;
  this.lastY=100;
  this.x=100;
  this.y=100;
  this.dx=0;
  this.dy=0;
  this.speed=0.3;
  this.lastUpdate=Date.now();
  this.inStage=false;
  this.power=10;
  this.addToStage=function(user){
    this.x=user.x-(user.radius+this.radius+1)*user.dx;
    this.y=user.y-(user.radius+this.radius+1)*user.dy;
    this.dx=user.dx;
    this.dy=user.dy;
    this.sprite.position.set(this.x, this.y);
    this.sprite.pivot.set(this.sprite.width/2, this.sprite.height/2);
    this.lastUpdate=Date.now();
    this.inStage=true;
    this.sprite.position.set(this.x, this.y);
    stage.addChild(this.sprite);
  }
  this.removeFromStage=function(){

    stage.removeChild(this.sprite);
    this.inStage=false;

  }
  this.update=function(){
    var now=Date.now();
    var time=now-this.lastUpdate;
    this.lastUpdate=now;
    this.x=this.x-time*this.dx*this.speed;
    this.y=this.y-time*this.dy*this.speed;
    this.sprite.position.set(this.x, this.y);



  }
}

function User(guid,gcObj){
  this.hitPoint=100;

  this.satus=0;//0 normal, -1 dead
  this.guid=guid;
  this.gcObj=gcObj;
  this.radius=13;
  this.lastX=450;
  this.lastY=300;
  this.speed = 0.15;
  this.rotSpd = 0.05;
  this.x=450;
  this.y=300;
  this.dx=0;
  this.dy=0;
  this.rot=30;
  this.targetRot=0;
  this.rotDir=0;
  this.isStop=true;
  this.canMove=false;
  this.keyDown=false;
  this.lastUpdate=Date.now();
  //this.imgUrl = 'tank_base.png';
  this.imgUrl = 'robber3.png'
  this.sprite = PIXI.Sprite.fromImage(this.imgUrl);
  this.healthBar = new PIXI.Graphics();  


  this.healthBar.beginFill(0xFFFF00);

// set the line style to have a width of 5 and set the color to red
this.healthBar.lineStyle(5, 0xFF0000);

// draw a rectangle
this.healthBar.drawRect(0, 10, 30,5);


this.sprite.addChild(this.healthBar);

  this.sprite.position.set(this.x, this.y);
  this.sprite.pivot.set(this.sprite.width/2, this.sprite.height/2);
  this.sprite.rotation = -this.rot*6*0.01745;

  this.stop=function(){
    this.keyDown=false;
    this.resetPivot();
  }
  this.resetPivot=function(){
    this.sprite.pivot.set(this.sprite.width/2, this.sprite.height/2);
  }
  this.reverseMove=function(){
    this.x=this.lastX;
    this.y=this.lastY;
    this.sprite.position.set(this.x, this.y);
  }
  this.fire=function(){
    var bul = new Bullet();
    bul.addToStage(this);
    bullets.push(bul);
  }

  this.update=function(){
    var now=Date.now();
    var time=now-this.lastUpdate;
    this.lastUpdate=now;
    curRot=(this.rot);
    curTarRot=(this.targetRot);

    if(curRot!=curTarRot){
      this.canMove=false;
      if(Math.abs(curRot-curTarRot)<1){
        this.rot=this.targetRot;
        this.rotDir=0;
        this.canMove = true;
      }else{

        //console.log(this.rot+' '+this.targetRot);
        this.rot+=this.rotSpd*this.rotDir*time;
        this.rot=(60+this.rot)%60;

      }

    }

    if(this.canMove&&this.keyDown){
      this.lastX=this.x;
      this.lastY=this.y;
      this.x=this.x-time*this.dx*this.speed;
      this.y=this.y-time*this.dy*this.speed;
      this.sprite.position.set(this.x, this.y);
    }

    //console.log(time);

    this.sprite.rotation = -this.rot*6*0.01745;
  }

  this.onHit=function(bullet){
    
    if(this.isDead()){
      return;
    }else{
      this.hitPoint-=bullet.power;
      this.updateHealthBar();
    }
  }
  this.onDead=function(){
    this.speed=0;
    var gguid=this.guid;
    setTimeout(function(){ console.log(gguid);removeUser(gguid); }, 3000);
  }
  this.isDead=function(){
    //console.log(this.hitPoint);
    if(this.hitPoint<=0 && this.satus!=-1){
      this.satus=-1;
      this.onDead();
      return true;
    }else if(this.satus == -1){
      return true;
    }else{
      return false;
    }
    
  }
  this.updateHealthBar =function(){

    this.healthBar.clear();
    this.healthBar.beginFill(0xFFFF00);
    this.healthBar.lineStyle(1, 0xFF0000);
    this.healthBar.drawRect(0, -10, 30*this.hitPoint/100,3);
  }

  this.getDirection=function(){
    if((60+this.targetRot-this.rot)%60>30){
      this.rotDir=-1;
    }else{
      this.rotDir=1;
    }
  }


};