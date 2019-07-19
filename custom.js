
function akanName()
{
var input=document.getElementById("bday").value;
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var dayOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var dd=d.getDate();
var yy=d.getFullYear();
var mm=d.getMonth();
mm=mm+1;
var d =new Date(input);
var century=((yy/100)+1);
cc = parseFloat(century);
// if(document.getElementById("female").checked)
// {
//     var gender=document.getElementById("female");
// }
// else{
//    var gender= document.getElementById("male");  
// }
var day=( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;
d=parseInt(day);

var gender= document.querySelector('input[name="gender"]:checked').value;
if(input == '' && gender == '')
{
    document.getElementById('demo').innerHTML=('please enter values!');
}
else  if ( gender == 'male' &&day == 0) {
    document.getElementById('demo').innerHTML=( 'your Akan Name is '+ maleNames[0]);
}
else  if ( gender == 'male' &&day == 1) {
    document.getElementById('demo').innerHTML=( 'your Akan Name is '+ maleNames[1]);
}
    else  if ( gender == 'male' &&day == 2) {
        document.getElementById('demo').innerHTML=( 'your Akan Name is '+ maleNames[2]);
    }
    else  if ( gender == 'male' &&day == 3) {
        document.getElementById('demo').innerHTML=( 'your Akan Name is '+ maleNames[3]);
    }
    else  if ( gender == 'male' &&day == 4) {
        document.getElementById('demo').innerHTML=( 'your Akan Name is '+ maleNames[4]);
    }
    else  if ( gender == 'male' &&day == 5) {
        document.getElementById('demo').innerHTML=( 'your Akan Name is '+ maleNames[5]);
    }
    else  if ( gender == 'male' &&day == 6) {
        document.getElementById('demo').innerHTML=( 'your Akan Name is '+ maleNames[6]);
    }
    else if ( gender == 'female' &&day == 0) {
        document.getElementById('demo').innerHTML=( 'your Akan Name is '+ femaleNames[0]);
    }
    else if ( gender == 'female' &&day == 1) {
        document.getElementById('demo').innerHTML=( 'your Akan Name is '+ femaleNames[1]);
    }
    else if ( gender == 'female' &&day == 2) {
        document.getElementById('demo').innerHTML=( 'your Akan Name is '+ femaleNames[2]);
    }
    else if ( gender == 'female' &&day == 3) {
        document.getElementById('demo').innerHTML=( 'your Akan Name is '+ femaleNames[3]);
    }
    else if ( gender == 'female' &&day == 4) {
        document.getElementById('demo').innerHTML=( 'your Akan Name is '+ femaleNames[4]);
    }
    else if ( gender == 'female' &&day == 5) {
        document.getElementById('demo').innerHTML=( 'your Akan Name is '+ femaleNames[5]);
    }
    else if ( gender == 'female' &&day == 6) {
        document.getElementById('demo').innerHTML=( 'your Akan Name is '+ femaleNames[6]);
    }






if((document.getElementById("gender")).checked && (document.getElementById("bd").checked)){

};
console.log()


























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
