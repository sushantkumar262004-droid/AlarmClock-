function play() {
      var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
      audio.play();
    }

    // Update time every second
    setInterval(() => {
      let d = new Date();
      document.getElementById("time").innerHTML = d.toDateString() + " " + d.toLocaleTimeString();
    }, 1000);

    const setAlarm = (seconds) => {
      let startTime = new Date().getTime();
      setTimeout(() => {
        play();
        document.getElementById("alarm").innerHTML = "⏰ Alarm is ringing!";
      }, seconds * 1000);

      let countdown = setInterval(() => {
        let secondsLeft = Math.ceil(((startTime + seconds * 1000) - new Date().getTime()) / 1000);
        if (secondsLeft > 0) {
          document.getElementById("alarm").innerHTML = "Alarm ringing in " + secondsLeft + " seconds";
        } else {
          clearInterval(countdown);
        }
      }, 1000);
    };

    function setAlarmFromPrompt() {
      let s = prompt("After how many seconds do you want the alarm?");
      if (!isNaN(s) && s > 0) {
        setAlarm(parseInt(s));
      } else {
        alert("Please enter a valid number of seconds!");
      }
    }