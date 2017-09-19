<div id="m_profile">
  <div id="cm_profile">
    <table class="ui table" style="width:100%">
      <thead>
        <tr>
          <th colspan="3">
            Profil Petugas
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ID</td>
          <td>:</td>
          <td><p id="ket_id"></p></td>
        </tr>
        <tr>
          <td>Nama</td>
          <td>:</td>
          <td>
            <div class="ui input" onkeypress="if (event.keyCode == 13) {
              $.post(
                'models/updatePetugas.php',
                {
                  id:$('#ket_id').text(),
                  name:$('#ket_name').val(),
                  email:$('#ket_email').val(),
                  pass:$.md5($('#ket_input').val())
                },function(data,status){
                  // console.log(data);
                  console.log(data);
                }
              );$('#ket_name').attr('disabled',true);
            }" ondblclick="$('#ket_name').attr('disabled',false);" style="float:left">
            <input id="ket_name" value="nansn" disabled>
            </div>
          </td>
        </tr>
        <tr>
          <td>No. HP</td>
          <td>:</td>
          <td>
            <div class="ui input" onkeypress="if (event.keyCode == 13) {
              $.post(
                'models/updatePetugas.php',
                {
                  id:$('#ket_id').text(),
                  name:$('#ket_name').val(),
                  email:$('#ket_email').val(),
                  pass:$.md5($('#ket_input').val())
                },function(data,status){
                  // console.log(data);
                  console.log(data);
                }
              );$('#ket_email').attr('disabled',true);
            }" ondblclick="$('#ket_email').attr('disabled',false);" style="float:left">
            <input id="ket_email" value="ssss" disabled>
            </div>
          </td>
        </tr>
        <tr>
          <td>Password</td>
          <td>:</td>
          <td>
            <div class="ui input" onkeypress="if (event.keyCode == 13){
              if(data_pass!=$('#ket_input').val()){
                $.post(
                  'models/updatePetugas.php',
                  {
                    id:$('#ket_id').text(),
                    name:$('#ket_name').val(),
                    email:$('#ket_email').val(),
                    pass:$.md5($('#ket_input').val())
                  },function(data,status){
                    // console.log(data);
                    console.log(data);
                  }
                );$('#ket_input').attr('disabled',true);
            }
          }" ondblclick="$('#ket_input').attr('disabled',false);" style="float:left">
              <input type="password" id="ket_input" placeholder="Masukkan password yang baru" style="float:left"value="12312" disabled>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="" style="width:100%;height:30px;">
      <div class="ui buttons" style="float:right;margin-right:5px;" onclick="$('#m_profile').css('display','none');">
        <div class="ui button">Close</div>
      </div>
    </div>
  </div>
</div>
