$(document).ready(function(){
    // Remove no-javascript class if js is enabled
    $("body.no-javascript").removeClass("no-javascript")


    $("audio").each(function(i, audioElement) {
        var audio = $(this);
        var that = this;

        that.volume = audio.attr("vol");

        $("#doc").append($('<tr><td id="td' + audio.attr("key") + '">' + audio.attr("key") + '</td><td><a id="el' + audio.attr("key") + '" href="#"><b>' + audio.attr("name") + '</b></a></td></tr>').click(function() {that.pause(); that.currentTime=0; that.play();}));

        audio.on("ended", function() {
            $("#td" + audio.attr("key"))[0].style = "background-color: #fffffff";
        });

    });

});

$(document).keypress(function (e) {

    if (" " === String.fromCharCode(e.which)) {
        stopAllAudio();
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

