var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var timerId = null;


function startWatch () {

        var totalSeconds = 0;
        timerId = setInterval(setTime, 1000);

        function setTime()
        {
            ++totalSeconds; // increments value of totalSeconds at beginning, not later
            secondsLabel.innerHTML = pad(totalSeconds%60);
            minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
        }

        function pad(val)
        {
            var valString = val + "";
            if(valString.length < 2)
            {
                return "0" + valString;
            }
            else
            {
                return valString;
            }
        }
}

function resetWatch() {
    // para reloj
    // poner labels en 00
    // reiniciar clearInterval(timerId)
}