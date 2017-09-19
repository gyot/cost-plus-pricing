<?php
  include_once ("../conf/connection.php");
  if ($Model->getTransaksi()) {
    # code...
    $data=array();
    foreach ($Model->getTransaksi() as $key) {
      # code...
      $data[]=$key;
    }
    echo json_encode($data);
  }
 ?>
