import React from 'react'
import MainWrapper from '../main'
import Accordion from '../../components/UI/accordion/accordion'
import { engineNames } from '../../utils/constants'
import { Space } from 'antd'

const item_ex = engineNames.map((engine, index) => [
  {
    key: index,
    label: engine.title,
    children: <p>hi</p>,
  },
])
export default function ParameterInput() {
  return (
    <MainWrapper title={'view parameters'}>
      <Space direction='vertical' size='large' style={{ width: '100%', padding: '2px 10px 2px 10px' }}>
        {item_ex.map((engine) => (
          <Accordion items={engine} />
        ))}
      </Space>
    </MainWrapper>
  )
}
