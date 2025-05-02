import { COLORS } from '../../utils/constants'

export function TredenceIcon() {
  return (
    <svg width='23' height='23' viewBox='0 0 23 23' fill='inherit' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M22.4782 0.626737V0.62207H0.523438V3.9054H9.63184V22.8447H13.4062V3.9054H20.493L22.4782 0.626737Z'
        fill='#FE5000'
      />
    </svg>
  )
}
export function HelpIcon({ color = 'default' }) {
  return (
    <svg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle
        cx='11'
        cy='11'
        r='10'
        stroke={color !== 'default' ? COLORS[color] : '#FE5000'}
        stroke-width='2'
        stroke-linecap='square'
        stroke-linejoin='round'
      />
      <path
        d='M8.5 9C8.5 7.61929 9.61929 6.5 11 6.5C12.3807 6.5 13.5 7.61929 13.5 9C13.5 10.3807 12.3807 11.5 11 11.5V13.5M11 15V16.5'
        stroke={color !== 'default' ? COLORS[color] : '#FE5000'}
        stroke-width='2'
      />
    </svg>
  )
}
export function AlertIcon({ color = 'default' }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='22' viewBox='0 0 20 22' fill='none'>
      <path
        d='M3.74542 10.6578C3.67467 12.0021 3.75601 13.4331 2.55497 14.3338C1.99598 14.7531 1.66699 15.411 1.66699 16.1098C1.66699 17.071 2.41984 17.8887 3.40032 17.8887H17.267C18.2475 17.8887 19.0003 17.071 19.0003 16.1098C19.0003 15.411 18.6713 14.7531 18.1123 14.3338C16.9113 13.4331 16.9927 12.0021 16.9219 10.6578C16.7375 7.15381 13.8425 4.40723 10.3337 4.40723C6.82479 4.40723 3.92984 7.15381 3.74542 10.6578Z'
        stroke={color !== 'default' ? COLORS[color] : '#59595A'}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M8.88965 2.60189C8.88965 3.39963 9.53635 4.40744 10.3341 4.40744C11.1318 4.40744 11.7785 3.39963 11.7785 2.60189C11.7785 1.80414 11.1318 1.51855 10.3341 1.51855C9.53635 1.51855 8.88965 1.80414 8.88965 2.60189Z'
        stroke={color !== 'default' ? COLORS[color] : '#59595A'}
        stroke-width='1.5'
      />
      <path
        d='M13.2221 17.8892C13.2221 19.4846 11.9287 20.778 10.3332 20.778C8.73774 20.778 7.44434 19.4846 7.44434 17.8892'
        stroke={color !== 'default' ? COLORS[color] : '#59595A'}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  )
}
export function ReloadIcon({ color = 'default' }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none'>
      <path
        d='M11.8055 1V2.87932C11.8055 3.05563 11.5851 3.13545 11.4722 3C10.3736 1.7725 8.777 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13C10.3137 13 13 10.3137 13 7'
        stroke={color !== 'default' ? COLORS[color] : '#929497'}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  )
}
export function AvatarIcon() {
  return (
    <svg width='32' height='33' viewBox='0 0 32 33' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M16 0.750702C7.16437 0.750702 0 7.91367 0 16.75C0 25.5863 7.16367 32.7493 16 32.7493C24.837 32.7493 32 25.5863 32 16.75C32 7.91367 24.837 0.750702 16 0.750702ZM16 5.53468C18.9237 5.53468 21.2928 7.90453 21.2928 10.8268C21.2928 13.7497 18.9237 16.1189 16 16.1189C13.0777 16.1189 10.7086 13.7497 10.7086 10.8268C10.7086 7.90453 13.0777 5.53468 16 5.53468ZM15.9965 28.5662C13.0806 28.5662 10.4099 27.5043 8.35 25.7466C7.8482 25.3186 7.55864 24.691 7.55864 24.0324C7.55864 21.0687 9.9573 18.6968 12.9217 18.6968H19.0797C22.0448 18.6968 24.4343 21.0687 24.4343 24.0324C24.4343 24.6917 24.1462 25.3179 23.6437 25.7459C21.5845 27.5043 18.9131 28.5662 15.9965 28.5662Z'
        fill='#F23901'
      />
    </svg>
  )
}

export function TickAvatar() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60' fill='none'>
      <path
        d='M30 59.8678C46.5686 59.8678 60 46.466 60 29.9339C60 13.4019 46.5686 0 30 0C13.4315 0 0 13.4019 0 29.9339C0 46.466 13.4315 59.8678 30 59.8678Z'
        fill='#24A148'
      />
      <path d='M21 33L26.263 37.6782' stroke='white' stroke-width='5' stroke-linecap='round' />
      <path d='M27 38.0225L39.9698 20.9996' stroke='white' stroke-width='5' stroke-linecap='round' />
    </svg>
  )
}
