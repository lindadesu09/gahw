/**
 * alarm.js
 */
function countTime() {

  now=new Date();
  hour=now.getHours();
  min=now.getMinutes();
  sec=now.getSeconds();

if (min<=9) {
  min="0"+min;
 }
if (sec<=9) {
  sec="0"+sec;
 }
if (hour>12) {
  hour=hour-12;
  add="pm";
 }
else {
  hour=hour;
  add="am";
 }
if (hour==12) {
  add="pm";
 }
if (hour==00) {
  hour="12";
 }

document.hours.clock.value = (hour<=9) ? "0"+hour : hour;
document.minutes.clock.value = min;
document.seconds.clock.value = sec;
document.ampm.clock.value= add;
setTimeout("countTime()", 1000);
}

playit=false
function playmusic(){
  var musicsrc="music/alarmMusic.mp3";
  myWindow = window.open(musicsrc, 'mp3player', "width=220,height=130,left=0,left=100,top=100,location=no");
}

function soundcheck(cbox){
    playit=cbox.checked
}

function dialogAlert(){
  this.render = function(dialog){
    var winW = window.innerWidth;
    var winH = window.innerHeight;
    var dialogoverlay = document.getElementById('dialogoverlay');
    var dialogbox = document.getElementById('dialogbox');
    dialogoverlay.style.display = "block";
    dialogbox.style.top = "100px";
    dialogbox.style.display = "block";
    document.getElementById('dialogboxhead').innerHTML = "   " + "Alert Message";
    document.getElementById('dialogboxbody').innerHTML = dialog;
    document.getElementById('dialogboxfoot').innerHTML = '<button onclick="dialogDisplay.ok()">OK</button>';
  }
  this.ok = function(){
    document.getElementById('dialogbox').style.display = "none";
    document.getElementById('dialogoverlay').style.display = "none";
  }
}
var dialogDisplay = new dialogAlert();

function alarm() {
    note = document.arlm.message.value;
    if (note == '') {note = 'ALARM!!';}

    hrs = document.arlm.hr.value;
    min = document.arlm.mts.value;
    apm = document.arlm.am_pm.value;

 if ((document.hours.clock.value == hrs) &&
    (document.minutes.clock.value == min) &&
    (document.ampm.clock.value == apm)) {
     if (playit)
     playmusic()
     else
     dialogDisplay.render(note);
     return false}

 if (hrs == '') {dialogDisplay.render('The Hour field is empty'); return false}
 if (min == '') {dialogDisplay.render('The Minute field is empty'); return false}
 if (apm == '') {dialogDisplay.render('The am/pm field is empty'); return false}

 if (hrs.length == 1) {document.arlm.hr.value = '0' + hrs}
 if (min.length == 1) {document.arlm.mts.value = '0' + min}
 if (hrs.length > 2) {dialogDisplay.render('The Hour is wrongly typed.'); return false}
 if (min.length > 2) {dialogDisplay.render('The Minute is wrongly typed.'); return false}
 if (apm != 'am' && apm != 'pm' ) {dialogDisplay.render('The am/pm is wrongly typed.'); return false}

 setTimeout("alarm()", 1000);}


