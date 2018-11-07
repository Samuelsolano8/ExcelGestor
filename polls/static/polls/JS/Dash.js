  $(document).ready(function() {
//obtenemos el valor de los input

$('#adicionar').click(function() {
  var hoy = new Date();
  var dd = hoy.getDate();
  var mm = hoy.getMonth()+1;
  var yyyy = hoy.getFullYear();
  var cantidad=1;
  var Factura = document.getElementById("NumeroF").value;
  var Serie = document.getElementById("Serie").value;
  var CodigoP=document.getElementById("CodigoP").value;
  var Producto=document.getElementById("Descripcion").value;


  var i = 1; //contador para asignar id al boton que borrara la fila
  var fila = '<tr id="row' + i + '"><td>' + Producto + '</td><td>' + CodigoP + '</td><td>' + Factura + '</td><td>' + cantidad + '</td><td>' + Serie + '</td><td>' + dd+'/'+mm+'/'+yyyy + '</td><td><button type="button" name="remove" id="' + i + '" class="btn btn-danger btn_remove">Quitar</button></td></tr>'; //esto seria lo que contendria la fila

  i++;

  $('#mytable tr:first').after(fila);
    $("#adicionados").text(""); //esta instruccion limpia el div adicioandos para que no se vayan acumulando
    var nFilas = $("#mytable tr").length;
    $("#adicionados").append(nFilas - 1);
    //le resto 1 para no contar la fila del header
    document.getElementById("Serie").value ="";
    document.getElementById("Serie").focus();
  });
$(document).on('click', '.btn_remove', function() {
  var button_id = $(this).attr("id");
    //cuando da click obtenemos el id del boton
    $('#row' + button_id + '').remove(); //borra la fila
    //limpia el para que vuelva a contar las filas de la tabla
    $("#adicionados").text("");
    var nFilas = $("#mytable tr").length;
    $("#adicionados").append(nFilas - 1);
  });
});
$("#CodigoP").change(function(){
    var option = $('option:selected', this).attr('identificador');
    $("#Descripcion").val(Codigo[option]);
});

$("#Descripcion").change(function(){
    var option = $('option:selected', this).attr('identificador');
    $("#CodigoP").val(CodigoD[option]);
});
$('#Lotes').keydown(function(e) {
var key = e.which;
if (key == 13) {
// As ASCII code for ENTER key is "13"
$('#adicionar').click(); // Submit form code
}
});
