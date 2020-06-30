import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css'
import { Table, Tag, Popconfirm, message } from 'antd'
import '../../css/orders/OrderBody.css'
import axios from 'axios'
import { IOrder } from '../../interfaces/IOrder'
import { ICompany } from '../../interfaces/ICompany'
import { DeleteOutlined } from '@ant-design/icons'

// component:
// import OrderDetail from './OrderDetail'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

function cancel(e) {
    console.log(e)
    message.error('Hủy thao tác')
}
const product = [
    {
        value: '5ef2bd235822e0cc04d0e849',
        text: 'Yến hồng loại I (50 g)',
    },
    {
        value: 'sssss',
        text: 'Yến hồng I (50 g)',
    },
]

function onChange(pagination: any, filters: any, sorter: any, extra: any) {
    console.log('params', pagination, filters, sorter, extra)
}
// const clearFilters = () => {
//     .setState({ filteredInfo: null })
// }
const data = [
    {
        _id: '5ef5a495224cb8ba206f7299',
        customer: {
            _id: '5ef455f5d5492e117a09e4b5',
            fullName: 'Nguyễn Quốc Cường',
        },
        products: [
            {
                productId: '5ef2bd235822e0cc04d0e848',
                name: 'Yến hồng loại I (100 g)',
                price: 5841000,
                quantity: 2,
                promotionRate: 5,
                donateRate: 15,
                totalAmount: 11682000,
                totalDonate: 1752300,
                isPayment: false,
                isDelivery: false,
                isCancel: false,
                company: {
                    _id: '5ef2bc199c7d4d9feb0f5c6d',
                    name: 'YẾN SÀO BẢO TRÂN',
                },
            },
            {
                productId: '5ef2bd235822e0cc04d0e849',
                name: 'Yến hồng loại I (50 g)',
                price: 2965500,
                quantity: 1,
                promotionRate: 5,
                donateRate: 15,
                totalAmount: 2965500,
                totalDonate: 444825,
                isPayment: false,
                isDelivery: false,
                isCancel: false,
                company: {
                    _id: '5ef2bc199c7d4d9feb0f5c6d',
                    name: 'YẾN SÀO BẢO TRÂN',
                },
            },
            {
                productId: '5ef2bd235822e0cc04d0e848',
                name: 'Yến hồng loại I (100 g)',
                price: 5841000,
                quantity: 2,
                promotionRate: 5,
                donateRate: 15,
                totalAmount: 11682000,
                totalDonate: 1752300,
                isPayment: false,
                isDelivery: false,
                isCancel: true,
                company: {
                    _id: '5ef2bc199c7d4d9feb0f5c6d',
                    name: 'YẾN SÀO BẢO TRÂN',
                },
            },
        ],
        status: 'pending',
        totalAmount: 14647500,
        totalDonate: 2197125,
        orderDate: '2020-06-25',
    },
    {
        _id: '5ef5a495224cb8ba2f7299',
        customer: {
            _id: '5ef455f5d5492e117a09e4b5',
            fullName: 'Đặng Quốc Cường',
        },
        products: [
            {
                productId: '5ef2bd235822e0cc04d0e848',
                name: 'Yến hồng loại I (100 g)',
                price: 5841000,
                quantity: 2,
                promotionRate: 5,
                donateRate: 15,
                totalAmount: 11682000,
                totalDonate: 1752300,
                isPayment: true,
                isDelivery: false,
                isCancel: false,
                company: {
                    _id: '5ef2bc199c7d4d9feb0f5c6d',
                    name: 'YẾN SÀO BẢO TRÂN',
                },
            },

            {
                productId: 'sssss',
                name: 'Yến hồng I (100 g)',
                price: 5841000,
                quantity: 2,
                promotionRate: 5,
                donateRate: 15,
                totalAmount: 11682000,
                totalDonate: 1752300,
                isPayment: false,
                isDelivery: false,
                isCancel: true,
                company: {
                    _id: '5ef2bc199c7d4d9feb0f5c6d',
                    name: 'YẾN SÀO BẢO TRÂN',
                },
            },
        ],
        status: 'processing',
        totalAmount: 15151551,
        totalDonate: 2197125,
        orderDate: '2020-04-25',
    },
]
export default function OrderBody() {
    const [orders, setOrder] = useState<IOrder[]>([])
    // const [companys, setCompany] = useState<ICompany[]>([])
    useEffect(() => {
        axios
            .get('http://192.168.1.15:3000/api/order')
            .then((response) => {
                setOrder(response.data.data.orders)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])
    // useEffect(() => {
    //     axios
    //         .get('http://192.168.1.24:3000/api/company')
    //         .then((response) => {
    //             setCompany(response.data.data.companys)
    //         })
    //         .catch(function (error) {
    //             console.log(error)
    //         })
    // }, [])
    function confirm(orderId: any, productId: any) {
        const result = data.filter(val => val._id === orderId)
        const products = result[0].products.filter((val => val.productId === productId), {

            constructor(props) {
                this.setState = ({ isCancel: true })
            }
        })
        console.log(products);
        message.success('Thành công')
    }
    const columns: any = [
        {
            title: 'STT',
            dataIndex: '_id',
            key: '_id',
            width: '4%',
            render: (_: any, order: any, index: number) => {
                return (
                    <>
                        <Router>
                            <h1 className="detail-order">
                                <Link to={'/orders/' + order._id}>{index + 1}</Link>
                            </h1>
                        </Router>
                    </>
                )
            },
        },
        {
            title: 'Khách Hàng',
            dataIndex: 'customer',
            key: 'customer',
            render: (customer: any) => (
                <div>
                    <a href={'/user/detail/' + customer._id}>
                        <h1>{customer.fullName}</h1>
                    </a>
                </div>
            ),
        },
        {
            title: 'Sản phẩm',
            dataIndex: 'products',
            key: 'products',
            filters: product,
            onFilter: (value: any, record: { products: any[] }) => {
                console.log(value)
                console.log(
                    'object :>> ',
                    record.products.filter((product, index) => product.productId === value).length,
                )
                return record.products.filter((product, index) => product.productId === value).length === 1
            },
            render: (products: any[]) => (
                <>
                    <div className="products-order">
                        <div className="products">
                            {products.map((product) => {
                                return (
                                    <div>
                                        <a href={'/product/detail/' + product._id} className="product">
                                            {product.name}
                                        </a>
                                        <span className="count-price">
                                            <span className="count">{product.quantity} </span>x
                                            <span className="price">
                                                {product.price}
                                                <span>đ</span>
                                            </span>
                                        </span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="money-order">
                        <label>Tổng tiền:</label>
                    </div>
                </>
            ),
        },
        {
            title: 'Trạng thái',
            dataIndex: ['products', 'status'],
            key: 'status',
            width: '5%',
            filters: [
                {
                    value: 'pending',
                    text: 'Hàng đợi',
                },
                {
                    value: 'processing',
                    text: 'Đang sử lý',
                },
                {
                    value: 'completed',
                    text: 'Hoàn thành',
                },
                {
                    value: 'cancel',
                    text: 'Đã hủy',
                },
            ],
            onFilter: (value: any, record: { status: string | any[] }) => record.status.indexOf(value) === 0,
            render: (_: any, order: any) => {
                return (
                    <>
                        <div className="products-status-order">
                            <div className="products-status">
                                {order.products.map((product: any) => {
                                    return (
                                        <div>
                                            <div className="product-status">
                                                {product.isCancel ? (
                                                    <>Đã hủy</>
                                                ) : (
                                                        <>
                                                            <Tag
                                                                className="is-payment"
                                                                color={product.isPayment === true ? '#87d068' : 'green'}
                                                            >
                                                                {product.isPayment === true
                                                                    ? 'Đã chuyển tiền'
                                                                    : 'Chưa thanh toán'}
                                                            </Tag>
                                                            <Tag
                                                                className="is-delivery"
                                                                color={product.isDelivery === true ? '#108ee9' : 'blue'}
                                                            >
                                                                {product.isDelivery === true
                                                                    ? 'Đã giao hàng'
                                                                    : 'Chưa Giao hàng'}
                                                            </Tag>
                                                        </>
                                                    )}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="product-status-order"></div>
                    </>
                )
            },
        },
        {
            title: 'Chức năng',
            dataIndex: 'products',
            key: 'action',
            width: '5%',
            render: (_: any, order: any) => (
                <>
                    <div className="products-action-order">
                        <div className="products-action">
                            {order.products.map((product) => {
                                return (
                                    <div>
                                        <div className="product-action">
                                            {product.isCancel ? (
                                                <>
                                                    <span style={{ width: '102px' }}>_________________</span>
                                                </>
                                            ) : (
                                                    <>
                                                        <Popconfirm
                                                            title="Mặt hàng này đã thanh toán?"
                                                            okText="Yes"
                                                            cancelText="No"
                                                        >
                                                            <Tag
                                                                className="is-payment"
                                                                color={product.isPayment === true ? '' : 'red'}
                                                                style={{
                                                                    border: product.isPayment === true ? '0px' : '',
                                                                }}
                                                            >
                                                                {product.isPayment === false ? 'Thanh toán' : ''}
                                                            </Tag>
                                                        </Popconfirm>
                                                        <Popconfirm
                                                            title="Đã giao sản phẩm này?"
                                                            okText="Yes"
                                                            cancelText="No"
                                                        >
                                                            <Tag
                                                                className="is-delivery"
                                                                color={product.isDelivery === true ? '' : 'blue'}
                                                                style={{
                                                                    border: product.isDelivery === true ? '0px' : '',
                                                                }}
                                                            >
                                                                {product.isDelivery === false ? 'Giao hàng' : ''}
                                                            </Tag>
                                                        </Popconfirm>
                                                        <Popconfirm
                                                            onConfirm={() => confirm(order._id, product.productId)}
                                                            onCancel={cancel}
                                                            title="Hủy mặt hàng này?"
                                                            okText="Yes"
                                                            cancelText="No"
                                                        >
                                                            <Tag
                                                                className="cancel-order"
                                                                style={{
                                                                    display:
                                                                        product.isPayment === true ||
                                                                            product.isDelivery === true
                                                                            ? 'none'
                                                                            : 'block-inline',
                                                                }}
                                                            >
                                                                <DeleteOutlined
                                                                    className="cancel-order"
                                                                    style={{
                                                                        border: product.isCancel === true ? '0px' : '',
                                                                    }}
                                                                />
                                                            </Tag>
                                                        </Popconfirm>
                                                    </>
                                                )}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="product-action-order"></div>
                </>
            ),
        },
        {
            title: 'Thành tiền SP',
            dataIndex: ['products', 'totalAmount'],
            key: 'totalAmout',
            sorter: (a: any, b: any) => a.totalAmount - b.totalAmount,
            render: (_: any, order: any) => {
                return (
                    <>
                        <div className="products-price-order">
                            <div className="products-price">
                                {order.products.map((product: any) => {
                                    return (
                                        <div>
                                            {product.isCancel ? (
                                                <>
                                                    <span className="product-price">________</span>
                                                </>
                                            ) : (
                                                    <>
                                                        <span className="product-price">
                                                            {product.totalAmount}
                                                            <span>đ</span>
                                                        </span>
                                                    </>
                                                )}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="money-total-order">
                            <div>
                                <span className="total-order">
                                    {order.totalAmount}
                                    <span>đ</span>
                                </span>
                            </div>
                        </div>
                    </>
                )
            },
        },
        {
            title: 'Ủng hộ của SP',
            dataIndex: ['products', 'totalDonate'],
            key: 'totalDonate',
            sorter: (a: any, b: any) => a.totalDonate - b.totalDonate,

            render: (_: any, order: any) => {
                return (
                    <>
                        <div className="products-price-order">
                            <div className="products-price">
                                {order.products.map((product: any) => {
                                    return (
                                        <div>
                                            {product.isCancel ? (
                                                <>
                                                    <span className="product-price">________</span>
                                                </>
                                            ) : (
                                                    <>
                                                        <span className="product-price">
                                                            {product.totalDonate}
                                                            <span>đ</span>
                                                        </span>
                                                    </>
                                                )}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="money-total-order">
                            <div>
                                <span className="total-order">
                                    {order.totalDonate}
                                    <span>đ</span>
                                </span>
                            </div>
                        </div>
                    </>
                )
            },
        },
        {
            title: 'Ngày mua',
            dataIndex: 'orderDate',
            key: 'orderDate',
            sorter: (a: any, b: any) => a.orderDate - b.orderDate,
        },
    ]
    return <Table columns={columns} dataSource={data} bordered scroll={{ x: true, y: 1000 }} onChange={onChange} />
}
