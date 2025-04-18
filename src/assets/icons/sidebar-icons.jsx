import { COLORS } from '../../utils/constants'

export function HomeIcon({ color = 'default' }) {
    return (
        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.33333 19L6.33333 10H11.6667L11.6667 19M1 7.3L9 1L17 7.3L17 17.2C17 17.6774 16.8127 18.1352 16.4793 18.4728C16.1459 18.8104 15.6937 19 15.2222 19L2.77778 19C2.30628 19 1.8541 18.8104 1.5207 18.4728C1.1873 18.1352 1 17.6774 1 17.2L1 7.3Z" stroke={color == 'default' ? "#FFFFFF" : COLORS[color]} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}
export function WhatIfIcon({ color = 'default' }) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.25 2V21.5C2.25 21.5828 2.31716 21.65 2.4 21.65H21.9" stroke="#FE5000" stroke-width="1.5" stroke-linecap="round" />
            <path d="M5.69995 18.7014L11.0033 13.3981C11.2961 13.1052 11.771 13.1052 12.0639 13.3981L15.0531 16.3873C15.346 16.6802 15.8209 16.6802 16.1138 16.3873L21.4171 11.084" stroke="#FE5000" stroke-width="1.5" stroke-linecap="round" />
            <path d="M15 10C17.2092 10 19 8.2092 19 6C19 3.7908 17.2092 2 15 2C12.7908 2 11 3.7908 11 6C11 8.2092 12.7908 10 15 10Z" stroke="#FE5000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.8 4.8C13.8 3.4 16 3.4 16 4.8C16 5.8 15 5.6 15 6.8M15 8.404L15.004 8.3996" stroke={color == 'default' ? "#FE5000" : COLORS[color]} stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}
