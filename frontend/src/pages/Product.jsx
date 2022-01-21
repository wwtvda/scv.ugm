import React from "react";

import CrudModule from "@/modules/CrudModule";
import ProductForm from "@/forms/ProductForm";

function Product() {
  const entity = "vacc";
  const searchConfig = {
    displayLabels: ["productName"],
    searchFields: "productName",
    outputValue: "_id",
  };

  const panelTitle = "Kegiatan Vaksinasi";
  const dataTableTitle = "List Vaksinasi";
  const entityDisplayLabels = ["productName"];

  const readColumns = [
    {
      title: "Pelaksana Kegiatan",
      dataIndex: "pelaksana",
    },
    {
      title: "Tanggal Pelaksanaan",
      dataIndex: "tanggal",
    },
    {
      title: "Lokasi Vaksin",
      dataIndex: "lokasi",
    },
    {
      title: "Jenis Vaksin",
      dataIndex: "jenis",
    },
    {
      title: "Jumlah Dosis",
      dataIndex: "jumlah",
    },
    {
      title: "Total Penerima Vaksin",
      dataIndex: "total",
    },
    {
      title: "Deskripsi Kegiatan",
      dataIndex: "deskripsi",
    },
  ];
  const dataTableColumns = [
    {
      title: "Pelaksana Kegiatan",
      dataIndex: "pelaksana",
    },
    {
      title: "Lokasi Vaksin",
      dataIndex: "lokasi",
    },
    {
      title: "Jenis Vaksin",
      dataIndex: "jenis",
    },
    {
      title: "Jumlah Dosis",
      dataIndex: "jumlah",
    },
  ];

  const ADD_NEW_ENTITY = "Add new product";
  const DATATABLE_TITLE = "products List";
  const ENTITY_NAME = "vacc";
  const CREATE_ENTITY = "Create product";
  const UPDATE_ENTITY = "Update product";
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
      createForm={<ProductForm />}
      updateForm={<ProductForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default Product;
