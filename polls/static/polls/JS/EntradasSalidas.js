$(document).ready(function() {
    $('.js-example-basic-single').select2();
});
$("#CodigoP").change(function(){
var option = $('option:selected', this).attr('identificador');
$("#Descripcion").val(Codigo[option]);
$("#Controlador").val(option);
});
