import { Collapse } from 'antd'
import type { CollapseProps } from 'antd'
import './accordion.css'

const accordionStyle: React.CSSProperties = {
  boxShadow: '0px 2px 16px 0px rgba(0, 0, 0, 0.1)',
  backgroundColor: 'white',
  borderRadius: '8px',
  border: '1px',
  padding: 0,
}
export default function AccordionJSX({ items }: { items: CollapseProps['items'] }) {
  return <Collapse style={accordionStyle} items={items} expandIconPosition='end' size='large' />
}
