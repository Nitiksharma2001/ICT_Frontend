import { COLORS } from '../../utils/constants'

export function TredenceIcon({ color = 'default' }) {
  return (
    <svg width='23' height='23' viewBox='0 0 23 23' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M22.4782 0.626737V0.62207H0.523438V3.9054H9.63184V22.8447H13.4062V3.9054H20.493L22.4782 0.626737Z'
        fill={color !== 'default' ? COLORS[color] : '#FE5000'}
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
    <svg width='26' height='29' viewBox='0 0 26 29' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M3.87782 13.9025C3.77986 15.8003 3.89248 17.8205 2.22951 19.0922C1.45552 19.684 1 20.6129 1 21.5994C1 22.9564 2.0424 24.1108 3.4 24.1108H22.6C23.9576 24.1108 25 22.9564 25 21.5994C25 20.6129 24.5445 19.684 23.7705 19.0922C22.1075 17.8205 22.2201 15.8003 22.1222 13.9025C21.8668 8.95566 17.8584 5.07812 13 5.07812C8.14157 5.07812 4.13318 8.95566 3.87782 13.9025Z'
        stroke={color !== 'default' ? COLORS[color] : '#FE5000'}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M10.9961 2.52941C10.9961 3.65564 11.8915 5.07843 12.9961 5.07843C14.1007 5.07843 14.9961 3.65564 14.9961 2.52941C14.9961 1.40318 14.1007 1 12.9961 1C11.8915 1 10.9961 1.40318 10.9961 2.52941Z'
        stroke={color !== 'default' ? COLORS[color] : '#FE5000'}
        stroke-width='1.5'
      />
      <path
        d='M17.0039 24.1108C17.0039 26.3633 15.213 28.1893 13.0039 28.1893C10.7948 28.1893 9.00391 26.3633 9.00391 24.1108'
        stroke={color !== 'default' ? COLORS[color] : '#FE5000'}
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
