<?php
  include_once ("../conf/connection.php");
  if ($Model->getBiaya_overhead()) {
    # code...
    $data=array();
    foreach ($Model->getBiaya_overhead() as $key) {
      # code...
      $data[]=$key;
    }
    echo json_encode($data);
  }
 ?>
