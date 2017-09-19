<script src="../js/jquery.min.js" charset="utf-8"></script>
<script type="text/javascript">
var date=new Date();
var dn=date.getTime();
$.post("setTransaksi.php",
{
  id_transaksi:dn,
  tgl_mulai:"0000-00-00",
  tgl_selesai:"0000-00-00",
  id_petugas:1,
  laba:1
},function (data) {
  console.log(data);
});
</script>
