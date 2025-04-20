import React, { useState } from 'react'
import { TredenceIcon } from '../../assets/icons/support-icons'
import { Layout } from 'antd'
import { iconsWithNavigation } from '../../utils/constants'
import IconOverlay from '../UI/icons/icons-overlay'

const { Sider } = Layout

const siderStyle = {
  height: '100vh',
  position: 'sticky',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
  backgroundColor: '#F8F9FA',
}
const logoStyle = {
  width: '46px',
  height: '44px',
  radius: '10px',
  display: 'flex',
  borderRadius: '10px',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
  cursor: 'pointer',
}
export default function SidebarJSX() {
  const [hoverKey, setHoverKey] = useState(null)
  return (
    <Sider width='80px' style={siderStyle}>
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '24px 0 24px 0',
        }}
      >
        <div style={logoStyle}>
          <TredenceIcon />
        </div>

        <div
          style={{
            padding: '2px',
            backgroundColor: '#F8F9FA',
            borderRadius: '16px',
            boxShadow: '0px 2px 16px 0px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '450px',
            width: '50px',
            position: 'relative',
          }}
        >
          {iconsWithNavigation
            .filter(({ key }) => key !== 'avatar-icon' && key !== 'help-icon')
            .map((icon, index) => (
              <div key={icon.key} onMouseEnter={() => setHoverKey(icon.key)} onMouseLeave={() => setHoverKey(null)}>
                {hoverKey === icon.key && (
                  <div style={{ position: 'absolute', left: 0 }}>
                    <IconOverlay item={icon} hovered={true} />
                  </div>
                )}
                <IconOverlay item={icon} />
              </div>
            ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={logoStyle} onMouseEnter={() => setHoverKey('help-icon')} onMouseLeave={() => setHoverKey(null)}>
            <IconOverlay item={iconsWithNavigation.find((icon) => icon.key === 'help-icon')} />
          </div>
          <div style={logoStyle}>
            <IconOverlay item={iconsWithNavigation.find((icon) => icon.key === 'avatar-icon')} />
          </div>
        </div>
      </div>
    </Sider>
  )
}
