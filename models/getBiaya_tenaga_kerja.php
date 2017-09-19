<?php
  include_once ("../conf/connection.php");
  if ($Model->getBiaya_tenaga_kerja()) {
    # code...
    $data=array();
    foreach ($Model->getBiaya_tenaga_kerja() as $key) {
      # code...
      $data[]=$key;
    }
    echo json_encode($data);
  }
 ?>
