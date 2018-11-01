id=null;
myUniversalOldValueHolder = null;
Nuevovalor=null;
fila=null;

$(".changeable").focus(function() {
    myUniversalOldValueHolder = $(this).attr("data-valor");
    $(".changeable").unbind('focusout').focusout(function (e) {
        Nuevovalor=$(this).text();
        id = $(this).attr("id");
        fila=$(this).attr("filas");
        if (myUniversalOldValueHolder!=Nuevovalor){
            $.post("http://192.168.200.68:8000/polls/Reporte/", {Valor: Nuevovalor,ID: id,fila: fila}, function(result){

            });
        }
    });
});
$("#search").keyup(function () {
    _this = this;
    // Show only matching TR, hide rest of them
    $.each($("#Table_datos tbody tr"), function () {
        if ($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
            $(this).hide();
        else
            $(this).show();
    });
});
