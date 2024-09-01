function showTime(){
    var date = new Date(); 
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var zone = "AM"
    if(hours ==0){
        hours = 12;
    }
    if(hours>12){
        hours = hours-12;
        zone="PM";
    }
    hours = (hours<10)?"0"+hours:hours;
    minutes = (minutes<10)?"0"+minutes:minutes;
    seconds = (seconds<10)?"0"+seconds:seconds;

    let time = hours+":"+minutes+":"+seconds+" "+zone;

    document.getElementById('time').innerHTML = time;
    setTimeout(showTime,100);
}