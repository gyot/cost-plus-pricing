<?php
  // $email=$_POST['email'];
  // $pass=$_POST['pass'];
  include_once('../conf/connection.php');
  // $Model->updatePetugas($pass,$email);

  if (isset($_POST['id'])&&isset($_POST['name']) && isset($_POST['email']) && isset($_POST['pass'])) {
    # code...
    $email=$_POST['email'];
    $pass=$_POST['pass'];
    $id_petugas=$_POST['id'];
    $nama=$_POST['name'];
    $Model->updatePetugas2($id_petugas, $nama, $email, $pass);
    echo "x";
  }elseif (isset($_POST['email']) && isset($_POST['pass'])) {
    # code...
    $email=$_POST['email'];
    $pass=$_POST['pass'];
    $Model->updatePetugas($pass,$email);
    echo "z";
  }
 ?>
