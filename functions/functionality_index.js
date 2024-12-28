
// main page functions
const days = document.getElementById("days")
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

let target_date = new Date("January 31 2025 13:00:00").getTime();

function timer ()
{
    let current_date = new Date().getTime();
    let time_diff = target_date - current_date;

    let calculated_days = Math.floor(time_diff/(1000*60*60*24));
    let calculated_hrs = Math.floor(time_diff/(1000*60*60)) % 24;
    let calculated_min = Math.floor(time_diff/(1000*60)) % 60;
    let calculated_sec = Math.floor(time_diff/1000) % 60;




    if (calculated_days < 10)
    {
        days.innerHTML = "0" + calculated_days;

    } 
    else
    {
        days.innerHTML = calculated_days;
    }

    if (calculated_hrs < 10)
    {
        hours.innerHTML = "0" + calculated_hrs;

    } 
    else
    {
        hours.innerHTML =  calculated_hrs;
    }

    if (calculated_min < 10)
    {
        minutes.innerHTML = "0" + calculated_min;

    } 
    else
    {
        minutes.innerHTML =  calculated_min;
    }

    if (calculated_sec <10)
    {
        seconds.innerHTML = "0" + calculated_sec;
    }
    else
    {
        seconds.innerHTML = calculated_sec;
    }

    if (time_diff < 0)
    {
        days.innerHTML = "00";
        hours.innerHTML = "00";
        minutes.innerHTML = "00"; 
        seconds.innerHTML = "00"; 
    }

}
setInterval(timer,10);