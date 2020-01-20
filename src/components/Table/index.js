import React from "react";
import { Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Region',
    dataIndex: 'region',
    key: 'region',
  },
  {
    title: 'Class',
    dataIndex: 'featureclass',
    key: 'featureclass',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a>Center Map in {record.name}</a>
      </span>
    ),
  },
];

const TableMap = ({data}) => 
  <Table columns={columns} dataSource={data} />

  export default TableMap