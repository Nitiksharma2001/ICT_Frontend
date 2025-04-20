import React from 'react';
import { ConfigProvider } from "antd";
import { Layout } from 'antd';
import SidebarJSX from '../components/sidebar/sidebar';
import HeaderJSX from '../components/header/header';
const { Content } = Layout;

export default function MainWrapper({ children }) {
    return (
        <ConfigProvider
            theme={{
                token: {
                    fontFamily: "Poppins"
                }
            }}
        >
            <Layout style={{ backgroundColor: 'white', height: '100vh' }} hasSider>
                <SidebarJSX />
                <Layout style={{ backgroundColor: 'inherit' }}>
                    <HeaderJSX />
                    <Content style={{ overflow: 'initial', padding: '6px 10px 350px 10px' }}>
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </ConfigProvider>
    );
};
