<?php
  include_once ("../conf/connection.php");
  if ($Model->getBiaya_non_produksi()) {
    # code...
    $data=array();
    foreach ($Model->getBiaya_non_produksi() as $key) {
      # code...
      $data[]=$key;
    }
    echo json_encode($data);
  }
 ?>
