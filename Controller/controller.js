function ControllPad(id,callBack,endCallBack){
  var pad=document.getElementById(id);
  var padCord=getPosition(pad);
  this.x=0;
  this.y=0;
  var self=this;
  this.endCall=function(x,y){
    console.log("Touch End:"+x+","+y);
  };

  if(typeof(endCallBack) !== 'undefined'){
      this.endCall = endCallBack;
  }

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


    self.endCall(self.x,self.y);
  }, false);


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
