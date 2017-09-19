<?php
  $id_transaksi=$_POST['id_transaksi'];
  $jumlah=$_POST['jumlah'];
  $keterangan=$_POST['keterangan'];
  $gaji=$_POST['gaji'];
  $jam_kerja=$_POST['jam_kerja'];
  include_once ("../conf/connection.php");
  $Model->setBiaya_tenaga_kerja($id_transaksi, $jumlah, $keterangan, $gaji, $jam_kerja);
 ?>
