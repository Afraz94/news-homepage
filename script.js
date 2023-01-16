$(".menu-button").click(function(){
    $(".side-bar").show(200);
    // $(".menu-button").hide();
    $(".container").addClass("dull");
    $("img").css("filter", "brightness(50%)");
});

$(".close").click(function(){
    $(".menu-button").show();
    $(".side-bar").css("display", "none");
    $(".container").removeClass("dull");
    $("img").css("filter", "brightness(100%)");
});