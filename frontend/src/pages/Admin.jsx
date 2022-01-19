import React from "react";

import AdminCrudModule from "@/modules/AdminCrudModule";
import AdminForm from "@/forms/AdminForm";

export default function Admin() {
  const entity = "user";
  const searchConfig = {
    displayLabels: ["name", "surname"],
    searchFields: "username,name,surname",
    outputValue: "_id",
  };

  const panelTitle = "Manajemen User";
  const dataTableTitle = "List User";
  const entityDisplayLabels = ["username"];

  const readColumns = [
    { title: "Nama", dataIndex: "name" },
    { title: "Username", dataIndex: "username" },
    { title: "User Type", dataIndex: "user_type" },
  ];

  const dataTableColumns = [
    { title: "Nama", dataIndex: "name" },
    { title: "Username", dataIndex: "username" },
    { title: "User Type", dataIndex: "user_type" },
  ];
  const ADD_NEW_ENTITY = "Tambah User baru";
  const DATATABLE_TITLE = "List User";
  const ENTITY_NAME = "user";
  const CREATE_ENTITY = "Create user";
  const UPDATE_ENTITY = "Update user";

  const config = {
    entity,
    panelTitle,
    dataTableTitle,
    ENTITY_NAME,
    CREATE_ENTITY,
    ADD_NEW_ENTITY,
    UPDATE_ENTITY,
    DATATABLE_TITLE,
    readColumns,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <AdminCrudModule
      createForm={<AdminForm />}
      updateForm={<AdminForm isUpdateForm={true} />}
      config={config}
    />
  );
}
