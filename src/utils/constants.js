import {
  DynamicInventoryIcon,
  HomeIcon,
  IgIcon,
  ParamterInputIcon,
  PolicyPlanningIcon,
  RecommendationIcon,
  SupplyDemandIcon,
  WhatIfIcon,
} from '../assets/icons/sidebar-icons'
import { AlertIcon, AvatarIcon, HelpIcon } from '../assets/icons/support-icons'
import ParameterInput from '../pages/parameter-input/parameter-input'
import WhatIfAnalysis from '../pages/what-if-analysis/what-if-analysis'

export const COLORS = {
  white: '#FFFFFF',
  black: '#000000',
  grey: '#C6C7C8',
  red: '#FE5000',
}
export const iconsWithNavigation = [
  { key: 'home', route: '/', Icon: HomeIcon, title: 'home', component: ParameterInput },
  { key: 'alerts', route: '/alerts', Icon: AlertIcon, title: 'alerts', component: WhatIfAnalysis },
  {
    key: 'supply-demand-netting',
    route: '/supply-demand-netting',
    Icon: SupplyDemandIcon,
    title: 'supply demand netting',
    component: ParameterInput,
  },
  {
    key: 'ig-characterstics',
    route: '/ig-characterstics',
    Icon: IgIcon,
    title: 'ig characterstics',
    component: ParameterInput,
  },
  {
    key: 'inventory-policy-planning',
    route: '/inventory-policy-planning',
    Icon: PolicyPlanningIcon,
    title: 'inventory policy planning',
    component: ParameterInput,
  },
  {
    key: 'replishment-recommendation',
    route: '/replishment-recommendation',
    Icon: RecommendationIcon,
    title: 'replishment recommendation',
    component: ParameterInput,
  },
  {
    key: 'dynamic-inventory-balancing',
    route: '/dynamic-inventory-balancing',
    Icon: DynamicInventoryIcon,
    title: 'dynamic inventory balancing',
    component: ParameterInput,
  },
  {
    key: 'parameter-input',
    route: '/parameter-input',
    Icon: ParamterInputIcon,
    title: 'parameter input',
    component: ParameterInput,
  },
  {
    key: 'what-if-analysis',
    route: '/what-if-analysis',
    Icon: WhatIfIcon,
    title: 'what if analysis',
    component: ParameterInput,
  },
  { key: 'avatar-icon', route: '/avatar-icon', Icon: AvatarIcon, title: 'avatar icon', component: ParameterInput },
  { key: 'help-icon', route: '/help-icon', Icon: HelpIcon, title: 'help icon', component: ParameterInput },
]
