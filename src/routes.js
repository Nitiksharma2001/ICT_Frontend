import { createBrowserRouter } from 'react-router-dom'
import { iconsDetails } from './utils/icons'

export const router = createBrowserRouter(
  iconsDetails.map(({ route, component }) => {
    return { path: route, Component: component }
  })
)
