$("#reset_login").click(function(event) {
  /* Act on the event */
  $("#alert").hide("1000");
  $("#reset_frm0").show("1000");
  $("#login_frm").hide("1000");
});

// reset_frm0
$("#econfirm").click(function(event) {
  /* Act on the event */
  email=document.getElementById('remail').value;
  $.getJSON("models/getPetugas.php",function(data) {
    if (data[0].email!=email) {
      $("#alert").show('1000');
      $("#alert").text("Email yang anda masukkan salah !");
    } else {
      resetEmail();
      $("#alert").hide("1000");
      $("#reset_frm0").hide("1000");
      $("#reset_frm1").show("1000");
    }
  });
});
// end reset_frm0

// reset_frm1
$("#cconfirm").click(function(event) {
  /* Act on the event */
  if (hcode!=$("#reset_code").val()) {
    $("#alert").show("1000");
    $("#alert").text("kode salah");
  } else {
    $("#alert").hide("1000");
    $("#reset_frm1").hide("1000");
    $("#reset_frm2").show("1000");
  }
});
// end reset_frm1

// reset_frm2
$("#reset").click(function(event) {
  /* Act on the event */
  if (($("#r_pass0").val()!=null && $("#r_pass0").val()!="") || ($("#r_pass1").val()!=null && $("#r_pass1").val()!="")) {
    if ($("#r_pass0").val()==$("#r_pass1").val()) {
      $.post(
        "models/updatePetugas.php",
        {
          email:email,
          pass:$.md5($("#r_pass1").val())
        },function(data,status){
          // console.log(data);
          console.log(status);
          location.reload();
        }
      );
      // console.log("dsda");
    } else {
      $("#alert").show('1000');
      $("#alert").text("Password tidak sama");
    }
  } else {
    $("#alert").show('1000');
    $("#alert").text("Tidak boleh kosong");
  }
});

var email="";
function resetEmail() {
  email=document.getElementById('remail').value;
  randomKode();
  console.log(email);
      $.post(
        "http://gyotapi.esy.es/mail.php",
        {
          subject:"Reset Password",
          msg:"Kode reset email anda adalah : "+hcode,
          email:email
        },function(data,status){
          console.log(data);
          console.log(status);
        });
}
var hcode="";

function randomKode() {
  var text = "";
  var kode = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 6; i++)
    text += kode.charAt(Math.floor(Math.random() * kode.length));
  hcode=text;
}
// reset_frm2
