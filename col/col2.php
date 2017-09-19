<p>Harga Mutiara PT. Autore Pearl Culture</p>
<div class="" id="col2">
  <div class="" style="height:95%;">
    <div class="ui segment" style="width:100%;">
      <p>Harga Pokok Produksi dan Harga Jual Pendekatan <i>Full Costing</i></p>
      <table id="hasilF"></table>
    </div>
    <div class="ui segment" style="width:100%;">
      <p>Harga Pokok Produksi dan Harga Jual Pendekatan <i>Variable Costing</i></p>
      <table id="hasilV"></table>
    </div>
  </div>
</div>

<button type="button" name="button" onclick="rumus()" id="print">Lihat Laporan</button>
<button type="button" name="button" id="simpan">Simpan</button>
<button type="button" name="button" id="buka">Buka</button>

<!-- Print -->
<div id="m_print" class="ui modal">
  <div id="d_print" class="x" style="overflow:scroll; height:400px;">
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
        <td ><p class="hppsF"></p></td>
        <td ><p class="hppsV"></p></td>
        <td ><p class="hjsF"></p></td>
        <td ><p class="hjsV"></p></td>
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
  <div class="actions" style="text-align: right">
    <div class="ui buttons">
      <button class="ui positive button" id="bt_brint">Print
        <i class="print icon"></i>
      </button>
      <div class="or"></div>
      <button class="ui black deny button">Cancel
        <i class="cancel icon"></i>
      </button>
    </div>
  </div>

</div>
