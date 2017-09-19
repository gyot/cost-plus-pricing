// Login
$("#ok_login").click(function(event) {
  /* Act on the event */
   $.getJSON("models/getPetugas.php",function (data) {
    if (($("#usr").val()!=data[0].nama) || ($.md5($("#pass").val())!=data[0].pass)) {
      $("#alert").css("display","block");
    }else if (($("#usr").val()==data[0].nama) || ($("#pass").val()==data[0].pass)){
        $("#id_admin").text(data[0].id_petugas);
        $("#admin").text(data[0].nama);

        var data_user = "";
        $.getJSON("http://ip-api.com/json/?callback=?", function(pengguna) {
                data_user =  "Kota : "+pengguna.city + ", Negara : " + pengguna.country +
                              ", Lokasi ("+ pengguna.lat+", "+pengguna.lon+"), ISP : "+
                              pengguna.isp+", IP Publik : "+pengguna.query;
                              console.log("2");
                              var waktu=new Date();
                              var email=data[0].email;
                              var ok="";
                              $.post("http://gyotapi.esy.es/mail.php",
                              {
                                subject:"Informasi Login",
                                msg:data[0].nama+" login pada tanggal "+
                                waktu.getDate()+"-"+
                                waktu.getMonth()+"-"+
                                waktu.getFullYear()+" "+
                                waktu.getHours()+":"+
                                waktu.getMinutes()+":"+
                                waktu.getSeconds()+". Detail pengguna => ID pengguna "+data[0].id_petugas+" "+data_user,
                                email:email
                              },function(response){
                                console.log(response);
                                // console.log(data);
                                $("#m_login").css("display","none");
                                $.post("session.php",{
                                  id:data[0].id_petugas,
                                  user:data[0].nama
                                },function(data1,status){
                                  console.log("Status: " + status);
                                  location.reload();
                                });
                              });

        });

    }
  });
});

var inp=document.getElementById("pass");
var chk=document.getElementById("chk");
$("#chk").click(function(event) {
  /* Act on the event */
  if (chk.checked == true){
    inp.type="text";
    // pass.value = 'Password';
  } else if (chk.checked == false) {
    inp.type="password";
  }
});

$("#logout").click(function(event) {
  /* Act on the event */
  // console.log("sada");
  $.post("destroy_session.php",{destroy:"ok"},function() {
    location.reload();
    // console.log("kdkdk");
  });
});
// End login
