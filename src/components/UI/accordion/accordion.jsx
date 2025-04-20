import { Collapse } from 'antd'
import React from 'react'

const accordionStyle = {
  boxShadow: '0px 2px 16px 0px rgba(0, 0, 0, 0.1)',
  backgroundColor: 'white',
  fontSize: '14px',
  fontWeight: 600,
  borderRadius: '8px',
  border: '1px',
}
export default function Accordion({ items }) {
  return <Collapse style={accordionStyle} items={items} expandIconPosition='end' size='large' />
}
