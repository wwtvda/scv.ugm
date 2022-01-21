import React from "react";

import CrudModule from "@/modules/CrudModule";
import LeadForm from "@/forms/LeadForm";

function Lead() {
  const entity = "tracing";
  const searchConfig = {
    displayLabels: ["client"],
    searchFields: "client,email,phone",
    outputValue: "_id",
  };

  const panelTitle = "Panel Tracing";
  const dataTableTitle = "List Tracing";
  const entityDisplayLabels = ["client"];

  const readColumns = [
    {
      title: "Nama Pasien",
      dataIndex: "nama_pasien",
    },
    {
      title: "Tempat",
      dataIndex: "tempat",
    },
    {
      title: "Deskripsi Tracing",
      dataIndex: "deskripsi",
    },
  ];
  const dataTableColumns = [
    {
      title: "Nama Pasien",
      dataIndex: "nama_pasien",
    },
    {
      title: "Tempat",
      dataIndex: "tempat",
    },
    {
      title: "Deskripsi Tracing",
      dataIndex: "deskripsi",
    },
  ];

  const ADD_NEW_ENTITY = "Tambah entri baru";
  const DATATABLE_TITLE = "List Tracing";
  const ENTITY_NAME = "Tracing";
  const CREATE_ENTITY = "Create lead";
  const UPDATE_ENTITY = "Update lead";
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
    <CrudModule
      createForm={<LeadForm />}
      updateForm={<LeadForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default Lead;
