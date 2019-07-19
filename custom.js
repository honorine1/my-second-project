
function akanName()
{
var input=document.getElementById("bday").value;
// var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
// var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
// var dayOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var gender=["male","female"];
var CC=d.getDate();
var YY=d.getFullYear();
var MM=d.getMonth();
var d =new Date(input);
var DD;
var century=((yy/100)+1);
CC=century.toFloat();
var gender= document.querySelector('input[name="gender"]:checked').value;


if((document.getElementById("gender")).checked && (document.getElementById("bd").checked)){

};
console.log(CC);


























// var akaName = function (){
// var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
// var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
// var daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var gender = ["male","female"];
// }
// var name;
   
// if(gender==0){

// switch (new Date().getDay()) {
// case 0:
// name = " is kwasi";
// break;
// case 1:
// name = " is kwadwo";
// break;
// case 2:
// name = " is kwabena";
// break;
// case 3:
// name = " is kwaku";
// break;
// case 4:
// name = " is yaw";
// break;
// case 5:
// name = " is kofi";
// break;
// case  6:
// name = " is kwame";
// }
// document.getElementById("demo").innerHTML = "your name is " + name;}
// else{
// switch (new Date().getDay()) {
// case 0:
// name = " Akosua";
// break;
// case 1:
// name = " Adwoa";
// break;
// case 2:
// name = " Abena";
// break;
// case 3:
// name = " Akua";
// break;
// case 4:
// name = " Yaa";
// break;
// case 5:
// name = " Afua";
// break;
// case  6:
// name = " Ama";
// }
// document.getElementById("demo").innerHTML = "your name is " + name;}


// // showPrompt("Enter something<br>...smart :)", function(value) {
// //     alert(value);<input type="button" value="Click to show the form" id="show-button">
// //   });
// // var d =  parseInt(( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7);
// // console.log(result);
