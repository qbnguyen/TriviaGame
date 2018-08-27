$(document).ready(function () {

    $("#questionAnswer").hide();

});

$("#start").click(function () {
    $("#questionAnswer").show(1,);

    var count = 10;
    var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

    function timer() {
        count = count - 1;
        if (count <= 0) {
            clearInterval(counter);
            return endGame
        }

        $("#timer").html(count + " secs remainning");
    }

});

$("#done").click(function () {
    $(".container").hide();

});

function endGame(){
    alert ("the end")
    
}
