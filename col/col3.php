<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <script src="../js/jquery.min.js"></script>
    <script src="../ui/semantic.min.js" charset="utf-8"></script>
    <!-- <link href="netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet" type="text/css" /> -->
    <link rel="stylesheet" href="../ui/semantic.min.css">
    <link rel="stylesheet" media="mediatype and|not|only (expressions)" href="css/responsive.css">
    <style type="text/css" media="print">
        @page
        {
            size: auto;   /* auto is the initial value */
            margin: 0mm;  /* this affects the margin in the printer settings */
        }
        @media print {
          #btn{
            display: none;
          }
        }
    </style>
    <title></title>
  </head>
  <body>
    <?php if (!isset($_POST['hpp_fc']) || !isset($_POST['hpp_vc'])
              || !isset($_POST['hj_fc']) || !isset($_POST['hj_vc']))
              { header("Location:../"); } ?>
    <div class="ui internally celled grid">

      <div class="row">
        <div class="three wide column">
          <img>
        </div>
        <div class="ten wide column">
          <div class="x">
              <table class="ui celled table">
                <thead>
                  <tr>
                    <th colspan="2">Harga Pokok Produksi</th>
                    <th colspan="2">Harga Jual</th>
                  </tr>
                  <tr>
                    <th><i>Full Costing</i></th>
                    <th><i>Variable Costing</i></th>
                    <th><i>Full Costing</i></th>
                    <th><i>Variable Costing</i></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td ><p class="hppsF"><?php echo $_POST['hpp_fc']; ?></p></td>
                    <td ><p class="hjsF"><?php echo $_POST['hpp_vc']; ?></p></td>
                    <td ><p class="hppsV"><?php echo $_POST['hj_fc']; ?></p></td>
                    <td ><p class="hjsV"><?php echo $_POST['hj_vc']; ?></p></td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </tfoot>
              </table>
            </div>
            <br>
            <div class="" style="text-align: right; width:100%;">
              <div class="ui button" id="btn" onclick="window.print()">print</div>
            </div>
          </div>
        <div class="three wide column">
          <!-- <img> -->
        </div>
      </div>
    </div>
  </body>
</html>
