import { Link, useLocation } from 'react-router-dom'

export default function IconOverlay({ item, hovered = false }) {
  const { Icon, title, route } = item

  const currentRoute = useLocation()['pathname']
  const type = currentRoute === route ? 'clicked' : hovered && 'hovered'

  const iconStyle = {
    height: '50px',
    cursor: 'pointer',
    textTransform: 'capitalize',
    borderRadius: '15px',
    padding: '13px',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
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
        <Icon color='red' />
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
        <Icon color='white' />
        <div style={{ color: 'white', textWrap: 'nowrap' }}>{title}</div>
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
      <Icon color='grey' />
    </Link>
  )
}
