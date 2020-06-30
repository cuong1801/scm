import React from 'react'
import 'antd/dist/antd.css'
import OrderHeader from './OrderHeader'
import OrderBody from './OrderBody'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Layout, PageHeader } from 'antd'
// import { IOrder } from "../../interfaces/IOrder";
const { Header } = Layout
interface Prop{
    page: string
}
export default function Index(prop:Prop) {
    // console.log(prop.page);
    return (
        <Router>
            <Layout style={{ minHeight: '50vh' }}>
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    <PageHeader
                        ghost={false}
                        onBack={() => window.history.back()}
                        title={prop.page}
                    ></PageHeader>
                    <OrderHeader></OrderHeader>
                    <OrderBody></OrderBody>
                </Header>
            </Layout>
        </Router>
    )
}
