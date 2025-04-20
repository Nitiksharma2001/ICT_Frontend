import { Link } from 'react-router-dom'

export default function IconOverlay({ item, type = 'default' }) {
  const { Icon, title, route } = item

  const iconStyle = {
    height: '50px',
    padding: '13px',
    borderRadius: '15px',

    cursor: 'pointer',
    textTransform: 'capitalize',

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
