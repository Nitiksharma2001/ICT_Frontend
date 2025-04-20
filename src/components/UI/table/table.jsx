import { Table } from 'antd'
import React from 'react'

export default function TableJSX({ dataSource, columns, title }) {
  return <Table dataSource={dataSource} columns={columns} title={() => <div>{title}</div>} />
}
