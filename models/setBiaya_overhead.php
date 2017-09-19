<?php
  $id_transaksi=$_POST['id_transaksi'];
  $keterangan=$_POST['keterangan'];
  $jenis_biaya=$_POST['jenis_biaya'];
  $biaya=$_POST['biaya'];
  include_once ("../conf/connection.php");
  $Model->setBiaya_overhead($id_transaksi, $keterangan, $jenis_biaya, $biaya);
 ?>
