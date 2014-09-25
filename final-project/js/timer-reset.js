var taskFocus = new (function() {
    var $countdown,
        $form, // Form used to change the countdown time
        incrementTime = 70,
        currentTime = 180000,
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
            // alert('Countdown timer complete!');
            $('.cd-popup').addClass('is-visible');
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
        var newTime = parseInt($form.find('input[type=text]').val()) * 100;
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
      //  hundredths = pad(time - (sec * 100) - (min * 6000), 2);
		return (min > 0 ? pad(min, 2) : "00") + ":" + pad(sec, 2);
    //return (min > 0 ? pad(min, 2) : "00") + ":" + pad(sec, 2) + ":" + hundredths;
}
