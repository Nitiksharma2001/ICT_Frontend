import { ConfigProvider, Layout } from 'antd'
import SidebarJSX from '../components/sidebar/sidebar'
import HeaderJSX from '../components/header/header'
import ModalJSX from '../components/modal/modal'
import { closeModal } from '../redux/modal-slice/modal-slice'
import { useNavigate } from 'react-router-dom'
import type { ReactNode } from 'react'
import type { RootState } from '../redux/store' // adjust if the store type is elsewhere
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { GLOBAL_STYLES } from '../utils/global-styles'

const { Content } = Layout

interface MainWrapperProps {
  children: ReactNode
  title: string
}

export default function MainWrapper({ children, title }: MainWrapperProps) {
  const { isOpen, modalTitle, redirectRoute } = useAppSelector((state: RootState) => state.modal)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  function handleCancel(route: string) {
    dispatch(closeModal())
    navigate(route)
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Poppins',
        },
        components: {
          Table: {
            headerBg: GLOBAL_STYLES['table']['primaryColor'],
            borderColor: GLOBAL_STYLES['table']['primaryColor'],
          },
        },
      }}
    >
      <Layout style={{ backgroundColor: 'white' }} hasSider>
        <SidebarJSX />
        <Layout style={{ backgroundColor: 'inherit' }}>
          <HeaderJSX title={title} />
          <Content
            style={{
              overflow: 'initial',
              padding: '0px 16px 5px 16px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '10px',
            }}
          >
            {children}
          </Content>
        </Layout>
        <ModalJSX isOpen={isOpen} message={modalTitle} handleCancel={() => handleCancel(redirectRoute)} />
      </Layout>
    </ConfigProvider>
  )
}
