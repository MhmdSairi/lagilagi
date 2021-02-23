function mobMenu() {
    if($("#menu").hasClass("hidden")) {
        $("#menu").removeClass("hidden")
        $("#ham_bar").css({display : "none"});
        $("#close_menu").css({display : "block"});
    }
    else {
        $("#menu").addClass("hidden");
        $("#ham_bar").css({display : "block"});
        $("#close_menu").css({display : "none"});
    }
}