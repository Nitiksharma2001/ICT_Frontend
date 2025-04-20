import React from 'react'
import { Button, Layout, Typography, Flex } from 'antd';
import { AlertIcon, ReloadIcon } from '../../assets/icons/support-icons';
const { Header } = Layout;
const { Text } = Typography;

const titleStyle = { fontWeight: '600', fontSize: '20px', color: '#59595A', textTransform: 'capitalize' }
const statusStyle = { fontWeight: '400', fontSize: '12px', color: '#929497' }

export default function HeaderJSX() {
    return (
        <Header style={{ margin: '0 20px 0 20px', padding: 0, backgroundColor: 'inherit', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={titleStyle}>what if analysis</Text>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <div style={{ cursor: 'pointer' }}><ReloadIcon /></div>
                    <Text style={statusStyle}>Last Refresh rate - 08:00AM CST, 6th May 2024</Text>
                </div>
                <Button size='large' icon={<AlertIcon color='grey' />} />
            </div>
        </Header>
    )
}
