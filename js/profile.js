var data_pass="";
$.getJSON("models/getPetugas.php",function(data){
  $("#ket_id").text(data[0].id_petugas);
  $("#ket_name").val(data[0].nama);
  $("#ket_email").val(data[0].email);
  $("#ket_input").val(data[0].pass);
  data_pass=data[0].pass;
});
