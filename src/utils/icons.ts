import {
  DynamicInventoryIcon,
  DynamicInventoryIconProps,
  HomeIcon,
  IgIcon,
  ParamterInputIcon,
  PolicyPlanningIcon,
  RecommendationIcon,
  SupplyDemandIcon,
  WhatIfIcon,
} from '../assets/icons/sidebar-icons'
import { AlertIcon, AvatarIcon, HelpIcon, TredenceIcon } from '../assets/icons/support-icons'
import ParameterInput from '../pages/parameter-input/parameter-input'
import WhatIfAnalysis from '../pages/what-if-analysis/what-if-analysis'
import SyncScenario from '../pages/what-if-analysis/sync-scenario/sync-scenario'
import ViewDetails from '../pages/what-if-analysis/view-details/view-details'
import ViewParameters from '../pages/what-if-analysis/view-parameters/view-parameters'
import Home from '../pages/home/home'

export type IconType = {
  key: string
  route: string
  title: string
  Icon: React.FC<DynamicInventoryIconProps>
  component: React.FC
}

export const iconsDetails: IconType[] = [
  { key: 'home', route: '/', Icon: HomeIcon, title: 'home', component: Home },
  {
    key: 'alerts',
    route: '/alerts',
    Icon: AlertIcon,
    title: 'alerts',
    component: Home,
  },
  {
    key: 'supply-demand-netting',
    route: '/supply-demand-netting',
    Icon: SupplyDemandIcon,
    title: 'supply demand netting',
    component: Home,
  },
  {
    key: 'ig-characterstics',
    route: '/ig-characterstics',
    Icon: IgIcon,
    title: 'ig characterstics',
    component: Home,
  },
  {
    key: 'inventory-policy-planning',
    route: '/inventory-policy-planning',
    Icon: PolicyPlanningIcon,
    title: 'inventory policy planning',
    component: Home,
  },
  {
    key: 'replishment-recommendation',
    route: '/replishment-recommendation',
    Icon: RecommendationIcon,
    title: 'replishment recommendation',
    component: Home,
  },
  {
    key: 'dynamic-inventory-balancing',
    route: '/dynamic-inventory-balancing',
    Icon: DynamicInventoryIcon,
    title: 'dynamic inventory balancing',
    component: Home,
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
    component: WhatIfAnalysis,
  },
  {
    key: 'sync-scenario',
    route: '/what-if-analysis/sync-scenario',
    Icon: WhatIfIcon,
    title: 'sync scenario',
    component: SyncScenario,
  },
  {
    key: 'view-details',
    route: '/what-if-analysis/view-details/:id',
    Icon: WhatIfIcon,
    title: 'view details',
    component: ViewDetails,
  },
  {
    key: 'view-parameters',
    route: '/what-if-analysis/view-parameters/:id',
    Icon: WhatIfIcon,
    title: 'view parameters',
    component: ViewParameters,
  },
  {
    key: 'avatar-icon',
    route: '/avatar-icon',
    Icon: AvatarIcon,
    title: 'avatar icon',
    component: Home,
  },
  {
    key: 'help-icon',
    route: '/help-icon',
    Icon: HelpIcon,
    title: 'help icon',
    component: Home,
  },
  {
    key: 'tredence-icon',
    route: '/',
    Icon: TredenceIcon,
    title: 'tredence icon',
    component: Home,
  },
]

export const sidebarKeys = [
  'home',
  'alerts',
  'supply-demand-netting',
  'ig-characterstics',
  'inventory-policy-planning',
  'replishment-recommendation',
  'dynamic-inventory-balancing',
  'parameter-input',
  'what-if-analysis',
]
