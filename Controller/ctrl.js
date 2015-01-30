



var view_check=document.getElementById('view_OrientationCheck');
var socketSupport=document.getElementById("SupportFailMessage");
var mql = window.matchMedia("(orientation: portrait)");

mql.addListener(function(m) {
	orientationChange();
});

initControllers();
orientationChange();
/*
if (window.MozWebSocket) {
    console.log('using MozillaWebSocket');
    window.WebSocket = window.MozWebSocket;
} else if (!window.WebSocket) {

   	socketSupport.style.display = "block";
    //alert('browser does not support websockets!');
    
}
*/
var cPad1;
var cPad2;
var lastRot=360;
var currentRot=0;
var lastRotUpdate=0;//for checking if anychanges in the interval
var connect=new GameCenter();
var guid=getGuid();
var fired=false;
var ctrlStatus=0;


function initControllers(){
	cPad1= new ControlPad("ctrl1",touchOnCallBack,touchUpCallBack);
	cPad2= new TouchPad("ctrl2",bulletFire);

}

var stopCheck;
function bulletFire(){
	if(!fired){
		fired = true;
		connect.broadcast({action:"fireUp",guid:guid,rot:currentRot});
		setTimeout(function(){
			fired=false;
		},600)
	}
}

function touchOnCallBack(x,y){
	ctrlStatus=1;
	var rot=getRot(x,y);
	currentRot=rot;


}
function touchUpCallBack(){
	ctrlStatus=2;
}

function orientationChange(){
	var mql = window.matchMedia("(orientation: portrait)");
	if(mql.matches) {
		// Portrait orientation
		view_check.style.display = "block";
	} else {
		// Landscape orientation
		view_check.style.display = "none";
		initControllers();
	}
};


/*
var ctrlObj=connect.registerGcObject(guid);
ctrlObj.submit(Date.now());
*/
var go=setInterval(function(){
	switch(ctrlStatus){
		case 0:
		break;
		case 1:
		if(Math.abs(lastRot-currentRot)<2)
		{
			if (currentRot!=lastRotUpdate) {
				lastRotUpdate=currentRot;
				connect.broadcast({action:"keyDown",guid:guid,rot:currentRot});
			};
		}
		lastRot=currentRot;
		break;
		case 2:
		connect.broadcast({action:"keyUp",guid:guid,rot:lastRot});
		lastRot=360;
		lastRotUpdate=360;
		ctrlStatus=0;
		break;
	}



},20);

//setControllerResponseRate();
