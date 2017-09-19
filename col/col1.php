<div class="">
  <div class="ui four column grid">
    <div class="column">
      <p>Tanggal Mulai</p>
      <div class="ui calendar" id="ftgl1" >
        <div class="ui input left icon" >
          <i class="calendar icon" ></i>
          <input class="incol1" type="text" placeholder="Tanggal Mulai" id="tglm">
        </div>
      </div>
    </div>
    <div class="column">
      <p>Tanggal Selesai</p>
      <div class="ui calendar" id="ftgl2" >
        <div class="ui input left icon" >
          <i class="calendar icon" ></i>
          <input class="incol1" type="text" placeholder="Tanggal Selesai" id="tgls">
        </div>
      </div>
    </div>
    <div class="column">
      <p>Jumlah</p>
      <div class="ui input">
        <input class="incol1" id="jml" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" type="text" placeholder="">
      </div>
    </div>
    <div class="column">
      <p>Laba yang diharapkan</p>
      <div class="ui input">
        <input class="incol1" placeholder="%" id="jml_laba" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" type="text" placeholder="">
      </div>
    </div>
  </div>
</div>
<br>
<!-- Biaya Bahan Baku -->
<!-- <p id="hasil"></p> -->
<!-- <button type="button" onclick="rumus()" name="button"></button> -->
<p><b>Biaya Bahan Baku</b></p>
<table class="ui column table">
  <thead>
    <tr>
      <th>Bahan Baku</th>
      <th>Biaya</th>
      <th></th>
    </tr>
  </thead>
  <tbody id="tb_bbb">
    <!-- <tr>
      <td>sda</td>
      <td>dfs</td>
    </tr> -->
  </tbody>
  <tfoot>
    <tr>
      <th id="xxx">Total Biaya Bahan Baku</th>
      <th >Rp <p id="total_bbb" style="float:right;">123986500</p></th>
      <th></th>
    </tr>
  </tfoot>
</table>
<div style="text-align: right;">
    <button type="button" name="button" id="add_bbb">ADD</button>
</div>
<!-- Modal Input Biaya Bahan Baku -->
    <div id="m_bbb" class="ui modal" style="overflow:scroll; height:400px;">
      <table class="table ui segments">
        <thead>
          <tr>
            <th>Bahan Baku</th>
            <th>Biaya</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="isiBody_bbb">
        </tbody>
        <tr id="isi">
          <form id="frm_bbb">
            <td><input type="text" name="" class="input ui segments" id="bbaku" value="" onkeypress="return chk_bbb(event)"></td>
            <td>Rp <input type="text" name="" class="input ui segments" id="biaya_bbaku" value="" onkeypress="return chk_bbb(event)"></td>
          </form>
        </tr>
      </table>
      <div class="actions">
        <div class="ui black deny button">
          Cencel
        </div>
        <div class="ui positive right labeled icon button" id="dn_bbb">
          Done
          <i class="checkmark icon"></i>
        </div>
      </div>
    </div>
<!-- End Modal Input Biaya Bahan Baku -->
<!-- ============================================================== -->
<br>

<!-- Biaya Tenaga Kerja Langsung -->
<div class="" id="div_btkl" style="overflow:scroll; width:100%;">
  <p><b>Biaya Tenaga Kerja Langsung</b></p>
  <table class="ui column table">
    <thead>
      <tr>
        <th>Jumlah Pekerja</th>
        <th>Jumlah Jam Kerja(per bulan)</th>
        <th>Gaji Bulanan</th>
        <th>Upah per Jam</th>
        <th>Upah per Hari</th>
        <th>Upah per Minggu</th>
        <th></th>
      </tr>
    </thead>
    <tbody id="tb_btkl">
      <!-- <tr>
        <td>4</td>
        <td>10000000</td>
        <td>200000</td>
        <td>200000</td>
        <td>300000</td>
      </tr> -->
      <!-- <tr>
        <td>sda</td>
        <td>dfs</td>
      </tr> -->
    </tbody>
    <tfoot>
      <tr>
        <th colspan="7"><p id="ket"></p></th>
      </tr>
    </tfoot>
  </table>
  <!-- <p id="ket"></p> -->
  <div style="text-align: right;">
      <button type="button" name="button" id="add_btkl">ADD</button>
  </div>
</div>

<!-- Modal Input Biaya Tenaga Kerja Langsung -->
    <div id="m_btkl" class="ui modal" style="overflow:scroll; height:400px;">
      <table class="table ui segments">
        <thead>
          <tr>
            <th>Jumlah Pekerja</th>
            <th>Gaji Bulanan (per orang)</th>
            <th>Jumlah Jam Kerja (per hari)</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="isiBody_btkl">
        </tbody>
        <tr id="tb_btkl">
          <form id="frm_btkl">
            <td><input type="text" name="" class="input ui segments chk_biaya" id="in_jp" value="" onkeypress="return chk_BTKL(event)"></td>
            <td>Rp <input type="text" name="" class="input ui segments chk_biaya" id="in_gp" value="" onkeypress="return chk_BTKL(event)"></td>
            <td><input type="text" name="" class="input ui segments chk_biaya" id="in_wk" value="" onkeypress="return chk_BTKL(event)"></td>
          </form>
        </tr>
      </table>
      <div class="actions">
        <div class="ui black deny button">
          Cencel
        </div>
        <div class="ui positive right labeled icon button" id="dn_btkl">
          Done
          <i class="checkmark icon"></i>
        </div>
      </div>
    </div>
<!-- End Modal Input Biaya Tenaga Kerja Langsung -->
<!-- ============================================================== -->
<br>

<!-- Biaya Overhead -->

<p><b>Biaya Overhead</b></p>
<table class="ui colom table">
  <thead>
    <tr>
      <th rowspan="2" align="center">Biaya Overhead</th>
      <th colspan="2" align="center">Jumlah</th>
      <th rowspan="2" align="center">Total Biaya Overhead</th>
    </tr>
    <tr>
      <th>Biaya Tetap</th>
      <th>Biaya Variable</th>
    </tr>
  </thead>
  <tbody id="tb_bo">
    <!-- <tr>
      <td>sda</td>
      <td>dfs</td>
    </tr> -->
  </tbody>
  <tfoot>
    <tr>
      <th colspan="">Total</th>
      <th colspan="">Rp <p id="tot_bt" style="float:right; padding:0;">1715000</p></th>
      <th colspan="">Rp <p id="tot_bv" style="float:right; padding:0;">9956600</p></th>
      <th colspan="2">Rp <p id="total_bo" style="float:right; padding:0;">11671600</p></th>
    </tr>
  </tfoot>
</table>
<div style="text-align: right;">
    <button type="button" name="button" id="add_bo">ADD</button>
</div>
<!-- Modal Input Biaya Overhead -->
    <div id="m_bo" class="ui modal" style="overflow:scroll; height:400px;">
      <table class="table ui segments">
        <thead>
          <tr>
            <th>Bahan Baku</th>
            <th>Biaya</th>
            <th>Jenis Biaya</th>
          </tr>
        </thead>
        <tbody id="isiBody_bo">
        </tbody>
        <form id="myForm">
        <tr>
          <td><input type="text" name="" class="input ui segments" id="bbb_bo" value="" onkeypress="return chk_BO(event)"></td>
          <td>Rp <input type="text" name="" class="input ui segments chk_biaya" id="biaya_bo" value="" onkeypress="return chk_BO(event)"></td>
          <td><select class="input ui segments" name="" id="jenis_biaya" onkeypress="return chk_BO(event)">
            <option value="pilih">Pilih</option>
            <option value="tetap">Biaya Tetap</option>
            <option value="variable">Biya Variable</option>
          </select></td>
        </form>
      </tr>
      </table>
      <div class="actions">
        <div class="ui black deny button">
          Cencel
        </div>
        <div class="ui positive right labeled icon button" id="dn_bo">
          Done
          <i class="checkmark icon"></i>
        </div>
      </div>
    </div>
<!-- End Modal Input Biaya Overhead -->
<!-- ============================================================== -->
<br>

<!-- Biaya Non Produksi -->

<p><b>Biaya Non Produksi</b></p>
<table class="ui column table">
  <thead>
    <tr>
      <th>Nama</th>
      <th>Biaya</th>
    </tr>
  </thead>
  <tbody id="tb_bnp">
    <!-- <tr>
      <td>sda</td>
      <td>dfs</td>
    </tr> -->
  </tbody>
  <tfoot>
    <tr><th>Total Biaya Non Produksi</th>
    <th>Rp <p id="total_bnp" style="float:right; padding:0;" value="0">8930533</p></th>
  </tr></tfoot>
</table>
<div style="text-align: right;">
    <button type="button" name="button" id="add_bnp">ADD</button>
</div>
<!-- Modal Input Biaya Non Produksi -->
    <div id="m_bnp" class="ui modal" style="overflow:scroll; height:400px;">
      <table class="table ui segments">
        <thead>
          <tr>
            <th>Bahan Baku</th>
            <th>Biaya</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="isiBody_bnp">
        </tbody>
        <tr id="">
          <form id="frm_BNP">
            <td><input type="text" name="" class="input ui segments" id="in_bnp" value="" onkeypress="return chk_bnp(event)"></td>
            <td>Rp <input type="text" name="" class="input ui segments chk_biaya" id="in_biaya_bnp" value="" onkeypress="return chk_bnp(event)"></td>
          </form>
        </tr>
      </table>
      <div class="actions">
        <div class="ui black deny button">
          Cencel
        </div>
        <div class="ui positive right labeled icon button" id="dn_bnp">
          Done
          <i class="checkmark icon"></i>
        </div>
      </div>
    </div>
<!-- End Modal Input Biaya Non Produksi -->
<!-- ============================================================== -->
