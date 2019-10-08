$(function(){
    let img = $("#foto");
    let mostrar = $("#mostrar");
    let ocultar = $("#ocultar");
    $(ocultar).click(function(){
       $(img).fadeOut();
       $("#mostrar").css("display", "block");
       $("#ocultar").css("display", "none");
    })
    $(mostrar).click(function(){
        $(img).fadeIn();
        $("#ocultar").css("display", "block");
       $("#mostrar").css("display", "none");
     })
})