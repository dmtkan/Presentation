

var hotels = [hiltonHotel, radisonHotel, plazaHotel, hyattHotel];
var initionHilton =0 ;
var initionRadison =0;
var initionPlaza =0;
var initionHyatt = 0;
for(var i=1; i<=10; i++){
  var ranNumber = Math.round(Math.random()*3);
if (ranNumber==0){
  initionHilton = initionHilton +1;
}
else if (ranNumber==1){
    initionRadison = initionRadison +1;
  }

  else if (ranNumber==2){
    initionPlaza = initionPlaza +1;
  }
  else if (ranNumber==3){
    initionHyatt = +1;
  }
}




function Hotel (name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function() {

return this.rooms - this.booked;
  };
}
var hiltonHotel = new Hotel('Hilton', 15, initionHilton);
var radisonHotel = new Hotel('Radison', 40, initionRadison);
var plazaHotel = new Hotel('Plaza', 70, initionPlaza);
var hyattHotel = new Hotel('Hyatt', 100, initionHyatt);
var hotels = [hiltonHotel, radisonHotel, plazaHotel, hyattHotel];



document.getElementById('properties1').innerHTML = hiltonHotel.name + "&#9733&#9733" + ' <br/>Total rooms: '  + hiltonHotel.rooms + ' <br/>Rooms booked: ' + hiltonHotel.booked + '<br>Rooms available: ' + hiltonHotel.checkAvailability();


document.getElementById('properties2').innerHTML = radisonHotel.name + "&#9733&#9733&#9733" + ' <br/>Total rooms: '  + radisonHotel.rooms + ' <br/>Rooms booked: '+ radisonHotel.booked + '<br>Rooms available: ' + radisonHotel.checkAvailability();

document.getElementById('properties3').innerHTML = plazaHotel.name + "&#9733&#9733&#9733&#9733" + ' <br/>Total rooms: '  + plazaHotel.rooms + ' <br/>Rooms booked: '+ plazaHotel.booked + '<br>Rooms available: ' + plazaHotel.checkAvailability();

document.getElementById('properties4').innerHTML = hyattHotel.name + "&#9733&#9733&#9733&#9733&#9733" + ' <br/>Total rooms: '  + hyattHotel.rooms + ' <br/>Rooms booked: '+ hyattHotel.booked  + '<br>Rooms available: ' + hyattHotel.checkAvailability();
//

var msg = "<div id='msgNote'><h2>Dmitriy Kan's Hotel Booking System</hr><a id='close' href='#'>Close X</a></h2>";
msg += "<div id ='kan'><hr/>We have 4 amazing hotels available for booking.<br/>";
msg += "For futher information plesase contact my secretary Heekyung Kim (347-441-8542) </div></div>";

var elNote = document.createElement("div");
elNote.setAttribute("id", "note");
elNote.innerHTML = msg;
document.body.appendChild(elNote);
function dismissNote(){
  document.body.removeChild(elNote);
}
var elClose = document.getElementById('close');
elClose.addEventListener('click', dismissNote, false)
//
// load event

function scrollWindow(){
  var upwindow = document.getElementById('uppage');
  upwindow.style.display = 'block';
}
window.addEventListener('scroll', scrollWindow, false); // window to spicify that we are targeting the browser window.




//
function reservePoping(){
  var poping = document.getElementById("reserve");
  poping.style.display = "block";
}
var windowOpen0 = document.getElementById('qwerty1');
var windowOpen2 = document.getElementById('qwerty2');
var windowOpen3 = document.getElementById('qwerty3');
var windowOpen4 = document.getElementById('qwerty4');
windowOpen0.addEventListener('click', reservePoping, false);
windowOpen2.addEventListener('click', reservePoping, false);
windowOpen3.addEventListener('click', reservePoping, false);
windowOpen4.addEventListener('click', reservePoping, false);




//// Closing the reserve window
function dismissReserve(){
  var element = document.getElementById("reserve");
  element.style.display = "none";
}
var windowClose = document.getElementById('btnClose');
windowClose.addEventListener('click', dismissReserve, false);






///
