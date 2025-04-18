import React from 'react';
import { HomeIcon } from '../../assets/icons/sidebar-icons'
import { HelpIcon, TredenceIcon } from '../../assets/icons/support-icons'
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
const { Sider } = Layout;

const siderStyle = {
    overflow: 'auto',
    height: '100vh',
    position: 'sticky',
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thin',
    scrollbarGutter: 'stable',
    backgroundColor: '#F8F9FA',
    display: 'flex',
    justifyContent: 'center',
};

const iconStyle = {
    width: '50px',
    height: '50px',
    padding: '4px',
    gap: '10px',
    angle: "0 deg",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    cursor: 'pointer'
}

const logoStyle = {
    width: '46px',
    height: '44px',
    radius: '10px',
    display: 'flex',
    borderRadius: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    cursor: 'pointer'
}

const items = [HomeIcon, HomeIcon, HomeIcon, HomeIcon, HomeIcon, HomeIcon, HomeIcon].map((Icon, index) =>
    <Link to='/hi' key={index} style={iconStyle}><Icon color='grey' /></Link>,
)

export default function SidebarJSX() {
    return <Sider width='80px' style={{ backgroundColor: 'transparent' }}>

        <div style={{
            height: '100%', width: '54px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '24px 0 24px 0'
        }}>
            <div style={logoStyle}><TredenceIcon /></div>
            <div style={{ backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', padding: '2px', boxShadow: '0px 2px 16px 0px rgba(0, 0, 0, 0.1)' }}> {items} </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={logoStyle}><HelpIcon color='grey' /></div>
                <div style={logoStyle}><HelpIcon color='grey' /></div>
            </div>
        </div>

    </Sider >
}
