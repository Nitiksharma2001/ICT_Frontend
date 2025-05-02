import Home from '../../../pages/home/home'
import { Link } from 'react-router-dom'
import { IconType } from '../../../utils/icons'
import { HomeIcon } from '../../../assets/icons/sidebar-icons'
import { GLOBAL_STYLES } from '../../../utils/global-styles'

const baseIcon = { key: 'home', route: '/', Icon: HomeIcon, title: 'home', component: Home }

interface IconOverlayProps {
  item?: IconType
  type?: 'default' | 'clicked' | 'hovered'
  position?: 'relative' | 'absolute' | string
}

export default function IconOverlay({ item = baseIcon, type = 'default', position = 'relative' }: IconOverlayProps) {
  const { Icon, title, route } = item

  const iconStyle: React.CSSProperties = {
    height: GLOBAL_STYLES['icons']['height'],
    padding: '13px',
    borderRadius: '15px',
    cursor: 'pointer',
    textTransform: 'capitalize',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    position: position as React.CSSProperties['position'],
    left: position === 'absolute' ? 14 : undefined,
    zIndex: position === 'absolute' ? 100 : undefined,
  }

  if (type === 'clicked') {
    return (
      <Link
        to={route}
        style={{
          ...iconStyle,
          width: '50px',
          backgroundColor: 'white',
        }}
      >
        {Icon && <Icon color='red' />}
      </Link>
    )
  }

  if (type === 'hovered') {
    return (
      <Link
        to={route}
        style={{
          ...iconStyle,
          backgroundColor: 'red',
        }}
      >
        {Icon && <Icon color='white' />}
        <div style={{ color: 'white', whiteSpace: 'nowrap' }}>{title}</div>
      </Link>
    )
  }

  return (
    <Link
      to={route}
      style={{
        ...iconStyle,
        width: '50px',
        backgroundColor: 'inherit',
      }}
    >
      {Icon && <Icon color='grey' />}
    </Link>
  )
}
