import React from 'react'
import { Button, Layout, Typography, Flex } from 'antd'
import { AlertIcon, ReloadIcon } from '../../assets/icons/support-icons'

const { Header } = Layout
const { Text } = Typography

const titleStyle: React.CSSProperties = {
  fontWeight: '600',
  fontSize: '20px',
  color: '#59595A',
  textTransform: 'capitalize',
}

const statusStyle: React.CSSProperties = {
  fontWeight: '400',
  color: '#929497',
}

const iconStyle: React.CSSProperties = {
  position: 'absolute',
  right: '1px',
  top: '-2px',
  height: '16px',
  width: '16px',
  borderRadius: '15px',
  backgroundColor: 'red',
  color: 'white',
}

interface HeaderJSXProps {
  title: string
}

export default function HeaderJSX({ title }: HeaderJSXProps) {
  return (
    <Header
      style={{
        margin: '0 20px 0 20px',
        padding: 0,
        backgroundColor: 'inherit',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Text style={titleStyle}>{title}</Text>
      <Flex gap='10px' align='center'>
        <Flex gap='10px' align='center'>
          <div style={{ cursor: 'pointer' }}>
            <ReloadIcon />
          </div>
          <Text style={statusStyle}>Last Refresh rate - 08:00AM CST, 6th May 2024</Text>
        </Flex>
        <Button icon={<AlertIcon />} type='text' style={{ position: 'relative', padding: '0 8px' }}>
          <span style={iconStyle}>1</span>
        </Button>
      </Flex>
    </Header>
  )
}
