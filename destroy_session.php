<?php
session_start();
if ($_POST['destroy']!=null&&$_POST['destroy']!="") {
  # code...
  session_destroy();
}
 ?>
