import React, { useState } from 'react'
import { HelpIcon, TredenceIcon, AlertIcon } from '../../assets/icons/support-icons'
import { DynamicInventoryIcon, HomeIcon, IgIcon, InventoryIcon, ParamterInputIcon, SupplyDemandIcon, PolicyPlanningIcon, RecommendationIcon, WhatIfIcon } from '../../assets/icons/sidebar-icons'
import { Layout } from 'antd'
import { Link } from 'react-router-dom'
const { Sider } = Layout

const siderStyle = {
    height: '100vh',
    position: 'sticky',
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thin',
    scrollbarGutter: 'stable',
    backgroundColor: '#F8F9FA',
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
    cursor: 'pointer',
}

const iconStyle = {
    width: '50px',
    height: '50px',
    padding: '4px',
    cursor: 'pointer',
    borderRadius: '0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
}

function SidebarIcons() {
    const [hoverIcon, setHover] = useState(false)
    return (
        [HomeIcon, AlertIcon, SupplyDemandIcon, IgIcon, InventoryIcon, RecommendationIcon, DynamicInventoryIcon, ParamterInputIcon, WhatIfIcon].map(
            (Icon, index) => (
                <Link to='/hi'> <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} key={index} style={iconStyle}><Icon size='100px' color='grey' /></div></Link>
            )
        )
    )
}
export default function SidebarJSX() {
    return (
        <Sider width='80px' style={siderStyle}>
            <div
                style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '24px 0 24px 0',
                }}
            >
                <div style={logoStyle}>
                    <TredenceIcon />
                </div>
                <div
                    style={{
                        padding: '2px',
                        backgroundColor: 'white',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: '0px 2px 16px 0px rgba(0, 0, 0, 0.1)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <SidebarIcons/>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div style={logoStyle}>
                        <HelpIcon color='grey' />
                    </div>
                    <div style={logoStyle}>
                        <HelpIcon color='grey' />
                    </div>
                </div>
            </div>
        </Sider>
    )
}
