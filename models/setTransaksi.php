<?php
  $id_transaksi=$_POST['id_transaksi'];
  $tgl_mulai=$_POST['tgl_mulai'];
  $tgl_selesai=$_POST['tgl_selesai'];
  $id_petugas=$_POST['id_petugas'];
  $laba=$_POST['laba'];
  include_once ("../conf/connection.php");
  $Model->setTransaksi($id_transaksi,$tgl_mulai, $tgl_selesai, $id_petugas, $laba);
 ?>
