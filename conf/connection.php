<?php
  try {
    include_once ("config.php");
    $con=new PDO("$dbtype:host=".$dbhost.";dbname=".$dbname."",$dbuser,$dbpass);
    $con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
  } catch (PDOException $e) {
    echo $e->getMessage();
  }

  include_once ('../classes/Model.php');
  $Model=new Model($con);
 ?>
