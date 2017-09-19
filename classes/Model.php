<?php
  /**
   *
   */
  class Model
  {
    private $x;
    function __construct($argument)
    {
      # code...
      $this->x=$argument;
    }

    public function getBiaya_bb()
    {
      # code...
      $query="select * from biaya_bb";
      $stmt=$this->x->prepare($query);
      $stmt->execute();
      return $stmt;
    }

    public function getBiaya_non_produksi()
    {
      # code...
      $query="select * from biaya_non_produksi";
      $stmt=$this->x->prepare($query);
      $stmt->execute();
      return $stmt;
    }

    public function getBiaya_overhead()
    {
      # code...
      $query="select * from biaya_overhead";
      $stmt=$this->x->prepare($query);
      $stmt->execute();
      return $stmt;
    }

    public function getBiaya_tenaga_kerja()
    {
      # code...
      $query="select * from biaya_tenaga_kerja";
      $stmt=$this->x->prepare($query);
      $stmt->execute();
      return $stmt;
    }

    public function getTransaksi()
    {
      # code...
      $query="select * from transaksi";
      $stmt=$this->x->prepare($query);
      $stmt->execute();
      return $stmt;
    }

    public function getPetugas()
    {
      # code...
      $query="SELECT * FROM petugas";
      $stmt=$this->x->prepare($query);
      $stmt->execute();
      return $stmt;
    }

    public function setBiaya_bb($id_transaksi, $keterangan, $biaya)
    {
      # code...
      $query="INSERT INTO biaya_bb VALUES ('0', '$id_transaksi', '$keterangan', '$biaya')";
      $stmt=$this->x->prepare($query);
      $stmt->execute();
      return $stmt;
    }

    public function setBiaya_non_produksi($id_transaksi, $keterangan, $biaya)
    {
      # code...
      $query="INSERT INTO biaya_non_produksi VALUES ('0','$id_transaksi', '$keterangan', '$biaya')";
      $stmt=$this->x->prepare($query);
      $stmt->execute();
      return $stmt;
    }

    public function setBiaya_overhead($id_transaksi, $keterangan, $jenis_biaya, $biaya)
    {
      # code...
      $query="INSERT INTO biaya_overhead VALUES ('0','$id_transaksi', '$keterangan', '$jenis_biaya', '$biaya')";
      $stmt=$this->x->prepare($query);
      $stmt->execute();
      return $stmt;
    }

    public function setBiaya_tenaga_kerja($id_transaksi, $jumlah, $keterangan, $gaji, $jam_kerja)
    {
      # code...
      $query="INSERT INTO biaya_tenaga_kerja VALUES ('0','$id_transaksi', '$jumlah', '$keterangan', '$gaji', '$jam_kerja')";
      $stmt=$this->x->prepare($query);
      $stmt->execute();
      return $stmt;
    }

    public function setTransaksi($id_transaksi,$tgl_mulai, $tgl_selesai, $id_petugas, $laba)
    {
      # code...
      $query="INSERT INTO transaksi VALUES ('$id_transaksi','$tgl_mulai', '$tgl_selesai', '$id_petugas', '$laba')";
      $stmt=$this->x->prepare($query);
      $stmt->execute();
      return $stmt;
    }

    public function updatePetugas($pass,$email)
    {
      # code...
      $query="update petugas set pass='".$pass."' where email='".$email."'";
      $stmt=$this->x->prepare($query);
      $stmt->execute();
      return $stmt;
    }

    public function updatePetugas2($id_petugas, $nama, $email, $pass)
    {
      # code...
      $query="UPDATE petugas SET nama='".$nama."', email='".$email."', pass='".$pass."' WHERE id_petugas='".$id_petugas."'";
      $stmt=$this->x->prepare($query);
      $stmt->execute();
      return $stmt;
    }
  }

 ?>
