<?php
  $id_transaksi=$_POST['id_transaksi'];
  $keterangan=$_POST['keterangan'];
  $biaya=$_POST['biaya'];
  include_once ("../conf/connection.php");
  $Model->setBiaya_non_produksi($id_transaksi, $keterangan, $biaya);
 ?>
