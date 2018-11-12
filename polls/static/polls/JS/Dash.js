$(document).ready(function() {
//obtenemos el valor de los input
var i = 1; //contador para asignar id al boton que borrara la fila
var cantidad=1;
var FechaV =[];
var FacturaV=[];
var SerieV=[];
var CodigoPV=[];
var ProductoV=[];

function strip(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

$('#adicionar').click(function() {
   
  var hoy = new Date();
  var dd = hoy.getDate();
  var mm = hoy.getMonth()+1;
  var yyyy = hoy.getFullYear();
  var Fecha = dd + '/' + mm + '/' + yyyy;
  var Factura = document.getElementById("NumeroF").value;
  var Serie = document.getElementById("Serie").value;
  var CodigoP=document.getElementById("CodigoP").value;
  var Producto=document.getElementById("Descripcion").value;
  if (strip(Factura) == "" || strip(Serie) == "" || strip(CodigoP) == "" || strip(Producto) == "") {
    alert("Porfavor llene todos los campos");
  }
  else {
      var fila = '<tr name="FilasG" id="row' + i + '"><td>' + Producto + '</td><td>' + CodigoP + '</td><td>' + Factura + '</td><td>' + cantidad + '</td><td>' + Serie + '</td><td>' + Fecha + '</td><td><button type="button" name="' +i+ '" id="remove'+i+'" class="btn btn-danger btn_remove">Quitar</button></td></tr>'; //esto seria lo que contendria la fila
      i++;
  FechaV.push(Fecha);
  FacturaV.push(Factura);
  SerieV.push(Serie);
  CodigoPV.push(CodigoP);
  ProductoV.push(Producto);
  }
  console.log(SerieV);
  $('#mytable tr:first').after(fila);
    $("#adicionados").text(""); //esta instruccion limpia el div adicioandos para que no se vayan acumulando
    var nFilas = $("#mytable tr").length;
    $("#adicionados").append(nFilas - 1);
    //le resto 1 para no contar la fila del header
    document.getElementById("Serie").value ="";
    document.getElementById("Serie").focus();
  });

$(document).on('click', '.btn_remove', function() {
  var contador=1;
  var button_id = $(this).attr("name");
    //cuando da click obtenemos el id del boton
    $('#row' + button_id + '').remove(); //borra la fila
    //limpia el para que vuelva a contar las filas de la tabla
    var nFilas = $("#mytable tr").length;
    var nFilasA=nFilas-1;
    FechaV.splice(button_id-1,1);
    FacturaV.splice(button_id-1,1);
    SerieV.splice(button_id-1,1);
    CodigoPV.splice(button_id-1,1);
    ProductoV.splice(button_id-1,1);
    for (vuelta=0; vuelta<nFilas; vuelta++) {
      unoA=vuelta+1;
      nombre="remove"+unoA;
      if ($("#row"+unoA+"").length){
          $('#row'+unoA+"").attr('id','row'+contador+"");
          $("#remove"+unoA+"").attr('name',contador);
          $("#remove"+unoA+"").attr('id','remove'+contador+"");
          contador++;
      }
      else{
        console.log("esta vacio id "+vuelta+" la variable del indice da "+i);
      }
    }
    i=i-1;
  });
$("#Enviar").click(function () {
  nFilas=$("#mytable tr").length;
  if (nFilas == 1) {
    alert("No hay productos para agregar");
  }
  else {
    CodigoPV=JSON.stringify(CodigoPV);
    FechaV=JSON.stringify(FechaV);
    FacturaV=JSON.stringify(FacturaV);
    ProductoV=JSON.stringify(ProductoV);
    SerieV=JSON.stringify(SerieV);
    console.log(CodigoPV);
    $.ajax({
        url:"/polls/Alotes/",
        data:{Codigo: CodigoPV, Fecha: FechaV, Factura: FacturaV,Descripcion : ProductoV, Cantidad:cantidad,Serie:SerieV,Observaciones:"Agregado por lotes",csrfmiddlewaretoken:window.CSRF_TOKEN},
        type : 'POST',
        success : function() {
        alert("Productos agregados con exito");
        $('tr[name=FilasG]').remove();
        var FechaV =[];
        var FacturaV=[];
        var SerieV=[];
        var CodigoPV=[];
        var ProductoV=[];
    },
        error : function(xhr, status) {
        alert('Disculpe, existió un problema');
    },
    });
  }
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
if (key==112){
  e.preventDefault();
  console.log("Nos brincamos el f1");
}
if (key == 13) {
// As ASCII code for ENTER key is "13"
$('#adicionar').click(); // Submit form code
}
});
});
