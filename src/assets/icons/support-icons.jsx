import { COLORS } from "../../utils/constants";

export function TredenceIcon({ color = 'default' }) {
    return (
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.4782 0.626737V0.62207H0.523438V3.9054H9.63184V22.8447H13.4062V3.9054H20.493L22.4782 0.626737Z" fill={color !== 'default' ? COLORS[color] : "#FE5000"} />
        </svg>
    )
}
export function HelpIcon({ color = 'default' }) {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="10" stroke={color !== 'default' ? COLORS[color] : "#FE5000"} stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
            <path d="M8.5 9C8.5 7.61929 9.61929 6.5 11 6.5C12.3807 6.5 13.5 7.61929 13.5 9C13.5 10.3807 12.3807 11.5 11 11.5V13.5M11 15V16.5" stroke={color !== 'default' ? COLORS[color] : "#FE5000"} stroke-width="2" />
        </svg>
    )
}
export function AlertIcon({ color = 'default' }) {
    return (
        <svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.87782 13.9025C3.77986 15.8003 3.89248 17.8205 2.22951 19.0922C1.45552 19.684 1 20.6129 1 21.5994C1 22.9564 2.0424 24.1108 3.4 24.1108H22.6C23.9576 24.1108 25 22.9564 25 21.5994C25 20.6129 24.5445 19.684 23.7705 19.0922C22.1075 17.8205 22.2201 15.8003 22.1222 13.9025C21.8668 8.95566 17.8584 5.07812 13 5.07812C8.14157 5.07812 4.13318 8.95566 3.87782 13.9025Z" stroke={color !== 'default' ? COLORS[color] : "#FE5000"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.9961 2.52941C10.9961 3.65564 11.8915 5.07843 12.9961 5.07843C14.1007 5.07843 14.9961 3.65564 14.9961 2.52941C14.9961 1.40318 14.1007 1 12.9961 1C11.8915 1 10.9961 1.40318 10.9961 2.52941Z" stroke={color !== 'default' ? COLORS[color] : "#FE5000"} stroke-width="1.5" />
            <path d="M17.0039 24.1108C17.0039 26.3633 15.213 28.1893 13.0039 28.1893C10.7948 28.1893 9.00391 26.3633 9.00391 24.1108" stroke={color !== 'default' ? COLORS[color] : "#FE5000"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

