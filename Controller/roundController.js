function ControllPad(id,callBack,endCallBack){
  var pad=document.getElementById(id);
  var padCord=getPosition(pad);
  this.x=-1;
  this.y=-1;
  this.rot=-1;
  var self=this;
  this.endCall=function(x,y){
    x=-1;
    y=-1;
    if(typeof(endCallBack) !== 'undefined'){
        endCallBack(x,y);
    }
  };



  pad.addEventListener('touchmove', function(event) {
    event.preventDefault();
    var touch = event.targetTouches[0];
    self.x = touch.pageX -padCord.x;
    self.y = touch.pageY -padCord.y;

    callBack(self.x,self.y);

  }, false);
  pad.addEventListener('touchstart', function(event) {
    event.preventDefault();
    var touch = event.targetTouches[0];
    self.x = touch.pageX -padCord.x;
    self.y = touch.pageY -padCord.y;

    callBack(self.x,self.y);;
  }, false);

  pad.addEventListener('touchend', function(event) {
    event.preventDefault();

//console.log(event.targetTouches);
    endCallBack(self.x,self.y);
  }, false);


}
function getRot(x,y){
  var x=x-125;
  var y=y-125;
  return Math.round(Math.atan2(x, y)*57.3/6);
}


function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;

    while(element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    return { x: xPosition, y: yPosition };
}
function toggleFullScreen() {
  var doc = window.document;
  var docEl = doc.documentElement;

  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  }
  else {
    cancelFullScreen.call(doc);
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
function computeZone(x,y){
  var x=x-125;
  var y=y-125;
  if(x<0 && (x*x>y*y))return 4;

  if(x>0 && (x*x>y*y))return 2;

  if(y>0 && (x*x<y*y)) return 1;

  return 3;


}
