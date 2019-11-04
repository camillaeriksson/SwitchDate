printDay();
printMonth();
printTime();
printDate();

function printDay() {
    const date = new Date();
    let day = date.getDay();
    switch (day) {
        case 1:
            document.getElementById("day").innerHTML = "Måndag";
            break;
        case 2:
            document.getElementById("day").innerHTML = "Tisdag";
            break;
        case 3:
            document.getElementById("day").innerHTML = "Onsdag";
            break;
        case 4:
            document.getElementById("day").innerHTML = "Torsdag";
            break;
        case 5:
            document.getElementById("day").innerHTML = "Fredag";
            break;
        case 6:
            document.getElementById("day").innerHTML = "Lördag";
            break;
        case 7:
            document.getElementById("day").innerHTML = "Söndag";
            break;
    }
}

function printMonth() {
    const date = new Date();
    let month = date.getMonth();
    switch (month) {
        case 1:
            document.getElementById("month").innerHTML = "Januari";
            break;
        case 2:
            document.getElementById("month").innerHTML = "Februari";
            break;
        case 3:
            document.getElementById("month").innerHTML = "Mars";
            break;
        case 4:
            document.getElementById("month").innerHTML = "April";
            break;
        case 5:
            document.getElementById("month").innerHTML = "Maj";
            break;
        case 6:
            document.getElementById("month").innerHTML = "Juni";
            break;
        case 7:
            document.getElementById("month").innerHTML = "Juli";
            break;
        case 8:
            document.getElementById("month").innerHTML = "Augusti";
            break;
        case 9:
            document.getElementById("month").innerHTML = "September";
            break;
        case 10:
            document.getElementById("month").innerHTML = "Oktober";
            break;
        case 11:
            document.getElementById("month").innerHTML = "November";
            break;
        case 12:
            document.getElementById("month").innerHTML = "December";
            break;
    }
}

function printTime() {
        var realTime = new Date();
        var hour = realTime.getHours();
        var minute = realTime.getMinutes();
        var seconds = realTime.getSeconds();
        minute = checkTime(minute);
        seconds = checkTime(seconds);
        document.getElementById('time').innerHTML =
        hour + ":" + minute + ":" + seconds;
        setTimeout(printTime, 500);
      }
      function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
      }


function printDate() {
    const date = new Date();
    document.getElementById("date").innerHTML = date.getDate();
}