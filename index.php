<!DOCTYPE html>
<?php
  session_start();
 ?>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <script src="js/jquery.min.js"></script>
    <script src="ui/semantic.min.js" charset="utf-8"></script>
    <link rel="stylesheet" href="ui/semantic.min.css">
    <link rel="stylesheet" href="css/responsive.css">
    <link rel="stylesheet" href="font-awesome/css/font-awesome.css">
    <style media="screen">
    </style>
  </head>
  <body id="body">
    <?php
      include_once ("masuk.php");
      include_once ("profile.php");
    ?>
    <div id="acount">
      <?php
        if (isset($_SESSION["id"])) {
          # code...
          echo '<a href="#" id="logout" class="nav">Log Out</a>
                <a href="#" id="id_admin" class="nav">'.$_SESSION["id"].'</a>
                <a href="#" id="admin" class="nav"> '.$_SESSION["user"].' </a>
                <p id="no_trans" class="nav">12312</p>
                <p class="nav">No. Transaksi :</p>';
        }
       ?>
    </div>
    <div id="header">
      <center><p id="pt">PT. <b id="autore">AUTORE</b> PEARL CULTURE</p></center>
      <hr size="100px">
      <hr color="#000">
      </div>
    <br><br>
      <div class="ui three column stackable grid container" style="margin-top:40px;"  id="content">
        <div class="column" style="width:60%;" id="col1">
          <div class="ui segment">
            <?php
              include_once "col/col1.php";
            ?>
          </div>
        </div>
        <div class="column" style="width:40%;">
          <div class="ui segment">
            <?php
            include_once "col/col2.php";
            ?>
          </div>
        </div>
      </div>
      <?php
      // echo $_SESSION["id"];
      if (($_SESSION["user"]=="" || $_SESSION["user"]==null)
          // ||($_SESSION["pass"]=="" || $_SESSION["pass"]==null)
          ||($_SESSION["id"]=="" || $_SESSION["id"]==null)) {
        # code...
        echo '<script>$("#m_login").css("display","block");</script>';
        // echo '<script>alert(id_trs);</script>';
      }
       ?>
  </body>
</html>
<script src="js/script.js" charset="utf-8"></script>
<script src="js/masuk.js" charset="utf-8"></script>
<script src="js/reset_pass.js" charset="utf-8"></script>
<script src="js/jquery.md5.js" charset="utf-8"></script>
<script src="js/profile.js" charset="utf-8"></script>
