$(document).ready(function(){
    // Remove no-javascript class if js is enabled
    $("body.no-javascript").removeClass("no-javascript")

    var counter = 0;

    $("audio").each(function(i, audioElement) {
        var audio = $(this);
        var that = this;

        that.volume = audio.attr("vol");


        if (counter < 16 ) {

            if (counter % 2 === 0) {
                $("#doc").append($('<tr><td colspan="2"></td></tr>'));
            }

            $("#doc").append($('<tr><td id="td' + audio.attr("key") + '">' + audio.attr("key") + '</td><td><a id="el' + audio.attr("key") + '" href="#"><b>' + audio.attr("name") + '</b></a></td></tr>').click(function() {that.pause(); that.currentTime=0; that.play();}));

        }
        else {

            if (counter % 2 === 0) {
                $("#doc2").append($('<tr><td colspan="2"></td></tr>'));
            }

            $("#doc2").append($('<tr><td id="td' + audio.attr("key") + '">' + audio.attr("key") + '</td><td><a id="el' + audio.attr("key") + '" href="#"><b>' + audio.attr("name") + '</b></a></td></tr>').click(function() {that.pause(); that.currentTime=0; that.play();}));

        }

        audio.on("ended", function() {
            $("#td" + audio.attr("key"))[0].style = "background-color: #fffffff";
        });

        counter++;
    });

});

$(document).keypress(function (e) {

    if (" " === String.fromCharCode(e.which)) {
        stopAllAudio();
        return;
    }

    if ("x" === String.fromCharCode(e.which)) {
        window.setInterval(fadeOut,50)
        return;
    }

    if ("-" === String.fromCharCode(e.which)) {
        var v = $("audio")[0].volume - 0.05;
        if (v <= 0) {
            v = 0;
        }
        $("audio")[0].volume = v;
        $("audio")[1].volume = v;
        return;
    }

    if ("+" === String.fromCharCode(e.which)) {
        var v = $("audio")[0].volume + 0.05;
        if (v >= 1) {
            v = 1;
        }
        $("audio")[0].volume = v;
        $("audio")[1].volume = v;
        return;
    }

    //console.log(String.fromCharCode(e.which));
    $("audio").each(function(i, audioElement) {
        var audio = $(this);

        //console.log(audio.attr("key"));

        if (audio.attr("key") === String.fromCharCode(e.which)) {
            $("#el" + audio.attr("key"))[0].click();
            $("#td" + audio.attr("key"))[0].style = "background-color: #ff0000";
            setTimeout(function() {
                $("#td" + audio.attr("key"))[0].style = "background-color: #ffb0b0";
            }, 60);
        }

    });
});

function stopAllAudio() {
    document.location.reload();
}

function fadeOut() {
    var v = $("audio")[0].volume - 0.008;
    if (v <= 0) {
       document.location.reload();
    }

    for (var i=0; i < $("audio").length; i++) {
        $("audio")[i].volume = v;
    }
}


