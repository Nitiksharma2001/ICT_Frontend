import React from 'react'
import MainWrapper from '../main'
import AccordionJSX from '../../components/UI/accordion/accordion'
import TableJSX from '../../components/UI/table/table'
import { engineNames } from '../../utils/constants'
import { Button, Space, Tag } from 'antd'
import { getProducts } from '../../apis/products/products'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tag) => (
      <Tag color={tag === 'done' ? 'green' : 'yellow'} key={tag}>
        {tag.toUpperCase()}
      </Tag>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (record) => (
      <Button disabled={!record} type='link'>
        Link Button
      </Button>
    ),
  },
]
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: 'in progress',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: 'done',
  },
]

const item_ex = engineNames.map((engine, index) => [
  {
    key: index,
    label: <div style={{ fontSize: '14px', fontWeight: 600 }}>{engine.title}</div>,
    children: <TableJSX columns={columns} dataSource={data} />,
  },
])
export default function ParameterInput() {
  getProducts().then((data) => console.log(data))
  return (
    <MainWrapper title={'view parameters'}>
      <Space direction='vertical' size='large' style={{ width: '100%', padding: '2px 10px 2px 10px' }}>
        {item_ex.map((engine) => (
          <AccordionJSX items={engine} />
        ))}
      </Space>
    </MainWrapper>
  )
}
