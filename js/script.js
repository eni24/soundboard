$(document).ready(function(){
    // Remove no-javascript class if js is enabled
    $("body.no-javascript").removeClass("no-javascript")


    $("audio").removeAttr("controls").each(function(i, audioElement) {
        var audio = $(this);
        var that = this;

        $("#doc").append($('<tr><td id="td' + audio.attr("key") + '">' + audio.attr("key") + '</td><td><a id="el' + audio.attr("key") + '" href="#"><b>' + audio.attr("name") + '</b></a></td></tr>').click(function() {that.pause(); that.currentTime=0; that.play();}));
    });

});

$(document).keypress(function (e) {

    //console.log(String.fromCharCode(e.which));
    $("audio").removeAttr("controls").each(function(i, audioElement) {
        var audio = $(this);

        //console.log(audio.attr("key"));

        if (audio.attr("key") === String.fromCharCode(e.which)) {
            $("#el" + audio.attr("key"))[0].click();
            $("#td" + audio.attr("key"))[0].style = "background-color: #ff0000";
            setTimeout(function() {
                $("#td" + audio.attr("key"))[0].style = "background-color: #ffffff";
            }, 400);
        }

    });
});
