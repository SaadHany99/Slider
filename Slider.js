$(".next").on("click",function()
{

    const index = 0;
    $(".next").css("cursor","grabbing");
    // $("#container").css({
    //     "background-image": "url('./Images/image'+$"+{index}+"'.jpg')",
    //     "background-size": "cover",
    //     "filter": "blur(5px)",
    // });
     $(".slide").hide().fadeIn(700);
    var current_image=$(".show");
    var next_image=current_image.next();
    if(current_image.is(":last-child"))
    {
        //console.log($(".slide img").eq(0));
        next_image=$(".slide img").eq(0);
        current_image.removeClass("show");
        next_image.addClass("show");
        //$(".slide img").eq(0).addClass("show");
    }
    else
    {
    current_image.removeClass("show");
    next_image.addClass("show");
    }
    // $(next_image).hide().fadeIn(1500);
    //$(current_image).next().addClass("show").siblings().removeClass("show");//another way to show and Hide in one line command
});// end of Next button

$(".prev").on("click",function()
{
    
    $(".prev").css("cursor","grabbing");
    //$("#container").css("filter","blur(10px)");

    // $("#container").css({
    //     "background-image": "url('./Images/image5.jpg')",
    //     "background-size": "cover",
    //    "filter": "blur(5px)",
    // }).hide().fadeIn(700);
    let current_image=$(".show");
    // let prev_image=current_image.prev();
    // current_image.removeClass("show");
    // prev_image.addClass("show");
    $(".slide").hide().fadeIn(700);
    if(current_image.is(":first-child"))
    {
        //console.log($(".slide img").eq(0));
        current_image.removeClass("show");
        $(".slide img:last").addClass("show");

    }
    else
    {
        $(current_image).prev().addClass("show").siblings().removeClass("show");
    // current_image.removeClass("show");
    // next_image.addClass("show");
    }
    

});//end of prev button