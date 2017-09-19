<?php
  include_once ("../conf/connection.php");
  if ($Model->getPetugas()) {
    # code...
    $data=array();
    foreach ($Model->getPetugas() as $key) {
      # code...
      $data[]=$key;
    }
    echo json_encode($data);
  }
 ?>
