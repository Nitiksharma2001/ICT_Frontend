import { createBrowserRouter } from 'react-router-dom'
import { iconsWithNavigation } from './utils/constants'

export const router = createBrowserRouter(
  iconsWithNavigation.map(({ route, component }) => {
    return { path: route, Component: component }
  })
)
