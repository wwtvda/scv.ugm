import React from "react";
import { Form, Input } from "antd";
import { DatePicker } from "@/components/CustomAntd";

export default function LeadForm({ isUpdateForm = false }) {
  return (
    <>
      <Form.Item
        label="Nama Pasien"
        name="nama_pasien"
        rules={[
          {
            required: true,
            message: "Masukkan nama Pasien!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="tempat"
        label="Tempat Terjadinya Kontak Erat"
        rules={[
          {
            required: true,
            message: "Masukkan Tempat terjadinya!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="deskripsi"
        label="Deskripsi"
      >
        <Input />
      </Form.Item>
    </>
  );
}
