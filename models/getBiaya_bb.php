<?php
  include_once ("../conf/connection.php");
  if ($Model->getBiaya_bb()) {
    # code...
    $data=array();
    foreach ($Model->getBiaya_bb() as $key) {
      # code...
      $data[]=$key;
    }
    echo json_encode($data);
  }
 ?>
