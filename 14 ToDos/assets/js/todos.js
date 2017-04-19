/// check off specific to dos by clicking
$('ul').on("click", "li", function() {
    // //check if li is gray
    // if ($(this).css("color") === "rgb(128, 128, 128)") {
    //     //turn it black
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none"
    //     })
    // } else { //else
    //     //return gray
    //     $(this).css({
    //         color: "gray",
    //         textDecoration: "line-through"
    //     });
    // }
    $(this).toggleClass("completed")
})
//click on X to delet todos
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
})

$('post-form').keypress(function(event) {
    if (event.which === 13) {
        //getting new todo
        let todoText = $(this).val();
        $(this).val("")
        //create a new li and add to ul
        $('ul').append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
    }
})

$('.fa-plus-circle').click(function(){
  $('input[type="text"]').fadeToggle();
})
