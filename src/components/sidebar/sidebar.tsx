import { useState } from 'react'
import { Flex, Layout } from 'antd'
import { iconsDetails, IconType, sidebarKeys } from '../../utils/icons'
import { useLocation } from 'react-router-dom'
import IconOverlay from '../UI/icons/icons-overlay'

const { Sider } = Layout

const siderStyle: React.CSSProperties = {
  height: '100vh',
  position: 'sticky',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
  backgroundColor: '#F8F9FA',
  zIndex: 10,
}

export default function SidebarJSX() {
  return (
    <Sider width='80px' style={siderStyle}>
      <Flex
        vertical
        align='center'
        justify='space-between'
        gap='10px'
        style={{
          height: '100%',
          padding: '24px 0 24px 0',
        }}
      >
        <IconOverlay item={iconsDetails.find((icon) => icon.key === 'tredence-icon')} type='clicked' />

        <Flex
          vertical
          align='center'
          justify='center'
          style={{
            padding: '2px',
            backgroundColor: '#F8F9FA',
            borderRadius: '16px',
            boxShadow: '0px 2px 16px 0px rgba(0, 0, 0, 0.1)',
          }}
        >
          {iconsDetails
            .filter(({ key }) => sidebarKeys.includes(key))
            .map((icon) => (
              <HoveredIcon icon={icon} />
            ))}
        </Flex>
        <Flex vertical gap='10px'>
          <HoveredIcon icon={iconsDetails.find((icon) => icon.key === 'help-icon')} />
          <IconOverlay item={iconsDetails.find((icon) => icon.key === 'avatar-icon')} />
        </Flex>
      </Flex>
    </Sider>
  )
}

function HoveredIcon({ icon }: { icon?: IconType }) {
  const currentRoute = useLocation()['pathname']
  const [hoverKey, setHoverKey] = useState('')

  if (!icon) return <></>

  return (
    <div
      key={icon.key}
      onMouseEnter={() => setHoverKey(icon.key)}
      onMouseLeave={() => setHoverKey('')}
      style={{ display: 'relative' }}
    >
      {hoverKey === icon.key && <IconOverlay item={icon} type='hovered' position='absolute' />}
      <IconOverlay item={icon} type={currentRoute === icon.route ? 'clicked' : 'default'} />
    </div>
  )
}
