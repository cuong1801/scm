import React from 'react'
import 'antd/dist/antd.css'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons'
import Order from '../orders/Order'
import User from '../users/user'
type Prop = {
    page: string
}
const { Header, Sider, Content, Footer } = Layout

export default class LayoutNav extends React.Component {
    state = {
        collapsed: false,
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }

    render() {
        return (
            <Router>
                <Layout>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo" />
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1" icon={<UserOutlined />}>
                                <Link to="/companys">Doanh Nghiệp</Link>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                                <Link to="/products">Sản phẩm</Link>
                            </Menu.Item>
                            <Menu.Item key="3" icon={<UserOutlined />}>
                                <Link to="/users">Người đại diện</Link>
                            </Menu.Item>
                            <Menu.Item key="4" icon={<UploadOutlined />}>
                                <Link to="/orders">Đơn hàng</Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ padding: 0 }}>
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: this.toggle,
                            })}
                        </Header>
                        <Content>
                            <Switch>
                                <Route exact path="/orders" render={() => <Order page="Danh sách đơn hàng"></Order>} />
                                <Route exact path="/users" component={User} />

                                {/* <Route exact path="/products/:id" component={ProductDetail} /> */}
                            </Switch>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Copyright © 2019 S-CHANCE</Footer>
                    </Layout>
                </Layout>
            </Router>
        )
    }
}
