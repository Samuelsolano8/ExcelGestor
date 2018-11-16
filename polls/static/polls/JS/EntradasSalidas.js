$(document).ready(function() {
    var hoy = new Date();
    var dd = hoy.getDate();
    var mm = hoy.getMonth() + 1;
    var yyyy = hoy.getFullYear();
    $("#Fecha").val(yyyy+"-"+mm+"-"+dd);
});
$("#CodigoP").change(function(){
var option = $('option:selected', this).attr('identificador');
$("#Descripcion").val(Codigo[option]);
$("#Controlador").val(option);
});
$('#Nentrada').keydown(function(e) {
var key = e.which;
if (key==112){
  e.preventDefault();
  console.log("Nos brincamos el f1");
}
});
$('#Nsalida').keydown(function(e) {
var key = e.which;
if (key==112){
  e.preventDefault();
  console.log("Nos brincamos el f1");
}
});
