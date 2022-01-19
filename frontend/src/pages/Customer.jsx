import React from "react";

import CrudModule from "@/modules/CrudModule";
import CustomerForm from "@/forms/CustomerForm";

function Customer() {
  const entity = "pasien";
  const searchConfig = {
    displayLabels: ["nama_pasien", "nik", "jenis_kelamin","alamat","unitkerja_fakultas","no_hp","onset","status","tindakan"],
    searchFields: "nama_pasien,nik,jenis_kelamin,alamat,unitkerja_fakultas, no_hp,onset,status,tindakan",
    outputValue: "_id",
  };

  const panelTitle = "Pasien Suspek Covid-19";
  const dataTableTitle = "List Pasien";
  const entityDisplayLabels = ["pasien"];

  const readColumns = [
    {
      title: "Nama Pasien",
      dataIndex: "nama_pasien",
    },
    {
      title: "Nomor Induk Kependudukan",
      dataIndex: "nik",
    },
    {
      title: "Jenis Kelamin",
      dataIndex: "jenis_kelamin",
    },
    {
      title: "Alamat",
      dataIndex: "alamat",
    },
    {
      title: "Nomor Telepon",
      dataIndex: "no_hp",
    },
    {
      title: "Unit Kerja/Fakultas",
      dataIndex: "unitkerja_fakultas",
    },
    {
      title: "Tanggal Onset",
      dataIndex: "onset",
    },
    {
      title: "status",
      dataIndex: "status",
    },{
      title: "Tindakan",
      dataIndex: "tindakan",
    },
  ];
  const dataTableColumns = [
    {
      title: "Nama Pasien",
      dataIndex: "nama_pasien",
    },
    {
      title: "Jenis Kelamin",
      dataIndex: "jenis_kelamin",
    },
    {
      title: "Unit Kerja/Fakultas",
      dataIndex: "unitkerja_fakultas",
    },
    {
      title: "Tanggal Onset",
      dataIndex: "onset",
    },
    {
      title: "status",
      dataIndex: "status",
    },{
      title: "Tindakan",
      dataIndex: "tindakan",
    },
  ];

  const ADD_NEW_ENTITY = "Tambah pasien baru";
  const DATATABLE_TITLE = "List Pasien";
  const ENTITY_NAME = "Pasien";
  const CREATE_ENTITY = "Buat Entri";
  const UPDATE_ENTITY = "Update Entri";
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
      createForm={<CustomerForm />}
      updateForm={<CustomerForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default Customer;
