import React from "react";
import { Form, Input, Select } from "antd";
const { Option } = Select;

export default function AdminForm({ isUpdateForm = false }) {
  return (
    <>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Harap mengisi username!",
          },
        ]}
      >
        <Input autoComplete="off" />
      </Form.Item>
      {!isUpdateForm && (
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input type="password" autoComplete="off" />
        </Form.Item>
      )}

      <Form.Item
        label="Nama Pemegang Akun"
        name="name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input autoComplete="off" />
      </Form.Item>
      <Form.Item
        label="User Type"
        name="user_type"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Pilih tipe akun"
          allowClear
        >
          <Option value="Komandan">Komandan</Option>
          <Option value="Operator">Operator</Option>
          <Option value="Admin">Admin</Option>
        </Select>
      </Form.Item>
    </>
  );
}

//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDI2MDY0NzQsImlkIjoiNjBiNGUyODJlYjMxNGIwMDE1ZmFmMmE5IiwiaWF0IjoxNjQyNTIwMDc0fQ.gr2NF7vSfRCF87YXhybSxYMhRtXlQqKyHg8ANYR1Iuc"
/**
 * {current: {id: "60b4e282eb314b0015faf2a9", name: "admin", isLoggedIn: true}, loading: false,…}
current: {id: "60b4e282eb314b0015faf2a9", name: "admin", isLoggedIn: true}
id: "60b4e282eb314b0015faf2a9"
isLoggedIn: true
name: "admin"
isLoggedIn: true
loading: false
 */