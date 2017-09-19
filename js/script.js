// Script Olah Biaya Bahan Baku
var data_bbb=[];
var itr=0;
var bb=document.getElementById("bbaku");
var bi=document.getElementById("biaya_bbaku");
var frm_bbb=document.getElementById("frm_bbb");

  function tampilDataBBB() {
    var $table=$("#isiBody_bbb");

    for (var i = itr; i < data_bbb.length; i++) {
          itr=data_bbb.length;
        var $tr=$("<tr></tr>");
        $tr.append($("<td></td>").html(data_bbb[i].bb));
        $tr.append($("<td></td>").html("Rp <p style=\"float:right;\">"+data_bbb[i].bbb+"</p>"));
        $tr.append("<button style=\"padding:0;\" onclick=\"delete_array_bbb("+i+");\"> <i class='trash icon'></button>");

        $table.append($tr);
    }
    rumus();
  }
  function delete_array_bbb(x) {
    data_bbb.splice(x,1);
    document.getElementById('isiBody_bbb').innerHTML="";
    var $table=$("#isiBody_bbb");
    itr--;
    for (var i = 0; i < data_bbb.length; i++) {
      var $tr=$("<tr></tr>");
      $tr.append($("<td></td>").html(data_bbb[i].bb));
      $tr.append($("<td></td>").html("Rp <p style=\"float:right;\">"+data_bbb[i].bbb+"</p>"));
      $tr.append("<button style=\"padding:0;\" onclick=\"delete_array_bbb("+i+");\"> <i class=\"trash icon\"></button>");

      $table.append($tr);
    }
    document.getElementById('tb_bbb').innerHTML="";
    var $table1=$("#tb_bbb");

    for (var i = 0; i < data_bbb.length; i++) {
      var $tr1=$("<tr></tr>");
      $tr1.append($("<td></td>").html(data_bbb[i].bb));
      $tr1.append($("<td></td>").html("Rp <p style=\"float:right;\">"+data_bbb[i].bbb+"</p>"));
      $tr1.append("<button style=\"padding:0;\" onclick=\"delete_array_bbb("+i+");\"> <i class=\"trash icon\"></button>");

      $table1.append($tr1);
    }
    var x=0;
    for(var i=0;i<data_bbb.length;i++){
      x=x+parseInt(data_bbb[i].bbb);
    }
    document.getElementById('total_bbb').innerHTML=x;
    rumus();
  }
  function chk_bbb(e) {
    if (e.keyCode == 13) {
        if (bb.value=="" ||  bi.value=="") {
          alert('data tidak boleh kosong');
        }else {
          if (isNaN(bi.value)==false) {
            data_bbb.push({"bb":bb.value,"bbb":bi.value});
            tampilDataBBB();
            frm_bbb.reset();
            bb.focus();
          }
        }
    }
  }

  $("#biaya_bbaku").keydown(function(event) {
    /* Act on the event */
    if (isNaN($("#biaya_bbaku").val())==true) {
      bi.style.borderColor = "red";
    }else {
      bi.style.borderColor = "#DEDEDE";
    }
  });

  $("#dn_bbb").click(function(event) {
    /* Act on the event */
    document.getElementById('tb_bbb').innerHTML="";
    var $table=$("#tb_bbb");

    for (var i = 0; i < data_bbb.length; i++) {
      var $tr=$("<tr></tr>");
      $tr.append($("<td></td>").html(data_bbb[i].bb));
      $tr.append($("<td></td>").html("Rp <p style=\"float:right;\">"+data_bbb[i].bbb+"</p>"));
      $tr.append("<button style=\"padding:0;\" onclick=\"delete_array_bbb("+i+");\"><i class=\"trash icon\"></button>");

      $table.append($tr);
    }
    var x=0;
    for(var i=0;i<data_bbb.length;i++){
      x=x+parseInt(data_bbb[i].bbb);
    }
    // console.log(x);
    document.getElementById('total_bbb').innerHTML=x;
    rumus();
  });

$("#add_bbb").click(function(event) {
  /* Act on the event */
    $('#m_bbb').modal('show');
    bb.focus();
});
// End Olah Biaya Bahan Baku
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
// Script Olah Biaya Tenaga Kerja Langsung
var data_btkl=[];
var itr_btkl=0;
var jp=document.getElementById("in_jp");
var gb=document.getElementById("in_gp");
var wk=document.getElementById("in_wk");
var frm_btkl=document.getElementById("frm_btkl");

  function tampilDataBTKL() {
    var $table=$("#isiBody_btkl");

    for (var i = itr_btkl; i < data_btkl.length; i++) {
        itr_btkl=data_btkl.length;
      var $tr=$("<tr></tr>");
      $tr.append($("<td></td>").html(data_btkl[i].jp));
      $tr.append($("<td></td>").html("Rp <p style=\"float:right;\">"+data_btkl[i].gb+"</p>"));
      $tr.append($("<td></td>").html(data_btkl[i].wk));
      $tr.append("<button style=\"padding:0;\" onclick=\"delete_array_btkl("+i+");\"> <i class='trash icon'></button>");

      $table.append($tr);
    }
    rumus();
  }
  function delete_array_btkl(x) {
    data_btkl.splice(x,1);
    htd();

    document.getElementById('isiBody_btkl').innerHTML="";
    var $table=$("#isiBody_btkl");
    itr_btkl--;

    for (var i = 0; i < data_btkl.length; i++) {
      var $tr=$("<tr></tr>");
      $tr.append($("<td></td>").html(data_btkl[i].jp));
      $tr.append($("<td></td>").html("Rp <p style=\"float:right;\">"+data_btkl[i].gb+"</p>"));
      $tr.append($("<td></td>").html(data_btkl[i].wk));
      $tr.append("<button style=\"padding:0;\" onclick=\"delete_array_btkl("+i+");\"> <i class=\"trash icon\"></button>");

      $table.append($tr);
    }
    document.getElementById('tb_btkl').innerHTML="";
    var $table1=$("#tb_btkl");
    for (var i = 0; i < data_btkl.length; i++) {
      var $tr1=$("<tr></tr>");
      $tr1.append($("<td></td>").html(data_btkl[i].jp));
      $tr1.append($("<td></td>").html(data_btkl[i].wk*30));
      $tr1.append($("<td></td>").html("Rp <p style=\"float:right;\">"+data_btkl[i].gb*data_btkl[i].jp+"</p>"));
      $tr1.append($("<td></td>").html("Rp <p style=\"float:right;\">"+(((data_btkl[i].gb*data_btkl[i].jp)/30)/data_btkl[i].wk).toFixed(0)+"</p>"));
      $tr1.append($("<td></td>").html("Rp <p style=\"float:right;\">"+((data_btkl[i].gb*data_btkl[i].jp)/30).toFixed(0)+"</p>"));
      $tr1.append($("<td></td>").html("Rp <p style=\"float:right;\">"+(((data_btkl[i].gb*data_btkl[i].jp)/30)*7).toFixed(0)+"</p>"));
      $tr1.append("<button style=\"padding:0;\" onclick=\"delete_array_btkl("+i+");\"><i class=\"trash icon\"></button>");

      $table1.append($tr1);
    }
    var x=0;
    for(var i=0;i<data_btkl.length;i++){
      x=x+parseInt(data_btkl[i].jp);
    }
    rumus();
  }
  function chk_BTKL(e) {
    if (e.keyCode == 13) {
        if (jp.value=="" ||  gb.value=="" || wk.value=="") {
          alert('data tidak boleh kosong');
        }else {
          if (isNaN(jp.value)==false || isNaN(gb.value)==false || isNaN(wk.value)==false) {
            data_btkl.push({"jp":jp.value,"gb":gb.value,"wk":wk.value});
            tampilDataBTKL();
            frm_btkl.reset();
            jp.focus();
          }
        }
    }
  }

  $("#in_jp").keyup(function(event) {
    /* Act on the event */
    if (isNaN($("#in_jp").val())==true) {
      jp.style.borderColor = "red";
    }else {
      jp.style.borderColor = "#DEDEDE";
    }
  });

  $("#in_gp").keyup(function(event) {
    /* Act on the event */
    if (isNaN($("#in_gp").val())==true) {
      gb.style.borderColor = "red";
    }else {
      gb.style.borderColor = "#DEDEDE";
    }
  });

  $("#in_wk").keyup(function(event) {
    /* Act on the event */
    if (isNaN($("#in_wk").val())==true) {
      wk.style.borderColor = "red";
    }else {
      wk.style.borderColor = "#DEDEDE";
    }
  });

  $("#dn_btkl").click(function(event) {
    /* Act on the event */
    document.getElementById('tb_btkl').innerHTML="";
    var $table=$("#tb_btkl");

    for (var i = 0; i < data_btkl.length; i++) {
      var $tr1=$("<tr></tr>");
      $tr1.append($("<td></td>").html(data_btkl[i].jp));
      $tr1.append($("<td></td>").html(data_btkl[i].wk*30));
      $tr1.append($("<td></td>").html("Rp <p style=\"float:right;\">"+data_btkl[i].gb*data_btkl[i].jp+"</p>"));
      $tr1.append($("<td></td>").html("Rp <p style=\"float:right;\">"+(((data_btkl[i].gb*data_btkl[i].jp)/30)/data_btkl[i].wk).toFixed(0)+"</p>"));
      $tr1.append($("<td></td>").html("Rp <p style=\"float:right;\">"+((data_btkl[i].gb*data_btkl[i].jp)/30).toFixed(0)+"</p>"));
      $tr1.append($("<td></td>").html("Rp <p style=\"float:right;\">"+(((data_btkl[i].gb*data_btkl[i].jp)/30)*7).toFixed(0)+"</p>"));
      $tr1.append("<button style=\"padding:0;\" onclick=\"delete_array_btkl("+i+");\"><i class=\"trash icon\"></button>");

      $table.append($tr1);
    }
    htd();
    rumus();
  });

$("#add_btkl").click(function(event) {
  /* Act on the event */
  if (htd()==true) {
    $('#m_btkl').modal('show');
  } else {
    alert("Format tanggal salah!");
  }
});
// End Olah Biaya Tenaga Kerja Langsung
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
// Script Olah Biaya Overhead
var data_bo=[];
var itr_bo=0;
var bbb_bo=$('#bbb_bo');
var biaya_bo=$('#biaya_bo');
var jenis_biaya=$('#jenis_biaya');
function tampilDataBO() {
  var $table=$("#isiBody_bo");

  for (var i = itr_bo; i < data_bo.length; i++) {
      itr_bo=data_bo.length;
    var $tr=$("<tr></tr>");
    $tr.append($("<td></td>").html(data_bo[i].bbb_bo));
    $tr.append($("<td></td>").html("Rp <p style=\"float:right;\">"+data_bo[i].biaya_bo+"</p>"));
    $tr.append($("<td></td>").html(data_bo[i].jenis_biaya));
    $tr.append("<button style=\"padding:0;\" onclick=\"delete_array_bo("+i+");\"> <i class='trash icon'></button>");

    $table.append($tr);
  }
  rumus();
}

function delete_array_bo(x) {
  data_bo.splice(x,1);
  document.getElementById('isiBody_bo').innerHTML="";
  itr_bo--;
  var $table=$("#isiBody_bo");

  for (var i = 0; i < data_bo.length; i++) {
    var $tr=$("<tr></tr>");
    $tr.append($("<td></td>").html(data_bo[i].bbb_bo));
    $tr.append($("<td></td>").html("Rp <p style=\"float:right;\">"+data_bo[i].biaya_bo+"</p>"));
    $tr.append($("<td></td>").html(data_bo[i].jenis_biaya));
    $tr.append("<button style=\"padding:0;\" onclick=\"delete_array_bo("+i+");\"> <i class='trash icon'></button>");

    $table.append($tr);
  }

  document.getElementById('tb_bo').innerHTML="";
  var $table1=$("#tb_bo");
  for (var i = 0; i < data_bo.length; i++) {
      var $tr1=$("<tr></tr>");
      $tr1.append($("<td></td>").html(data_bo[i].bbb_bo));
      if (data_bo[i].jenis_biaya=="Biaya Tetap") {
          $tr1.append($("<td></td>").html("Rp <p style=\"float:right;\">"+data_bo[i].biaya_bo+"</p>"));
          $tr1.append($("<td></td>").html(""));
      } else {
        $tr1.append($("<td></td>").html(""));
        $tr1.append($("<td></td>").html("Rp <p style=\"float:right;\">"+data_bo[i].biaya_bo+"</p>"));
      }
      $tr1.append($("<td></td>").html("Rp <p style=\"float:right;\">"+data_bo[i].biaya_bo+"</p>"));
      $tr1.append("<button style=\"padding:0;\" onclick=\"delete_array_bo("+i+");\"> <i class='trash icon'></button>");

      $table1.append($tr1);
  }
  var x=0;
  for(var i=0;i<data_bo.length;i++){
    x=x+parseInt(data_bo[i].biaya_bo);
  }
  for(var i=0;i<data_bo.length;i++){
    if (data_bo[i].jenis_biaya=="Biaya Variable") {
      bo_v=bo_v+parseInt(data_bo[i].biaya_bo);
    }
  }
  document.getElementById('total_bo').innerHTML=x;
  rumus();
}
function chk_BO(e) {
  if (e.keyCode == 13) {
      if (bbb_bo.value=="" ||  biaya_bo.value=="" || $("#jenis_biaya :selected").val()=="pilih") {
        alert('data tidak boleh kosong');
      }else {
          data_bo.push({"bbb_bo":bbb_bo.val(),"biaya_bo":biaya_bo.val(),"jenis_biaya":$("#jenis_biaya :selected").text()});
          tampilDataBO();
          document.getElementById('myForm').reset();
          bbb_bo.focus();
          var x=0;
          for(var i=0;i<data_bo.length;i++){
            x=x+parseInt(data_bo[i].biaya_bo);
          }
          for(var i=0;i<data_bo.length;i++){
            if (data_bo[i].jenis_biaya=="Biaya Variable") {
              bo_v=bo_v+parseInt(data_bo[i].biaya_bo);
            }
          }
          document.getElementById('total_bo').innerHTML=x;
      }
  }
}

biaya_bo.keyup(function(event) {
  /* Act on the event */
  if (isNaN(biaya_bo.val())==true) {
    biaya_bo.css('borderColor' , 'red');
  }else {
    biaya_bo.css('borderColor' , '#DEDEDE');
  }
});

$('#dn_bo').click(function(event) {
  document.getElementById('tb_bo').innerHTML="";
  var $table1=$("#tb_bo");
  for (var i = 0; i < data_bo.length; i++) {
      var $tr1=$("<tr></tr>");
      $tr1.append($("<td></td>").html(data_bo[i].bbb_bo));
      if (data_bo[i].jenis_biaya=="Biaya Tetap") {
          $tr1.append($("<td></td>").html("Rp <p style=\"float:right;\">"+data_bo[i].biaya_bo+"</p>"));
          $tr1.append($("<td></td>").html(""));
      } else {
        $tr1.append($("<td></td>").html(""));
        $tr1.append($("<td></td>").html("Rp <p style=\"float:right;\">"+data_bo[i].biaya_bo+"</p>"));
      }
      $tr1.append($("<td></td>").html("Rp <p style=\"float:right;\">"+data_bo[i].biaya_bo+"</p>"));
      $tr1.append("<button style=\"padding:0;\" onclick=\"delete_array_bo("+i+");\"> <i class='trash icon'></button>");

      $table1.append($tr1);
  }
  var y=0;
  for(var i=0;i<data_bo.length;i++){
    if (data_bo[i].jenis_biaya=="Biaya Variable") {
      y=y+parseInt(data_bo[i].biaya_bo);
    }
  }
  bo_v=y;
  // console.log(bo_v);
  var x=0;
  for(var i=0;i<data_bo.length;i++){
    x=x+parseInt(data_bo[i].biaya_bo);
  }
  document.getElementById('total_bo').innerHTML=x;
  rumus();
});

$("#add_bo").click(function(event) {
  /* Act on the event */
  $('#m_bo').modal('show');
});
// End Olah Biaya Overhead
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
// Script Olah Biaya Non Produksi
var data_bnp=[];
var itr_bnp=0;
var bnp=$("#in_bnp");
var b_bnp=$("#in_biaya_bnp");

  function tampilDataBNP() {
    var $table=$("#isiBody_bnp");

    for (var i = itr_bnp; i < data_bnp.length; i++) {
          itr_bnp=data_bnp.length;
        var $trbnp=$("<tr></tr>");
        $trbnp.append($("<td></td>").html(data_bnp[i].bnp));
        $trbnp.append($("<td></td>").html("Rp <p style=\"float:right;\">"+data_bnp[i].b_bnp+"</p>"));
        $trbnp.append("<button style=\"padding:0;\" onclick=\"delete_array_bnp("+i+");\"> <i class='trash icon'></button>");

        $table.append($trbnp);
    }
    rumus();
  }
  function delete_array_bnp(x) {
    data_bnp.splice(x,1);
    document.getElementById('isiBody_bnp').innerHTML="";
    var $table=$("#isiBody_bnp");
    itr_bnp--;
    for (var i = 0; i < data_bnp.length; i++) {
      var $trbnp=$("<tr></tr>");
      $trbnp.append($("<td></td>").html(data_bnp[i].bnp));
      $trbnp.append($("<td></td>").html("Rp <p style=\"float:right;\">"+data_bnp[i].b_bnp+"</p>"));
      $trbnp.append("<button style=\"padding:0;\" onclick=\"delete_array_bnp("+i+");\"> <i class=\"trash icon\"></button>");
      $table.append($tr);
    }
    document.getElementById('tb_bnp').innerHTML="";
    var $table1=$("#tb_bnp");

    for (var i = 0; i < data_bnp.length; i++) {
      var $trbnp1=$("<tr></tr>");
      $trbnp1.append($("<td></td>").html(data_bb[i].bnp));
      $trbnp1.append($("<td></td>").html("Rp <p style=\"float:right;\">"+data_bbb[i].b_bnp+"</p>"));
      $trbnp1.append("<button style=\"padding:0;\" onclick=\"delete_array_bnp("+i+");\"> <i class=\"trash icon\"></button>");
      $table1.append($trbnp1);
    }
    var x=0;
    for(var i=0;i<data_bnp.length;i++){
      x=x+parseInt(data_bnp[i].b_bnp);
    }
    // console.log(x);
    document.getElementById('total_bnp').innerHTML=x;
    rumus();
  }

  function chk_bnp(e) {
    if (e.keyCode == 13) {
        if (bnp.value=="" ||  b_bnp.value=="") {
          alert('data tidak boleh kosong');
        }else {
            data_bnp.push({"bnp":bnp.val(),"b_bnp":b_bnp.val()});
            tampilDataBNP();
            frm_BNP.reset();
            bnp.focus();
        }
    }
  }

  b_bnp.keyup(function(event) {
    if (isNaN(b_bnp.val())==true) {
      b_bnp.css("borderColor","red");
    }else {
      b_bnp.css("borderColor","#DEDEDE");
    }
  });

  $("#dn_bnp").click(function(event) {
    /* Act on the event */
    document.getElementById('tb_bnp').innerHTML="";
    var $table=$("#tb_bnp");

    for (var i = 0; i < data_bnp.length; i++) {
      var $trbnp=$("<tr></tr>");
      $trbnp.append($("<td></td>").html(data_bnp[i].bnp));
      $trbnp.append($("<td></td>").html("Rp <p style=\"float:right;\">"+data_bnp[i].b_bnp+"</p>"));
      $trbnp.append("<button style=\"padding:0;\" onclick=\"delete_array_bnp("+i+");\"><i class=\"trash icon\"></button>");
      $table.append($trbnp);
    }
    var x=0;
    for(var i=0;i<data_bnp.length;i++){
      x=x+parseInt(data_bnp[i].b_bnp);
    }
    // console.log(x);
    document.getElementById('total_bnp').innerHTML=x;
    rumus();
  });

  $("#add_bnp").click(function(event) {
    /* Act on the event */
    $('#m_bnp').modal('show');
  });
// End Olah Biaya Non Produksi
/////////////////////////////////////////////////////////

$("#jml").keyup(function(event) {
  /* Act on the event */
  if (isNaN($("#jml").val())==true) {
    $("#jml").css("borderColor","red");
  }else {
    $("#jml").css("borderColor","#DEDEDE");
  }
});



var bo_v=0;
function rumus() {
  var plyd=parseInt($("#jml_laba").val())/100;
  var tot_jml=parseInt(document.getElementById('jml').value);
  var bbb=parseInt(document.getElementById('total_bbb').innerHTML);
  var btkl=totbtkl;
  var bo=parseInt(document.getElementById('total_bo').innerHTML);
  var bnp=parseInt(document.getElementById('total_bnp').innerHTML);
  var tot_bt=parseInt(document.getElementById('tot_bt').innerHTML);
  var tot_bv=parseInt(document.getElementById('tot_bv').innerHTML);
  bo_v=tot_bv;
  var tot_bp_F=parseInt(bbb)+parseInt(btkl)+parseInt(bo);
  var tot_bp_V=parseInt(bbb)+parseInt(btkl)+parseInt(bo_v);
  var lyd_F=(tot_bp_F+bnp)*plyd;
  var lyd_V=(tot_bp_V+bnp)*plyd;
  // var markup=(((lyd*(bp+bnp))+bnp)/bp)*100;
  var persen_markup_F=((parseInt(lyd_F+bnp))/parseInt(tot_bp_F))*100;
  var persen_markup_V=((parseInt(lyd_V+tot_bt))/parseInt(tot_bp_V))*100;
  var markup_F=tot_bp_F*(persen_markup_F/100).toFixed(4);
  var markup_V=tot_bp_V*(persen_markup_V/100).toFixed(4);

  $('.hppsF').text((tot_bp_F/parseInt(tot_jml)).toFixed(0));
  $('.hjsF').text(((tot_bp_F+markup_F)/tot_jml).toFixed(0));

  $('.hppsV').text((tot_bp_V/parseInt(tot_jml)).toFixed(0));
  $('.hjsV').text((((tot_bp_V+markup_V)).toFixed(0)/tot_jml).toFixed(0));

  document.getElementById('hasilF').innerHTML="";
  var $tableF=$("#hasilF");
  var $tr0=$("<tr></tr>");
  $tr0.append($("<td></td>").html("Biaya bahan baku"));
  $tr0.append($("<td align='right'></td>").html("Rp "+bbb));
  var $tr1=$("<tr></tr>");
  $tr1.append($("<td></td>").html("Biaya Tenaga Kerja Langsung"));
  $tr1.append($("<td align='right'></td>").html("Rp "+btkl));
  var $tr2=$("<tr></tr>");
  $tr2.append($("<td></td>").html("Biaya Overhead Pabrik"));
  $tr2.append($("<td align='right'></td>").html("Rp "+bo));
  var $tr3=$("<tr></tr>");
  $tr3.append($("<td></td>").html(""));
  $tr3.append($("<td></td>").html("------------------ +"));
  var $tr4=$("<tr></tr>");
  $tr4.append($("<td></td>").html(""));
  $tr4.append($("<td align='right'></td>").html("Rp "+tot_bp_F));
  var $tr5=$("<tr></tr>");
  $tr5.append($("<td></td>").html("Harga Pokok Satuan"));
  $tr5.append($("<td align='right'></td>").html("Rp "+(tot_bp_F/5000).toFixed(0)));
  var $tr6=$("<tr></tr>");
  $tr6.append($("<td></td>").html("Markup :"));
  $tr6.append($("<td></td>").html(""));
  var $tr7=$("<tr></tr>");
  $tr7.append($("<td></td>").html("Biaya Non Produksi"));
  $tr7.append($("<td align='right'></td>").html("Rp "+bnp));
  var $tr8=$("<tr></tr>");
  $tr8.append($("<td></td>").html("Laba yang diharapkan"));
  $tr8.append($("<td align='right'></td>").html("Rp "+lyd_F));
  var $tr9=$("<tr></tr>");
  $tr9.append($("<td></td>").html(""));
  $tr9.append($("<td></td>").html("------------------ +"));
  var $tr10=$("<tr></tr>");
  $tr10.append($("<td></td>").html("Jumlah"));
  $tr10.append($("<td align='right'></td>").html("Rp "+(lyd_F+bnp)));
  var $tr11=$("<tr></tr>");
  $tr11.append($("<td></td>").html("Biaya Produksi"));
  $tr11.append($("<td align='right'></td>").html("Rp "+tot_bp_F));
  var $tr12=$("<tr></tr>");
  $tr12.append($("<td></td>").html(""));
  $tr12.append($("<td></td>").html("------------------ :"));
  var $tr13=$("<tr></tr>");
  $tr13.append($("<td></td>").html("Presentase markup"));
  $tr13.append($("<td align='right'></td>").html(persen_markup_F.toFixed(2)+"%"));
  var $tr14=$("<tr></tr>");
  $tr14.append($("<td></td>").html("Perhitungan Harga Jual :"));
  $tr14.append($("<td></td>").html(""));
  var $tr15=$("<tr></tr>");
  $tr15.append($("<td></td>").html("Biaya Produksi"));
  $tr15.append($("<td align='right'></td>").html("Rp "+tot_bp_F));
  var $tr16=$("<tr></tr>");
  $tr16.append($("<td></td>").html("Markup"));
  $tr16.append($("<td align='right'></td>").html("Rp "+markup_F.toFixed(0)));
  var $tr17=$("<tr></tr>");
  $tr17.append($("<td></td>").html("Total"));
  $tr17.append($("<td align='right'></td>").html("Rp "+(tot_bp_F+markup_F).toFixed(0)));
  var $tr18=$("<tr></tr>");
  $tr18.append($("<td></td>").html("Harga Jual Satuan"));
  $tr18.append($("<td align='right'></td>").html("Rp "+((tot_bp_F+markup_F)/5000).toFixed(0)));
  $tableF.append($tr0);
  $tableF.append($tr1);
  $tableF.append($tr2);
  $tableF.append($tr3);
  $tableF.append($tr4);
  $tableF.append($tr5);
  $tableF.append($tr6);
  $tableF.append($tr7);
  $tableF.append($tr8);
  $tableF.append($tr9);
  $tableF.append($tr10);
  $tableF.append($tr11);
  $tableF.append($tr12);
  $tableF.append($tr13);
  $tableF.append($tr14);
  $tableF.append($tr15);
  $tableF.append($tr16);
  $tableF.append($tr17);
  $tableF.append($tr18);

  document.getElementById('hasilV').innerHTML="";
  var $tableV=$("#hasilV");
  var $tr19=$("<tr></tr>");
  $tr19.append($("<td></td>").html("Biaya bahan baku"));
  $tr19.append($("<td align='right'></td>").html("Rp "+bbb));
  var $tr20=$("<tr></tr>");
  $tr20.append($("<td></td>").html("Biaya Tenaga Kerja Langsung"));
  $tr20.append($("<td align='right'></td>").html("Rp "+btkl));
  var $tr21=$("<tr></tr>");
  $tr21.append($("<td></td>").html("Biaya Overhead Pabrik"));
  $tr21.append($("<td align='right'></td>").html("Rp "+bo_v));
  var $tr22=$("<tr></tr>");
  $tr22.append($("<td></td>").html(""));
  $tr22.append($("<td></td>").html("------------------ +"));
  var $tr23=$("<tr></tr>");
  $tr23.append($("<td></td>").html(""));
  $tr23.append($("<td align='right'></td>").html("Rp "+tot_bp_V));
  var $tr24=$("<tr></tr>");
  $tr24.append($("<td></td>").html("Harga Pokok Satuan"));
  $tr24.append($("<td align='right'></td>").html("Rp "+(tot_bp_V/5000).toFixed(0)));
  var $tr25=$("<tr></tr>");
  $tr25.append($("<td></td>").html("Markup :"));
  $tr25.append($("<td></td>").html(""));
  var $tr26=$("<tr></tr>");
  $tr26.append($("<td></td>").html("Biaya Non Produksi"));
  $tr26.append($("<td align='right'></td>").html("Rp "+tot_bt));
  var $tr27=$("<tr></tr>");
  $tr27.append($("<td></td>").html("Laba yang diharapkan"));
  $tr27.append($("<td align='right'></td>").html("Rp "+lyd_V));
  var $tr28=$("<tr></tr>");
  $tr28.append($("<td></td>").html(""));
  $tr28.append($("<td></td>").html("------------------ +"));
  var $tr29=$("<tr></tr>");
  $tr29.append($("<td></td>").html("Jumlah"));
  $tr29.append($("<td align='right'></td>").html("Rp "+(lyd_V+bnp)));
  var $tr30=$("<tr></tr>");
  $tr30.append($("<td></td>").html("Biaya Produksi"));
  $tr30.append($("<td align='right'></td>").html("Rp "+tot_bp_V));
  var $tr31=$("<tr></tr>");
  $tr31.append($("<td></td>").html(""));
  $tr31.append($("<td></td>").html("------------------ :"));
  var $tr32=$("<tr></tr>");
  $tr32.append($("<td></td>").html("Presentase markup"));
  $tr32.append($("<td align='right'></td>").html(persen_markup_V.toFixed(2)+"%"));
  var $tr33=$("<tr></tr>");
  $tr33.append($("<td></td>").html("Perhitungan Harga Jual :"));
  $tr33.append($("<td></td>").html(""));
  var $tr34=$("<tr></tr>");
  $tr34.append($("<td></td>").html("Biaya Produksi"));
  $tr34.append($("<td align='right'></td>").html("Rp "+tot_bp_V));
  var $tr35=$("<tr></tr>");
  $tr35.append($("<td></td>").html("Markup"));
  $tr35.append($("<td align='right'></td>").html("Rp "+markup_V.toFixed(0)));
  var $tr36=$("<tr></tr>");
  $tr36.append($("<td></td>").html("Total"));
  $tr36.append($("<td align='right'></td>").html("Rp "+(tot_bp_V+markup_F).toFixed(0)));
  var $tr37=$("<tr></tr>");
  $tr37.append($("<td></td>").html("Harga Jual Satuan"));
  $tr37.append($("<td align='right'></td>").html("Rp "+((tot_bp_V+markup_F)/5000).toFixed(0)));
  $tableV.append($tr19);
  $tableV.append($tr20);
  $tableV.append($tr21);
  $tableV.append($tr22);
  $tableV.append($tr23);
  $tableV.append($tr24);
  $tableV.append($tr25);
  $tableV.append($tr26);
  $tableV.append($tr27);
  $tableV.append($tr28);
  $tableV.append($tr29);
  $tableV.append($tr30);
  $tableV.append($tr31);
  $tableV.append($tr32);
  $tableV.append($tr33);
  $tableV.append($tr34);
  $tableV.append($tr35);
  $tableV.append($tr36);
  $tableV.append($tr37);

  //
  //
  // "<tr>"+
  // "  <td>Biaya bahan baku : </td><td>Rp "++"</td>"+
  // "</tr></table>"+
  // "Biaya Tenaga Kerja Langsung : Rp "++"<br>"+
  // "Biaya Overhead Pabrik       : Rp "++"<br>"+
  // "                              ------------------ +<br>"+
  // "                              Rp "++"<br>"+
  // "<br>"+
  // "Markup : <br>"+
  // "Biaya Non Produksi          : Rp "++"<br>"+
  // "Laba yang diharapkan        : Rp "++"<br>"+
  // "    Jumlah                  : Rp "++"<br>"+
  // "    Biaya Produksi          : Rp "++"<br>"+
  // "    Presentase markup       : "++" %<br>"+
  // "<br>"+
  // "Perhitungan Harga Jual <br>"+
  // "Biaya Produksi              : Rp "++"<br>"+
  // "Markup                      : "++" %<br>"+
  // "    Total                   : "+;

  // for (var i = 0; i < data_bnp.length; i++) {
  //   var $tr=$("<tr></tr>");
  //   $tr.append($("<td></td>").html(data_bnp[i].bnp));
  //   $tr.append($("<td></td>").html("Rp <p style=\"float:right;\">"+data_bnp[i].b_bnp+"</p>"));
  //   $tr.append("<button style=\"padding:0;\" onclick=\"delete_array_bnp("+i+");\"><i class=\"trash icon\"></button>");
  //   $tableF.append($tr);
  // }
  // $('#hasil').val('markup');
}

// Calendar
$('#ftgl1').calendar({
  type: 'date'
});
$('#ftgl2').calendar({
  type: 'date'
});

var totbtkl=0;

function htd(){
  var gpb=0;
  var gph=0;
  var ret=false;
    var hari=24*60*60*1000;
    var tgl=new Date(Date.parse($("#tglm").val()));
    var tgl2=new Date(Date.parse($("#tgls").val()));
    var jhari=Math.round(Math.round(tgl2.getTime()-tgl.getTime())/hari);
    var bulan=tgl2.getMonth() - tgl.getMonth() + (12 * (tgl2.getFullYear() - tgl.getFullYear()));
    // var x=hitung;
    // document.getElementById("o").innerHTML=bulan+" bulan "+(jhari/7).toFixed(0)+" minggu "+(jhari%7)+" hari ";
    // if (hitung%7>0) {
    //   alert(hitung+"\n"+(hitung/7));
    // }
    // alert();
    // alert($("#xxxx").val());
    if (jhari>=0) {
      ret=true;
      for (var i = 0; i < data_btkl.length; i++) {
        gpb=gpb+(data_btkl[i].gb*data_btkl[i].jp);
        // console.log(gpb);
        gph=gph+(((data_btkl[i].gb*data_btkl[i].jp)/30));
        // console.log(gph);
      }
      totbtkl=((bulan*gpb)+((jhari+1)*gph)).toFixed(0);
      // console.log(totbtkl);
      document.getElementById("ket").innerHTML="Total biaya tenaga kerja langsung periode "+
      $("#tglm").val()+" sampai "+$("#tgls").val() +" adalah Rp "+totbtkl;
    }
    return ret;
    // alert(tgl2.getTime()+"\n"+Date.parse($("#tglm").val()));
}

$("#print").click(function(event) {
  /* Act on the event */
  rumus();
  $("#m_print").modal("show");
});

$("#bt_brint").click(function(event) {
  /* Act on the event */
  $.post("col/col3.php",{hpp_fc:$('.hppsF').text(),hpp_vc:$('.hppsV').text(),hj_fc:$('.hjsF').text(),hj_vc:$('.hjsV').text()},function(data) {
    $("#body").html(data)
  });
});

// Simpan
$('#simpan').click(function(event) {
  /* Act on the event */
  if ((data_bbb.length!=0)||(data_btkl.length!=0)
      ||(data_bnp.length!=0)||(data_bo.length!=0)) {
      setTransaksi();
      setBiaya_bb();
      setBiaya_non_produksi();
      setBiaya_overhead();
      setBiaya_tenaga_kerja();
  } else {
      alert("Data masih belum lengkap");
  }

});
var today=new Date();
var tanggalm=new Date($("#tglm").val());
var tanggals=new Date($("#tgls").val());
var tgm=tanggalm.getFullYear()+"-"+tanggalm.getMonth()+"-"+tanggalm.getDate();
var tgs=tanggals.getFullYear()+"-"+tanggals.getMonth()+"-"+tanggals.getDate();
var nom=""+today.getYear()+parseInt(today.getMonth()+1)+today.getDate()+today.getHours()+today.getMinutes()+today.getSeconds();
var id_trs=nom.replace("1","");
$("#no_trans").text(id_trs);
// alert(id_trs);
function setTransaksi(){
  // for (var i = 0; i < data_bbb.length; i++) {
  $.post("models/setTransaksi.php",
  {
    id_transaksi:parseInt($("#no_trans").text()),
    tgl_mulai:tgm,
    tgl_selesai:tgs,
    // id_petugas:$("#id_admin").val(),
    id_petugas:1,
    laba:$("#jml_laba").val()
  },function(data){
    console.log(data);
  });
  // }
}

function setBiaya_bb(){
  for (var i = 0; i < data_bbb.length; i++) {
    $.post("models/setBiaya_bb.php",
    {
      id_transaksi:parseInt($("#no_trans").text()),
      keterangan:data_bbb[i].bb,
      biaya:data_bbb[i].bbb
    },function(data){
      console.log(data);
    });
  }
}

function setBiaya_non_produksi(){
  for (var i = 0; i < data_bnp.length; i++) {
    $.post("models/setBiaya_non_produksi.php",
    {
      id_transaksi:parseInt($("#no_trans").text()),
      keterangan:data_bnp[i].bnp,
      biaya:data_bnp[i].b_bnp
    },function(data){
      console.log(data);
    });
  }
}

function setBiaya_overhead(){
  for (var i = 0; i < data_bo.length; i++) {
    $.post("models/setBiaya_overhead.php",
    {
      id_transaksi:parseInt($("#no_trans").text()),
      keterangan:data_bo[i].bbb_bo,
      jenis_biaya:data_bo[i].jenis_biaya,
      biaya:data_bo[i].biaya_bo
    },function(data){
      console.log(data);
    });
  }
}

function setBiaya_tenaga_kerja(){
  for (var i = 0; i < data_btkl.length; i++) {
    $.post("models/setBiaya_tenaga_kerja.php",
    {
      id_transaksi:parseInt($("#no_trans").text()),
      jumlah:data_btkl[i].jp,
      // keterangan:data_btkl[i].ket,
      keterangan:"sss",
      gaji:data_btkl[i].gb,
      jam_kerja:data_btkl[i].wk
    },function(data){
      console.log(data);
    });
  }
}

$("#buka").click(function(event) {
    $.getJSON("models/getBiaya_bb.php",function (data) {
      console.log(data[0].biaya);
    })
});

// Profile
$("#admin").click(function(event) {
  /* Act on the event */
  $("#m_profile").css("display","block");
});

// End Profile
// window.open('mailto:test@example.com');
