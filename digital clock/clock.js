function clock(){
    var time = new Date();
    var Hour =  time.gethours();
    var Minute =  time.getminutes();
    var Second =  time.getseconds();
    document.getElementById("hoursID").innerHTML = Hour;
    document.getElementById("minutesID").innerHTML = Minute;
    document.getElementById("secondsID").innerHTML = Second;
}
setInterval(clock, 500);
