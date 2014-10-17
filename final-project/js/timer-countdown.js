
/**
 * timer-countdown.js
 */
var taskFocus = new (function() {
    var $countdown,
        $form, // Form used to change the countdown time
        incrementTime = 70,
        currentTime = 150000,
        updateTimer = function() {
            $countdown.html(formatTime(currentTime));
            if (currentTime == 0) {
                taskFocus.Timer.stop();
                timerComplete();
                taskFocus.resetCountdown();
                return;
            }
            currentTime -= incrementTime / 10;
            if (currentTime < 0) currentTime = 0;
        },

        timerComplete = function() {
            var musicSrc = "music/alarmMusic.mp3";
            var myWindow = window.open(musicSrc, 'mp3player', "width=220,height=130,left=0,left=100,top=100,location=no");         
        },

        init = function() {
            $countdown = $('#countdown');
            taskFocus.Timer = $.timer(updateTimer, incrementTime, true);
            $form = $('#taskFocusform');
            $form.bind('submit', function() {
                taskFocus.resetCountdown();
                return false;
            });
        };

    this.resetCountdown = function() {
        var newTime = parseInt($form.find('#countTime').val()) * 100;
        if (newTime > 0) {currentTime = newTime;}
        this.Timer.stop().once();
    };
    $(init);
});

// Common functions
function pad(number, length) {
    var str = '' + number;
    while (str.length < length) {str = '0' + str;}
    return str;
}
function formatTime(time) {
    var min = parseInt(time / 6000),
        sec = parseInt(time / 100) - (min * 60);
		return (min > 0 ? pad(min, 2) : "00") + ":" + pad(sec, 2);
}




