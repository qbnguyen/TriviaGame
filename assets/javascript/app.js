$(document).ready(function () {

    $("#questionAnswer").hide();
    $("#theEnd").hide();
});

$("#start").click(function () {
    $("#questionAnswer").show();
    $(".container").hide(); $("#theEnd").hide();
    var count = 10;
    var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

    function timer() {
        count = count - 1;
        if (count <= 0) {
            clearInterval(counter);
            return endGame();
        }

        $("#timer").html(count + " secs remainning");
    }

});


function endGame() {
    alert("the end")
    $("#questionAnswer").hide();
        $("#theEnd").show();
    $("#done").click(function () {
        endGame();

    });

}
