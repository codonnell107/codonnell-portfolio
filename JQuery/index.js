// $(document).ready(function() {
    //$("h1").css("color", "red");
//} );

$("h1").addClass("big-title margin-50");

$("h1").click(function () {
    $("h1").css("color", "green");
});

$("button").click(function () {
    $("h1").css("color", "teal");
});

$("input").keydown(function (event) {
    $("h1").text(event.key);
});
