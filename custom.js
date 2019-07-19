
function akanName()
{


var input=document.getElementById("bday").value;
var d =new Date(input);
var DD=d.getDate();
var yy=d.getFullYear();
var mm=d.getMonth();
mm=mm+1;

var century=((yy/100)+1);
cc = parseFloat(century);
// if(document.getElementById("female").checked)
// {
//     var gender=document.getElementById("female");
// }
// else{
//    var gender= document.getElementById("male");  
// }
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var dayOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var day=( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + DD ) % 7;
dates=parseInt(day);

var gender= document.querySelector('input[name="gender"]:checked').value;
// if(input == '' && gender == '')
// {
//     console.log("hhhhhhhhh")
//     // document.getElementById('demo').innerHTML=('please enter values!');
  if ( gender == 'male' && dates == 0) {
    document.getElementById('demo').innerHTML=( 'your Akan Name is '+ maleNames[0]);
}
else  if ( gender == 'male' && dates == 1) {
    document.getElementById('demo').innerHTML=( 'your Akan Name is '+ maleNames[1]);
}
    else  if ( gender == 'male' && dates == 2) {
        document.getElementById('demo').innerHTML=( 'your Akan Name is '+ maleNames[2]);
    }
    else  if ( gender == 'male' && dates == 3) {
        document.getElementById('demo').innerHTML=( 'your Akan Name is '+ maleNames[3]);
    }
    else  if ( gender == 'male' && dates == 4) {
        document.getElementById('demo').innerHTML=( 'your Akan Name is '+ maleNames[4]);
    }
    else  if ( gender == 'male' && dates==5) {
     document.getElementById('demo').innerHTML=( 'your Akan Name is '+ maleNames[5]);
    }
    else  if ( gender == 'male' && dates == 6) {
        document.getElementById('demo').innerHTML=( 'your Akan Name is '+ maleNames[6]);
    }
    else if ( gender == 'female' && dates == 0) {
        document.getElementById('demo').innerHTML=( 'your Akan Name is '+ femaleNames[0]);
    }
    else if ( gender == 'female' && dates == 1) {
        document.getElementById('demo').innerHTML=( 'your Akan Name is '+ femaleNames[1]);
    }
    else if ( gender == 'female' && dates== 2) {
        document.getElementById('demo').innerHTML=( 'your Akan Name is '+ femaleNames[2]);
    }
    else if ( gender == 'female' && dates == 3) {
        document.getElementById('demo').innerHTML=( 'your Akan Name is '+ femaleNames[3]);
    }
    else if ( gender == 'female' && dates == 4) {
        document.getElementById('demo').innerHTML=( 'your Akan Name is '+ femaleNames[4]);
    }
    else if ( gender == 'female' && dates == 5) {
        document.getElementById('demo').innerHTML=( 'your Akan Name is '+ femaleNames[5]);
    }
    else if ( gender == 'female' && dates == 6) {
        document.getElementById('demo').innerHTML=( 'your Akan Name is '+ femaleNames[6]);
    }
}
























