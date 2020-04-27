//TODO: implement play / pause buttons - ascii characters
//TODO: implement stop
//TODO: tick callback function
//TODO: CSS
//TODO: refactor: combine query selector code

document.addEventListener('DOMContentLoaded', function(){
 
document.querySelector("#session-down-arrow").addEventListener('click', function(){
  var $val = document.querySelector("#session-selection-value");
  var val = parseInt($val.innerHTML);
  if(val <= 1) return;
  val--;
  $val.innerHTML = val;
})

document.querySelector("#session-up-arrow").addEventListener('click', function(){
  var $val = document.querySelector("#session-selection-value");
  var val = parseInt($val.innerHTML);
  if(val >= 60) return;
  val++;
  $val.innerHTML = val;
})

document.querySelector("#break-down-arrow").addEventListener('click', function(){
  var $val = document.querySelector("#break-selection-value");
  var val = parseInt($val.innerHTML);
  if(val <= 1) return;
  val--;
  $val.innerHTML = val;
})

document.querySelector("#break-up-arrow").addEventListener('click', function(){
  var $val = document.querySelector("#break-selection-value");
  var val = parseInt($val.innerHTML);
  if(val >= 15) return;
  val++;
  $val.innerHTML = val;
})

});

var pomodoro = {
  defaultTime: 25 * 60,
  callback: function(){
    //REPLACE ME
  },
  time: 25 * 60,
  paused: true,
  formattedTime: function(){
    var minutes = Math.floor(this.time / 60);
    var seconds = this.time % 60;
    return `${minutes}:${seconds}`;
  },
  tick: function(){
    if (this.time <= 0) return;
    this.time--;
    if (!paused){
      setTimeout(this.tick(),1000);
      this.callback();
    }
  },
  play: function(){
    this.paused = false;
    this.tick();
  },
  pause: function(){
    this.paused = true;
  },
  stop: function(){
    this.time = this.defaultTime;
    this.paused = true;
  }
}