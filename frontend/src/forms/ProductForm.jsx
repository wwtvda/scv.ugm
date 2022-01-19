import React from "react";
import { Form, Input, Select } from "antd";
const { Option } = Select;
import { DatePicker } from "@/components/CustomAntd";

export default function ProductForm({ isUpdateForm = false }) {
  return (
    <>
      <Form.Item
        label="Pelaksana Kegiatan"
        name="pelaksana"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Tanggal Pelaksanaan"
        name="tanggal"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <DatePicker format={"DD/MM/YYYY"} />
      </Form.Item>
      <Form.Item
        label="Lokasi Vaksin"
        name="lokasi"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Jenis Vaksin"
        name="jenis"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Jenis Kelamin"
          allowClear
        >
          <Option value="Sinovac">Sinovac</Option>
          <Option value="AstraZeneca">AstraZeneca</Option>
          <Option value="Sinopharm">Sinopharm</Option>
          <Option value="Moderna">Moderna</Option>
          <Option value="Pfizer">Pfizer</Option>
          <Option value="Novavax">Novavax</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Jumlah Dosis"
        name="jumlah"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Total Penerima Vaksin"
        name="total"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Deskripsi Kegiatan"
        name="deskripsi"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
    </>
  );
}
