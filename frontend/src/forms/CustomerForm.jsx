import React from "react";
import { Button, Form, Input, Select } from "antd";
const { Option } = Select;
import { DatePicker } from "@/components/CustomAntd";

export default function CustomerForm({ isUpdateForm = false }) {
  return (
    <>
      <Form.Item
        label="Nama Pasien"
        name="nama_pasien"
        rules={[
          {
            required: true,
            message: "Masukkan nama Pasien",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Nomor Induk Kependudukan"
        name="nik"
        rules={[
          {
            required: true,
            message: "Masukkan NIK Pasien",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Alamat"
        name="alamat"
        rules={[
          {
            required: true,
            message: "Masukkan alamat Pasien",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="No Telepon"
        name="no_hp"
        rules={[
          {
            required: true,
            message: "Masukkan nomor telepon Pasien",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Jenis Kelamin"
        name="jenis_kelamin"
        rules={[
          {
            required: true,
            message: "Please input your surname!",
          },
        ]}
        style={{
          display: "inline-block",
          width: "calc(50%)",
          paddingRight: "5px",
        }}
      >
        <Select
          placeholder="Jenis Kelamin"
          allowClear
        >
          <Option value="Laki-laki">Laki-laki</Option>
          <Option value="Perempuan">Perempuan</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Unit Kerja/Fakultas"
        name="unitkerja_fakultas"
        rules={[
          {
            required: true,
            message: "Masukkan Unit Kerja/Fakultas pasien",
          },
        ]}
        style={{
          display: "inline-block",
          width: "calc(50%)",
          paddingLeft: "5px",
        }}
      >
        <Select
          placeholder="Unit Kerja/Fakultas"
          allowClear
        >
          <Option value="Dit. Aset">Dit. Aset</Option>
          <Option value="Dit. Kemahasiswaan">Dit. Kemahasiswaan</Option>
          <Option value="Dit. Kemitraan & Alumni">Dit. Kemitraan & Alumni</Option>
          <Option value="Dit. Keuangan">Dit. Keuangan</Option>
          <Option value="Dit. Pendidikan & Pengajaran">Dit. Pendidikan & Pengajaran</Option>
          <Option value="Dit. Perencanaan">Dit. Perencanaan</Option>
          <Option value="Dit. PKM">Dit. PKM</Option>
          <Option value="Dit. SDM">Dit. SDM</Option>
          <Option value="DSSDI">DSSDIt</Option>
          <Option value="F. Biologi">F. Biologi</Option>
          <Option value="F. Ekonomika & Bisnis">F. Ekonomika & Bisnis</Option>
          <Option value="F. Farmasi">F. Farmasi</Option>
          <Option value="F. Filsafat">F. Filsafat</Option>
          <Option value="F. Geografi">F. Geografi</Option>
          <Option value="F. Hukum">F. Hukum</Option>
          <Option value="F. Ilmu Budaya">F. Ilmu Budaya</Option>
          <Option value="F. Isipol">F. Isipol</Option>
          <Option value="F. Kedokteran Gigi">F. Kedokteran Gigi</Option>
          <Option value="F. Kedokteran Hewan">F. Kedokteran Hewan</Option>
          <Option value="F. Kehutanan">F. Kehutanan</Option>
          <Option value="F. KKMK">F. KKMK</Option>
          <Option value="F. Mipa">F. Mipa</Option>
          <Option value="F. Pertanian">F. Pertanian</Option>
          <Option value="F. Peternakan">F. Peternakan</Option>
          <Option value="F. Psikologi">F. Psikologi</Option>
          <Option value="F. Teknik">F. Teknik</Option>
          <Option value="F. Teknologi Pertanian">F. Teknologi Pertanian</Option>
          <Option value="Hubungan Kelembagaan">Hubungan Kelembagaan</Option>
          <Option value="Humas UGMt">Humas UGM</Option>
          <Option value="Klinik GMC">Klinik GMC</Option>
          <Option value="Klinik Korpagama">Klinik Korpagama</Option>
          <Option value="LL DIKTI">LL DIKTI</Option>
          <Option value="Museum UGM">Museum UGM</Option>
          <Option value="Panitia PPSMB">Panitia PPSMB</Option>
          <Option value="Perpustakaan UGM">Perpustakaan UGM</Option>
          <Option value="PK4L UGM">PK4L UGM</Option>
          <Option value="PUI UGM">PUI UGM</Option>
          <Option value="PUKAT UGM">PUKAT UGM</Option>
          <Option value="RSA UGM">RSA UGM</Option>
          <Option value="RSUP Dr. Sardjito">RSUP Dr. Sardjito</Option>
          <Option value="Sekolah Pascasarjana">Sekolah Pascasarjana</Option>
          <Option value="Sekolah Vokasi">Sekolah Vokasi</Option>
          <Option value="UC UGM">UC UGM</Option>
          <Option value="UGM">UGM</Option>
          <Option value="UGM Residence">UGM Residence</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="onset"
        label="Tanggal Onset"
        rules={[
          {
            required: true,
            message: "masukkan Tanggal Onset",
          },
        ]}
        style={{
          display: "inline-block",
          width: "calc(50%)",
          paddingRight: "9px",
        }}
      >
        <DatePicker format={"DD/MM/YYYY"} />
      </Form.Item>
      <Form.Item
        name="status"
        label="Status"
        rules={[
          {
            required: true,
            message: "Pilih Status pasien",
          },
        ]}
        style={{
          display: "inline-block",
          width: "calc(50%)",
          paddingRight: "9px",
        }}
      >
        <Select
          placeholder="Status"
          allowClear
        >
          <Option value="Suspek">Suspek</Option>
          <Option value="Probable">Probable</Option>
          <Option value="Konfirmasi">Konfirmasi</Option>
          <Option value="Kontak Erat">Kontak Erat</Option>
          <Option value="Pelaku Perjalanan">Pelaku Perjalanan</Option>
          <Option value="Discarded">Discarded</Option>
          <Option value="Selesai Isolasi">Selesai Isolasi</Option>
          <Option value="Meninggal Dunia">Meninggal Dunia</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="tindakan"
        label="tindakan"
        rules={[
          {
            required: true,
            message: "Pilih tindakan untuk pasien",
          },
        ]}
        style={{
          display: "inline-block",
          width: "calc(50%)",
          paddingRight: "5px",
        }}
      >
        <Select
          placeholder="Tindakan"
          allowClear
        >
          <Option value="Isolasi Mandiri">Isolasi Mandiri</Option>
          <Option value="Isolasi di Baciro">Isolasi di Baciro</Option>
          <Option value="Perawatan di RSUP Sardjito">Perawatan di RSUP Sardjito</Option>
          <Option value="Pemakaman di Makam UGM Sawit Sari">Pemakaman di Makam UGM Sawit Sari</Option>
          <Option value="Selesai Isolasi">Selesai Isolasi</Option>
        </Select>
      </Form.Item>   
    </>
  );
}
