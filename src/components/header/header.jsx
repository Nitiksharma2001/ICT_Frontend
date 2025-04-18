import React from 'react'
import { Button, Layout, Typography } from 'antd';
import ReloadOutlined from '@ant-design/icons';
import { AlertIcon } from '../../assets/icons/support-icons';
const { Header } = Layout;
const { Title, Text } = Typography;

export default function HeaderJSX() {
    return (
        <Header style={{ padding: 0, backgroundColor: 'inherit', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Title level={2} style={{ textTransform: 'capitalize' }}>what if analysis</Title>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div>
                    {/* <ReloadOutlined/> */}
                    <Text>Last Refresh rate - 08:00AM CST, 6th May 2024</Text>
                </div>
                <Button size='large' icon={<AlertIcon color='grey' />} />
            </div>
        </Header>
    )
}
